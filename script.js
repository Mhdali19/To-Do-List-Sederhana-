let input = document.getElementById("todolist"); 
let kotak1 = document.getElementById("kotak1 ");
let ulKotak1 = document.getElementById("ulKotak1"); 
let ulKotak2 = document.getElementById('ulKotak2'); 
let ulKotak3 = document.getElementById('ulKotak3')

let counter = 0;
let counter2 = 0; 
let counter3 = 0; 
function tambahkan() {
    if(input.value === ' ') {
        alert("Masukkan tugas dengan benar ");
        return; 
    } 


    let valueInput = input.value; 
    console.log(valueInput)
    if(counter >= 12) {
        alert('Jumlah Tugas Telah Maximal')
        return;
    }

    input.value = ' '; 
    let listtodo = document.createElement('li'); 
    listtodo.classList.add('listbaru')
   listtodo.textContent = valueInput; 
    ulKotak1.appendChild(listtodo); 
  
    counter++; 
    console.log(`Counter kotak 1 :  ${counter}`); 
    
    
    listtodo.addEventListener('click', () => { 
        counter--; 
        if(counter2 >= 12 ) {
            alert('Jumlah Tugas telah Maximal');
            return; 
        }
        console.log(`Counter kotak 2 :  ${counter}`); 
        ulKotak1.removeChild(listtodo); 
        listtodo.removeAttribute('class')

        listtodo.classList.add('listOn');

        let clonedElement = listtodo.cloneNode(true);
        ulKotak2.appendChild(clonedElement); 
        counter2++; 
        console.log(`Counter2 kotak 2 :  ${counter2}`); 
clonedElement.addEventListener ('click', function () {
    counter2--; 
    if(counter3 >= 12 ) {
        alert('Jumlah Tugas telah Maximal');
        return; 
    }
    console.log(`Counter kotak 2 :  ${counter}`); 
    ulKotak2.removeChild(clonedElement); 
    clonedElement.removeAttribute('class')

    clonedElement.classList.add('listDone');

    let DoneElement = clonedElement.cloneNode(true);
    ulKotak3.appendChild(DoneElement); 
    counter3++; 
    
    DoneElement.addEventListener ('click', function () {
        counter3--;
        ulKotak3.removeChild(DoneElement);
    })
})
   
    })
}