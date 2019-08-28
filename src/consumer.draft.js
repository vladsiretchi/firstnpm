const log = require("@ajar/marker");
const {slugger} = require("./index")

function main() {
    var result = slugger("Test the slugger function");
    log.blue(result);
}

main();

