//Hide all of the elements initially and reveal them procedurally throughout the character creation

function hide(id) {
    document.getElementById(id).style.display = 'none';
    console.log(id + " hidden");
};


hide("subrace-select");
hide("class-select");
hide("subclass-select");