function mergeLists(ulToInsert, decending) {
    if (decending) {
        console.log(decending);
       ulToInsert =  reverseList(ulToInsert);
    }
    return addClassToListItems(ulToInsert, "appended-item");
}


function addClassToListItems(ul, className) {
    $("li", ul).each(function () {
        $(this).addClass(className);
    });
}

function reverseList(ul) {
    return $(("> li", ul).get().reverse()).wrap("<ul></ul>").addClass("reversed");
}
