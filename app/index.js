import axios from "axios";
import * as cheerio from "cheerio";

// import express, { response } from "express";
// const app = express();
// app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));

const PORT = 48011;
const url = 'https://wiki.metalevel.tech/wiki/Home';

const itemsList = [];

axios(url)
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    
        $('.CategoryTreeSection > .CategoryTreeItem',).each(function() {
        const title = $(this).text().trim().replace(/(\&shy;|­|&#173;)/gi, "");
        const url = $(this).find('a').attr('href');
        itemsList.push({
            title,
            url
        })
    });
    
    console.log(itemsList);
})
.catch(error => console.log(error));
