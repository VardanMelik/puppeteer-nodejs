const puppeteer = require('puppeteer');

(async () => {
    let movieUrl = 'https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0';
    let adjarabet = 'https://sports.adjarabet.am/en/Sportsbook';
    let godFather = 'https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0';

    // Work with opening Chromium 
    //let browser = await puppeteer.launch({ headless: false});

    // Working without opening browser
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(godFather, { waitUntil: 'networkidle2'});

    let data = await page.evaluate( () => {
        let title = document.querySelector('.title_wrapper h1').innerText;
        let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
        let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
        

        return {
            title,
            rating, ratingCount
        }
    });

    console.log('Data: ' + data.title);
    console.log('Data: ' + data.rating);
    console.log('Data: ' + data.ratingCount);


    await browser.close();
    //debugger;
})();