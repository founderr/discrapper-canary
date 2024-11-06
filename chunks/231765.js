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
    C = n(955204),
    _ = n(64078),
    E = n(351780),
    f = n(954794),
    I = n(112843),
    N = n(524484),
    b = n(981631),
    A = n(388032),
    v = n(771830);
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
            title: A.intl.string(A.t.elTty8),
            description: A.intl.string(A.t.HtKfMj)
        },
        {
            location: N.Hn.REACTION,
            title: A.intl.string(A.t.Ik4VIS),
            description: A.intl.string(A.t.y4rqKy)
        },
        {
            location: N.Hn.MEMBER_USER,
            title: A.intl.string(A.t.ZXBlAg),
            description: A.intl.string(A.t['m9RD+f'])
        },
        {
            location: N.Hn.CALL_TILE,
            title: A.intl.string(A.t.V66giY),
            description: A.intl.string(A.t.fiHV7u)
        }
    ],
    B = () => [
        {
            location: N.oZ.CHAT_INPUT,
            title: A.intl.string(A.t.vUcvPD),
            description: A.intl.string(A.t.y00OrK)
        },
        {
            location: N.oZ.VOICE_USER,
            title: A.intl.string(A.t['TcRO5+']),
            description: A.intl.string(A.t.YJCxVV)
        },
        {
            location: N.oZ.MENTION,
            title: A.intl.string(A.t.oW4shI),
            description: A.intl.string(A.t['mqfw/P'])
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
        children: [(0, a.jsx)(m.FormTitle, { children: A.intl.string(A.t.bWVN1N) }), r]
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
        note: A.intl.string(A.t.KuYbWF),
        onChange: (e) => {
            !e && (0, T.T)(C.hn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, m.openModal)((e) =>
                          (0, a.jsx)(m.ConfirmModal, {
                              header: s ? A.intl.string(A.t['FxT+p6']) : A.intl.string(A.t.TAZ4Fx),
                              confirmText: A.intl.string(A.t.JFfinp),
                              cancelText: A.intl.string(A.t['ETE/oK']),
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
                                  children: s ? A.intl.string(A.t.gmixr6) : A.intl.string(A.t.jN3t3N)
                              })
                          })
                      )
                    : i({ enabled: e });
        },
        children: A.intl.string(A.t.vuiXm5)
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
        title: A.intl.string(A.t.mqxwJC),
        children: [
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t,
                value: n,
                note: A.intl.string(A.t.O1Vflp),
                onChange: (e) => l({ confettiEnabled: e }, 0),
                children: A.intl.string(A.t.s0KCgI)
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: o,
                title: A.intl.string(A.t['vd0D8/']),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: A.intl.string(A.t.a18Sur) }),
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
                title: A.intl.string(A.t.sPO3io),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: A.intl.string(A.t.xoldVl) }),
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
        title: A.intl.string(A.t.Xz0olZ),
        children: [
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t,
                value: n,
                note: A.intl.string(A.t['31Z8ER']),
                onChange: (e) => r({ combosEnabled: e }),
                children: A.intl.string(A.t.o3iV7O)
            }),
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t,
                value: i,
                note: A.intl.string(A.t['9rgQEh']),
                onChange: (e) => r({ comboSoundsEnabled: e }),
                children: A.intl.string(A.t['Ax+Ioa'])
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: l,
                title: A.intl.string(A.t.L0oQur),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: A.intl.string(A.t['/OOFpK']) }),
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
            null != e.shakeIntensity && e.shakeIntensity > i && (0, T.T)(C.hn.MORE), r(e, t);
        };
    return (0, a.jsxs)(m.FormSection, {
        tag: m.FormTitleTags.H1,
        title: A.intl.string(A.t.wVS5SU),
        children: [
            (0, a.jsx)(m.FormSwitch, {
                disabled: !t || l,
                tooltipNote: l ? A.intl.string(A.t.GckHGx) : null,
                value: n && !l,
                note: A.intl.string(A.t.Qq5W3t),
                onChange: (e) => r({ screenshakeEnabled: e }, 1),
                children: A.intl.string(A.t.N004zM)
            }),
            (0, a.jsxs)(m.FormItem, {
                disabled: o,
                title: A.intl.string(A.t.UxnnCw),
                className: v.formItem,
                children: [
                    (0, a.jsx)(Z, { children: A.intl.string(A.t.CEOEOT) }),
                    (0, a.jsx)(m.Slider, {
                        disabled: o,
                        markers: R,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: R[0],
                        maxValue: R[R.length - 1],
                        initialValue: i,
                        onValueChange: (e) => c({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === R[R.length - 1] ? A.intl.string(A.t['4rbMWV']) : ''.concat(100 * e, '%'))
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
        title: A.intl.string(A.t.EuXv2t),
        children: (0, a.jsxs)(m.FormItem, {
            className: v.formItem,
            children: [
                (0, a.jsx)(m.FormText, {
                    className: v.formItem,
                    children: A.intl.string(A.t['1SLnkp'])
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
                    children: A.intl.string(A.t.qz65yc)
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
                                children: A.intl.string(A.t['6jI0hY'])
                            }),
                            (0, a.jsx)(m.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: A.intl.string(A.t.GuUItb)
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
        i = (0, d.cj)([E.Z], () => E.Z.getState()),
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
                    x.S.dispatch(b.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : i.shakeIntensity
                    });
            }
        },
        h = (e, t) => {
            if ((u(e), (0, _.AI)(e), null == t)) return;
            let n = c(i.confettiEnabled, e.confettiEnabled, i.enabled, e.enabled);
            0 === t && n && l.fire(s.x, s.y, { settings: e });
            let r = c(i.screenshakeEnabled, e.screenshakeEnabled, i.enabled, e.enabled);
            if (1 === t && r) {
                var a;
                x.S.dispatch(b.CkL.SHAKE_APP, {
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
                    children: A.intl.string(A.t.AtCukJ)
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
            Math.random() > 0.99 && (0, T.T)(C.hn.VISITOR_100);
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
