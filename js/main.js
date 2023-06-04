const TEXTMENU = "CALCULADORA DE COMBINACIONES\n\n Elija una de las tres opciones:\n\n 1 - Crear un usuario\n 2 - Entrar con un usuario\n 3 - Salir\n"
const TEXTERROR = "\nPor favor, ingrese una opción válida:"
const TEXTUSER = "Ingrese su usuario.\nIngrese \"3\" para volver al menú principal\n"
const TEXTUSERERROR = "El usuario no debe tener espacios.\nIngrese \"3\" para volver al menú principal.\n"
const TEXTUSERERROR2 = "¡Debe escribir un usuario!\nIngrese \"3\" para volver al menú principal.\n"
const TEXTPASS = "Ingrese su contraseña.\nIngrese \"3\" para volver al menú principal.\n"
const TEXTPASS2 = "Confirme su contraseña.\nIngrese \"3\" para volver al menú principal.\n"
const TEXTPASSERROR = "Contraseña incorrecta.\nIngrese \"3\" para volver al menú principal.\n"
const TEXTPASSERROR2 = "La contraseña no debe tener espacios.\nIngrese \"3\" para volver al menú principal.\n"
const TEXTPASSERROR3 = "¡Debe escribir una contraseña!\nIngrese \"3\" para volver al menú principal.\n"
const TEXTPASSERROR4 = "Las contraseñas no coinciden.\nIngrese \"3\" para volver al menú principal.\n"
const TEXTMENUCALCULATOR = ""

let user
let password

menuStart(text(1))
alert("Fin del programa")

function text(option) {
    switch (option) {
        case 1:
            return TEXTMENU
        case 2:
            return TEXTMENU + TEXTERROR 
        case 3:
            return TEXTUSER
        case 4:
            return TEXTUSERERROR
        case 5:
            return TEXTUSERERROR2
        case 6:
            return TEXTPASS
        case 7:
            return TEXTPASS2
        case 8:
            return TEXTPASSERROR2
        case 9:
            return TEXTPASSERROR3
        case 10:
            return TEXTPASSERROR4
        case 11:
            return TEXTLOGINUSER
        case 12: 
            return TEXTMENUCALCULATOR  
    }
}
function menuStart(option) {
    let menu 
    while (menu !== 3) {

        menu = numberValidator(prompt(option))
        switch (menu) {
            case 1:
                user = menuUser()
                if (user === 3) {
                    break
                }
                password = menuPassConfirm()
                if (password === 3) {
                    break
                }
                alert("Su usuario es: " + user + "\nSu contraseña es: " + password)
                break
            case 2:
                let aux = login()
                if (aux) {
                    calculator()
                }
                else {
                    break
                }
                break
            case 3: 
                break
            /*Creo este caso (case 4:) ya que si dentro de la función numberValidator 
            en el else invocaba la función menuStart, cuando se usara la función numberValidator 
            por segunda vez se salteaba el if, y entraba directamente dentro del else */
            case 4:
                option = text(2)
                break
            default:
                option = text(2)
                break
            }
    }
    }
