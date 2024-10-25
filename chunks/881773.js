t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var r = t(200651),
    o = t(192379),
    a = t(120356),
    s = t.n(a),
    i = t(100621),
    l = t(442837),
    c = t(692547),
    u = t(561779),
    d = t(481060),
    m = t(607070),
    p = t(184299),
    f = t(818570),
    _ = t(528846),
    C = t(604162),
    E = t(689938),
    v = t(417575);
let S = '-:--';
function T(e) {
    let { current: n, duration: t } = e,
        o = null != n ? (0, C.yv)(n) : S,
        a = null != t ? (0, C.yv)(t) : S;
    return (
        (o = o.padStart(a.length, '0')),
        (0, r.jsxs)('div', {
            className: s()(v.durationTimeWrapper, v.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: v.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: v.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: v.durationTimeDisplay,
                    children: a
                })
            ]
        })
    );
}
function g(e) {
    let { iconComponent: n, animationTime: t, visible: o, ariaLabel: a, active: l, disabled: u, tooltipLabel: m, tooltipDelayMs: p = 1500, onClick: f } = e,
        _ = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: f,
                className: s()(v.videoControlsBtnCont, { [v.videoControlsBtnContDisabled]: u }),
                'aria-label': a,
                'aria-disabled': u,
                children: (0, r.jsx)(i.animated.div, {
                    className: s()(v.videoControlsBtnCont),
                    style: {
                        opacity: (0, i.to)(
                            [
                                t.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(o ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(n, {
                        color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                        className: s()(v.controlsBarItem, {
                            [v.controlsBarItemActive]: l,
                            [v.videoControlsBtn]: !u
                        })
                    })
                })
            });
    return null != m
        ? (0, r.jsx)(d.Tooltip, {
              text: m,
              delay: p,
              children: (e) => _(e)
          })
        : _();
}
function x(e) {
    var n, t;
    let { videoRef: a, playerState: C, animSpring: S, visible: x, seekForwardEnabled: N, hideCaptionButton: h, handlePlayPauseBtnClick: I, handleTranscriptBtnClick: L, handleCaptionBtnClick: O, handleFullScreenBtnClick: j, handleSeekBackBtnClick: b, handleSeekForwardBtnClick: B, handleControlBarPendingInteraction: P } = e,
        k = (0, p.km)((e) => e.volume),
        y = (0, p.km)((e) => e.setVolume),
        R = (0, p.km)((e) => e.muted),
        D = (0, p.km)((e) => e.setMuted),
        A = (0, p.km)((e) => e.transcriptEnabled),
        M = (0, p.km)((e) => e.captionEnabled),
        Z = (0, p.km)((e) => e.fullScreenEnabled),
        U = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        [G, V] = o.useState(R ? 0 : k),
        [F, w] = o.useState(!1),
        [H, Q] = o.useState(!1),
        [{ volumeAnimSpring: z }, W] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        Y = (e) => {
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
            W({
                volumeAnimSpring: H || F ? 1 : 0,
                immediate: U
            }),
            () => {
                z.stop();
            }
        ),
        [H, F, W, U, z]
    );
    let X = 0 === G ? d.VoiceXIcon : G < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        J = C === _.r.ENDED ? d.RetryIcon : C === _.r.PLAYING ? d.PauseIcon : d.PlayIcon,
        $ = C === _.r.ENDED ? 'Replay' : C === _.r.PLAYING ? E.Z.Messages.PAUSE : E.Z.Messages.PLAY;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: s()(v.videoControlsGroup, v.videoControlsGroupStart),
                children: (0, r.jsx)(g, {
                    iconComponent: J,
                    animationTime: S,
                    visible: x,
                    ariaLabel: $,
                    onClick: I
                })
            }),
            (0, r.jsxs)(i.animated.div, {
                className: s()(v.videoControlsGroup, v.videoControlsGroupMid),
                style: {
                    opacity: (0, i.to)(
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
                        className: v.volumeControlGroup,
                        children: [
                            (0, r.jsx)(g, {
                                iconComponent: X,
                                animationTime: S,
                                visible: x,
                                onClick: () => {
                                    if (null != a.current) 0 === G ? (Y(k), D(!1)) : (y(G), Y(0), D(!0));
                                },
                                ariaLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME,
                                tooltipLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME
                            }),
                            (0, r.jsx)(i.animated.div, {
                                className: v.volumeSlider,
                                style: {
                                    opacity: (0, i.to)(
                                        [
                                            z.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(x ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, i.to)(
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
                                        Y(e), y(e), H && (Q(!1), P(!1)), R && e > 0 && D(!1);
                                    },
                                    asValueChanges: (e) => {
                                        Y(e), !H && (Q(!0), P(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_CHANGE_VOLUME
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        current: null == a ? void 0 : null === (n = a.current) || void 0 === n ? void 0 : n.currentTime,
                        duration: null == a ? void 0 : null === (t = a.current) || void 0 === t ? void 0 : t.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()(v.videoControlsGroup, v.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(g, {
                        iconComponent: d.ArrowAngleLeftUpIcon,
                        animationTime: S,
                        visible: x,
                        onClick: b,
                        ariaLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND,
                        tooltipLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_REWIND
                    }),
                    (0, r.jsx)(g, {
                        iconComponent: d.ArrowAngleRightUpIcon,
                        animationTime: S,
                        visible: x,
                        onClick: B,
                        disabled: !N,
                        ariaLabel: N ? E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP : E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                        tooltipLabel: N ? E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP : E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_SKIP_FORBIDDEN,
                        tooltipDelayMs: N ? 1500 : 0
                    }),
                    (0, r.jsx)(g, {
                        iconComponent: d.PaperIcon,
                        animationTime: S,
                        visible: x,
                        onClick: L,
                        active: A && C !== _.r.ENDED,
                        ariaLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT,
                        tooltipLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_TRANSCRIPT
                    }),
                    !h &&
                        (0, r.jsx)(g, {
                            iconComponent: f.c,
                            animationTime: S,
                            visible: x,
                            active: M,
                            onClick: O,
                            ariaLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION,
                            tooltipLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_CAPTION
                        }),
                    (0, r.jsx)(g, {
                        iconComponent: Z ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: S,
                        visible: x,
                        onClick: j,
                        ariaLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN,
                        tooltipLabel: E.Z.Messages.QUESTS_VIDEO_CONTROL_BTN_TOOLTIP_TOGGLE_FULLSCREEN
                    })
                ]
            })
        ]
    });
}
