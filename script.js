const journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

function displayEntries() {
    const entriesContainer = document.getElementById("journalEntries");
    entriesContainer.innerHTML = "";

    journalEntries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");

        entryDiv.innerHTML = `
            <p>${entry.text}</p>
            <p class="sentiment">Mood: ${entry.sentiment} | Date: ${entry.timestamp}</p>
            <div class="actions">
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </div>
        `;

        entriesContainer.appendChild(entryDiv);
    });
}

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

    journalEntries.push(newEntry);
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));

    displayEntries();
    document.getElementById("entryInput").value = "";
});

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

// Function to delete an entry
function deleteEntry(index) {
    if (confirm("Are you sure you want to delete this entry?")) {
        journalEntries.splice(index, 1);
        localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
        displayEntries();
    }
}

