n.d(t, {
    Z: function () {
        return W;
    }
}),
    n(47120);
var i,
    s,
    r,
    l,
    a = n(200651),
    o = n(192379),
    c = n(392711),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(37234),
    g = n(607070),
    p = n(578361),
    x = n(585483),
    S = n(557177),
    T = n(57562),
    E = n(955204),
    C = n(64078),
    _ = n(351780),
    f = n(954794),
    I = n(112843),
    N = n(524484),
    A = n(981631),
    b = n(388032),
    v = n(218768);
let j = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    O = (0, c.range)(0, 11),
    R = (0, c.range)(0, 2.25, 0.25),
    P = (0, c.range)(1, 11),
    D = (0, c.range)(1, 26);
((r = i || (i = {}))[(r.CONFETTI = 0)] = 'CONFETTI'), (r[(r.SHAKE = 1)] = 'SHAKE'), ((l = s || (s = {}))[(l.USER_SETTINGS = 0)] = 'USER_SETTINGS'), (l[(l.ACHIEVEMENT_LIST = 1)] = 'ACHIEVEMENT_LIST');
let y = () => [
        {
            location: N.Hn.CHAT_INPUT,
            title: b.intl.string(b.t.elTty8),
            description: b.intl.string(b.t.HtKfMj)
        },
        {
            location: N.Hn.REACTION,
            title: b.intl.string(b.t.Ik4VIS),
            description: b.intl.string(b.t.y4rqKy)
        },
        {
            location: N.Hn.MEMBER_USER,
            title: b.intl.string(b.t.ZXBlAg),
            description: b.intl.string(b.t['m9RD+f'])
        },
        {
            location: N.Hn.CALL_TILE,
            title: b.intl.string(b.t.V66giY),
            description: b.intl.string(b.t.fiHV7u)
        }
    ],
    B = () => [
        {
            location: N.oZ.CHAT_INPUT,
            title: b.intl.string(b.t.vUcvPD),
            description: b.intl.string(b.t.y00OrK)
        },
        {
            location: N.oZ.VOICE_USER,
            title: b.intl.string(b.t['TcRO5+']),
            description: b.intl.string(b.t.YJCxVV)
        },
        {
            location: N.oZ.MENTION,
            title: b.intl.string(b.t.oW4shI),
            description: b.intl.string(b.t['mqfw/P'])
        }
    ];
