

// Code for displaying the last image on index:
var dir = 'Comics/'; // your directory
var filenames = ["Einstein.png", "Physics degree.png", "Auschwitz.png"];
var current_index = filenames.length-1;

var current_filename = filenames[current_index];
document.getElementById("comic_title").innerHTML = current_filename.split(".")[0];
document.getElementById("current_comic").src = dir + current_filename;





function previous_image(){
    if (current_index > 0) {
        current_index -= 1;
        document.getElementById("current_comic").src = dir + filenames[current_index];
    }
}

function next_image(){
    if (current_index < filenames.length-1) {
        current_index += 1;
        document.getElementById("current_comic").src = dir + filenames[current_index];
    }
}




// function testfunc(){
//     var tall = document.getElementById("testclick").innerHTML;
//     tall -= 1;
//     document.getElementById("testclick").innerHTML = tall;
// }


