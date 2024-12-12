var n = /\w*$/;
function r(e) {
    var r = new e.constructor(e.source, n.exec(e));
    return (r.lastIndex = e.lastIndex), r;
}
e.exports = r;
