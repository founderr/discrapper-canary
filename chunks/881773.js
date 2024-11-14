n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(100621),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(617136),
    f = n(184299),
    v = n(818570),
    C = n(957099),
    g = n(312729),
    x = n(223418),
    S = n(604162),
    E = n(981631),
    h = n(388032),
    _ = n(417575);
let T = '-:--',
    I = {
        [x.r.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS)
        },
        [x.r.PAUSED]: {
            icon: d.PlayIcon,
            label: h.intl.string(h.t.RscU7O)
        },
        [x.r.ENDED]: {
            icon: d.RetryIcon,
            label: h.intl.string(h.t.hsvh0t)
        }
    },
    N = (e, t) => {
        (0, p.dA)({
            questId: e,
            event: E.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function j(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, S.yv)(t) : T,
        i = null != n ? (0, S.yv)(n) : T;
    return (
        (o = o.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: l()(_.durationTimeWrapper, _.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
function b(e) {
    let { iconComponent: t, animationTime: n, visible: o, ariaLabel: i, active: s, disabled: u, tooltipLabel: m, tooltipDelayMs: p = 1500, onClick: f } = e,
        v = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: f,
                className: l()(_.videoControlsBtnCont, { [_.videoControlsBtnContDisabled]: u }),
                'aria-label': i,
                'aria-disabled': u,
                children: (0, r.jsx)(a.animated.div, {
                    className: l()(_.videoControlsBtnCont),
                    style: {
                        opacity: (0, a.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(o ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(t, {
                        color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                        className: l()(_.controlsBarItem, {
                            [_.controlsBarItemActive]: s,
                            [_.videoControlsBtn]: !u
                        })
                    })
                })
            });
    return null != m
        ? (0, r.jsx)(d.Tooltip, {
              text: m,
              delay: p,
              children: (e) => v(e)
          })
        : v();
}
function D(e) {
    var t, n;
    let { videoRef: i, quest: p, playerState: S, animSpring: E, visible: T, seekForwardEnabled: D, hideCaptionBtn: y, handlePlaybackBtnClick: A, handleTranscriptBtnClick: k, handleCaptionBtnClick: B, handleFullScreenBtnClick: L, handleSeekBackBtnClick: P, handleSeekForwardBtnClick: M, handleControlBarPendingInteraction: O } = e,
        R = (0, f.km)((e) => e.volume),
        w = (0, f.km)((e) => e.setVolume),
        F = (0, f.km)((e) => e.muted),
        Z = (0, f.km)((e) => e.setMuted),
        U = (0, f.km)((e) => e.transcriptEnabled),
        G = (0, f.km)((e) => e.captionEnabled),
        V = (0, f.km)((e) => e.fullScreenEnabled),
        q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        [H, z] = o.useState(F ? 0 : R),
        [Y, W] = o.useState(!1),
        [Q, K] = o.useState(!1),
        [{ volumeAnimSpring: X }, J] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        $ = (e) => {
            if (null != i.current) e !== i.current.volume && (i.current.volume = e), e !== H && z(e);
        },
        ee = () => {
            W(!0);
        },
        et = () => {
            W(!1);
        };
    o.useEffect(
        () => (
            J({
                volumeAnimSpring: Q || Y ? 1 : 0,
                immediate: q
            }),
            () => {
                X.stop();
            }
        ),
        [Q, Y, J, q, X]
    );
    let en = 0 === H ? d.VoiceXIcon : H < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: er, label: eo } = I[S];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: _.videoControlsGroup,
                children: [
                    (0, r.jsx)(b, {
                        iconComponent: er,
                        animationTime: E,
                        visible: T,
                        ariaLabel: eo,
                        tooltipLabel: eo,
                        onClick: A
                    }),
                    (0, r.jsx)(b, {
                        iconComponent: C.d,
                        animationTime: E,
                        visible: T,
                        onClick: P,
                        ariaLabel: h.intl.string(h.t.r9s3Ul),
                        tooltipLabel: h.intl.string(h.t.r9s3Ul)
                    }),
                    (0, r.jsx)(b, {
                        iconComponent: g.o,
                        animationTime: E,
                        visible: T,
                        onClick: M,
                        disabled: !D,
                        ariaLabel: D ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipLabel: D ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipDelayMs: D ? 1500 : 0
                    })
                ]
            }),
            (0, r.jsxs)(a.animated.div, {
                className: l()(_.videoControlsGroup, _.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            E.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(T ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: ee,
                        onMouseLeave: et,
                        onFocus: ee,
                        onBlur: et,
                        className: _.volumeControlGroup,
                        children: [
                            (0, r.jsx)(b, {
                                iconComponent: en,
                                animationTime: E,
                                visible: T,
                                onClick: () => {
                                    if (null != i.current) 0 === H ? ($(R), Z(!1), N(p.id, R)) : (w(H), $(0), Z(!0), N(p.id, 0));
                                },
                                ariaLabel: h.intl.string(h.t['eIl+AA']),
                                tooltipLabel: h.intl.string(h.t['eIl+AA'])
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: _.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            X.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(T ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            X.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    barStyles: {
                                        height: '5px',
                                        top: '10px'
                                    },
                                    grabberStyles: {
                                        marginTop: '-5px',
                                        backgroundColor: c.Z.colors.WHITE.css,
                                        cursor: 'pointer'
                                    },
                                    initialValue: H,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        $(e), w(e), N(p.id, e), Q && (K(!1), O(!1)), F && e > 0 && Z(!1);
                                    },
                                    asValueChanges: (e) => {
                                        $(e), !Q && (K(!0), O(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': h.intl.string(h.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(j, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(_.videoControlsGroup, _.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(b, {
                        iconComponent: d.PaperIcon,
                        animationTime: E,
                        visible: T,
                        onClick: k,
                        active: U && S !== x.r.ENDED,
                        disabled: S === x.r.ENDED,
                        ariaLabel: h.intl.string(h.t.KCzjTk),
                        tooltipLabel: h.intl.string(h.t.KCzjTk)
                    }),
                    !y &&
                        (0, r.jsx)(b, {
                            iconComponent: v.c,
                            animationTime: E,
                            visible: T,
                            active: G,
                            onClick: B,
                            ariaLabel: h.intl.string(h.t.bDSZOz),
                            tooltipLabel: h.intl.string(h.t.bDSZOz)
                        }),
                    (0, r.jsx)(b, {
                        iconComponent: V ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: E,
                        visible: T,
                        onClick: L,
                        ariaLabel: h.intl.string(h.t.vKZT5u),
                        tooltipLabel: h.intl.string(h.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
