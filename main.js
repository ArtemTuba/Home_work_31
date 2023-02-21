const arr = [1,2, [ 1,2,3, [1,2,4,5]]]

let list = ``;
 function generateList(array,index = ""){
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            list += `<li><ul>`
            generateList(array[i], `${i + 1}.`);
            list += `</ul></li>`
        }else{
            list +=`<li>${index}${array[i]}</li>`;
        }
    }
}
generateList(arr)
document.getElementById('list').innerHTML = list;

