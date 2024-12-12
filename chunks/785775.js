var n = Function.prototype.toString;
function r(e) {
    if (null != e) {
        try {
            return n.call(e);
        } catch (e) {}
        try {
            return e + '';
        } catch (e) {}
    }
    return '';
}
e.exports = r;
