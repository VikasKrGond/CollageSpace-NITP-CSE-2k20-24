var Books = [
    ["ENGINEERING DRAWING BY N.D BHATT", "11-12-2020", "https://drive.google.com/file/d/16J1FLpt8I2u--whz491080qA4dmJf3cq/view?usp=sharing"],
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
