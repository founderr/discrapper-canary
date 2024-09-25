t.d(s, {
    Z: function () {
        return K;
    }
}),
    t(47120);
var n,
    a,
    i,
    r,
    o = t(735250),
    l = t(470079),
    c = t(392711),
    d = t(442837),
    _ = t(692547),
    u = t(481060),
    E = t(37234),
    T = t(607070),
    S = t(578361),
    I = t(585483),
    N = t(557177),
    A = t(57562),
    C = t(955204),
    m = t(64078),
    g = t(351780),
    h = t(954794),
    O = t(112843),
    p = t(524484),
    R = t(981631),
    x = t(689938),
    f = t(771830);
let M = {
        enabled: !0,
        combosEnabled: !0,
        screenshakeEnabled: !1,
        confettiEnabled: !1
    },
    D = (0, c.range)(0, 11),
    P = (0, c.range)(0, 2.25, 0.25),
    L = (0, c.range)(1, 11),
    b = (0, c.range)(1, 26);
((i = n || (n = {}))[(i.CONFETTI = 0)] = 'CONFETTI'), (i[(i.SHAKE = 1)] = 'SHAKE'), ((r = a || (a = {}))[(r.USER_SETTINGS = 0)] = 'USER_SETTINGS'), (r[(r.ACHIEVEMENT_LIST = 1)] = 'ACHIEVEMENT_LIST');
let Z = () => [
        {
            location: p.Hn.CHAT_INPUT,
            title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED,
            description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
        },
        {
            location: p.Hn.REACTION,
            title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED,
            description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED_DESCRIPTION
        },
        {
            location: p.Hn.MEMBER_USER,
            title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED,
            description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED_DESCRIPTION
        },
        {
            location: p.Hn.CALL_TILE,
            title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED,
            description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED_DESCRIPTION
        }
    ],
    v = () => [
        {
            location: p.oZ.CHAT_INPUT,
            title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED,
            description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
        },
        {
            location: p.oZ.VOICE_USER,
            title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED,
            description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED_DESCRIPTION
        },
        {
            location: p.oZ.MENTION,
            title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED,
            description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED_DESCRIPTION
        }
    ];
