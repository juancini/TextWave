function generateWave(len) {
    // Returns a random string
    // Inputs:
    //      len :: int
    //      length of strings
    
    let randomString = '';
    let chars = 'abcdefghijklmnoprsuvwyzABCDEFGHIJKLMNOPQRSTUVW1234567890!"#$%&()=-_!';
    for (let stringPlace = 0; stringPlace < len; stringPlace++) {
        randomString += chars.charAt(Math.floor(Math.random() * 69))
    }
    return randomString;
}

function updateText() {
    // Updates text

    document.getElementById("targetText").innerHTML = generateWave(2000);
}

console.log("Import OK.")