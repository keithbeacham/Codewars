class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.items = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.items.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
      return -1;
    }
    if (
      pageIndex === this.pageCount() - 1 &&
      this.itemCount() % this.itemsPerPage
    ) {
      return this.itemCount() % this.itemsPerPage;
    }
    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex >= this.itemCount() || itemIndex < 0) {
      return -1;
    }
    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
  }
}

module.exports = PaginationHelper;
