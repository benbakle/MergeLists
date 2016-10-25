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

