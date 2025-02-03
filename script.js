// Retrieve existing entries from localStorage
const journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

// Helper function to map sentiment to emoji
function getMoodEmoji(sentiment) {
  switch (sentiment) {
    case "Positive":
      return "😊";
    case "Negative":
      return "😞";
    case "Neutral":
    default:
      return "😐";
  }
}

// Function to display all journal entries
function displayEntries() {
  const entriesContainer = document.getElementById("journalEntries");
  entriesContainer.innerHTML = "";

  journalEntries.forEach((entry, index) => {
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    const moodEmoji = getMoodEmoji(entry.sentiment);

    entryDiv.innerHTML = `
      <p>${entry.text}</p>
      <p class="sentiment">
        Mood: ${entry.sentiment} ${moodEmoji} | Date: ${entry.timestamp}
      </p>
      <div class="actions">
        <button onclick="editEntry(${index})">Edit</button>
        <button onclick="deleteEntry(${index})">Delete</button>
      </div>
    `;
    entriesContainer.appendChild(entryDiv);
  });
}

// Add a new journal entry with sentiment analysis
document.getElementById("addButton").addEventListener("click", async () => {
  const inputText = document.getElementById("entryInput").value.trim();

  if (!inputText) {
    alert("Please write something before adding!");
    return;
  }

  const sentiment = await analyzeSentiment(inputText);

  const newEntry = {
    text: inputText,
    sentiment: sentiment || "Neutral",
    timestamp: new Date().toLocaleString()
  };

  journalEntries.unshift(newEntry);
  localStorage.setItem("journalEntries", JSON.stringify(journalEntries));

  displayEntries();
  document.getElementById("entryInput").value = "";
});

// Edit an existing journal entry
function editEntry(index) {
  const updatedText = prompt("Edit your entry:", journalEntries[index].text);

  if (updatedText !== null) {
    journalEntries[index].text = updatedText;
    analyzeSentiment(updatedText).then((sentiment) => {
      journalEntries[index].sentiment = sentiment || "Neutral";
      localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
      displayEntries();
    });
  }
}

// Delete a journal entry
function deleteEntry(index) {
  if (confirm("Are you sure you want to delete this entry?")) {
    journalEntries.splice(index, 1);
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
    displayEntries();
  }
}

// Analyze sentiment using Cohere AI API
async function analyzeSentiment(text) {
  const apiKey = "s7YHHQ7FKUr3UmvrOSB389W6UDLLYpcNpj0GGeVp"; 
  const url = "https://api.cohere.ai/classify";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      inputs: [text],
      examples: [
        { text: "I am feeling well", label: "Positive" },
        { text: "I am feeling great and excited.", label: "Positive" },
        { text: "This is so sad and disappointing.", label: "Negative" },
        { text: "I am feeling unwell.", label: "Negative" },
        { text: "I am not feeling well.", label: "Negative" },
        { text: "I am not sure how I feel about this.", label: "Neutral" },
        { text: "This is okay, I guess.", label: "Neutral" },
        { text: "I am feeling very happy today!", label: "Positive" },
        { text: "I am so happy today!", label: "Positive" },
        { text: "This is the best day ever!", label: "Positive" },
        { text: "I feel sad and lonely.", label: "Negative" },
        { text: "I am very upset and frustrated.", label: "Negative" },
        { text: "It was an average day.", label: "Neutral" },
        { text: "Nothing much happened today.", label: "Neutral" }
      ]
    })
  });

  if (response.ok) {
    const data = await response.json();
    return data.classifications[0].prediction;
  } else {
    console.error("Failed to analyze sentiment");
    return "Neutral";
  }
}

// Initial display of entries
displayEntries();
