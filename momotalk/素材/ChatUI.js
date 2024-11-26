
function ChatViewer(Name, Content){
	Chat = document.getElementById("Chat");
	Str = Content.split("\n");
	Content = "";
	for(i=0; i<Str.length; i++){
		Content += '<div id="MessageContent" class="MessageContent">' + Str[i] + '</div><br>';
	}
	Chat.innerHTML += '<div id="MessageBox" class="MessageBox">' + '<div class="Avatar"><image id="Avatar" src="Avatar/' + Name + '.png" height="70px" width="70px" style="border-radius: 50%;"></div>' + '<div><div id="Name" class="Name font">' + Name + '</div><div class="MessageAllow"></div>' + Content + '</div></div>';
	ChatEnd();
}

function UserChatViewer(Content){
	Chat = document.getElementById("Chat");
	Str = Content.split("\n");
	Content = "";
	for(i=0; i<Str.length; i++){
		Content += '<div style="display:flex;justify-content:flex-end;"><div id="MessageContentUser" class="MessageContentUser">' + Str[i] + '</div></div>';
	}
	Chat.innerHTML += '<div id="MessageBoxUser" class="MessageBoxUser"><div>' + Content + '</div><div class="MessageAllowUser"></div></div>';
	ChatEnd();
}

function Typing(Name){
	Content = '<div class="TypingDot0"></div><div class="TypingDot1"></div><div class="TypingDot2"></div>';
	Chat = document.getElementById("Chat");
	Chat.innerHTML += '<div id="MessageBox" class="MessageBox"><div class="Avatar"><image id="Avatar" src="Avatar/' + Name + '.png" height="70px" width="70px" style="border-radius: 50%;"></div><div><div id="Name" class="Name font">' + Name + '</div><div class="MessageAllow"></div><div style="display:flex;justify-content:flex-end;"><div class="MessageTyping">' + Content + '</div></div></div></div>';
	ChatEnd();
}

function ChatEnd(){
	Chat = document.getElementById("Chat");
	Chat.scrollTop = Chat.scrollHeight;
}

function InputBoxInit(Message_ID){
	document.getElementById("StudentProfile").innerHTML = '<div id="Chat" class="Chat">Chat</div>';
	document.getElementById("StudentProfile").innerHTML += '<div class="MessageInputBox"><textarea id="MessageInputText" class="MessageInputText"></textarea><div class="SubmitBox"><div class="MessageInputSubmit" onclick="SubmitMessage('+Message_ID+');"></div></div></div>';
}

function ChatTest(){
	document.getElementById("Chat").innerHTML = "";
	ChatViewer("南部P", "老師早安，今天又是美好的一天呢！\n老師今天要做什麼呢？");
	UserChatViewer("早安阿！南部P，你的專案被我Delete掉了～");
	ChatViewer("南部P", "老師真過份！\n今天不跟老師好了");
	UserChatViewer("我又沒差");
	UserChatViewer("憋\n在\n這\n發\n顛");
	ChatViewer("南部P", "哼！\n老師你去死吧！");
	Typing("南部P");
}

window.onload = ChatTest;