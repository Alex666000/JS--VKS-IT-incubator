/*
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
// 2 занятие JS: : map filter()...........
....................................................................................................
....................................................................................................
*/

// 3 lesson:
// события всплавают target, currenTarget(тот элемент который вызывает функцию обработчик иногда таргет и каренттаргет совпадают но потом их пути расходятся) - событие на котором произошел клик и всплытие не распространяется дальше на элементы
// target(показывает тот элемент который сгенерировал объект события): path если посмотреть в консоле показывает все элементы где произошло событие которые всплыли
// таргет пример из жизни - как гвоздем проколоть много листов бумаги таргет событие которое родило событие потом его событие распрастраняется на родителя: currentTarget: null в консоли - значит событие родилось потом умерло


const sm = document.getElementById('small')

const onClickHandler = (e) => {
    // остановить всплытие = распрастранение
    e.stopPropagation()
    // предотвратититоь дефолтное поведение отправку формы или переход по ссылке:
    e.preventDefault()
    console.log(e.currentTarget.id);
}

// sm.onclick = onClickHandler
// sm.onclick = null

// sm.addEventListener('click', () => {alert('kkk')})

sm.addEventListener('click', onClickHandler)
// sm.removeEventListener('click', onClickHandler)