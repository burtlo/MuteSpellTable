/* global browser */
// console.log("muteSpellTable looking for play table!");

rootDiv = document.getElementById("root")

let playTableObserver = new MutationObserver(mutations => {
  for(let mutation of mutations) {
    // console.log(mutation);

    if (mutation.nextSibling && mutation.nextSibling.className === "absolute bottom-0 inset-x-0 p-4 flex justify-between items-center") {
      mutation.nextSibling.querySelector("button").click();
      playTableObserver.disconnect();
    }
  }
});

playTableObserver.observe(rootDiv, { childList: true, subtree: true });
