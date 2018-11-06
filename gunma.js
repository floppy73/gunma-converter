'use strict';
const convertbtn = document.getElementById('convertbtn');
const textarea = document.getElementById('input_text');
const resultarea = document.getElementById('resultarea');
const tweetarea = document.getElementById('tweetarea');


convertbtn.onclick = () => {
    while (resultarea.firstChild) {
        resultarea.removeChild(resultarea.firstChild);
    }

    const origintext = textarea.value;
    const convertedtext = convertGunma(origintext);

    const add = document.createElement('p');
    add.innerHTML = convertedtext;
    resultarea.appendChild(add);
    
    
    while (tweetarea.firstChild) {
        tweetarea.removeChild(tweetarea.firstChild);
    }
    const anchor = document.createElement('a');
    const href = "https://twitter.com/intent/tweet?button_hashtag=" + encodeURIComponent('ぐんま変換') + "&ref_src=twsrc%5Etfw";
    anchor.setAttribute('href', href);
    anchor.className = "twitter-hashtag-button";
    anchor.setAttribute('data-text', convertedtext);
    anchor.innerText = 'Tweet #ぐんま変換';
    tweetarea.appendChild(anchor);

    twttr.widgets.load();
};

function convertGunma (str) {
    const reversed = str.split("").reverse().join("");
    const replaced = reversed.replace(/([。？！])/g, "$1dfb6f722");
    const replacedorigin = replaced.split("").reverse().join("");
    const splited = replacedorigin.split('227f6bfd');
    const resultArray = [];
    for (let i = 0; i < splited.length; i++) {
        let target = splited[i];
        if (target === "。" || target === "！" || target === "？") {
            resultArray.push(target);
        } else {
            const joined = target + 'ぐんま';
            resultArray.push(joined);
        }
    }
    return resultArray.join("");
}
