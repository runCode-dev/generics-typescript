// Exemplo 1 - Generics sendo aplicado em uma função
function data<T>(param: T): T {
    return param;
}

// Reutilização da mesma função apenas trocando o tipo
console.log(data<string>("Gustavo"));
console.log(data<number>(123));

// Exemplo 2 - Mostrando como criar funções sem o generics
function printStringArray(array: string[]): void {
    array.forEach(item => console.log(item));
}

function printNumberArray(array: number[]): void {
    array.forEach(item => console.log(item));
}

// Convertendo a mesma função para generics
function printArray<T>(array: T[]): void {
    array.forEach(item => console.log(item));
}

printArray<string>(["Gustavo", "Bruna"]);
printArray<number>([1, 2, 3, 4, 5]);

// Exemplo 3 - Criando uma função com dois parâmetros genéricos
function transformToArray<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const array = transformToArray("hello", 42);
console.log(array);

// Exemplo 4 - Utilizando generics em classes
class Queue<T> {

    private item: T[] = [];

    enqueue(item: T) {
        this.item.push(item);
        return this.item;
    }

    dequeue() {
        return this.item.shift();
    }

}

const stringQueue = new Queue<string>();
console.log(stringQueue.enqueue("Gustavo"));
console.log(stringQueue.enqueue("Bruna"));
console.log(stringQueue.dequeue());
console.log(stringQueue.enqueue("Rodrigo"));

// Exemplo 5 - Utilização de generics em interfaces
interface Pair<K, V> {
    key: K;
    value: V;
}

const pair: Pair<string, number> = { key: "Gustavo", value: 33 };

// Exemplo 6 - Restrição de tipos em generics
function getLength<T extends {length: number}>(item: T): number{
    return item.length
}

console.log(getLength("Gustavo"));
console.log(getLength([1,2,3,4,5]));