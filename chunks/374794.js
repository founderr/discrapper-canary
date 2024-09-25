t.d(A, {
    Z: function () {
        return l;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    s = t.n(a),
    r = t(481060),
    o = t(53281);
function l(e) {
    let { children: A, className: t, innerClassName: a, onChange: l, 'aria-label': i, 'aria-describedby': d, filters: c, multiple: u = !1, disabled: C = !1, submitting: g = !1, ...T } = e;
    return (0, n.jsx)(r.FocusRing, {
        within: !0,
        children: (0, n.jsxs)('div', {
            className: s()(
                t,
                (0, r.getButtonStyle)({
                    ...T,
                    submitting: g,
                    disabled: C
                })
            ),
            'aria-disabled': C,
            children: [
                (0, n.jsx)('span', {
                    'aria-hidden': !0,
                    className: a,
                    children: A
                }),
                (0, n.jsx)(o.Z, {
                    tabIndex: 0,
                    onChange: l,
                    filters: c,
                    multiple: u,
                    'aria-label': i,
                    'aria-describedby': d,
                    disabled: C
                })
            ]
        })
    });
}
