//function mergeLists(ulToInsert, ulInsertInto, position, decending) {
//    var ulToInsertListItems = listItems(ulToInsert);

//  //  decending && reverseList(ulToInsert);

//    if (decending) {
//        debugger;
//        reverseList(ulToInsert);
//    }

//    addClassToListItems(ulToInsert, "appended-item");

//    if (listIsEmpty(ulInsertInto)) {
//        ulInsertInto.append(ulToInsertListItems);
//    } else {
//        if (position == 1) {
//            ulToInsertListItems.insertBefore($('> li:first-child', ulInsertInto));
//        } else {
//            ulToInsertListItems.insertAfter($('> li:nth-child(' + (position - 1) + ')', ulInsertInto));
//        }
//    }

//}

function mergeLists(ulInsert, ulInsertInto, position, decending) {
    addClassToListItems(ulInsert, "appended-item");
    decending && reverseList(ulInsert);
    var ulItems = listItems(ulInsert);
    if (listLength(ulInsertInto) == 0) {
        ulInsertInto.append(ulItems);
    } else {
        (position == 1) ? ulItems.insertBefore($('> li:first-child', ulInsertInto)) : ulItems.insertAfter($('> li:nth-child(' + (position - 1) + ')', ulInsertInto))
    }
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