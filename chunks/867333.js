n.d(t, {
    k: function () {
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
    f = n(186523),
    _ = n(553826),
    p = n(939350),
    h = n(7758);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: b } = e,
        I = i.useRef(null),
        T = (0, d.Q)('MenuRadioItem');
    return (
        i.useEffect(() => {
            E && (0, u.F)(I);
        }, [E]),
        (0, r.jsxs)(o.P, {
            innerRef: I,
            className: s()(h.item, h.labelContainer, p._[t], {
                [h.disabled]: g,
                [h.focused]: E
            }),
            onClick: g ? void 0 : b,
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
                    children: T
                        ? (0, r.jsx)(c.RadioIndicator, {
                              checked: a,
                              radioItemIconClassName: h.radioIcon
                          })
                        : a
                          ? (0, r.jsx)(_.Z, {
                                className: h.icon,
                                background: h.__invalid_radio,
                                foreground: h.radioSelection
                            })
                          : (0, r.jsx)(f.Z, {
                                className: h.icon,
                                foreground: h.__invalid_radio
                            })
                })
            ]
        })
    );
}
