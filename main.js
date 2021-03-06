var generate = document.getElementById('generate')
var remember = document.getElementById('remember')
var insert = document.getElementById('insert')
var selection = document.getElementById('selection')
var merger = document.getElementById('merger')
var fast = document.getElementById('fast')
var linked = document.getElementById('linked')
var swap = document.getElementById('swap')
var insertValue = document.getElementById('insertValue')
var deleteValue = document.getElementById('delete')
var findByValue = document.getElementById('findByValue')
var findByIndex = document.getElementById('findByIndex')
var listSort = document.getElementById('listSort')
var doublylinked = document.getElementById('doublylinked')

var flag = 0
var arr
var list

let ul = document.getElementById('ul')
let sortedUl = document.getElementById('sorted')


// Обработчики событий

generate.onclick = () => {
    flag = 1
    deleteArray()
    deleteSortedArray()
    arr = generateRandom()
    ul.append(renderArray(arr))
}
// Создание связного списка
linked.onclick = () => {
    if (flag == 2) {
        list = new LinkedList()
        list.fromArray(arr)
        console.table(list.toArray());
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}
// Поменять местами
swap.onclick = () => {
    if (flag == 2) {
        let n1 = parseFloat(prompt('Первое значение:'))
        let n2 = parseFloat(prompt('Второе значение:'))
        list.swap(n1, n2)
        console.table(list.toArray());
        arrSwap(n1, n2)
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}
// Вставка
insertValue.onclick = () => {
    if (flag == 2) {
        let data = parseFloat(prompt('Что вставить?'))
        let position = parseFloat(prompt('Куда вставить?'))
        list.insert(data, position)
        console.table(list.toArray());
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}

deleteValue.onclick = () => {
    if (flag == 2) {
        let value = parseFloat(prompt('Что удалить?'))
        list.delete(value)
        console.table(list.toArray());
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}
findByValue.onclick = () => {
    if (flag == 2) {
        let value = parseFloat(prompt('Что найти?'))
        let index = list.findByValue(value)
        console.log(index);
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}
findByIndex.onclick = () => {
    if (flag == 2) {
        let index = parseFloat(prompt('На каком месте элемент?'))
        let result = list.findByIndex(index)
        console.log(result);
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}
listSort.onclick = () => {
    if (flag == 2) {
        list.insertionSort()
        let result = list.toArray()
        console.table(result);
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}

// Создание двусвязного списка
doublylinked.onclick = () => {
    if (flag == 2) {
        list = new DoublyLinkedList()
        list.fromArray(arr)
        console.table(list.toArray());
    } else if (flag == 1) {
        alert('Сначала сохраните массив')
    } else alert('Сгерируйте и сохраните массив')
}

// Поменять местами в массиве
function arrSwap(n1, n2) {
    let ind1 = arr.indexOf(n1)
    let ind2 = arr.indexOf(n2)
    setTimeout([arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]], 0)
    deleteArray()
    ul.append(renderArray(arr))
}

remember.onclick = () => {
    flag = 2
    alert('Массив сохранён')
}

insert.onclick = () => {
    if (flag == 1 || flag == 2) {
        let time = performance.now()
        let sorted = insertionSort(arr)
        time = performance.now() - time
        deleteSortedArray()
        sortedUl.append(renderArray(sorted))
        alert("Сортировка вставками заняла " + time + "мс")
        if (flag == 1) {
            flag = 0
        }
    } else {
        alert('Сгенирируйте новый массив')
    }
}

selection.onclick = () => {
    if (flag == 1 || flag == 2) {
        let time = performance.now()
        let sorted = selectionSort(arr)
        time = performance.now() - time
        deleteSortedArray()
        sortedUl.append(renderArray(sorted))
        alert("Сортировка выбором заняла " + time + "мс")
        if (flag == 1) {
            flag = 0
        }
    } else {
        alert('Сгенирируйте новый массив')
    }
}

merger.onclick = () => {
    if (flag == 1 || flag == 2) {
        let time = performance.now()
        let sorted = mergeSort(arr)
        time = performance.now() - time
        deleteSortedArray()
        sortedUl.append(renderArray(sorted))
        alert("Сортировка слиянием заняла " + time + "мс")
        if (flag == 1) {
            flag = 0
        }
    } else {
        alert('Сгенирируйте новый массив')
    }
}

fast.onclick = () => {
    if (flag == 1 || flag == 2) {
        let time = performance.now()
        let sorted = quick_Sorting(arr)
        time = performance.now() - time
        deleteSortedArray()
        sortedUl.append(renderArray(sorted))
        alert("Быстрая сортировка заняла " + time + "мс")
        if (flag == 1) {
            flag = 0
        }
    } else {
        alert('Сгенирируйте новый массив')
    }
}

// Генерация и рендер

function generateRandom() {
    const size = prompt('Введите размер массива')
    const arr = _.shuffle(_.range(1, 1001)).slice(0, size)
    return arr
}

function renderArray(arr) {
    let fragment = new DocumentFragment();
    for (let i = 0; i <= arr.length - 1; i++) {
        let li = document.createElement('li');
        li.className = 'list-group-item'
        li.innerHTML = `[${i}] - ${arr[i]}`
        fragment.append(li);
    }
    return fragment;
}

function deleteArray() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

function deleteSortedArray() {
    while (sortedUl.firstChild) {
        sortedUl.removeChild(sortedUl.firstChild);
    }
}

const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--
        }
        arr[j] = current
    }
    return arr;
};

const selectionSort = arr => {
    for (let i = 0, l = arr.length - 1; i < l; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
        }
    }
    return arr;
};

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const arrLeft = arr.slice(0, middle)
    const arrRight = arr.slice(middle)

    return merge(mergeSort(arrLeft), mergeSort(arrRight))

};

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        )
    }

    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

