function getFirstSelector(selector) {
  return document.querySelector(selector); //returns the first selector that matches
  //must put return and semi-colon in order to work
}

function nestedTarget() {
  return document.querySelector('#nested .target'); //#nested is an id. # refers to id
}
