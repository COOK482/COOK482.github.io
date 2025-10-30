
// Highlight current nav item
var hasCurrent = false;
var isindexpage = true;
$('#main-nav > li').each(function () {
	if (isindexpage) {
		isindexpage = false;
		return true;
	}
	var url = window.location.href;
	if (url.toUpperCase().indexOf($(this).attr("linktext").trim().toUpperCase()) != -1) {
		$(this).addClass('current-menu-item current_page_item');
		hasCurrent = true;
	} else {
		$(this).removeClass('current-menu-item current_page_item');
	}
});

if (!hasCurrent) {
	$('#main-nav > li:first').addClass('current-menu-item current_page_item');
}

// enable dark reader
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js';
script.onload = function () {
	DarkReader.setFetchMethod(window.fetch);
	DarkReader.auto({
		brightness: 110,
		contrast: 95
	});
};
document.head.appendChild(script);



// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194 + 25;

	function scrollcatelogHandler (e) {
		var event = e || window.event,
			target = event.target || event.srcElement;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > tocPosition) {
			toc.classList.add("toc-fixed");
		} else {
			toc.classList.remove("toc-fixed");
		}
	}
}


$('#main-navigation').on('click', function () {
	if ($('#main-navigation').hasClass('main-navigation-open')) {
		$('#main-navigation').removeClass('main-navigation-open');
	} else {
		$('#main-navigation').addClass('main-navigation-open');
	}
});

$('#content').on('click', function () {
	if ($('#main-navigation').hasClass('main-navigation-open')) {
		$('#main-navigation').removeClass('main-navigation-open');
	}
});