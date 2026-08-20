export default function decorate(block) {
  const firstblock = block.children[0];
  firstblock.classList.add('custom-teaser');
  const image = firstblock.querySelector('div:has(img)');
  if (image) {
    image.classList.add('custom-teaser-image');
  }
  const content = firstblock.querySelector('div:not(:has(img))');
  if (content) {
    content.classList.add('custom-teaser-content');
  }
  const title = firstblock.querySelector('h1');
  if (title) {
    title.classList.add('custom-teaser-title');
  }
  const pretitle = firstblock.querySelector('h2,h3,h4,h5,h6');
  if (pretitle) {
    pretitle.classList.add('custom-teaser-pretitle');
  }
  const ul = firstblock.querySelector('ul');
  if (ul) {
    ul.classList.add('custom-teaser-listgroup');
  }
  const li = firstblock.querySelectorAll('li');
  if (li) {
    li.forEach((item) => {
      item.classList.add('custom-teaser-listitem');
    });
  }
  const description = firstblock.querySelector('p');
  if (description) {
    description.classList.add('custom-teaser-description');
  }
}
