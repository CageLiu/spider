$(document).ready(
	function(){
		if($.browser.msie){
			document.write("<div style='font-size:200px;color:#f00;line-height:3em;font-weight:bold;text-align:center'>用IE，要枪毙！</div>");
		}

	var $mOnff = $(".menu_onff");
	var $mainMenu = $(".main_menu");
	var $menuBox = $(".main_menu dl");
	var $menuTitle = $menuBox.children("dt");
	var $menuItem = $menuBox.children("dd");
	var $workspace = $(".workspace");
	var $logo = $(".logo");
	var $mainCont = $(".main_cont");
	var $panle = $(".panle");
	var $switchBtn = $(".switch_workspace span");
	var workspaceHeight = $workspace.height();
	var count = 0;
	var $m = $(".main_menu li");

	
	$menuBox.css("height",$mainMenu.height() - $logo.outerHeight() + "px");
	$mainCont.css("height",$workspace.height()-$panle.outerHeight() * 2 - 3 + "px");
	$(window).resize(
		function(){
			$menuBox.css("height",$mainMenu.height() - $logo.outerHeight() + "px");
			$mainCont.css("height",$workspace.height()-$panle.outerHeight() * 2 -3 + "px");
			$workspace.eq(0).css("margin-top",-count*$workspace.height()+ "px");
	});

	$menuTitle.click(function(){
		if($(this).hasClass("show")){
			$(this).removeClass("show");
			$(this).next("dd").slideUp("speed");
		}
		else{
			$menuTitle.removeClass("show");
			$menuItem.slideUp("speed");
			$(this).addClass("show");
			$(this).next("dd").slideDown("speed");
		}
	});

	$mOnff.toggle(
	function(){
		$mainMenu.stop().animate({"left":"-195px"},{duration:"fast",easing:"linear"});
		$workspace.stop().animate({"marginLeft":"5px"},{duration:"fast",easing:"linear"});
		$(this).attr("title","展开菜单");
	},
	function(){
		$mainMenu.stop().animate({"left":0},{duration:"fast",easing:"linear"});
		$workspace.stop().animate({"marginLeft":"200px"},{duration:"fast",easing:"linear"});
		$(this).attr("title","收起菜单");
	});

	$m.click(function(){
		$m.removeClass();
		$(this).addClass("current")
	})

	}
);

