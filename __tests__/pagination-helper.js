const PaginationHelper = require("../src/PaginationHelper");

/*
DESCRIPTION:

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/

describe("PaginationHelper", () => {
  test("with collection length 6 and 4 items per page, itemCount returns 6, pageCount returns 2", () => {
    const helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 4);
    expect(helper.itemCount()).toBe(6);
    expect(helper.pageCount()).toBe(2);
  });
  test("with collection length 6 and 4 items per page, pageIndex returns correct page for given item index and -1 if itemIndex is out of range", () => {
    const helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 4);
    expect(helper.pageIndex(2)).toBe(0);
    expect(helper.pageIndex(5)).toBe(1);
    expect(helper.pageIndex(20)).toBe(-1);
    expect(helper.pageIndex(-10)).toBe(-1);
  });
  test("with collection length 6 and 4 items per page, pageItemCount returns correct number of items on page for given page index and -1 if pageIndex is out of range", () => {
    const helper = new PaginationHelper([1, 2, 3, 4, 5, 6], 4);
    expect(helper.pageItemCount(0)).toBe(4);
    expect(helper.pageItemCount(1)).toBe(2);
    expect(helper.pageItemCount(2)).toBe(-1);
    expect(helper.pageItemCount(-1)).toBe(-1);
  });
});