function quick_Sorting(array) {
    if (array.length <= 1) {
        return array;
    } else {
        var left = [];
        var right = [];
        var outputArray = [];
        var pivot = array.pop();
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (array[i] <= pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return outputArray.concat(quick_Sorting(left), pivot, quick_Sorting(right));
    }
}

// Список связанный

// Узел односвязного списка
class LinkedListNode {
    constructor(value, next = null) {
        // значение узла
        this.value = value;
        // указатель или ссылка на следующий узел в списке
        this.next = next;
    }
    // метод возвращает значение в строке
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
// Односвязный список
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка
    append(value) {
        // Создаём новый узел.
        const newNode = new LinkedListNode(value);

        // Если нет head или tail, делаем новым узлом head и tail.
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Присоединяем новый узел к концу связного списка.
        // Берём последний узел и указываем, что его next будет новым узлом.
        this.tail.next = newNode;

        // Переназначаем tail на новый узел.
        this.tail = newNode;

        return this;
    }
    // метод принимает значение в качестве аргумента, удаляет все узлы, которые имеют указаное значение и возвращает последний удалённый узел
    delete(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        // Если head должен быть удален, то делаем следующий узел новым head.
        while (this.head && this.head.value === value) {
            deletedNode = this.head;

            // Переназначаем следующий за head узел на новый head.
            this.head = this.head.next;
        }

        let currentNode = this.head;

        // Если следующий узел должен быть удален,
        // делаем узел через один, следующим для проверки.
        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    // Перезаписываем, чтобы узел через один стал следующим узлом.
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // Проверяем, должен ли tail быть удален.
        // Так как, если в цикле мы удаляем последний узел,
        // то с предпоследнего узла убираем только ссылку на него.
        // Поэтому делаем проверку на его удаление с "tail".
        if (this.tail && this.tail.value === value) {
            // в данном случае currentNode это или предпоследний узел или head.
            this.tail = currentNode;
        }

        return deletedNode;
    }
    // метод принимает значение в качестве аргумента, находит первый узел с таким же значением и возвращает его
    findByValue(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
            return 'Список пуст';
        }

        let arr = this.toArray()
        let result = arr.findIndex((element) => {
            if (element.value == value) {
                return true
            } else return false
        })
        if (result != -1) {
            return `Данное значение имеет индекс ${result}`
        } else return 'Такого значения нет'
    }
    findByIndex(index) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count === index) {  // found the element
                return `Такой индекс имеет элемент ${currentNode.value}`;
            }

            count++;  // increment counter
            currentNode = currentNode.next;  // move to next node
        }

        return 'Такого элемента не существует';
    }
    // принимает массив значений в качестве аргумента и создаёт новые узлы из каждого элемента массива, по очереди добавляя их в конец списка
    fromArray(values) {
        values.forEach(value => this.append(value));
        return this;
    }
    // метод, что создаёт массив из всех узлов и возвращает его
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        // Перебираем все узлы и добавляем в массив.
        while (currentNode) {
            var next = currentNode.next
            nodes.push({
                value: currentNode.value,
                next: !!next ? next.value : null
            });
            currentNode = currentNode.next;
        }
        // Возвращаем массив из всех узлов.
        return nodes;
    }
    // метод находит два элемента по значению и меняет их местами
    swap(n1, n2) {
        var prevNode1 = null, prevNode2 = null, node1 = this.head, node2 = this.head;
        // Если список пустой, выходим
        if (this.head == null) {
            return;
        }
        // Если значения одинаковы, список не изменится
        if (n1 == n2)
            return;
        // Ищем первый элемент
        while (node1 != null && node1.value != n1) {
            prevNode1 = node1;
            node1 = node1.next;
        }
        // Ищем второй элемент
        while (node2 != null && node2.value != n2) {
            prevNode2 = node2;
            node2 = node2.next;
        }
        if (node1 != null && node2 != null) {
            // Если элемент, предществующий элементу 1 не null, то меняем его next на элемент 2
            if (prevNode1 != null)
                prevNode1.next = node2;
            else
                this.head = node2;
            // Если элемент, предществующий элементу 2 не null, то меняем его next на элемент 1
            if (prevNode2 != null)
                prevNode2.next = node1;
            else
                this.head = node1;
            // Меняем местами поля next у элемента 1 и 2
            [node1.next, node2.next] = [node2.next, node1.next]
        } else {
            alert('Перестановка не возможна')
        }
    }
    // Вставка на конкретную позицию
    insert(data, position) {
        console.log(data + ' ' + position);
        let parent = null;
        let current = this.head;
        let index = 0;

        while (current && index < position) {
            parent = current;
            current = current.next;
            index++;
        }

        if (current) {
            let child = new LinkedListNode(current.value);
            child.next = current.next;

            current.value = data;
            current.next = child;
        }
        else if (parent) {
            parent.next = new LinkedListNode(data);
        }
        else {
            this.head = new LinkedList(data);
        }
        return this.head;
    }
    insertionSort() {
        // Инициализируем сортированный список
        var sorted = null;
        var current = this.head;
        // Перебираем список и добавляем каждую ноду в сортированный
        while (current != null) {
            // Сохраняем следующий элемент для следующей итерации
            var next = current.next;
            function sortedInsert(newnode) {
                // Если пустой или больше чем новый
                if (sorted == null || sorted.value >= newnode.value) {
                    newnode.next = sorted;
                    sorted = newnode;
                } else {
                    var current = sorted;
                    // Найти узело перед точкой вставки
                    while (current.next != null && current.next.value < newnode.value) {
                        current = current.next;
                    }
                    newnode.next = current.next;
                    current.next = newnode;
                }
            }
            sortedInsert(current);
            // Обновляем текущий элемент
            current = next;
        }
        this.head = sorted;
    }
}
// Элемент двусвязно списка
class DoublyLinkedListNode {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
// Двусвязный список
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        // Создаём новый узел.
        const newNode = new DoublyLinkedListNode(value);

