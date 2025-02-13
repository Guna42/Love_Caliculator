function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (!name1 || !name2) {
        alert("Please enter both names!");
        return;
    }

    // Reset the love meter and result
    document.getElementById("meter-fill").style.width = "0";
    document.getElementById("percentage").innerText = "";
    document.getElementById("message").innerText = "";
    document.getElementById("suggestion").innerText = "";
    document.getElementById("story").innerText = "";
    document.getElementById("submit-btn").style.display = "none";

    // Simulate a loading animation
    setTimeout(() => {
        document.getElementById("meter-fill").style.width = "100%";
    }, 100);

    // Calculate love percentage
    setTimeout(() => {
        const loveScore = Math.floor(Math.random() * 101); // Random score for fun
        document.getElementById("percentage").innerText = `${loveScore}%`;

        // Display a message based on the score
        let message = "";
        let suggestion = "";
        if (loveScore > 90) {
            message = "😍 Soulmates! You're perfect for each other! ❤️";
            suggestion = "Plan a romantic date tonight!";
        } else if (loveScore > 70) {
            message = "😊 Amazing match! Love is in the air! 💕";
            suggestion = "Spend more quality time together!";
        } else if (loveScore > 50) {
            message = "😉 Good chemistry! Keep exploring! 💖";
            suggestion = "Try new activities together!";
        } else if (loveScore > 30) {
            message = "🤔 Not bad, but there's room for improvement! 💞";
            suggestion = "Communicate more openly!";
        } else {
            message = "😢 Maybe just friends? 💔";
            suggestion = "Take things slow and see where it goes!";
        }
        document.getElementById("message").innerText = message;
        document.getElementById("suggestion").innerText = suggestion;

        // Generate a love story
        const stories = [
            `${name1} and ${name2} met under the stars and instantly fell in love. They spent their days laughing and their nights dreaming together. ❤️`,
            `One day, ${name1} saw ${name2} across the room and felt their heart skip a beat. They knew it was love at first sight! 💕`,
            `${name1} and ${name2} were childhood friends who grew up to realize they were meant to be together forever. 🌟`,
            `It all started with a smile. ${name1} smiled at ${name2}, and the rest is history. 😊`,
            `${name1} and ${name2} found love in the most unexpected place, and their bond grew stronger every day. 💖`
        ];
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        document.getElementById("story").innerText = randomStory;

        // Show the submit button
        document.getElementById("submit-btn").style.display = "block";

        // Add falling hearts animation
        createFallingHearts();
    }, 2200); // Wait for the meter to fill up
}

function celebrateValentines() {
    // Hide the container and show the Valentine's Day animation
    document.querySelector(".container").style.display = "none";
    document.getElementById("valentines-animation").style.display = "block";

    // Reset after 5 seconds
    setTimeout(() => {
        document.querySelector(".container").style.display = "block";
        document.getElementById("valentines-animation").style.display = "none";
        document.getElementById("name1").value = "";
        document.getElementById("name2").value = "";
        document.getElementById("result").innerHTML = `
            <div id="love-meter">
                <div id="meter-fill"></div>
            </div>
            <p id="percentage"></p>
            <p id="message"></p>
            <p id="suggestion"></p>
            <p id="story"></p>
            <button id="submit-btn" onclick="celebrateValentines()" style="display: none;">Submit <i class="fas fa-paper-plane"></i></button>
        `;
    }, 5000);
}

function createFallingHearts() {
    const heartContainer = document.createElement("div");
    heartContainer.style.position = "absolute";
    heartContainer.style.top = "0";
    heartContainer.style.left = "0";
    heartContainer.style.width = "100%";
    heartContainer.style.height = "100%";
    heartContainer.style.pointerEvents = "none";
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.color = "#ff6f61";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        heartContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartContainer.remove();
    }, 5000);
}