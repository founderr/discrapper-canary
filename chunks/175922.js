n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(882159),
    i = n(894417),
    a = n(49691),
    s = n(436857);
function o(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var o = e.getBoundingClientRect(),
        l = 1,
        u = 1;
    t && (0, r.Re)(e) && ((l = (e.offsetWidth > 0 && (0, i.NM)(o.width) / e.offsetWidth) || 1), (u = (e.offsetHeight > 0 && (0, i.NM)(o.height) / e.offsetHeight) || 1));
    var c = ((0, r.kK)(e) ? (0, a.Z)(e) : window).visualViewport,
        d = !(0, s.Z)() && n,
        f = (o.left + (d && c ? c.offsetLeft : 0)) / l,
        _ = (o.top + (d && c ? c.offsetTop : 0)) / u,
        h = o.width / l,
        p = o.height / u;
    return {
        width: h,
        height: p,
        top: _,
        right: f + h,
        bottom: _ + p,
        left: f,
        x: f,
        y: _
    };
}
