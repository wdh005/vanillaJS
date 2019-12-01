//alert('Im Working. Im JS. ImBeautiful'); 경고문 생성
//let 은 변수를 선언할 때 사용
//const는 상수를 선언할 때 사용
//boolean 값 true, false -> true =1, false = 0
//배열을 사용하고 싶을 때 array Object를 사용할 수 있다.
//array는 여러개의 string을 묶어주는 역할을 한다. 
//사용할 때는 []를 이용 ex) const wat = ["haah", "hoho"];
//number, boolean, string, float 타입 전부 가능
//Object는 각 value에 이름을 줄 수 있다
/*Object ex) const info = {
    name: "jh",
    age: 23
}; */
//Object안에 array 입력 가능 Array안에 Object입력 가능 
//함수 만드는 법
//``(빽틱)을 사용해서 문자열과 변수를 따로 쓰지 않고 한 번에 사용할 수 있다.
//변수를 사용할 때는 ${변수명} 이렇게 사용 
function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("jh", 23);
console.log("Hi");

const calculator = {
    plus: function(a,b) {
        return a + b;
    },
    minus: function(a,b) {
        return a - b;
    },
    mul: function(a,b) {
        return a * b;
    },
    div: function(a,b) {
        return a / b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(10,5);
const mul = calculator.mul(5,5);
const div = calculator.div(5,5);

console.log(plus,minus,mul,div);