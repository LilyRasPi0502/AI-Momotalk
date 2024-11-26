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
