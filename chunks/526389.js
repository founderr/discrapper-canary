var r = Function.prototype.toString;
function i(e) {
    if (null != e) {
        try {
            return r.call(e);
        } catch (e) {}
        try {
            return e + '';
        } catch (e) {}
    }
    return '';
}
n.Z = i;
