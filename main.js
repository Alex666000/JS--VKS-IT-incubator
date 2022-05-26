// 1 занятие JS: Копирование объектов в Реакт:
const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "John"],
    address: {
        city: "Boborujsk",
        street: "Lenina"
    }
}

const copyUser = {...user, friends: [...user.friends], address: {...user.address} }

const deepCopy = structuredClone(user)
console.log(deepCopy)

const students = [
    {name: 'Alex'},
    {name: 'Kot'},

]
const copyStudents = students.map(student => ({...student}))
// 2 занятие JS: :
