function sortNames(namesArray) {
    return namesArray.sort((a, b) => a.localeCompare(b));
  }
  
  console.log(sortNames(["Charlie", "Alice", "Bob"]));
  