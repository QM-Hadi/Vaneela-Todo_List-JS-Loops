const button_container = document.getElementById("Button");

// Create "Add Users" button
const button = document.createElement("button");
button.textContent = "Add Users";
button.id = "add_User";
button.className = "bg-blue-500 border mr-2 mt-5 rounded-md text-center py-2 px-4 text-white";
button_container.appendChild(button);

// Create input and add button (initially hidden)
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter name";
input.className = "border text-black rounded-md py-2 px-3 mr-2 hidden";
input.id = "nameInput";

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.className = "bg-green-500 border rounded-md text-white py-2 px-4 hidden";
addBtn.id = "addUserBtn";

button_container.appendChild(input);
button_container.appendChild(addBtn);

// Initial user data
const nameObj = [
    { id: 1, name: "Rahul", date: new Date().toLocaleDateString() },
    { id: 2, name: "Pritam", date: new Date().toLocaleDateString() },
    { id: 3, name: "Ritesh", date: new Date().toLocaleDateString() },
    { id: 4, name: "Ravi", date: new Date().toLocaleDateString() },
    { id: 5, name: "Anaya", date: new Date().toLocaleDateString() },
    { id: 6, name: "Anupam", date: new Date().toLocaleDateString() },
];

const tableBody = document.getElementById("tableBody");

// Function to render a row
function renderRow(user) {

    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = user.id;
    tdId.className = "text-center px-4 py-2 border";

    const tdName = document.createElement("td");
    tdName.textContent = user.name;
    tdName.className = "text-center px-4 py-2 border";

    const tdDate = document.createElement("td");
    tdDate.textContent = user.date;
    tdDate.className = "text-center px-4 py-2 border";

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdDate);

    tableBody.appendChild(tr);
}

// Initial rendering
nameObj.forEach(renderRow);

// Show input and add button on "Add Users" click
button.addEventListener("click", () => {
    input.classList.remove("hidden");
    addBtn.classList.remove("hidden");
    input.focus();
});

// Add new user
addBtn.addEventListener("click", () => {
    const name = input.value.trim();
    if (name !== "") {
        const newUser = {
            id: nameObj.length + 1,
            name: name,
            date: new Date().toLocaleDateString()
        };
        nameObj.push(newUser);
        renderRow(newUser);
        input.value = "";
    } else {
        alert("Please enter a name!");
    }
});

function renderRow(user) {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = user.id;
    tdId.className = "text-center px-4 py-2 border";

    const tdName = document.createElement("td");
    tdName.textContent = user.name;
    tdName.className = "text-center px-4 py-2 border";

    const tdDate = document.createElement("td");
    tdDate.textContent = user.date;
    tdDate.className = "text-center px-4 py-2 border";

    // 🗑️ Create delete button
    const tdDelete = document.createElement("td");
    tdDelete.className = "text-center px-4 py-2 border";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";

    // Event listener to delete row
    delBtn.addEventListener("click", () => {
        tr.remove(); // removes the row from UI

        // OPTIONAL: Remove from array too
        const index = nameObj.findIndex((x) => x.id === user.id);
        if (index !== -1) {
            nameObj.splice(index, 1);
        }
    });

    tdDelete.appendChild(delBtn);

    // Append all <td>s to <tr>
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdDate);
    tr.appendChild(tdDelete);

    tableBody.appendChild(tr);
}


