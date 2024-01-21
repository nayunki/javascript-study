const images = ["1.jpeg", "2.jpeg", "3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = "img/" + chosenImage;
document.body.appendChild(bgImage);
// 함수 안의 경로에 정의한 값을 가장 뒤에 기입함.
// cf. prependChild() : 가장 앞에 삽입