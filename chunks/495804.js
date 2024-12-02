n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(314897),
    s = n(984173),
    o = n(295937),
    l = n(718107),
    u = n(611428),
    c = n(4517),
    d = n(48274);
function f(e) {
    let { user: t, location: n, ...f } = e,
        { statusReactReplyEnabled: _ } = (0, l.t)({ location: n }),
        { allProfileReactReplyEnabled: p } = (0, s.F)({ location: n }),
        { simplifiedCustomStatusBubbleEnabled: h } = (0, o.l)({ location: n }),
        m = !(0, i.e7)([a.default], () => a.default.getId() === t.id) && !t.bot && (_ || p);
    return h
        ? (0, r.jsx)(u.Z, {
              user: t,
              reactReplyEnabled: m,
              ...f
          })
        : m
          ? (0, r.jsx)(d.Z, {
                user: t,
                ...f
            })
          : (0, r.jsx)(c.Z, {
                user: t,
                ...f
            });
}
