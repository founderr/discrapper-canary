n.d(t, {
    O: function () {
        return l;
    }
});
var r = n(33693),
    i = n(735674),
    a = n(444960),
    s = n(413139),
    o = n(650419);
function l(e, t, n) {
    let { isDisabled: l = !1, isReadOnly: u = !1, value: c, name: d, children: f, 'aria-label': _, 'aria-labelledby': p, validationState: h = 'valid', isInvalid: m } = e;
    !(null != f) && !(null != _ || null != p) && console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let { pressProps: g, isPressed: E } = (0, o.r)({ isDisabled: l }),
        { pressProps: v, isPressed: b } = (0, o.r)({
            isDisabled: l || u,
            onPress() {
                t.toggle();
            }
        }),
        { focusableProps: I } = (0, s.k)(e, n),
        T = (0, r.d)(g, I),
        S = (0, i.z)(e, { labelable: !0 });
    return (
        (0, a.y)(n, t.isSelected, t.setSelected),
        {
            labelProps: (0, r.d)(v, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.d)(S, {
                'aria-invalid': m || 'invalid' === h || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-controls': e['aria-controls'],
                'aria-readonly': u || void 0,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelected(e.target.checked);
                },
                disabled: l,
                ...(null == c ? {} : { value: c }),
                name: d,
                type: 'checkbox',
                ...T
            }),
            isSelected: t.isSelected,
            isPressed: E || b,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: m || 'invalid' === h
        }
    );
}
