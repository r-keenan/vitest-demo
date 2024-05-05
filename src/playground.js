const developer = {
  salary: 100000,
  experience: 4,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log(developer.salary); // 100000
console.log(developer.lookingForWork); // true

developer.doubleSalary();

console.log(developer.salary); // 200000
console.log(developer.lookingForWork); // false
