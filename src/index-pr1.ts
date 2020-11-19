//class 대신 interface를 사용하기도 함

interface Human {
	name: string;
	age: number;
	gender: string;
}

const person = {
	name: 'URE',
	age: 22,
	gender: 'male',
};

const sayHi = (person: Human): string => {
	return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
