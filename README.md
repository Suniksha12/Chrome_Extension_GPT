# 🚀 GPTify, Chrome-GPT-Extension

## 🌟 Objective:
This Chrome extension is built to enhance users' browsing and productivity by integrating GPT-powered AI content directly into their Google Search results. Below are the key features:

### Enhance Search Experience:
- 💡 Provides users with additional context, insights, and AI-generated content directly on Google Search results.

### Content Generation:
- 📝 Assists users in generating relevant and insightful content based on search queries.

### Boost Productivity:
- ⚡ Increases productivity by avoiding the hassle of switching between tabs to look for answers.

### Summarization:
- 🔍 Quickly provides a concise summary of search results, improving efficiency and minimizing distractions.

---

## ⚙️ How to Build This Chrome Extension:

1. **Folder Setup**: 
   - Create a folder named `chrome_extension_GPT`.

2. **Code Files**: 
   - Open the folder in an editor like VS Code and create two key files: `manifest.json` and `content_script.js`.

3. **Load the Extension**: 
   - Go to Chrome → Extensions (via the 3-dot menu) → Manage Extensions.
   - Turn on **Developer Mode** and click on **Load unpacked**. Select your folder.

4. **API Key**: 
   - Sign up for OpenAI at [OpenAI API](https://platform.openai.com/account) and generate a secret API key from the [API Keys section](https://platform.openai.com/api-keys). Save it safely!

5. **Add API Key to Your Script**: 
   - In the `content_script.js` file, replace the placeholder with your API key.

6. **Test Your Extension**: 
   - Use **Inspect** to debug any issues.

---

## 🧠 Results:
When working as expected, this extension will provide a brief summary of search results right within Google Search, reducing the need to open multiple tabs.

🎉 **Check out the full project documentation**: [View the document](https://drive.google.com/yourlink)

---

## 😓 Difficulties Faced:

- **Slow Response**: 
  - Requests could sometimes take a bit longer due to traffic load on the OpenAI API.

- **API Key Issues**: 
  - API keys are sensitive and must be handled carefully. If not saved, they need to be regenerated, leading to errors.

- **Token Limitations**: 
  - OpenAI has a token limit, so to avoid additional costs, we limited the number of API requests per session.

- **API Errors**: 
  - Random API calls sometimes resulted in errors that required waiting 1-2 hours before retrying.

---

## 🚀 How to Use:
1. Install the extension as described above.
2. Pin it to your browser for easy access.
3. Search anything on Google and let GPT generate a summary and content for you!

---

## 📄 Documentation & Further Details:
- **GitHub Repo**: [Chrome-GPT-Extension](https://github.com/Suniksha12/Chrome_Extension_GPT)
- **API Key Info**: [OpenAI API Key](https://platform.openai.com/api-keys)
- **Learn More**: [Chrome Extensions Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

---

## 🔗 Links:
- **Official Website**: [OpenAI](https://platform.openai.com)
- **Project Folder**:
 YOU can view the document and the steps here[Google Drive Link](https://docs.google.com/document/d/1cyADHl5TEWw1hFwsRbWh8T95bLj-arUT/edit?usp=sharing&ouid=110042007992573128585&rtpof=true&sd=true)

---

## 📱 Socials:
- #ChromeExtension
- #GPTIntegration
- #ProductivityBoost

🎉 Kudos for your achievements! Your extension is now successfully loaded and operational. Happy coding!
