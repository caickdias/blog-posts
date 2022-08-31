#! /bin/sh

for name in $*
do
	LIST="${LIST} $name"
done

HTML="<!DOCTYPE html>
<html>
	<body>		
		<h1>$LIST</h1>		
	</body>
</html>"

echo "$HTML" > index.html