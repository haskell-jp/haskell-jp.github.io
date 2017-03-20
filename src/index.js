"use strict";

require('./styles/index.scss');
var Elm = require('./elm/Main');
Elm.Main.embed(document.getElementById('js-background'));
