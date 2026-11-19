let userinput=document.getElementById("itemInput");
let addbtn=document.getElementById("addBtn");
let searchInput=document.getElementById("searchInput");
let allitems=[];
if(localStorage.getItem("items") != null){
    allitems=JSON.parse(localStorage.getItem("items"));
    displayItems();
}
function addItem(){
allitems.push(userinput.value);
localStorage.setItem("items",JSON.stringify(allitems));
displayItems();
}
function displayItems(){
  let group ="";
  for(let i=0;i<allitems.length;i++){
    group+=`<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${allitems[i]} </p>
      <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
    </div>`;
  //   group+=`<li class="list-group-item d-flex justify-content-between align-items-center">
  //   ${allitems[i]}
  //   <button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button>
  // </li>`;
  }
   document.getElementById("home").innerHTML=group;
}

function deleteItem(index){
  allitems.splice(index,1);
  localStorage.setItem("items",JSON.stringify(allitems));
  displayItems();
}

searchInput.addEventListener("input",function(e){
  searchitems(e.target.value);
}
)
function searchitems(searchValue){
  let group ="";
for(let i=0;i<allitems.length;i++){
  if(allitems[i].toLowerCase().includes(searchValue.toLowerCase())){
    group+=`<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${allitems[i]} </p>
      <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
    </div>`;
  }
   document.getElementById("home").innerHTML=group;
   
}}

