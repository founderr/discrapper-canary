r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(126387),
    a = r(632471),
    s = r(205208),
    o = r(740078);
function l(e) {
    var n,
        r = e.reference,
        l = e.element,
        u = e.placement,
        c = u ? (0, i.Z)(u) : null,
        d = u ? (0, a.Z)(u) : null,
        f = r.x + r.width / 2 - l.width / 2,
        _ = r.y + r.height / 2 - l.height / 2;
    switch (c) {
        case o.we:
            n = {
                x: f,
                y: r.y - l.height
            };
            break;
        case o.I:
            n = {
                x: f,
                y: r.y + r.height
            };
            break;
        case o.F2:
            n = {
                x: r.x + r.width,
                y: _
            };
            break;
        case o.t$:
            n = {
                x: r.x - l.width,
                y: _
            };
            break;
        default:
            n = {
                x: r.x,
                y: r.y
            };
    }
    var h = c ? (0, s.Z)(c) : null;
    if (null != h) {
        var p = 'y' === h ? 'height' : 'width';
        switch (d) {
            case o.BL:
                n[h] = n[h] - (r[p] / 2 - l[p] / 2);
                break;
            case o.ut:
                n[h] = n[h] + (r[p] / 2 - l[p] / 2);
        }
    }
    return n;
}
