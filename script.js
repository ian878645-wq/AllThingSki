// Basic JavaScript for AllThingsSki webpage

// Function to display information
function readInformation() {
    alert("Welcome to the slopes! Ready to ski?");
}
function findLocations() {
    alert("Find the best ski locations around the world!");
}
function takeQuiz() {
    alert("take the quiz");
}

function changeBackground() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
}

// Filler functions for filter dropdowns
function filterBySkill(value) {
    console.log('Filtering by skill level: ' + value);
    alert('Filtering results by skill level: ' + value);
}

function filterByLocation(value) {
    console.log('Filtering by location: ' + value);
    alert('Filtering results by location: ' + value);
}

function filterBySeason(value) {
    console.log('Filtering by season: ' + value);
    alert('Filtering results by season: ' + value);
}

document.addEventListener('DOMContentLoaded', function() {
    // Creating buttons
    const infoButton = document.createElement('button');
    infoButton.textContent = 'Read ski information!';
    infoButton.style.padding = '30px 60px';
    infoButton.style.width = '300px';
    infoButton.style.height = '200px';
    infoButton.style.margin = '40px';
    infoButton.style.backgroundColor = '#1304e8';
    infoButton.style.color = 'white';
    infoButton.style.border = '2px solid #000';
    infoButton.style.borderRadius = '5px';
    infoButton.style.cursor = 'pointer';
    infoButton.style.fontSize = '32px';

    const mapButton = document.createElement('button');
    mapButton.textContent = 'Find ski locations!';
    mapButton.style.padding = '30px 60px';
    mapButton.style.width = '300px';
    mapButton.style.height = '200px';
    mapButton.style.margin = '40px';
    mapButton.style.backgroundColor = '#3003e4';
    mapButton.style.color = 'white';
    mapButton.style.border = '2px solid #000';
    mapButton.style.borderRadius = '5px';
    mapButton.style.cursor = 'pointer';
    mapButton.style.fontSize = '32px';

    const quizButton = document.createElement('button');
    quizButton.textContent = 'Take the ski quiz!';
    quizButton.style.padding = '30px 60px';
    quizButton.style.width = '300px';
    quizButton.style.height = '200px';
    quizButton.style.margin = '40px';
    quizButton.style.backgroundColor = '#0804ef';
    quizButton.style.color = 'white';
    quizButton.style.border = '2x solid #000';
    quizButton.style.borderRadius = '5px';
    quizButton.style.cursor = 'pointer';
    quizButton.style.fontSize = '32px';


    mapButton.addEventListener('click', function() {
        findLocations();
    });

    quizButton.addEventListener('click', function() {
        takeQuiz();
    }); 

    // Add click event to the button
    infoButton.addEventListener('click', function() {
        readInformation();
    });

    // Append the buttons to the bottom section
    const bottomSection = document.querySelector('.bottom-section');
    bottomSection.appendChild(infoButton);
    bottomSection.appendChild(mapButton);
    bottomSection.appendChild(quizButton);

    // Add event listeners for filter dropdowns
    document.getElementById('dropdown1').addEventListener('change', function() {
        if (this.value) {
            filterBySkill(this.value);
        }
    });

    document.getElementById('dropdown2').addEventListener('change', function() {
        if (this.value) {
            filterByLocation(this.value);
        }
    });

    document.getElementById('dropdown3').addEventListener('change', function() {
        if (this.value) {
            filterBySeason(this.value);
        }
    });
});

