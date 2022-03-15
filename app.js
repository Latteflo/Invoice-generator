 let tasks = []
  let price = 0
  let washCarBtn = document.getElementById("wash-car")
  let mowLawnBtn = document.getElementById("mow-lawn")
  let pullWeedsBtn = document.getElementById("pull-weeds")
  let taskList = document.getElementById("task-list")
  let notesEl = document.getElementById("notes-el")
  let totalPriceEl = document.getElementById("total-price")
  let clearBtn = document.getElementById("clear")


  washCarBtn.addEventListener("click", function() {
    addToTasks("Wash Car", 10)
  })
  
  mowLawnBtn.addEventListener("click", function(){
    addToTasks("Mow Lawn", 20)
  })
  
  pullWeedsBtn.addEventListener("click", function(){
    addToTasks("Pull Weeds", 30)
  })
  
  clearBtn.addEventListener("click", function(){
    tasks = []
    price = 0
    displayTasks()
  }) 

  
  function displayTasks() {
    let tempTaskList = ""
    for(let i = 0; i < tasks.length; i++){
      tempTaskList += (`
      <div class="cols">
        <p class='left-align'>
          <span class='task-list'>${tasks[i][0]}</span> 
          <span class='remove' onclick="remove(${i})">&emsp;Remove</span>
        </p>
        <p class='right-align'><span class='dollar'>$</span><span class="task-list">${tasks[i][1]}</span></p>
      </div>`)
    }
    taskList.innerHTML = tempTaskList
    if(price){
      notesEl.innerHTML = "We accept cash, credit card, or PayPal"
    }
    else {
      notesEl.innerHTML = ""
    }
    totalPriceEl.innerHTML = `$${price}`;
  }
  
  function totalPrice(value){
    price += Number(value)
  }
  
  function addToTasks(name, price){
    for(let i=0; i<tasks.length; i++){
      if(name == tasks[i][0]){
        return 
      }
    }
    tasks.push([name, price])
    totalPrice(price)
    displayTasks()
  }
  
  function remove(value) {
    totalPrice(-1*tasks[value][1])
    tasks.splice(value, 1)
    displayTasks()
  }
  
  


function setColor(clicked_id) {
    let element = document.querySelector("#" + clicked_id)
    let style = window.getComputedStyle(element)
    let bgc = style.background
    let c = style.color
  
    document.querySelector(":root").style.setProperty("--emphasis-color", c)
    document.querySelector(":root").style.setProperty("--button-color", bgc)
  }
  
  function setMode(clicked_id) {
    if (clicked_id === "light") {
      document
        .querySelector(":root")
        .style.setProperty("--background-color", "#ECFDF5")
      document.querySelector(":root").style.setProperty("--text-color", "#1F2937")
    } else if (clicked_id === "dark") {
      document
        .querySelector(":root")
        .style.setProperty("--background-color", "#1F2937")
      document.querySelector(":root").style.setProperty("--text-color", "#D5D4D8")
    }
  }
  