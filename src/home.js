const displayHome = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');

    // Hero section
    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heroBackground = document.createElement('img');
    heroBackground.setAttribute('src', './images/main-background.png');
    heroBackground.setAttribute('alt', 'spicy-beef-ramen-background');
    heroBackground.classList.add('hero-background');

    const headline = document.createElement('h1');
    headline.classList.add('headline');
    headline.textContent = 'Ultimate Comfort Food For Your Soul';

    const subHeadline = document.createElement('p');
    subHeadline.classList.add('sub-headline');
    subHeadline.textContent = 'Discover the taste of Japan with our authentic ramen bowls, from the rich and savory broth to the perfectly cooked noodles that will leave you wanting more. Our chefs use only the freshest ingredients to ensure that every bite is packed with flavor and texture. Come and experience the taste of Japan, right in your own city!';

    const heroLineStyle = document.createElement('div');
    heroLineStyle.classList.add('line-styling');

    heroSection.appendChild(heroBackground);
    heroSection.appendChild(headline);
    heroSection.appendChild(subHeadline);
    heroSection.appendChild(heroLineStyle);

    // About Us section
    const aboutUsSection = document.createElement('section');
    aboutUsSection.classList.add('about-us');

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details-column');

    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.textContent = 'About Us';

    const p1 = document.createElement('p');
    p1.textContent = "Welcome to Ramen Rhapsody Restaurant! We're a team dedicated to serving authentic, high-quality ramen. From our homemade noodles to our rich, flavorful broth, every dish is crafted with care and attention to detail. Our goal is to transport you to the streets of Japan with every slurp, so come and experience the warmth and hospitality of our Ramen Restaurant.";
    const p2 = document.createElement('p');
    p2.textContent = 'We invite you to join us and taste the difference that comes from using only the freshest ingredients and traditional techniques.';

    const aboutUsLineStyle = document.createElement('div');
    aboutUsLineStyle.classList.add('line-styling');

    const aboutUsImg = document.createElement('img');
    aboutUsImg.setAttribute('src', './images/about-us.jpg');
    aboutUsImg.setAttribute('alt', 'chef-cooking');

    detailsDiv.appendChild(aboutUsTitle);
    detailsDiv.appendChild(p1);
    detailsDiv.appendChild(p2);
    detailsDiv.appendChild(aboutUsLineStyle);

    aboutUsSection.appendChild(detailsDiv);
    aboutUsSection.appendChild(aboutUsImg);

    // Specialties Section 
    const specialtiesSection = document.createElement('section');
    specialtiesSection.classList.add('specialties');

    const specialtiesBackground = document.createElement('img');
    specialtiesBackground.setAttribute('src', './images/sub-background.png');
    specialtiesBackground.setAttribute('alt', 'ramen-background');
    specialtiesBackground.classList.add('specialties-background');

    const specialtiesMain = document.createElement('main');

    const specialtiesTitle = document.createElement('h1');
    specialtiesTitle.textContent = 'Our Specialties';

    const specialtiesText = document.createElement('p');
    specialtiesText.textContent = 'Each dish has been carefully crafted and perfected to highlight the unique flavors and ingredients that make it truly exceptional. Explore our menu!';

    const dishGallery = document.createElement('div');
    dishGallery.classList.add('dish-gallery');

    const specialty1 = document.createElement('div');
    specialty1.classList.add('specialty-container');
    const imgSpecialty1 = document.createElement('img');
    imgSpecialty1.setAttribute('src', './images/shoyu.jpg');
    imgSpecialty1.setAttribute('alt', 'shoyu ramen');
    const specialtyP1 = document.createElement('p');
    specialtyP1.textContent = 'Shoyu Ramen';
    specialty1.appendChild(imgSpecialty1);
    specialty1.appendChild(specialtyP1);

    const specialty2 = document.createElement('div');
    specialty2.classList.add('specialty-container');
    const imgSpecialty2 = document.createElement('img');
    imgSpecialty2.setAttribute('src', './images/spicy-beef.jpg');
    imgSpecialty2.setAttribute('alt', 'spicy beef ramen');
    const specialtyP2 = document.createElement('p');
    specialtyP2.textContent = 'Spicy Beef Ramen';
    specialty2.appendChild(imgSpecialty2);
    specialty2.appendChild(specialtyP2);

    const specialty3 = document.createElement('div');
    specialty3.classList.add('specialty-container');
    const imgSpecialty3 = document.createElement('img');
    imgSpecialty3.setAttribute('src', './images/tonkotsu.jpg');
    imgSpecialty3.setAttribute('alt', 'tonkotsu ramen');
    const specialtyP3 = document.createElement('p');
    specialtyP3.textContent = 'Tonkotsu Ramen';
    specialty3.appendChild(imgSpecialty3);
    specialty3.appendChild(specialtyP3);

    dishGallery.appendChild(specialty1);
    dishGallery.appendChild(specialty2);
    dishGallery.appendChild(specialty3);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu-btn');
    menuButton.textContent = 'Menu';

    specialtiesMain.appendChild(specialtiesTitle);
    specialtiesMain.appendChild(specialtiesText);
    specialtiesMain.appendChild(dishGallery);
    specialtiesMain.appendChild(menuButton);

    specialtiesSection.appendChild(specialtiesBackground);
    specialtiesSection.appendChild(specialtiesMain);

    content.appendChild(heroSection);
    content.appendChild(aboutUsSection);
    content.appendChild(specialtiesSection);
}

export { displayHome };