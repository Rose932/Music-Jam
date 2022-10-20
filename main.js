function playSound(){
    var sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3", "sound6.mp3"]
    var sound = document.getElementById("AUDIO");
    (sound)
    ? sound.src = sounds[Math.floor(Math.random() *parseInt(sounds.length))]
    : undefined;
    sound.play();
}
function addRow(){
    var row = document.createElement("tr");
    var tableBody = document.getElementById("myTableBody");
    for(i=0;i<6;i++){
        var square = document.createElement("td");
        square.className = "item" + Math.floor(Math.random() *6);
        square.setAttribute("onclick", "playSound()");
        row.appendChild(square);
    }
    tableBody.appendChild(row);
}
function init(){
    var item = document.getElementsByClassName("item");
    item.onclick = playSound();
}
window.onload = init();