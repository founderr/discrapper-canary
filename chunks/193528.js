t.d(s, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(772848),
    l = t(866442),
    c = t(692547),
    d = t(481060),
    _ = t(699682),
    u = t(44315),
    E = t(654904),
    T = t(981631),
    S = t(689938),
    I = t(109469);
function N(e) {
    let { onChange: s, onClose: t, color: i, suggestedColors: N, disabled: m, label: C, colorPickerMiddle: A, colorPickerFooter: g, showEyeDropper: h } = e,
        O = a.useRef(null),
        p = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        R = c.Z.colors.BACKGROUND_ACCENT.css,
        x = (0, E.DP)(i),
        f = (0, l.Rf)(i),
        M = f === p ? R : f,
        D = (0, u.Lq)(x ? T.Ilk.WHITE_500 : T.Ilk.PRIMARY_530),
        L = (0, _.Z)(A),
        P = (0, _.Z)(g),
        [b, Z] = a.useState((0, o.Z)());
    return (
        a.useEffect(() => {
            (L !== A || P !== g) && Z((0, o.Z)());
        }, [g, A, P, L]),
        (0, n.jsx)(d.Popout, {
            positionKey: b,
            renderPopout: (e) =>
                (0, n.jsx)(d.CustomColorPicker, {
                    ...e,
                    value: i,
                    onChange: s,
                    suggestedColors: N,
                    middle: A,
                    footer: g,
                    showEyeDropper: h
                }),
            onRequestClose: t,
            children: (e) => {
                let { onClick: s, ...t } = e;
                return (0, n.jsxs)('div', {
                    ref: O,
                    className: r()(I.colorSwatch, { [I.disabled]: m }),
                    children: [
                        (0, n.jsx)(d.Clickable, {
                            ...t,
                            tabIndex: m ? -1 : 0,
                            onClick: m ? T.dG4 : s,
                            style: {
                                backgroundColor: f,
                                borderColor: M
                            },
                            className: I.swatch,
                            'aria-label': S.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                            focusProps: { ringTarget: O },
                            children: (0, n.jsx)(d.PencilIcon, {
                                size: 'custom',
                                className: I.editPencilIcon,
                                width: 14,
                                height: 14,
                                color: D
                            })
                        }),
                        C
                    ]
                });
            }
        })
    );
}
