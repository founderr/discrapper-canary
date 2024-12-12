r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(175922),
    a = r(759202),
    s = r(316138),
    o = r(882159),
    l = r(977489),
    u = r(285363),
    c = r(538018),
    d = r(894417);
function f(e) {
    var n = e.getBoundingClientRect(),
        r = (0, d.NM)(n.width) / e.offsetWidth || 1,
        i = (0, d.NM)(n.height) / e.offsetHeight || 1;
    return 1 !== r || 1 !== i;
}
function _(e, n, r) {
    void 0 === r && (r = !1);
    var d = (0, o.Re)(n),
        _ = (0, o.Re)(n) && f(n),
        h = (0, u.Z)(n),
        p = (0, i.Z)(e, _, r),
        m = {
            scrollLeft: 0,
            scrollTop: 0
        },
        g = {
            x: 0,
            y: 0
        };
    return (
        (d || (!d && !r)) && (('body' !== (0, s.Z)(n) || (0, c.Z)(h)) && (m = (0, a.Z)(n)), (0, o.Re)(n) ? ((g = (0, i.Z)(n, !0)), (g.x += n.clientLeft), (g.y += n.clientTop)) : h && (g.x = (0, l.Z)(h))),
        {
            x: p.left + m.scrollLeft - g.x,
            y: p.top + m.scrollTop - g.y,
            width: p.width,
            height: p.height
        }
    );
}