        if (this.tail) {
            // Присоединяем новый узел к концу связного списка.
            this.tail.next = newNode;
        }

        // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
        // так как новый узел будет теперь последним.
        newNode.previous = this.tail;

        // Переназначаем tail на новый узел.
        this.tail = newNode;

        // Если ещё нет head, делаем новый узел head.
        if (!this.head) {
            this.head = newNode;
        }

        return this;
    }
    prepend(value) {
        // Создаём новый узел, который будет новым head,
        // при создании передаём второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        const newNode = new DoublyLinkedListNode(value, this.head);

        // Если есть head, то он больше не будет head.
        // Поэтому, его ссылку на предыдущий узел (previous) меняем на новый узел.
        if (this.head) {
            this.head.previous = newNode;
        }

        // Переназначаем head на новый узел
        this.head = newNode;

        // Если ещё нет tail, делаем новый узел tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        // Возвращаем весь список.
        return this;
    }
    delete(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        while (currentNode) {
            if (currentNode.value === value) {
                // Сохраняем значение текущего узла как удаленное.
                deletedNode = currentNode;

                // Если head должен быть удален,
                if (deletedNode === this.head) {
                    // то делаем следующий узел новым head
                    this.head = deletedNode.next;

                    // Меняем в новом head ссылку (previous) на null.
                    if (this.head) {
                        this.head.previous = null;
                    }

                    // Если все узлы в списке имеют одинаковое значение,
                    // которое передается в качестве аргумента,
                    // тогда все узлы будут удалены. Поэтому tail необходимо обновить.
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    // Если tail должен быть удален, -
                    // меняем tail на предпоследний узел, который станет новым хвостом.
                    this.tail = deletedNode.previous;
                    // Обновляем ссылку next в новом хвосте.
                    this.tail.next = null;
                } else {
                    // Если средний узел будет удален, -
                    // сохраняем ссылку на предыдущий элемент,
                    const previousNode = deletedNode.previous;
                    // и сохраняем ссылку на следующий элемент.
                    const nextNode = deletedNode.next;
                    // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
                    // чтобы они больше не ссылались на удаленный узел.
                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }

            // Перематываем на один узел вперёд.
            currentNode = currentNode.next;
        }

        return deletedNode;
    }
    // Создаём новые узлы из массива и добавляем в конец списка.
    fromArray(values) {
        values.forEach(value => this.append(value));
        return this;
    }
    // Создаём массив из всех узлов.
    toArray() {
        const nodes = [];

        let currentNode = this.head;

        // Перебираем все узлы и добавляем в массив.
        while (currentNode) {
            nodes.push({
                previous: !!currentNode.previous ? currentNode.previous.value : null,
                value: currentNode.value,
                next: !!currentNode.next ? currentNode.next.value : null
            });
            currentNode = currentNode.next;
        }

        // Возвращаем массив из всех узлов.
        return nodes;
    }
    // метод находит два элемента по значению и меняет их местами
    swap(n1, n2) {
        var prevNode1 = null, prevNode2 = null, node1 = this.head, node2 = this.head;
        // Если список пустой, выходим
        if (this.head == null) {
            return;
        }
        // Если значения одинаковы, список не изменится
        if (n1 == n2)
            return;
        // Ищем первый элемент
        while (node1 != null && node1.value != n1) {
            node1 = node1.next;
        }
        // Ищем второй элемент
        while (node2 != null && node2.value != n2) {
            node2 = node2.next;
        }
        if (node1 != null && node2 != null) {
            // Если элемент, предществующий элементу 1 не null, то меняем его next на элемент 2
            let prev1 = node1.previous
            let prev2 = node2.previous

            if (prev1 != null) {
                prev1.next = node2
                node2.previous = prev1
            } else {
                this.head = node2;
                node2.previous = null
            }
            // Если элемент, предществующий элементу 2 не null, то меняем его next на элемент 1
            if (prev2 != null) {
                prev2.next = node1;
                node1.previous = prev2;
            } else {
                this.head = node1;
                node1.previous = null;
            }
            // Меняем местами поля next у элемента 1 и 2
            [node1.next, node2.next] = [node2.next, node1.next]
        } else {
            alert('Перестановка не возможна')
        }
    }
    insert(value, index) {
        if (!Number.isInteger(index) || index < 0 || index > this.toArray().length + 1) {
            console.log('Некоректный индекс');
            return this;
        }

        if (index === 0) {
            this.prepend(value);
            return this;
        }

        // If index is equal to this.length, append
        if (index === this.toArray().length) {
            this.append(value);
            return this;
        }

        // Reach the node at that index
        let newNode = new DoublyLinkedListNode(value);
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;

        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        return this
    }
    findByValue(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
            return 'Список пуст';
        }

        let arr = this.toArray()
        let result = arr.findIndex((element) => {
            if (element.value == value) {
                return true
            } else return false
        })
        if (result != -1) {
            return `Данное значение имеет индекс ${result}`
        } else return 'Такого значения нет'
    }
    findByIndex(index) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count === index) {  // found the element
                return `Такой индекс имеет элемент ${currentNode.value}`;
            }

            count++;  // increment counter
            currentNode = currentNode.next;  // move to next node
        }

        return 'Такого элемента не существует';
    }
    insertionSort() {
        let sorted = null;

        let current = this.head;
        while (current != null) {

            let next = current.next;
            current.previous = current.next = null;

            function sortedInsert(head_ref, newNode) {
                let current;
                if (head_ref == null)
                    head_ref = newNode;
                else if ((head_ref).value >= newNode.value) {
                    newNode.next = head_ref;
                    newNode.next.previous = newNode;
                    head_ref = newNode;
                }
                else {
                    current = head_ref;
                    while (current.next != null && current.next.value < newNode.value)
                        current = current.next;
                    newNode.next = current.next;
                    if (current.next != null)
                        newNode.next.previous = newNode;
                    current.next = newNode;
                    newNode.previous = current;
                }
                return head_ref;
            }
            sorted = sortedInsert(sorted, current);
            current = next;
        }
        this.head = sorted;
        return this.head;
    }
}