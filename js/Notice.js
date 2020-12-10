var Notice = [
    ["Time Table CSE1 (UnOfficial)", "10-12-2020", "https://patnanit-my.sharepoint.com/:w:/g/personal/pulkita_ug20_cse_nitp_ac_in/EdpRyJ3T3hFPgjX3kT8-VRYBDLk7CCvpPbgJn3FB3SxU1w?e=CmqwNa"],
    ["Time Table (Official)", "10-12-2020", "http://www.nitp.ac.in/uploads20/CSED_1stYear_Dec-March-2020-semester_08_12_2020.pdf"]
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
