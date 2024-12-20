# AI-powered-journal
Mood analysis

# AI-Powered Journal

AI-Powered Journal is a web application that allows users to record their thoughts and experiences, powered by sentiment analysis to understand their mood. It includes features like creating, editing, and deleting journal entries, and it automatically classifies the sentiment of each entry (Positive, Negative, or Neutral).

## Features
1. **Write and Save Thoughts**: Users can write their thoughts in a text box and save them as journal entries.
2. **Sentiment Analysis**: Each entry is analyzed for sentiment (Positive, Neutral, Negative) using AI.
3. **Edit Entries**: Update existing entries with new text.
4. **Delete Entries**: Remove unwanted journal entries.
5. **Local Storage**: All entries are saved locally in the browser, ensuring persistence between sessions.
6. **Responsive Design**: Optimized for desktop and mobile devices.
7. **Attractive UI**: Modern design with animations and a professional look.

## Technologies Used
- **HTML**: For structuring the application.
- **CSS**: For styling the application, including responsive design.
- **JavaScript**: For application functionality and interactivity.
- **Cohere AI API**: To perform sentiment analysis on journal entries.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/AI-Powered-Journal.git
    ```
2. Navigate to the project directory:
    ```bash
    cd AI-Powered-Journal
    ```
3. Open the `index.html` file in a browser to run the application.

## How to Use

1. **Write a Thought**: Type your thoughts into the text area on the page.
2. **Add an Entry**: Click the "Add Entry" button. The app will analyze the sentiment and save your entry with a timestamp.
3. **View Journal Entries**: Saved entries will appear in a grid format with details like mood and date.
4. **Edit an Entry**: Click "Edit" on an entry, modify the text, and save the changes.
5. **Delete an Entry**: Click "Delete" to remove an entry.
6. **Sentiment Classification**: Each entry's sentiment is automatically categorized using Cohere AI.

## Folder Structure

```plaintext
AI-Powered-Journal/
├── index.html       # The main HTML file
├── styles.css       # CSS for styling the application
├── script.js        # JavaScript for application functionality
├── README.md        # This file

