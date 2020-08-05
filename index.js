function getFirstSelector(selector) {
  return document.querySelector(selector); //returns the first selector that matches
  //must put return and semi-colon in order to work
}

function nestedTarget() {
  return document.querySelector('#nested .target'); //#nested is an id. # refers to id
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, i < rankedLists.length; i++) {
    rankedLists[i]
  }
}
