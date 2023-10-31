
let image = document.getElementById("bannerimage");
let images = ['dazzle.png', 'banner1.png', 'banner2.png', 'banner3.png'];
setInterval(function () {
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];

}, 2000)


let quotes = document.getElementById("quote-container");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            console.log(item.content);
            console.log(item.author);
            // item.content.style.color="red";
            quotes.innerText = item.content;
            author.innerText = item.author;
            // quotes.style.color="red";
            quotes.style.fontSize = "20px";

        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);


let jokes = document.getElementById("joke-content");
// let author=document.getElementById("author");
let jokebtn = document.getElementById("jokebtn");
let category = document.getElementById("joke-category");
// const url="";


let getJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(data => data.json())
        .then(item => {
            console.log(item);
            category.innerText = item.category;
            category.style.fontSize = "25px";
            category.style.color = "purple";
            category.style.marginTop = "60px";
            category.style.marginLeft = "100px";
            jokes.textContent = `${item.joke}`;
            jokes.style.fontSize = "23px";
            jokes.style.marginTop = "60px";
            // jokes.style.marginLeft = "5px";
            jokes.style.marginRight = "10px";

        });
}
// getJokes();

window.addEventListener("load", getJokes);
jokebtn.addEventListener("click", getJokes);
let heart = document.getElementById("heart");
let likes = document.getElementById("like");
heart.addEventListener("click", () => {
    heart.classList.add("heartliked");
    // likes.classList.remove("liked");

})
likes.addEventListener("click", () => {
    likes.classList.add("liked");
    // heart.classList.remove("heartliked");
})
let refresh = document.getElementById("refresh");
function removeLike() {
    likes.classList.remove("liked");
    heart.classList.remove("heartliked");
}

refresh.onclick = removeLike;
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.getElementById("closeBtn");

// Show the pop-up when the login button is clicked
loginBtn.addEventListener("click", function () {
    loginPopup.style.display = "block";
});

// Close the pop-up when the close button is clicked
closeBtn.addEventListener("click", function () {
    loginPopup.style.display = "none";
});

// Close the pop-up if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
});

let happySongs = document.getElementById("happy-songs");
let chillSongs=document.getElementById("chill-songs");
let energeticSongs=document.getElementById("energetic-songs");
let songsContainer = document.getElementById("songs-container")
happySongs.addEventListener("click", () => {
    songsContainer.style.fontSize = "20px";
    // songsContainer.style.textAlign = "center";
    songsContainer.style.paddingTop = "20px";
    songsContainer.style.paddingLeft = "60px";
    songsContainer.innerText = "Here are some happy songs for you";
    // songsContainer.innerText="<br>";
    var list = document.createElement('ol');
    var listItem1 = document.createElement('li');
    var listItem2 = document.createElement('li');
    var listItem3 = document.createElement('li');
    list.style.marginTop="30px";
    // Add text to the list items
    listItem1.textContent = 'Item 1';
    listItem2.textContent = 'Item 2';
    listItem3.textContent = 'Item 3';

    // Append list items to the list
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);

    // Append the list to the container
    songsContainer.appendChild(list);
})
chillSongs.addEventListener("click", () => {
    songsContainer.style.fontSize = "20px";
    // songsContainer.style.textAlign = "center";
    songsContainer.style.paddingTop = "20px";
    songsContainer.style.paddingLeft = "60px";
    songsContainer.innerText = "Here are some chill songs for you";
    // songsContainer.innerText="<br>";
    var list = document.createElement('ol');
    var listItem1 = document.createElement('li');
    var listItem2 = document.createElement('li');
    var listItem3 = document.createElement('li');
    list.style.marginTop="30px";
    // Add text to the list items
    listItem1.textContent = 'Item 1';
    listItem2.textContent = 'Item 2';
    listItem3.textContent = 'Item 3';

    // Append list items to the list
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);

    // Append the list to the container
    songsContainer.appendChild(list);
})
energeticSongs.addEventListener("click", () => {
    songsContainer.style.fontSize = "20px";
    // songsContainer.style.textAlign = "center";
    songsContainer.style.paddingTop = "20px";
    songsContainer.style.paddingLeft = "60px";
    songsContainer.innerText = "Here are some energetic songs for you";
    // songsContainer.innerText="<br>";
    var list = document.createElement('ol');
    var listItem1 = document.createElement('li');
    var listItem2 = document.createElement('li');
    var listItem3 = document.createElement('li');
    list.style.marginTop="30px";
    // Add text to the list items
    listItem1.textContent = 'Item 1';
    listItem2.textContent = 'Item 2';
    listItem3.textContent = 'Item 3';

    // Append list items to the list
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);

    // Append the list to the container
    songsContainer.appendChild(list);
})
function redirectSongs(){
    
}