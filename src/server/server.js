/**
 * babel src/server/server.js --out-file dist/server/server.js --presets es2015
 * babel --watch ./src/server --out-dir ./dist/server --presets es2015
 */

// let foo = () => console.log('Hello Node!');
// foo();

import countries from './api/countries'
import listen from './server.listen'

let express = require('express');
let app = express();

// countries route
countries(app);

// run server
listen(app);