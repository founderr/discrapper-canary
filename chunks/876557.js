var n = Object.prototype;
function r(e) {
    var r = e && e.constructor;
    return e === (('function' == typeof r && r.prototype) || n);
}
e.exports = r;
