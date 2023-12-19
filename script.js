//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Get the browser information
  const browserName = detectBrowserName();
  const browserVersion = detectBrowserVersion();

  // Display the information in the "browser-info" div
  const browserInfoDiv = document.getElementById('browser-info');
  browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
});

// Function to detect the browser name
function detectBrowserName() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('Chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('Safari')) {
    return 'Safari';
  } else if (userAgent.includes('Edge')) {
    return 'Microsoft Edge';
  } else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
    return 'Internet Explorer';
  } else {
    return 'Unknown Browser';
  }
}

// Function to detect the browser version
function detectBrowserVersion() {
  const appVersion = navigator.appVersion;
  const match = appVersion.match(/(\d+(\.\d+)?)/);
  return match ? match[1] : 'Unknown Version';
}
