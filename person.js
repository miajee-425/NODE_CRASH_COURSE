class Person
{    
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    generate() 
    {
     console.log(`Hi My Name Is : ${this.name} & I am ${this.age}`);   
    }
}

module.exports = Person