function createComboBoxOptions() {
    campuses.forEach(createOption);
    document.getElementById("combobox").selectedIndex = -1;
}

function createOption(campus) {
    document.write("<option value=\"");
    document.write(campus.id);
    document.write("\">");
    document.write(campus.name);
    document.writeln("</option>");
}

function findCampus(id) {
    for(let i = 0; i<campuses.length; i++)
        if(campuses[i].id === id)
            return campuses[i];
    return null;
}

function onOptionChange(campus_id) {
    const campus = findCampus(campus_id.value);
    document.getElementById("result_name").innerText = campus.name;
    document.getElementById("result_address").innerText = "Address: " + campus.address;
    document.getElementById("result_description").innerText = campus.description;
    var map = document.getElementById("result_map");
    map.innerHTML =
        "<img src='https://maps.googleapis.com/maps/api/staticmap?center="+campus.address+
            "&size="+ map.offsetWidth + "x" + map.offsetHeight +
            "&key=AIzaSyCrZD9n6-QNN61YX8CBc8lz-jRM7fFzuKk' alt='map'/>";
}