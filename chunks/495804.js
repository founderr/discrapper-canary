r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(314897),
    o = r(295937),
    l = r(490231),
    u = r(456644),
    c = r(611428),
    d = r(4517),
    f = r(48274);
function _(e) {
    let { user: n, location: r, ..._ } = e,
        { simplifiedCustomStatusBubbleEnabled: h } = (0, o.l)({ location: r }),
        { fadeInAndOutEnabled: p } = (0, l.o)({ location: r }),
        { allProfileReactReplyEnabled: m } = (0, u.i)({ location: r }),
        g = !(0, a.e7)([s.default], () => s.default.getId() === n.id) && !n.bot && (p || m);
    return h
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
