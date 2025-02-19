const express = require('express');
const router = express.Router();

const aboutData = {
    paragraph: 
    "Hello! I'm Nabiha Siddique. I was born in Dhaka, Bangladesh, and raised in New York City for the majority of my life. My interests include traveling, volleyball, badminton, graphic design, architecture, and photography. I currently attend NYU Tandon School of Engineering as a computer science major and business management minor. At Tandon, I am involved in the Metaverse for Education team, the General Engineering department, the Society of Asian Engineers and Scientists (SASE), and the Global Leaders and Scholars in STEM (GLASS) honors program. ",
    imageUrl: "http://localhost:7002/images/headshot.png"
};

router.get('/', (req, res) => {
    res.json(aboutData);
});

module.exports = router;
