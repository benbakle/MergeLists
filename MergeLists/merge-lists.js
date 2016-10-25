(function (window) {
    window.mergeLists = mergeLists;
    window.addListItemToList = addListItemToList;

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

    //::  HELPER FUNCTIONS :://
    function listLength(ul) {
        return ul.find(">li").length;
    }

    function listItems(ul) {
        return $('> li', ul);
    }


    //::  HELPER METHODS :://
    function addListItemToList(listItem, ul, position) {
        var ul_len = listLength(ul);
        (position > ul_len) ? $("> li:last-child", ul).after(listItem) : $("> li:nth-child(" + position + ")", ul).before(listItem);
    }
    function addClassToListItems(ul, className) {
        $("li", ul).each(function () {
            $(this).addClass(className);
        });
    }

    function reverseList(ul) {
        ul.children().each(function (i, li) {
            ul.addClass("reversed").prepend(li)
        });
    }


})(window);
