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
    h = n(450793);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: I } = e,
        T = i.useRef(null),
        b = (0, d.Q3)('MenuRadioItem');
    return (
        i.useEffect(() => {
            E && (0, u.F)(T);
        }, [E]),
        (0, r.jsxs)(o.P, {
            innerRef: T,
            className: s()(h.item, h.labelContainer, p._[t], {
                [h.disabled]: g,
                [h.focused]: E
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
                    children: b
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
