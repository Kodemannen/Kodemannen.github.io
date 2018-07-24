var filenames = ['Einstein.png', 'Physics degree.png', 'Auschwitz.png'] 

// Code for displaying the last image on index:
var dir = 'Comics/'; // your directory
var current_index = filenames.length-1;

var current_filename = filenames[current_index];
document.getElementById("comic_title").innerHTML = current_filename.split(".")[0];
document.getElementById("current_comic").src = dir + current_filename;


function previous_image(){
    if (current_index > 0) {
        current_index -= 1;
        document.getElementById("current_comic").src = dir + filenames[current_index];
        document.getElementById("comic_title").innerHTML = filenames[current_index].split(".")[0];
    }
}

function next_image(){
    if (current_index < filenames.length-1) {
        current_index += 1;
        document.getElementById("current_comic").src = dir + filenames[current_index];
        document.getElementById("comic_title").innerHTML = filenames[current_index].split(".")[0];
    }
}
