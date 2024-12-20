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