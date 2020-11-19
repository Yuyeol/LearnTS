// 인터페이스 대신 클래스를 사용할 수 있음
// js로 컴파일할때 그대로 볼 수 있음
// 인터페이스는 js에서 볼 수 없음
// 인터페이스는 안정적이지만 react나 다른 것과 함께 사용해야 한다면 class를 사용해야함.

class Human {
	public name: string;
	public age: number;
	public gender: string;
	constructor(name: string, age: number, gender: string) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const lynn = new Human('lynn', 18, 'female');

const sayHi = (person: Human): string => {
	return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {};
