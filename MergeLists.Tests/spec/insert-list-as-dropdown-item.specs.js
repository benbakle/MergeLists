describe("The insertListAsDropdownItem function", function () {
    var fixture, dropdownItemName, sourceList, targetList, parentPosition, childPosition;

    beforeEach(function () {
        fixture = setUpHTMLFixture();
        dropdownItemName = "Sublist Parent";
        sourceList = fixture.find(".list1");
        targetList = fixture.find(".list2");
        console.log(sourceList);
        parentPosition = 1;
        childPosition = 1;
    });
    describe("given the target list is empty", function () {
        beforeEach(function () {
            insertListAsDropdownItem(dropdownItemName, sourceList, targetList, parentPosition, childPosition)
        });
        it("formats the target list's parent as a dropdown", function () {
            expect($("> li:first-child > ul > li:first-child", targetList)).toHaveClass("dropdown");
        });
    });
});

// given the target list is empty
//   format target list's parent as dropdown
//   add list item to target list with display set to none 

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