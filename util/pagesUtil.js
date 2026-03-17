import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('public/pages/frontpage/index.html');

const lektion1 = readPage('./public/pages/lektioner/lektion1.html');

const lektion2 = readPage('./public/pages/lektioner/lektion2.html');

const lektion3 = readPage('./public/pages/lektioner/lektion3.html');

const lektion4 = readPage('./public/pages/lektioner/lektion4.html');

const lektion5 = readPage('./public/pages/lektioner/lektion5.html');

const lektion6 = readPage('./public/pages/lektioner/lektion6.html');

const contact = readPage('./public/pages/contact/contact.html');

const about = readPage('./public/pages/about/about.html');

export const frontpagePage = constructPage(frontpage, {
    cssLinks: '<link rel="stylesheet" href="./public/assets/css/homepage.css"></link>'
});

export const lektion1Page = constructPage(lektion1, 'lektion 1');

export const lektion2Page = constructPage(lektion2, 'lektion 2');

export const lektion3Page = constructPage(lektion3, 'lektion 3');

export const lektion4Page = constructPage(lektion4, 'lektion 4');

export const lektion5Page = constructPage(lektion5, 'lektion 5');

export const lektion6Page = constructPage(lektion6, 'lektion 6');

export const contactPage = constructPage(contact, 'contact');

export const aboutPage = constructPage(about, 'about');
