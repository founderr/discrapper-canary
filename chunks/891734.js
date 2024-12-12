r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(632471),
    a = r(740078),
    s = r(510104),
    o = r(126387);
function l(e, n) {
    void 0 === n && (n = {});
    var r = n,
        l = r.placement,
        u = r.boundary,
        c = r.rootBoundary,
        d = r.padding,
        f = r.flipVariations,
        _ = r.allowedAutoPlacements,
        h = void 0 === _ ? a.Ct : _,
        p = (0, i.Z)(l),
        m = p
            ? f
                ? a.bw
                : a.bw.filter(function (e) {
                      return (0, i.Z)(e) === p;
                  })
            : a.mv,
        g = m.filter(function (e) {
            return h.indexOf(e) >= 0;
        });
    0 === g.length && (g = m);
    var E = g.reduce(function (n, r) {
        return (
            (n[r] = (0, s.Z)(e, {
                placement: r,
                boundary: u,
                rootBoundary: c,
                padding: d
            })[(0, o.Z)(r)]),
            n
        );
    }, {});
    return Object.keys(E).sort(function (e, n) {
        return E[e] - E[n];
    });
}
