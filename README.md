## refresh plugin

The goal of refresh plugin is to simply refresh through an automatic ajax call any element of the page. 

### News

The website <a href="http://mobile.interflora.fr">Interflora mobile</a> using a previous version of jquery-navigate recieved the 2012 Google prize for mobile website in the distribution sector mainly for the speed of the website.

### Attributes

Here are all the optional attribute an element that will call the refresh() method can have :

```html
<div refresh-url="any-url" refresh-url="anything you want" refresh-insert-function="any jquery function or plain function" refresh-status="any-string" refresh-interval="any-number"></div>
```

* `refresh-url` : the url to get the refresh content from (by default : current url)
* `refresh-id` : if both remote and local refresh-id exists and are the same trigger the `cancelrefresh` event
* `refresh-insert-function` : the function that will insert the new content (by default $.fn.html)
* `refresh-status` : if different from current div `refresh-status` will trigger the `refreshstatuschanged` event
* `refresh-interval` : if set, there will be an automatic refresh called each `refresh-interval` millisecond.

### refresh function

All the parameters are optional.

```html
$("#my-id").refresh({
    refresh : true, 
    resetInterval : true, 
    url : null,
    content:targetSelector, 
    clickedSelector:null,
    callback:function(){}
});
```

* 1 - $("#my-id") trigger the event `startrefresh`
* 2 - if the parameter `refresh` is true : make the ajax call to the parameter `url` or the attribute `refresh-url` or the current url
* 3 - if fail the ajax call or element not accessible in specified url, $("#my-id") trigger the event `failrefresh`
* 4 - if the attribute `refresh-status` of the element is currently defined and has changed or disapeared trigger the event `refreshstatuschanged`
* 5 if the attribute `refresh-interval` is set and the parameter resetInterval is true and there is a current refresh intervel : stop the current interval
* if the attribute `refresh-interval` is set : set it.
* trigger the event `donerefresh`

### stopRefresh function

* clear the interval refresh of the element
* trigger the event `stoprefresh`

## Automatic ajax jquery navigation, mobile friendly (beta)

Navigate depends on refresh,thus we included it in the file. 
The goal of the jQuery plugin Navigate is to

*  Automatically transform regular links into ajax calls (using href, ajax-target, title and ajax-content attribute)
*  For mobile browsers, avoid showing address bar on link clicks, smoothing the user experience
*  Listen to the `startrefresh`, `donerefresh`, and `stoprefresh` events to make cool transitions between states
*  Manage atomatically the History throwing events logically (old state target throw `stoprefresh`, new state target throw `startrefresh` and then `donerefresh`).

### BASIC
simply include your 

```html
<script type="text/javascript" src="url/to/navigate.js" ></script>
```

after the include to jquery (1.7+) and the plugin will ajax-navigate automaticaly any link :

```
<a href="myUrl" ajax-content="any selector" ajax-target="any selector" title="my title">link</a>
```

* href : url to be used by the ajax call
* title : the future document title
* ajax-content : (optional) only the content of specified element in href's page will be inserted otherwise all body content
* ajax-target : (optional) the content will be inserted into the target element of the current page

### Configuration (optional)

just go to the last lines of the plugin, and modify the $.navigate.init() call as described there, you can change the 

* the default function that replace the old content from the new ajax-gotten content.
```
//how to create a custom function : 
(function($) {
	$.fn.insertPageHtml = function(myHtml) {
		//switch elements
		$('#my-content').html($("#my-content", myHtml).html());
	};
})(jQuery);	
```	
* selector for the links to have an ajax behaviour : 
```
by default ajax call will NOT be made if any of the following case is true
* target=="_blank"
* has the class "noAjax"
* href=="javascript://"
* href contains "http"
* rel attribute == "external"
```

### Scripts and ajax navigation  

* basically, you will insert all you js in the head of the page
* You can add anyway any script you want thay will be inserted
* However, if you want to have scripts using jquery inside your page do the following : 

```html
<script>
	var foo = function() {
		//stuff you want to do
	};
	
    //code you have to put for the foo function to be executed correctly
	if(document.readyState === "complete") foo();
	else $(document).ready(foo);
</script>
```

## CREDITS
Use of Modernizr and Balupton History.js (https://github.com/balupton/History.js)
