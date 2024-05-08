
var starSigns = [

    {

        name: "Aries",

		image:"images/aries.jpg",

        element: "Fire",

        dates: "March 21 - April 19",

        traits: ["Energetic", "Determined", "Confident"],

        description: "lorem ipsum text"

        },

        {

        name: "Taurus",

        image:"images/taurus.jpg",

        element: "Earth",

        dates: "April 20 - May 20",

        traits: ["Reliable", "Patient", "Practical"],

        description: "lorem ipsum text"

        },

        {

        name: "Gemini",

        image:"images/gemini.jpg",

        element: "Air",

        dates: "May 21 - June 20",

        traits: ["Adaptable", "Versatile", "Curious"],

        description: "lorem ipsum text"

        },

        {

        name: "Cancer",

        image:"images/cancer.jpg",

        element: "Water",

        dates: "June 21 - July 22",

        traits: ["Intuition", "Empathy", "Wisdom"],

        description: "lorem ipsum text"

        },

        {

        name: "Leo",

        image:"images/leo.jpg",

        element: "Fire",

        dates: "July 23 - August 22",

        traits: ["Leadership", "Integrity", "Boldness"],

        description: "lorem ipsum text"

        },

        {

        name: "Virgo",

        image:"images/virgo.jpg",

        element: "Earth",

        dates: "August 23 - September 22",

        traits: ["Pragmatism", "Resourcefulness", "Mind-body awareness"],

        description: "lorem ipsum text"

        },

        {

        name: "Libra",

        image:"images/libra.jpg",

        element: "Air",

        dates: "September 23 - October 22",

        traits: ["Rationality", "Diplomacy", "Good aesthetic tastes"],

        description: "lorem ipsum text"

        },

        {

        name: "Scorpio",

        image:"images/scorpio.jpg",

        element: "Water",

        dates: "October 23 - November 21",

        traits: ["Magnetism", "Stoicism", "Honesty"],

        description: "lorem ipsum text"

        },

        {

        name: "Sagittarius",

        image:"images/sagittarius.jpg",

        element: "Fire",

        dates: "November 22 - December 21",

        traits: ["Confidence", "Spontaneity", "Optimism"],

        description: "lorem ipsum text"

        },

        {

        name: "Capricorn",

        image:"images/capricorn.jpg",

        element: "Earth",

        dates: "December 22 - January 19",

        traits: ["Confidence", "Spontaneity", "Optimism"],

        description:"lorem ipsum text"

        },

        {

        name: "Aquarius",

        image:"images/aquarius.jpg",

        element: "Air",

        dates: "January 20 - February 18",

        traits: ["Selflessness", "Objectivity", "Teamwork"],

        description:"lorem ipsum text"

        },

        {

        name: "Pisces",

        image:"images/pisces.jpg",

        element:"Water",

        dates: "February 19 - March 20",

        traits: ["Creativity", "Compassion", "Storytelling"],

        description:"lorem ipsum text"

        }

];



/*const starSignsList = document.getElementById("starSignsList");
const imagePath = "";

 starSigns.forEach(sign => {
    const listItem = document.createElement("div");
    listItem.className = "starSignItem";

    const imgItem = document.createElement("img");
    imgItem.src = `${imagePath}${sign.image}`;

    listItem.appendChild(imgItem);
    listItem.addEventListener("click", () => openDetailsWindow(sign));
    starSignsList.appendChild(listItem);


})*/
/*const starSignsList = document.getElementById("starSignsList");
const imagePath = "";

starSigns.forEach(sign => {
    const listItem = document.createElement("div");
    listItem.className = "starSignItem";

    const imgItem = document.createElement("img");
    imgItem.src = `${imagePath}${sign.image}`;

    const datesElement = document.createElement("div");
    datesElement.textContent = `${sign.dates}`;
    datesElement.className = "dates";

    listItem.appendChild(imgItem);
    listItem.appendChild(datesElement);

    listItem.addEventListener("click", () => openDetailsWindow(sign));
    starSignsList.appendChild(listItem);
});*/
const starSignsList = document.getElementById("starSignsList");
const imagePath = "";

// Define an array of random fortunes
var fortunes = [
  "Good fortune is coming your way!",
  "Be cautious today, luck may not be on your side.",
  "Expect unexpected blessings.",
  "Your creativity will lead to success.",
  "Take risks, they will pay off handsomely.",
  "Stay focused and you'll achieve your goals."
];

starSigns.forEach(sign => {
    const listItem = document.createElement("div");
    listItem.className = "starSignItem";

    const imgItem = document.createElement("img");
    imgItem.src = `${imagePath}${sign.image}`;

    const datesElement = document.createElement("div");
    datesElement.textContent = `${sign.dates}`;
    datesElement.className = "dates";

    // Generate a random fortune message
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    /*
    const fortuneElement = document.createElement("div");
    fortuneElement.textContent = randomFortune;
    fortuneElement.className = "fortune";*/
    sign.fortune = randomFortune;

    listItem.appendChild(imgItem);
    listItem.appendChild(datesElement);
    /*listItem.appendChild(fortuneElement);*/

    listItem.addEventListener("click", () => openDetailsWindow(sign));
    starSignsList.appendChild(listItem);
});


 
function openDetailsWindow(sign) {
    const detailsWindow = window.open( sign, target="_blank");
 
    const html = `
        <html>
            <head>
                <title>${sign.name} Details</title>
                
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');
                body {
                    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #2361d5);
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                    color:white;
                    font-family:'Noto', sans-serif;
                }
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                h2{text-align:center;margin:50px 0 0 0; font-size:30px;}
                img{display:block;margin: 30px auto 0 auto;}
                p{text-align:center;}
                img{border-style: double;}
                </style>
            </head>
            <body>
                <h2 id="signname">${sign.name}</h2>
				<img src=${imagePath}${sign.image} />
                <p id="element"><strong>Element : </strong> ${sign.element}</p>
                <p id="dates"><strong>Dates : </strong> ${sign.dates}</p>
                <p id="traits"><strong>Traits : </strong> ${sign.traits.join(", ")}</p>
                <p id="description"><strong>Description : </strong> ${sign.description}</p>
                <p id="fortunes"><strong>Todays Fortune : </strong>${sign.fortune}</p>
            </body>
        </html>
    `;
 
    detailsWindow.document.write(html);
}
 