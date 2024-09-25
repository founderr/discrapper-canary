n.d(t, {
    AG: function () {
        return C;
    },
    Z$: function () {
        return L;
    },
    jH: function () {
        return y;
    },
    zH: function () {
        return D;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(91192),
    u = n(924826),
    c = n(866442),
    d = n(1561),
    _ = n(507274),
    E = n(84735),
    f = n(463208),
    h = n(481060),
    p = n(408886),
    m = n(44315),
    I = n(665149),
    T = n(534828),
    g = n(981631),
    S = n(689938),
    A = n(397375);
let v = 7,
    N = () => Promise.resolve();
function O(e) {
    if (null == e) return null;
    if ('string' == typeof e) return (0, c.FX)(e) ? (0, c._i)(e) : null;
    return e;
}
function R(e) {
    let { color: t, isDefault: n = !1, isCustom: r = !1, isSelected: a = !1, disabled: o = !1, style: u = {}, onClick: d, 'aria-label': _ } = e,
        f = (0, l.JA)('color-'.concat(t)),
        p = null != t ? (0, c.Rf)(t) : u.backgroundColor,
        I = !1;
    function T() {
        let e = 16,
            t = 16;
        if (((r || n) && ((e = 32), (t = 24)), a))
            return (0, i.jsx)(h.CheckmarkLargeIcon, {
                size: 'custom',
                width: e,
                height: t,
                color: (0, m.Lq)(I ? g.Ilk.WHITE_500 : g.Ilk.BLACK_500)
            });
    }
    return (
        r && !a ? (I = !0) : (r || a) && (I = (0, c.Bd)(t) > 0.1),
        (0, i.jsx)(E.t, {
            offset: -2,
            children: (0, i.jsxs)('button', {
                type: 'button',
                className: s()(A.colorPickerSwatch, {
                    [A.disabled]: o,
                    [A.default]: n,
                    [A.custom]: r,
                    [A.noColor]: null == t
                }),
                disabled: o,
                onClick: () => (null == d ? void 0 : d(t)),
                style: {
                    ...u,
                    backgroundColor: p
                },
                'aria-label': null != _ ? _ : p,
                ...f,
                children: [
                    r
                        ? (0, i.jsx)(h.EyeDropperIcon, {
                              size: 'custom',
                              className: A.colorPickerDropper,
                              colorClass: A.colorPickerDropperFg,
                              width: 14,
                              height: 14,
                              color: (0, m.Lq)(I ? g.Ilk.WHITE_500 : g.Ilk.BLACK_500)
                          })
                        : null,
                    T()
                ]
            })
        })
    );
}
class C extends a.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: r } = this.props;
        return (0, i.jsx)(R, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: r
        });
    }
}
class y extends a.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, 'aria-label': r } = this.props;
        return (0, i.jsx)(R, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': r
        });
    }
}
function b(e) {
    let { value: t, eagerUpdate: n = !1, onChange: r, onClose: o, suggestedColors: l, middle: u, footer: E, showEyeDropper: m, wrapperComponentType: g, className: N } = e,
        R = (0, p.Z)(),
        C = O(t),
        y = null != C ? C : 0,
        b = (0, c.Rf)(y),
        L = (0, c.O)(y),
        [D, M] = a.useState({
            current: y,
            pending: {
                hex: b,
                hsl: L
            },
            input: b
        });
    a.useEffect(() => {
        if (null == C || C === D.current) return;
        let e = (0, c.Rf)(C),
            t = (0, c.O)(C);
        M({
            current: C,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [C, D]),
        a.useEffect(() => o, [o]);
    let P = (e) => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, c.FX)(t)) {
                M((e) => ({
                    ...e,
                    input: t
                }));
                return;
            }
            let n = (0, c._i)(t),
                i = (0, c.O)(n);
            M({
                current: n,
                pending: {
                    hex: t,
                    hsl: i
                },
                input: t
            }),
                r(n);
        },
        U = async () => {
            if (null != R)
                try {
                    let { sRGBHex: e } = await R.open();
                    P(e);
                } catch {}
        },
        w = a.useCallback(
            (e) => {
                M((t) => ({
                    ...t,
                    pending: e,
                    input: e.hex
                })),
                    n && r((0, c._i)(e.hex));
            },
            [n, r]
        ),
        x = (e) => {
            r((0, c._i)(e));
        },
        G = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.Z, {
                    onChange: w,
                    onChangeComplete: (e) => {
                        let { hex: t } = e;
                        return x(t);
                    },
                    color: D.pending.hsl
                }),
                u,
                (0, i.jsxs)('div', {
                    className: A.customColorPickerInputContainer,
                    children: [
                        m &&
                            null != R &&
                            (0, i.jsx)(I.JO, {
                                onClick: U,
                                tooltip: S.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                                tooltipPosition: 'top',
                                className: A.customColorPickerEyeDropper,
                                icon: h.EyeDropperIcon
                            }),
                        (0, i.jsx)(f.o, {
                            className: A.customColorPickerInput,
                            value: D.input,
                            onChange: P,
                            maxLength: v
                        })
                    ]
                }),
                null != l &&
                    l.length > 0 &&
                    (0, i.jsx)('div', {
                        className: A.suggestedColors,
                        children: l.map((e, t) =>
                            (0, i.jsx)(
                                d.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: A.suggestedColor,
                                    onClick: () => P(e)
                                },
                                ''.concat(e, '-').concat(t)
                            )
                        )
                    }),
                E
            ]
        }),
        k = null != g ? g : _.V;
    return (0, i.jsx)(k, {
        'aria-label': S.Z.Messages.PICK_A_COLOR,
        className: s()(A.customColorPicker, N),
        children: G
    });
}
let L = a.memo(b);
function D(e) {
    let { className: t, defaultColor: n, customColor: r, colors: a, value: o, disabled: c, onChange: d, renderDefaultButton: _, renderCustomButton: E, colorContainerClassName: f } = e,
        h = (e) =>
            (0, i.jsx)('div', {
                className: A.colorPickerRow,
                children: e.map((e) =>
                    (0, i.jsx)(
                        R,
                        {
                            color: e,
                            isSelected: e === o,
                            onClick: d,
                            disabled: c
                        },
                        e
                    )
                )
            }),
        p = a.slice(0, a.length / 2),
        m = a.slice(a.length / 2, a.length),
        I = (0, u.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: N,
            scrollToEnd: N
        });
    return (0, i.jsx)(l.bG, {
        navigator: I,
        children: (0, i.jsx)(l.SJ, {
            children: (e) => {
                let { ref: a, ...l } = e;
                return (0, i.jsxs)('div', {
                    className: s()(A.container, t),
                    ref: a,
                    ...l,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(A.defaultContainer, f),
                            children: _({
                                value: o,
                                color: n,
                                onChange: d,
                                disabled: c
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: s()(A.customContainer, f),
                            children: E({
                                value: o,
                                customColor: r,
                                disabled: c
                            })
                        }),
                        (0, i.jsxs)('div', {
                            children: [h(p), h(m)]
                        })
                    ]
                });
            }
        })
    });
}
