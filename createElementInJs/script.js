class CreateElement {
  createDiv() {
    let mainContainer = document.getElementById("main-container");
    let divInMain = document.createElement("div");
    divInMain.classList = "greet";
    divInMain.innerText = "Greetings!";
    mainContainer.appendChild(divInMain);
  }
}

new CreateElement().createDiv();
