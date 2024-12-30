const PersonProto = {
    calcAge() {
      console.log(2024 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const rudolf = Object.create(PersonProto);
  console.log(rudolf);
  rudolf.name = 'Rudolf';
  rudolf.birthYear = 2002;
  rudolf.calcAge();
  
  console.log(rudolf.__proto__ === PersonProto);
  
  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 2005);
  sarah.calcAge();