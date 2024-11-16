var inputOne=document.getElementById("input-1");
var inputTow=document.getElementById("input-2");

var index=document.getElementById("index");
var sitName=document.getElementById("name");
var viset=document.getElementById("viset");
// var delet=document.getElementById("dlete");
var trData=document.getElementById("trData");


siteList=[];

if (localStorage.getItem("sit")!==null){
    siteList=JSON.parse(localStorage.getItem("sit"));
    display(siteList);
 }
    
function creat() {
    var siteItem = {
        index:siteList.length,
        sitName:inputOne.value,
        viset:inputTow.value,
        
        
    };
   
    siteList.push(siteItem);
localStorage.setItem("sit",JSON.stringify(siteList))
    display();
    clear();

    
};



//var index=i;
function display(){
    cartona=``
for (let i = 0; i < siteList.length; i++) {
    
    cartona+=`               <tr>
                            <td id="index"><div class="badg">${i + 1}</div></td>
                            <td ><div id="name">${siteList[i].sitName}</div></td>
                            <td  ><div id="viset" class="btn btn-success  "><a href="${siteList[i].viset}" class="color-light text-decoration-none">viset</a></div></td>
                            <td  ><div id="delte" class="btn btn-danger " onclick="delet(${i})">delet</div></td>
                            </tr>

                        `

                        
    
}

trData.innerHTML=cartona;



};



function delet(index) {
    siteList.splice(index,1);
    localStorage.setItem("sit",JSON.stringify(siteList));
  display()
    
}



function clear() {
    
    inputOne.value=null;
    inputTow.value=null;
    

    
};




/*<tr>
                            <td id="index"></td>
                            <td id="name"></td>
                            <td id="viset" ><a  href=""></a></td>
                            <td id="dlete"></td>
                        </tr> */