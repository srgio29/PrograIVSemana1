/*
INSTRUCCIONES DEL EJERCICIO

Ejercicio Sumas Acumuladas
Enunciado:
Dada una matriz nums. Definimos una suma acumulada de una matriz como runningSum[i] = sum(nums[0]…nums[i]). Devuelve la suma acumulada de nums.

Ejemplo 1

Input: nums = [1,2,3,4] Output: [1,3,6,10] Explicación: La suma acumulada se obtiene de la siguiente manera: [1, 1+2, 1+2+3, 1+2+3+4].

Ejemplo 2

Input: nums = [1,1,1,1,1] Output: [1,2,3,4,5] Explicación: La suma acumulada se obtiene de la siguiente manera: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Ejemplo 3

Input: nums = [3,1,2,10,1] Output: [3,4,6,16,17]
*/


/*
EJERCICIO 1
*/

let nums = [1,2,3,4]
let numsResultado=[]


numsResultado[0] = nums[0];
for(let cont=1; cont<nums.length; cont++){
    //console.log("Posicion"+cont+":"+nums[cont])
    let ValorAcumulado =  numsResultado[cont -1]
    numsResultado[cont]= ValorAcumulado + nums[cont]; 

}
console.log(nums,numsResultado)


//Ejemplos de Operadores comunes: 1)++ 2)-- 3)=+ 4)+= 5)-= 6)=-


console.log(" ")

/*
EJERCICIO 2
*/

let nums2 = [1,1,1,1,1]
let numsResultado2=[]


numsResultado2[0] = nums2[0];
for(let cont=1; cont<nums2.length; cont++){

    let ValorAcumulado =  numsResultado2[cont -1]
    numsResultado2[cont]= ValorAcumulado + nums2[cont]; 

}

//Concatenar con el simbolo '+'
console.log("Input:" +nums2)
//backtick *TECLA " ` " (abajo del esc)
console.log(`Output: ${numsResultado2}`)


console.log(" ")

/*
EJERCICIO 3
*/

let nums3 = [3,1,2,10,1]
let numsResultado3=[]


numsResultado3[0] = nums3[0];
for(let cont=1; cont<nums3.length; cont++){

    let ValorAcumulado =  numsResultado3[cont -1]
    numsResultado3[cont]= ValorAcumulado + nums3[cont]; 

}

//Concatenar con el simbolo '+'
console.log("Input:" +nums3)
//backtick *TECLA " ` " (abajo del esc)
console.log(`Output: ${numsResultado3}`)

console.log(" ")
