var Notice = [
    ["Notice1", "Date", "http://google.com"],
    ["Notice2", "Date", "Link"]
]

function setNotice() {
    for (i = 0; i < Notice.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Notice-ul").innerHTML += HTML1 + "'" + Notice[i][2] + "')" + HTML2 + Notice[i][0] + HTML3 + Notice[i][1] + HTML4;
    }
}