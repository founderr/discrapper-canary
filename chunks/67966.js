r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(882159);
function a(e, n) {
    var r = n.getRootNode && n.getRootNode();
    if (e.contains(n)) return !0;
    if (r && (0, i.Zq)(r)) {
        var a = n;
        do {
            if (a && e.isSameNode(a)) return !0;
            a = a.parentNode || a.host;
        } while (a);
    }
    return !1;
}
