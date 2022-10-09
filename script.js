const randomeQuotestore = [
  {
    text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  },
  {
    text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
  },
  {
    text: "Life is what happens to us while we are making other plans.",
  },
  {
    text: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
  },
  {
    text: "Sometimes the questions are complicated and the answers are simple.",
  },
];
//Without text area
const handleCopyTextFromArea = () => {
  const copyTextArea = document.getElementById("clipboard-area");
  copyTextArea.select();
  document.execCommand("copy");
};

//With text area
const handleCopyTextFromParagraph = () => {
  const body = document.querySelector("body");
  const paragraph = document.querySelector("p");
  const area = document.createElement("textarea");

  area.select();
  body.appendChild(area);
  area.value = paragraph.innerHTML;

  // Copy the text inside the text field
  navigator.clipboard.writeText(area.value); //  //   document.execCommand("copy");-this is also work

  body.removeChild(area);
  alert("Copied the text: " + area.value); // Alert the copied text
};

function myMoveFunction() {
  const paragraph = document.querySelector("p");
  let randomNumber = Math.floor(Math.random() * 23);
  console.log(randomNumber);
  paragraph.innerHTML = randomeQuotestore[randomNumber].text;
}
