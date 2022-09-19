function query(a){
  return document.querySelector(a);
}

let balance = query(".balance2");
let income = query(".income2");
let expense = query(".expense2")
let history = query(".history");
let addincome = query(".click1");
let addexpense = query(".click2");
let text = query(".text1");
let number = query(".number1");

let empty = JSON.parse(localStorage.getItem("key")) || [];

function showUp(){

  let updateIncome_ = 0;
  let updateExpense_ = 0;
  let updateBalance_ = 0;

  for(let g of empty){
    if(g.type == "income"){
      updateIncome_+=Number(g.amount);
      income.textContent =`$${updateIncome_}`
    }else if (g.type == "expense"){
      updateExpense_+=Number(g.amount);
      expense.textContent = `$${updateExpense_}`
    }

    updateBalance_ = updateIncome_ - updateExpense_;
    balance.textContent = `$${updateBalance_}`;

  }
}

showUp();


function showHistory(){
  for(let g of empty){
    if(g.type == "income"){
      let sec = document.createElement("section");
    sec.className = "inc";
    sec.id = `${g.id}`;
    sec.innerHTML = `
    <div>
     ${g.name}
    </div>
    <div>
      <span>$${g.amount}</span>
      <button id=${g.id}>X</button>
    </div>
`
  let button = sec.children[1];
  let main = button.children[1];
  main.addEventListener("click", remove);
  history.appendChild(sec);
      

  let hist = history.children;

  function remove(e){
   let updateIncome2 = 0;
   let updateExpense2 = 0;
   let updateBalance2 = 0;
   
  
    for(let i=0; i<hist.length; i++){
      if(e.target.id == hist[i].id){
        history.removeChild(hist[i]);
        if(hist.children == null){
           income.textContent = `$0`
           expense.textContent = `$0`
        }
      }
    }
  
  
  
  
  for(let i=0; i<empty.length; i++){
      if(e.target.id == empty[i].id){
        empty.splice(i,1);
        localStorage.setItem("key",JSON.stringify(empty));
     for(let u of empty){
      if(u.type == "income"){
        updateIncome2+=Number(u.amount);
        income.textContent = `$${updateIncome2}`
      }else if(u.type == "expense"){
        updateExpense2+=Number(u.amount);
        expense.textContent = `$${updateExpense2}`
      }
    }
     updateBalance2 = updateIncome2 - updateExpense2;
      balance.textContent = `$${updateBalance2}`;
      }
    }
  }



    }else if(g.type == "expense"){

      let sec2 = document.createElement("section");
    sec2.className = "exp";
    sec2.id = `${g.id}`;

    sec2.innerHTML =`
   <div>
     ${g.name}
  </div>
  <div>
    <span>$${g.amount}</span>
    <button id=${g.id}>X</button>
  </div>
`
  let button2 = sec2.children[1];
  let main2 = button2.children[1];
  main2.addEventListener("click", remove);

  history.appendChild(sec2);

  let hist = history.children;

function remove(e){
  updateIncome4 = 0;
  updateExpense4 = 0;
  updateBalance4 = 0;
  for(let l= 0; l<hist.length; l++){
    if(e.target.id == hist[l].id){
      history.removeChild(hist[l]);
    if(hist.children == null){
      income.textContent = `$0`
      expense.textContent = `$0`
    }
    }
  }

  for(let m=0; m<empty.length; m++){
    if(e.target.id == empty[m].id){
      empty.splice(m,1);
      localStorage.setItem("key",JSON.stringify(empty));
   for(let j of empty){
    if(j.type == "income"){
      updateIncome4+=Number(j.amount);
      income.textContent = `$${updateIncome4}`
    }else if(j.type == "expense"){
      updateExpense4+=Number(j.amount);
      expense.textContent = `$${updateExpense4}`
    }
  }
    updateBalance4 = updateIncome4 - updateExpense4;
    balance.textContent = `$${updateBalance4}`;
    }
  }
}


    }
  }
}

showHistory();

function update2(){
  return Math.round(Math.random()*10);
}

function update(){
  return Math.round(Math.random()*100);
}

addincome.addEventListener("click",changeDom);

addexpense.addEventListener("click",changeDom2);

