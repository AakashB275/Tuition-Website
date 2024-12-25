function hideYouTubeComments() {
  var commentsSection = document.getElementById("comments");
  if (commentsSection) {
    commentsSection.style.display = "none";
  }
}

function hideYouTubeReccs() {
  var sidebar = document.getElementById("related"); // Use the correct ID here
  if (sidebar) {
    sidebar.style.display = "none";
  }
}

//to get the videoID
function getVidID() {
  var url = new URLSearchParams(window.location.search);
  return url.get("v");
}

// Function to create and insert a new notepad
function insertNotepad() {
  var videoId = getVidID(); // get video ID
  var existingNotepad = document.getElementById("floatingNotepad");

  if (existingNotepad) {
    // Reset opacity and reposition to center

    existingNotepad.style.top = "50px";
    existingNotepad.style.right = "50px";
    // Exit the function if the notepad already exists
  } else {
    // notepad creation and css

    var videoId = getVidID();

    var notepad = document.createElement("div");
    notepad.setAttribute("id", "floatingNotepad");
    notepad.style.position = "fixed";
    notepad.style.top = "116px";
    notepad.style.right = "100px";
    notepad.style.left = "510px";
    notepad.style.width = "500px";
    notepad.style.height = "500px";
    notepad.style.background = "white";
    notepad.style.border = "1px solid #ccc";
    notepad.style.padding = "10px";
    notepad.style.boxSizing = "border-box";
    notepad.style.zIndex = "10000";
    notepad.style.resize = "both";
    notepad.style.overflow = "auto";
    notepad.style.opacity = 1; // Ensure opacity is 1 when created

    var dragElemnt = document.createElement("div");
    dragElemnt.style.position = "absolute";
    dragElemnt.style.top = "0";
    dragElemnt.style.left = "0";
    dragElemnt.style.background = "black";
    dragElemnt.style.width = "100%";
    dragElemnt.style.height = "5%";

    var textarea = document.createElement("textarea");
    textarea.style.width = "95%";
    textarea.style.height = "80%";
    textarea.style.marginTop = "5%";
    textarea.style.boxSizing = "border-box";

    textarea.value = localStorage.getItem(`notepad_${videoId}`);

    textarea.addEventListener("input", function () {
      var content = textarea.value;
      localStorage.setItem(`notepad_${videoId}`, content);
      console.log(localStorage.getItem(`notepad_${videoId}`));
    });

    var closebutton = document.createElement("button");
    closebutton.style.position = "absolute";
    closebutton.style.top = "20%";
    closebutton.style.left = "93%";
    closebutton.style.background = "red";
    closebutton.style.borderRadius = "70%";
    closebutton.style.width = "3%";
    closebutton.style.height = "60%";
    closebutton.onclick = notepadClose;

    // var alignmentButton = document.createElement("button");
    // alignmentButton.style.width = "10%";
    // alignmentButton.style.height = "60%";
    // alignmentButton.style.borderRadius = "50%";
    // alignmentButton.textContent = "Align";
    // alignmentButton.style.margin = "5px";
    // var alignmentState = 0;

    // alignmentButton.onclick = function () {
    //   var cursorPos = textarea.selectionStart;
    //   if (alignmentState === 0) {
    //     //currently left
    //     cursorPos += " ".repeat(29 * (textarea.width / 475));
    //     alignmentState = 1;
    //   } else if (alignmentState === 1) {
    //     //currently centre
    //     console.log("noob");
    //     alignmentState = 2;
    //   } else {
    //     // currently rigth
    //     textarea.selectionEnd;
    //     alignmentState = 0;
    //   }
    // };

    var toolbox = document.createElement("div");
    toolbox.style.width = textarea.style.width;
    toolbox.style.height = "15%";
    toolbox.style.background = "lightgray";

    notepad.appendChild(textarea);
    document.body.appendChild(notepad);
    notepad.appendChild(dragElemnt);
    dragElemnt.appendChild(closebutton);
    notepad.appendChild(toolbox);
    // toolbox.appendChild(alignmentButton);
    dragElement(dragElemnt);
    dragElement(toolbox);
    // dragElement(toolbox);

    // Maximize button
    var maximize = document.createElement("button");
    maximize.style.position = "absolute";
    maximize.style.top = "807px";
    maximize.style.left = "49px";
    maximize.style.background = "green";
    maximize.style.borderRadius = "70%";
    maximize.style.width = "1%";
    maximize.style.height = "2%";
    maximize.style.opacity = 0;
    maximize.onclick = notepadMaximize;
    document.body.appendChild(maximize);
    DragButton(maximize);
  }
}

// notepad creation and css
var videoId = getVidID();

