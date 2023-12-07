let fn = () => {

    //аккумулятор
    let clousure = 0 

    let privateFn = () => {
        clousure++
        console.log(clousure)
    }

    return privateFn
}

let a = fn()
