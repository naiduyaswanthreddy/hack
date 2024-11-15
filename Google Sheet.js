const scriptURL = 'https://script.google.com/macros/s/AKfycbyGy8dDxikX93oCDiu6CemRsSe9Wfra3F3N6r9fCAV3WiyqE8sKzV-iB4JavLRum0Ka/exec'
const form = document.forms['contact-form']
const loadingOverlay = document.getElementById('loadingOverlay')
const successMessage = document.getElementById('successMessage')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Show loading overlay
    loadingOverlay.style.display = 'flex'
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        // Hide loading overlay
        loadingOverlay.style.display = 'none'
        
        if (response.ok) {
            // Show success message
            successMessage.style.display = 'block'
            
            // Clear the form
            form.reset()
            
            // Hide the form container to focus on success message
            document.querySelector('.form-container').style.display = 'none'
        } else {
            throw new Error('Form submission failed')
        }
    })
    .catch(error => {
        // Hide loading overlay
        loadingOverlay.style.display = 'none'
        
        // Show error message
        alert('An error occurred while submitting the form. Please try again.')
        console.error('Error!', error.message)
    })
})

// Add click handler for success message OK button
document.querySelector('.success-button').addEventListener('click', () => {
    window.location.href = 'home.html'
})

// Optional: Add click handler to close success message when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === successMessage) {
        window.location.href = 'home.html'
    }
})



// Prevent right-click, text selection, and specific key combinations
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
    }
    // Disable Ctrl+U (View Page Source)
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        
    }
});


$(document).bind("contextmenu",function(e) {
    e.preventDefault();
    });
    

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      
  }
});


// Prevent specific key combinations
document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
       
    }
  
    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
        
    }
  
    // Disable Ctrl+U (View Page Source)
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        
    }
  });
  
  // Disable ri



  








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
    const correctAnswer = "10"; // The trick answer for 2+3
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
  
  
  