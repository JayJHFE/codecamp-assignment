// 보너스 - 1

const classmates = [
    {name: "철수", age: 10, school: "토끼초등학교" },
    {name: "영희", age: 13, school: "다람쥐초등학교" },
    {name: "훈이", age: 11, school: "토끼초등학교" }
]

// 1번 
classmates.map(el => {
    if(el.school === "토끼초등학교") {
       return  el.candy = 10;
    }
})

// 2번
const newClassMates = classmates.map(el => {
    if(el.school === "다람쥐초등학교") {
       return  {name:el.name + "어린이", age: el.age, school:el.school};
    } else {
       return  {name:el.name, age: el.age, school:el.school}
    }
})

console.log(newClassMates);


// 보너스 - 2

const result =fruits.filter(fruit => fruit.number % 2 ==0);
{result.map(el => <div>{el}</div>)}