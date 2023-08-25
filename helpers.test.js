const { findMean, findMedian, findMode } = require("./helpers");

describe("#findMean", () => {
  it("finds the mean of an empty array", () => {
    expect(findMean([])).toEqual(0);
  });
  it("finds the mean of an array of numbers", () => {
    expect(findMean([1, 2, 3, 4, 5])).toEqual(3);
  });
});

describe("#findMedian", () => {
  it("finds the median of an empty array", () => {
    expect(findMedian([])).toEqual(0);
  });
  it("finds the median of an odd-length array", () => {
    expect(findMedian([1, 2, 3, 4, 5])).toEqual(3);
  });
  it("finds the median of an even-length array", () => {
    expect(findMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });
});

describe("#findMode", () => {
  it("finds the mode of an empty array", () => {
    expect(findMode([])).toEqual(0);
  });
  it("finds the mode of an array of numbers", () => {
    expect(findMode([1, 2, 3, 4, 5])).toEqual(1);
  });
});
