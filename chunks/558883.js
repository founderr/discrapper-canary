r.d(n, {
    O: function () {
        return o;
    }
});
var i = r(661763),
    a = r(662845),
    s = r(921336);
function o(e, n, r) {
    let { isDisabled: o = !1, isReadOnly: l = !1, value: u, name: c, children: d, 'aria-label': f, 'aria-labelledby': _, validationState: h = 'valid', isInvalid: p } = e,
        m = (e) => {
            e.stopPropagation(), n.setSelected(e.target.checked);
        },
        g = null != f || null != _;
    !(null != d) && !g && console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let { pressProps: E, isPressed: v } = (0, s.r7)({ isDisabled: o }),
        { pressProps: I, isPressed: T } = (0, s.r7)({
            isDisabled: o || l,
            onPress() {
                n.toggle();
            }
        }),
        { focusableProps: b } = (0, a.kc)(e, r),
        y = (0, i.dG)(E, b),
        S = (0, i.zL)(e, { labelable: !0 });
    return (
        (0, i.y$)(r, n.isSelected, n.setSelected),
        {
            labelProps: (0, i.dG)(I, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, i.dG)(S, {
                'aria-invalid': p || 'invalid' === h || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-controls': e['aria-controls'],
                'aria-readonly': l || void 0,
                onChange: m,
                disabled: o,
                ...(null == u ? {} : { value: u }),
                name: c,
                type: 'checkbox',
                ...y
            }),
            isSelected: n.isSelected,
            isPressed: v || T,
            isDisabled: o,
            isReadOnly: l,
            isInvalid: p || 'invalid' === h
        }
    );
}
