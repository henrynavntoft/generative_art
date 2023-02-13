let artwork1 = document.querySelector("#artwork1");

for (let i = 100; i <= 300; i += 20) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("box");
  genArtwork.style.width = i + "px";
  genArtwork.style.height = i + "px";
  artwork1.appendChild(genArtwork);
}

let artwork2 = document.querySelector("#artwork2");

for (let i = 0; i <= 90; i += 10) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("box");
  genArtwork.style.transform = "rotate(" + i + "deg)";
  artwork2.appendChild(genArtwork);
}

let artwork3 = document.querySelector("#artwork3");

for (let i = 0; i <= 200; i += 10) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("circle");
  genArtwork.style.width = i + "px";
  genArtwork.style.height = i + "px";
  artwork3.appendChild(genArtwork);
}

let artwork4 = document.querySelector("#artwork4");

for (let i = -90; i <= 90; i += 20) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("box");
  genArtwork.style.transform = "translateX(" + i + "px)";

  artwork4.appendChild(genArtwork);
}

let artwork5 = document.querySelector("#artwork5");

for (let i = 1; i <= 302; i *= 2) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("circle");
  genArtwork.style.width = i + "px";
  genArtwork.style.height = i + "px";
  artwork5.appendChild(genArtwork);
}

let artwork6 = document.querySelector("#artwork6");

for (let i = -20; i <= 45; i += 5) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("circle");
  genArtwork.style.transform = "translate(" + i + "px)";
  genArtwork.style.transform = "rotate(" + i + "deg)";
  artwork6.appendChild(genArtwork);
}

let artwork7 = document.querySelector("#artwork7");

for (let i = 0; i <= 200; i += 10) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("circle");
  genArtwork.style.width = i + "px";
  genArtwork.style.height = i + "px";
  genArtwork.style.transform = "translateX(" + i + "px)";
  artwork7.appendChild(genArtwork);
}

let artwork8 = document.querySelector("#artwork8");

for (let i = 50; i <= 200; i += 10) {
  let genArtwork = document.createElement("div");
  genArtwork.classList.add("box");
  genArtwork.style.width = i + "px";
  genArtwork.style.height = i + "px";
  genArtwork.style.transform = "translateX(" + i + "px)";
  genArtwork.style.transform = "rotate(" + i + "deg)";
  artwork8.appendChild(genArtwork);
}

let artwork9 = document.querySelector("#artwork9");

for (let i = 50; i <= 200; i += 10) {
  let genArtwork = document.createElement("div");
  let genArtwork2 = document.createElement("div");
  genArtwork.classList.add("box");
  genArtwork2.classList.add("circle");
  genArtwork.style.width = i + "px";
  genArtwork.style.height = i + "px";
  genArtwork2.style.width = i + "px";
  genArtwork2.style.height = i + "px";
  artwork9.appendChild(genArtwork);
}
