var LetterList = function(){
  this.list = null;
};

LetterList.prototype.init = function (listData) {
  this.list = listData;
};

LetterList.prototype.character = function () {
  return this.list.atoz_programmes.character;
};
module.exports = LetterList;
