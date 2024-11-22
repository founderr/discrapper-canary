n.d(t, {
    AG: function () {
        return y;
    },
    Z$: function () {
        return N;
    },
    jH: function () {
        return A;
    },
    zH: function () {
        return C;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(924826),
    u = n(866442),
    c = n(1561),
    d = n(507274),
    f = n(84735),
    _ = n(463208),
    p = n(481060),
    h = n(408886),
    m = n(44315),
    g = n(665149),
    E = n(534828),
    v = n(981631),
    I = n(388032),
    b = n(397375);
let T = () => Promise.resolve();
function S(e) {
    let { color: t, isDefault: n = !1, isCustom: i = !1, isSelected: a = !1, disabled: l = !1, style: c = {}, onClick: d, 'aria-label': _ } = e,
        h = (0, o.JA)('color-'.concat(t)),
        g = null != t ? (0, u.Rf)(t) : c.backgroundColor,
        E = !1;
    return (
        i && !a ? (E = !0) : (i || a) && (E = (0, u.Bd)(t) > 0.1),
        (0, r.jsx)(f.t, {
            offset: -2,
            children: (0, r.jsxs)('button', {
                type: 'button',
                className: s()(b.colorPickerSwatch, {
                    [b.disabled]: l,
                    [b.default]: n,
                    [b.custom]: i,
                    [b.noColor]: null == t
                }),
                disabled: l,
                onClick: () => (null == d ? void 0 : d(t)),
                style: {
                    ...c,
                    backgroundColor: g
                },
                'aria-label': null != _ ? _ : g,
                ...h,
                children: [
                    i
                        ? (0, r.jsx)(p.EyeDropperIcon, {
                              size: 'custom',
                              className: b.colorPickerDropper,
                              colorClass: b.colorPickerDropperFg,
                              width: 14,
                              height: 14,
                              color: (0, m.Lq)(E ? v.Ilk.WHITE_500 : v.Ilk.BLACK_500)
                          })
                        : null,
                    (function () {
                        let e = 16,
                            t = 16;
                        if (((i || n) && ((e = 32), (t = 24)), a))
                            return (0, r.jsx)(p.CheckmarkLargeIcon, {
                                size: 'custom',
                                width: e,
                                height: t,
                                color: (0, m.Lq)(E ? v.Ilk.WHITE_500 : v.Ilk.BLACK_500)
                            });
                    })()
                ]
            })
        })
    );
}
class y extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i } = this.props;
        return (0, r.jsx)(S, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: i
        });
    }
}
class A extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, 'aria-label': i } = this.props;
        return (0, r.jsx)(S, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': i
        });
    }
}
let N = i.memo(function (e) {
    let { value: t, eagerUpdate: n = !1, onChange: a, onClose: o, suggestedColors: l, middle: f, footer: m, showEyeDropper: v, wrapperComponentType: T, className: S } = e,
        y = (0, h.Z)(),
        A = (function (e) {
            if (null == e) return null;
            if ('string' == typeof e) return (0, u.FX)(e) ? (0, u._i)(e) : null;
            return e;
        })(t),
        N = null != A ? A : 0,
        C = (0, u.Rf)(N),
        R = (0, u.O)(N),
        [O, D] = i.useState({
            current: N,
            pending: {
                hex: C,
                hsl: R
            },
            input: C
        });
    i.useEffect(() => {
        if (null == A || A === O.current) return;
        let e = (0, u.Rf)(A),
            t = (0, u.O)(A);
        D({
            current: A,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [A, O]),
        i.useEffect(() => o, [o]);
    let L = (e) => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, u.FX)(t)) {
                D((e) => ({
                    ...e,
                    input: t
                }));
                return;
            }
            let n = (0, u._i)(t),
                r = (0, u.O)(n);
            D({
                current: n,
                pending: {
                    hex: t,
                    hsl: r
                },
                input: t
            }),
                a(n);
        },
        x = async () => {
            if (null != y)
                try {
                    let { sRGBHex: e } = await y.open();
                    L(e);
                } catch {}
        },
        w = i.useCallback(
            (e) => {
                D((t) => ({
                    ...t,
                    pending: e,
                    input: e.hex
                })),
                    n && a((0, u._i)(e.hex));
            },
            [n, a]
        ),
        M = (e) => {
            a((0, u._i)(e));
        },
        P = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E.Z, {
                    onChange: w,
                    onChangeComplete: (e) => {
                        let { hex: t } = e;
                        return M(t);
                    },
                    color: O.pending.hsl
                }),
                f,
                (0, r.jsxs)('div', {
                    className: b.customColorPickerInputContainer,
                    children: [
                        v &&
                            null != y &&
                            (0, r.jsx)(g.JO, {
                                onClick: x,
                                tooltip: I.intl.string(I.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: b.customColorPickerEyeDropper,
                                icon: p.EyeDropperIcon
                            }),
                        (0, r.jsx)(_.o, {
                            className: b.customColorPickerInput,
                            value: O.input,
                            onChange: L,
                            maxLength: 7
                        })
                    ]
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)('div', {
                        className: b.suggestedColors,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                c.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: b.suggestedColor,
                                    onClick: () => L(e)
                                },
                                ''.concat(e, '-').concat(t)
                            )
                        )
                    }),
                m
            ]
        }),
        k = null != T ? T : d.V;
    return (0, r.jsx)(k, {
        'aria-label': I.intl.string(I.t.WTqQ5e),
        className: s()(b.customColorPicker, S),
        children: P
    });
});
function C(e) {
    let { className: t, defaultColor: n, customColor: i, colors: a, value: u, disabled: c, onChange: d, renderDefaultButton: f, renderCustomButton: _, colorContainerClassName: p } = e,
        h = (e) =>
            (0, r.jsx)('div', {
                className: b.colorPickerRow,
                children: e.map((e) =>
                    (0, r.jsx)(
                        S,
                        {
                            color: e,
                            isSelected: e === u,
                            onClick: d,
                            disabled: c
                        },
                        e
                    )
                )
            }),
        m = a.slice(0, a.length / 2),
        g = a.slice(a.length / 2, a.length),
        E = (0, l.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: T,
            scrollToEnd: T
        });
    return (0, r.jsx)(o.bG, {
        navigator: E,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                let { ref: a, ...o } = e;
                return (0, r.jsxs)('div', {
                    className: s()(b.container, t),
                    ref: a,
                    ...o,
                    children: [
                        (0, r.jsx)('div', {
                            className: s()(b.defaultContainer, p),
                            children: f({
                                value: u,
                                color: n,
                                onChange: d,
                                disabled: c
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: s()(b.customContainer, p),
                            children: _({
                                value: u,
                                customColor: i,
                                disabled: c
                            })
                        }),
                        (0, r.jsxs)('div', {
                            children: [h(m), h(g)]
                        })
                    ]
                });
            }
        })
    });
}
