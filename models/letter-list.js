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

LetterList.prototype.programmesList = function () {
    var urls = [];
    for (var i = 0; i < this.programmes().length; i++) {
      urls.push({
        title: this.programmes()[i].title,
        image: this.programmes()[i].images.standard.replace (/{recipe}/, "560x315")
      });
    };
    return urls;
};

LetterList.prototype.nextPage = function () {
  return this.programmes().length === 20;
};

module.exports = LetterList;
