r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(285363),
    a = r(874900),
    s = r(977489),
    o = r(636226),
    l = r(894417);
function u(e) {
    var n,
        r = (0, i.Z)(e),
        u = (0, o.Z)(e),
        c = null == (n = e.ownerDocument) ? void 0 : n.body,
        d = (0, l.Fp)(r.scrollWidth, r.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
        f = (0, l.Fp)(r.scrollHeight, r.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
        _ = -u.scrollLeft + (0, s.Z)(e),
        h = -u.scrollTop;
    return (
        'rtl' === (0, a.Z)(c || r).direction && (_ += (0, l.Fp)(r.clientWidth, c ? c.clientWidth : 0) - d),
        {
            width: d,
            height: f,
            x: _,
            y: h
        }
    );
}
