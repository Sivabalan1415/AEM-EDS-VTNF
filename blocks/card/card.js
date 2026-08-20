export default function decorate(block) {
  const cards = [...block.children];
  cards.forEach((card) => {
    card.classList.add("medical-card");
    const title = card.querySelector("h2");
    console.log(title);
    title?.classList.add("medical-card-title");
    const pretitle = card.querySelector("h3,h4,h5,h6");
    console.log(pretitle);
    pretitle?.classList.add("medical-card-pretitle");
    const image = card.querySelector("p:has(img)");
    console.log(image);
    image?.classList.add("medical-card-image");
    const imageImg = image?.querySelector("img");
    imageImg?.classList.add("medical-card-image-img");
    const description = card.querySelector("p:not(:has(img))");
    console.log(description);
    description?.classList.add("medical-card-description");
  });
}
