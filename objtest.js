let testobject1 = {
    name: 'sagar',
    index: 1,
    f1: function () {
        console.log(`the name is ${this.name} of ${this.index}`);
    },
    objecttwo : {
        name: 'rokade',
        index: 2,
        f1: function () {
            console.log(`the name is ${this.name} of ${this.index}`);
        }
    }
}

console.log('testobject1.f1()',testobject1);
testobject1.f1();
testobject1.objecttwo.f1()