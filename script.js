let apiName = "https://trefle.io/api";
let apiEndpoint = "/v1/plants/search?";
let apiKey = "token=T9VQ2jhm4d1YJ4442_N8m1xa5JPr97q8f5nV1NJEyOM&q=coconut";
let plantSearchBtn = document.getElementById("plant-search-btn");
let popupSearch = document.getElementById("popup-search");
let closeButton = document.getElementById("close-button");

let url = (apiName + apiEndpoint + apiKey);

async function fetchFunction(url) {
  const response = await fetch(url);
  console.log(ok);
}

plantSearchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popupSearch.style.display = "block";
});

closeButton.addEventListener("click", function (event) {
  popupSearch.style.display = "none";
});
