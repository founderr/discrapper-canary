n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(53281);
function s(e) {
    let { children: t, className: n, innerClassName: a, onChange: s, 'aria-label': c, 'aria-describedby': u, filters: d, multiple: h = !1, disabled: m = !1, submitting: f = !1, ...x } = e;
    return (0, r.jsx)(i.FocusRing, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: l()(
                n,
                (0, i.getButtonStyle)({
                    ...x,
                    submitting: f,
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
                    filters: d,
                    multiple: h,
                    'aria-label': c,
                    'aria-describedby': u,
                    disabled: m
                })
            ]
        })
    });
}
