import { Router } from 'express';
import { 
    frontpagePage, lektion1Page, lektion2Page, lektion3Page,
    lektion4Page, lektion5Page, lektion6Page, contactPage, aboutPage
        } from '../util/pagesUtil.js';

const router = Router();


router.get('/', (req, res) => {
    res.send(frontpagePage);
});

router.get('/lektion1', (req, res) => {
    res.send(lektion1Page);
});

router.get('/lektion2', (req, res) => {
    res.send(lektion2Page);
});

router.get('/lektion3', (req, res) => {
    res.send(lektion3Page);
});

router.get('/lektion4', (req, res) => {
    res.send(lektion4Page);
});

router.get('/lektion5', (req, res) => {
    res.send(lektion5Page);
});

router.get('/lektion6', (req, res) => {
    res.send(lektion6Page);
});

router.get('/contact', (req, res) => {
    res.send(contactPage);
});
 
router.get('/about', (req, res) => {
    res.send(aboutPage);
});


export default router;

