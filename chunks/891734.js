n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(632471),
    i = n(740078),
    a = n(510104),
    s = n(126387);
function o(e, t) {
    void 0 === t && (t = {});
    var n = t,
        o = n.placement,
        l = n.boundary,
        u = n.rootBoundary,
        c = n.padding,
        d = n.flipVariations,
        f = n.allowedAutoPlacements,
        _ = void 0 === f ? i.Ct : f,
        h = (0, r.Z)(o),
        p = h
            ? d
                ? i.bw
                : i.bw.filter(function (e) {
                      return (0, r.Z)(e) === h;
                  })
            : i.mv,
        m = p.filter(function (e) {
            return _.indexOf(e) >= 0;
        });
    0 === m.length && (m = p);
    var g = m.reduce(function (t, n) {
        return (
            (t[n] = (0, a.Z)(e, {
                placement: n,
                boundary: l,
                rootBoundary: u,
                padding: c
            })[(0, s.Z)(n)]),
            t
        );
    }, {});
    return Object.keys(g).sort(function (e, t) {
        return g[e] - g[t];
    });
}
