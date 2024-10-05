t.d(e, {
    y: function () {
        return i;
    }
});
var l = t(591759);
function i(n, e) {
    let t = n.getIconSource(e);
    if (null != t && 'number' != typeof t) {
        let n;
        if ((Array.isArray(t) ? t.length > 0 && (n = t[0].uri) : (n = t.uri), null != n)) {
            var i;
            return null !== (i = l.Z.toURLSafe(n)) && void 0 !== i ? i : void 0;
        }
    }
}
