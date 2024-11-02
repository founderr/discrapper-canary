n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(175922),
    i = n(759202),
    a = n(316138),
    s = n(882159),
    o = n(977489),
    l = n(285363),
    u = n(538018),
    c = n(894417);
function d(e, t, n) {
    void 0 === n && (n = !1);
    var d,
        f,
        _,
        h,
        p = (0, s.Re)(t);
    var m = (0, s.Re)(t) && ((f = (d = t).getBoundingClientRect()), (_ = (0, c.NM)(f.width) / d.offsetWidth || 1), (h = (0, c.NM)(f.height) / d.offsetHeight || 1), 1 !== _ || 1 !== h),
        g = (0, l.Z)(t),
        E = (0, r.Z)(e, m, n),
        v = {
            scrollLeft: 0,
            scrollTop: 0
        },
        I = {
            x: 0,
            y: 0
        };
    return (
        (p || (!p && !n)) && (('body' !== (0, a.Z)(t) || (0, u.Z)(g)) && (v = (0, i.Z)(t)), (0, s.Re)(t) ? ((I = (0, r.Z)(t, !0)), (I.x += t.clientLeft), (I.y += t.clientTop)) : g && (I.x = (0, o.Z)(g))),
        {
            x: E.left + v.scrollLeft - I.x,
            y: E.top + v.scrollTop - I.y,
            width: E.width,
            height: E.height
        }
    );
}
