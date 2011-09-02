window.onload=function(){
	var Otable=document.getElementById("spider_table");
	var Oalist=Otable.getElementsByTagName("a");
	for (var i=0;i<Oalist.length;i++){
		Oalist[i].onclick=function(){
			if(this.className=="start"){
				this.innerHTML="停止";
				this.className="stop";
			}else if(this.className=="stop"){
				this.innerHTML="启动";
				this.className="start";
			}
		}
	}
}