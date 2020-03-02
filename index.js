let superSecretPassword = "pass123";

function addToList() {
  //grab the text inside the input field
  // let userText = document.getElementById("user-input").value;
  let input = document.getElementById("user-input");
  let userText = input.value;
  //wrap the text in an `li`
  //add the `li` to the `ul`
  let ul = document.getElementsByTagName("ul")[0];
  ul.innerHTML += "<li>" + "test" + "</li>";
}

// function changeColor() {
  // let myH1 = document.getElementById("my-h1");
  // myH1.style.color = "green";
  // myH1.style.border = "1px solid red"
  // myH1.style.fontSize = "10px"
  // myH1.innerHTML = '<span style="font-size: 1px">Hello World!</span>'
  // myH1.innerText += "a";
  // console.log(myH1.classList);
  // myH1.classList.add("after-click");
  // console.log(myH1.className);
  // myH1.className = "";
  // myH1.classList.remove("test");
  // myH1.classList.remove("test2");
  // myH1.classList.remove("test3");
// }

// console.log(document.getElementsByTagName("h1"))