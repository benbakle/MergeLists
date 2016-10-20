describe("The mergeLists function", function () {
    var ulString = "<ul><li>This</li><li>Into</li></ul>";
    var ulInsertIntoString = "<ul><li>TH</li><li>AT</li></ul>";
    var flag = true;
    it("marks each list item", function () {
        var $ul = $(ulString);
        var $ulInto = $(ulInsertIntoString);
        mergeLists($ul, $ulInto, false);
        var listItemsContainClass = true;
        $("> li", $ul).each(function () {
            listItemsContainClass = $(this).hasClass("appended-item") && listItemsContainClass;
        });     

        expect(listItemsContainClass).toBe(true);
    });

    it("given the decending flag is set", function () {
        var $ul = $(ulString);
        var $ulInto = $(ulInsertIntoString);
        var $ulRev = $ul.clone();
        mergeLists($ul, $ulInto, flag);
        reverseList($ulRev);
        addClassToListItems($ulRev, "appended-item");
        expect($ul.html()).toEqual($ulRev.html());
    });

    it("given insert position is 1", function () {
        var $ul = $(ulString);
        var $ulInto = $(ulInsertIntoString);
        var insertPosition = 1;
        
       // var ulItems = listItems(ulInsert);

        expect().toEqual();
    });





    //it("given a target list is empty", function () {
    //    var $ul = $(ulString);
    //    var $ulListItems = listItems($ul);
    //    var $targetUL = $("<ul></ul>");

    //    var $resultUL = $targetUL.clone().append($ulListItems);
    //    mergeLists($ul, $targetUL, false);

    //        expect($ul).toEqual($resultUL);
    //    });
    });


    //The mergeLists function 
    //	adds class to given list items
    //	given the decending flag is set
    //		reverses the list
    //	given a target list is not empty
    //		and position is 1 
    //			inserts source list items before the target list first item
    //		and position is greater than 1
    //			inserts source list items after the target list item at the given position 
    //	given a target list is empty
    //		adds source list items to target list