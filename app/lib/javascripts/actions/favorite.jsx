let femaleId = 0;
let femaleData = {};
let sumData = {
  good: 0,
  bad: 0
}
var content = "";
var imgUrl = "";

const returnFemale = () => {
  var rand2 = Math.floor( Math.random() * 20);
  femaleData = {
    id: ++femaleId,
    text: '女性' + femaleId,
    image: $(content[0]).find('img')[rand2]['src']
  }
  return femaleData;
}

const returnSum = (favorite) => {
  switch(favorite) {
    case 'good':
      sumData.good = ++sumData.good;
      break;
    case 'bad':
      sumData.bad = ++sumData.bad;
      break;
  }
  return sumData;
}

changeFemaleImage();

function changeFemaleImage() {
  var rand1 = Math.floor( Math.random() * 731);
  // var rand2 = Math.floor( Math.random() * 20);
  $.ajax({
    // url: 'http://images.search.biglobe.ne.jp/cgi-bin/search?q=%E5%8F%B0%E6%B9%BE+%E5%A5%B3%E6%80%A7&start=' + rand1,
    url: 'http://images.search.biglobe.ne.jp/cgi-bin/search?q=台湾+女性&start=' + rand1,
    type: 'GET',
    success: function(data) {
      content = $(data.responseText).find('.clearfix');
      console.log($(content[0]).find('img'));
      // imgUrl = $(content[0]).find('img')[rand2]['src'];
    }
  });
}

export function nextFemale(favorite) {
  femaleData = returnFemale();
  sumData = returnSum(favorite);
  changeFemaleImage();
  return {
    id: femaleData.id,
    text: femaleData.text,
    image: femaleData.image,
    sumData: sumData,
    type: 'CLICK'
  };
}

export function chatWithFemale() {
  return {
    id: femaleData.id,
    text: femaleData.text,
    image: femaleData.image,
    sumData: sumData,
    type: 'CHAT'
  };
}