document.getElementById("dataForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;

  var formData = new FormData();
  formData.append("name", name);
  formData.append("mobile", mobile);
// v1: https://script.google.com/macros/s/AKfycbzdj4N3NcdWZzdJ4iVHe70EYxSFQeeAVaDjsecR5QyroupeaE-8PlWTAUd1OVartlchUA/exec
// v2: https://script.google.com/macros/s/AKfycby1XQiTioxfefJGywBww0ELzMgedVWTfdub81NkkZulTaY4NktQcLdH1TJjtelu_HGeBA/exec
  fetch("https://script.google.com/macros/s/AKfycby1XQiTioxfefJGywBww0ELzMgedVWTfdub81NkkZulTaY4NktQcLdH1TJjtelu_HGeBA/exec", {
    method: "POST",
    body: formData
  })
  .then(function(response) {
    console.log("Data submitted successfully");
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
});
