function calculateAge() {
    var birthdateInput = document.getElementById("birthdate").value;

    // Convert input string to date object
    var birthdate = new Date(birthdateInput);

    // Get current date
    var currentDate = new Date();

    // Calculate difference in milliseconds
    var difference = currentDate - birthdate;

    // Convert milliseconds to other units
    var milliseconds = difference;
    var seconds = milliseconds / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30.4375); // Approximate months
    var years = Math.floor(months / 12);

    // Display the result
    var result = "You are " + years + " years old.<br>";
    result += "You are " + months + " months old.<br>";
    result += "Total Days " + days + "<br>";
    result += "Total milliseconds " + milliseconds + "<br>";
    result += "Total seconds " + seconds + "<br>";
    document.getElementById("ageOutput").innerHTML = result;}