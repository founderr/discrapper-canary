n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(26033),
    s = n(180335),
    o = n(297781),
    l = n(16779),
    u = n(981631);
function c(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [o.U9, o.wO, o.f, o.n8, o.v1, o.pQ].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n)))
    });
}
function d(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [o.E6].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function f(e) {
    let { entry: t } = e;
    return (0, r.jsx)(r.Fragment, { children: [o.An].map((e, n) => (0, r.jsx)(e, { entry: t }, 'entry-'.concat(n))) });
}
function _(e) {
    let { user: t, activity: n, className: _ } = e,
        h = (0, s.Bq)({
            activity: n,
            user: t
        }),
        p = (0, i.EQ)(n)
            .with({ type: u.IIU.PLAYING }, () => [l.ho, l.Xh])
            .with({ type: u.IIU.LISTENING }, () => [l.ho])
            .with({ type: u.IIU.WATCHING }, () => [l.ho, l.Rg])
            .otherwise(() => []);
    return 0 === p.length
        ? null
        : (0, r.jsxs)(o.Gk, {
              location: o.Gt.USER_PROFILE,
              className: _,
              children: [
                  p.map((e, t) => (0, r.jsx)(e, { activity: n }, 'activity-'.concat(t))),
                  (0, i.EQ)(h)
                      .when(a.Cb, (e) => (0, r.jsx)(c, { entry: e }))
                      .when(a.Q0, (e) => (0, r.jsx)(d, { entry: e }))
                      .when(a.KF, (e) => (0, r.jsx)(f, { entry: e }))
                      .otherwise(() => null)
              ]
          });
}
