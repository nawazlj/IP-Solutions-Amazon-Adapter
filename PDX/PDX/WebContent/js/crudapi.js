

var api="https://144.21.93.75/ords/pdb1/ipsolws/catalogs/";

function CreateCatalog(){

var data = null;

var createCatalog = new XMLHttpRequest();
createCatalog.withCredentials = true;

createCatalog.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

createCatalog.open("POST", api+"post");
createCatalog.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
createCatalog.setRequestHeader("name", "new");
createCatalog.setRequestHeader("description", "Catalog ");
createCatalog.setRequestHeader("cache-control", "no-cache");
createCatalog.setRequestHeader("postman-token", "320fb698-18d9-790b-3471-3528ec60d948");

createCatalog.send(data);

}

function DeleteCatalog(){
var data = null;

var deleteCatalog = new XMLHttpRequest();
deleteCatalog.withCredentials = true;

deleteCatalog.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

deleteCatalog.open("DELETE", api+"delete/47");
deleteCatalog.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
deleteCatalog.setRequestHeader("name", "Cata");
deleteCatalog.setRequestHeader("cache-control", "no-cache");
deleteCatalog.setRequestHeader("postman-token", "c41dc03d-8d65-c831-34cf-87c9183b9fb3");

deleteCatalog.send(data);


}

 function UpdateCatalog() {	
var data = null;

var updateCatalog = new XMLHttpRequest();
updateCatalog.withCredentials = true;

updateCatalog.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    alert(this.responseText);
  }
});

updateCatalog.open("PUT", api+"put/43");
updateCatalog.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
updateCatalog.setRequestHeader("name", "Cata Sakshi 23 Oct");
updateCatalog.setRequestHeader("description", "updated 23 Oct");
updateCatalog.setRequestHeader("cache-control", "no-cache");
updateCatalog.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");

updateCatalog.send(data);	
}


    function GetCatalogDetails() {	

        
		
var data = null;

var getCatalog = new XMLHttpRequest();
getCatalog.withCredentials = true;

getCatalog.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {    
  var tj = null; 
    tj=JSON.parse(this.responseText);
		var tid=document.getElementById("")
	
        var table = document.createElement("table");
        var table = document.createElement("table");
		
		console.log(table);



        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);  


		
        for (var i = 0; i < tj.items.length; i++) {
			var th= document.createElement("th");
            var tr = document.createElement("tr");   

	
			// TABLE HEADER.
    table.appendChild(tr);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
for (var i=0;i<tj.items.length;i++)
{  tr = table.insertRow(-1);
     var c_id = tj.items[i].id; 
		var c_name = tj.items[i].name; 
		var c_desc = tj.items[i].description; 
		var tabCell = tr.insertCell(-1)
		var tabCell_1= tr.insertCell(-1)
		var tabCell_2= tr.insertCell(-1)
		tabCell.innerHTML = c_id;
		tabCell_1.innerHTML = c_name;
		tabCell_2.innerHTML=c_desc;
		

		
		
}
		

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("Catalogdata");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

  }
});

getCatalog.open("GET", api+"get");
getCatalog.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
getCatalog.setRequestHeader("cache-control", "no-cache");
getCatalog.setRequestHeader("postman-token", "81dbdefd-6239-44be-1820-00510628cad0");

getCatalog.send(data);


    }
