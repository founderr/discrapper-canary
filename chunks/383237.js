r.d(t, {
    Z: function () {
        return n;
    }
});
var a = r(781212);
function n(e, t) {
    if (null == e) return {};
    var r,
        n,
        o = (0, a.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) {
            if (((r = s[n]), !(t.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        }
    }
    return o;
}
