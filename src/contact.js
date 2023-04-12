const displayContact = () => {
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
    menuTitle.textContent = 'CONTACT';
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

    // contact page
    const contactSection = document.createElement("section");
    contactSection.classList.add('contact-page');

    const img = document.createElement("img");
    img.src = "./images/restaurant.jpg";
    img.alt = "restaurant";
    contactSection.appendChild(img);

    const div = document.createElement("div");
    div.classList.add('contact-info');
    contactSection.appendChild(div);

    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.classList.add('contact-icon');
    svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg1.setAttribute("fill", "#689B36");
    svg1.setAttribute("viewBox", "0 0 32 32");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z");
    svg1.appendChild(path1);
    div.appendChild(svg1);

    const p1 = document.createElement("p");
    p1.textContent = "+0123 4567 8910";
    div.appendChild(p1);

    div.appendChild(svg1);
    div.appendChild(p1);

    const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg2.classList.add('contact-icon');
    svg2.setAttribute("viewBox", "0 0 24 24");
    svg2.setAttribute("fill", "none");

    const path2a = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2a.setAttribute("d", "M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z");
    path2a.setAttribute("fill", "#689B36");

    const path2b = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2b.setAttribute("d", "M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z");
    path2b.setAttribute("fill", "#689B36");

    svg2.appendChild(path2a);
    svg2.appendChild(path2b);

    const p2 = document.createElement("p");
    p2.textContent = "pastaoriginalnotfake@gmail.com";
    div.appendChild(p2);

    div.appendChild(svg2);
    div.appendChild(p2);

    const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg3.classList.add('contact-icon');
    svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg3.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg3.setAttribute("version", "1.0");
    svg3.setAttribute("id", "Layer_1");
    svg3.setAttribute("viewBox", "0 0 64 64");
    svg3.setAttribute("enable-background", "new 0 0 64 64");
    svg3.setAttribute("xml:space", "preserve");

    const path3a = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3a.setAttribute("fill", "#689B36");
    path3a.setAttribute("d", "M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24  C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24  C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z");

    svg3.appendChild(path3a);

    const p3 = document.createElement("p");
    p3.textContent = '#97 Ohayo Street, Normandy City, Moscow, USA';
    div.appendChild(p3);

    div.appendChild(svg3);
    div.appendChild(p3);

    content.appendChild(menuImg);
    content.appendChild(menuSection);
    content.appendChild(contactSection);
}

export { displayContact };