n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(53281);
function s(e) {
    let { children: t, className: n, innerClassName: a, onChange: s, 'aria-label': c, 'aria-describedby': d, filters: u, multiple: h = !1, disabled: m = !1, submitting: x = !1, ...p } = e;
    return (0, r.jsx)(i.FocusRing, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: l()(
                n,
                (0, i.getButtonStyle)({
                    ...p,
                    submitting: x,
                    disabled: m
                })
            ),
            'aria-disabled': m,
            children: [
                (0, r.jsx)('span', {
                    'aria-hidden': !0,
                    className: a,
                    children: t
                }),
                (0, r.jsx)(o.Z, {
                    tabIndex: 0,
                    onChange: s,
                    filters: u,
                    multiple: h,
                    'aria-label': c,
                    'aria-describedby': d,
                    disabled: m
                })
            ]
        })
    });
}
