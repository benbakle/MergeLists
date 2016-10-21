describe("The mergeLists function", function () {
    var ulString = "<ul><li>This</li><li>Into</li></ul>";
    var ulInsertIntoString = "<ul><li>TH</li><li>AT</li></ul>";
    var emptyListString = "<ul></ul>";
    var position = 1;

    it("marks each inserted list item", function () {
        var $ul = $(ulString);
        var $ulInto = $(ulInsertIntoString);
        mergeLists($ul, $ulInto,position, false);

        var listItemsContainClass = true;
        $("> li", $ul).each(function () {
            listItemsContainClass = $(this).hasClass("appended-item") && listItemsContainClass;
        });

        expect(listItemsContainClass).toBe(true);
        expect($ul).toEqual($ul);
    });

    describe("given the decending flag is set to true", function () {
        var $ul, $ulInto, $ulExpectedResult;
        beforeEach(function () {
            $ul = $(ulString);
            $ulInto = $(ulInsertIntoString);
            $ulExpectedResult = $ul.clone();
            var decending = true;
            mergeLists($ul, $ulInto,position, decending);
        });
        it("reverses the list items", function () {
            reverseList($ulExpectedResult);
            addClassToListItems($ulExpectedResult, "appended-item");
            expect($ul.html()).toEqual($ulExpectedResult.html());
        });
    })

    describe("given the decending flag is set to false", function () {
        var $ul, $ulInto, $ulExpectedResult;
        $ul = $(ulString);
        $ulInto = $(ulInsertIntoString);
        $ulExpectedResult = $ul.clone();
        beforeEach(function () {
            mergeLists($ul, $ulInto,position, false);
        });
        it("it does not reverses the list items", function () {
            addClassToListItems($ulExpectedResult, "appended-item");
            expect($ul.html()).toEqual($ulExpectedResult.html());
        });
    })

    describe("given a target list is empty", function () {
        var $ul, $ulInto, $ulExpectedResult, $ulListItems;
        beforeEach(function () {
            $ul = $(ulString);
            $ulListItems = listItems($(ulString));
            $ulInto = $("<ul></ul>");
            $ulExpectedResult = $ulInto.clone();
            mergeLists($ul, $ulInto,position, false);
        });
        it("adds source list items to target list", function () {
            $ulExpectedResult.append($ulListItems);
            addClassToListItems($ulExpectedResult, "appended-item");
            expect($ulInto.html()).toEqual($ulExpectedResult.html());
        });

    });

    describe("given a target list is not empty", function () {
        var $ul, $ulInto, $ulExpectedResult, $ulListItems;
        beforeEach(function () {
            $ul = $(ulString);
            $ulListItems = listItems($(ulString));
            $ulInto = $(ulInsertIntoString);
            $ulExpectedResult = $ulInto.clone();
            mergeLists($ul, $ulInto,position, false);
        });
        it("do nothing to target list", function () {
            expect($ulInto.html()).toEqual($ulExpectedResult.html());
        })

        describe("and position is 1", function () {

            it("inserts source list items before the target list's first item", function () {

                expect().toEqual();
            });

        });
        describe("and position is greater than 1", function () {

            it("inserts source list items after the target list's item at given position", function () {

                expect().toEqual();
            });


        });
    });
});


//The mergeLists function 
//	adds class to given list items
//	given the decending flag is set
//		reverses the list




//	given a target list is not empty
//		and given position is 1 
//			inserts source list items before the target list first item
//		and given position is greater than 1
//			inserts source list items after the target list item at the given position 



//	given a target list is empty
//		adds source list items to target list