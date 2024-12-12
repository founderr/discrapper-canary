var n = Object.prototype.hasOwnProperty;
function r(e) {
    var r = e.length,
        i = new e.constructor(r);
    return r && 'string' == typeof e[0] && n.call(e, 'index') && ((i.index = e.index), (i.input = e.input)), i;
}
e.exports = r;
