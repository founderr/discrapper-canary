n.d(t, {
    Z: function () {
        return b;
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
    p = n(184299),
    f = n(818570),
    v = n(528846),
    C = n(604162),
    g = n(388032),
    x = n(417575);
let h = '-:--';
function S(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, C.yv)(t) : h,
        i = null != n ? (0, C.yv)(n) : h;
    return (
        (o = o.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: l()(x.durationTimeWrapper, x.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: x.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: x.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: x.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
function E(e) {
    let { iconComponent: t, animationTime: n, visible: o, ariaLabel: i, active: s, disabled: u, tooltipLabel: m, tooltipDelayMs: p = 1500, onClick: f } = e,
        v = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: f,
                className: l()(x.videoControlsBtnCont, { [x.videoControlsBtnContDisabled]: u }),
                'aria-label': i,
                'aria-disabled': u,
                children: (0, r.jsx)(a.animated.div, {
                    className: l()(x.videoControlsBtnCont),
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
                        className: l()(x.controlsBarItem, {
                            [x.controlsBarItemActive]: s,
                            [x.videoControlsBtn]: !u
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
function b(e) {
    var t, n;
    let { videoRef: i, playerState: C, animSpring: h, visible: b, seekForwardEnabled: j, hideCaptionButton: N, handlePlayPauseBtnClick: _, handleTranscriptBtnClick: T, handleCaptionBtnClick: I, handleFullScreenBtnClick: k, handleSeekBackBtnClick: y, handleSeekForwardBtnClick: B, handleControlBarPendingInteraction: A } = e,
        L = (0, p.km)((e) => e.volume),
        P = (0, p.km)((e) => e.setVolume),
        D = (0, p.km)((e) => e.muted),
        R = (0, p.km)((e) => e.setMuted),
        M = (0, p.km)((e) => e.transcriptEnabled),
        O = (0, p.km)((e) => e.captionEnabled),
        w = (0, p.km)((e) => e.fullScreenEnabled),
        F = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        [Z, G] = o.useState(D ? 0 : L),
        [H, U] = o.useState(!1),
        [V, z] = o.useState(!1),
        [{ volumeAnimSpring: q }, Y] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        W = (e) => {
            if (null != i.current) e !== i.current.volume && (i.current.volume = e), e !== Z && G(e);
        },
        Q = () => {
            U(!0);
        },
        K = () => {
            U(!1);
        };
    o.useEffect(
        () => (
            Y({
                volumeAnimSpring: V || H ? 1 : 0,
                immediate: F
            }),
            () => {
                q.stop();
            }
        ),
        [V, H, Y, F, q]
    );
    let X = 0 === Z ? d.VoiceXIcon : Z < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        J = C === v.r.ENDED ? d.RetryIcon : C === v.r.PLAYING ? d.PauseIcon : d.PlayIcon,
        $ = C === v.r.ENDED ? 'Replay' : C === v.r.PLAYING ? g.intl.string(g.t.ZcgDJS) : g.intl.string(g.t.RscU7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(x.videoControlsGroup, x.videoControlsGroupStart),
                children: (0, r.jsx)(E, {
                    iconComponent: J,
                    animationTime: h,
                    visible: b,
                    ariaLabel: $,
                    onClick: _
                })
            }),
            (0, r.jsxs)(a.animated.div, {
                className: l()(x.videoControlsGroup, x.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            h.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(b ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: Q,
                        onMouseLeave: K,
                        onFocus: Q,
                        onBlur: K,
                        className: x.volumeControlGroup,
                        children: [
                            (0, r.jsx)(E, {
                                iconComponent: X,
                                animationTime: h,
                                visible: b,
                                onClick: () => {
                                    if (null != i.current) 0 === Z ? (W(L), R(!1)) : (P(Z), W(0), R(!0));
                                },
                                ariaLabel: g.intl.string(g.t['eIl+AA']),
                                tooltipLabel: g.intl.string(g.t['eIl+AA'])
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: x.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            q.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(b ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            q.to({
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
                                    initialValue: Z,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        W(e), P(e), V && (z(!1), A(!1)), D && e > 0 && R(!1);
                                    },
                                    asValueChanges: (e) => {
                                        W(e), !V && (z(!0), A(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': g.intl.string(g.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(S, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(x.videoControlsGroup, x.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(E, {
                        iconComponent: d.ArrowAngleLeftUpIcon,
                        animationTime: h,
                        visible: b,
                        onClick: y,
                        ariaLabel: g.intl.string(g.t.r9s3Ul),
                        tooltipLabel: g.intl.string(g.t.r9s3Ul)
                    }),
                    (0, r.jsx)(E, {
                        iconComponent: d.ArrowAngleRightUpIcon,
                        animationTime: h,
                        visible: b,
                        onClick: B,
                        disabled: !j,
                        ariaLabel: j ? g.intl.string(g.t.zWDcND) : g.intl.string(g.t.xXh3y8),
                        tooltipLabel: j ? g.intl.string(g.t.zWDcND) : g.intl.string(g.t.xXh3y8),
                        tooltipDelayMs: j ? 1500 : 0
                    }),
                    (0, r.jsx)(E, {
                        iconComponent: d.PaperIcon,
                        animationTime: h,
                        visible: b,
                        onClick: T,
                        active: M && C !== v.r.ENDED,
                        ariaLabel: g.intl.string(g.t.KCzjTk),
                        tooltipLabel: g.intl.string(g.t.KCzjTk)
                    }),
                    !N &&
                        (0, r.jsx)(E, {
                            iconComponent: f.c,
                            animationTime: h,
                            visible: b,
                            active: O,
                            onClick: I,
                            ariaLabel: g.intl.string(g.t.bDSZOz),
                            tooltipLabel: g.intl.string(g.t.bDSZOz)
                        }),
                    (0, r.jsx)(E, {
                        iconComponent: w ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: h,
                        visible: b,
                        onClick: k,
                        ariaLabel: g.intl.string(g.t.vKZT5u),
                        tooltipLabel: g.intl.string(g.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
