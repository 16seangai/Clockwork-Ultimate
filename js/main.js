$("#roster-nav a").click(function() {
    $(this)
      .closest("a")
      .addClass("highlight")
      .siblings()
      .removeClass("highlight");
    return false; // no default behavior from clicking on the link
  });


// Load appropriate roster
function loadRoster(roster, captains, rookies, years) {
    var table = document.getElementById("roster-table").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    // populate roster and years
    for (var i = 0; i < roster.length; i++) {
        var row = table.insertRow();
        var row_number = row.insertCell();
        var row_name = row.insertCell();

        row_number.innerHTML = years[i];

        // indicate rookies and captains
        if (rookies.indexOf(roster[i]) != -1) {
            row_name.innerHTML = "<i>" + roster[i] + "</i>";
        } else if (captains.indexOf(roster[i]) != -1) {
            row_name.innerHTML = "<strong>" + roster[i] + "</strong>";
        } else {
            row_name.innerHTML = roster[i];
        }
    }
}

// Load Men's A roster by default
$( document ).ready(function() {
    loadRoster(a_roster, a_captains, a_rookies, a_years);
});

// Load Men's A roster
$("#view-a").on("click", () =>
    loadRoster(a_roster, a_captains, a_rookies, a_years)
);

// Load Men's B roster
$("#view-b").on("click", () =>
    loadRoster(b_roster, b_captains, b_rookies, b_years)
);