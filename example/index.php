<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
						echo '<li class="padding5Right"><a id="menu-'.$i.'-link" ajax-target="#content" ajax-content="#content" class="button" href="list.php?p='.$i.'" title="List '.$i.'">Menu '.$i.'</a></li>';
					}
					?>
				</ul>
			</div>
		</nav>	
		<article>
			<h1 class=" pushDown tLeft w1">HOME of my website</h1>
			<div class="article ">
				<div class="clearfix pushUp tCenter">
					<div class="left w12">
						<a  ajax-target="#content" ajax-content="#content" class="bkgDarker w1" title="Article 1" href="article.php">
							<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
							<span class="w1 h3">Link to Article 1</span>
						</a>
					</div>
					<div class="left w12">
						<a  ajax-target="#content" ajax-content="#content"  class="bkgDarker w1" title="Article 2" href="article.php">
							<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
							<span class="w1 h3">Link to Article 2</span>
						</a>
					</div>
				</div>
				<div class="clearfix pushUp tCenter">
					<div class="left w12">
						<a  ajax-target="#content" ajax-content="#content"  class="bkgDarker w1" title="Article 3" href="article.php">
							<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
							<span class="w1 h3">Link to Article 3</span>
						</a>
					</div>
					<div class="left w12">
						<a  ajax-target="#content" ajax-content="#content" class="bkgDarker w1" title="Article 4" href="article.php">
							<img class="pushUp" src="http://www.jquery-css.com/i/free-jquery-css-web-layout-mobile-article-page.jpg" alt="free jquery css web layout mobile article">
							<span class="w1 h3">Link to Article 4</span>
						</a>
					</div>
				</div>
			</div>
		</article>
	</div>
</body>
</html>
