const paragraph = document.getElementById("paragraph");
const paratext = paragraph.innerText;
const para = paratext.split(" ");
// console.log(para);
let answer = para.map((word) => {
  if (word.length > 8) {
    return `<span style ="background-color:yellow;">${word}</span>`;
  } else {
    return word;
  }
});
let ans = answer.join(" ");
paragraph.innerHTML = ans;