function L(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        r = n.map((e) =>
            (0, a.jsx)(
                m.FormSwitch,
                {
                    disabled: t,
                    value: i[e.location],
                    note: e.description,
                    onChange: (t) =>
                        s({
                            ...i,
                            [e.location]: t
                        }),
                    children: e.title
                },
                e.location
            )
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m.FormTitle, { children: b.intl.string(b.t.bWVN1N) }), r]
    });
}
function Z(e) {
    let { children: t } = e;
    return (0, a.jsx)(m.Text, {
        className: v.sliderDescription,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: t
    });
}
function F(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i
        } = e,
        s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion);
    return (0, a.jsx)(m.FormSwitch, {
        value: t,
        note: b.intl.string(b.t.KuYbWF),
        onChange: (e) => {
            !e && (0, T.T)(E.hn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, m.openModal)((e) =>
                          (0, a.jsx)(m.ConfirmModal, {
                              header: s ? b.intl.string(b.t['FxT+p6']) : b.intl.string(b.t.TAZ4Fx),
                              confirmText: b.intl.string(b.t.JFfinp),
                              cancelText: b.intl.string(b.t['ETE/oK']),
                              onConfirm: () =>
                                  i(
                                      s
                                          ? j
                                          : {
                                                enabled: !0,
                                                warningSeen: !0
                                            }
                                  ),
                              ...e,
                              children: (0, a.jsx)(m.Text, {
                                  variant: 'text-md/normal',
                                  children: s ? b.intl.string(b.t.gmixr6) : b.intl.string(b.t.jN3t3N)
                              })
                          })
                      )
                    : i({ enabled: e });
        },
        children: b.intl.string(b.t.vuiXm5)
    });
}
function M(e) {
    let {
            settings: { enabled: t, confettiEnabled: n, confettiCount: i, confettiSize: s, confettiEnabledLocations: r },
            updateSettings: l
        } = e,
        o = !t || !n;
    return (0, a.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: b.intl.string(b.t.mqxwJC),
        children: [
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t,
                value: n,
                note: b.intl.string(b.t.O1Vflp),
                onChange: (e) => l({ confettiEnabled: e }, 0),
                children: b.intl.string(b.t.s0KCgI)
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: o,
                title: b.intl.string(b.t['vd0D8/']),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: b.intl.string(b.t.a18Sur) }),
                    (0, a.jsx)(m.Slider, {
                        disabled: o,
                        markers: P,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: i,
                        onValueChange: (e) => l({ confettiCount: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: o,
                title: b.intl.string(b.t.sPO3io),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: b.intl.string(b.t.xoldVl) }),
                    (0, a.jsx)(m.Slider, {
                        disabled: o,
                        markers: D,
                        stickToMarkers: !0,
                        minValue: D[0],
                        maxValue: D[D.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ confettiSize: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, a.jsx)(L, {
                disabled: o,
                locations: y(),
                settingsLocations: r,
                onChange: (e) => l({ confettiEnabledLocations: e }, 0)
            })
        ]
    });
}
function k(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: r
        } = e,
        l = !t || !n;
    return (0, a.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: b.intl.string(b.t.Xz0olZ),
        children: [
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t,
                value: n,
                note: b.intl.string(b.t['31Z8ER']),
                onChange: (e) => r({ combosEnabled: e }),
                children: b.intl.string(b.t.o3iV7O)
            }),
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t,
                value: i,
                note: b.intl.string(b.t['9rgQEh']),
                onChange: (e) => r({ comboSoundsEnabled: e }),
                children: b.intl.string(b.t['Ax+Ioa'])
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: l,
                title: b.intl.string(b.t.L0oQur),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: b.intl.string(b.t['/OOFpK']) }),
                    (0, a.jsx)(m.Slider, {
                        disabled: l,
                        markers: O,
                        stickToMarkers: !0,
                        minValue: O[0],
                        maxValue: O[O.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ combosRequiredCount: e }),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, a.jsx)(m.FormDivider, { className: v.divider })
        ]
    });
}
function w(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: r
        } = e,
        l = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        o = !t || !n || l,
        c = (e, t) => {
            null != e.shakeIntensity && e.shakeIntensity > i && (0, T.T)(E.hn.MORE), r(e, t);
        };
    return (0, a.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: b.intl.string(b.t.wVS5SU),
        children: [
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t || l,
                tooltipNote: l ? b.intl.string(b.t.GckHGx) : null,
                value: n && !l,
                note: b.intl.string(b.t.Qq5W3t),
                onChange: (e) => r({ screenshakeEnabled: e }, 1),
                children: b.intl.string(b.t.N004zM)
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: o,
                title: b.intl.string(b.t.UxnnCw),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: b.intl.string(b.t.CEOEOT) }),
                    (0, a.jsx)(m.Slider, {
                        disabled: o,
                        markers: R,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: i,
                        onValueChange: (e) => c({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === R[R.length - 1] ? b.intl.string(b.t['4rbMWV']) : ''.concat(100 * e, '%'))
                    })
                ]
            }),
            (0, a.jsx)(L, {
                disabled: o,
                locations: B(),
                settingsLocations: s,
                onChange: (e) => r({ screenshakeEnabledLocations: e }, 1)
            })
        ]
    });
}
function U(e) {
    let { updateSettings: t } = e;
    return (0, a.jsx)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: b.intl.string(b.t.EuXv2t),
        children: (0, a.jsxs)(m.FormItem, {
            className: v.formItem,
            children: [
                (0, a.jsx)(m.FormText, {
                    className: v.formItem,
                    children: b.intl.string(b.t['1SLnkp'])
                }),
                (0, a.jsx)(m.Button, {
                    className: v.hideButton,
                    size: m.Button.Sizes.SMALL,
                    onClick: () => {
                        t({
                            enabled: !1,
                            settingsVisible: !1
                        }),
                            (0, h.xf)();
                    },
                    children: b.intl.string(b.t.qz65yc)
                })
            ]
        })
    });
}
function V(e) {
    let { onChangePage: t } = e;
    return (0, a.jsxs)(m.FormSection, {
        children: [
            (0, a.jsxs)(m.Clickable, {
                onClick: () => t(1),
                className: v.achievementContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: v.achievementIconContainer,
                        children: (0, a.jsx)(m.TrophyIcon, {
                            size: 'md',
                            color: u.Z.unsafe_rawColors.ORANGE_345.css
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: v.achievementTextContainer,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: b.intl.string(b.t['6jI0hY'])
                            }),
                            (0, a.jsx)(m.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: b.intl.string(b.t.GuUItb)
                            })
                        ]
                    }),
                    (0, a.jsx)(m.ChevronSmallRightIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        className: v.rightCaretIcon
                    })
                ]
            }),
            (0, a.jsx)(m.FormDivider, { className: v.divider })
        ]
    });
}
let G = () =>
    n
        .e('20467')
        .then(n.t.bind(n, 205663, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function Y(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, d.cj)([_.Z], () => _.Z.getState()),
        [s, r] = o.useState({
            x: 0,
            y: 0
        }),
        l = (0, I.Z)();
    function c(e, t, n, i) {
        return (null != t ? t : e) && (null != i ? i : n);
    }
    let u = (e) => {
            if (e.enabled && !1 === i.enabled) {
                var t;
                n(!0),
                    (0, S.GN)('poggermode_enabled'),
                    x.S.dispatch(A.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : i.shakeIntensity
                    });
            }
        },
        h = (e, t) => {
            if ((u(e), (0, C.AI)(e), null == t)) return;
            let n = c(i.confettiEnabled, e.confettiEnabled, i.enabled, e.enabled);
            0 === t && n && l.fire(s.x, s.y, { settings: e });
            let r = c(i.screenshakeEnabled, e.screenshakeEnabled, i.enabled, e.enabled);
            if (1 === t && r) {
                var a;
                x.S.dispatch(A.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null !== (a = e.shakeIntensity) && void 0 !== a ? a : i.shakeIntensity
                });
            }
        },
        g = (e) => {
            r({
                x: e.clientX,
                y: e.clientY
            });
        };
    return (
        o.useEffect(() => (window.addEventListener('mousemove', g), () => window.removeEventListener('mousemove', g)), []),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(m.Heading, {
                    variant: 'heading-lg/semibold',
                    className: v.title,
                    children: b.intl.string(b.t.AtCukJ)
                }),
                (0, a.jsx)(F, {
                    settings: i,
                    updateSettings: h
                }),
                (0, a.jsx)(V, { onChangePage: t }),
                (0, a.jsx)(k, {
                    settings: i,
                    updateSettings: h
                }),
                (0, a.jsx)(w, {
                    settings: i,
                    updateSettings: h
                }),
                (0, a.jsx)(M, {
                    settings: i,
                    updateSettings: h
                }),
                (0, a.jsx)(U, { updateSettings: h })
            ]
        })
    );
}
let H = (e, t, n) => {
        let i = (e) => () => {
            t(e);
        };
        switch (e) {
            case 0:
                return (0, a.jsx)(Y, {
                    onChangePage: i(1),
                    setShowEnableAnimation: n
                });
            case 1:
                return (0, a.jsx)(f.Z, { onBackClick: i(0) });
            default:
                return null;
        }
    },
    z = (e) => (0 === e ? p.n.LEFT : p.n.RIGHT);
function W() {
    let [e, t] = o.useState(0),
        [n, i] = o.useState(z(e)),
        [s, r] = o.useState(!1),
        l = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        c = s && !l;
    return (
        o.useEffect(() => {
            let t = setTimeout(() => {
                i(z(e));
            }, 500);
            return () => clearTimeout(t);
        }, [e]),
        o.useEffect(() => {
            Math.random() > 0.99 && (0, T.T)(E.hn.VISITOR_100);
        }, []),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(p.Z, {
                    className: v.slideAnimator,
                    step: e,
                    direction: n,
                    children: H(e, t, r)
                }),
                (0, a.jsx)('div', {
                    className: c ? v.enableAnimationOverlayVisible : v.enableAnimationOverlayHidden,
                    children: (0, a.jsx)(m.LottieAnimation, {
                        className: v.enableAnimation,
                        importData: G,
                        shouldAnimate: c,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => r(!1)
                    })
                })
            ]
        })
    );
}
