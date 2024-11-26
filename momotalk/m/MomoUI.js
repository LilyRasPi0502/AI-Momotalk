var audio = new Audio("sound/Beast_Senior.wav"), onClick = false, Clicked = false;
var BackAudio = new Audio("sound/ブルーアーカイブ Blue Archive OST 14. Step by Step.wav");
var ChatData = JSON.parse('{ "data" : [] }');
var StudentData = null;
var PageMode = 0, Selected = 0;
var OnChat = true;

window.onload=function(){
	Mob();
	window.history.pushState(null, null, "#");
	window.onpopstate = function(event) {
		PageSelect(PageMode);
		window.history.forward();
	};
	getStudentList(-1, true);
	setInterval(function() {On_MessageCallBack();BackAudioPlay();}, 10);
	document.addEventListener("click", Onclick_init);
	document.onvisibilitychange = BackAudioPlay;
	audio.volume = 0.25;
	BackAudio.volume = 0.45;
	audio.loop = true;
	BackAudio.loop = true;
};
function Onclick_init() {
	if(Clicked){
		onClick = true;
		BackAudioPlay();
	}
	else{
		Clicked = true;
	}
}

function PageSelect(Item){
	PageMode = Item;
	OnChat = true;
	getStudentList(Item);
	if(Item == 0){		//查看個人檔案
		document.getElementById("MainPage").innerHTML = '<div class="StudentListTitle"><div id="StudentCount" class="StudentCount font"></div><div id="Filter" class="Filter font" onclick="Filter();">默認</div><div class="FilterAllow"></div><div class="Reverse font" onclick="Reverse();">≡<image src="img/ReverseButton0.png" id="Reverse"><input type="hidden" id="ReverseAllow" value="0"></div></div><div id="StudentListPanel" class="StudentListPanel"></div>';
		document.getElementById("PageProfile").src = "img/PageProfile0.png";
		document.getElementById("PageChat").src = "img/PageChat1.png";
		document.getElementById("PageIconSet").style.backgroundColor = "#4C5B70";
		document.getElementById("PageIconPro").style.backgroundColor = "#67788d";
		document.getElementById("PageIconChat").style.backgroundColor = "#4C5B70";
		document.getElementById("SetIcon").style.filter = "opacity(0.5)";
	}
	else if(Item == 1){	//查看聊天
		document.getElementById("MainPage").innerHTML = '<div class="StudentListTitle"><div id="StudentCount" class="StudentCount font"></div><div id="Filter" class="Filter font" onclick="Filter();">默認</div><div class="FilterAllow"></div><div class="Reverse font" onclick="Reverse();">≡<image src="img/ReverseButton0.png" id="Reverse"><input type="hidden" id="ReverseAllow" value="0"></div></div><div id="StudentListPanel" class="StudentListPanel"></div>';
		document.getElementById("PageProfile").src = "img/PageProfile1.png";
		document.getElementById("PageChat").src = "img/PageChat0.png";
		document.getElementById("PageIconSet").style.backgroundColor = "#4C5B70";
		document.getElementById("PageIconChat").style.backgroundColor = "#67788d";
		document.getElementById("PageIconPro").style.backgroundColor = "#4C5B70";
		document.getElementById("SetIcon").style.filter = "opacity(0.5)";
	}
	else if(Item == 2){	//Setting
		document.getElementById("MainPage").innerHTML = '<div id="StudentListPanel" class="StudentListPanel"></div>';
		document.getElementById("PageProfile").src = "img/PageProfile1.png";
		document.getElementById("PageChat").src = "img/PageChat1.png";
		document.getElementById("PageIconSet").style.backgroundColor = "#67788d";
		document.getElementById("PageIconChat").style.backgroundColor = "#4C5B70";
		document.getElementById("PageIconPro").style.backgroundColor = "#4C5B70";
		document.getElementById("SetIcon").style.filter = "opacity(1)";
	}
	else if(Item == -1){	//Debug
		document.getElementById("MainPage").innerHTML = '<div id="StudentProfile" class="StudentProfile font"><div id="Chat" class="Chat">Chat</div></div>';
		document.getElementById("PageProfile").src = "img/PageProfile1.png";
		document.getElementById("PageChat").src = "img/PageChat0.png";
		document.getElementById("PageIconSet").style.backgroundColor = "#67788d";
		document.getElementById("PageIconChat").style.backgroundColor = "#4C5B70";
		document.getElementById("PageIconPro").style.backgroundColor = "#4C5B70";
	}
}
function On_MessageCallBack(){
	if(document.getElementById("UnReadCountVa").value == 0){
		document.getElementById("UnReadCount").style.visibility = "hidden";
	}
	else{
		document.getElementById("UnReadCount").innerHTML = "&nbsp;" + document.getElementById("UnReadCountVa").value + "&nbsp";
		document.getElementById("UnReadCount").style.visibility = "visible";
	}
	UnReadCount();
}
function Reverse(){
	if(OnChat)	document.getElementById("StudentListPanel").innerHTML = "";
	if(PageMode == 0){
		StudentData = StudentData.reverse();
		ViewStudentList(0, StudentData);
	}
	else if(PageMode == 1){
		ChatData.data = ChatData.data.reverse();
		MessageEasyViewer();
	}
	if(document.getElementById("ReverseAllow").value == "0"){
		document.getElementById("ReverseAllow").value = "1";
		document.getElementById("Reverse").src = "img/ReverseButton1.png";
	}
	else{
		document.getElementById("ReverseAllow").value = "0";
		document.getElementById("Reverse").src = "img/ReverseButton0.png";
	}
}