function calculator() {
    let start = "CALCULADORA DE COMBINACIONES.\n\n\nElija una opción:\n\n1 - Calculadora de combinaciones sin repetición.\n2- Calculadora de combinaciones con repeticiones.\n3 - Salir.\n"
    let combinacionesSinRepeticiones = "Calculadora de combinaciones sin repetición.\n\nFórmula: \u207FC\u2096 = n! / k!(n-k)!\n\nDónde n es el número de elementos a escoger y k el número de elementos de cada combinación.\n\nRecuerde que n debe de ser mayor igual que k para que existan combinaciones\n\n"
    let combinacionesConRepeticiones = "Calculadora de combinaciones con repeticiones.\n\nFórmula: CR\u2099\u2096 = ((n+k-1)!)/(k!(n-1)!\n\nDónde n es el número de elementos a escoger y k el número de elementos de cada combinación.\n\n"
    let menu = 0
    do {
        do {
            menu = Number(prompt(start))
        } while (isNaN(menu) || menu < 1 || menu >3)
        switch (menu) {
            case 3:
                break
            case 1:
                let n
                do {
                    n = Number(prompt(combinacionesSinRepeticiones + "Ingrese un valor válido de n, por favor"))
                } while (isNaN(n) || n <= 0)
                let k
                do {
                    k = Number(prompt(combinacionesSinRepeticiones + "Ingrese un valor válido de k, por favor"))
                } while (isNaN(k) || k <= 0)
                let l = k - 1
                let j = n - 1
                for(let i = k-1 ; i > 0; i-- && j-- && l--) {
                    n *= j
                    k *= l
                }
                n = n/k
                alert("Existen "+ n + " de combinaciones.")
                break
            case 2:
                let x
                do {
                    x = Number(prompt(combinacionesConRepeticiones + "Ingrese un valor válido de n, por favor"))
                } while (isNaN(x) || x <=0 )
                let y
                do {
                    y = Number(prompt(combinacionesConRepeticiones + "Ingrese un valor válido de k, por favor"))
                } while (isNaN(y) || y <= 0)
                let e = (x + (y-1))
                let s = x-1
                for(let i = e-1; i >=x ; i--) {
                    e *= i
                }
                for(let i = y-1; i > 0; i-- ) {
                    y *= i
                }
                x = e/y
                if (x > Number.MAX_SAFE_INTEGER || x < Number.MIN_SAFE_INTEGER || y === Infinity) {
                    alert("El resultado excede el rango numérico del programa")
                    break
                }
                alert("Existen "+ x + " de combinaciones.")
                break
            default:
                
                break
        }
    } while (menu != 3)
}
function login() {
    let username
    let passname 
    let intento = 0
    do {
        if (intento > 0) {
            alert("¡Contraseña o usuario incorrectos!\nIntente de nuevo.\nLe restan " + (3 - intento) + " intentos")
        }
        username = menuUser()
        if (username === 3) {
            return false
        }
        passname = menuPassname(text(6))
        if (passname === 3) {
            return false
        }
        intento ++
    } while (((username !== user) || (passname !== password)) && (intento < 3))

    if (username !== user || passname !== password) {
        alert("Su usuario ha sido bloquedo")
        return false
    }
    else {
        alert("Bienvenida/o")
        return true
    }
}
function menuPassConfirm() {
    let pass = menuPassname(text(6))
    if (pass === 3) {
        return 3
    }
    let passAux = menuPassname(text(7))
    if (passAux === 3) {
        return 3
    }
    while(pass !== passAux) {
        passAux = menuPassname(text(10))
        if (passAux === 3) {
            return 3
        }
    }
    return pass
}

function menuPassname(option) {
    let pass = menuUserName(option)
    let i = true
    while (i) {
        if (pass === 3) {
            return 3
        }
        else if (pass === 4) {
            pass = menuUserName(text(8))
        }
        else if (pass === 5) {
            pass = menuUserName(text(9))
        }
        else{
            i = false
        }
    }
    return pass
}

function menuUser() {
    let name = menuUserName(text(3))
    let i = true
    while (i) {
        if (name === 3) {
            return 3
        }
        else if (name === 4) {
            name = menuUserName(text(4))
        }
        else if (name === 5) {
            name = menuUserName(text(5))
        }
        else{
            i = false
        }
    }
    return name
}

function menuUserName(option) {
    let user = prompt(option)
    let i = 0
    let aux = true
    if (user === "") {
        return 5
    }
    else if (user === "3") {
        return 3
    }
    while (i <= user.length - 1 && aux) {
        if (user[i] === " ") {
            aux = false 
        }
        i++
    }
    if (aux === false) {
        return 4
    }
    return user
}

function numberValidator(input) {
    input = Number(input)
        if (!isNaN(input)) {
            return input
        }
        else {
            return 4
        }
}
