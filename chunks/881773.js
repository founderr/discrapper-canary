n.d(t, {
    Z: function () {
        return j;
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
    C = n(223418),
    g = n(604162),
    x = n(981631),
    S = n(388032),
    E = n(417575);
let h = '-:--',
    _ = (e, t) => {
        (0, p.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function T(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, g.yv)(t) : h,
        i = null != n ? (0, g.yv)(n) : h;
    return (
        (o = o.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: l()(E.durationTimeWrapper, E.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: E.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: E.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: E.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
function I(e) {
    let { iconComponent: t, animationTime: n, visible: o, ariaLabel: i, active: s, disabled: u, tooltipLabel: m, tooltipDelayMs: p = 1500, onClick: f } = e,
        v = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: f,
                className: l()(E.videoControlsBtnCont, { [E.videoControlsBtnContDisabled]: u }),
                'aria-label': i,
                'aria-disabled': u,
                children: (0, r.jsx)(a.animated.div, {
                    className: l()(E.videoControlsBtnCont),
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
                        className: l()(E.controlsBarItem, {
                            [E.controlsBarItemActive]: s,
                            [E.videoControlsBtn]: !u
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
function j(e) {
    var t, n;
    let { videoRef: i, quest: p, playerState: g, animSpring: x, visible: h, seekForwardEnabled: j, hideCaptionButton: N, handlePlayPauseBtnClick: b, handleTranscriptBtnClick: D, handleCaptionBtnClick: y, handleFullScreenBtnClick: B, handleSeekBackBtnClick: k, handleSeekForwardBtnClick: A, handleControlBarPendingInteraction: L } = e,
        O = (0, f.km)((e) => e.volume),
        P = (0, f.km)((e) => e.setVolume),
        M = (0, f.km)((e) => e.muted),
        R = (0, f.km)((e) => e.setMuted),
        F = (0, f.km)((e) => e.transcriptEnabled),
        Z = (0, f.km)((e) => e.captionEnabled),
        U = (0, f.km)((e) => e.fullScreenEnabled),
        w = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        [G, V] = o.useState(M ? 0 : O),
        [q, H] = o.useState(!1),
        [z, W] = o.useState(!1),
        [{ volumeAnimSpring: Y }, Q] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        K = (e) => {
            if (null != i.current) e !== i.current.volume && (i.current.volume = e), e !== G && V(e);
        },
        X = () => {
            H(!0);
        },
        J = () => {
            H(!1);
        };
    o.useEffect(
        () => (
            Q({
                volumeAnimSpring: z || q ? 1 : 0,
                immediate: w
            }),
            () => {
                Y.stop();
            }
        ),
        [z, q, Q, w, Y]
    );
    let $ = 0 === G ? d.VoiceXIcon : G < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        ee = g === C.r.ENDED ? d.RetryIcon : g === C.r.PLAYING ? d.PauseIcon : d.PlayIcon,
        et = g === C.r.ENDED ? 'Replay' : g === C.r.PLAYING ? S.intl.string(S.t.ZcgDJS) : S.intl.string(S.t.RscU7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(E.videoControlsGroup, E.videoControlsGroupStart),
                children: (0, r.jsx)(I, {
                    iconComponent: ee,
                    animationTime: x,
                    visible: h,
                    ariaLabel: et,
                    onClick: b
                })
            }),
            (0, r.jsxs)(a.animated.div, {
                className: l()(E.videoControlsGroup, E.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            x.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(h ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: X,
                        onMouseLeave: J,
                        onFocus: X,
                        onBlur: J,
                        className: E.volumeControlGroup,
                        children: [
                            (0, r.jsx)(I, {
                                iconComponent: $,
                                animationTime: x,
                                visible: h,
                                onClick: () => {
                                    if (null != i.current) 0 === G ? (K(O), R(!1), _(p.id, O)) : (P(G), K(0), R(!0), _(p.id, 0));
                                },
                                ariaLabel: S.intl.string(S.t['eIl+AA']),
                                tooltipLabel: S.intl.string(S.t['eIl+AA'])
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: E.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            Y.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(h ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            Y.to({
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
                                    initialValue: G,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        K(e), P(e), _(p.id, e), z && (W(!1), L(!1)), M && e > 0 && R(!1);
                                    },
                                    asValueChanges: (e) => {
                                        K(e), !z && (W(!0), L(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': S.intl.string(S.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(E.videoControlsGroup, E.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: d.ArrowAngleLeftUpIcon,
                        animationTime: x,
                        visible: h,
                        onClick: k,
                        ariaLabel: S.intl.string(S.t.r9s3Ul),
                        tooltipLabel: S.intl.string(S.t.r9s3Ul)
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: d.ArrowAngleRightUpIcon,
                        animationTime: x,
                        visible: h,
                        onClick: A,
                        disabled: !j,
                        ariaLabel: j ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                        tooltipLabel: j ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                        tooltipDelayMs: j ? 1500 : 0
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: d.PaperIcon,
                        animationTime: x,
                        visible: h,
                        onClick: D,
                        active: F && g !== C.r.ENDED,
                        ariaLabel: S.intl.string(S.t.KCzjTk),
                        tooltipLabel: S.intl.string(S.t.KCzjTk)
                    }),
                    !N &&
                        (0, r.jsx)(I, {
                            iconComponent: v.c,
                            animationTime: x,
                            visible: h,
                            active: Z,
                            onClick: y,
                            ariaLabel: S.intl.string(S.t.bDSZOz),
                            tooltipLabel: S.intl.string(S.t.bDSZOz)
                        }),
                    (0, r.jsx)(I, {
                        iconComponent: U ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: x,
                        visible: h,
                        onClick: B,
                        ariaLabel: S.intl.string(S.t.vKZT5u),
                        tooltipLabel: S.intl.string(S.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
