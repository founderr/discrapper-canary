n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(481060), o = n(741914), c = n(529367), d = n(153521);
function u(e) {
    let {
            color: t,
            className: n,
            variant: s,
            text: u,
            lineClamp: _
        } = e, E = (0, r.usePrivateHeadingLevel)(), m = a.useMemo(() => null == u ? null : (0, o.Z)(u, !0, {
            allowHeading: null == _,
            allowList: null == _,
            initialHeaderLevel: E
        }), [
            u,
            _,
            E
        ]);
    return (0, i.jsx)(r.Text, {
        className: l()(n, d.markup, {
            [c.lineClamp2Plus]: null != _ && _ > 1,
            [c.lineClamp1]: 1 === _
        }),
        color: t,
        variant: s,
        lineClamp: _,
        children: m
    });
}
