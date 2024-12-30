function ViewProfile(Student){
	OnChat = false;
	document.getElementById("MainPage").innerHTML = '<div id="StudentProfile" class="StudentProfile font"><div id="Chat" class="Chat">Chat</div></div>';
	StudentDataStr = '';
	if(StudentIndex[Student]["StudentData"] != ""){
		StudentDataStr += '<div id="DataTable" class="DataTable"><table>';
		StudentsData = StudentIndex[Student]["StudentData"].split(";\n");
		for(StudentData of StudentsData){
			if(StudentData != ""){
				StudentDataStr += '<tr><th>'+StudentData.split("=-=")[0]+'</th><td>'+StudentData.split("=-=")[1]+'</td></tr>';
			}
		}
		urlTmp = location.origin+"/momotalk/?Stu="+StudentIndex[Student]["Name"]
		SVG = '<svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z"/></svg>';
		StudentDataStr += '<tr onclick="ShareURL();"><th id="ShareSVG">'+SVG+'</th><td><label id="uURL">'+urlTmp+'</label></td></tr>';
		
		StudentDataStr += '</table></div>';
	}
	document.getElementById("StudentProfile").innerHTML = '<div id="ProfileBox" class="ProfileBox"><div class="AvaBox"><div id="ProAvatar" class="ProAvatar"><image id="ProImage" class="ProImage" src="Avatar/'+StudentIndex[Student]["Name"]+'.png"/ ></div></div><div id="ProName" class="ProName">'+StudentIndex[Student]["Name"]+'</div><div id="Signature" class="Signature">'+StudentIndex[Student]["Signature"]+'</div><div style="text-align: center;display: flex;justify-content: center;"><div id="BirthDay" class="BirthDay">🎂'+StudentIndex[Student]["BirthDay"]+'</div></div>'+StudentDataStr+'</div><div class="chbut"><button class="chbun" onclick="ToChat();">聊天室</button></div>';
}
function ToChat(){
	NName = document.getElementById("ProName").innerHTML;
	PageSelect(1);
	i=0;
	for(NData of ChatData.data){
		if(NData.Name == NName){
			ReadMessage(i);
		}
		i++;
	}
}
