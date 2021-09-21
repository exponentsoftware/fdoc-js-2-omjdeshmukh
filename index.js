const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

function createArrayOfArrays(arr) {
    arr.map((item)=>{
        let narr = []
        narr.push(item)
        narr.push(item.slice(0,3))
        narr.push(item.length)
       return console.log(narr);
    })
}

 createArrayOfArrays(countries);