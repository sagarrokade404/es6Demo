function test() {
    return this.name;
}


var values = {
    name :'sagar'
};

console.log(test.call(values));