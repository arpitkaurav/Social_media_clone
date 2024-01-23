//Page1
var isStatus=document.querySelector("#page1 h5");
var addFriend=document.querySelector("#page1 #add");
var flag=0

    addFriend.addEventListener("click",function(){
        if(flag==0){
        isStatus.innerHTML="FRIENDS❤️",
        isStatus.style.color="green",
        addFriend.innerHTML="REMOVE",
        flag=1
    }else{
        isStatus.innerHTML="STRANGER",
        isStatus.style.color="red",
        addFriend.innerHTML="ADD FRIEND",
        flag=0
    }
    })

//Page2
var container = document.querySelector("#page2 #container");
var love = document.querySelector("#container i");

container.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8

    setTimeout(function(){
        love.style.opacity = 0;
    },1000)

    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },2000)
})

// Page3(Custom Cursor)
var main=document.querySelector("#page3");
var crsr=document.querySelector(".cursor");

main.addEventListener("mousemove",(event)=>{
    crsr.style.left = event.x+"px";
    crsr.style.top = event.y+"px";//position:fixed is necessary
})

//Page4()
var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    
    val.addEventListener("mouseenter",function (){
        val.childNodes[3].style.opacity = 1//3rd childnode is img
    });

    val.addEventListener("mouseleave",function (){
        val.childNodes[3].style.opacity = 0
    });

    val.addEventListener("mousemove",function (event){
        val.childNodes[3].style.left = event.x+"px";
        val.childNodes[3].style.top = event.y+"px";
    })
});

// Page5
var storiyan = document.querySelector(".storiyan");
var fullScreen = document.querySelector("#full-screen");

var arr=[
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

var clutter=""
arr.forEach(function(elem,idx){
    clutter +=`<div id="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML=clutter

storiyan.addEventListener("click",function(dets){
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        fullScreen.style.display = "none";
    },2000)
})