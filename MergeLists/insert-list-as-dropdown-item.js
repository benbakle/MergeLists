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

