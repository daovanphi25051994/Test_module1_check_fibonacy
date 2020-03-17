function isFibonacy(number) {
    if (number >= 1) {
        let a = 0;
        let b = 1;
        let c = a + b;
        while (c <= number) {
            if (number === c) {
                return true;
            }
            a = b;
            b = c;
            c = a + b;
        }
    }
    return false;
}

let check = isFibonacy(5);
console.log(check);