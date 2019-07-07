'use strict';

{
    const novels = [
        // Replace with your own book titles
        'the_river_and_the_source',
        'the_concubine',
        'climbing_mount_kenya',
        'things_fall_apart',
        'a_man_of_the_people',
        'no_longer_at_ease',
        'weep_not_child',
        'the_lion_and_the_jewel'
    ];

    // Replace with your own code
    //we are suppost to create a function that creates an ordered and ordered list of the array above
    console.log(novels);

    //This function is the same as the one below it
    //function displayBookTitiles(){

    //  }
    //function displayBookTitiles = () => {
    let unorderedList = document.createElement("ul")
        //loop for putting books by Id/index in an array called novels
    for (const bookIndex in novels) {

        const listItem = document.createElement("li");
        //
        listItem.textContent = novels[bookIndex];
        //console.log(listItem);
        unorderedList.appendChild(listItem);
        //loop is creating a list-item tag and putting it in a method called text content.
        //we have to give it text to render
        //giving a string that we are creating
    }
    //we check if we have a div element called bookDiv in html
    const currentDiv = document.getElementById("novelsDiv"); //checks with the DOM to see where the currentDiv is specified
    //Here I want to insert the unorderedList before the currentDiv and insert it to the body
    document.body.insertBefore(unorderedList, currentDiv);
}
//document.body.onload = displayBookTitiles; //edited out since it has not been created yet.