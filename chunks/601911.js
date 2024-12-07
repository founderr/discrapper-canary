e.d(t, {
    y: function () {
        return l;
    }
});
var i = e(591759);
function l(n, t) {
    let e = n.getIconSource(t);
    if (null != e && 'number' != typeof e) {
        let n;
        if ((Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : (n = e.uri), null != n)) {
            var l;
            return null !== (l = i.Z.toURLSafe(n)) && void 0 !== l ? l : void 0;
        }
    }
}
