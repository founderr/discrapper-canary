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
    p = n(617136),
    f = n(184299),
    v = n(818570),
    C = n(957099),
    g = n(312729),
    x = n(223418),
    h = n(604162),
    E = n(981631),
    S = n(388032),
    _ = n(417575);
let j = '-:--',
    T = (e, t) => {
        (0, p.dA)({
            questId: e,
            event: E.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function N(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, h.yv)(t) : j,
        i = null != n ? (0, h.yv)(n) : j;
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
function I(e) {
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
function b(e) {
    var t, n;
    let { videoRef: i, quest: p, playerState: h, animSpring: E, visible: j, seekForwardEnabled: b, hideCaptionButton: y, handlePlayPauseBtnClick: B, handleTranscriptBtnClick: D, handleCaptionBtnClick: k, handleFullScreenBtnClick: A, handleSeekBackBtnClick: L, handleSeekForwardBtnClick: M, handleControlBarPendingInteraction: O } = e,
        P = (0, f.km)((e) => e.volume),
        R = (0, f.km)((e) => e.setVolume),
        w = (0, f.km)((e) => e.muted),
        Z = (0, f.km)((e) => e.setMuted),
        F = (0, f.km)((e) => e.transcriptEnabled),
        U = (0, f.km)((e) => e.captionEnabled),
        V = (0, f.km)((e) => e.fullScreenEnabled),
        q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        [G, H] = o.useState(w ? 0 : P),
        [z, W] = o.useState(!1),
        [Y, Q] = o.useState(!1),
        [{ volumeAnimSpring: K }, X] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        J = (e) => {
            if (null != i.current) e !== i.current.volume && (i.current.volume = e), e !== G && H(e);
        },
        $ = () => {
            W(!0);
        },
        ee = () => {
            W(!1);
        };
    o.useEffect(
        () => (
            X({
                volumeAnimSpring: Y || z ? 1 : 0,
                immediate: q
            }),
            () => {
                K.stop();
            }
        ),
        [Y, z, X, q, K]
    );
    let et = 0 === G ? d.VoiceXIcon : G < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        en = h === x.r.ENDED ? d.RetryIcon : h === x.r.PLAYING ? d.PauseIcon : d.PlayIcon,
        er = h === x.r.ENDED ? 'Replay' : h === x.r.PLAYING ? S.intl.string(S.t.ZcgDJS) : S.intl.string(S.t.RscU7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: _.videoControlsGroup,
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: en,
                        animationTime: E,
                        visible: j,
                        ariaLabel: er,
                        onClick: B
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: C.d,
                        animationTime: E,
                        visible: j,
                        onClick: L,
                        ariaLabel: S.intl.string(S.t.r9s3Ul),
                        tooltipLabel: S.intl.string(S.t.r9s3Ul)
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: g.o,
                        animationTime: E,
                        visible: j,
                        onClick: M,
                        disabled: !b,
                        ariaLabel: b ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                        tooltipLabel: b ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                        tooltipDelayMs: b ? 1500 : 0
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
                        (e) => ''.concat(j ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: $,
                        onMouseLeave: ee,
                        onFocus: $,
                        onBlur: ee,
                        className: _.volumeControlGroup,
                        children: [
                            (0, r.jsx)(I, {
                                iconComponent: et,
                                animationTime: E,
                                visible: j,
                                onClick: () => {
                                    if (null != i.current) 0 === G ? (J(P), Z(!1), T(p.id, P)) : (R(G), J(0), Z(!0), T(p.id, 0));
                                },
                                ariaLabel: S.intl.string(S.t['eIl+AA']),
                                tooltipLabel: S.intl.string(S.t['eIl+AA'])
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: _.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            K.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(j ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            K.to({
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
                                        J(e), R(e), T(p.id, e), Y && (Q(!1), O(!1)), w && e > 0 && Z(!1);
                                    },
                                    asValueChanges: (e) => {
                                        J(e), !Y && (Q(!0), O(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': S.intl.string(S.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(N, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(_.videoControlsGroup, _.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: d.PaperIcon,
                        animationTime: E,
                        visible: j,
                        onClick: D,
                        active: F && h !== x.r.ENDED,
                        ariaLabel: S.intl.string(S.t.KCzjTk),
                        tooltipLabel: S.intl.string(S.t.KCzjTk)
                    }),
                    !y &&
                        (0, r.jsx)(I, {
                            iconComponent: v.c,
                            animationTime: E,
                            visible: j,
                            active: U,
                            onClick: k,
                            ariaLabel: S.intl.string(S.t.bDSZOz),
                            tooltipLabel: S.intl.string(S.t.bDSZOz)
                        }),
                    (0, r.jsx)(I, {
                        iconComponent: V ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: E,
                        visible: j,
                        onClick: A,
                        ariaLabel: S.intl.string(S.t.vKZT5u),
                        tooltipLabel: S.intl.string(S.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
