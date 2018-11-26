//-----------------------------restAPI for Post---------------------------




function CreateSoureDetails() 
{
	var data = null;
	var createSource = new XMLHttpRequest();
 
	createSource.withCredentials = true;

	var pSourceName = $('#srcilist').val();
	var pConnName = $('#siConnName').val();
	var pUserName = $('#piUname').val();
	var pPassword = $('#piPwd').val();
	var pCloundUrl = $('#piCloudUrl').val();
	var pDBDir = $('#piDBDir').val();
	var pDoc = $('#piDocName').val();

	createSource.addEventListener("readystatechange", function() {
											  if (this.readyState === 4) 
											  {
												  console.log(this.responseText);
											  }
			});

	createSource.open("POST", "https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/post");
	createSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
	createSource.setRequestHeader("source_name", pSourceName);
	createSource.setRequestHeader("connection_name", pConnName);
	createSource.setRequestHeader("pdh_user_name", pUserName);
	createSource.setRequestHeader("pdh_password", pPassword);
	createSource.setRequestHeader("pdh_cloud_url", pCloundUrl);
	createSource.setRequestHeader("pdh_db_directory_name", pDBDir);
	createSource.setRequestHeader("pdh_doc_name", pDoc);			 
	createSource.setRequestHeader("cache-control", "no-cache");
	createSource.setRequestHeader("postman-token", "320fb698-18d9-790b-3471-3528ec60d948");

	createSource.send(data);

	//swal("Item Created Suceessfully");

	$.ajax({
			type: 'POST',
			url: 'https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/post',

			success: function() 
			{
				//s console.log("added succesfully");
				swal("Source created successfully", "success");
				if ($.fn.DataTable.isDataTable('#subsiteList')) 
				{
					$('#subsiteList').DataTable().destroy();
					getSourceDetails();
				}
				$('#subsiteList tbody').empty();
			},
  
			error: function() 
			{
				console.log("error");
			}
	});

}

//-----------------------------restAPI for get---------------------------
				
				
function getSourceDetails(sourceName, connName) 
{
	console.log('Inside getSourceDetail');
	$.ajax({
			async: true,
			url: 'https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/gets/' + sourceName + '/' + connName,
			method: "GET",

			headers: 
			{
				"accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose"
			},
  
			success: function(data) 
			{
				//data = data.items;
				console.log(data);
				//for (var i = 0; i < data.items.length; i++) 
				//{
				    var html = "<tr><td>" + data.items[0].source_name + "</td><td>" + data.items[0].connection_name + 
				    			"</td><td>" + data.items[0].pdh_user_name + "</td><td>" + data.items[0].pdh_password + 
				    			"</td><td>" + data.items[0].pdh_cloud_url + "</td><td>" + data.items[0].pdh_db_directory_name + 
				    			"</td><td>" + data.items[0].pdh_doc_name + 
				    			"</td><td><a href='#' data-target='#ModalForUpdateEmployee' data-toggle='modal' onclick='edit(" + data.items[0].id + 
				    			");'><img src='../images/edit.jpg'></a></td><td><a href='#' onclick='deleteItem(" + 
				    			data.items[0].id + ");'><img src='../images/delete.png'></a></td></tr>";
				    
				    $('.table tbody').append(html);
				    //document.write(html);

				//}

				table = $('#subsiteList').DataTable();
			},
			
			error: function(error) 
			{
				console.log(JSON.stringify(error));
			}

	})
}

//-----------------------------restAPI for Put---------------------------	

//-----------------------------Calling edit onclick later will update to DB---------------------------	

function edit(value) 
{
	//alert(value);
	console.log('Inside edit')

	$.ajax({

			async: true,
			url: 'https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/get/' + value ,
			method: "GET",

			headers: 
			{
				"accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose"
			},
  
			success: function(data) 
			{
				//alert(data.name);

				console.log(data);
				var i = 0;
				//var eName = $('#txtempname').val(data.name);  
				//var eDesg = $('#txtdesignation').val(data.description); 
				// console.log(eName);

				var pSourceName = $('#srculist').val(data.items[i].source_name);
				var pConnName = $('#suConnName').val(data.items[i].connection_name);
				var pUserName = $('#puUname').val(data.items[i].pdh_user_name);
				var pPassword = $('#puPwd').val(data.items[i].pdh_password);
				var pCloundUrl = $('#puCloudUrl').val(data.items[i].pdh_cloud_url);
				var pDBDir = $('#puDBDir').val(data.items[i].pdh_db_directory_name);
				var pDoc = $('#puDocName').val(data.items[i].pdh_doc_name);

				// console.log(eName);
				//JSON.parse(eName);

				//console.log(data.items[i].name);
			},
			
			error: function(error) 
			{
				console.log(JSON.stringify(error));
			}
	})
	uId = value;
}

//-----------------------------Calling put API to update---------------------------


function UpdateSourceDetails(uId) 
{
	alert(uId);
	var data = null;
	var updateSource = new XMLHttpRequest();
	updateSource.withCredentials = true;
	var pSourceName = $('#srculist').val();
	var pConnName = $('#suConnName').val();
	var pUserName = $('#puUname').val();
	var pPassword = $('#puPwd').val();
	var pCloundUrl = $('#puCloudUrl').val();
	var pDBDir = $('#puDBDir').val();
	var pDoc = $('#puDocName').val();

	updateSource.addEventListener("readystatechange", function() {
										if (this.readyState === 4) 
										{
											//alert(this.responseText);
										}
	});

	updateSource.open("PUT", 'https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/put/' + uId + "");
	updateSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
	updateSource.setRequestHeader("p_source_name", pSourceName);
	updateSource.setRequestHeader("p_connection_name", pConnName);
	updateSource.setRequestHeader("p_pdh_user_name", pUserName);
	updateSource.setRequestHeader("p_pdh_password", pPassword);
	updateSource.setRequestHeader("p_pdh_cloud_url", pCloundUrl);
	updateSource.setRequestHeader("p_pdh_db_directory_name", pDBDir);
	updateSource.setRequestHeader("p_pdh_doc_name", pDoc);
	updateSource.setRequestHeader("cache-control", "no-cache");
	updateSource.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");
	updateSource.send(data);

	$.ajax({
			headers: 
			{
				"accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val(),
				"IF-MATCH": "*",
				"X-HTTP-Method": "PUT"
			},
			
			method: 'PUT',
			url: 'https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/put/' + uId + '',

			success: function(data) 
			{
				//	alert("Hello")
				swal("Updated!", "Item Updated successfully", "success");

				if ($.fn.DataTable.isDataTable('#subsiteList')) 
				{
					getSourceDetails();
					$('#subsiteList').DataTable().destroy();
				}
				$('#subsiteList tbody').empty();
			},
  
			error: function() 
			{
				console.log("error");
			}
	});
}

//-----------------------------restAPI for delete---------------------------
				
function deleteItem(value) 
{
	$.ajax({
			url: "https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/delete/" + value + "",
			method: "DELETE",
			
			headers: 
			{
				"accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val(),
				"IF-MATCH": "*",
				"X-HTTP-Method": "DELETE"
			},
			
			success: function(data) 
			{
				//	alert("Hello")
				swal("Deleted!", "Item Deleted successfully", "success");
				if ($.fn.DataTable.isDataTable('#subsiteList')) 
				{
					getSourceDetails();
					$('#subsiteList').DataTable().destroy();
				}
				$('#subsiteList tbody').empty();
			},
  
			error: function(error) 
			{
				console.log(JSON.stringify(error));
			}
	})
}			
