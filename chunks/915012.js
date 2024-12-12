var n = /\s/;
function r(e) {
    for (var r = e.length; r-- && n.test(e.charAt(r)); );
    return r;
}
e.exports = r;
