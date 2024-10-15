t.d(n, {
    y: function () {
        return i;
    }
});
var l = t(591759);
function i(e, n) {
    let t = e.getIconSource(n);
    if (null != t && 'number' != typeof t) {
        let e;
        if ((Array.isArray(t) ? t.length > 0 && (e = t[0].uri) : (e = t.uri), null != e)) {
            var i;
            return null !== (i = l.Z.toURLSafe(e)) && void 0 !== i ? i : void 0;
        }
    }
}