function getStudentList(Mode, init = false){
    /*resp = await fetch("./json/index.json", {method: "GET"});
    StudentIndex = JSON.parse(await resp.text()).UserList;
    if(init){
		initChat(StudentIndex);
		getStudentName();
	}
	else		ViewStudentList(Mode, StudentIndex);*/
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			StudentIndex = JSON.parse(this.responseText).UserList;
			//console.log(StudentIndex["UserList"]);
			if(init){
				initChat(StudentIndex);
				getStudentName();
			}
			else	ViewStudentList(Mode, StudentIndex);
			//onload event end move to chatlist
		}
	};
	xmlhttp.open("GET", "./json/index.json", true);
	xmlhttp.send();
}
function getStudentName(){
	PageSelect(0);
	url = new URL(location.href);
	i = 0;
	try{
		GName = url.searchParams.get("Stu");
	}catch(e){}
	if(GName == null){
		GName = ChatData.data[2].Name;
	}
	for(NData of ChatData.data){
		if(NData.Name == GName){
			ViewProfile(i);
		}
		i++;
	}
}
function ViewStudentList(Mode, StudentIndex){
	StudentData = StudentIndex;
	Count = StudentIndex.length;
	if(OnChat)	document.getElementById("StudentListPanel").innerHTML = "";
	if(Mode == 0) 	Str = "學生(" + Count + ")";
	else if (Mode == 1) Str = "未讀訊息(" + UnReadCount() + ")";
	else Str = "";
	try{document.getElementById("StudentCount").innerHTML = Str;}
	catch(e){}
	OnChat = true;
	if(Mode == 0){
		for(i=0; i<Count; i++){
				try{document.getElementById("StudentListPanel").innerHTML += '<div id="StudentList-StudentBox" class="StudentList-StudentBox" onclick="ViewProfile('+i+');"><div class="Avatar"><image id="Avatar" src="Avatar/' + StudentIndex[i]["Name"] + '.png" height="100px" width="100px" style="border-radius: 50%;"></div><div style="width:60%;height:90%;"><div id="Name" class="Name font">' + StudentIndex[i]["Name"] + '</div><div id="EasyMessageViewer" class="EasyMessageViewer">' + StudentIndex[i]["Signature"] + '</div></div></div>';}
			catch(e){}
		}
	}
	else if(Mode == 1) MessageEasyViewer();
	else if(Mode == 2) ViewSetting();
}
function ViewSetting(){
	document.getElementById("StudentListPanel").innerHTML = "";
	Str = "";
	coojson = JSON.parse(document.cookie);
	if(!coojson.Mute)	Mute = " checked";
	else			Mute = "";
	Str += '<div class="SettingBox" onclick="OnSetting(0);"><span style="font-size:30px;">背景音樂</span><label class="switch"><input type="checkbox" id="MuteCB" disabled'+ Mute +'><span class="slider round"></span></label></div>';
	
	document.getElementById("StudentListPanel").innerHTML = Str;
}
function OnSetting(Option){
	coojson = JSON.parse(document.cookie);
	Mute = coojson.Mute;
	switch(Option){
		case 0:
			Mute = !(coojson.Mute);
			CB = document.getElementById("MuteCB");
			CB.checked = !(CB.checked);
			break;
	}
	document.cookie = '{"Mute":'+Mute+',"test":true}';
}
function MessageEasyViewer(){
	document.getElementById("StudentListPanel").innerHTML = '';
	for(i=0; i<ChatData.data.length; i++){
		Str = '';
		if(UnReadMessageCount(i) != 0)Str = '<div style="width:100%;height:90%;"><div  class="UnReadMessage-StudentBox">'+UnReadMessageCount(i)+'</div></div>';
		MSG = RemoveDateTime(ChatData.data[i]["prompt"][ChatData.data[i]["prompt"].length-1]["content"]);
		if(RemoveDateTime(ChatData.data[i]["prompt"][ChatData.data[i]["prompt"].length-1]["content"]) == "<Typing>") MSG = '<div style="display:flex;"><div class="TypingDot0"></div><div class="TypingDot1"></div><div class="TypingDot2"></div></div>';
		document.getElementById("StudentListPanel").innerHTML += '<div id="StudentList-StudentBox" class="StudentList-StudentBox" onclick="ReadMessage('+i+')"><div class="Avatar"><image id="Avatar" src="Avatar/' + ChatData.data[i]["Name"] + '.png" height="100px" width="100px" style="border-radius: 50%;"></div><div style="width:60%;height:90%;"><div id="Name" class="Name font">' + ChatData.data[i]["Name"] + '</div><div id="EasyMessageViewer" class="EasyMessageViewer">' + MSG + '</div></div>'+Str+'</div>';
	}
}
function ReadMessage(Message_ID){
	OnChat = false;
	document.getElementById("MainPage").innerHTML = '<div id="StudentProfile" class="StudentProfile font"><div id="Chat" class="Chat">Chat</div></div>';
	Selected = Message_ID;
	InputBoxInit(Message_ID);
	document.getElementById("Chat").innerHTML = "";
	for(o=0; o<ChatData.data[Message_ID]["prompt"].length; o++){
		if(ChatData.data[Message_ID]["prompt"][o]["role"] == "assistant"){
			ChatData.data[Message_ID]["prompt"][o]["UR"] = true;
			ChatViewer(ChatData.data[Message_ID]["Name"], ChatData.data[Message_ID]["prompt"][o]["content"]);
		}
		else if(ChatData.data[Message_ID]["prompt"][o]["role"] == "user"){
			UserChatViewer(ChatData.data[Message_ID]["prompt"][o]["content"]);
		}
	}
	if(OnChat){
		console.log(OnChat);
		document.getElementById("StudentCount").innerHTML = "未讀訊息(" + UnReadCount() + ")";
		MessageEasyViewer();
	}
}
function initChat(StudentIndex){
	//document.getElementById("Chat").innerHTML = "";
	for(i=0; i<StudentIndex.length; i++){
		ChatData.data.push({ Name : StudentIndex[i]["Name"],  prompt : StudentIndex[i]["Prompt"]});
	}
}
