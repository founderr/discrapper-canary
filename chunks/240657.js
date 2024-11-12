n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(741914),
    c = n(677390),
    d = n(554034);
function u(e) {
    let { color: t, className: n, variant: l, text: u, lineClamp: m } = e,
        h = (0, o.usePrivateHeadingLevel)(),
        f = r.useMemo(
            () =>
                null == u
                    ? null
                    : (0, s.Z)(u, !0, {
                          allowHeading: null == m,
                          allowList: null == m,
                          initialHeaderLevel: h
                      }),
            [u, m, h]
        );
    return (0, i.jsx)(o.Text, {
        className: a()(n, d.markup, {
            [c.lineClamp2Plus]: null != m && m > 1,
            [c.lineClamp1]: 1 === m
        }),
        color: t,
        variant: l,
        lineClamp: m,
        children: f
    });
}
