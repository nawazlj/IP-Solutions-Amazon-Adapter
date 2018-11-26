
		
			var gs_id= new Array();
			var gt_id= new Array();	
			var g_srcxml='';
			var g_dstxml='';

			function clearmap()
			{
				var clvalid='', tele='';
				var i=1;
				clvalid='dstid'+i;
				tele='d'+i;
				while(document.getElementById(tele) != null)
				{
					document.getElementById(clvalid).innerHTML = "";
					clvalid='dstid'+i;
					tele='d'+i;
					i++;
				}			
			}
			
			function savemap()
			{	
				for(var K=0; K<gs_id.length; K++)
				{
				var vrsrc='',vrdst='', srcptr, dstptr, j=1;
				var parentages, parentaged;
				/*src*/
				var x, y, i, jum = 0;
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(g_srcxml,"text/xml");
				x = xmlDoc.documentElement;
				y = x.children;
				/*dst*/
				var x1, y1, i1, jum1 = 0;
				parser1 = new DOMParser();
				xmlDoc1 = parser1.parseFromString(g_dstxml,"text/xml");
				x1 = xmlDoc1.documentElement;
				y1 = x.children;
				
				srcptr=gs_id[K].substr(3);
				dstptr=gt_id[K].substring(5);
				var srcp=parseInt(srcptr);
				var dstp=parseInt(dstptr);
				vrsrc=document.getElementById(gs_id[K]).innerText;
				vrdst=document.getElementById(gt_id[K].substring(4)).innerText;
				/*******************************************************
				START TO GET SOURCE HIERARCHY
				********************************************************/
				parseXMLSRCM(x);
				function parseXMLSRCM(xmlNode)
						{
							var node = xmlNode;
							var childNodes = node.children;
							var i;
							jum++;
							
							if(jum === srcp)
							{
								
							  	var pnode = node;
							  	parentages = '';
							  	while(pnode.nodeName != '#document')
							  	{
									parentages = pnode.nodeName + ">>" + parentages; 
									pnode = pnode.parentNode;
							  	}
				  				
				  			}
				  			for(i=0; childNodes && i<childNodes.length; i++)
				  			{
								if(childNodes[i].children && childNodes[i].children.length > 0)
					  				parseXMLSRCM(childNodes[i]);		
								else
								{ 
									jum++;
									
					  				if(jum === srcp)
					  				{
										var pnode = childNodes[i];
										parentages = '';
										while(pnode.nodeName != '#document')
										{
											parentages = pnode.nodeName + ">>" + parentages; 
											pnode = pnode.parentNode;
										}
										
					 				}
								}
				  			}
						}
				/***********************************************************
					END TO GET SOURCE HIERARCHY
				/***********************************************************/
				/***********************************************************
					START TO GET DEST HIERARCHY
				************************************************************/

				parseXMLDSTM(x1);
				function parseXMLDSTM(xmlNode)
						{
							var node1 = xmlNode;
							var childNodes = node1.children;
							var i1;
							jum1++;
							
							if(jum1 === dstp)
							{
								
							  	var pnode1 = node1;
							  	parentaged = '';
							  	while(pnode1.nodeName != '#document')
							  	{
									parentaged = pnode1.nodeName + ">>" + parentaged; 
									pnode1 = pnode1.parentNode;
							  	}
				  				
				  			}
				  			for(i1=0; childNodes && i1<childNodes.length; i1++)
				  			{
								if(childNodes[i1].children && childNodes[i1].children.length > 0)
					  				parseXMLDSTM(childNodes[i1]);		
								else
								{ 
									jum1++;
									
					  				if(jum1 === dstp)
					  				{
									
										var pnode1 = childNodes[i1];
										 parentaged = '';
										while(pnode1.nodeName != '#document')
										{
											parentaged = pnode1.nodeName + ">>" + parentaged; 
											pnode1 = pnode1.parentNode;
										}
										
					 				}
								}
				  			}
						}
				/************************************************************
				END TO GET DEST HIERARCHY
				*************************************************************/
				console.log(parentages+'>>>>>>>>'+parentaged);
				
				}
				//alert('Successfully Saved !!!');
				
				inscat_mapper_ui();
			}
			
			function inscat_mapper_ui()
			{
				//alert("Hello");
				var data = null;
				var eName = $('#imptxt').val(); 
				var createcat_map = new XMLHttpRequest();
				
				createcat_map.withCredentials = true;
				createcat_map.addEventListener("readystatechange", function () {
														if (this.readyState === 4) 
														{
				     										this.responseText;
				   										}
						});

				createcat_map.open("POST", "https://144.21.93.75/ords/PDB1/ipsolws/mappermain/post");
				createcat_map.setRequestHeader("authorization", "Basic cGR4OnBkeA==");
				createcat_map.setRequestHeader("import_map_name", eName);
				createcat_map.setRequestHeader("SOURCE_CATEGORY_NAME", document.getElementById("srccattxt").value);
				createcat_map.setRequestHeader("TARGET_CATEGORY_NAME", document.getElementById("Tgttxt").value);
				createcat_map.setRequestHeader("SOURCE_XML_FILE_NAME", "SRC.XML");
				createcat_map.setRequestHeader("TARGET_XML_FILE_NAME", "TRG.XML");
				createcat_map.setRequestHeader("SOURCE_XML_PARSED_CONTENTS", document.getElementById("pText").innerHTML);
				createcat_map.setRequestHeader("TARGET_XML_PARSED_CONTENTS", document.getElementById("pText1").innerHTML);
				createcat_map.setRequestHeader("cache-control", "no-cache");
				createcat_map.setRequestHeader("postman-token", "031bb243-5852-a010-df4e-e86c04c9ca2e");
				createcat_map.send(data);	
				
				swal("Created!", "Item Created successfully", "success");
				//swal("Mapper Created Suceessfully");
				//console.log(data);
				
				
				
			}
			function allowDrop(ev) 
			{
				ev.preventDefault();
			}

			function drag(ev) 
			{
				ev.dataTransfer.setData("text", ev.target.id);
			}

			function drop(ev) 
			{
				debugger;
				ev.preventDefault();
				var data = ev.dataTransfer.getData("text");
				var ele = document.createElement("span");
				if(document.getElementById(data).children && document.getElementById(data).children.length > 0)
				{
					ele.innerText = document.querySelectorAll('#'+data+' > p')[0].innerText;
				}
				
				ele.innerText = document.getElementById(data).innerText;
				ev.target.appendChild(ele);
				gs_id.push(data);
				gt_id.push(ev.target.id)
				
			}
			
		var opendstFile = function(event)
		{
				var input = event.target;
				var reader = new FileReader();
				reader.onload = function()
				{
					g_dstxml = reader.result;
					var x, y, i,rum = 0;
					var elearr1=[];
					var resultdata1='';
					parser = new DOMParser();
					xmlDoc = parser.parseFromString(g_dstxml,"text/xml");				
					x = xmlDoc.documentElement;
					y = x.children;
					parsetgtXML(x);
				function parsetgtXML(xmlNode)
				{
					var node = xmlNode;
					var childNodes = node.children;
					var i;
					rum++;
					elearr1.push('<span id="d'+rum+'">' + '<ul id="myUL"><li><span class="caret1">' + node.nodeName + '</span><div class="rect" ondrop="drop(event)" ondragover="allowDrop(event)" id="dstid'+rum+'"></div>'+'<ul class="nested1">');
				  	for(i=0; childNodes && i<childNodes.length; i++)
				  	{
						if(childNodes[i].children && childNodes[i].children.length > 0)
					  	parsetgtXML(childNodes[i]);		
						else
						{	rum++;
							elearr1.push('<li><span id="d'+rum+'">'+childNodes[i].nodeName + '</li></span><div class="rect"  ondrop="drop(event)" ondragover="allowDrop(event)" id="dstid'+rum+'"></div></span></li>');
						}
				  	}
				 	elearr1.push('</ul>');
				}			
					
					for(i=0; i < elearr1.length; i++)
				{
				resultdata1 += elearr1[i];
				}
			
				document.getElementById('pText1').innerHTML = resultdata1;
				
				var toggler1 = document.getElementsByClassName("caret1");
				var t1;
				
				for (t1 = 0; t1 < toggler1.length; t1++) 
				{
					toggler1[t1].addEventListener("click", function() {
																this.parentElement.querySelector(".nested1").classList.toggle("active1");
																this.classList.toggle("caret-down1");
															  			});
				}					
				};
			reader.readAsText(input.files[0]);
		};
		
		var opensrcFile = function(event) 
		{
			var input = event.target;
			var reader = new FileReader();
			reader.onload = function()
			{
				g_srcxml = reader.result;
				var x, y, i, jum = 0;
				var resultdata='';
				var elearr=[];
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(g_srcxml,"text/xml");
				x = xmlDoc.documentElement;
				y = x.children;
				parseXML(x);			
				function parseXML(xmlNode)
				{
				  	var node = xmlNode;
				  	var childNodes = node.children;
				  	var i;
				  	jum++;
				  	elearr.push('<span draggable="true" ondragstart="drag(event)" id="sid'+jum+'">' + '<ul id="myUL"><li><span class="caretsrc">' + node.nodeName + '</span>' + '<ul class="nestedsrc">');
				  	for(i=0; childNodes && i<childNodes.length; i++)
				  	{
						if(childNodes[i].children && childNodes[i].children.length > 0)
					 	{
					 		parseXML(childNodes[i]);	
						}				  
						else
						{
					  		jum++;
					  		elearr.push('</span><li><span draggable="true" ondragstart="drag(event)" id="sid'+jum+'">' + childNodes[i].nodeName + '</span></li>');
						}
				  	}
				  elearr.push('</ul></li></ul>');
				}
			
				for(i=0; i < elearr.length; i++)
				{
					resultdata += '<span draggable="true" ondragstart="drag(event)" id="srcid'+i+'">'+elearr[i]+"</span>"
				}
					
				document.getElementById('pText').innerHTML = resultdata;
					
				var toggler = document.getElementsByClassName("caretsrc");
				var t;
				
				for (t = 0; t < toggler.length; t++) 
				{
					
					toggler[t].addEventListener("click", function() {
															this.parentElement.querySelector(".nestedsrc").classList.toggle("activesrc");
															this.classList.toggle("caret-downsrc");
														  			});
				}					
			};
					
			reader.readAsText(input.files[0]);
		};
		
		
