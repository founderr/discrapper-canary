r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(49691),
    a = r(285363),
    s = r(977489),
    o = r(436857);
function l(e, n) {
    var r = (0, i.Z)(e),
        l = (0, a.Z)(e),
        u = r.visualViewport,
        c = l.clientWidth,
        d = l.clientHeight,
        f = 0,
        _ = 0;
    if (u) {
        (c = u.width), (d = u.height);
        var h = (0, o.Z)();
        (h || (!h && 'fixed' === n)) && ((f = u.offsetLeft), (_ = u.offsetTop));
    }
    return {
        width: c,
        height: d,
        x: f + (0, s.Z)(e),
        y: _
    };
}
