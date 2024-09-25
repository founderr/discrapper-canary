n.d(t, {
    y: function () {
        return i;
    }
});
var r = n(591759);
function i(e, t) {
    let n = e.getIconSource(t);
    if (null != n && 'number' != typeof n) {
        let e;
        if ((Array.isArray(n) ? n.length > 0 && (e = n[0].uri) : (e = n.uri), null != e)) {
            var i;
            return null !== (i = r.Z.toURLSafe(e)) && void 0 !== i ? i : void 0;
        }
    }
}
