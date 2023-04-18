function prettyPrint(obj) {
    return JSON.stringify(obj, null, 2);
  }
  
  const myObj = { name: "John", age: 30, city: "New York" };
  console.log(prettyPrint(myObj));