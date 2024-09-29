// Function to handle the query extraction and summary fetching
function fetchSummary() {
    const searchInput = document.querySelector('input[name="q"]');
    
    if (searchInput) {
        const query = searchInput.value;

        // Send query to GPT via background service worker
        chrome.runtime.sendMessage({ type: 'fetch_summary', query: query }, function (response) {
            if (chrome.runtime.lastError) {
                console.error('Error:', chrome.runtime.lastError);
            } else {
                console.log('Response:', response);  // Log the entire response
                if (response && response.summary) {
                    // Display the summary in a floating box
                    displaySummary(response.summary);
                } else if (response && response.error) {
                    console.error('Error from background:', response.error);
                    alert('Error: ' + response.error);  // Display error to user
                }
            }
        });
    }
}

// Function to display the summary
function displaySummary(summary) {
    const summaryBox = document.createElement('div');
    summaryBox.style.position = 'fixed';
    summaryBox.style.top = '10px';
    summaryBox.style.right = '10px';
    summaryBox.style.backgroundColor = 'white';
    summaryBox.style.padding = '10px';
    summaryBox.style.border = '1px solid black';
    summaryBox.textContent = summary;
    document.body.appendChild(summaryBox);
}

// Use MutationObserver to wait for the page to load the search input
const observer = new MutationObserver((mutations) => {
    if (document.querySelector('input[name="q"]')) {
        // Stop observing once the search input is found
        observer.disconnect();
        fetchSummary();
    }
});

// Start observing the body for changes in the DOM structure
observer.observe(document.body, { childList: true, subtree: true });

