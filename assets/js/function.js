$(function(){
	$("ul.nav.navbar-nav li").click(function(){
		var target =$(this).data("target");

		if($(document).width() > 760 && $(document).width() <  970){
			offset = 110
		}
		else{
			offset = 80
		}

		$('html, body').stop().animate({
			scrollTop: $(target).position().top - offset
		}, 300, 'swing');

		$("#standigm-nav").collapse('hide');
	})

	$(window).scroll(onScroll);
	$(window).resize(updateGrid);
	updateGrid();


	$(".alert .close").on("click", function(e){
		$(this).parent().slideUp();
	});

	$("#noti").slideDown();
})

function updateGrid(){
	if($(document).width() < 760){
		$('#technology .row').removeClass('row-eq-height');
	}
	else{
		$('#technology .row').addClass('row-eq-height');
	}
}

// 스크롤의 현재 위치를 찾아 메뉴에 표시하는 함수
// 아래에서 jsFiddle을 참조함
// http://jsfiddle.net/mekwall/up4nu/
function onScroll(e){
	// Cache selectors
	var topMenu = $("#top-menu");
	var topMenuHeight = topMenu.outerHeight()+15;
	// All list items
	var menuItems = topMenu.find("a");
	// Anchors corresponding to menu items
	var scrollItems = menuItems.map(function(){
	      var item = $($(this).parent().data("target"));
	      if (item.length) { return item; }
	    });
	var offset = $(document).width() > 760 && $(document).width() <  970 ? 110 : 80;

	// Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight+offset;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().parent().filter("[data-target='#"+id+"']").addClass("active");
}
