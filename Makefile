# target: init
.PHONY: init
init:
	npm install
	bower install

# target: gulp - Package ui
.PHONY: gulp
update:
	gulp

# target: clean - Clean all libraries
.PHONY: clean
clean:
	rm -rf node_modules/*
	rm -rf bower_components/*
