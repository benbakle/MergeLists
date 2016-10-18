function mergeLists(ulToInsert) {
   return addClassToListItems(ulToInsert, "appended-item");
}

function mergeListsAsSub() { }




function addClassToListItems(ul, className) {
    $("li", ul).each(function () {
        $(this).addClass(className);
    });
}