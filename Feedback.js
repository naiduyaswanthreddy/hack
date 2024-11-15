const teamData = {
    "Ameya": "4567",
    "Code Crafters": "9123",
    "Quantum-Crew": "2345",
    "Tech Titans": "7890",
    "Tech Risers": "3579",
    "Sentinels": "4680"
  };
  
  // Function to load team names in the dropdown
  // Function to load team names in the dropdown
function loadTeamNames() {
    const teamSelect = document.getElementById('teamSelect');
    teamSelect.innerHTML = ''; // Clear previous options
    Object.keys(teamData).forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamSelect.appendChild(option);
    });
}

// Function to show the PIN form when a team is selected
function showPinForm() {
    const teamName = document.getElementById('teamSelect').value;
    if (!teamName) {
        alert('Please select a team.');
        return;
    }
    // Set the team name in the PIN form and show it
    document.getElementById('teamNameDisplay').textContent = teamName; // Set team name on the form
    document.getElementById('pinForm').classList.remove('hidden');
}

// Function to verify the PIN entered by the user
function verifyPin() {
    const teamName = document.getElementById('teamSelect').value;
    const pin = document.getElementById('teamPin').value.trim();

    if (!pin) {
        alert('Please enter the PIN.');
        return;
    }

    // Check if the entered PIN matches the stored PIN for the selected team
    if (teamData[teamName] === pin) {
        // Fetch feedback from Google Sheets
        fetchFeedback(teamName, pin);
    } else {
        displayErrorMessage('Invalid PIN for this team.');
    }
}

// Function to fetch feedback from Google Sheets
function fetchFeedback(teamName, pin) {
    const sheetId = '1u1vs9Nvuu3xDfD2F5QOSu_hY01H-vruu8rp4bv-T5bI'; // Your Google Sheet ID

    // Encode the parameters properly
    const url = `https://script.google.com/macros/s/AKfycbxAm8RZDUB6lC-rgRERMReNILr7YmQaCsWSay4Y1Z_6nRvoOOHueO8lweQUn162aKDq/exec?action=getTeamFeedback&sheetId=${sheetId}&teamName=${encodeURIComponent(teamName)}&pin=${encodeURIComponent(pin)}`;

    // Make the fetch request
    fetch(url)
        .then(response => response.json()) // Parse JSON
        .then(data => {
            if (data.success) {
                displayFeedback(data.data); // Display the fetched feedback
            } else {
                displayErrorMessage(data.message || 'No feedback found for this team and PIN.');
            }
        })
        .catch(error => {
            console.error('Error fetching feedback:', error);
            displayErrorMessage('Error fetching feedback.');
        });
}

// Function to display feedback message
function displayFeedback(feedback) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = `<p>${feedback}</p>`;
    feedbackContainer.classList.remove('hidden');
}

// Function to display an error message
function displayErrorMessage(message) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = `<p style="color: red;">${message}</p>`;
    feedbackContainer.classList.remove('hidden');
}

// Function to initialize the page
function init() {
    loadTeamNames(); // Load the team names when the page loads

    // Attach event listeners
    document.getElementById('showPinFormBtn').addEventListener('click', showPinForm);
    document.getElementById('verifyPinBtn').addEventListener('click', verifyPin);
}

// Initialize the page once it's loaded
window.onload = init;
