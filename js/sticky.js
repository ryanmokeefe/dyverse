function handleStickies(stickies) {
  const scroll = window.pageYOffset;
  for (let i = 0; i < stickies.length; i++) {
    if (
      scroll > stickies[i].top &&
      (i == stickies.length - 1 ||
        scroll < stickies[i + 1].top)
    ) {
      stickies[i].element.classList.add("sticking");
    } else {
      stickies[i].element.classList.remove("sticking");
    }
  }
}

const stickyNames = ["title1"] //, "title2"];
stickies = stickyNames
  .map(name => {
    const element = document.getElementById(name);
    console.log(element);
    return {
      element,
      top: element.getBoundingClientRect().top + window.scrollY
    };
  })
  .sort((a, b) => {
    return a.top - b.top;
  });

// const stickies = document.getElementsByClassName("sticky");

window.onscroll = () => handleStickies(stickies);
