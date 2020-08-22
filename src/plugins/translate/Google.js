import axios from "axios";

class Google {
  generateTK(a, b, c) {

    b = Number(b) || 0;
    let e = [];
    let f = 0;
    let g = 0;
    for (; g < a.length; g++) {
      let l = a.charCodeAt(g);
      128 > l ? (e[f++] = l):
        (2048 > l ? (e[f++] = (l >> 6) | 192):
          (55296 === (l & 64512) && g + 1 < a.length && 56320 === (a.charCodeAt(g + 1) & 64512)? ((l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023)),
              (e[f++] = (l >> 18) | 240),
              (e[f++] = ((l >> 12) & 63) | 128))
            : (e[f++] = (l >> 12) | e224),
            (e[f++] = ((l >> 6) & 63) | 128)),
          (e[f++] = (l & 63) | 128));
    }
    a = b;
    for (f = 0; f < e.length; f++) {
      (a += e[f]), (a = this.magic(a, '+-a^+6'));
    }
    a = this.magic(a, '+-3^+b+-f');
    a ^= Number(c) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1e6;
    return a.toString() + '.' + (a ^ b);
  }
  magic(a, b) {
    for (let c = 0; c < b.length - 2; c += 3) {
      let d = b.charAt(c + 2);
        d = 'a' <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = '+' === b.charAt(c + 1) ? a >>> d : a << d;
        a = '+' === b.charAt(c) ? (a + d) & 4294967295 : a ^ d;
    }
    return a;
  }
  parseData(response, extras) {
    let result = extras ? extras : new Object();

    for (let i = 0; i < response.length; i++) {
      if (response[i]) {
        let items = response[i];
        switch (i) {
          case 0:
            let mainMeanings = [];
            let originalTexts = [];
            let lastIndex = items.length - 1;

            for (let j = 0; j <= lastIndex; j++) {
              mainMeanings.push(items[j][0]);
              originalTexts.push(items[j][1]);
            }

            result.mainMeaning = mainMeanings.join('');
            result.originalText = originalTexts.join('');
            try {
              if (
                lastIndex > 0 &&
                items[lastIndex].length > 3 &&
                items[lastIndex][3].length > 0
              ) {
                result.phoneticSymbol = items[lastIndex][3];
                // console.log("phonetic symbol: " + result.phoneticSymbol);
              }
            } catch (error) {
              // eslint-disable-next-line no-console
              console.log(error);
            }
            // console.log("text: " + result.originalText + "\nmeaning: " + result.mainMeaning);
            break;
          // 单词的所有词性及对应的意思
          case 1:
            result.detailedMeanings = new Array();
            result.detailedMeaningArr = new Array();
            items.forEach(item => {
              result.detailedMeanings.push({ type: item[0], meaning: item[1].join(', ') });
              result.detailedMeaningArr.push({ type: item[0], meaning: item[1] });
            });
            // console.log("detailedMeanings: " + JSON.stringify(result.detailedMeanings));
            break;
          case 2:
            result.sourceLanguage = items;
            // console.log(result.sourceLanguage);
            break;
          // 单词或句子的常见意思（单词的常见意思，句子的所有可能意思）
          case 5:
            if (items.length <= 1) {
              let meaningArray = new Array();
              items[0][2].forEach(item => meaningArray.push(item[0]));
              result.commonMeanings = meaningArray.join(', ');
              result.commonMeaningsArr = meaningArray;
              // console.log("commonMeanings: " + result.commonMeanings);
            }
            break;
          // 单词的同义词，根据词性分组
          case 11:
            result.synonyms = new Array();
            items.forEach(item => {
              let element = new Object();
              element.type = item[0];
              element.words = new Array();
              item[1].forEach(words => element.words.push(words[0].join(', ')));
              result.synonyms.push(element);
            });
            // console.log("synonyms: " + JSON.stringify(result.synonyms));
            break;
          // 单词的定义及对应例子
          case 12:
            result.definitions = new Array();
            items.forEach(item => {
              let definition = new Object();
              definition.type = item[0];
              definition.meanings = new Array();
              item[1].forEach(element =>
                definition.meanings.push({ meaning: element[0], example: element[2] })
              );
              result.definitions.push(definition);
            });
            // console.log("definitions: " + JSON.stringify(result.definitions));
            break;
          // 单词的例句
          case 13:
            result.examples = new Array();
            items.forEach(item =>
              item.forEach(element => result.examples.push(element[0]))
            );
            // console.log("examples: " + JSON.stringify(result.examples));
            break;
          // 单词构成的常见短语
          case 14:
            result.phrases = items[0];
            // console.log("phrases: " + JSON.stringify(result.phrases));
            break;
          default:
            break;
        }
      }
    }
    return result;
  };
}

export default Google;
