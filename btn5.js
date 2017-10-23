function btn05(){

  //var myDay   = new Date();
  //var youbi   = new Array("日","月","火","水","木","金","土");
  var mytime  = new Date();

  //y = myDay.getFullYear();
  //m = myDay.getMonth()+1;
  //d = myDay.getDate();
  //w = youbi[myDay.getDay()];

  var hour   = mytime.getHours();
  var minute = mytime.getMinutes();

	alert("現在の時刻は "+hour+":"+minute+" です。");
}
