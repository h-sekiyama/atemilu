let femaleId = 0;
let femaleData = {};
let sumData = {
  good: 0,
  bad: 0
}

const returnFemale = () => {
  femaleData = {
    id: ++femaleId,
    text: '女性' + femaleId,
    image: './images/female' + femaleId + '.jpg'
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

/*
  Action Creator:
  Appコンポーネント (src/App.js) から呼ばれる Action Creator群
  App.jsから呼ばれ、Action Creator内部で生成されたオブジェクトはreducer (./reducers) に渡される。
*/

//addText (Action Creator) : Appコンポーネント (App.js) でAddボタンを呼び出した時に呼ばれる。
// type (何のアクションなのかを示す定数であり必須) とApp.jsから渡されたテキストを包含したオブジェクトを return する。
export function nextFemale(favorite) {
  femaleData = returnFemale();
  sumData = returnSum(favorite);
  return {
    id: femaleData.id,
    text: femaleData.text,
    image: femaleData.image,
    sumData: sumData,
    type: 'CLICK'
  };
}