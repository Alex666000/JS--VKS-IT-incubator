/*
/!*
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
*!/

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
// sm.removeEventListener('click', onClickHandler)*/


// 4 lesson: sort() - сортировка алгоритм очень сложный:

/*
// очередность по юникоду: сначала цифры потом заглавные английские и тд см. таблицу юникода:
const names = ['Alex', 'Bob', 'Donald', 'Vlad', '007', 'alex', 'юрий']

console.log(names.sort())

const numbers = [100, 99, 665, 1000, 2]

// return  > 0 => перестановка
// return  <= 0 => перестановки не будет

const compFn = (a, b) => { // по возрастанию сравниваются попарно числа
    if (a > b) {
        return 10 // вернем лубое число большее нуля
    } else {
        return -10
    }
}

console.log([...numbers].sort((a, b) => a - b)) // sort "мутабельный" метод

// localCompare() - метод сравнивает и сортирует строки удобно использовать когда сортируем объекты

// users.sort((a,b)=> a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
// users.sort((a,b)=> a.name.localeCompare(b.name)*/

// bubble sort: пузырьковая сортировка - цикл в цикле потому что иначе мы просто самое большое число продвинем в конецБ а тут все числа: сложность O(n2 - тяжелый алгоритм)
const nums = [13, 45, 67, 12, 99, 87] // ПО ВОЗРАСТАНИЮ
for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true // если отсортирован то выйдем из цикла
    for (let j = 0; j < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            /*     let temp = nums[i]
                 nums[i] = nums[i + 1]
                 nums[i + 1] = temp   */
// деструктуризация:
            [nums[i + 1], [nums[i]]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}

