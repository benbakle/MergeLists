function mergeLists(ulToInsert, ulInsertInto, decending) {
    var ulToInsertListItems = listItems(ulToInsert);

    decending && reverseList(ulInsertInto);
    addClassToListItems(ulToInsert, "appended-item");

    if (listIsEmpty(ulInsertInto)) {
        ulInsertInto.append(ulToInsertListItems);

    }
    return ulInsertInto;
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

function listIsEmpty(ul) {
    return listLength(ul) == 0;
}

//::  CREATE TEST CASE :://
function addListItemToList(listItem, ul, position) {
    var ul_len = listLength(ul);
    (position > ul_len) ? $("> li:last-child", ul).after(listItem) : $("> li:nth-child(" + position + ")", ul).before(listItem);
}