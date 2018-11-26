			var api="https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/";
			
			function CreateSoureDetails()
			{
				var data = null;
				var csource_name= document.getElementById("srclist").value;

				var createSource = new XMLHttpRequest();
				createSource.withCredentials = true;

				createSource.addEventListener("readystatechange", function () {
														if (this.readyState === 4) 
														{
															console.log(this.responseText);
														}
				});

				createSource.open("POST", api+"post");
				createSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				createSource.setRequestHeader("source_name", document.getElementById('srclist').value);
				createSource.setRequestHeader("connection_name", document.getElementById('sConnName').value);
				if(csource_name === 'PDH')
				{
				createSource.setRequestHeader("pdh_user_name", document.getElementById('pUname').value);
				createSource.setRequestHeader("pdh_password", document.getElementById('pPwd').value);
				createSource.setRequestHeader("pdh_cloud_url", document.getElementById('pCloudUrl').value);
				createSource.setRequestHeader("pdh_db_directory_name", document.getElementById('pDBDir').value);
				createSource.setRequestHeader("pdh_doc_name", document.getElementById('pDocName').value);
				}
				else if(csource_name === 'eBiz')
				{
				createSource.setRequestHeader("ebs_user_name", document.getElementById('eUname').value);
				createSource.setRequestHeader("ebs_password", document.getElementById('ePwd').value);
				createSource.setRequestHeader("ebs_cloud_url", document.getElementById('eCloudUrl').value);
				createSource.setRequestHeader("ebs_db_directory_name", document.getElementById('eDBDir').value);
				createSource.setRequestHeader("ebs_doc_name", document.getElementById('eDocName').value);
				}
				else if(csource_name === 'SAP')
				{
				createSource.setRequestHeader("sap_user_name", document.getElementById('sUname').value);
				createSource.setRequestHeader("sap_password", document.getElementById('sPwd').value);
				createSource.setRequestHeader("sap_cloud_url", document.getElementById('sCloudUrl').value);
				createSource.setRequestHeader("sap_db_directory_name", document.getElementById('sDBDir').value);
				createSource.setRequestHeader("sap_doc_name", document.getElementById('sDocName').value);
				}
				createSource.setRequestHeader("cache-control", "no-cache");
				createSource.setRequestHeader("postman-token", "320fb698-18d9-790b-3471-3528ec60d948");

				createSource.send(data);
			}			

			function getSourceDetails() 
			{	
			
				//var api="https://144.21.93.75/ords/pdb1/ipsolws/sourcereg";
				var gsource_name= document.getElementById("srclist").value;
				var gsconn_name= document.getElementById("sConnName").value;
																		var data = null;

				
				var getSource = new XMLHttpRequest();
							getSource.open("GET", "https://144.21.93.75/ords/pdb1/ipsolws/sourcereg/get/PDH/PDH%20Con");

				getSource.withCredentials = true;
				console.log("Before invoke ");
				console.log(gsource_name + 'Line 61');
				console.log(gsconn_name + 'Line62');
				//console.log("value : "+document.getElementById('Uname').value);
				getSource.addEventListener("readystatechange", function () {
					
													  if (this.readyState === 4) 
													  {    
														var tj = null; 
														tj=JSON.parse(this.responseText);
														//alert(tj);
														if(gsource_name === 'PDH')
														{console.log('Inside PDH');
														for(var i = 0; i < tj.items.length; i++)
															{
																
																	
															document.getElementById('pUname').value= tj.items[i].pdh_user_name;
															document.getElementById('pPwd').value= tj.items[i].pdh_password;
															document.getElementById('pCloudUrl').value= tj.items[i].pdh_cloud_url;
															document.getElementById('pDBDir').value= tj.items[i].pdh_db_directory_name;
															document.getElementById('pDocName').value= tj.items[i].pdh_doc_name;
															}
														}
														else if(gsource_name === 'eBiz')
														{
															document.getElementById('eUname').value= tj.items[0].ebs_user_name;
															document.getElementById('ePwd').value= tj.items[0].ebs_password;
															document.getElementById('eCloudUrl').value= tj.items[0].ebs_cloud_url;
															document.getElementById('eDBDir').value= tj.items[0].ebs_db_directory_name;
															document.getElementById('eDocName').value= tj.items[0].ebs_doc_name;
														}
														else if(gsource_name === 'SAP')
														{
															document.getElementById('sUname').value= tj.items[0].sap_user_name;
															document.getElementById('sPwd').value= tj.items[0].sap_password;
															document.getElementById('sCloudUrl').value= tj.items[0].sap_cloud_url;
															document.getElementById('sDBDir').value= tj.items[0].sap_db_directory_name;
															document.getElementById('sDocName').value= tj.items[0].sap_doc_name;
														}
														/*console.log(this.responseText);
														console.log("value of first element: "+sak);*/
														}
						});
				console.log('Before Open');
				//getSource.open("GET", api+"get/gsource_name/gsconn_name");
				console.log('After Open');
				getSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				getSource.setRequestHeader("cache-control", "no-cache");
				getSource.setRequestHeader("postman-token", "81dbdefd-6239-44be-1820-00510628cad0");
				console.log('Before send');
				getSource.send(data);
				console.log('After Send');
			}
			
			function UpdateSourceDetails() 
			{	
				//var api="https://144.21.93.75/ords/pdb1/ipsolws/sourcereg";
				var source_name= document.getElementById("srclist").value;
				var usconn_name= document.getElementById("sConnName").value;	
				var data = null;
				console.log(source_name);
				console.log(usconn_name);
				var updateSource = new XMLHttpRequest();
				
				updateSource.withCredentials = true;
				updateSource.addEventListener("readystatechange", function () {
														if (this.readyState === 4) 
														{
				     										alert(this.responseText);
				   										}
						});

				updateSource.open("PUT", api+"/put/source_name/usconn_name");
				updateSource.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				if(source_name === 'PDH')
				{console.log('Inside PDH');
					updateSource.setRequestHeader("pdh_user_name", document.getElementById('pUname').value);
					updateSource.setRequestHeader("pdh_password", document.getElementById('pPwd').value);
					updateSource.setRequestHeader("pdh_cloud_url", document.getElementById('pCloudUrl').value);
					updateSource.setRequestHeader("pdh_db_directory_name", document.getElementById('pDBDir').value);
					updateSource.setRequestHeader("pdh_doc_name", document.getElementById('pDocName').value);
				}
				else if(source_name === 'eBiz')
				{
					updateSource.setRequestHeader("ebs_user_name", document.getElementById('eUname').value);
					updateSource.setRequestHeader("ebs_password", document.getElementById('ePwd').value);
					updateSource.setRequestHeader("ebs_cloud_url", document.getElementById('eCloudUrl').value);
					updateSource.setRequestHeader("ebs_db_directory_name", document.getElementById('eDBDir').value);
					updateSource.setRequestHeader("ebs_doc_name", document.getElementById('eDocName').value);
				}
				else if(source_name === 'SAP')
				{
					updateSource.setRequestHeader("sap_user_name", document.getElementById('sUname').value);
					updateSource.setRequestHeader("sap_password", document.getElementById('sPwd').value);
					updateSource.setRequestHeader("sap_cloud_url", document.getElementById('sCloudUrl').value);
					updateSource.setRequestHeader("sap_db_directory_name", document.getElementById('sDBDir').value);
					updateSource.setRequestHeader("sap_doc_name", document.getElementById('sDocName').value);
				}
				updateSource.setRequestHeader("cache-control", "no-cache");
				updateSource.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");
				updateSource.send(data);		 
			}
			
			function getSourceForm()
			{
				var fname= document.getElementById("srclist").value;
				console.log(fname);
				
				if(fname === 'PDH')
				{
					var pdh_source= '<table align="Center"> 	<tr> 		<td>PDH User Name </td><td><input type="text" id= "pUname" name="PDH User Name" placeholder="PDH User Name"> </td> 	</tr> 	<tr>	 		<td>PDH Password </td><td><input type="password" id="pPwd" name="PDH Password" placeholder="PDH Password"> </td> 	</tr> 	<tr>	<td>PDH Cloud Url </td><td><input type="text" id= "pCloudUrl" name="PDH Cloud Url" placeholder="PDH Cloud Url"> </td> 	</tr> 	<tr>	<td>PDH DB Directroy Name </td><td><input type="text" id= "pDBDir" name="PDH DB Directory Name" placeholder="PDH DB Directory Name"> </td> 	</tr> 	<tr>	<td>PDH Doc Name </td><td><input type="text" id="pDocName" name="PDH Doc Name" placeholder="PDH Doc Name"> </td> 	</tr> </table>';
					document.getElementById("abc").innerHTML = pdh_source;
				}
				else if(fname === 'eBiz')
				{
					var eBiz_source='<table align="Center"> 	<tr> 		<td>eBIZ User Name </td><td><input type="text" id= "eUname" name="eBIZ User Name" placeholder="eBIZ User Name"> </td> 	</tr> 	<tr>	 		<td>eBIZ Password </td><td><input type="password" id="ePwd" name="eBIZ Password" placeholder="eBIZ Password"> </td> 	</tr> 	<tr>	<td>eBIZ Cloud Ur </td><td><input type="text" id= "eCloudUrl" name="eBIZ Cloud Url" placeholder="eBIZ Cloud Url"> </td> 	</tr> 	<tr>		<td>eBIZ DB Directroy Name </td><td><input type="text" id= "eDBDir" name="eBIZ DB Directory Name" placeholder="eBIZ DB Directory Name"> </td> 	</tr> 	<tr><td>eBIZ Doc Name </td><td><input type="text" id="eDocName" name="eBIZ Doc Name" placeholder="eBIZ Doc Name"> </td> 	</tr> </table>';
					document.getElementById("abc").innerHTML = eBiz_source;
				}
				else if(fname === 'SAP')
				{
					var sap_source= '<table align="Center"> 	<tr> 		<td>SAP User Name </td><td><input type="text" id= "sUname" name="SAP User Name" placeholder="SAP User Name"> </td> 	</tr> 	<tr>	 		<td>SAP Password </td><td><input type="password" id="sPwd" name="SAP Password" placeholder="SAP Password"> </td> 	</tr> 	<tr>	<td>SAP Cloud Url </td><td><input type="text" id= "sCloudUrl" name="SAP Cloud Url" placeholder="SAP Cloud Url"> </td> 	</tr> 	<tr>	<td>SAP DB Directroy Name </td><td><input type="text" id= "sDBDir" name="SAP DB Directory Name" placeholder="SAP DB Directory Name"> </td> 	</tr> 	<tr><td>SAP Doc Name </td><td><input type="text" id="sDocName" name="SAP Doc Name" placeholder="SAP Doc Name"> </td> 	</tr> </table>';
					document.getElementById("abc").innerHTML = sap_source;
				}
			}

			function clearSource()
			{
				var clear_source= document.getElementById("srclist").value;
				
				if(clear_source === 'PDH')
				{
					document.getElementById('pUname').value= null;
					document.getElementById('pPwd').value= null;
					document.getElementById('pCloudUrl').value= null;
					document.getElementById('pDBDir').value= null;
					document.getElementById('pDocName').value= null;
				}
				else if(clear_source === 'eBiz')
				{
					document.getElementById('eUname').value= null;
					document.getElementById('ePwd').value= null;
					document.getElementById('eCloudUrl').value= null;
					document.getElementById('eDBDir').value= null;
					document.getElementById('eDocName').value= null;
				}
				else if(clear_source === 'SAP')
				{
					document.getElementById('sUname').value= null;
					document.getElementById('sPwd').value= null;
					document.getElementById('sCloudUrl').value= null;
					document.getElementById('sDBDir').value= null;
					document.getElementById('sDocName').value= null;
				}
			}			
