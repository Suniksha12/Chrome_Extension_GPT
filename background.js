chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.type === 'fetch_summary') {
        const query = message.query;
        try {
            const summary = await getGPTSummary(query);
            sendResponse({ summary }); // Ensure this is reached
        } catch (error) {
            console.error('Error fetching GPT summary:', error);
            sendResponse({ error: error.message || 'Failed to fetch summary.' });
        }
    }
    return true; // This keeps the message channel open for async response
});

async function getGPTSummary(query, retries = 3, delay = 2000) {
    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer`  // Replace with your actual API key
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { "role": "system", "content": "You are a helpful assistant." },
                    { "role": "user", "content": query }
                ],
                max_tokens: 150
            })
        });

        if (response.status === 429) {
            if (retries > 0) {
                console.log(`Rate limit exceeded. Retrying in ${delay} ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return getGPTSummary(query, retries - 1, delay * 2); // Exponential backoff
            } else {
                throw new Error('Rate limit exceeded. Please wait and try again later.');
            }
        }

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content.trim();  // Return the summary text
        } else {
            throw new Error('No valid response from GPT');
        }
    } catch (error) {
        console.error('Error in getGPTSummary:', error);
        throw error;  // Ensure the error is thrown so it's caught in the listener
    }
}

function removeMessageListener() {
    chrome.runtime.onMessage.removeListener(messageListener);  // This removes the message listener
}
