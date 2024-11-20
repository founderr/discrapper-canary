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
    s = n(100621),
    a = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    f = n(617136),
    p = n(184299),
    v = n(818570),
    C = n(957099),
    g = n(312729),
    x = n(223418),
    S = n(604162),
    _ = n(981631),
    E = n(388032),
    h = n(417575);
let T = '-:--',
    I = {
        [x.r.PLAYING]: {
            icon: d.PauseIcon,
            label: E.intl.string(E.t.ZcgDJS)
        },
        [x.r.PAUSED]: {
            icon: d.PlayIcon,
            label: E.intl.string(E.t.RscU7O)
        },
        [x.r.ENDED]: {
            icon: d.RetryIcon,
            label: E.intl.string(E.t.hsvh0t)
        }
    },
    N = (e, t) => {
        (0, f.dA)({
            questId: e,
            event: _.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function b(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, S.yv)(t) : T,
        i = null != n ? (0, S.yv)(n) : T;
    return (
        (o = o.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: l()(h.durationTimeWrapper, h.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
function j(e) {
    let { iconComponent: t, animationTime: n, visible: o, ariaLabel: i, active: a, disabled: u, tooltipLabel: m, tooltipDelayMs: f = 1500, onClick: p } = e,
        v = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: p,
                className: l()(h.videoControlsBtnCont, { [h.videoControlsBtnContDisabled]: u }),
                'aria-label': i,
                'aria-disabled': u,
                children: (0, r.jsx)(s.animated.div, {
                    className: l()(h.videoControlsBtnCont),
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
                        className: l()(h.controlsBarItem, {
                            [h.controlsBarItemActive]: a,
                            [h.videoControlsBtn]: !u
                        })
                    })
                })
            });
    return null != m
        ? (0, r.jsx)(d.Tooltip, {
              text: m,
              delay: f,
              children: (e) => v(e)
          })
        : v();
}
function D(e) {
    var t, n;
    let { videoRef: i, quest: f, playerState: S, animSpring: _, visible: T, seekForwardEnabled: D, hideCaptionBtn: A, handlePlaybackBtnClick: y, handleTranscriptBtnClick: k, handleCaptionBtnClick: B, handleFullScreenBtnClick: L, handleSeekBackBtnClick: P, handleSeekForwardBtnClick: M, handleControlBarPendingInteraction: O } = e,
        R = (0, p.km)((e) => e.volume),
        w = (0, p.km)((e) => e.setVolume),
        F = (0, p.km)((e) => e.muted),
        Z = (0, p.km)((e) => e.setMuted),
        U = (0, p.km)((e) => e.transcriptEnabled),
        V = (0, p.km)((e) => e.captionEnabled),
        q = (0, p.km)((e) => e.fullScreenEnabled),
        G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
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
                immediate: G
            }),
            () => {
                X.stop();
            }
        ),
        [Q, Y, J, G, X]
    );
    let en = 0 === H ? d.VoiceXIcon : H < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: er, label: eo } = I[S];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: h.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: er,
                        animationTime: _,
                        visible: T,
                        ariaLabel: eo,
                        tooltipLabel: eo,
                        onClick: y
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: C.d,
                        animationTime: _,
                        visible: T,
                        onClick: P,
                        ariaLabel: E.intl.string(E.t.r9s3Ul),
                        tooltipLabel: E.intl.string(E.t.r9s3Ul)
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: g.o,
                        animationTime: _,
                        visible: T,
                        onClick: M,
                        disabled: !D,
                        ariaLabel: D ? E.intl.string(E.t.zWDcND) : E.intl.string(E.t.xXh3y8),
                        tooltipLabel: D ? E.intl.string(E.t.zWDcND) : E.intl.string(E.t.xXh3y8),
                        tooltipDelayMs: D ? 1500 : 0
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: l()(h.videoControlsGroup, h.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            _.to({
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
                        className: h.volumeControlGroup,
                        children: [
                            (0, r.jsx)(j, {
                                iconComponent: en,
                                animationTime: _,
                                visible: T,
                                onClick: () => {
                                    if (null != i.current) 0 === H ? ($(R), Z(!1), N(f.id, R)) : (w(H), $(0), Z(!0), N(f.id, 0));
                                },
                                ariaLabel: E.intl.string(E.t['eIl+AA']),
                                tooltipLabel: E.intl.string(E.t['eIl+AA'])
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: h.volumeSlider,
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
                                        $(e), w(e), N(f.id, e), Q && (K(!1), O(!1)), F && e > 0 && Z(!1);
                                    },
                                    asValueChanges: (e) => {
                                        $(e), !Q && (K(!0), O(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': E.intl.string(E.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(b, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(h.videoControlsGroup, h.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: d.PaperIcon,
                        animationTime: _,
                        visible: T,
                        onClick: k,
                        active: U && S !== x.r.ENDED,
                        disabled: S === x.r.ENDED,
                        ariaLabel: E.intl.string(E.t.KCzjTk),
                        tooltipLabel: E.intl.string(E.t.KCzjTk)
                    }),
                    !A &&
                        (0, r.jsx)(j, {
                            iconComponent: v.c,
                            animationTime: _,
                            visible: T,
                            active: V,
                            onClick: B,
                            ariaLabel: E.intl.string(E.t.bDSZOz),
                            tooltipLabel: E.intl.string(E.t.bDSZOz)
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: q ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: _,
                        visible: T,
                        onClick: L,
                        ariaLabel: E.intl.string(E.t.vKZT5u),
                        tooltipLabel: E.intl.string(E.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
