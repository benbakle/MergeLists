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


(function (window) {
    window.mergeListAsSub = mergeListAsSub;

    function mergeListAsSub(sourceList, targetList, position, decending, newListItem) {
        if (newListItem || "") {
            var listItem = toLinkListItem(newListItem);
            addListItemToList(listItem, targetList, position);
        }
        createSubList($("> li:nth-child(" + (position) + ")", targetList));
        targetList = $("> li:nth-child(" + position + ") > ul", targetList);
        mergeLists(sourceList, targetList, position, decending);
    }

    function toLinkListItem(itemName, href) {
        href = href || "#"
        return "<li class='inserted-item'><a href='" + href + "'>" + itemName + "</a></li>"
    }

    function createSubList(li) {
        $(li).addClass("dropdown").append("<ul></ul>");
    }

})(window);


(function (window) {
    window.insertListAsDropdownItem = insertListAsDropdownItem;

    function insertListAsDropdownItem(dropdownItemName, sourceList, targetList, parentPosition, childPosition) {
        var targetParent = getNthListItem(targetList, parentPosition);
        if (listIsEmpty($(" > ul ", targetParent))) {
            createSubList(targetParent);
            $(" > ul", targetParent).append("<li style='display:none'></li>")
        }
        var insertItem = toLinkListItem(dropdownItemName);
        addListItemToList(insertItem, $("> li:nth-child(" + parentPosition + ") > ul", targetList), childPosition);
        mergeListAsSub(sourceList, $("> li:nth-child(" + parentPosition + ") > ul", targetList), childPosition);
    }

    function getNthListItem(ul, childNum) {
        return ul.find("> li:nth-child(" + childNum + ")");
        debugger;
    }

    function listIsEmpty(ul) {
        return listLength(ul) == 0;
    }

    function listLength(ul) {
        return ul.find(">li").length;
    }

    function createSubList(li) {
        return $(li).addClass("dropdown").append("<ul></ul>");
    }

    function toLinkListItem(itemName, href) {
        href = href || "#"
        return "<li class='inserted-item'><a href='" + href + "'>" + itemName + "</a></li>"
    }
})(window);

(function (window) {
    window.splitMergedLists = splitMergedLists

    function splitMergedLists(sourceList, targetList) {

    }



})(window);
