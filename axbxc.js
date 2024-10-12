$(document).ready(function(){
if(!$('.License .widget-content span').hasClass('licenses')){
 $('body').append('<span class="licenses"></span>');
}

$('#data-count').each(function() {
	var ListBlogLinks = window.atob("aHR0cHM6Ly90aGVtZWxpY2Vuc2VzLmJsb2dzcG90LmNvbQ==");
	var ListLabel = $(this).attr("data-label");
    $.ajax({
    url: ListBlogLinks + "/feeds/posts/default/-/" + ListLabel + "?alt=json-in-script",
    type: "get",
    dataType: "jsonp",
    success: function (data) {
        var totalposts = data.feed.openSearch$totalResults.$t;
        $('#data-count').text(totalposts);
        }
    });
});


$('.licenses').each(function() {
	var ListBlogLinks =  window.atob("aHR0cHM6Ly90aGVtZWxpY2Vuc2VzLmJsb2dzcG90LmNvbQ==");
	var ListLabel = $(this).attr("data-label");
	var Domain = $(this).attr("data-url");
	var GetStatus = "Activated";
    var ListId = "License";
	var CountLabelPost = $('#data-count').text();
	var zero = 0;

    if ($(this).attr("data-licenses") == "") {
	var LicensesCode = ListLabel;
    }else{
	var LicensesCode = $(this).attr("data-licenses");
    }
		if (CountLabelPost == zero) {
		var GetLabel = "";
		}else{
		var GetLabel = "/-/" + ListLabel + "";
		}
$.ajax({
url: ListBlogLinks + '/feeds/posts/default' + GetLabel + '?alt=json-in-script',
type: "get",
dataType: "jsonp",

success: function (e) {
            var u = "";
            var h = '<ul id="licenses" style="display:none!important">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
				var ListContent = e.feed.entry[i].content.$t;
                
				for (var r = 0; r < e.feed.entry[i].category.length; r++) var Status = e.feed.entry[i].category[r].term;
              
                h += '<li>'+ g +' '+ ListContent +' '+ Status +'</li>';
            }
            h += '</ul>';

            $(".licenses").each(function() {
                var text = "License";
                if (text == ListId) {
                    $(this).parent().html(h);
                }
			})

function checkforText(requiredText) { 
	let found = false; 

	selector 
	= `#licenses :contains('${requiredText}')` 
	selectedList = $(selector); 

	if (selectedList.length) { 
		found = true; 
		} 
		return found; 
		} 

function Redirect() {
	var seconds = 10;
	document.write('<div style="display:grid;background:#00000070;color:#fff;margin:20%;text-align:center;border:1px solid red;justify-items:center;align-items:center"><div style="width:100%;background:#000;padding:10px 0px">Theme Is Not Activated...!</div><br/><b>We Are Redirecting After...</b><br/><div id="CountDown" style="display:flex;background:#ff0000;color:#fff;width:30px;height:30px;align-items:center;justify-content:center;border-radius:100%;border:8px double#ffffff"></div><br/><b>Seconds.</b><br/></div>');
	$("#CountDown").html(seconds);
	setInterval(function () {
		seconds--;
		$("#CountDown").html(seconds);
		if (seconds == 0) {
		window.location = window.atob("aHR0cHM6Ly90aGVtZWxpY2Vuc2VzLmJsb2dzcG90LmNvbQ==");
		}
        }, 1000);
};

function runChecks() { 
	ans1 = checkforText(Domain);
	ans2 = checkforText(LicensesCode);
	ans3 = checkforText(GetStatus); 
    
    if(ans1===ans2===ans3){
		$('#licenses').parent().html('');
    }
    else {
    	Redirect($(this));
    }
}
runChecks();
}
});
});

});
