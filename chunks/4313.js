n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(175922),
    i = n(759202),
    a = n(316138),
    o = n(882159),
    s = n(977489),
    l = n(285363),
    u = n(538018),
    c = n(894417);
function d(e) {
    var t = e.getBoundingClientRect(),
        n = (0, c.NM)(t.width) / e.offsetWidth || 1,
        r = (0, c.NM)(t.height) / e.offsetHeight || 1;
    return 1 !== n || 1 !== r;
}
function _(e, t, n) {
    void 0 === n && (n = !1);
    var c = (0, o.Re)(t),
        _ = (0, o.Re)(t) && d(t),
        E = (0, l.Z)(t),
        f = (0, r.Z)(e, _, n),
        h = {
            scrollLeft: 0,
            scrollTop: 0
        },
        p = {
            x: 0,
            y: 0
        };
    return (
        (c || (!c && !n)) && (('body' !== (0, a.Z)(t) || (0, u.Z)(E)) && (h = (0, i.Z)(t)), (0, o.Re)(t) ? ((p = (0, r.Z)(t, !0)), (p.x += t.clientLeft), (p.y += t.clientTop)) : E && (p.x = (0, s.Z)(E))),
        {
            x: f.left + h.scrollLeft - p.x,
            y: f.top + h.scrollTop - p.y,
            width: f.width,
            height: f.height
        }
    );
}
