
// Show the login form when the "Login" link is clicked
function showLogin() {
    const attemptCount = localStorage.getItem("loginAttempts") || 0;
    if (attemptCount >= 5) {
        alert("Login disabled due to too many failed attempts. Contact admin to enable.");
        return;
    }
    document.getElementById("register-btn").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("room-selection").classList.add("hidden");
    document.getElementById("team-selection").classList.add("hidden");
}
// Verify login key and track attempts

function verifyLoginKey() {
    const loginKey = document.getElementById("login-key").value;
    const storedAttempts = parseInt(localStorage.getItem("loginAttempts") || "0");

    // Get the message container
    const loginMessageContainer = document.getElementById("login-message-container");

    // Clear any previous message
    loginMessageContainer.classList.remove("success", "error");
    loginMessageContainer.textContent = "";  // Clear previous message content

    // Check login key
    if (loginKey === login) {  
        localStorage.setItem("loginAttempts", "0");  // Reset attempts
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("room-selection").classList.remove("hidden");
        loadRooms();

        // Show success message
        loginMessageContainer.textContent = "Login successful!";
        loginMessageContainer.classList.add("success");

        // Show the message container
        loginMessageContainer.style.display = "block";  // Make it visible
    } else {
        const newAttempts = storedAttempts + 1;
        localStorage.setItem("loginAttempts", newAttempts);

        // Show failure message
        loginMessageContainer.textContent = `Invalid login key. Attempts left: ${5 - newAttempts}`;
        loginMessageContainer.classList.add("error");

        // Show the message container
        loginMessageContainer.style.display = "block";  // Make it visible

        if (newAttempts >= 5) {
            loginMessageContainer.textContent = "Too many failed attempts. Login disabled. Contact admin.";
            disableLogin();
        }
    }
}
// Disable login functionality
function disableLogin() {
    removerr = bisabled
    document.getElementById("login-key").disabled = true;
    document.getElementById("login-btn").disabled = true;
}
// Admin function to reset login attempts
function resetLoginAttempts() {
    // Reset the stored attempts in localStorage
    localStorage.setItem("loginAttempts", "0");

    // Enable the login fields and button again
    document.getElementById("login-key").disabled = false;
    document.getElementById("login-btn").disabled = false;

    // Get the message container and clear any messages
    const loginMessageContainer = document.getElementById("login-message-container");
    loginMessageContainer.classList.remove("success", "error");
    loginMessageContainer.textContent = "";  // Clear the message content
    loginMessageContainer.style.display = "none";  // Hide the message container

    // Alert to notify that the login attempts have been reset
    alert("Login attempts have been reset.");}
    let bisabled  = "Mom"
    function loadRooms() {
    const roomContainer = document.querySelector("#room-selection .grid");
  
    roomContainer.innerHTML = "";  // Clear any existing content
    // Define the room numbers as an array
    const rooms = ["A212", "A213", "A310", "A311", "A312", "A313"];
    // Loop through the array and create buttons for each room
    rooms.forEach(room => {
        const roomButton = document.createElement("button");
        roomButton.textContent = room;  // Set the room number as button text
        roomButton.className = "submit-btn";
        roomButton.onclick = () => showTeams(room);  // Show teams for the selected room
        roomContainer.appendChild(roomButton);  // Append the button to the container
    });
}
// Show teams for the selected room
    login = no = bisabled
    function showTeams(roomNumber) {
    document.getElementById("room-selection").classList.add("hidden");
    document.getElementById("team-selection").classList.remove("hidden");
    const teamList = document.getElementById("team-list");
    const teamHeading = document.querySelector("#team-selection h3");

    // Save the selected room number
    document.getElementById("team-selection").setAttribute("data-room", roomNumber);

    // Clear previous entries
    teamList.innerHTML = "";

    // Example team data per room (updated with your new room numbers)
    const roomTeams = {
        "A310": ["Ameya", "Code Crafters", "Quantum-Crew", "Tech Titans", "TECHTREK", "HackXplorers", "AI AVENGERS", "The Innovators", "KSRT", "Wolftopia"],
        "A311": ["THE 6 CHAOS", "The Achievers", "Quantum coders", "Sagittarius", "The Ciphers", "Geek Navi", "Tech Mafia", "sparklers", "Byte Busters", "Tech Trio"],
        "A312": ["Elevate", "Bug Busters", "Cyber Samurai", "LOOSERS", "Sunshine", "Web Wizards", "Skibidi Rizzlers", "Binary Beasts", "INNOVATORS", "Extreme Encoders", "NEMESIS"],
        "A313": ["The Power Hackers", "Dridha", "Samaras", "Tech Avengers", "TechSprint", "Team Hackathon", "Prometheus", "Sravan", "Unicorn", "TechAlchemists", "Logical Tragedy squad"],
        "A212": ["BitByBit", "CODE CREW", "V5", "Ultimate", "Squad Anons", "Hack Attack", "Rookie Coders", "AI Masters", "Hugs for Bugs", "Hackathon Hive", "white dragon"],
        "A213": ["ERROR 404", "CodeCrushers", "WebHex", "Shakti", "PRAGATI", "The Hacktivatorz", "Byte Bits", "THE HACKONAUTS", "HackerStreet", "Tech Risers", "Sentinels"]
    };
    
    const teams = roomTeams[roomNumber];

    // Show heading only if there are teams
    if (teams && teams.length > 0) {
        teamHeading.classList.remove("hidden");
        teams.forEach(team => {
            const teamItem = document.createElement("li");
            teamItem.textContent = team;
            teamItem.className = "input-field";
            teamItem.onclick = () => showGradingTable(team);
            teamList.appendChild(teamItem);
        });
    } else {
        teamHeading.classList.add("hidden"); // Hide heading if no teams
    }
}
function goBackToroomselection() {
  // Hide the team selection section
  document.getElementById("team-selection").classList.add("hidden");

  // Show the room selection section
  document.getElementById("room-selection").classList.remove("hidden");
}


