//1:map
const map = new Map();

//2:using arrow function:
//3: using async syntax:
//4:default parameter:
const fetchData = async (numProds = -1) => {
  try {
    let url = "";
    if (numProds <= 0 && numProds !== -1) {
      throw new Error("number of products requested should be > 0");
    } else if (numProds === -1) {
      url = "https://dummyjson.com/products";
    } else {
      //5:using template literals:
      url = `https://dummyjson.com/products/${numProds}`;
    }

    const res = await fetch(url);
    const jsonData = await res.json();
    responseHandler(jsonData, numProds);
  } catch (e) {
    console.log(e);
  }
};

const responseHandler = (jsonData, numProds) => {
  console.log(jsonData);
  if (numProds === -1) {
    //6:destructuring syntax:
    const { products } = jsonData;
    products.forEach((element) => {
      map.set(element.id, true);
    });
    console.log(map);
  } else {
    //7:spread operator:
    const newJsonData = { ...jsonData, checked: true };
    console.log(newJsonData);
  }
};
