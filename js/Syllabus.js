var Syllabus = [
    ["HS1401 Syllabus", "10-12-2020", "https://drive.google.com/file/d/1dqPqMjFzm8JEXU4qQkwWoDF-sUDFYTsd/view?usp=sharing"],
    ["EC1401 Syllabus","10-12-2020","https://drive.google.com/file/d/1Jcjvpx1BfU36Bz39lIjdEUoOsDwuF_j5/view?usp=sharing"]
]

function setSyllabus() {
    for (i = 0; i < Syllabus.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Syllabus-ul").innerHTML += HTML1 + "'" + Syllabus[i][2] + "')" + HTML2 + Syllabus[i][0] + HTML3 + Syllabus[i][1] + HTML4;
    }
}
