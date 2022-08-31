#! /bin/sh

echo What is your site name?
read SITE_NAME
echo Site name is $SITE_NAME

HTML="<!DOCTYPE html>
<html>
	<head>
		<title>${SITE_NAME}</title>
	</head>

	<body>		
		<h1>$SITE_NAME</h1>		
	</body>
</html>"

echo "$HTML" > index.html