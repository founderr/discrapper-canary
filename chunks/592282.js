n.d(t, {
    S: function () {
        return p;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(743236),
    c = n(481060),
    d = n(540059),
    _ = n(448239),
    E = n(247442),
    f = n(939350),
    h = n(667947);
function p(e) {
    let { color: t = 'default', label: n, checked: a, subtext: p, disabled: I, isFocused: m, menuItemProps: T, action: S, className: g, focusedClassName: A } = e,
        N = i.useRef(null),
        R = (0, d.Q)('MenuCheckboxItem');
    return (
        i.useEffect(() => {
            m && (0, u.F)(N);
        }, [m]),
        (0, r.jsxs)(o.P, {
            innerRef: N,
            className: s()(h.item, h.checkboxContainer, h.labelContainer, f._[t], g, {
                [h.disabled]: I,
                [h.focused]: m,
                [null != A ? A : '']: m
            }),
            onClick: I ? void 0 : S,
            ...T,
            'aria-checked': a,
            'aria-disabled': I,
            children: [
                (0, r.jsxs)('div', {
                    className: h.label,
                    children: [
                        (0, l.I)(n, e),
                        null != p &&
                            (0, r.jsx)('div', {
                                className: h.subtext,
                                children: p
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: h.iconContainer,
                    children: R
                        ? (0, r.jsx)(c.CheckboxIndicator, {
                              shape: c.Checkbox.Shapes.BOX,
                              size: 20,
                              value: a,
                              disabled: I
                          })
                        : a
                          ? (0, r.jsx)(E.Z, {
                                className: h.icon,
                                background: h.checkbox,
                                foreground: h.check
                            })
                          : (0, r.jsx)(_.Z, {
                                className: h.icon,
                                foreground: h.__invalid_checkboxEmpty
                            })
                })
            ]
        })
    );
}
