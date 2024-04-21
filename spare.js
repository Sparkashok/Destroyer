let womensBtn = document.querySelector(".Womens"); // Corrected class name
let mensBtn = document.querySelector(".mens"); // Renamed variable to avoid clash
let kidsBtn = document.querySelector(".kids");
let sportBtn = document.querySelector(".sport");
let womensList = document.querySelector(".womens-list");
let womensItems = document.querySelector(".womens-items");
const loadWomensImages = () => {
    const images = [
        `<div class="imageslider"><button class="preImage">&#10094</button></div>
        <div class="womensitems">
            <img src="images/women/w-hoddie.png" class="Mens1 p-category1">`,
        `<img src="images/women/w-pant.png" class="Mens1 p-category2">`,
        `<img src="images/women/skirt.png" class="Mens1 p-category3">`,
        `<img src="images/women/shirt.png" class="Mens1 p-category4">
        </div>
        <div class="imageslider"><button class="froImage">&#10095</button></div>`
    ];

    womensList.innerHTML = images.join("");
    womensBtn.style.backgroundColor = "black";
    mensBtn.style.backgroundColor = '#008CBA';
    kidsBtn.style.backgroundColor = '#f44336';
    sportBtn.style.backgroundColor = '#4636f4';
    hoverAnimation();
    let fromImageButton = document.querySelector(".froImage");
    fromImageButton.addEventListener("click", () => {
        const womenFromimgs = [
            `<div class="womensitems">
            <div class="imageslider"><button class="preImage1">&#10094</button></div>
                <img src="images/women/w-saree.png" class="Mens1 p-category1">`,
            `<img src="images/women/w-bra.png" class="Mens1 p-category2">`,
            `<img src="images/women/w-skirt1.png" class="Mens1 p-category3">`,
            `<img src="images/women/w-kurta.png" class="Mens1 p-category4">
            <div class="imageslider"><button class="froImage">&#10095</button></div>
            </div>`
        ];
        womensList.innerHTML = womenFromimgs.join("");
        preImageBtn = document.querySelector(".preImage1");
        preImageBtn.addEventListener("click", () => {
            womensList.innerHTML = images.join("");
        });

    });
    
    let see = document.querySelector(".seeMore");
    see.addEventListener("click", () => {
        see.setAttribute("href", "http://127.0.0.1:5501/Destroyer/womens.html");
    });
}



const loadMensImages = () => { // Renamed function to avoid clash and corrected image names
    const images = [
        `<div class="mens-items">
            <img src="images/mens/m-pant.png" class="Mens1">`, // Enclosed image names in quotes
        `<img src="images/mens/m-hoodie.png" class="Mens2">`,
        `<img src="images/mens/m-tee.png" class="Mens3">`,
        `<img src="images/mens/kurta.png" class="Mens4">
        </div>`
    ];

    womensList.innerHTML = images.join("");
    mensBtn.style.backgroundColor = "black";
    womensBtn.style.backgroundColor = 'rgb(232, 157, 170)';
    kidsBtn.style.backgroundColor = '#f44336';
    sportBtn.style.backgroundColor = '#4636f4';

    let see = document.querySelector(".seeMore");
    console.log("mensimages");
    see.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5501/Destroyer/mens.html";
    })
    console.log("mensimages");
}

const loadKidsImages = () => { // Renamed function to avoid clash and corrected image names
    const images = [
        `<div class="kids-items">
            <img src="images/kids/kid-pant.png" class="Mens1">`, // Enclosed image names in quotes
        `<img src="images/kids/kid-hoodie.png" class="Mens2">`,
        `<img src="images/kids/kid-tee.png" class="Mens3">`,
        `<img src="images/kids/kid-kurta.png" class="Mens4">
        </div>`
    ];
    womensList.innerHTML = images.join("");
    kidsBtn.style.backgroundColor = "black";
    mensBtn.style.backgroundColor = '#008CBA';
    womensBtn.style.backgroundColor = 'rgb(232, 157, 170)';
    sportBtn.style.backgroundColor = '#4636f4';
    let see = document.querySelector(".seeMore");

    see.addEventListener("click", () => {
        see.setAttribute("href", "http://127.0.0.1:5501/Destroyer/kids.html");
    })
}

const loadsportImages = () => { // Renamed function to avoid clash and corrected image names
    const images = [
        `<div class="sport-items">
            <img src="images/kids/kid-hoodie.png" class="Mens1">`, // Enclosed image names in quotes
        `<img src="images/kids/kid-pant.png" class="Mens2">`,
        `<img src="images/kids/kid-kurta.png" class="Mens3">`,
        `<img src="images/kids/kid-tee.png" class="Mens4">
        </div>`
    ];
    womensList.innerHTML = images.join("");
    sportBtn.style.backgroundColor = "black";
    mensBtn.style.backgroundColor = '#008CBA';
    womensBtn.style.backgroundColor = 'rgb(232, 157, 170)';
    kidsBtn.style.backgroundColor = '#f44336';
    let see = document.querySelector(".seeMore");

    see.addEventListener("click", () => {
        see.setAttribute("href", "http://127.0.0.1:5501/Destroyer/sport.html");
    })
}
function timeoffer() {
    let offerTime = document.querySelector(".offer-time");
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);
    let timeRemaining = `${hours}:${minutes}:${seconds}`;
    document.querySelector(".offer-time").innerHTML = timeRemaining;
}

timeoffer();
setInterval(timeoffer, 1000);


function hoverAnimation() {
    let animati1 = document.querySelector(".p-category1");
    animati1.addEventListener("mouseover", event => {
        event.target.src = "images/women/w-grey-hoodie.png";
    })
    animati1.addEventListener("mouseout", event => {
        event.target.src = "images/women/w-hoddie.png";
    })
    let animati2 = document.querySelector(".p-category2");
    animati2.addEventListener("mouseover", event => {
        event.target.src = "images/women/w-pant1.png";
    })
    animati2.addEventListener("mouseout", event => {
        event.target.src = "images/women/w-pant.png";
    })
    let animati3 = document.querySelector(".p-category3");
    animati3.addEventListener("mouseover", event => {
        event.target.src = "images/women/w-grey-hoodie.png";
    })
    animati3.addEventListener("mouseout", event => {
        event.target.src = "images/women/skirt.png";
    })
    let animati4 = document.querySelector(".p-category4");
    animati4.addEventListener("mouseover", event => {
        event.target.src = "images/women/w-grey-hoodie.png";
    })
    animati4.addEventListener("mouseout", event => {
        event.target.src = "images/women/shirt.png";
    })
}
hoverAnimation();