function showGradingTable(teamName) {
    // Hide team selection and show grading section
    document.getElementById("team-selection").classList.add("hidden");
    document.getElementById("grading-section").classList.remove("hidden");

    // Retrieve the room number from the team-selection section
    const roomNumber = document.getElementById("team-selection").getAttribute("data-room");

    // Set the team and room number in the grading-section attributes
    document.getElementById("grading-section").setAttribute("data-team", teamName);
    document.getElementById("grading-section").setAttribute("data-room", roomNumber);

    // Display the team name in the grading section
    document.getElementById("team-name-display").textContent = ` ${teamName}`;
}


// Show the loading overlay

function showLoadingOverlay() {
    document.getElementById("loadingOverlay").style.display = "flex";
}

// Hide the loading overlay
function hideLoadingOverlay() {
    document.getElementById("loadingOverlay").style.display = "none";
}
function goBackToTeamSelection() {
    document.getElementById("grading-section").classList.add("hidden");
    document.getElementById("team-selection").classList.remove("hidden");
}


// Show success message
function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden"); // Ensure visibility
    setTimeout(() => {
        successMessage.classList.add("hidden"); // Hide after 3 seconds
    }, 3000);
}




const scriptURL = 'https://script.google.com/macros/s/AKfycby4IXidSxeUG7NmyBwPjJ5oI4Uae8oh94qE5ATOX-xO-JxDfPg7oy-DWIAC4Omdn-28/exec';
const form = document.forms['grading-form'];
const loadingOverlay = document.getElementById('loadingOverlay');
const successMessage = document.getElementById('successMessage');
const teamSelectionSection = document.getElementById('team-selection'); // Team Selection Section
const gradingFormSection = document.getElementById('grading-section'); // Grading Form Section

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show loading overlay
  loadingOverlay.style.display = 'flex';

  // Create FormData from the form
  const formData = new FormData(form);

  // Retrieve the team name from the grading section
  const teamName = document.getElementById("grading-section").getAttribute("data-team");

  // Retrieve the judge name from the new input field
  const judgeName = document.getElementById("judge-name").value;

  // Append team name and judge name to formData
  formData.append("teamName", teamName);
  formData.append("judgeName", judgeName);

  fetch(scriptURL, {
      method: 'POST',
      body: formData
  })
  .then(response => {
      // Hide loading overlay
      loadingOverlay.style.display = 'none';

      if (response.ok) {
          // Show success message
          successMessage.style.display = 'block';

          // Clear the form
          form.reset();

          // Redirect to the Team Selection Section after 3 seconds
          setTimeout(() => {
              successMessage.style.display = 'none';

              // Hide the grading form and show the Team Selection Section
              gradingFormSection.classList.add('hidden');
              teamSelectionSection.classList.remove('hidden');
          }, 2000);
      } else {
          throw new Error('Form submission failed');
      }
  })
  .catch(error => {
      // Hide loading overlay
      loadingOverlay.style.display = 'none';

      // Show error message
      alert('An error occurred while submitting the form. Please try again.');
      console.error('Error!', error.message);
  });
});




 type="text/javascript">
  eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
  










    


