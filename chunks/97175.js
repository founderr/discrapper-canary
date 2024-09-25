n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(799429),
    i = n(764303),
    a = n(404347);
function o(e, t) {
    if (null == e) return {};
    var n,
        o,
        s = (0, a.Z)(e, t);
    if (r) {
        var l = r(e);
        for (o = 0; o < l.length; o++) {
            if (((n = l[o]), !(i(t).call(t, n) >= 0))) Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        }
    }
    return s;
}
