enum Place { Home, Outside }

interface Pet {
  name: string;
  place: Place;
}

interface Cat extends Pet {
  catField: string;
}

interface Dog extends Pet {
  dogField: string;
}

const cat: Cat = {
  name: 'Alisa',
  place: Place.Home,
  catField: 'some value',
};

const dog: Dog = {
  name: 'Gerda',
  place: Place.Outside,
  dogField: 'some value',
};


const printPetName = (pet: Pet) => {
  console.log(pet.name);
}

const printPetNameGeneric = <T extends Dog | Cat>(pet: T) => {
  console.log(pet.name);
  if ('dogValue' in pet) {
    console.log(pet.dogValue);
  }
}

printPetNameGeneric<Dog>(dog)