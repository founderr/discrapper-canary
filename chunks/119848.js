n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var s = n(278074),
    r = n(219496),
    a = n(346585),
    l = n(363577),
    o = n(81259);
function u(e) {
    let { username: t, oneClickFlow: n = !1 } = e,
        u = (0, l.M)((0, a.R_)(t), !0, !1, n);
    if (null == u) return null;
    let c = (0, s.EQ)(u.type)
        .with(r.K.RATE_LIMIT, () => 'info')
        .with(r.K.ERROR, () => 'error')
        .with(r.K.AVAILABLE, () => 'success')
        .with(r.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == c
        ? null
        : (0, i.jsx)(o.Z, {
              type: c,
              children: u.message
          });
}
