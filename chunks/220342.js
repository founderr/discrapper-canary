function i(e, n) {
    if (a('noDeprecation')) return e;
    var r = !1;
    return function i() {
        if (!r) {
            if (a('throwDeprecation')) throw Error(n);
            a('traceDeprecation') ? console.trace(n) : console.warn(n);
            r = !0;
        }
        return e.apply(this, arguments);
    };
}
function a(e) {
    try {
        if (!r.g.localStorage) return !1;
    } catch (e) {
        return !1;
    }
    var n = r.g.localStorage[e];
    return null != n && 'true' === String(n).toLowerCase();
}
e.exports = i;
