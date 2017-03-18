//alaaZme Production
  
var names = [];//create the product elemet
  function Item(name, quan,today) {
    this.name = name;
    this.quantity = quan;
	this.today=today;
if(today=="")
 today = new Date();
else
	today = new Date(today);
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();

//	  today = new Date(today);
  if(dd<10){
    dd='0'+dd;
 } 
 if(mm<10){
    mm='0'+mm;
   } 
   this.today = mm+'/'+dd+'/'+yyyy;
   
}
Item.prototype = {//elements functionality
    constructor : Item,
	 toString : function() {
		var str="";//saves output here
 str=" &emsp; "+ this.name +" &emsp;   "+   this.quantity +
                           "   &emsp; " + this.today+" &emsp;     \n"+ "<br><br>";
	  return str;
	},		
    sayDetails : function() {
		  console.log(" course details: "+this.name + 
		                     " courses number: " +  this.quantity + 
				                              " points: " + this.today);
    }
};
  function  myList (){
	this.list = [];		 
}
myList.prototype={//element's list func
	constructor :  myList ,
    toString : function() {//need to put into STRING!!!!!!!!!!!!!!!!!!!!
	var str="";//holds final str
		if(this.list!=undefined)
        for(i=0;i<this.list.length;i++)
           str+=(i+ "  "+ this.list[i].toString());   //add to str
	   return str;
	   },
	  sortedprint : function (array,type){//sorts element and shows
		  var str="";
		  		if(array!=undefined){
		if(type==1){
          for(i=0;i<this.list.length;i++){//prints by index of diffrent array
           str+=(array[i][0]+ "  "+ this.list[array[i][0]].toString()); 
		  }
		}	   
	  	else if(type==0){
			      for(i=this.list.length-1;i>=0;i--)
           str+=(array[i][0]+ "  "+ this.list[array[i][0]].toString());  
		}
		else
			alert("empty table");
			}
	   return str;
	  },
	  
	  addItem : function(Item){//add to list
		 Item.name =Item.name.replace(/[@.,\/#!$%\^&\* ;:{}=\_`~()]/g,"");//remove from str
		 if( Item.name==""){
			 
			alert("illegal Input");
			return;
		 }
			 
		  if(this.list==undefined)//frst element
			   list[0]= Item;
		   
        	else if(myList.list!=undefined)
		  for(i=0;i<myList.list.length;i++){//if already exists
			  if(myList.list[i].name.toUpperCase()==Item.name.toUpperCase()){
				  var temp =  myList.list[i].quantity;
				  temp =parseInt( temp) + parseInt(Item.quantity);
				  myList.list[i].quantity = temp;
				      document.getElementById('theList').innerHTML = myList.toString();
				  return;
			  }
		  }//run till last element then add
			this.list[i] = Item;		   
	  }
	  };
	  
	  

$("#find").click(function () {	
	//gets users input index of item in list and sets item the edit window text box	
		var index = document.getElementById('index').value;
		if(myList.list[0]==undefined){
			alert("Table Is Empty");
            return;
		}				
	    if(document.getElementById('index').value=="")
		   index = 0;					
        if(index>=myList.list.length||index<0){
			alert("Not In Table's Rane length");
			return;}	 		
        $("#edtWin").css("visibility","hidden");			
 	    var string = myList.list[index].name;
	    var quan = myList.list[index].quantity;
	    document.getElementById('Rename').value=string;//set name in edtWin textbox
	    document.getElementById('quant').value=quan;//set quanti in edtWin textbox
		$("#subedt").css("visibility","visible");	
						    $("#subedt").addClass("animated bounceInDown");
    });
$("#change").click(function () {
	//from edit menu when changing detail edits the value in Mylist and applies changes
		if(document.getElementById('Rename').value==""){
		 alert("Wrong Name input Enter a String");//empty
		 return;
		}
		else if(isNaN(document.getElementById('Rename').value)){//if is a string
			var index = document.getElementById('index').value;
			  if(document.getElementById('index').value=="")//placeholder
				 index = 0;	//defualt
        myList.list[index].name =  document.getElementById('Rename').value;
        myList.list[index].quantity =  document.getElementById('quant').value;
 
         document.getElementById('theList').innerHTML = myList.toString();
			return 

		}
		//alert(document.getElementById('index')+ "   "+ )
		else{
		 alert("Wrong Name input Enter a String");
		}
 
	});
$("#confdlt").click(function () {	//new game btn
//removes element from my lits by index after click
          myList.list.splice(document.getElementById('pos').value, 1);
			  document.getElementById('theList').innerHTML = myList.toString();	
    });
$("#addbtn").click(function () {	//add to list btn
        var quan = document.getElementById('quan').value;//get from user
        var string = document.getElementById("newItemN").value;
	    var quan = document.getElementById("quan").value;
	    if(quan=="")//defulat
		    quan=1;
			  
		if(isNaN(document.getElementById('newItemN').value)===false||string==""){
				 alert(" Forgot the product's Name " + '\n' +"Please Fill in Product's Name");
			 }			
			 else{
			  var newItem =new Item(string,quan,'');
			  myList.addItem(newItem);//add element todays date
			 }
			  document.getElementById('theList').innerHTML = myList.toString();
			  
    });
$("#Lod").click(function () {		
// Retrieve the object from storage
   var retrievedData = localStorage.getItem("SavedList");//the list
   var newList = JSON.parse(retrievedData);
   retrievedData = localStorage.getItem("listDate");//the lists date
  if( retrievedData != ""){
   retrievedData=retrievedData.replace(/[@.,\/#!$%\^&\*" ;:{}=\_`~()]/g,"");
   if(retrievedData!="")//this is for date oonly!!!!
   document.getElementById("listsdate").value = retrievedData;
	var pieces = retrievedData.split('-');
    var temp = pieces[0];
	var reversed = "";
    for(i=1;i<pieces.length;i++)//orginze to date pattern
		reversed+= pieces[i].toString()+"-";
              reversed+= temp ;
	 reversed = new Date(reversed);
  var dd =reversed.getDate();
  var mm =  reversed.getMonth()+1; //January is 0!

    var yyyy = reversed.getFullYear();
  if(dd<10){
    dd='0'+dd;
 } 
 if(mm<10){
    mm='0'+mm;
   } 
  reversed = mm+'/'+dd+'/'+yyyy;  //final template
  if(document.getElementById("listsdate").value==""){}
  else{
     datebtn.value=reversed ;
   } 
  }
  myList.list=[];
  if(newList!=null){//here we load the list
     for(i=0;i<newList.length;i++){		 
    	var itemk =new Item(newList[i].name,parseInt(newList[i].quantity),newList[i].today);
    	myList.addItem(itemk);//add elements to list
     }
   }
   else
	alert("NULL");

	//display change loaded info
   document.getElementById('theList').innerHTML = myList.toString();//show list
   alert("done load");
});
$("#Sav").click(function () {
   //saves to local storage
   localStorage.setItem("listDate", JSON.stringify(document.getElementById('listsdate').value));//date
   localStorage.setItem("SavedList", JSON.stringify(myList.list));//my list
   alert("Saved!!");
// Put the object into storage
	});

	
$("#srtAd").click(function () {//sort by decreased quantity
			if(myList.list.length==0)
					alert("empty table");
	var arr =[];
		if(myList.list==undefined)
					alert("empty table");
		for(var i=0;i<myList.list.length;i++){
			var tmp = [i,myList.list[i].quantity];
			arr.push(tmp);
		}		
		arr.sort(sortSecCol);
	    	for(var i=0;i<myList.list.length;i++)
				console.log(arr[i][0]);
			
		   myList.sortedprint(arr,0);
		  document.getElementById('theList').innerHTML = 		myList.sortedprint(arr,0);

// Put the object into storage
	});
	
function sortSecCol(a, b) {//sort by sec col
    if (a[1] === b[1]) {return 0; } //equals keep
    else {//if needs changing
      return (a[1] < b[1]) ? -1 : 1;} 
}

$("#AscQu").click(function () {//sort by ascendiing quantity
		
		if(myList.list.length==0)
					alert("empty table");
		var arr =[];
		
		for(var i=0;i<myList.list.length;i++){
			var tmp = [i,myList.list[i].quantity];
			arr.push(tmp);
		}		
		arr.sort(sortSecCol);
    	  document.getElementById('theList').innerHTML = myList.sortedprint(arr,1);
	});
	
$("#srtdt").click(function () {//table by date
	if(myList.list.length==0)
	    alert("empty table");
	if(myList!=undefined)
    	document.getElementById('theList').innerHTML = myList.toString();
     else 
    	alert("empty table");
});

$("#clrlst").click(function () {//deletes list and show
        if(myList.list.length==0)
		    alert("empty table");
		else{
		  myList.list = [] ;
	      document.getElementById('theList').innerHTML = 	myList.toString();
		}

});

$("#datediv").click(function () {
        $("#chsDt").addClass("animated bounceInDown");
      $("#chsDt").css("visibility","visible");
});

$("#setDt").click(function () {//shows lists date
	var currTm = new Date();
    var dd = currTm.getDate();
    var mm = currTm.getMonth()+1; //January is 0!

    var yyyy = currTm.getFullYear();
	var insrtTm = new Date(listsdate.value);
	
		if(listsdate.value==""){//empty
            	alert("illegal date format " + '\n' +" insert mm/dd/yyyy");	
                $("#datediv").css("background-Color","white");							
		}
		else if(insrtTm < currTm+ 1200){//check date ebntred not past
          alert("List's Date Cant be in the Past");
          if(insrtTm=="")
	        $("#datediv").css("background-Color","white");								       	
		}			
		else{//time correct show
           $("#chsDt").css("visibility","visible");
		   $("#chsDt").css("visibility","hidden");
          var pieces = listsdate.value.split('-');
          var temp = pieces[0];
       	  var reversed = "";
          for(i=1;i<pieces.length;i++)
	        	reversed+= pieces[i].toString()+"/";
         reversed+= temp ;
         datebtn.value=reversed;
		}
});

$("#datecnl").click(function () {
	   $("#chsDt").css("visibility","hidden");		

});
myList = new myList();
var item1 =new Item("Vegtables",4,'3-20-2017');
var item2 = new Item("Suger-1kg",2,'3/19/2017');
var item3 =new Item("Cola-1.5l",5,'3/21/2017');
var item4 = new Item("ZXC",1,'7/4/2018');
var item5 =new Item("Bread",15,'');
var item6 = new Item("Meat",7,'');
var item7 =new Item("Pasta",5,'');
var item8 = new Item("Meat",7,'');
var item9 =new Item("Salt",1,'3/21/2019');

myList.addItem(item1);
myList.addItem(item2);
myList.addItem(item3);
myList.addItem(item4);
myList.addItem(item5);
myList.addItem(item6);
myList.addItem(item7);
myList.addItem(item8);
myList.addItem(item9);

document.getElementById('theList').innerHTML = myList.toString();
$(document).ready(function(){
animationHover('#srtAd','tada');
animationHover('#AscQu','tada');
animationHover('#clrlst','tada');
animationHover('#srtdt','tada');
animationHover('#datediv','tada');
function animationHover(element,animation){
   element = $(element);
element.hover(function(){
element.addClass('animated '+animation);
window.setTimeout(function(){

 element.removeClass('animated '+animation);
},250);
});
}
});
	//----------SHOW THE SPECIFIC WINDOW-------------------------//
  $("#cnlbtn").click(function(){	//new game btn
               $("#winMsg").css("visibility","hidden");
    });
$("#NewPrd").click(function () {	//new game btn
	       $("#subedt").css("visibility","hidden");
	   	$("#mainM").css("visibility","hidden");
		          $("#LoSaWin").css("visibility","hidden");
	              $("#edtWin").css("visibility","hidden");
		 		                   $("#dltWin").css("visibility","hidden");
								   			    $("#winMsg").addClass("animated bounceInDown");
                                    $("#winMsg").css("visibility","visible");
    });
	

		  $("#edt").click(function () {	//new game btn
		   //addClass("animated bounceInDown");
		   	$("#mainM").css("visibility","hidden");
					 $("#subedt").css("visibility","hidden");
	$("#winMsg").css("visibility","hidden");
	  $("#LoSaWin").css("visibility","hidden");
			$("#dltWin").css("visibility","hidden");
			    $("#edtWin").addClass("animated bounceInDown");
			    $("#edtWin").css("visibility","visible");
			
    });
$("#Menu").click(function () {	//new game btn

       $("#subedt").css("visibility","hidden");
       	    $("#winMsg").css("visibility","hidden");
			    $("#edtWin").css("visibility","hidden");
					 $("#dltWin").css("visibility","hidden");
					    $("#LoSaWin").css("visibility","hidden");
							    $("#mainM").addClass("animated bounceInDown");
							 
								$("#mainM").css("visibility","visible");
    });
$("#dlt").click(function () {	//new game btn
          	$("#winMsg").css("visibility","hidden");
			    $("#edtWin").css("visibility","hidden");
				  	$("#mainM").css("visibility","hidden");
					 $("#subedt").css("visibility","hidden");
					  $("#LoSaWin").css("visibility","hidden");
					  	    $("#dltWin").addClass("animated bounceInDown");
						$("#dltWin").css("visibility","visible");
					
    });
$("#LoSa").click(function () {	//new game btn
       	$("#winMsg").css("visibility","hidden");
			    $("#edtWin").css("visibility","hidden");
				  	$("#mainM").css("visibility","hidden");
					 $("#subedt").css("visibility","hidden");
						$("#dltWin").css("visibility","hidden");    
							    $("#LoSaWin").addClass("animated bounceInDown");
				                $("#LoSaWin").css("visibility","visible");
    });