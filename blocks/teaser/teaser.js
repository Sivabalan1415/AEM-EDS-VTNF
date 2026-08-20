export default function decorate(block) {
    
  const firstblock = block.children[0];
  console.log(firstblock);
  firstblock.classList.add("custom-teaser");
  const image = firstblock.querySelector("div:has(img)");
  if (image) {
    console.log(image);
    image.classList.add("custom-teaser-image");
  }
  const content = firstblock.querySelector("div:not(:has(img))");
  if (content) {
    console.log(content);
    content.classList.add("custom-teaser-content");
  }
  const title = firstblock.querySelector("h1");
  if (title) {
    console.log(title);
    title.classList.add("custom-teaser-title");
  }
  const pretitle = firstblock.querySelector("h2,h3,h4,h5,h6");
  if (pretitle) {
    console.log(pretitle);
    pretitle.classList.add("custom-teaser-pretitle");
  }
  const ul = firstblock.querySelector("ul");
  if (ul) {
    console.log(ul);
    ul.classList.add("custom-teaser-listgroup");
  }
  const li = firstblock.querySelectorAll("li");
  if (li) {
    console.log(li);
    li.forEach((item) => {
      item.classList.add("custom-teaser-listitem");
    });
  }
  const description = firstblock.querySelector("p");
  if (description) {
    console.log(description);
    description.classList.add("custom-teaser-description");
  }
}
