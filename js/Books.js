var Books = [
    ["Books1", "Date", "http://google.com"],
    ["Books2", "Date", "Link"]
]

function setBooks() {
    for (i = 0; i < Books.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Books-ul").innerHTML += HTML1 + "'" + Books[i][2] + "')" + HTML2 + Books[i][0] + HTML3 + Books[i][1] + HTML4;
    }
}