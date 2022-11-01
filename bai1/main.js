const array1 = [1, 2, "a"];
const array2 = [1, 3, "b"];

const handleArray = (array1, array2) => {
    const newArray1 = array1.filter(value => !array2.includes(value))
    const newArray2 = array2.filter(value => !array1.includes(value))
    return result = newArray1.concat(newArray2);
}

console.log(handleArray(array1, array2));


// Bai 2

const tableLeague = [
    {
      name: "Arsenal",
      points: 99,
      GD: 45
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39
    },
    {
      name: "Manchester United",
      points: 60,
      GD: 30
    },
    {
      name: "Liverpool",
      points: 60,
      GD: 29
    },
  ]
  
  const handleRanking = (array) => {
    let newArray = array.sort((a,b)=> (b.points - a.points || b.GD - a.GD || ('' + a.name).localeCompare(b.name)))
    
    for (let i = 0; i < newArray.length; i++) {
        newArray[i].position = i + 1;
    }
    return newArray
  }
  
  console.log(handleRanking(tableLeague))