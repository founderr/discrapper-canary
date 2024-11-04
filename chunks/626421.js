n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(399606),
    o = n(243778),
    c = n(914010),
    d = n(566840),
    u = n(921944),
    h = n(464506);
let m = r.memo(function (e) {
    var t, n, a;
    let { state: s, markAsDismissed: o } = e,
        { name: c, guildId: d, boundingRect: u } = s,
        m = r.useMemo(
            () =>
                (function (e, t, n) {
                    return null;
                })(c, 0, 0),
            [c, d, o]
        );
    if (null == m) return null;
    return (0, i.jsx)('div', {
        className: l()(h.upsell, !(null != (t = u) && !(t.y < 0)) && h.hidden),
        style:
            ((n = c),
            null == (a = u)
                ? {}
                : {
                      top: a.top,
                      left: a.right - a.x
                  }),
        children: m
    });
});
function p() {
    let e = (0, s.e7)([c.Z], () => c.Z.getGuildId()),
        t = (0, d.Eg)(e),
        [n, r] = (0, o.US)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            u.R.SIDEBAR
        );
    if (null == n) return null;
    let a = t[n];
    return null == a
        ? null
        : (0, i.jsx)('div', {
              className: h.container,
              children: (0, i.jsx)(m, {
                  state: a,
                  markAsDismissed: r
              })
          });
}
