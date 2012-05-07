<?php 
$p=1;
if(isset($_GET["p"])) $p = intval($_GET["p"]);
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<title>Mobile Website</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" />
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link type="text/css" rel="stylesheet" rev="stylesheet" media="screen" href="http://www.jquery-css.com/_css/default.css" />
	<link type="text/css" rel="stylesheet" rev="stylesheet" media="screen" href="./css/custom.css" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="./js/custom.js"></script>
</head>
<body>
	<header>
		<div class="header">
			<a id="logo" href="index.php" title="index"></a>
			<div id="headerContent">Your website</div>
		</div>
	</header>	
	<div id="content">
		<nav>
			<div id="mainNav">
				<ul class="horizontalList tCenter">
					<?php 
					for($i=1;$i<5;$i++) {
						echo '<li class="padding5Right"><a id="menu-'.$i.'-link" ajax-target="#content" ajax-content="#content" class="button" '.($p==$i ? 'style="background:#221100;color:white !important"':"" ).' href="list.php?p='.$i.'" title="List '.$i.'">Menu '.$i.'</a></li>';
					}
					?>
				</ul>
			</div>
		</nav>	
		<article>
			<h1 class=" pushDown tLeft w1">List of articles</h1>
			<div class="article">
				<ul class="hoverList verticalList">
					<li>
					<a  ajax-target="article" ajax-content="article"  class="clearfix bkgDarker w1" title="Article 1" href="article.php">
						<span class="w13 left">
							<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
						</span>
						<span class="right w23">
							<span class="w1 h3">Link to Article 1</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, c
						</span>
					</a>
					</li>
					<li>
						<a  ajax-target="article" ajax-content="article"  class="clearfix bkgDarker w1" title="Article 2" href="article.php">
							<span class="w13 left">
								<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
							</span>
							<span class="right w23">
								<span class="w1 h3">Link to Article 2</span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, c
							</span>
						</a>
					</li>
					<li>
						<a  ajax-target="article" ajax-content="article"  class="clearfix bkgDarker w1" title="Article 3" href="article.php">
							<span class="w13 left">
								<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
							</span>
							<span class="right w23">
								<span class="w1 h3">Link to Article 3</span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, c
							</span>
						</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</body>
</html>
