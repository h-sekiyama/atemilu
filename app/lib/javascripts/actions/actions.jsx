let femaleId = 0;
let femaleData = {};
let sumData = {
  good: 0,
  bad: 0
}
var content ="";
var imgUrl = "";

const returnFemale = () => {
  femaleData = {
    id: ++femaleId,
    text: '女性' + femaleId,
    image: $(content[0]).find('img')[femaleId]['src']
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

changeFemale();

function changeFemale() {
  $.ajax({
    url: 'http://images.search.biglobe.ne.jp/cgi-bin/search?q=%E4%B8%8D%E7%B4%B0%E5%B7%A5%20%E7%8C%AB&start=40',
    type: 'GET',
    success: function(data) {
      console.log(data);
      content = $(data.responseText).find('.clearfix');
      imgUrl = $(content[0]).find('img')[0]['src'];
      console.log(imgUrl);
    }
  });
}

export function nextFemale(favorite) {
  femaleData = returnFemale();
  sumData = returnSum(favorite);
  changeFemale();
  return {
    id: femaleData.id,
    text: femaleData.text,
    image: femaleData.image,
    sumData: sumData,
    type: 'CLICK'
  };
}