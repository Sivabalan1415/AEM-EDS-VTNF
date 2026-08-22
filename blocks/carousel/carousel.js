export default function decorate(block) {
  const sections = block.parentElement.parentElement.parentElement.children;
  const carouselButton = sections[0];
  const carouselTeaser = sections[1];
  const carouselPreviousNext = sections[2];
  // Carousel buttons
  carouselButton
    ?.querySelector('.block')
    ?.querySelector('div')
    ?.classList.add('carousel-button');
  carouselButton
    ?.querySelector('.carousel-button')
    ?.querySelector('p')
    ?.classList.add('carousel-button-action');
  const links = carouselButton?.querySelectorAll('a');
  links?.forEach((link) => {
    link.classList.add('carousel-button-action-links');
  });
  // Carousel teaser
  const teaser = carouselTeaser?.querySelector('.block');
  const teaserchildren = teaser ? [...teaser.children] : [];
  teaserchildren.forEach((teasers) => {
    teasers.classList.add('carousel-teaser');
    const image = teasers.querySelector('div:has(img)');
    image?.classList.add('carousel-teaser-image');
    image?.querySelector('img')?.classList.add('carousel-teaser-image-image');
    const content = teasers.querySelector('div:not(:has(img))');
    content?.classList.add('carousel-teaser-content');
    const pretitle = teasers.querySelector('h2');
    pretitle?.classList.add('carousel-teaser-title');
    const link = teasers.querySelector('p:has(a)');
    link?.classList.add('carousel-teaser-action');
    link?.querySelector('a')?.classList.add('carousel-teaser-action-link');
    link?.querySelector('a')?.classList.remove('primary', 'button');
    const description = teasers.querySelector('p:not(:has(a))');
    description?.classList.add('carousel-teaser-description');
  });
  // Previous and next buttons
  const tabParent = carouselPreviousNext
    ?.querySelector('.previous-next > div')
    ?.children[1];
  tabParent?.classList.add('carousel-indicator');
  const tabin = tabParent?.querySelectorAll('p');
  tabin?.forEach((indicator) => {
    indicator.classList.add('carousel-indicator-links');
  });
  const tablink = carouselPreviousNext?.querySelectorAll('a');
  const previousButton = tablink?.[0];
  const nextButton = tablink?.[1];
  tablink?.forEach((tablinks) => {
    tablinks.classList.add('carousel-action-links');
    tablinks.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
  let currentIndex = 0;
  // Show the selected teaser
  function showTeaser(index, direction) {
    teaserchildren.forEach((teaserItem, i) => {
      teaserItem.classList.remove(
        'carousel-teaser-active',
        'carousel-teaser-next',
        'carousel-teaser-previous',
      );
      if (i === index) {
        teaserItem.classList.add('carousel-teaser-active');
        if (direction === 'next') {
          teaserItem.classList.add('carousel-teaser-next');
        }
        if (direction === 'previous') {
          teaserItem.classList.add('carousel-teaser-previous');
        }
      }
    });
    links?.forEach((link, i) => {
      link.classList.toggle('carousel-button-action-link-active', i === index);
    });
    // Indicator Active
    tabin?.forEach((indicator, i) => {
      indicator.classList.toggle(
        'carousel-indicator-active',
        i === index,
      );
    });
  }
  // Next button
  nextButton?.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex += 1;
    if (currentIndex >= teaserchildren.length) {
      currentIndex = 0;
    }
    showTeaser(currentIndex, 'next');
  });
  // Previous button
  previousButton?.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = teaserchildren.length - 1;
    }
    showTeaser(currentIndex, 'previous');
  });
  // Carousel tab buttons
  links?.forEach((link, i) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const direction = i > currentIndex ? 'next' : 'previous';
      currentIndex = i;
      showTeaser(currentIndex, direction);
    });
  });
  // Initial teaser
  showTeaser(currentIndex);
}
