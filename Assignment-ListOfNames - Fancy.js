var firstNameTag = document.getElementById("FirstName");
var lastNameTag = document.getElementById("LastName");
var titleTag = document.getElementById("Title");
var namesListTag = document.getElementById("NamesList");

var nameArray = [];

function SaveName() {
    var fullName = firstNameTag.value.trim() + " " + lastNameTag.value.trim();
    if (fullName.length < 4) {
        alert("Please enter a name.");
        return;
    }
    nameArray.push(fullName);
    ClearTextBoxes();
    alert(fullName + " was saved!");
}

function ShowNamesCollected() {
    namesListTag.innerHTML = "";

    if (nameArray.length === 0) {
        titleTag.innerHTML = "No Names Have Been Collected";
    } else {
        titleTag.innerHTML = nameArray.length + " Name";
        if (nameArray.length > 1) titleTag.innerHTML = titleTag.innerHTML + "s";
        titleTag.innerHTML = titleTag.innerHTML + " Collected:";
        for (var i = 0; i < nameArray.length; i++) {
            namesListTag.innerHTML = namesListTag.innerHTML + "<li>" + nameArray[i] + "</li>";
        }
    }
}

function ClearTextBoxes() {
    firstNameTag.value = "";
    lastNameTag.value = "";
    firstNameTag.focus();
}

function ResetForm() {
    nameArray = [];
    ClearTextBoxes();
    titleTag.innerHTML = "";
    namesListTag.innerHTML = "";
}

function ListenForEnterKey() {
    document.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault(); //Cancel the default action of the Enter key
            document.getElementById("SaveButton").click();
        }
    });
    firstNameTag.focus();
}