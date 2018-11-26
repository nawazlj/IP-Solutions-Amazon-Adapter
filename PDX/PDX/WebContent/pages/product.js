$(document).ready(function(){

getProducts();
getCatalogName();

});



function getProducts(){

$.ajax({
  
    async: true,    
    url: "https://144.21.93.75/ords/PDB1/ipsolws/productdet/get/",
    method: "GET",

    headers:{
    "accept":"application/json;odata=verbose",
    "content-type": "application/json;odata=verbose"
    
    },
    success: function(data){
   // data = data.items;
    //console.log(data);
     for(var i = 0; i < data.items.length; i++){
    	 
    
        var html = "<tr><td>"+data.items[i].item_number+"</td><td>"+data.items[i].item_class+"</td></td><td>"+data.items[i].description+"</td><td>"+data.items[i].organization_name+"</td><td>"+data.items[i].approval_status+"</td><td>"+data.items[i].primary_unit_of_measure+"</td><td>"+data.items[i].item_status+"</td><td>"+data.items[i].life_cycle_phase+"</td><td>"+data.items[i].status+"</td></tr>";
        $('.table tbody').append(html);

    }
  
      table = $('#subsiteList').DataTable();
    },
    error: function(error){
    console.log(JSON.stringify(error));
    
    }
    
    })


}

function getCatalogName(){
	
	$.ajax({
  
    async: true,    
    url: "https://144.21.93.75/ords/pdb1/ipsolws/catalogs/get",
    method: "GET",

    headers:{
    "accept":"application/json;odata=verbose",
    "content-type": "application/json;odata=verbose"
    
    },
    success: function(data){
   // data = data.items;
    //console.log(data);
     for(var i = 0; i < data.items.length; i++){
    
        var html = "<b>"+data.items[i].name+"</a></b>";
      //  $('.table h1').append(html);
		
			//var myElement = document.getElementById("catalog_name");
document.getElementById("catalog_name").innerHTML =html;

    }
  
      //table = $('#subsiteList').DataTable();
    },
    error: function(error){
    console.log(JSON.stringify(error));
    
    }
    
    })
	
}