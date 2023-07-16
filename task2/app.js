
function reverseWords(convert) {
    const words = convert.split(' ');
    const reversedWords = words.reverse();
    const reversedConvert = reversedWords.join(' ');
    return reversedConvert;
  }
  console.log(reverseWords("hello word"));
  console.log(reverseWords("a good example"));
  console.log(reverseWords("Alion GreenHeart"));
  
  
  