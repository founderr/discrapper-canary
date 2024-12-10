n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(752877),
    a = n(442837),
    u = n(692547),
    c = n(561779),
    d = n(481060),
    m = n(607070),
    v = n(617136),
    p = n(184299),
    E = n(818570),
    f = n(957099),
    g = n(312729),
    C = n(223418),
    S = n(604162),
    x = n(981631),
    h = n(388032),
    _ = n(451680);
let T = '-:--',
    I = {
        [C.r.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS)
        },
        [C.r.PAUSED]: {
            icon: d.PlayIcon,
            label: h.intl.string(h.t.RscU7O)
        },
        [C.r.ENDED]: {
            icon: d.RetryIcon,
            label: h.intl.string(h.t.hsvh0t)
        }
    },
    D = (e, t) => {
        (0, v.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function N(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, S.yv)(t) : T,
        l = null != n ? (0, S.yv)(n) : T;
    return (
        (i = i.padStart(l.length, '0')),
        (0, r.jsxs)('div', {
            className: o()(_.durationTimeWrapper, _.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeDisplay,
                    children: i
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeDisplay,
                    children: l
                })
            ]
        })
    );
}
function j(e) {
    let { iconComponent: t, animationTime: n, visible: i, ariaLabel: l, active: a, disabled: c, tooltipLabel: m, tooltipDelayMs: v = 1500, onClick: p } = e,
        E = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: !0 === c ? void 0 : p,
                className: o()(_.videoControlsBtnCont, { [_.videoControlsBtnContDisabled]: c }),
                'aria-label': l,
                'aria-disabled': c,
                children: (0, r.jsx)(s.animated.div, {
                    className: o()(_.videoControlsBtnCont),
                    style: {
                        opacity: (0, s.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(i ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(t, {
                        color: !0 !== c ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                        className: o()(_.controlsBarItem, {
                            [_.controlsBarItemActive]: a,
                            [_.videoControlsBtn]: !c
                        })
                    })
                })
            });
    return null != m
        ? (0, r.jsx)(d.Tooltip, {
              text: m,
              delay: v,
              children: (e) => E(e)
          })
        : E();
}
function A(e) {
    var t, n;
    let { videoRef: l, quest: v, playerState: S, animSpring: x, visible: T, seekForwardEnabled: A, hideCaptionBtn: b, handlePlaybackBtnClick: L, handleTranscriptBtnClick: M, handleCaptionBtnClick: O, handleFullScreenBtnClick: k, handleSeekBackBtnClick: y, handleSeekForwardBtnClick: P, handleControlBarPendingInteraction: R } = e,
        w = (0, p.km)((e) => e.volume),
        Z = (0, p.km)((e) => e.setVolume),
        B = (0, p.km)((e) => e.muted),
        U = (0, p.km)((e) => e.setMuted),
        F = (0, p.km)((e) => e.transcriptEnabled),
        V = (0, p.km)((e) => e.captionEnabled),
        q = (0, p.km)((e) => e.fullScreenEnabled),
        G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        [z, H] = i.useState(B ? 0 : w),
        [Y, Q] = i.useState(!1),
        [W, K] = i.useState(!1),
        [{ volumeAnimSpring: X }, J] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        $ = (e) => {
            if (null != l.current) e !== l.current.volume && (l.current.volume = e), e !== z && H(e);
        },
        ee = () => {
            Q(!0);
        },
        et = () => {
            Q(!1);
        };
    i.useEffect(
        () => (
            J({
                volumeAnimSpring: W || Y ? 1 : 0,
                immediate: G
            }),
            () => {
                X.stop();
            }
        ),
        [W, Y, J, G, X]
    );
    let en = 0 === z ? d.VoiceXIcon : z < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: er, label: ei } = I[S];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: _.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: er,
                        animationTime: x,
                        visible: T,
                        ariaLabel: ei,
                        tooltipLabel: ei,
                        onClick: L
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: f.d,
                        animationTime: x,
                        visible: T,
                        onClick: y,
                        ariaLabel: h.intl.string(h.t.r9s3Ul),
                        tooltipLabel: h.intl.string(h.t.r9s3Ul)
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: g.o,
                        animationTime: x,
                        visible: T,
                        onClick: P,
                        disabled: !A,
                        ariaLabel: A ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipLabel: A ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipDelayMs: A ? 1500 : 0
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: o()(_.videoControlsGroup, _.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            x.to({
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
                            (0, r.jsx)(j, {
                                iconComponent: en,
                                animationTime: x,
                                visible: T,
                                onClick: () => {
                                    if (null != l.current) 0 === z ? ($(w), U(!1), D(v.id, w)) : (Z(z), $(0), U(!0), D(v.id, 0));
                                },
                                ariaLabel: h.intl.string(h.t['eIl+AA']),
                                tooltipLabel: h.intl.string(h.t['eIl+AA'])
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: _.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            X.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(T ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            X.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(c.i, {
                                    mini: !0,
                                    barStyles: {
                                        height: '5px',
                                        top: '10px'
                                    },
                                    grabberStyles: {
                                        marginTop: '-5px',
                                        backgroundColor: u.Z.colors.WHITE.css,
                                        cursor: 'pointer'
                                    },
                                    initialValue: z,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        $(e), Z(e), D(v.id, e), W && (K(!1), R(!1)), B && e > 0 && U(!1);
                                    },
                                    asValueChanges: (e) => {
                                        $(e), !W && (K(!0), R(!0));
                                    },
                                    fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': h.intl.string(h.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(N, {
                        current: null == l ? void 0 : null === (t = l.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == l ? void 0 : null === (n = l.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(_.videoControlsGroup, _.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: d.PaperIcon,
                        animationTime: x,
                        visible: T,
                        onClick: M,
                        active: F && S !== C.r.ENDED,
                        disabled: S === C.r.ENDED,
                        ariaLabel: h.intl.string(h.t.KCzjTk),
                        tooltipLabel: h.intl.string(h.t.KCzjTk)
                    }),
                    !b &&
                        (0, r.jsx)(j, {
                            iconComponent: E.c,
                            animationTime: x,
                            visible: T,
                            active: V,
                            onClick: O,
                            ariaLabel: h.intl.string(h.t.bDSZOz),
                            tooltipLabel: h.intl.string(h.t.bDSZOz)
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: q ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: x,
                        visible: T,
                        onClick: k,
                        ariaLabel: h.intl.string(h.t.vKZT5u),
                        tooltipLabel: h.intl.string(h.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
