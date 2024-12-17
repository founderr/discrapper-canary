n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(741914),
    c = n(619078),
    u = n(665162);
function d(e) {
    let { color: t, className: n, variant: l, text: d, lineClamp: m } = e,
        h = (0, o.usePrivateHeadingLevel)(),
        f = r.useMemo(
            () =>
                null == d
                    ? null
                    : (0, s.Z)(d, !0, {
                          allowHeading: null == m,
                          allowList: null == m,
                          initialHeaderLevel: h
                      }),
            [d, m, h]
        );
    return (0, i.jsx)(o.Text, {
        className: a()(n, u.markup, {
            [c.lineClamp2Plus]: null != m && m > 1,
            [c.lineClamp1]: 1 === m
        }),
        color: t,
        variant: l,
        lineClamp: m,
        children: f
    });
}
