function displaynum(n1) {
    let n = Calculator.text1.value
    var sinais = ['+', 'x', '/']
    if (!Calculator.text1.value) {
        if (sinais.includes(n1)) {
            return
        }
    }

    if (Calculator.text1.value === '-') {
        if (n1 === '+') return
        if (n1 === 'x') return
        if (n1 === '/') return
    }

    var sinais_completo = ['+', 'x', '/', '-']

    if (sinais_completo.includes(Calculator.text1.value.slice(-1))) {
        if (sinais_completo.includes(n1)) {
            const str = Calculator.text1.value;
            return Calculator.text1.value = str.replace(/.$/, n1);
        }
    }


    if (Calculator.text1.value.startsWith('-')) {
        var num1 = Calculator.text1.value;
        var num2 = '-';
        var quantidade = 0

        if (Calculator.text1.value === '-') {
            if (n1 === '-') n1 = ''
        }

        for (var i = 0; i < num1.length; i++) {
            if (num1[i] == num2) {
                quantidade++
            }
        }

        if (quantidade === 2) {
            if (n1 === '-') return
        }
    }

    if (Calculator.text1.value.includes('x')) {
        if (n1 === '-') n1 = ''
    }


    if (Calculator.text1.value.includes('.')) {

        const last_cr = Calculator.text1.value.slice(-1);

        if (last_cr === '.') {
            if (n1 === '.') n1 = ''
        }

    }

    var num1 = Calculator.text1.value;
    var num2 = '-';
    var quantidade = 0

    for (var i = 0; i < num1.length; i++) {
        if (num1[i] == num2) {
            quantidade++
        }
    }

    if (!Calculator.text1.value) {
        if (n1 === '.') return
    }

    if (!Calculator.text1.value.startsWith('-')) {

        if (n1 === '-') {
            if (quantidade === 1) return
        }
    }


    if ((!Calculator.text1.value.startsWith('-')) && (Calculator.text1.value.includes('-'))) {

        let split = Calculator.text1.value.split('-')

        if (split[1] == undefined) {
            if (split[0].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }

        else if (split[1] !== undefined) {

            if (split[1].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }
    }

    if ((!Calculator.text1.value.startsWith('-')) && (Calculator.text1.value.includes('+'))) {

        let split = Calculator.text1.value.split('+')

        if (split[1] == undefined) {
            if (split[0].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }

        else if (split[1] !== undefined) {

            if (split[1].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }
    }

    if ((!Calculator.text1.value.startsWith('-')) && (Calculator.text1.value.includes('x'))) {

        let split = Calculator.text1.value.split('x')

        if (split[1] == undefined) {
            if (split[0].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }

        else if (split[1] !== undefined) {

            if (split[1].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }
    }

    if ((!Calculator.text1.value.startsWith('-')) && (Calculator.text1.value.includes('/'))) {

        let split = Calculator.text1.value.split('/')

        console.log(split[0])
        if (split[1] == undefined) {
            if (split[0].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }

        else if (split[1] !== undefined) {

            if (split[1].includes('.')) {
                if (n1 === '.') n1 = ''
            }
        }
    }

    if ((n.includes('+')) || ((n.includes('x'))) || ((n.includes('/')))) {

        if (sinais.includes(n1)) return

    }

    Calculator.text1.value = Calculator.text1.value + n1;
}


function c() {
    let c = document.getElementById("c_del")
    let text1 = document.getElementById("txt1")
    text1.value = ''
}


function equal() {
    let text1 = document.getElementById("txt1")
    if (text1.value === '-') {
        text1.value = text1.value.replace('-', '')
    }

    if (text1.value === '.') {
        text1.value = text1.value.replace('.', '')
    }

    let res;
    try {
        res = eval(text1.value.replace('x', '*'))
        if (res === undefined) res = ''
    } catch {
        text1.value = ''
    }
    if (res === undefined) res = ''
    text1.value = res

}