function j(e) {
    let { disabled: s, locations: t, settingsLocations: n, onChange: a } = e,
        i = t.map((e) =>
            (0, o.jsx)(
                u.FormSwitch,
                {
                    disabled: s,
                    value: n[e.location],
                    note: e.description,
                    onChange: (s) =>
                        a({
                            ...n,
                            [e.location]: s
                        }),
                    children: e.title
                },
                e.location
            )
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(u.FormTitle, { children: x.Z.Messages.POGGERMODE_LOCATIONS }), i]
    });
}
function B(e) {
    let { children: s } = e;
    return (0, o.jsx)(u.Text, {
        className: f.sliderDescription,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: s
    });
}
function U(e) {
    let {
            settings: { enabled: s, warningSeen: t },
            updateSettings: n
        } = e,
        a = (0, d.e7)([T.Z], () => T.Z.useReducedMotion);
    return (0, o.jsx)(u.FormSwitch, {
        value: s,
        note: x.Z.Messages.POGGERMODE_ENABLE_DESCRIPTION,
        onChange: (e) => {
            !e && (0, A.T)(C.hn.DISABLE_POGGERMODE),
                e && (!t || a)
                    ? (0, u.openModal)((e) =>
                          (0, o.jsx)(u.ConfirmModal, {
                              header: a ? x.Z.Messages.POGGERMODE_WARNING_TITLE_REDUCED_MOTION : x.Z.Messages.POGGERMODE_WARNING_TITLE,
                              confirmText: x.Z.Messages.ENABLE,
                              cancelText: x.Z.Messages.CANCEL,
                              onConfirm: () =>
                                  n(
                                      a
                                          ? M
                                          : {
                                                enabled: !0,
                                                warningSeen: !0
                                            }
                                  ),
                              ...e,
                              children: (0, o.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  children: a ? x.Z.Messages.POGGERMODE_WARNING_BODY_REDUCED_MOTION : x.Z.Messages.POGGERMODE_WARNING_BODY
                              })
                          })
                      )
                    : n({ enabled: e });
        },
        children: x.Z.Messages.POGGERMODE_ENABLE
    });
}
function G(e) {
    let {
            settings: { enabled: s, confettiEnabled: t, confettiCount: n, confettiSize: a, confettiEnabledLocations: i },
            updateSettings: r
        } = e,
        l = !s || !t;
    return (0, o.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: x.Z.Messages.POGGERMODE_CONFETTI_CUSTOMIZATION,
        children: [
            (0, o.jsx)(u.FormSwitch, {
                disabled: !s,
                value: t,
                note: x.Z.Messages.POGGERMODE_CONFETTI_ENABLED_DESCRIPTION,
                onChange: (e) => r({ confettiEnabled: e }, 0),
                children: x.Z.Messages.POGGERMODE_CONFETTI_ENABLED
            }),
            (0, o.jsxs)(u.FormItem, {
                disabled: l,
                title: x.Z.Messages.POGGERMODE_CONFETTI_COUNT,
                className: f.formItem,
                children: [
                    (0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_CONFETTI_COUNT_DESCRIPTION }),
                    (0, o.jsx)(u.Slider, {
                        disabled: l,
                        markers: L,
                        stickToMarkers: !0,
                        minValue: L[0],
                        maxValue: L[L.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, o.jsxs)(u.FormItem, {
                disabled: l,
                title: x.Z.Messages.POGGERMODE_CONFETTI_SIZE,
                className: f.formItem,
                children: [
                    (0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_CONFETTI_SIZE_DESCRIPTION }),
                    (0, o.jsx)(u.Slider, {
                        disabled: l,
                        markers: b,
                        stickToMarkers: !0,
                        minValue: b[0],
                        maxValue: b[b.length - 1],
                        initialValue: a,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, o.jsx)(j, {
                disabled: l,
                locations: Z(),
                settingsLocations: i,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0)
            })
        ]
    });
}
function F(e) {
    let {
            settings: { enabled: s, combosEnabled: t, comboSoundsEnabled: n, combosRequiredCount: a },
            updateSettings: i
        } = e,
        r = !s || !t;
    return (0, o.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: x.Z.Messages.POGGERMODE_COMBOS_CUSTOMIZATION,
        children: [
            (0, o.jsx)(u.FormSwitch, {
                disabled: !s,
                value: t,
                note: x.Z.Messages.POGGERMODE_COMBOS_ENABLED_DESCRIPTION,
                onChange: (e) => i({ combosEnabled: e }),
                children: x.Z.Messages.POGGERMODE_COMBOS_ENABLED
            }),
            (0, o.jsx)(u.FormSwitch, {
                disabled: !s,
                value: n,
                note: x.Z.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED_DESCRIPTION,
                onChange: (e) => i({ comboSoundsEnabled: e }),
                children: x.Z.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED
            }),
            (0, o.jsxs)(u.FormItem, {
                disabled: r,
                title: x.Z.Messages.POGGERMODE_COMBOS_REQUIRED,
                className: f.formItem,
                children: [
                    (0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_COMBOS_REQUIRED_DESCRIPTION }),
                    (0, o.jsx)(u.Slider, {
                        disabled: r,
                        markers: D,
                        stickToMarkers: !0,
                        minValue: D[0],
                        maxValue: D[D.length - 1],
                        initialValue: a,
                        onValueChange: (e) => i({ combosRequiredCount: e }),
                        onValueRender: (e) => ''.concat(e)
                    })
                ]
            }),
            (0, o.jsx)(u.FormDivider, { className: f.divider })
        ]
    });
}
function y(e) {
    let {
            settings: { enabled: s, screenshakeEnabled: t, shakeIntensity: n, screenshakeEnabledLocations: a },
            updateSettings: i
        } = e,
        r = (0, d.e7)([T.Z], () => T.Z.useReducedMotion),
        l = !s || !t || r,
        c = (e, s) => {
            null != e.shakeIntensity && e.shakeIntensity > n && (0, A.T)(C.hn.MORE), i(e, s);
        };
    return (0, o.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: x.Z.Messages.POGGERMODE_SCREENSHAKE_CUSTOMIZATION,
        children: [
            (0, o.jsx)(u.FormSwitch, {
                disabled: !s || r,
                tooltipNote: r ? x.Z.Messages.POGGERMODE_SCREENSHAKE_DISABLED_REDUCED_MOTION : null,
                value: t && !r,
                note: x.Z.Messages.POGGERMODE_SCREENSHAKE_ENABLED_DESCRIPTION,
                onChange: (e) => i({ screenshakeEnabled: e }, 1),
                children: x.Z.Messages.POGGERMODE_SCREENSHAKE_ENABLED
            }),
            (0, o.jsxs)(u.FormItem, {
                disabled: l,
                title: x.Z.Messages.POGGERMODE_SCREENSHAKE,
                className: f.formItem,
                children: [
                    (0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_SCREENSHAKE_DESCRIPTION }),
                    (0, o.jsx)(u.Slider, {
                        disabled: l,
                        markers: P,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: P[0],
                        maxValue: P[P.length - 1],
                        initialValue: n,
                        onValueChange: (e) => c({ shakeIntensity: e }, 1),
                        onMarkerRender: (e) => (e === P[P.length - 1] ? x.Z.Messages.POGGERMODE_SCREENSHAKE_MAX : ''.concat(100 * e, '%'))
                    })
                ]
            }),
            (0, o.jsx)(j, {
                disabled: l,
                locations: v(),
                settingsLocations: a,
                onChange: (e) => i({ screenshakeEnabledLocations: e }, 1)
            })
        ]
    });
}
function V(e) {
    let { updateSettings: s } = e;
    return (0, o.jsx)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: x.Z.Messages.POGGERMODE_SETTINGS_CUSTOMIZATION,
        children: (0, o.jsxs)(u.FormItem, {
            className: f.formItem,
            children: [
                (0, o.jsx)(u.FormText, {
                    className: f.formItem,
                    children: x.Z.Messages.POGGERMODE_HIDE_SETTINGS_DESCRIPTION
                }),
                (0, o.jsx)(u.Button, {
                    className: f.hideButton,
                    size: u.Button.Sizes.SMALL,
                    onClick: () => {
                        s({
                            enabled: !1,
                            settingsVisible: !1
                        }),
                            (0, E.xf)();
                    },
                    children: x.Z.Messages.POGGERMODE_HIDE_SETTINGS
                })
            ]
        })
    });
}
function Y(e) {
    let { onChangePage: s } = e;
    return (0, o.jsxs)(u.FormSection, {
        children: [
            (0, o.jsxs)(u.Clickable, {
                onClick: () => s(1),
                className: f.achievementContainer,
                children: [
                    (0, o.jsx)('div', {
                        className: f.achievementIconContainer,
                        children: (0, o.jsx)(u.TrophyIcon, {
                            size: 'md',
                            color: _.Z.unsafe_rawColors.ORANGE_345.css
                        })
                    }),
                    (0, o.jsxs)('div', {
                        className: f.achievementTextContainer,
                        children: [
                            (0, o.jsx)(u.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: x.Z.Messages.POGGERMODE_ACHIEVEMENT_TITLE
                            }),
                            (0, o.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: x.Z.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
                            })
                        ]
                    }),
                    (0, o.jsx)(u.ChevronSmallRightIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        className: f.rightCaretIcon
                    })
                ]
            }),
            (0, o.jsx)(u.FormDivider, { className: f.divider })
        ]
    });
}
let w = () =>
    t
        .e('20467')
        .then(t.t.bind(t, 205663, 19))
        .then((e) => {
            let { default: s } = e;
            return s;
        });
