var filenames = ['Auschwitz.png', 'Batman.png', 'Linear transformation.png', 'Physics degree.png', 'Threesome.png', 'Einstein.png'] 
//var filenames = ['Einstein.png', 'Physics degree.png', 'Auschwitz.png', 'Batman.png', 'Linear transformation.png', 'Threesome.png'] 
// MAKE SURE THE filenames declaration is on the first line, so that the python
// script can add them



// Code for displaying the last image on index:
var dir = 'Comics/'; // your directory
var hash_value = parseInt(window.location.hash.substr(1), 10);



///////////////////////////////////////////////////////
////// Checking that the hash is a valid one     //////
////// and getting the image index from the hash //////
///////////////////////////////////////////////////////
if (hash_value.toString() == "NaN" || hash_value > filenames.length-1 || hash_value <= 0){
    var current_index = filenames.length-1;
    window.location.hash = current_index+1;
} else {
    var current_index = hash_value-1;
};



//////////////////////////////////////////
////// Loading the comic and title: //////
//////////////////////////////////////////
var current_filename = filenames[current_index];
document.getElementById("comic_title").innerHTML = current_filename.split(".")[0];
document.getElementById("current_comic").src = dir + current_filename;


document.getElementById("image-url").innerHTML = "Link to this comic: https://merelyaboutstuff.com#" + (current_index + 1).toString(); 

///////////////////////////////
////// Button functions: //////
///////////////////////////////
function previous_image(){
    if (current_index > 0) {
        current_index -= 1;
        document.getElementById("current_comic").src = dir + filenames[current_index];
        document.getElementById("comic_title").innerHTML = filenames[current_index].split(".")[0];
    }
    document.getElementById("Previous").href = "#" + (current_index + 1).toString();
    document.getElementById("Previous2").href = "#" + (current_index + 1).toString();
    document.getElementById("image-url").innerHTML = "Link to this comic: https://merelyaboutstuff.com#" + (current_index + 1).toString(); 

}


function next_image(){
    if (current_index < filenames.length-1) {
        current_index += 1;
        document.getElementById("current_comic").src = dir + filenames[current_index];
        document.getElementById("comic_title").innerHTML = filenames[current_index].split(".")[0];
    }
    document.getElementById("Next").href = "#" + (current_index + 1).toString()
    document.getElementById("Next2").href = "#" + (current_index + 1).toString()
    document.getElementById("image-url").innerHTML = "Link to this comic: https://merelyaboutstuff.com#" + (current_index + 1).toString(); 

}

function random_image(){   
    var randint = Math.floor(Math.random() * filenames.length);
    while (randint==current_index){
        randint = Math.floor(Math.random() * filenames.length);
    }
    current_index = randint;
    document.getElementById("current_comic").src = dir + filenames[current_index];
    document.getElementById("comic_title").innerHTML = filenames[current_index].split(".")[0];
    
    document.getElementById("Random").href = "#" + (current_index + 1).toString();
    document.getElementById("Random2").href = "#" + (current_index + 1).toString();
    document.getElementById("image-url").innerHTML = "Link to this comic: https://merelyaboutstuff.com#" + (current_index + 1).toString(); 
}

function first_image(){
    current_index = 0;
    document.getElementById("current_comic").src = dir + filenames[current_index];
    document.getElementById("comic_title").innerHTML = filenames[current_index].split(".")[0];

    document.getElementById("First").href = "#" + (current_index + 1).toString();    
    document.getElementById("First2").href = "#" + (current_index + 1).toString();
    document.getElementById("image-url").innerHTML = "Link to this comic: https://merelyaboutstuff.com#" + (current_index + 1).toString();    
}

function last_image(){
    var last_index = filenames.length -1;
    document.getElementById("current_comic").src = dir + filenames[last_index];
    document.getElementById("comic_title").innerHTML = filenames[last_index].split(".")[0];
    current_index = last_index;

    document.getElementById("Last").href = "#" + (current_index + 1).toString();
    document.getElementById("Last2").href = "#" + (current_index + 1).toString();
    document.getElementById("image-url").innerHTML = "Link to this comic: https://merelyaboutstuff.com#" + (current_index + 1).toString(); 
}
