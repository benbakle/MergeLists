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