// SNOW plugin
let wrapperSnow = document.querySelector('.wrapper-snow');

createHeadDiv('div','snow-head1');
createHeadDiv('div','snow-head2');
createHeadDiv('div','snow-head3');
createHeadDiv('div','snow-head4');
createHeadDiv('div','snow-head5');
createHeadDiv('div','snow-head6');
createHeadDiv('div','snow-head7');
createHeadDiv('div','snow-head8');
createHeadDiv('div','snow-head9');

// create head tag
function createHeadDiv(tag, elemId) {
    let tagN = document.createElement(tag);
        tagN.setAttribute('id', elemId);  
        wrapperSnow.appendChild(tagN);
}
//  присвоить id tag
let snowHeadId1 = document.getElementById('snow-head1');
let snowHeadId2 = document.getElementById('snow-head2');
let snowHeadId3 = document.getElementById('snow-head3');
let snowHeadId4 = document.getElementById('snow-head4');
let snowHeadId5 = document.getElementById('snow-head5');
let snowHeadId6 = document.getElementById('snow-head6');
let snowHeadId7 = document.getElementById('snow-head7');
let snowHeadId8 = document.getElementById('snow-head8');
let snowHeadId9 = document.getElementById('snow-head9');

//create function snowflakes
genSnow(snowHeadId1, range(1,2), 'snowflake1', 50);
genSnow(snowHeadId2, range(1,2), 'snowflake2', 60);
genSnow(snowHeadId3, range(1,2), 'snowflake3', 80);
genSnow(snowHeadId4, range(1,2), 'snowflake4', 90);
genSnow(snowHeadId5, range(1,2), 'snowflake5', 70);
genSnow(snowHeadId6, range(1,2), 'snowflake6', 90);
genSnow(snowHeadId7, range(1,2), 'snowflake7', 70);
genSnow(snowHeadId8, range(1,1), 'snowflake8', 30);
genSnow(snowHeadId9, range(1,2), 'snowflake9', 100);

// function  move snow
function genSnow(id, range, classEl, t) {    
    let  step = -100;
     createElem(id, range);
  let stop =  setInterval((elem) => {        
        let imgEl = id.children; 
           for (let i = 0; i < imgEl.length; i++) {
            imgEl[i].classList.add(classEl);
            step += 1;                    
            imgEl[0].style.top = step +'px';          
                if (imgEl[1]) {          
                    let num = -300;            
                    imgEl[i].style.top = (step + num) +'px'; 
                       if (Number(step + num) == document.documentElement.clientHeight) {          
                        step = -100;
                        num = -300;
                   }               
                }         
           }
           // console.log(document.documentElement.clientHeight - 20);
        // if (step == 20) {      
        //     imgEl.style.opacity = 0.9;           
        //     }               
        // if (step == 40) {      
        //     imgEl.style.opacity = 0.8;           
        //     } 
                   
       if (step == document.documentElement.clientHeight) {          
            step = -100;
       }            
    }, t);       
    window.document.body.addEventListener('click', stopMove);
    function stopMove() {            
                clearInterval(stop);            
    }
    window.document.body.addEventListener('dblclick', startMove);
    function startMove() {           
    //   return genSnow(id, range, classEl, t);
    }
}


// create element span
function createElem(div, arr ) {
    arr.forEach(elem => {
        let tag = document.createElement('span');
        div.appendChild(tag);
    });
}
// range 
function range(from, to) {
    let result = [];
    for (let i = from; i <= to; i++) {
       result.push(i);        
    }
    return result;
}
