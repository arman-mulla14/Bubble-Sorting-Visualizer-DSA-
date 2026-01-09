const array =  document.getElementById('array'); 

const generateArray =()=> {
   // array.innerHTML=""; 
    for(let i = 0; i< 30; i++){
        const barhight = ~~(Math.random()* 80) + 20; // 
        const arrayBar = document.createElement("div");
       arrayBar.classList.add("array-bar"); 
         arrayBar.style.height=`${barhight}%`;
         array.appendChild(arrayBar);
    }
}

const bubbleSort = async() => {
    const bars = document.querySelectorAll('.array-bar');
    for(let i = 0; i< bars.length - 1; i++){
for(let j =0 ; j < bars.length - 1 - i;j++){
     bars[j].style.backgroundColor = '#e83333ff';
     bars[j + 1 ].style.backgroundColor = '#e83333ff';

     if(parseInt(bars[j].style.height)> parseInt(bars[j+1].style.height)){
        await swap(bars[j],bars[j+1]);
     }

        bars[j].style.backgroundColor = 'cyan';
        bars[j +1 ].style.backgroundColor = 'cyan';


    }

    bars[bars.length- 1 - i].style.backgroundColor = 'green';

    }
}

const swap = (bar1, bar2) => {
    return new Promise ((resolve)=> {
const temp = bar1.style.height;
bar1.style.height = bar2.style.height;
bar2.style.height = temp; 
setTimeout(()=>{
    resolve();

},150); 
    })
}

generateArray();

