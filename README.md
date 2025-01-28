# AI-Momotalk
基於 ollama 的 momotalk AI 聊天
Ollama based momotalk AI chat

# 初衷(Original Intention)
**原本我是拿來當作我的自我介紹網站然後把自己的人設寫成AI學生放上去的**<br>
[參考連結](https://www.minabep.uk/momotalk/?Stu=南部P#)

# 如何架設(How to build)
- 安裝http/https伺服器
  - install http/https server:
  ```
  Windows:Nginx, apache, xampp
  mac:我又沒錢買(I'm poor)
  linux:nginx, apache
  ```
- 將ollama安裝至電腦上(install ollama):
  - [ollama](https://github.com/ollama/ollama)
- 複製此儲存庫至伺服器目錄下(Copy to server directory)
  - [AI-Momotalk](https://github.com/LilyRasPi0502/AI-Momotalk)
  - or shell `git clone https://github.com/LilyRasPi0502/AI-Momotalk`
- 運行在http/https下即可從[localhost](http://127.0.0.1)存取
  - Run on http/https and access from [localhost](http://127.0.0.1)

# 如何新增學生(How to add student)
- 在`momotalk/Avatar`路徑放入學生的照片(僅支援png檔案)
  - **add student avatar to momotalk/Avatar(png file only)**
- 在`momotalk/json/index.json`檔案中新增學生的資料(StudentData中以=-=作為項目及內容之分隔、以;\n作為各項之分隔)
  - **add student setting to `momotalk/json/index.json`file(In StudentData, =-= is used to separate items and content, and ;\n is used to separate items)**
 
# 給您們看看我可愛的學生(老婆)
**Show you my lovely students (wifes)**

***PC:***<br>
<img width=50% src=https://github.com/user-attachments/assets/d568a74e-2ffe-42c6-8a7d-0cfc2f374528><img width=50% src=https://github.com/user-attachments/assets/5c72adda-78c5-41d3-97c0-dc4f6559256b>

***Mobile:***<br>
<img width=50% src=https://github.com/user-attachments/assets/cbd73d80-744e-4529-971f-4ad9ab94260e><img width=50% src=https://github.com/user-attachments/assets/7cb2a376-6521-4629-93cd-43f87235fc34>

# 更新日誌
- [20241201] 針對ChatUI.js、Prompt.js、m/ChatUI.js等文件進行美工更新(upgrade UI ChatUI.js、Prompt.js、m/ChatUI.js file)
- [20241228] 針對Style.css、m/Style.css進行美工更新(upgrade UI Style.css、m/Style.css)
- [20241230] 新增一個分享學生個人檔案連結的按鈕(Added a button to share a link to a student's profile)
- [20241231] 修改UI(upgrade UI)
- [20250110] 新增我要色色設定(Add sex switch)
- [20250128] 新增版本號控制Cookie強制更新功能(Add update cookie in Version update)
- [20250128] 今天除夕偷偷更新各位新年快樂(Happy Lunar New Year)