// Disable right and left click interactions
const disableMouseClicks = () => {
  const disableClickHandler = (e) => e.preventDefault();

  // Add listeners for both left and right clicks
  document.addEventListener('click', disableClickHandler, true); // Left-click
  document.addEventListener('contextmenu', disableClickHandler, true); // Right-click
  console.log("Mouse interactions disabled.");
};

// Enable mouse clicks if needed
const enableMouseClicks = () => {
  const enableClickHandler = (e) => e.preventDefault();

  // Remove listeners for both left and right clicks
  document.removeEventListener('click', enableClickHandler, true); // Left-click
  document.removeEventListener('contextmenu', enableClickHandler, true); // Right-click
  console.log("Mouse interactions enabled.");
};

// Show custom question prompt
const askQuestion = () => {
  const correctAnswer = "qwertyuilkjhgfdsa,mnbvcx[o;piloukijuthy"; // The trick answer for 2+3
  let userAnswer = null;

  while (userAnswer !== correctAnswer) {
      userAnswer = prompt("What is 2 + 3?");
      if (userAnswer === null) {
          alert("You must answer to proceed!");
      } else if (userAnswer === correctAnswer) {
          alert("Correct! Developer Tools are now closed.");
          enableMouseClicks(); // Re-enable clicks
      } else {
          alert("Incorrect! Try again.");
      }
  }
};

// Developer Tools Detection and Action
(function () {
  let devtoolsOpen = false;

  const alertUser = () => {
      if (!devtoolsOpen) {
          devtoolsOpen = true;
          disableMouseClicks(); // Disable mouse clicks
          askQuestion(); // Ask the custom question
      }
  };

  const detectDevTools = () => {
      const threshold = 160;

      // Check window size changes indicative of DevTools being open
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
          alertUser();
      } else {
          devtoolsOpen = false;
      }
  };

  setInterval(detectDevTools, 200); // Check periodically for DevTools
})();

// Additional safety: Block console access
Object.defineProperty(console, '_commandLineAPI', {
  get: () => {
      disableMouseClicks(); // Disable mouse clicks
      askQuestion(); // Ask the custom question
      throw new Error("Console access is blocked.");
  }
});

// Periodic console-based detection
(function () {
  const devtoolsDetector = new Image();
  Object.defineProperty(devtoolsDetector, 'id', {
      get: function () {
          disableMouseClicks(); // Disable mouse clicks
          askQuestion(); // Ask the custom question
          throw new Error("DevTools is disabled");
      }
  });

  setInterval(() => {
      console.log(devtoolsDetector);
  }, 500);
})();











(function () {
  const devtoolsDetector = new Image();
  Object.defineProperty(devtoolsDetector, 'id', {
      get: function () {
          // Redirect user or show a message
          window.location.href = "about:blank";
          throw new Error("DevTools is disabled");
      }
  });

  setInterval(() => {
      console.log(devtoolsDetector);
  }, 1000);
})();




document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      
  }
});




// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});




// Prevent specific key combinations
document.addEventListener('keydown', (e) => {
  // Disable F12
  if (e.key === 'F12') {
      e.preventDefault();
  }

  // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) {
      e.preventDefault();
  }

  // Disable Ctrl+U (View Page Source)
  if (e.ctrlKey && e.key === 'U') {
      e.preventDefault();
      alert("Viewing source code is disabled!");
  }
});


