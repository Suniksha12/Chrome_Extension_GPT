chrome.runtime.onMessage.addListener(async (message) => {
    if (message.type === 'fetch_summary') {
        try {
            const summary = await getGPTSummary(message.query);
            displaySummary(summary);  // Function to update your popup UI
        } catch (error) {
            console.error('Error fetching summary:', error);
            alert(error.message);
        }
    }
});

function displaySummary(summary) {
    const summaryBox = document.getElementById('summary-box');  // Assume you have a div for summary
    summaryBox.innerText = summary;
    summaryBox.style.display = 'block';  // Show the box
}
