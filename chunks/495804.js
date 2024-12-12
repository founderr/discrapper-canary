r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(314897),
    o = r(984173),
    l = r(295937),
    u = r(718107),
    c = r(611428),
    d = r(4517),
    f = r(48274);
function _(e) {
    let { user: n, location: r, ..._ } = e,
        { statusReactReplyEnabled: h } = (0, u.t)({ location: r }),
        { allProfileReactReplyEnabled: p } = (0, o.F)({ location: r }),
        { simplifiedCustomStatusBubbleEnabled: m } = (0, l.l)({ location: r }),
        g = !(0, a.e7)([s.default], () => s.default.getId() === n.id) && !n.bot && (h || p);
    return m
        ? (0, i.jsx)(c.Z, {
              user: n,
              reactReplyEnabled: g,
              ..._
          })
        : g
          ? (0, i.jsx)(f.Z, {
                user: n,
                ..._
            })
          : (0, i.jsx)(d.Z, {
                user: n,
                ..._
            });
}
