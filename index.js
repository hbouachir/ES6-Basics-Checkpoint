var pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

const getAge= (pet)=> new Date().getFullYear() - pet.bornOn;


var petsWithAge = pets.map(p=>p.bornOn);
 
console.log(petsWithAge);

var dogs =pets.filter(p=>p.type===`dog`);

console.log(dogs);

var jasper=pets.find(p=>p.name===`Jasper`);

console.log(`Jasper is  ${jasper.age}  years old`);
