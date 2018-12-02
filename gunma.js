'use strict';
const convertbtn = document.getElementById('convertbtn');
const textarea = document.getElementById('input_text');
const bottomarea = document.getElementById('bottom');
const resultarea = document.getElementById('resultarea');
const tweetarea = document.getElementById('tweetarea');
const copyarea = document.getElementById('copyarea');


convertbtn.onclick = () => {
    // 変換後の文章表示エリアに子要素がある限り削除
    removeElement(resultarea);

    // 変換後の文章を表示
    const origintext = textarea.value;
    const convertedtext = convertGunma(origintext);

    const add = document.createElement('p');
    add.innerHTML = convertedtext;
    resultarea.appendChild(add);

    // 背景色をつける
    bottomarea.classList.add('iselement');
    
    // ツイートボタンがある限り削除
    removeElement(tweetarea);

    // ツイートボタンの挿入
    const anchor = document.createElement('a');
    const href = "https://twitter.com/intent/tweet?button_hashtag=" + encodeURIComponent('ぐんま変換') + "&ref_src=twsrc%5Etfw";
    anchor.setAttribute('href', href);
    anchor.className = "twitter-hashtag-button";
    anchor.setAttribute('data-text', convertedtext ? convertedtext : 'I love ぐんま♡');
    anchor.innerText = 'Tweet #%E3%81%90%E3%82%93%E3%81%BE%E8%A8%BA%E6%96%AD';
    tweetarea.appendChild(anchor);

    twttr.widgets.load();

    // コピーボタンの挿入
    const button = document.createElement('button');
    button.id = 'copybtn';
    button.innerText = 'クリップボードにコピー';
    copyarea.appendChild(button);

    copybtn.onclick = copyText(convertedtext);
    
};

function removeElement (obj) {
    while (obj.firstChild) {
        obj.removeChild(obj.firstChild);
    }
}

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

function copyText (text) {
    // テキストエリアの挿入
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // コピー
    textarea.select();
    document.execCommand('copy');

    // テキストエリアの削除
    document.body.removeChild(textarea);
}