const displayMenu = () => {
    const content = document.querySelector('#content');

    const menuImg = document.createElement('img');
    menuImg.setAttribute('src', './images/wood-background.jpg');
    menuImg.setAttribute('alt', 'white-wood-background');
    menuImg.classList.add('menu-background');

    // menu title
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-title');

    const roundDesign = document.createElement('div');
    roundDesign.classList.add('round-design');
    menuSection.appendChild(roundDesign);
    
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'MENU';
    menuSection.appendChild(menuTitle);
    
    const menuRestaurantTitle = document.createElement('div');
    menuRestaurantTitle.classList.add('menu-restaurant-title');
    menuSection.appendChild(menuRestaurantTitle);
    
    const lineStyling1 = document.createElement('div');
    lineStyling1.classList.add('line-styling');
    menuRestaurantTitle.appendChild(lineStyling1);
    
    const h4 = document.createElement('h4');
    h4.textContent = 'RAMEN RHAPSODY';
    menuRestaurantTitle.appendChild(h4);

    const lineStyling2 = document.createElement('div');
    lineStyling2.classList.add('line-styling');
    menuRestaurantTitle.appendChild(lineStyling2);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('down-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', 'M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z');
    path.setAttribute('fill', '#628a3a');
    svg.appendChild(path);
    menuSection.appendChild(svg);

    //menu gallery
    const menuGallery = document.createElement("section");
    menuGallery.classList.add("menu-gallery");

    // shoyu
    const shoyuDetails = document.createElement("div");
    shoyuDetails.classList.add("dish-details");

    const shoyuName = document.createElement("p");
    shoyuName.classList.add("dish-name");
    shoyuName.textContent = "Shoyu Ramen";

    const shoyuLine = document.createElement("div");
    shoyuLine.classList.add("line-styling");

    const shoyuDescription = document.createElement("p");
    shoyuDescription.classList.add("description");
    shoyuDescription.textContent = "A ramen compared to a salty symphony - with each ingredient playing a different note, but the soy sauce taking center stage. It's the secret ingredient that brings all the flavors together in perfect harmony, like a maestro conducting a delicious orchestra.";

    shoyuDetails.appendChild(shoyuName);
    shoyuDetails.appendChild(shoyuLine);
    shoyuDetails.appendChild(shoyuDescription);

    const shoyuImage = document.createElement("div");
    shoyuImage.classList.add("dish-image");

    const shoyuImg = document.createElement("img");
    shoyuImg.setAttribute("src", "./images/shoyu.jpg");
    shoyuImg.setAttribute("alt", "shoyu ramen");

    shoyuImage.appendChild(shoyuImg);

    menuGallery.appendChild(shoyuDetails);
    menuGallery.appendChild(shoyuImage);

    // spicy beef
    const spicyBeefImage = document.createElement("div");
    spicyBeefImage.classList.add("dish-image");

    const spicyBeefImg = document.createElement("img");
    spicyBeefImg.setAttribute("src", "./images/spicy-beef.jpg");
    spicyBeefImg.setAttribute("alt", "spicy beef ramen");

    spicyBeefImage.appendChild(spicyBeefImg);

    const spicyBeefDetails = document.createElement("div");
    spicyBeefDetails.classList.add("dish-details");

    const spicyBeefName = document.createElement("p");
    spicyBeefName.classList.add("dish-name");
    spicyBeefName.textContent = "Spicy Beef Ramen";

    const spicyBeefLine = document.createElement("div");
    spicyBeefLine.classList.add("line-styling");

    const spicyBeefDescription = document.createElement("p");
    spicyBeefDescription.classList.add("description");
    spicyBeefDescription.textContent = "A rollercoaster ride in a bowl - with twists and turns of savory beef, chewy noodles, and a spicy broth that'll have you screaming for more. Just be sure to buckle up and hold onto your chopsticks, it's one spicy adventure you won't forget.";

    spicyBeefDetails.appendChild(spicyBeefName);
    spicyBeefDetails.appendChild(spicyBeefLine);
    spicyBeefDetails.appendChild(spicyBeefDescription);

    menuGallery.appendChild(spicyBeefImage);
    menuGallery.appendChild(spicyBeefDetails);

    // shio
    const shioDetails = document.createElement("div");
    shioDetails.classList.add("dish-details");

    const shioName = document.createElement("p");
    shioName.classList.add("dish-name");
    shioName.textContent = "Shio Ramen";

    const shioLine = document.createElement("div");
    shioLine.classList.add("line-styling");

    const shioDescription = document.createElement("p");
    shioDescription.classList.add("description");
    shioDescription.textContent = "Shio ramen is like a breath of fresh air - light, crisp, and oh so satisfying. Its chicken broth base is the perfect complement to its simple yet delicious flavor, making it a noodle dish that you can enjoy anytime, anywhere.";

    shioDetails.appendChild(shioName);
    shioDetails.appendChild(shioLine);
    shioDetails.appendChild(shioDescription);

    const shioImage = document.createElement("div");
    shioImage.classList.add("dish-image");

    const shioImg = document.createElement("img");
    shioImg.setAttribute("src", "./images/shio.jpg");
    shioImg.setAttribute("alt", "shio ramen");

    shioImage.appendChild(shioImg);

    menuGallery.appendChild(shioDetails);
    menuGallery.appendChild(shioImage);

    // ichiraku 
    const ichirakuImage = document.createElement("div");
    ichirakuImage.classList.add("dish-image");

    const ichirakuImg = document.createElement("img");
    ichirakuImg.setAttribute("src", "./images/ichiraku.webp");
    ichirakuImg.setAttribute("alt", "ichiraku ramen");

    ichirakuImage.appendChild(ichirakuImg);

    const ichirakuDetails = document.createElement("div");
    ichirakuDetails.classList.add("dish-details");

    const ichirakuName = document.createElement("p");
    ichirakuName.classList.add("dish-name");
    ichirakuName.textContent = "Ichiraku Ramen";

    const ichirakuLine = document.createElement("div");
    ichirakuLine.classList.add("line-styling");

    const ichirakuDescription = document.createElement("p");
    ichirakuDescription.classList.add("description");
    ichirakuDescription.textContent = "It's like a warm hug from your favorite anime character. This ramen will let you feel like you're living your own personal anime moment. It's a noodle dish that's so flavorful, you'll swear you can hear the catchy theme song playing in the background.";

    ichirakuDetails.appendChild(ichirakuName);
    ichirakuDetails.appendChild(ichirakuLine);
    ichirakuDetails.appendChild(ichirakuDescription);

    menuGallery.appendChild(ichirakuImage);
    menuGallery.appendChild(ichirakuDetails);

    //tonkotsu
    const tonkotsuDetails = document.createElement("div");
    tonkotsuDetails.classList.add("dish-details");

    const tonkotsuName = document.createElement("p");
    tonkotsuName.classList.add("dish-name");
    tonkotsuName.textContent = "Tonkotsu Ramen";

    const tonkotsuLine = document.createElement("div");
    tonkotsuLine.classList.add("line-styling");

    const tonkotsuDescription = document.createElement("p");
    tonkotsuDescription.classList.add("description");
    tonkotsuDescription.textContent = "Tonkotsu ramen is like a bowl of liquid gold - except instead of precious minerals, you're slurping up rich, creamy pork broth that's been simmered to perfection for hours. It's so good, you might even start speaking in pig latin after your first bite!";

    tonkotsuDetails.appendChild(tonkotsuName);
    tonkotsuDetails.appendChild(tonkotsuLine);
    tonkotsuDetails.appendChild(tonkotsuDescription);

    const tonkotsuImage = document.createElement("div");
    tonkotsuImage.classList.add("dish-image");

    const tonkotsuImg = document.createElement("img");
    tonkotsuImg.setAttribute("src", "/images/tonkotsu.jpg");
    tonkotsuImg.setAttribute("alt", "tonkotsu ramen");

    tonkotsuImage.appendChild(tonkotsuImg);

    menuGallery.appendChild(tonkotsuDetails);
    menuGallery.appendChild(tonkotsuImage);

    content.appendChild(menuImg);
    content.appendChild(menuSection);
    content.appendChild(menuGallery);
    }

    export { displayMenu };