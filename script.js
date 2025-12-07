function generateVideo() {
    let script = document.getElementById("scriptInput").value;

    if (!script.trim()) {
        alert("Please enter a script first!");
        return;
    }

    document.getElementById("output").innerHTML =
        "🎬 Video generation started for your script:<br><br>" +
        "<strong>" + script + "</strong><br><br>" +
        "⚡ This is a demo version. AI video will be added later.";
}