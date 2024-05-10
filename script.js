// Define an array of star signs details
var starSigns = [

    {

        name: "Aries",

	image:"images/aries.jpg",

        element: "Fire",

        dates: "March 21 - April 19",

        traits: ["Energetic", "Determined", "Confident"],

        description: "Aries loves to be number one."

        },

        {

        name: "Taurus",

        image:"images/taurus.jpg",

        element: "Earth",

        dates: "April 20 - May 20",

        traits: ["Reliable", "Patient", "Practical"],

        description: "Taureans enjoy relaxing in serene"

        },

        {

        name: "Gemini",

        image:"images/gemini.jpg",

        element: "Air",

        dates: "May 21 - June 20",

        traits: ["Adaptable", "Versatile", "Curious"],

        description: "Spontaneous, playful, and adorably erratic"

        },

        {

        name: "Cancer",

        image:"images/cancer.jpg",

        element: "Water",

        dates: "June 21 - July 22",

        traits: ["Intuition", "Empathy", "Wisdom"],

        description: "Cancers are highly intuitive and their psychic abilities"

        },

        {

        name: "Leo",

        image:"images/leo.jpg",

        element: "Fire",

        dates: "July 23 - August 22",

        traits: ["Leadership", "Integrity", "Boldness"],

        description: "Passionate, loyal, and infamously dramatic"

        },

        {

        name: "Virgo",

        image:"images/virgo.jpg",

        element: "Earth",

        dates: "August 23 - September 22",

        traits: ["Pragmatism", "Resourcefulness", "Mind-body awareness"],

        description: "Virgos are logical, practical, and systematic in their approach to life"

        },

        {

        name: "Libra",

        image:"images/libra.jpg",

        element: "Air",

        dates: "September 23 - October 22",

        traits: ["Rationality", "Diplomacy", "Good aesthetic tastes"],

        description: "Balance, harmony, and justice define Libra energy"

        },

        {

        name: "Scorpio",

        image:"images/scorpio.jpg",

        element: "Water",

        dates: "October 23 - November 21",

        traits: ["Magnetism", "Stoicism", "Honesty"],

        description: "Cultivating powerful wisdom through both the physical and unseen realms"

        },

        {

        name: "Sagittarius",

        image:"images/sagittarius.jpg",

        element: "Fire",

        dates: "November 22 - December 21",

        traits: ["Confidence", "Spontaneity", "Optimism"],

        description: "Sagittarians are always on a quest for knowledge"

        },

        {

        name: "Capricorn",

        image:"images/capricorn.jpg",

        element: "Earth",

        dates: "December 22 - January 19",

        traits: ["Confidence", "Spontaneity", "Optimism"],

        description:"Capricorn is climbing the mountain straight to the top"

        },

        {

        name: "Aquarius",

        image:"images/aquarius.jpg",

        element: "Air",

        dates: "January 20 - February 18",

        traits: ["Selflessness", "Objectivity", "Teamwork"],

        description:"Aquarius is dedicated to making the world a better place"

        },

        {

        name: "Pisces",

        image:"images/pisces.jpg",

        element:"Water",

        dates: "February 19 - March 20",

        traits: ["Creativity", "Compassion", "Storytelling"],

        description:"Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac"

        }

];
// Get the DOM element with the id "starSignsList"
const starSignsList = document.getElementById("starSignsList");
// Define an empty string for the image path
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
// Iterate over each element in the 'starSigns' array
starSigns.forEach(sign => {
    const listItem = document.createElement("div");
    // Set the class name of the div to 'starSignItem'
    listItem.className = "starSignItem";
    // Create a new <img> element for the star sign image
    const imgItem = document.createElement("img");
    // Set the src attribute of the image using the imagePath and sign.image
    imgItem.src = `${imagePath}${sign.image}`;
    // Create a new <div> element for the star sign dates
    const datesElement = document.createElement("div");
    // Set the text content of the dates element to the sign's dates
    datesElement.textContent = `${sign.dates}`;
    // Set the class name of the div to 'dates'
    datesElement.className = "dates";

    // Generate a random fortune message from the 'fortunes' array
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    // Add the random fortune to the sign object
    sign.fortune = randomFortune;
    // Append the image and dates elements to the listItem div
    listItem.appendChild(imgItem);
    listItem.appendChild(datesElement);
    
    // Add a click event listener to the listItem to open the details window
    listItem.addEventListener("click", () => openDetailsWindow(sign));
    // Append the listItem to the starSignsList
    starSignsList.appendChild(listItem);
});


 // Function to open a new window with details of the sign
function openDetailsWindow(sign) {
    // Open a new window with the sign details
    const detailsWindow = window.open( sign, target="_blank");

    // HTML content for the details window
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
    // Write the HTML content to the new window
    detailsWindow.document.write(html);
}
 
