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
    u = t(699682),
    _ = t(44315),
    E = t(654904),
    T = t(981631),
    I = t(689938),
    S = t(562476);
function N(e) {
    let { onChange: s, onClose: t, color: i, suggestedColors: N, disabled: m, label: C, colorPickerMiddle: g, colorPickerFooter: A, showEyeDropper: h } = e,
        O = a.useRef(null),
        p = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        R = c.Z.colors.BACKGROUND_ACCENT.css,
        x = (0, E.DP)(i),
        f = (0, l.Rf)(i),
        M = f === p ? R : f,
        D = (0, _.Lq)(x ? T.Ilk.WHITE_500 : T.Ilk.PRIMARY_530),
        P = (0, u.Z)(g),
        L = (0, u.Z)(A),
        [b, Z] = a.useState((0, o.Z)());
    return (
        a.useEffect(() => {
            (P !== g || L !== A) && Z((0, o.Z)());
        }, [A, g, L, P]),
        (0, n.jsx)(d.Popout, {
            positionKey: b,
            renderPopout: (e) =>
                (0, n.jsx)(d.CustomColorPicker, {
                    ...e,
                    value: i,
                    onChange: s,
                    suggestedColors: N,
                    middle: g,
                    footer: A,
                    showEyeDropper: h
                }),
            onRequestClose: t,
            children: (e) => {
                let { onClick: s, ...t } = e;
                return (0, n.jsxs)('div', {
                    ref: O,
                    className: r()(S.colorSwatch, { [S.disabled]: m }),
                    children: [
                        (0, n.jsx)(d.Clickable, {
                            ...t,
                            tabIndex: m ? -1 : 0,
                            onClick: m ? T.dG4 : s,
                            style: {
                                backgroundColor: f,
                                borderColor: M
                            },
                            className: S.swatch,
                            'aria-label': I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                            focusProps: { ringTarget: O },
                            children: (0, n.jsx)(d.PencilIcon, {
                                size: 'custom',
                                className: S.editPencilIcon,
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
