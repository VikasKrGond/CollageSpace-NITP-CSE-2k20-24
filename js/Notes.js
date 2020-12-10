var Notes = [
    ["Time Table CSE1 (UnOfficial)", "10-12-2020", "https://patnanit-my.sharepoint.com/:w:/g/personal/pulkita_ug20_cse_nitp_ac_in/EdpRyJ3T3hFPgjX3kT8-VRYBDLk7CCvpPbgJn3FB3SxU1w?e=CmqwNa"],
]

function setNotes() {
    for (i = 0; i < Notes.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Notes-ul").innerHTML += HTML1 + "'" + Notes[i][2] + "')" + HTML2 + Notes[i][0] + HTML3 + Notes[i][1] + HTML4;
    }
}