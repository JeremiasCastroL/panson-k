function sumar(){
 
    let args = Array.prototype.slice.call(arguments)
    console.log(args)

    let sum = args.reduce((total, number) => total + number, 0)
    console.log(sum)
    
}



sumar(1, 2, 3, 4)
