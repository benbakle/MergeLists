function mergeLists(ulToInsert, ulInsertInto, decending) {

    if (decending) {
        reverseList(ulToInsert);
    }
    return addClassToListItems(ulToInsert, "appended-item");
}


function listLength(ul) {
    return ul.find(">li").length;
}
function addClassToListItems(ul, className) {
    $("li", ul).each(function () {
        $(this).addClass(className);
    });
}

function reverseList(ul) {
    return ul.children().each(function (i, li) {
        ul.addClass("reversed").prepend(li)
    });
}

function listItems(ul) {
    return $('> li', ul);
}


//::  CREATE TEST CASE :://
function addListItemToList(listItem, ul, position) {
    var ul_len = listLength(ul);
    (position > ul_len) ? $("> li:last-child", ul).after(listItem) : $("> li:nth-child(" + position + ")", ul).before(listItem);
}