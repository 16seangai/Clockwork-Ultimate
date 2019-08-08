// Animate main nav scroll
$("#view-about").on("click", function() {
    const about = $("#about").position().top;

    $("html, body").animate(
        {
        scrollTop: about
        },
        900
    );
});
  
$("#view-roster").on("click", function() {
    const roster = $("#roster").position().top;

    $("html, body").animate(
        {
        scrollTop: roster
        },
        900
    );
});
  
$("#view-gallery").on("click", function() {
    const uandu = $("#gallery").position().top;

    $("html, body").animate(
        {
        scrollTop: uandu
        },
        900
    );
});
  
$("#view-contact").on("click", function() {
    const sponsors = $("#contact").position().top;

    $("html, body").animate(
        {
        scrollTop: sponsors
        },
        900
    );
});
  
// Indicate active roster being displayed in roster-nav
$("#roster-nav a").click(function() {
    $(this)
      .closest("a")
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    return false; // no default behavior from clicking on the link
});

// Generate tables in the roster div
function createTables() {
    var table_ids = ["roster-fr", "roster-so", "roster-jr", "roster-srgr"];
    var table_names = ["Freshmen", "Sophomores", "Juniors", "Seniors and Grads"];
    for (var i = 0; i < 4; i++) {
        var table = `<table id=${table_ids[i]}>
                        <caption>${table_names[i]}</caption>
                        <thead>
                            <tr>
                                <th scope="col" class="table-left-heading">No.</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`
        $("#roster-tables").append(table);
    }
}

// Load appropriate roster
function loadRoster(roster, captains, presidents, social_chairs) {
    var table_fr = document.getElementById("roster-fr").getElementsByTagName("tbody")[0];
    var table_so = document.getElementById("roster-so").getElementsByTagName("tbody")[0];
    var table_jr = document.getElementById("roster-jr").getElementsByTagName("tbody")[0];
    var table_srgr = document.getElementById("roster-srgr").getElementsByTagName("tbody")[0];
    // clear tables
    table_fr.innerHTML = "";
    table_so.innerHTML = "";
    table_jr.innerHTML = "";
    table_srgr.innerHTML = "";
    // populate roster and class years
    for (var i = 0; i < roster.length; i++) {
        if (roster[i].class_year === "fr") {
            var row = table_fr.insertRow();
        }
        else if (roster[i].class_year === "so") {
            var row = table_so.insertRow();
        }
        else if (roster[i].class_year === "jr") {
            var row = table_jr.insertRow();
        }
        else {
            var row = table_srgr.insertRow();
        }

        var row_number = row.insertCell();
        var row_name = row.insertCell();

        row_number.innerHTML = roster[i].number;
        row_name.innerHTML = roster[i].name;

        // highlight captains, presidents, and social chairs
        if (captains.indexOf(roster[i].name) != -1) {
            row_name.className = "captain";
        } else if (presidents.indexOf(roster[i].name) != -1) {
            row_name.className = "president";
        } else if (social_chairs.indexOf(roster[i].name) != -1) {
            row_name.className = "social-chair";
        } else {
            row_name.className = "member";
        }
    }
}

// Load Men's A roster and create roster tables in HTML by default
$( document ).ready(function() {
    createTables();
    loadRoster(a_roster, a_captains, presidents, social_chairs);
});

// Load Men's A roster
$("#view-a").on("click", () =>
    loadRoster(a_roster, a_captains, presidents, social_chairs)
);

// Load Men's B roster
$("#view-b").on("click", () =>
    loadRoster(b_roster, b_captains, presidents, social_chairs)
);