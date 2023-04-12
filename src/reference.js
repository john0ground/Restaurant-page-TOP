const displaySources = () => {
    const content = document.querySelector('#content');

    const sourcesBackground = document.createElement("img");
    sourcesBackground.classList.add("sources-background");
    sourcesBackground.src = "images/sub-background.png";
    sourcesBackground.alt = "ramen-background";
    content.appendChild(sourcesBackground);

    const section = document.createElement("section");
    section.classList.add("sources-section");

    const sourceListDiv = document.createElement("div");
    sourceListDiv.classList.add("source-list");

    const uiuxP = document.createElement("p");
    uiuxP.textContent = "UI / UX";
    const uiuxUl = document.createElement("ul");
    const uiuxLinks = [
      "https://nicepage.com/st/23176/fine-oriental-restaurant-website-template",
      "https://xdfile.com/foodie-restaurant-xd-website-template/",
    ];
    for (const link of uiuxLinks) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.textContent = link;
      li.appendChild(a);
      uiuxUl.appendChild(li);
    }
    sourceListDiv.appendChild(uiuxP);
    sourceListDiv.appendChild(uiuxUl);

    const imagesP = document.createElement("p");
    imagesP.textContent = "Images";
    const imagesUl = document.createElement("ul");
    const imagesLinks = [
      "https://www.pexels.com/photo/cooked-noodles-on-ceramic-bowl-1907229/",
      "https://unsplash.com/photos/4NQEvxW2_4w",
      "https://commons.wikimedia.org/wiki/File:Shoyu_Ramen.jpg",
      "https://unsplash.com/photos/EWDvHNNfUmQ",
      "https://www.pexels.com/photo/brown-wooden-table-with-chairs-4083586/",
    ];
    for (const link of imagesLinks) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.textContent = link;
      li.appendChild(a);
      imagesUl.appendChild(li);
    }
    sourceListDiv.appendChild(imagesP);
    sourceListDiv.appendChild(imagesUl);

    section.appendChild(sourceListDiv);
    content.appendChild(section);
}

export { displaySources }