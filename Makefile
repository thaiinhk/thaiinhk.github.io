# target: help - Display callable targets
help:
	@egrep "^# target:" [Mm]akefile

# target: update - Update Github pages
update:
	git checkout gh-pages
	git merge master
	git subtree push --prefix dist origin gh-pages
	git checkout master
