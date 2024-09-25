n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(978856),
    i = n(764303);
function a(e, t) {
    if (null == e) return {};
    var n,
        a,
        o = {},
        s = r(e);
    for (a = 0; a < s.length; a++) (n = s[a]), !(i(t).call(t, n) >= 0) && (o[n] = e[n]);
    return o;
}
