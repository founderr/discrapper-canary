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
    E = n(184299),
    p = n(818570),
    f = n(957099),
    C = n(312729),
    S = n(223418),
    g = n(604162),
    x = n(46140),
    h = n(981631),
    _ = n(388032),
    T = n(451680);
let D = '-:--',
    I = {
        [S.rq.PLAYING]: {
            icon: d.PauseIcon,
            label: _.intl.string(_.t.ZcgDJS)
        },
        [S.rq.PAUSED]: {
            icon: d.PlayIcon,
            label: _.intl.string(_.t.RscU7O)
        },
        [S.rq.ENDED]: {
            icon: d.RetryIcon,
            label: _.intl.string(_.t.hsvh0t)
        }
    },
    N = (e, t) => {
        (0, v.dA)({
            questId: e,
            event: h.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function A(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, g.yv)(t) : D,
        l = null != n ? (0, g.yv)(n) : D;
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
    let { iconComponent: n, animationTime: i, visible: l, ariaLabel: a, active: c, disabled: m, tooltipLabel: v, tooltipDelayMs: E = 1500, onClick: p } = e,
        f = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: !0 === m ? void 0 : p,
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
              delay: E,
              children: (e) => f(e)
          })
        : f();
});
function b(e) {
    var t, n;
    let { videoRef: l, quest: v, playerState: g, animSpring: h, visible: D, seekForwardEnabled: b, hideCaptionBtn: L, handlePlaybackBtnClick: k, handleTranscriptBtnClick: R, handleCaptionBtnClick: O, handleFullScreenBtnClick: M, handleSeekBackBtnClick: y, handleSeekForwardBtnClick: P, handleControlBarPendingInteraction: q } = e,
        w = (0, E.km)((e) => e.volume),
        B = (0, E.km)((e) => e.setVolume),
        U = (0, E.km)((e) => e.muted),
        Z = (0, E.km)((e) => e.setMuted),
        F = (0, E.km)((e) => e.transcriptEnabled),
        V = (0, E.km)((e) => e.captionEnabled),
        Y = (0, E.km)((e) => e.fullScreenEnabled),
        G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        z = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [H, Q] = i.useState(U ? 0 : w),
        [K, W] = i.useState(!1),
        [X, J] = i.useState(!1),
        [{ volumeAnimSpring: $ }, ee] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        et = i.useRef(null),
        en = i.useCallback(
            (e) => {
                if (null != l.current) e !== l.current.volume && (l.current.volume = e), e !== H && Q(e);
            },
            [l, H]
        ),
        er = i.useCallback(() => {
            if (null != l.current) 0 === H ? (en(w), Z(!1), N(v.id, w)) : (B(H), en(0), Z(!0), N(v.id, 0));
        }, [l, H, w, Z, B, en, v.id]),
        ei = () => {
            W(!0);
        },
        el = () => {
            W(!1);
        },
        eo = i.useCallback(
            (e) => {
                switch (e.key) {
                    case x.Y1.PLAYBACK:
                        k();
                        break;
                    case x.Y1.SPACE:
                        !z && (e.preventDefault(), k());
                        break;
                    case x.Y1.SEEK_BACK:
                        y();
                        break;
                    case x.Y1.SEEK_FORWARD:
                        P();
                        break;
                    case x.Y1.CAPTION:
                        O();
                        break;
                    case x.Y1.FULLSCREEN:
                        M();
                        break;
                    case x.Y1.MUTE:
                        er();
                }
            },
            [O, M, k, y, P, er, z]
        );
    i.useEffect(() => {
        null != et.current && et.current.focus();
    }, []),
        i.useEffect(
            () => (
                ee({
                    volumeAnimSpring: X || K ? 1 : 0,
                    immediate: G
                }),
                () => {
                    $.stop();
                }
            ),
            [X, K, ee, G, $]
        ),
        i.useEffect(
            () => (
                window.addEventListener('keydown', eo),
                () => {
                    window.removeEventListener('keydown', eo);
                }
            ),
            [eo]
        );
    let es = 0 === H ? d.VoiceXIcon : H < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: ea, label: eu } = I[g];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: T.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: ea,
                        animationTime: h,
                        visible: D,
                        ariaLabel: eu,
                        tooltipLabel: eu,
                        onClick: k,
                        ref: et
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: f.d,
                        animationTime: h,
                        visible: D,
                        onClick: y,
                        ariaLabel: _.intl.string(_.t.r9s3Ul),
                        tooltipLabel: _.intl.string(_.t.r9s3Ul)
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: C.o,
                        animationTime: h,
                        visible: D,
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
                        (e) => ''.concat(D ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: ei,
                        onMouseLeave: el,
                        onFocus: ei,
                        onBlur: el,
                        className: T.volumeControlGroup,
                        children: [
                            (0, r.jsx)(j, {
                                iconComponent: es,
                                animationTime: h,
                                visible: D,
                                onClick: er,
                                ariaLabel: _.intl.string(_.t['eIl+AA']),
                                tooltipLabel: _.intl.string(_.t['eIl+AA'])
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: T.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            $.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(D ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            $.to({
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
                                    initialValue: H,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        en(e), B(e), N(v.id, e), X && (J(!1), q(!1)), U && e > 0 && Z(!1);
                                    },
                                    asValueChanges: (e) => {
                                        en(e), !X && (J(!0), q(!0));
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
                        visible: D,
                        onClick: R,
                        active: F && g !== S.rq.ENDED,
                        disabled: g === S.rq.ENDED,
                        ariaLabel: _.intl.string(_.t.KCzjTk),
                        tooltipLabel: _.intl.string(_.t.KCzjTk)
                    }),
                    !L &&
                        (0, r.jsx)(j, {
                            iconComponent: p.c,
                            animationTime: h,
                            visible: D,
                            active: V,
                            onClick: O,
                            ariaLabel: _.intl.string(_.t.bDSZOz),
                            tooltipLabel: _.intl.string(_.t.bDSZOz)
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: Y ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: h,
                        visible: D,
                        onClick: M,
                        ariaLabel: _.intl.string(_.t.vKZT5u),
                        tooltipLabel: _.intl.string(_.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
