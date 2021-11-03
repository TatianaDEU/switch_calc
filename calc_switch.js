

function calc() {

    let a = +prompt('a: ', '');
    let b = +prompt('b: ', '');
    let method = prompt('+, -, *, /', '');

    if (isNaN(a) || isNaN(b) || a == '' || b == '' || method === '') {
        alert('Error');
    }
    
    switch (method) {
        case '+':
            alert(a + b);
            break;

        case '-':
            alert(a - b);
            break;

        case '*':
            alert(a * b);
            break;

        case '/':
            if (b == 0) {
                alert('Error');
            } else {
                alert(a / b);
            }
    }
}

calc();