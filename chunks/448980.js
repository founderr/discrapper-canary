n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(627341);
var i = n(735250);
n(470079);
var a = n(278074),
    o = n(26033),
    s = n(180335),
    l = n(297781),
    u = n(16779),
    c = n(981631);
function d(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: [l.U9, l.wO, l.f, l.n8, l.v1, l.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
    });
}
function _(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [l.E6].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function E(e) {
    let { entry: t } = e;
    return (0, i.jsx)(i.Fragment, { children: [l.An].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function f(e) {
    let { user: t, activity: n, className: r } = e,
        f = (0, s.Bq)({
            activity: n,
            user: t
        }),
        h = (0, a.EQ)(n)
            .with({ type: c.IIU.PLAYING }, () => [u.ho, u.Xh])
            .with({ type: c.IIU.LISTENING }, () => [u.ho])
            .with({ type: c.IIU.WATCHING }, () => [u.ho, u.Rg])
            .otherwise(() => []);
    return 0 === h.length
        ? null
        : (0, i.jsxs)(l.Gk, {
              location: l.Gt.USER_PROFILE,
              className: r,
              children: [
                  h.map((e, t) => (0, i.jsx)(e, { activity: n }, 'activity-'.concat(t))),
                  (0, a.EQ)(f)
                      .when(o.Cb, (e) => (0, i.jsx)(d, { entry: e }))
                      .when(o.Q0, (e) => (0, i.jsx)(_, { entry: e }))
                      .when(o.KF, (e) => (0, i.jsx)(E, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
