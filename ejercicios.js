RETO TÉCNICO:

Implementa una función que recibe un arreglo de strings con nombres de personas, y retorna un nuevo arreglo de strings con los nombres formateados de la siguiente manera:

const getPrintableNames = (arr) => {
  arr.forEach(person => {
      person.toLowerCase();
      person.charAt(0).toUpperCase();
      let twoWords = person.split(" ");
      let firstName = twoWords[0].slice(0,2)  + ".";
      let middleName = twoWords[1].charAt(0).toUpperCase();
      completeName = firstName + " " + middleName;
  });
};

const people = ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE'];
console.log(getPrintableNames(people));
// [ 'M. Curie', 'M. Anning', 'A. Lovelace', 'S. Ride' ]