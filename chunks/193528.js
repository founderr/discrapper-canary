n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(772848),
    o = n(866442),
    c = n(692547),
    d = n(481060),
    u = n(699682),
    m = n(44315),
    g = n(654904),
    h = n(981631),
    p = n(388032),
    x = n(602750);
function T(e) {
    let { onChange: t, onClose: n, color: r, suggestedColors: T, disabled: S, label: _, colorPickerMiddle: E, colorPickerFooter: C, showEyeDropper: f } = e,
        I = s.useRef(null),
        N = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        A = c.Z.colors.BACKGROUND_ACCENT.css,
        b = (0, g.DP)(r),
        v = (0, o.Rf)(r),
        j = v === N ? A : v,
        O = (0, m.Lq)(b ? h.Ilk.WHITE_500 : h.Ilk.PRIMARY_530),
        R = (0, u.Z)(E),
        P = (0, u.Z)(C),
        [D, y] = s.useState((0, a.Z)());
    return (
        s.useEffect(() => {
            (R !== E || P !== C) && y((0, a.Z)());
        }, [C, E, P, R]),
        (0, i.jsx)(d.Popout, {
            positionKey: D,
            renderPopout: (e) =>
                (0, i.jsx)(d.CustomColorPicker, {
                    ...e,
                    value: r,
                    onChange: t,
                    suggestedColors: T,
                    middle: E,
                    footer: C,
                    showEyeDropper: f
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsxs)('div', {
                    ref: I,
                    className: l()(x.colorSwatch, { [x.disabled]: S }),
                    children: [
                        (0, i.jsx)(d.Clickable, {
                            ...n,
                            tabIndex: S ? -1 : 0,
                            onClick: S ? h.dG4 : t,
                            style: {
                                backgroundColor: v,
                                borderColor: j
                            },
                            className: x.swatch,
                            'aria-label': p.intl.string(p.t.Qp04hI),
                            focusProps: { ringTarget: I },
                            children: (0, i.jsx)(d.PencilIcon, {
                                size: 'custom',
                                className: x.editPencilIcon,
                                width: 14,
                                height: 14,
                                color: O
                            })
                        }),
                        _
                    ]
                });
            }
        })
    );
}
