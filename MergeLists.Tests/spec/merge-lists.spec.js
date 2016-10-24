describe("The mergeLists function", function () {

    var fixture, sourceList, targetList, expectedResult;

    //jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    //loadFixtures('listsFixture.html');
    //fixture = loadFixtures("listsFixture.html");

    it("marks each inserted list item", function () {
        var fixture, sourceList, targetList;
        fixture = setUpHTMLFixture();
        sourceList = fixture.find(".list1");
        targetList = fixture.find(".list2");
        mergeLists(sourceList, targetList, 1, false);
        var listItemsContainClass = true;
        $("> li", sourceList).each(function () {
            listItemsContainClass = $(this).hasClass("appended-item") && listItemsContainClass;
        });

        expect(listItemsContainClass).toBe(true);
    });

    describe("given the decending flag is set to true", function () {
        var fixture, sourceList, targetList;
        fixture = setUpHTMLFixture();
        sourceList = fixture.find(".list1");
        targetList = fixture.find(".list2");
        var expectedResult = sourceList.clone();
        mergeLists(sourceList, targetList, 1, true);
        it("reverses the list items", function () {
            reverseList(expectedResult);
            addClassToListItems(expectedResult, "appended-item");
            expect(targetList.html()).toContain(expectedResult.html());
        });
    })

    describe("given the decending flag is set to false", function () {
        var fixture, sourceList, targetList;
        fixture = setUpHTMLFixture();
        sourceList = fixture.find(".list1");
        targetList = fixture.find(".list2");
        var expectedResult = sourceList.clone();
        var decending = false;
        mergeLists(sourceList, targetList, 1, decending);
        it("it does not reverses the list items", function () {
            addClassToListItems(expectedResult, "appended-item");
            expect(targetList.html()).toContain(expectedResult.html());
        });
    })

    describe("given a target list is empty", function () {
        var fixture, sourceList, targetList;
        fixture = setUpHTMLFixture();
        sourceList = fixture.find(".list1");
        targetList = $("<ul></ul>")
        var expectedResult = sourceList.clone();
        mergeLists(sourceList, targetList, 1, false);
        it("adds source list items to target list", function () {
            expectedResult.append(listItems(sourceList));
            addClassToListItems(expectedResult, "appended-item");
            expect(targetList.html()).toEqual(expectedResult.html());
        });

    });

    describe("given a target list is not empty", function () {
        describe("and position is 1", function () {
            var fixture, sourceList, targetList;
            fixture = setUpHTMLFixture();
            sourceList = fixture.find(".list1");
            targetList = fixture.find(".list2");
            var expectedResult = sourceList.clone();
            var position = 1;
            mergeLists(sourceList, targetList, position, false);
            it("inserts source list items before the target list's first item", function () {
                var insertedCorrectly = true;
                for (i = 1; i < 4; i++) {
                    insertedCorrectly = $("> li:nth-child(" + i + ")", targetList).html() == $("> li:nth-child(" + i + ")", expectedResult).html();
                }
                expect(insertedCorrectly).toEqual(true);
            });

        });
        describe("and position is greater than 1", function () {
            var fixture, sourceList, targetList;
            fixture = setUpHTMLFixture();
            sourceList = fixture.find(".list1");
            targetList = fixture.find(".list2");
            var expectedResult = sourceList.clone();
            var position = 2;
            mergeLists(sourceList, targetList, position, false);
            it("inserts source list items after the target list's item at given position", function () {
                var insertedCorrectly = true;
                for (i = position; i < position + 3; i++) {
                    insertedCorrectly = $("> li:nth-child(" + i + ")", targetList).html() == $("> li:nth-child(" + (i - 1) + ")", expectedResult).html();
                }
                expect(insertedCorrectly).toEqual(true);

            });


        });
    });

});

describe("The addListItemToList function", function () {
    describe("given list Item target position is less than target list length", function () {
        var fixture, sourceList, targetList;
        var item = $("<li>New Item</li>");
        fixture = setUpHTMLFixture();
        targetList = fixture.find('.list2');
        addListItemToList(item, targetList, 2);
        it("insert list item at target position", function () {
            expect($("li:nth-child(2)", targetList)).toEqual(item);
        });
    });
    describe("given list Item target position is greater than target list length", function () {
        var fixture, sourceList, targetList;
        var item = $("<li>New Item</li>");
        fixture = setUpHTMLFixture();
        targetList = fixture.find('.list2');
        var position = listLength(targetList) + 1;
        addListItemToList(item, targetList, position);
        it("insert list item in last position of target list", function () {
            expect($("li:last-child", targetList)).toEqual(item);


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
