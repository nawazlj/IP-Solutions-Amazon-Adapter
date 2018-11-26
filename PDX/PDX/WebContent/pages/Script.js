function createListItem() {  
    var eName1 = $('#txtempname').val();  
    var eDesg1 = $('#txtdesignation').val();  
  
  
    $.ajax({  
  
        async: true,  
        url:"https://144.21.93.75/ords/pdb1/ipsolws/catalogs/post",  
        method: "POST",          
        headers: {  
            "accept": "application/json;odata=verbose",  
            "content-type": "application/json;odata=verbose",  
            "X-RequestDigest": $("#__REQUESTDIGEST").val()  
        },  
        success: function(data) {  
  
            var eName = $('#txtempname').val(eName1);  
            var eDesg = $('#txtdesignation').val(eDesg1);  
  
            swal("Item created successfully", "success");  
  
            if ($.fn.DataTable.isDataTable('#subsiteList')) {  
                $('#subsiteList').DataTable().destroy();  
            }  
            $('#subsiteList tbody').empty();  
  
  
            getItems();  
        },  
        error: function(error) {  
            console.log(JSON.stringify(error));  
  
        }  
  
    })  
  
}




function CreateCatalog(){

var data = null;

var createCatalog = new XMLHttpRequest();
createCatalog.withCredentials = true;

var eName = $('#txtempname').val();  
    var eDesg = $('#txtdesignation').val();  
	
	if(eName===""|| eDesg===""){
		
		swal("Both feilds Required","","warning");

	}
	else{
	
createCatalog.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

createCatalog.open("POST", "https://144.21.93.75/ords/pdb1/ipsolws/catalogs/post");
createCatalog.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
createCatalog.setRequestHeader("name", eName);
createCatalog.setRequestHeader("description",eDesg );
createCatalog.setRequestHeader("cache-control", "no-cache");
createCatalog.setRequestHeader("postman-token", "320fb698-18d9-790b-3471-3528ec60d948");

createCatalog.send(data);

//swal("Item Created Suceessfully");


 $.ajax(
                {
                 type:'POST',
                   url: 'https://144.21.93.75/ords/pdb1/ipsolws/catalogs/post',

                   success:function(){
                     
                    //s console.log("added succesfully");
swal("Added!", "Catalog Added successfully", "success");
            getItems();  

  
            if ($.fn.DataTable.isDataTable('#subsiteList')) {  
                $('#subsiteList').DataTable().destroy();  
            }  
            $('#subsiteList tbody').empty();  
  
  


	
	
	
                   },
                   error:function(){
                      console.log("error");
                   }
                }
              );

}
}

function getvalue(click){

    var clicked=click.innerHTML;
   // document.getElementById("name").innerHTML=clicked;
    localStorage.setItem("clicked",clicked);
	//seectedProductId=
}



function get(value){
//console.log(value);

$.ajax({
  
    async: true,    
    url:"https://144.21.93.75/ords/pdb1/ipsolws/catalogs/get/"+ value+ "",
    method: "GET",
	
	
    success: function(data){
		
		alert("Hello");
		
		//alert(data.name);
		
      //console.log(data);
	  var i=0;
			//var eName = $('#txtempname').val(data.name);  
             //var eDesg = $('#txtdesignation').val(data.description); 
	// console.log(eName);
	
	var eName = $('#txtempnames').val(data.items[i].name);
alert(eName);	
    var eDesg = $('#txtdesignations').val(data.items[i].description); 
	 
	// console.log(eName);
	 //JSON.parse(eName);
	 
	 //console.log(data.items[i].name);
	 
	 
	 
   
    
   
     
          },
    error: function(error){
    console.log(JSON.stringify(error));
    
    }
        

    })
  
 uId = value;
  }




function edit(value){

$.ajax({
  
    async: true,    
    url:"https://144.21.93.75/ords/pdb1/ipsolws/catalogs/get/"+ value+ "",
    method: "GET",
	
	
	

    headers:{
    "accept":"application/json;odata=verbose",
    "content-type": "application/json;odata=verbose"
    
    },
    success: function(data){
		
		
		//alert(data.name);
		
      //console.log(data);
	  var i=0;
			//var eName = $('#txtempname').val(data.name);  
             //var eDesg = $('#txtdesignation').val(data.description); 
	// console.log(eName);
	
	var eName = $('#txtempnames').val(data.items[i].name);
    var eDesg = $('#txtdesignations').val(data.items[i].description); 
	 
	// console.log(eName);
	 //JSON.parse(eName);
	 
	 //console.log(data.items[i].name);
	 
	 
	 
   
    
   
     
          },
    error: function(error){
    console.log(JSON.stringify(error));
    
    }
        

    })
  
 uId = value;
  }




function UpdateCatalog(uId) {	
var data = null;




var updateCatalog = new XMLHttpRequest();
updateCatalog.withCredentials = true;

var eName = $('#txtempnames').val();  
    var eDesg = $('#txtdesignations').val();  

updateCatalog.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
  }
});

updateCatalog.open("PUT", "https://144.21.93.75/ords/pdb1/ipsolws/catalogs/put/"+uId+"");
updateCatalog.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
updateCatalog.setRequestHeader("name", eName);
updateCatalog.setRequestHeader("description", eDesg);
updateCatalog.setRequestHeader("cache-control", "no-cache");
updateCatalog.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");

updateCatalog.send(data);	

$.ajax({
					headers:{
"accept":"application/json;odata=verbose",
"content-type": "application/json;odata=verbose",
"X-RequestDigest": $("#__REQUESTDIGEST").val(),
"IF-MATCH": "*",
"X-HTTP-Method":"PUT"
},
                 method:'PUT',
                   url: 'https://144.21.93.75/ords/pdb1/ipsolws/catalogs/put/'+uId+'',

                 success: function(data){

swal("Updated!", "Catalog Updated successfully", "success");

    if ($.fn.DataTable.isDataTable('#subsiteList')) {
		getItems();
        $('#subsiteList').DataTable().destroy();
    }
    $('#subsiteList tbody').empty();

    

},
                   error:function(){
                      console.log("error");
                   }
                }
              );
}


function deleteItem(value){
	
	swal({
        title: "Are you sure?",
        text: "Catalog will be Deleted?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function (isConfirm) {
        if (!isConfirm) return;
	

$.ajax({
	

  
   
url: "https://144.21.93.75/ords/pdb1/ipsolws/catalogs/delete/"+ value +"",
method: "DELETE",
headers:{
"accept":"application/json;odata=verbose",
"content-type": "application/json;odata=verbose",
"X-RequestDigest": $("#__REQUESTDIGEST").val(),
"IF-MATCH": "*",
"X-HTTP-Method":"DELETE"
},
success: function(data){

swal("Deleted!", "Catalog Deleted successfully", "success");

    if ($.fn.DataTable.isDataTable('#subsiteList')) {
		getItems();
        $('#subsiteList').DataTable().destroy();
    }
    $('#subsiteList tbody').empty();

    

},
error: function(error){
console.log(JSON.stringify(error));

}



});
    });



}

function myFunction() {
    confirm("Press a button!");
}
