// Функция для нахождения НОД с использованием алгоритма Эвклида
function gcdEuclidean(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Функция для нахождения расширенного НОД (a, b) и коэффициентов Безу (x, y)
function extendedGCD(a, b) {
    if (b === 0) {
        return [a, 1, 0];
    } else {
        const [gcd, x, y] = extendedGCD(b, a % b);
        return [gcd, y, x - Math.floor(a / b) * y];
    }
}

// Функция для нахождения канонического разложения числа на простые множители
function primeFactors(n) {
    const factors = {};
    let div = 2;
    while (n > 1) {
        if (n % div === 0) {
            factors[div] = (factors[div] || 0) + 1;
            n = Math.floor(n / div);
        } else {
            div++;
        }
    }
    return factors;
}

// Заданные числа m и n
const m = 660422941;
const n = 36481301;

// Находим НОД с использованием алгоритма Эвклида
const gcdEuclid = gcdEuclidean(m, n);

// Находим расширенный НОД и коэффициенты Безу
const extendedGCDResult = extendedGCD(m, n);

console.log(`Каноничное разложение числа ${m}`, primeFactors(m))
console.log(`Каноничное разложение числа ${n}`, primeFactors(n))

// Выводим результаты
console.log("НОД (a, b) с использованием алгоритма Эвклида:", gcdEuclid);
console.log("Расширенный НОД (a, b) и коэффициенты Безу:", extendedGCDResult);

// Расширенный алгоритм Эвклида находит a и b такие, что a*m + b*n = НОД(m, n)
const a = extendedGCDResult[1];
const b = extendedGCDResult[2];
console.log(`a*m + b*n = ${a}*${m} + ${b}*${n} = ${gcdEuclid}`);

// Заданные числа для остальных задач
const k = 12;
const n2 = 23;
const m2 = 2000;

// Функция для вычисления фи-функции (функции Эйлера) для числа n
function eulerPhi(n) {
    let result = n;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }
            result -= result / i;
        }
    }
    if (n > 1) {
        result -= result / n;
    }
    return result;
}

// Вычисляем фи-функции
const phi_k = eulerPhi(k);
const phi_n2 = eulerPhi(n2);
const phi_m2 = eulerPhi(m2);

console.log(`Фи-функция (φ) для k=${k}:`, phi_k);
console.log(`Фи-функция (φ) для n2=${n2}:`, phi_n2);
console.log(`Фи-функция (φ) для m2=${m2}:`, phi_m2);

// Функция для нахождения пар взаимно обратных элементов в кольце Z/nZ
function findMultiplicativeInverses(n) {
    const inverses = [];
    for (let i = 1; i < n; i++) {
        if (gcdEuclidean(i, n) === 1) {
            inverses.push(i);
        }
    }
    return inverses;
}

// Находим пары взаимно обратных элементов в кольце Z/kZ и Z/n2Z
const inverses_k = findMultiplicativeInverses(k);
const inverses_n2 = findMultiplicativeInverses(n2);

console.log(`Пары взаимно обратных элементов в кольце Z/${k}Z:`, inverses_k);
console.log(`Пары взаимно обратных элементов в кольце Z/${n2}Z:`, inverses_n2);

// Функция для нахождения обратных элементов в кольце Z/mZ для данного элемента
function findInversesInRingZmZ(element, m) {
    const inverses = [];
    for (let i = 1; i < m; i++) {
        if ((element * i) % m === 1) {
            inverses.push(i);
        }
    }
    return inverses;
}

// Находим обратные элементы к элементам 5, 6, 7 в кольце Z/m2Z
const elementToFindInverseFor = [5, 6, 7];
const inverses_m2 = {};
for (const element of elementToFindInverseFor) {
    inverses_m2[element] = findInversesInRingZmZ(element, m2);
}

console.log(`Обратные элементы в кольце Z/${m2}Z:`, inverses_m2);
