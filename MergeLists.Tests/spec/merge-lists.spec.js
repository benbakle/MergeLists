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
        $("> li", sourceList).each(function () {
            listItemsContainClass = $(this).hasClass("appended-item") && listItemsContainClass;
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
