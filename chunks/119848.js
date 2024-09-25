n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(627341);
var s = n(735250);
n(470079);
var i = n(278074),
    a = n(219496),
    r = n(346585),
    o = n(363577),
    l = n(81259);
function u(e) {
    let { username: t, oneClickFlow: n = !1 } = e,
        u = (0, o.M)((0, r.R_)(t), !0, !1, n);
    if (null == u) return null;
    let d = (0, i.EQ)(u.type)
        .with(a.K.RATE_LIMIT, () => 'info')
        .with(a.K.ERROR, () => 'error')
        .with(a.K.AVAILABLE, () => 'success')
        .with(a.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == d
        ? null
        : (0, s.jsx)(l.Z, {
              type: d,
              children: u.message
          });
}
