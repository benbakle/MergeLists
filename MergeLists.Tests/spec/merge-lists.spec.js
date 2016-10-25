describe("The merge-lists suite has", function () {

    //:: MERGE LIST AS SUB FUNCTION :://
    describe("The mergeLists function", function () {
        var fixture, sourceList, targetList, expectedResult;
        beforeEach(function () {
            fixture = setUpHTMLFixture();
            sourceList = fixture.find(".list1");
            targetList = fixture.find(".list2");
        });
        it("marks each inserted list item", function () {
            mergeLists(sourceList, targetList, 1, false);
            var listItemsContainClass = true;
            $("> li", targetList).slice(0, 3).each(function () {
                listItemsContainClass = ($(this).hasClass("appended-item")) && listItemsContainClass;
            });
            expect(listItemsContainClass).toBe(true);
        });
        describe("given the decending flag is set to true", function () {
            beforeEach(function () {
                mergeLists(sourceList, targetList, 1, true);
            });
            it("reverses the list items", function () {
                expect(targetList.html()).toContain('<li class="appended-item">List 1 Item 3</li><li class="appended-item">List 1 Item 2</li><li class="appended-item">List 1 Item 1</li>');
            });
        })
        describe("given the decending flag is set to false", function () {
            beforeEach(function () {
                var decending = false;
                mergeLists(sourceList, targetList, 1, decending);
            });
            it("it does not reverses the list items", function () {
                expect(targetList.html()).toContain('<li class="appended-item">List 1 Item 1</li><li class="appended-item">List 1 Item 2</li><li class="appended-item">List 1 Item 3</li>');
            });
        })
        describe("given a target list is empty", function () {
            beforeEach(function () {
                targetList = $("<ul></ul>")
                mergeLists(sourceList, targetList, 1, false);
            });
            it("adds source list items to target list", function () {
                expect(targetList.html()).toEqual('<li class="appended-item">List 1 Item 1</li><li class="appended-item">List 1 Item 2</li><li class="appended-item">List 1 Item 3</li>');
            });
        });
        describe("given a target list is not empty", function () {
            var position;
            describe("and position is 1", function () {
                beforeEach(function () {
                    position = 1;
                    mergeLists(sourceList, targetList, position, false);
                });
                it("inserts source list items before the target list's first item", function () {
                    expect($("> li:first-child", targetList).html()).toEqual("List 1 Item 1");
                    expect($("> li:nth-child(2)", targetList).html()).toEqual("List 1 Item 2");
                    expect($("> li:nth-child(3)", targetList).html()).toEqual("List 1 Item 3");
                });
            });
            describe("and position is greater than 1", function () {
                beforeEach(function () {
                    position = 2;
                    mergeLists(sourceList, targetList, position, false);
                });
                it("inserts source list items after the target list's item at given position", function () {
                    expect($("> li:first-child", targetList).html()).toEqual("List 2 Item 1");
                    expect($("> li:nth-child(2)", targetList).html()).toEqual("List 1 Item 1");
                    expect($("> li:nth-child(3)", targetList).html()).toEqual("List 1 Item 2");
                    expect($("> li:nth-child(4)", targetList).html()).toEqual("List 1 Item 3");
                });
            });
        });
    });

    //:: MERGE LIST AS SUB FUNCTION :://
    describe("The mergeListAsSub function", function () {
        var fixture, sourceList, targetList, position, decending, newListItem;
        beforeEach(function () {
            fixture = setUpHTMLFixture();
            sourceList = fixture.find(".list1");
            targetList = fixture.find(".list2");
            position = 2;
            decending = false;
            newListItem = "New Item";
        });
        describe("given a new list item", function () {
            beforeEach(function () {
                mergeListAsSub(sourceList, targetList, position, decending, newListItem)
            });
            it("inserts new list item as a link into target list at given position", function () {
                expect($("> li:nth-child(2)", targetList).html()).toContain('<a href="#">New Item</a>');
            })
        });
        beforeEach(function () {
            mergeListAsSub(sourceList, targetList, 2, decending, newListItem)
        });
        it("marks target position as a dropdown", function () {
            expect($("> li:nth-child(2)", targetList)).toHaveClass('dropdown');
        });
        it("uses the mergeList function to insert source list into target position", function () {
            expect($("> li:nth-child(2) > ul > li", targetList).length).toEqual(3);


        });
    });


    //:: INSERT LIST AS DROPDOWN FUNCTION :://
    describe("The insertListAsDropdownItem function", function () {
        var fixture, dropdownItemName, sourceList, targetList, parentPosition, childPosition;

        beforeEach(function () {
            fixture = setUpHTMLFixture();
            dropdownItemName = "Sublist Parent";
            sourceList = fixture.find(".list1");
            targetList = fixture.find(".list2");
            parentPosition = 2;
            childPosition = 1;
            insertListAsDropdownItem(dropdownItemName, sourceList, targetList, parentPosition, childPosition)

        });
        describe("given the target parent position is not a list", function () {
            beforeEach(function () {
                insertListAsDropdownItem(dropdownItemName, sourceList, targetList, parentPosition, childPosition)
            });

            it("formats the target parent as a dropdown list", function () {
                expect($("> li:nth-child(2)", targetList)).toHaveClass("dropdown")
            });
            it("adds hidden empty list item to the newly created dropdown list", function () {
                expect($("> li:nth-child(2) > ul > li:last-child", targetList)).toBeHidden();
            });
        });

        it("inserts item into target list at given parent position and given child position", function () {
            expect($("> li:nth-child(2) > ul > li:first-child", targetList).html()).toEqual('<a href="#">Sublist Parent</a><ul><li class="appended-item">List 1 Item 1</li><li class="appended-item">List 1 Item 2</li><li class="appended-item">List 1 Item 3</li></ul>');
        });
        it("merges the source list into target list at child position", function () {
            expect(targetList.html()).toEqual('<li>List 2 Item 1</li><li class="dropdown">List 2 Item 2<ul><li class="inserted-item dropdown"><a href="#">Sublist Parent</a><ul><li class="appended-item">List 1 Item 1</li><li class="appended-item">List 1 Item 2</li><li class="appended-item">List 1 Item 3</li></ul></li><li style="display:none"></li></ul></li><li>List 2 Item 3</li>');
        })

    });

    describe("The splitMergedLists function", function () {
        beforeEach(function () {
            //get variables set up
            //mergeList
            //splitList
        });

        it("splits previously merged list from source list into target list", function () {
            expect(splitMergedLists).toExist();
        });
    });

});


function setUpHTMLFixture() {
    return setFixtures("<ul class='list1'>"
           + "<li>List 1 Item 1</li>"
           + "<li>List 1 Item 2</li>"
           + "<li>List 1 Item 3</li>"
           + "</ul>"
           + "<ul class='list2'>"
           + "<li>List 2 Item 1</li>"
           + "<li>List 2 Item 2</li>"
           + "<li>List 2 Item 3</li>"
           + "</ul>");
}
