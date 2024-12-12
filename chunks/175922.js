r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(882159),
    a = r(894417),
    s = r(49691),
    o = r(436857);
function l(e, n, r) {
    void 0 === n && (n = !1), void 0 === r && (r = !1);
    var l = e.getBoundingClientRect(),
        u = 1,
        c = 1;
    n && (0, i.Re)(e) && ((u = (e.offsetWidth > 0 && (0, a.NM)(l.width) / e.offsetWidth) || 1), (c = (e.offsetHeight > 0 && (0, a.NM)(l.height) / e.offsetHeight) || 1));
    var d = ((0, i.kK)(e) ? (0, s.Z)(e) : window).visualViewport,
        f = !(0, o.Z)() && r,
        _ = (l.left + (f && d ? d.offsetLeft : 0)) / u,
        h = (l.top + (f && d ? d.offsetTop : 0)) / c,
        p = l.width / u,
        m = l.height / c;
    return {
        width: p,
        height: m,
        top: h,
        right: _ + p,
        bottom: h + m,
        left: _,
        x: _,
        y: h
    };
}
