n.d(s, {
    Z: function () {
        return i;
    }
});
var t = n(735250);
n(470079);
var o = n(120356),
    a = n.n(o),
    l = n(481060),
    r = n(813197);
function i(e) {
    let { buttonCTA: s, onChange: n, 'aria-label': o, multiple: i = !1, disabled: E = !1, submitting: c = !1, ...u } = e;
    return (0, t.jsx)(l.FocusRing, {
        within: !0,
        children: (0, t.jsxs)('div', {
            className: a()(
                (0, l.getButtonStyle)({
                    ...u,
                    submitting: c,
                    disabled: E
                })
            ),
            style: { width: 'max-content' },
            'aria-disabled': E,
            children: [
                (0, t.jsx)('span', {
                    'aria-hidden': !0,
                    children: s
                }),
                (0, t.jsx)(r.ZP, {
                    tabIndex: 0,
                    onChange: n,
                    multiple: i,
                    'aria-label': null != o ? o : s,
                    disabled: E
                })
            ]
        })
    });
}
