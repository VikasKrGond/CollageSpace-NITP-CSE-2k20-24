var lactures = [
    ["Lacture1", "Date", "http://google.com"],
    ["Lacture2", "Date", "Link"]
]

function setLactures() {
    for (i = 0; i < lactures.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("lactures-ul").innerHTML += HTML1 + "'" + lactures[i][2] + "')" + HTML2 + lactures[i][0] + HTML3 + lactures[i][1] + HTML4;
    }
}