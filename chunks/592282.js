n.d(t, {
    S: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(743236),
    c = n(481060),
    d = n(540059),
    f = n(448239),
    _ = n(247442),
    p = n(939350),
    h = n(450793);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: I, className: T, focusedClassName: b } = e,
        S = i.useRef(null),
        y = (0, d.Q3)('MenuCheckboxItem');
    return (
        i.useEffect(() => {
            E && (0, u.F)(S);
        }, [E]),
        (0, r.jsxs)(o.P, {
            innerRef: S,
            className: s()(h.item, h.checkboxContainer, h.labelContainer, p._[t], T, {
                [h.disabled]: g,
                [h.focused]: E,
                [null != b ? b : '']: E
            }),
            onClick: g ? void 0 : I,
            ...v,
            'aria-checked': a,
            'aria-disabled': g,
            children: [
                (0, r.jsxs)('div', {
                    className: h.label,
                    children: [
                        (0, l.I)(n, e),
                        null != m &&
                            (0, r.jsx)('div', {
                                className: h.subtext,
                                children: m
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: h.iconContainer,
                    children: y
                        ? (0, r.jsx)(c.CheckboxIndicator, {
                              shape: c.Checkbox.Shapes.BOX,
                              size: 20,
                              value: a,
                              disabled: g
                          })
                        : a
                          ? (0, r.jsx)(_.Z, {
                                className: h.icon,
                                background: h.checkbox,
                                foreground: h.check
                            })
                          : (0, r.jsx)(f.Z, {
                                className: h.icon,
                                foreground: h.__invalid_checkboxEmpty
                            })
                })
            ]
        })
    );
}
