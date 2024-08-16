n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(741914),
    c = n(40509),
    u = n(910212);
function d(e) {
    let { color: t, className: n, variant: a, text: d, lineClamp: _ } = e,
        E = (0, l.usePrivateHeadingLevel)(),
        I = s.useMemo(
            () =>
                null == d
                    ? null
                    : (0, o.Z)(d, !0, {
                          allowHeading: null == _,
                          allowList: null == _,
                          initialHeaderLevel: E
                      }),
            [d, _, E]
        );
    return (0, i.jsx)(l.Text, {
        className: r()(n, u.markup, {
            [c.lineClamp2Plus]: null != _ && _ > 1,
            [c.lineClamp1]: 1 === _
        }),
        color: t,
        variant: a,
        lineClamp: _,
        children: I
    });
}
