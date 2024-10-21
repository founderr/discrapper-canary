n.d(t, {
    k: function () {
        return p;
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
    _ = n(186523),
    E = n(553826),
    f = n(939350),
    h = n(667947);
function p(e) {
    let { color: t = 'default', label: n, checked: a, subtext: p, disabled: I, isFocused: m, menuItemProps: T, action: S } = e,
        g = i.useRef(null),
        A = (0, d.Q)('MenuRadioItem');
    return (
        i.useEffect(() => {
            m && (0, u.F)(g);
        }, [m]),
        (0, r.jsxs)(o.P, {
            innerRef: g,
            className: s()(h.item, h.labelContainer, f._[t], {
                [h.disabled]: I,
                [h.focused]: m
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
                    children: A
                        ? (0, r.jsx)(c.RadioIndicator, {
                              checked: a,
                              radioItemIconClassName: h.radioIcon
                          })
                        : a
                          ? (0, r.jsx)(E.Z, {
                                className: h.icon,
                                background: h.__invalid_radio,
                                foreground: h.radioSelection
                            })
                          : (0, r.jsx)(_.Z, {
                                className: h.icon,
                                foreground: h.__invalid_radio
                            })
                })
            ]
        })
    );
}
