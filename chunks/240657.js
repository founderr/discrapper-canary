n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(741914),
    u = n(677390),
    c = n(554034);
function d(e) {
    let { color: t, className: n, variant: a, text: d, lineClamp: _ } = e,
        E = (0, s.usePrivateHeadingLevel)(),
        f = i.useMemo(
            () =>
                null == d
                    ? null
                    : (0, l.Z)(d, !0, {
                          allowHeading: null == _,
                          allowList: null == _,
                          initialHeaderLevel: E
                      }),
            [d, _, E]
        );
    return (0, r.jsx)(s.Text, {
        className: o()(n, c.markup, {
            [u.lineClamp2Plus]: null != _ && _ > 1,
            [u.lineClamp1]: 1 === _
        }),
        color: t,
        variant: a,
        lineClamp: _,
        children: f
    });
}
