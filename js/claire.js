let names = [
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
var index = Math.floor(Math.random()*1000 % names.length);
var name = names[index];
document.getElementById("result").innerHTML = name;
time = window.setTimeout(chouqian,2);
}
function end(){
window.clearTimeout(time);
document.getElementById("btnBegin").disabled = false;
swal("恭喜!!", $('#name').val().toUpperCase()+'決定要吃 : '+$('#result').text(), "success");
document.getElementById("result").innerHTML = '';
document.getElementById("btnEnd").disabled = true;
}
function start(){
let name = $('#name').val();
let password = $('#password').val();
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
      let result = 'F';
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
function findMovie(){
  swal({
  text: '輸入您想查詢的電影 例如:Toys story".',
  content: "input",
  button: {
    text: "Search!",
    closeModal: false,
  },
})
.then(name => {
  if (!name) throw null;
 
  return fetch('https://itunes.apple.com/search?term=${name}&entity=movie');
})
.then(results => {
  return results.json();
})
.then(json => {
  const movie = json.results[0];
 
  if (!movie) {
    return swal("很抱歉,沒有找到符合的項目!");
  }
 
  const name = movie.trackName;
  const imageURL = movie.artworkUrl100;
 
  swal({
    title: "Top result:",
    text: name,
    icon: imageURL,
  });
})
.catch(err => {
  if (err) {
    swal("Oh noes!", "The AJAX request failed!", "error");
  } else {
    swal.stopLoading();
    swal.close();
  }
});
}

function checkName(){
    let name = $('#name').val();
    if('troy' == name.toLowerCase()){
        swal("阿唷~歡迎主人登入");
    }
}