function changeDom(){
if(text.value == ""||number.value ==""|| number.value < 0){
  alert("check your inputs")
}else{
  let obj = {id:update(),amount:number.value, type:"income", name:text.value }
empty.push(obj);

localStorage.setItem("key",JSON.stringify(empty));
 
let updateIncome = 0;
let updateExpense = 0;
let updateBalance = 0;
 
for(let x of empty){
  if(x.type == "income"){
    updateIncome+=Number(x.amount);
    income.textContent =`$${updateIncome}`
  }else if(x.type == "expense"){
    updateExpense+=Number(x.amount);
    expense.textContent = `$${updateExpense}`
  }
  updateBalance = updateIncome - updateExpense;
  balance.textContent = `$${updateBalance}`;
}

let sec = document.createElement("section");
sec.className = "inc";
sec.id = `${obj.id}`;
sec.innerHTML = `
    <div>
     ${obj.name}
    </div>
    <div>
      <span>$${obj.amount}</span>
      <button id=${obj.id}>X</button>
    </div>
`
let button = sec.children[1];
let main = button.children[1];
main.addEventListener("click", remove);

history.appendChild(sec);
text.value ="";
number.value ="";

let hist = history.children;

function remove(e){
 let updateIncome2 = 0;
 let updateExpense2 = 0;
 let updateBalance2 = 0;
 

  for(let i=0; i<hist.length; i++){
    if(e.target.id == hist[i].id){
      history.removeChild(hist[i]);
      if(hist.children == null){
         income.textContent = `$0`
         expense.textContent = `$0`
      }
    }
  }




for(let i=0; i<empty.length; i++){
    if(e.target.id == empty[i].id){
      empty.splice(i,1);
      localStorage.setItem("key",JSON.stringify(empty));
   for(let u of empty){
    if(u.type == "income"){
      updateIncome2+=Number(u.amount);
      income.textContent = `$${updateIncome2}`
    }else if(u.type == "expense"){
      updateExpense2+=Number(u.amount);
      expense.textContent = `$${updateExpense2}`
    }
  }
   updateBalance2 = updateIncome2 - updateExpense2;
    balance.textContent = `$${updateBalance2}`;
    }
  }
}
}
};


function changeDom2(){
  if(text.value == ""||number.value ==""|| number.value < 0){
  alert("check your inputs")
}else{
     let obj2 = {id:update2(),amount:number.value, type:"expense", name:text.value };
    empty.push(obj2);
    localStorage.setItem("key",JSON.stringify(empty));
    
   let updateIncome3 = 0;
   let updateExpense3 = 0;
   let updateBalance3 = 0;
    
  for(let x of empty){
  if(x.type == "income"){
    updateIncome3+=Number(x.amount);
    income.textContent =`$${updateIncome3}`
  }else if(x.type == "expense"){
    updateExpense3+=Number(x.amount);
    expense.textContent = `$${updateExpense3}`
  }
  updateBalance3 = updateIncome3 - updateExpense3;
  balance.textContent = `$${updateBalance3}`;
}

let sec2 = document.createElement("section");
sec2.className = "exp";
sec2.id = `${obj2.id}`;

sec2.innerHTML =`
   <div>
     ${obj2.name}
  </div>
  <div>
    <span>$${obj2.amount}</span>
    <button id=${obj2.id}>X</button>
  </div>
`
let button2 = sec2.children[1];
let main2 = button2.children[1];
main2.addEventListener("click", remove);

history.appendChild(sec2);
text.value ="";
number.value ="";

let hist = history.children;

function remove(e){
  updateIncome4 = 0;
  updateExpense4 = 0;
  updateBalance4 = 0;
  for(let l= 0; l<hist.length; l++){
    if(e.target.id == hist[l].id){
      history.removeChild(hist[l]);
    if(hist.children == null){
      income.textContent = `$0`
      expense.textContent = `$0`
    }
    }
  }

  for(let m=0; m<empty.length; m++){
    if(e.target.id == empty[m].id){
      empty.splice(m,1);
      localStorage.setItem("key",JSON.stringify(empty));
   for(let j of empty){
    if(j.type == "income"){
      updateIncome4+=Number(j.amount);
      income.textContent = `$${updateIncome4}`
    }else if(j.type == "expense"){
      updateExpense4+=Number(j.amount);
      expense.textContent = `$${updateExpense4}`
    }
  }
    updateBalance4 = updateIncome4 - updateExpense4;
    balance.textContent = `$${updateBalance4}`;
    }
  }
}
}
};