var notepad = document.createElement("div");
notepad.setAttribute("id", "floatingNotepad");
notepad.style.position = "fixed";
notepad.style.top = "116px";
notepad.style.right = "100px";
notepad.style.left = "510px";
notepad.style.width = "500px";
notepad.style.height = "500px";
notepad.style.background = "white";
notepad.style.border = "1px solid #ccc";
notepad.style.padding = "10px";
notepad.style.boxSizing = "border-box";
notepad.style.zIndex = "10000";
notepad.style.resize = "both";
notepad.style.overflow = "auto";
notepad.style.opacity = 1; // Ensure opacity is 1 when created

var dragElemnt = document.createElement("div");
dragElemnt.style.position = "absolute";
dragElemnt.style.top = "0";
dragElemnt.style.left = "0";
dragElemnt.style.background = "black";
dragElemnt.style.width = "100%";
dragElemnt.style.height = "5%";

var textarea = document.createElement("textarea");
textarea.style.width = "95%";
textarea.style.height = "80%";
textarea.style.marginTop = "5%";
textarea.style.boxSizing = "border-box";

textarea.value = localStorage.getItem(`notepad_${videoId}`);

textarea.addEventListener("input", function () {
  var content = textarea.value;
  localStorage.setItem(`notepad_${videoId}`, content);
  console.log(localStorage.getItem(`notepad_${videoId}`));
});

var closebutton = document.createElement("button");
closebutton.style.position = "absolute";
closebutton.style.top = "20%";
closebutton.style.left = "93%";
closebutton.style.background = "red";
closebutton.style.borderRadius = "70%";
closebutton.style.width = "3%";
closebutton.style.height = "60%";
closebutton.onclick = notepadClose;

// var alignmentButton = document.createElement("button");
// alignmentButton.style.width = "10%";
// alignmentButton.style.height = "60%";
// alignmentButton.style.borderRadius = "50%";
// alignmentButton.textContent = "Align";
// alignmentButton.style.margin = "5px";
// var alignmentState = 0;

// alignmentButton.onclick = function () {
//   var cursorPos = textarea.selectionStart;
//   if (alignmentState === 0) {
//     //currently left
//     cursorPos += " ".repeat(29 * (textarea.width / 475));
//     alignmentState = 1;
//   } else if (alignmentState === 1) {
//     //currently centre
//     console.log("noob");
//     alignmentState = 2;
//   } else {
//     // currently rigth
//     textarea.selectionEnd;
//     alignmentState = 0;
//   }
// };

var toolbox = document.createElement("div");
toolbox.style.width = textarea.style.width;
toolbox.style.height = "15%";
toolbox.style.background = "lightgray";

notepad.appendChild(textarea);
document.body.appendChild(notepad);
notepad.appendChild(dragElemnt);
dragElemnt.appendChild(closebutton);
notepad.appendChild(toolbox);
// toolbox.appendChild(alignmentButton);
dragElement(dragElemnt);
dragElement(toolbox);
// dragElement(toolbox);

// Maximize button
var maximize = document.createElement("button");
maximize.style.position = "absolute";
maximize.style.top = "807px";
maximize.style.left = "49px";
maximize.style.background = "green";
maximize.style.borderRadius = "70%";
maximize.style.width = "1%";
maximize.style.height = "2%";
maximize.style.opacity = 0;
maximize.onclick = notepadMaximize;
document.body.appendChild(maximize);
DragButton(maximize);

function notepadClose(event) {
  var notepad = document.getElementById("floatingNotepad");
  if (notepad) notepad.remove();
  maximize.style.opacity = 1;
}

// to maximize the notepad
function notepadMaximize(event) {
  var button = event.target;
  insertNotepad();
  maximize.style.opacity = 0;
}

// Function to make an element draggable
function dragElement(elmnt) {
  var parent = elmnt.parentElement;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    parent.style.top = parent.offsetTop - pos2 + "px";
    parent.style.left = parent.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Function to drag a button
function DragButton(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Check if a notepad already exists and create it if not
function checkExtra() {
  var existingNotepad = document.getElementById("floatingNotepad");
  if (existingNotepad) {
    existingNotepad.style.opacity = 1;
  }
}

checkExtra();

// Use MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    hideYouTubeComments();
    hideYouTubeReccs();
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initial call to hide comments and recommendations when the page loads
hideYouTubeComments();
hideYouTubeReccs();

// Add an event listener for the extension button click
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleNotepad") {
    insertNotepad();
    sendResponse({ status: "Notepad toggled" });
  }
});

// Example form submission handler
document.addEventListener("DOMContentLoaded", function () {
  var inputForm = document.getElementById("inputForm");
  if (inputForm) {
    inputForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get input value
      var inputValue = document.getElementById("inputField").value;

      // Log the input value to verify
      console.log("Input value:", inputValue);
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleNotepad") {
    insertNotepad();
    sendResponse({ status: "Notepad toggled" });
  }
});
