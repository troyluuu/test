var stores = [
"不2糖",
"喬記",
"越南",
"醉雞(家鄉牛肉麵)",
"刀削麵",
"蚵仔之家",
"白菜小姐",
"麻婆公子",
"711"
];
var time;
function begin(){
document.getElementById("btnBegin").disabled = true;
chouqian();
document.getElementById("btnEnd").disabled = false;
}
function chouqian(){
var index = Math.floor(Math.random()*1000 % stores.length);
var name = stores[index];
document.getElementById("result").innerHTML = name;
time = window.setTimeout(chouqian,2);
}
function end(){
window.clearTimeout(time);
document.getElementById("btnBegin").disabled = false;
var result = $('#result').text();
swal("恭喜!!", $('#name').val().toUpperCase()+'決定要吃 : '+result, "success");
document.getElementById("result").innerHTML = '';
document.getElementById("btnEnd").disabled = true;
}
function pickOne(){
var name = $('#name').val();
var password = $('#password').val();
name = name.trim();
if(name==''){
swal("錯誤!", "請輸入姓名!!", "warning");
}if(password==''){
swal("錯誤!", "請輸入密碼!!", "warning");
}if(name != '' && password != ''){
    fetch('https://troyluuu.github.io/test/data/key.json').then(function(response) {
    return response.text()
  }).then(function(text) {
 var json = JSON.parse(text);
      var result = 'F';
      for(var key in json){
      if(json[key].a == name.toLowerCase() && json[key].p == password.toLowerCase()){
       result = 'S';
       $('#nameDiv').hide();
       if(name == 'david'){
            name = '霸氣大維登場 全場歡聲雷動 ';
       }
       $('#helloArea').text('歡迎光臨!! ' + name.toUpperCase() + '您好!');
       $('#lunchDiv').show();
      }
}
     if(result == 'F'){
       swal("錯誤!", "帳號或密碼錯誤,請重新輸入,謝謝!!", "warning");
       $('#name').val('');
       $('#password').val('');
      }
  }).catch(function(err) {
      // Error :(
       swal("錯誤!", name + password + "系統發生錯誤,請再試一次,謝謝!!", "warning");
  })
}else{
   swal("錯誤!", "帳號或密碼空白,請重新輸入,謝謝!!", "warning");
}
}

function checkName(){
    let name = $('#name').val();
    let isShowWelcomeWord = $('#welcomeFlag').val();
    if('Y' != isShowWelcomeWord){
        if('david' == name.toLowerCase()){
            swal("阿唷~歡迎霸氣大維加入中午吃什麼團隊!! Enjoy Your Life ~~ Life is fantastic ~~");
            $('#welcomeFlag').val('Y');
            document.getElementById("password").focus();
        }
    }
    
}
