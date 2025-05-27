// Google Arcade Lab Leaderboard Hider
// Automatically hides the leaderboard for a better gaming experience

// Safe logging function
function safeLog(message) {
  try {
    console.log(`[Arcade Script] ${message}`);
  } catch (e) {
    // Ignore logging errors
  }
}

// Hide leaderboard and show game content
function hideLeaderboard() {
  const leaderboard = document.querySelector(
    ".js-lab-leaderboard, .leaderboard"
  );
  if (leaderboard) {
    leaderboard.style.display = "none";
    safeLog("Leaderboard hidden");
  }

  const gameContent = document.querySelector(
    ".games-labs, .lab-content, .arcade-content"
  );
  if (gameContent) {
    gameContent.style.display = "block";
    gameContent.style.visibility = "visible";
    safeLog("Game content shown");
  }
}

// Initialize the script
function initialize() {
  safeLog("Initializing Arcade Lab script...");
  hideLeaderboard();
  safeLog("Arcade Lab script initialized");
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  safeLog("Received message:", request.type);

  if (request.type === "CHECK_STATUS") {
    sendResponse({ success: true });
  }

  return true;
});

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}

// Watch for dynamic content changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      hideLeaderboard();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
