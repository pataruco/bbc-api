var LetterList = function(){
  this.list = null;
};

LetterList.prototype.init = function (listData) {
  this.list = listData;
};

LetterList.prototype.character = function () {
  return this.list.atoz_programmes.character;
};

LetterList.prototype.programmes = function () {
  return this.list.atoz_programmes.elements;
};

LetterList.prototype.page = function () {
  return this.list.atoz_programmes.page;
};
module.exports = LetterList;
