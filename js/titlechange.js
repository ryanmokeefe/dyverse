const title = document.getElementById("rotating-title");
const subtitle = document.getElementById("subtitle");
let i = 0;

const titleText = [
  "Web Design",
  "Photography",
  "Video Production ",
  "Promotions ",
  "Event Planning ",
  "Concierge ",
  "Emergency Awesomeness ",
  "Getting shit done "
];

const iterate = setInterval(() => {
  if (i === titleText.length) {
    clearInterval(iterate);
    title.innerHTML = "Special Inquiries";
    title.style.fontSize = '10rem';
    setTimeout(() => {
        subtitle.classList.add('cta');
      subtitle.innerHTML = "Let's make it happen.";
    }, 1000);
  } else {
    title.innerHTML += titleText[i] + " ";
    i++;
  }
}, 500);