function k(e) {
    let { onChangePage: s, setShowEnableAnimation: t } = e,
        n = (0, d.cj)([g.Z], () => g.Z.getState()),
        [a, i] = l.useState({
            x: 0,
            y: 0
        }),
        r = (0, O.Z)();
    function c(e, s, t, n) {
        return (null != s ? s : e) && (null != n ? n : t);
    }
    let _ = (e) => {
            if (e.enabled && !1 === n.enabled) {
                var s;
                t(!0),
                    (0, N.GN)('poggermode_enabled'),
                    I.S.dispatch(R.CkL.SHAKE_APP, {
                        duration: 2000,
                        intensity: null !== (s = e.shakeIntensity) && void 0 !== s ? s : n.shakeIntensity
                    });
            }
        },
        E = (e, s) => {
            if ((_(e), (0, m.AI)(e), null == s)) return;
            let t = c(n.confettiEnabled, e.confettiEnabled, n.enabled, e.enabled);
            0 === s && t && r.fire(a.x, a.y, { settings: e });
            let i = c(n.screenshakeEnabled, e.screenshakeEnabled, n.enabled, e.enabled);
            if (1 === s && i) {
                var o;
                I.S.dispatch(R.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: null !== (o = e.shakeIntensity) && void 0 !== o ? o : n.shakeIntensity
                });
            }
        },
        T = (e) => {
            i({
                x: e.clientX,
                y: e.clientY
            });
        };
    return (
        l.useEffect(() => (window.addEventListener('mousemove', T), () => window.removeEventListener('mousemove', T)), []),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(u.Heading, {
                    variant: 'heading-lg/semibold',
                    className: f.title,
                    children: x.Z.Messages.POGGERMODE
                }),
                (0, o.jsx)(U, {
                    settings: n,
                    updateSettings: E
                }),
                (0, o.jsx)(Y, { onChangePage: s }),
                (0, o.jsx)(F, {
                    settings: n,
                    updateSettings: E
                }),
                (0, o.jsx)(y, {
                    settings: n,
                    updateSettings: E
                }),
                (0, o.jsx)(G, {
                    settings: n,
                    updateSettings: E
                }),
                (0, o.jsx)(V, { updateSettings: E })
            ]
        })
    );
}
let H = (e, s, t) => {
        let n = (e) => () => {
            s(e);
        };
        switch (e) {
            case 0:
                return (0, o.jsx)(k, {
                    onChangePage: n(1),
                    setShowEnableAnimation: t
                });
            case 1:
                return (0, o.jsx)(h.Z, { onBackClick: n(0) });
            default:
                return null;
        }
    },
    W = (e) => (0 === e ? S.n.LEFT : S.n.RIGHT);
function K() {
    let [e, s] = l.useState(0),
        [t, n] = l.useState(W(e)),
        [a, i] = l.useState(!1),
        r = (0, d.e7)([T.Z], () => T.Z.useReducedMotion),
        c = a && !r;
    return (
        l.useEffect(() => {
            let s = setTimeout(() => {
                n(W(e));
            }, 500);
            return () => clearTimeout(s);
        }, [e]),
        l.useEffect(() => {
            Math.random() > 0.99 && (0, A.T)(C.hn.VISITOR_100);
        }, []),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(S.Z, {
                    className: f.slideAnimator,
                    step: e,
                    direction: t,
                    children: H(e, s, i)
                }),
                (0, o.jsx)('div', {
                    className: c ? f.enableAnimationOverlayVisible : f.enableAnimationOverlayHidden,
                    children: (0, o.jsx)(u.LottieAnimation, {
                        className: f.enableAnimation,
                        importData: w,
                        shouldAnimate: c,
                        autoplay: !1,
                        resetOnPlay: !0,
                        loop: !1,
                        onComplete: () => i(!1)
                    })
                })
            ]
        })
    );
}
