function slugger(...args) 
{
    var result = args.map(item=> {
        return item.replace(/\s/g, '-')
    });

    return result;
}
module.exports = {slugger};
// slugger("I am a slugger function");