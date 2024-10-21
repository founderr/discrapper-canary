t.d(A, {
    Z: function () {
        return c;
    }
});
var a = t(200651),
    n = t(192379),
    r = t(120356),
    s = t.n(r),
    o = t(481060),
    l = t(741914),
    i = t(677390),
    d = t(554034);
function c(e) {
    let { color: A, className: t, variant: r, text: c, lineClamp: u } = e,
        C = (0, o.usePrivateHeadingLevel)(),
        g = n.useMemo(
            () =>
                null == c
                    ? null
                    : (0, l.Z)(c, !0, {
                          allowHeading: null == u,
                          allowList: null == u,
                          initialHeaderLevel: C
                      }),
            [c, u, C]
        );
    return (0, a.jsx)(o.Text, {
        className: s()(t, d.markup, {
            [i.lineClamp2Plus]: null != u && u > 1,
            [i.lineClamp1]: 1 === u
        }),
        color: A,
        variant: r,
        lineClamp: u,
        children: g
    });
}
