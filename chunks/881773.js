n.d(t, {
    Z: function () {
        return b;
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
    C = n(312729),
    g = n(223418),
    S = n(604162),
    x = n(46140),
    h = n(981631),
    _ = n(388032),
    T = n(451680);
let N = '-:--',
    I = {
        [g.r.PLAYING]: {
            icon: d.PauseIcon,
            label: _.intl.string(_.t.ZcgDJS)
        },
        [g.r.PAUSED]: {
            icon: d.PlayIcon,
            label: _.intl.string(_.t.RscU7O)
        },
        [g.r.ENDED]: {
            icon: d.RetryIcon,
            label: _.intl.string(_.t.hsvh0t)
        }
    },
    D = (e, t) => {
        (0, v.dA)({
            questId: e,
            event: h.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function A(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, S.yv)(t) : N,
        l = null != n ? (0, S.yv)(n) : N;
    return (
        (i = i.padStart(l.length, '0')),
        (0, r.jsxs)('div', {
            className: o()(T.durationTimeWrapper, T.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeDisplay,
                    children: i
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeDisplay,
                    children: l
                })
            ]
        })
    );
}
let j = i.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: i, visible: l, ariaLabel: a, active: c, disabled: m, tooltipLabel: v, tooltipDelayMs: p = 1500, onClick: E } = e,
        f = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: !0 === m ? void 0 : E,
                className: o()(T.videoControlsBtnCont, { [T.videoControlsBtnContDisabled]: m }),
                'aria-label': a,
                'aria-disabled': m,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: o()(T.videoControlsBtnCont),
                    style: {
                        opacity: (0, s.to)(
                            [
                                i.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(l ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(n, {
                        color: !0 !== m ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                        className: o()(T.controlsBarItem, {
                            [T.controlsBarItemActive]: c,
                            [T.videoControlsBtn]: !m
                        })
                    })
                })
            });
    return null != v
        ? (0, r.jsx)(d.Tooltip, {
              text: v,
              delay: p,
              children: (e) => f(e)
          })
        : f();
});
function b(e) {
    var t, n;
    let { videoRef: l, quest: v, playerState: S, animSpring: h, visible: N, seekForwardEnabled: b, hideCaptionBtn: L, handlePlaybackBtnClick: k, handleTranscriptBtnClick: O, handleCaptionBtnClick: M, handleFullScreenBtnClick: y, handleSeekBackBtnClick: R, handleSeekForwardBtnClick: P, handleControlBarPendingInteraction: w } = e,
        B = (0, p.km)((e) => e.volume),
        U = (0, p.km)((e) => e.setVolume),
        Z = (0, p.km)((e) => e.muted),
        F = (0, p.km)((e) => e.setMuted),
        V = (0, p.km)((e) => e.transcriptEnabled),
        q = (0, p.km)((e) => e.captionEnabled),
        G = (0, p.km)((e) => e.fullScreenEnabled),
        Y = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        [z, H] = i.useState(Z ? 0 : B),
        [K, Q] = i.useState(!1),
        [W, X] = i.useState(!1),
        [{ volumeAnimSpring: J }, $] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        ee = i.useRef(null),
        et = i.useCallback(
            (e) => {
                if (null != l.current) e !== l.current.volume && (l.current.volume = e), e !== z && H(e);
            },
            [l, z]
        ),
        en = i.useCallback(() => {
            if (null != l.current) 0 === z ? (et(B), F(!1), D(v.id, B)) : (U(z), et(0), F(!0), D(v.id, 0));
        }, [l, z, B, F, U, et, v.id]),
        er = () => {
            Q(!0);
        },
        ei = () => {
            Q(!1);
        },
        el = i.useCallback(
            (e) => {
                switch (e.key) {
                    case x.Y1.PLAYBACK:
                        k();
                        break;
                    case x.Y1.SPACE:
                        let t = document.activeElement;
                        !((null == t ? void 0 : t.getAttribute('tabindex')) === '0' || (null == t ? void 0 : t.getAttribute('role')) === 'button' || (null == t ? void 0 : t.tagName) === 'BUTTON') && k();
                        break;
                    case x.Y1.SEEK_BACK:
                        R();
                        break;
                    case x.Y1.SEEK_FORWARD:
                        P();
                        break;
                    case x.Y1.CAPTION:
                        M();
                        break;
                    case x.Y1.FULLSCREEN:
                        y();
                        break;
                    case x.Y1.MUTE:
                        en();
                }
            },
            [M, y, k, R, P, en]
        );
    i.useEffect(() => {
        null != ee.current && ee.current.focus();
    }, []),
        i.useEffect(
            () => (
                $({
                    volumeAnimSpring: W || K ? 1 : 0,
                    immediate: Y
                }),
                () => {
                    J.stop();
                }
            ),
            [W, K, $, Y, J]
        ),
        i.useEffect(
            () => (
                window.addEventListener('keydown', el),
                () => {
                    window.removeEventListener('keydown', el);
                }
            ),
            [el]
        );
    let eo = 0 === z ? d.VoiceXIcon : z < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: es, label: ea } = I[S];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: T.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: es,
                        animationTime: h,
                        visible: N,
                        ariaLabel: ea,
                        tooltipLabel: ea,
                        onClick: k,
                        ref: ee
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: f.d,
                        animationTime: h,
                        visible: N,
                        onClick: R,
                        ariaLabel: _.intl.string(_.t.r9s3Ul),
                        tooltipLabel: _.intl.string(_.t.r9s3Ul)
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: C.o,
                        animationTime: h,
                        visible: N,
                        onClick: P,
                        disabled: !b,
                        ariaLabel: b ? _.intl.string(_.t.zWDcND) : _.intl.string(_.t.xXh3y8),
                        tooltipLabel: b ? _.intl.string(_.t.zWDcND) : _.intl.string(_.t.xXh3y8),
                        tooltipDelayMs: b ? 1500 : 0
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: o()(T.videoControlsGroup, T.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            h.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(N ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: er,
                        onMouseLeave: ei,
                        onFocus: er,
                        onBlur: ei,
                        className: T.volumeControlGroup,
                        children: [
                            (0, r.jsx)(j, {
                                iconComponent: eo,
                                animationTime: h,
                                visible: N,
                                onClick: en,
                                ariaLabel: _.intl.string(_.t['eIl+AA']),
                                tooltipLabel: _.intl.string(_.t['eIl+AA'])
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: T.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            J.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(N ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            J.to({
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
                                        et(e), U(e), D(v.id, e), W && (X(!1), w(!1)), Z && e > 0 && F(!1);
                                    },
                                    asValueChanges: (e) => {
                                        et(e), !W && (X(!0), w(!0));
                                    },
                                    fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': _.intl.string(_.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(A, {
                        current: null == l ? void 0 : null === (t = l.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == l ? void 0 : null === (n = l.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(T.videoControlsGroup, T.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: d.PaperIcon,
                        animationTime: h,
                        visible: N,
                        onClick: O,
                        active: V && S !== g.r.ENDED,
                        disabled: S === g.r.ENDED,
                        ariaLabel: _.intl.string(_.t.KCzjTk),
                        tooltipLabel: _.intl.string(_.t.KCzjTk)
                    }),
                    !L &&
                        (0, r.jsx)(j, {
                            iconComponent: E.c,
                            animationTime: h,
                            visible: N,
                            active: q,
                            onClick: M,
                            ariaLabel: _.intl.string(_.t.bDSZOz),
                            tooltipLabel: _.intl.string(_.t.bDSZOz)
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: G ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: h,
                        visible: N,
                        onClick: y,
                        ariaLabel: _.intl.string(_.t.vKZT5u),
                        tooltipLabel: _.intl.string(_.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
