describe("The mergeLists function", function () {
    it("marks each list item", function () {
        var $ul = $("<ul><li>Test</li><li>Test2</li></ul>");
        mergeLists($ul);
        expect($("li", $ul).hasClass("appended-item")).toBe(true);



            //$("> li", $ul).each(function () {
            // console.log($(this));
            // return $(this).hasClass("appended-item");

    });
});




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