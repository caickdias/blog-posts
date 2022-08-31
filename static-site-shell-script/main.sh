#! /bin/sh

echo What is your site name?
read SITE_NAME
echo What is the background color?
read BG_COLOR

CSS="body { 
	background-color: $BG_COLOR;
}
"

HTML="<!DOCTYPE html>
<html>
	<head>
		<title>${SITE_NAME}</title>
		<style>
			${CSS}
		</style>
	</head>

	<body>		
		<h1>$SITE_NAME</h1>		
	</body>
</html>"

echo "$HTML" > index.html