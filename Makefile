JSCOMPILE := java -jar ~/Applications/bin/compiler.jar
LESSC     := lessc -yui-compress
JSLINT    := jslint -no-es5 --sloppy --plusplus --color
CSSLINT   := csslint

vpath %.less less
vpath %.css css
vpath %.js js

%.css: %.less
	$(LESSC) $< > css/$@

style.css: style.less mix-in.less
reset.css: reset.less

%js:
	$(JSCOMPILE) --js $? --js_output_file js/$@

# ga.js: src/ga.js

.PHONY: all test

all: js css
js: jquery.cookie.min.js jquery/easing.1.3
	# ga.js jquery.tmpl.js
css: style.css reset.css
test: 
	JSLINT js/src/*.js
	$(CSSLINT) css/*.css