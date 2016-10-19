describe("The mergeLists function", function () {
    it("marks each list item", function () {
        var $ul = $("<ul><li>Test</li><li>Test2</li></ul>");
        mergeLists($ul,false);
        var listItemsContainClass= true; 
        $("> li", $ul).each(function () {
            listItemsContainClass = $(this).hasClass("appended-item") && listItemsContainClass;
        });
        expect(listItemsContainClass).toBe(true);
    });

    it("given the decending flag is set", function () {
        var $ul = $("<ul><li>Test</li><li>Test2</li></ul>");
        var $ulRev = $ul.clone();
        //:: $ulRev TO MATCH $ul
        $ulRev = reverseList($ulRev);
        addClassToListItems($ulRev, "appended-item");
        mergeLists($ul, false);
        expect($ul.html()).toEqual($ulRev.html());
    });
    it("given a target list is empty", function () {
        
        expect().toEqual();
    });
});



function reverseList(ul) {
  return  $(("> li", ul).get().reverse()).wrap("<ul></ul>").addClass("reversed");
}

function addClassToListItems(ul, className) {
    $("li", ul).each(function () {
        $(this).addClass(className);
    });
}

function stringToList(ulString) {
    $("> li:first-child", ulString).before("<ul>");
    $("> li:last", ulString).after("</ul>");

}

//The mergeLists function 
//	adds class to given list items
//	given the decending flag is set
//		reverses the list
//	given a target list is	empty
//		adds source list items to target list
//	given a target list is not empty
//		and position is 1 
//			inserts source list items before the target list first item
//		and position is greater than 1
//			inserts source list items after the target list item at the given position 