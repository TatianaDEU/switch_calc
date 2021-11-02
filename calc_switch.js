

function calc() {
    function isValid(numm) {
        return numm !== undefined && typeof (numm) === 'number' && !isNaN(numm);
    }

    let a = +prompt('a: ', '');
    let b = +prompt('b: ', '');
    let method = prompt('+, -, *, /', '');
    if (isValid(a) && isValid(b)) {
        switch (method) {
            case '+':
                return a + b;
                break;

            case '-':
                return a - b;
                break;

            case '*':
                return a * b;
                break;

            case '/':
                if (b == 0) {
                    alert('Error');
                } else {
                    return a / b;
                }
        }
    } else {
        alert('Error');
    }
}
calc();