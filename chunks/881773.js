n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(100621),
    l = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(184299),
    f = n(818570),
    C = n(528846),
    _ = n(604162),
    v = n(689938),
    E = n(417575);
let S = '-:--';
function T(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, _.yv)(t) : S,
        a = null != n ? (0, _.yv)(n) : S;
    return (
        (o = o.padStart(a.length, '0')),
        (0, r.jsxs)('div', {
            className: i()(E.durationTimeWrapper, E.controlsBarItem),
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
                    children: a
                })
            ]
        })
    );
}
function g(e) {
    let { iconComponent: t, animationTime: n, visible: o, ariaLabel: a, active: l, disabled: u, tooltipLabel: m, tooltipDelayMs: p = 1500, onClick: f } = e,
        C = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: f,
                className: i()(E.videoControlsBtnCont, { [E.videoControlsBtnContDisabled]: u }),
                'aria-label': a,
                'aria-disabled': u,
                children: (0, r.jsx)(s.animated.div, {
                    className: i()(E.videoControlsBtnCont),
                    style: {
                        opacity: (0, s.to)(
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
                        className: i()(E.controlsBarItem, {
                            [E.controlsBarItemActive]: l,
                            [E.videoControlsBtn]: !u
                        })
                    })
                })
            });
    return null != m
        ? (0, r.jsx)(d.Tooltip, {
              text: m,
              delay: p,
              children: (e) => C(e)
          })
        : C();
}
function x(e) {
    var t, n;
    let { videoRef: a, playerState: _, animSpring: S, visible: x, seekForwardEnabled: N, hideCaptionButton: h, handlePlayPauseBtnClick: I, handleTranscriptBtnClick: O, handleCaptionBtnClick: b, handleFullScreenBtnClick: j, handleSeekBackBtnClick: L, handleSeekForwardBtnClick: B, handleControlBarPendingInteraction: k } = e,
        y = (0, p.km)((e) => e.volume),
        P = (0, p.km)((e) => e.setVolume),
        R = (0, p.km)((e) => e.muted),
        D = (0, p.km)((e) => e.setMuted),
        M = (0, p.km)((e) => e.transcriptEnabled),
        A = (0, p.km)((e) => e.captionEnabled),
        Z = (0, p.km)((e) => e.fullScreenEnabled),
        U = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        [G, V] = o.useState(R ? 0 : y),
        [F, w] = o.useState(!1),
        [H, Q] = o.useState(!1),
        [{ volumeAnimSpring: z }, Y] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        W = (e) => {
            if (null != a.current) e !== a.current.volume && (a.current.volume = e), e !== G && V(e);
        },
        q = () => {
            w(!0);
        },
        K = () => {
            w(!1);
        };
    o.useEffect(
        () => (
            Y({
                volumeAnimSpring: H || F ? 1 : 0,
                immediate: U
            }),
            () => {
                z.stop();
            }
        ),
        [H, F, Y, U, z]
    );
    let X = 0 === G ? d.VoiceXIcon : G < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        J = _ === C.r.ENDED ? d.RetryIcon : _ === C.r.PLAYING ? d.PauseIcon : d.PlayIcon,
        $ = _ === C.r.ENDED ? 'Replay' : _ === C.r.PLAYING ? v.Z.Messages.PAUSE : v.Z.Messages.PLAY;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: i()(E.videoControlsGroup, E.videoControlsGroupStart),
                children: (0, r.jsx)(g, {
                    iconComponent: J,
                    animationTime: S,
                    visible: x,
                    ariaLabel: $,
                    onClick: I
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(E.videoControlsGroup, E.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            S.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(x ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: q,
                        onMouseLeave: K,
                        onFocus: q,
                        onBlur: K,
                        className: E.volumeControlGroup,
                        children: [
                            (0, r.jsx)(g, {
                                iconComponent: X,
                                animationTime: S,
                                visible: x,
                                onClick: () => {
                                    if (null != a.current) 0 === G ? (W(y), D(!1)) : (P(G), W(0), D(!0));
                                },
                                ariaLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                                tooltipLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: E.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            z.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(x ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            z.to({
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
                                        W(e), P(e), H && (Q(!1), k(!1)), R && e > 0 && D(!1);
                                    },
                                    asValueChanges: (e) => {
                                        W(e), !H && (Q(!0), k(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        current: null == a ? void 0 : null === (t = a.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == a ? void 0 : null === (n = a.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i()(E.videoControlsGroup, E.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(g, {
                        iconComponent: d.ArrowAngleLeftUpIcon,
                        animationTime: S,
                        visible: x,
                        onClick: L,
                        ariaLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                        tooltipLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND
                    }),
                    (0, r.jsx)(g, {
                        iconComponent: d.ArrowAngleRightUpIcon,
                        animationTime: S,
                        visible: x,
                        onClick: B,
                        disabled: !N,
                        ariaLabel: N ? v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP : v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                        tooltipLabel: N ? v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP : v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                        tooltipDelayMs: N ? 1500 : 0
                    }),
                    (0, r.jsx)(g, {
                        iconComponent: d.PaperIcon,
                        animationTime: S,
                        visible: x,
                        onClick: O,
                        active: M && _ !== C.r.ENDED,
                        ariaLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT,
                        tooltipLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT
                    }),
                    !h &&
                        (0, r.jsx)(g, {
                            iconComponent: f.c,
                            animationTime: S,
                            visible: x,
                            active: A,
                            onClick: b,
                            ariaLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION,
                            tooltipLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION
                        }),
                    (0, r.jsx)(g, {
                        iconComponent: Z ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: S,
                        visible: x,
                        onClick: j,
                        ariaLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN,
                        tooltipLabel: v.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN
                    })
                ]
            })
        ]
    });
}
