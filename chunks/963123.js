n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120),
    n(653041);
var r,
    o,
    i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(100621),
    u = n(442837),
    d = n(692547),
    m = n(780384),
    p = n(481060),
    f = n(607070),
    v = n(70097),
    C = n(210887),
    g = n(866960),
    x = n(228488),
    h = n(617136),
    S = n(272008),
    E = n(497505),
    b = n(918701),
    j = n(184299),
    N = n(720293),
    _ = n(881773),
    T = n(355243),
    I = n(106743),
    k = n(528846),
    y = n(604162),
    B = n(747717),
    A = n(281055),
    L = n(981631),
    P = n(217702),
    D = n(388032),
    R = n(417575);
((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = 'USER_INTERACTION'), (o[(o.LOST_FOCUS = 1)] = 'LOST_FOCUS');
let M = new Set([L.IyS.FIVE_G, L.IyS.FOUR_G, L.IyS.UNKNOWN]),
    O = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function w() {
    let e = (0, u.e7)([C.Z], () => C.Z.getState().theme);
    return (0, i.jsx)('div', {
        className: R.pauseText,
        style: { background: (0, m.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, i.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: D.intl.string(D.t.U7Xrb2)
        })
    });
}
function F(e) {
    let { quest: t, className: n } = e,
        r = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == r
        ? null
        : (0, i.jsx)('img', {
              src: r.url,
              alt: 'Video thumbnail',
              className: s()(R.stillFrameImageCard, n)
          });
}
function Z(e) {
    let { title: t, subtitle: n, icon: r, onClick: o, className: a } = e,
        c = (0, u.e7)([C.Z], () => C.Z.getState().theme),
        [f, v] = l.useState(!1),
        g = () => {
            v(!0);
        },
        x = () => {
            v(!1);
        };
    return (0, i.jsx)(p.Clickable, {
        className: s()(R.endScreenPanel, R.accentOnHover, a),
        onMouseEnter: g,
        onMouseLeave: x,
        onFocus: g,
        onBlur: x,
        onClick: o,
        style: { background: (0, m.wj)(c) ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.55)' },
        children: (0, i.jsxs)('div', {
            className: R.endScreenPanelInner,
            children: [
                (0, i.jsxs)('div', {
                    className: R.endScreenPanelTextCont,
                    children: [
                        (0, i.jsx)(p.Heading, {
                            variant: 'heading-md/semibold',
                            children: t
                        }),
                        (0, i.jsx)(p.Heading, {
                            variant: 'heading-sm/normal',
                            color: 'text-normal',
                            children: n
                        })
                    ]
                }),
                (0, i.jsx)(B.Z, {}),
                (0, i.jsx)(r, {
                    size: 'md',
                    color: f ? d.Z.colors.INTERACTIVE_ACTIVE : d.Z.colors.INTERACTIVE_NORMAL,
                    className: R.endScreenIcon
                })
            ]
        })
    });
}
function G(e) {
    var t, n, r, o, a, d, m;
    let { quest: C, onOptimisticProgressUpdate: B, autoplay: L, parentTransitionState: G } = e,
        H = (0, j.km)((e) => e.transcriptEnabled),
        U = (0, j.km)((e) => e.setTranscriptEnabled),
        V = (0, j.km)((e) => e.captionEnabled),
        z = (0, j.km)((e) => e.setCaptionEnabled),
        q = (0, j.km)((e) => e.fullScreenEnabled),
        Y = (0, j.km)((e) => e.setFullScreenEnabled),
        { focused: W, focusedChanged: Q } = (0, A.xU)(),
        { visible: K, visibleChanged: X, targetRef: J } = (0, A.Yy)(),
        [$, ee] = l.useState(!0 === L ? k.r.PLAYING : k.r.PAUSED),
        [et, en] = l.useState(!1),
        er = (0, b.il)(C),
        [eo, ei] = l.useState(er.percentComplete),
        [el, ea] = l.useState(!1),
        [es, ec] = l.useState(!0),
        [eu, ed] = l.useState(!1),
        [em, ep] = l.useState([]),
        [ef, ev] = l.useState(g.Z.getEffectiveConnectionSpeed()),
        [eC, eg] = l.useState(0),
        [ex, eh] = l.useState(0),
        [eS, eE] = l.useState(!1),
        [eb, ej] = l.useState(!1),
        eN = (0, j.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[C.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        e_ = (0, j.km)((e) => e.setVideoProgress),
        eT = (0, j.km)((e) => e.muted),
        eI = (0, j.km)((e) => e.volume),
        ek = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        ey = (0, l.useRef)(null),
        eB = l.useRef(!0),
        eA = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eL = (0, j.km)((e) => e.transcript),
        [eP, eD] = l.useState(null),
        [eR, eM] = l.useState(null),
        eO = eA ? (null !== (a = null === (n = ey.current) || void 0 === n ? void 0 : n.duration) && void 0 !== a ? a : 0) : eN.maxTimestampSec;
    l.useLayoutEffect(() => {
        eB.current && ((eB.current = !1), ev(g.Z.getEffectiveConnectionSpeed()), eA && eN.timestampSec >= eN.duration && e_(C.id, 0, eN.duration));
    }, []),
        l.useEffect(() => {
            (G === p.ModalTransitionState.HIDDEN || G === p.ModalTransitionState.EXITING || G === p.ModalTransitionState.EXITED || (null != G && X && !K && !eA) || (Q && !W && !eA)) && null != ey.current && $ === k.r.PLAYING && (eH(!1), eD(1));
        }, [G, W, Q, K, X, $, eA]);
    let ew = () => {
            en(!0);
        },
        eF = () => {
            en(!1);
        },
        eZ = et || $ === k.r.PAUSED || $ === k.r.ENDED,
        eG = l.useCallback(() => {
            var e;
            let t = (0, x.fn)(null === (e = ey.current) || void 0 === e ? void 0 : e.parentNode, ey.current);
            null != t && !(0, x.rB)(t) && (t.removeEventListener(x.NO, eG), Y(!1));
        }, [Y]);
    l.useEffect(() => {
        let e = ey.current;
        return () => {
            let t = (0, x.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(x.NO, eG);
        };
    }, [eG]);
    let eH = (e) => {
            if (null != ey.current) e ? (ey.current.play(), eD(null)) : ey.current.pause(), ee(e ? k.r.PLAYING : k.r.PAUSED);
        },
        eU = l.useCallback(
            (e) => {
                if (null != ey.current) ea(!0), (ey.current.currentTime = e), e_(C.id, e, ey.current.duration);
            },
            [ey, e_, C]
        ),
        eV = () => {
            if (null != ey.current)
                switch ($) {
                    case k.r.ENDED:
                        eU(0), eH(!0);
                        break;
                    case k.r.PLAYING:
                        eH(!1);
                        break;
                    default:
                        eH(!0);
                }
        },
        ez = (e) => {
            eM(e);
        },
        eq = (e) => {
            eM((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eY = (e) => {
            if (null != ey.current && $ === k.r.PLAYING) es && ec(!1), eu && ed(!1), eH(!0);
        };
    l.useEffect(() => {
        if (!el) return;
        let e = setTimeout(() => {
            ea(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [el]);
    let eW = l.useCallback(() => {
            if (null != ey.current) eU(Math.max(ey.current.currentTime - 10, 0));
        }, [eU]),
        eQ = l.useCallback(() => {
            if (null != ey.current) eU(Math.min(ey.current.currentTime + 10, ey.current.duration));
        }, [eU]),
        [{ controlBarAnimSpring: eK }, eX] = (0, p.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
                ej(!1);
            },
            onRest: (e) => {
                1 === e.value && ej(!0);
            }
        })),
        eJ = (0, l.useRef)(null),
        [{ captionHeightSpring: e$ }, e0] = (0, p.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O
        }));
    l.useEffect(() => {
        var e, t;
        return (
            e0({
                captionHeightSpring: V && null != eR && null !== (t = null === (e = eJ.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: ek
            }),
            () => {
                e$.stop();
            }
        );
    }, [V, e0, ek, eR, e$]),
        l.useEffect(
            () => (
                eX({
                    controlBarAnimSpring: eZ || eS ? 1 : 0,
                    immediate: ek
                }),
                () => {
                    eK.stop();
                }
            ),
            [eZ, eX, ek, eS, eK]
        );
    let e1 = (e) => {
            !eA && (0, S.FI)(C.id, e);
        },
        e2 = $ === k.r.ENDED,
        e9 = l.useMemo(() => (M.has(ef) ? (0, N.z)(N.i.VIDEO_PLAYER_VIDEO, C) : (0, N.z)(N.i.VIDEO_PLAYER_VIDEO_LOW_RES, C)), [ef, C]),
        e4 = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, C), [C]),
        e6 = l.useMemo(() => (0, N.z)(N.i.VIDEO_PLAYER_CAPTION, C), [C]),
        e7 = eA || eN.maxTimestampSec >= (null !== (d = null === (r = ey.current) || void 0 === r ? void 0 : r.currentTime) && void 0 !== d ? d : 0) + 1;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(p.Clickable, {
            className: R.videoCont,
            'data-fullscreen': q,
            tabIndex: -1,
            onMouseEnter: ew,
            onMouseLeave: eF,
            onFocus: ew,
            onBlur: eF,
            children: [
                (0, i.jsx)(F, {
                    quest: C,
                    className: s()({ [R.stillFrameImageCardHidden]: !e2 })
                }),
                e2 && (0, i.jsx)('div', { className: R.videoContOverlay }),
                (0, i.jsxs)(v.Z, {
                    ref: (e) => {
                        (ey.current = e), (J.current = e);
                    },
                    autoPlay: L,
                    playsInline: !0,
                    mediaLayoutType: q ? P.hV.STATIC : P.hV.RESPONSIVE,
                    className: s()({
                        [R.hidden]: e2,
                        [R.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == e4 ? void 0 : e4.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null != ey.current) ey.current.currentTime >= eC && (eg(ey.current.currentTime + 10 + 5 * Math.random()), e1(ey.current.currentTime)), ey.current.currentTime >= ex && (eh(ey.current.currentTime + 1), (0, S.qm)(C.id, er.taskType, ey.current.currentTime), B(ey.current.currentTime)), e_(C.id, ey.current.currentTime, ey.current.duration), ei((ey.current.currentTime / ey.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ey.current && (e1(ey.current.duration + 1), e_(C.id, ey.current.duration, ey.current.duration)), ee(k.r.ENDED);
                    },
                    onLoadedData: (e) => {
                        es && ec(!1);
                    },
                    onLoadedMetadata: (e) => {
                        if (null == ey.current) return;
                        if ((eU(eN.timestampSec), eT ? (ey.current.volume = 0) : (ey.current.volume = eI), 0 === ey.current.textTracks.length)) return;
                        let t = ey.current.textTracks[0];
                        if (((t.mode = 'hidden'), null != t.cues))
                            for (let e = 0; e < t.cues.length; e++) {
                                let n = t.cues[e];
                                (0, y.JC)(n) && ((n.id = 'cue-'.concat(e)), (n.onenter = () => ez(n)), (n.onexit = () => eq(n)));
                            }
                    },
                    onWaiting: (e) => {
                        ed(!0);
                    },
                    onProgress: (e) => {
                        if (null == ey.current) return;
                        let t = [];
                        for (let e = 0; e < ey.current.buffered.length; e++) {
                            let n = ey.current.buffered.start(e),
                                r = ey.current.buffered.end(e);
                            if (!(r - n < 1))
                                t.push({
                                    start: n / ey.current.duration,
                                    size: (r - n) / ey.current.duration
                                });
                        }
                        ep(t);
                    },
                    onCanPlay: eY,
                    onCanPlayThrough: eY,
                    onClick: () => {
                        eV();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != e6 &&
                            (0, i.jsx)('track', {
                                src: e6.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != e9 &&
                            (0, i.jsx)('source', {
                                src: e9.url,
                                type: e9.mimetype
                            })
                    ]
                }),
                (es || eu) &&
                    (0, i.jsx)(p.Spinner, {
                        type: p.Spinner.Type.WANDERING_CUBES,
                        className: R.loadingSpinner
                    }),
                $ === k.r.PAUSED && 1 === eP && (0, i.jsx)(w, {}),
                H &&
                    $ !== k.r.ENDED &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(p.Clickable, {
                                onClick: () => U(!1),
                                children: (0, i.jsx)('div', { className: R.transcriptOverlay })
                            }),
                            (0, i.jsx)(c.animated.div, {
                                className: R.transcriptCont,
                                style: {
                                    marginBottom: (0, c.to)([eK, e$], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, i.jsx)(I.K, {
                                    quest: C,
                                    onClose: () => {
                                        U(!1);
                                    }
                                })
                            })
                        ]
                    }),
                $ === k.r.ENDED &&
                    (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(Z, {
                            title: D.intl.string(D.t.iiTtpK),
                            subtitle: D.intl.string(D.t.mxaHf3),
                            icon: p.LinkExternalMediumIcon,
                            className: R.endScreenPanelRight,
                            onClick: () => {
                                (0, h._3)({
                                    questId: C.id,
                                    questContent: E.jn.QUEST_BAR_V2,
                                    questContentCTA: h.jZ.LEARN_MORE
                                }),
                                    (0, b.FE)(C, {
                                        content: E.jn.QUEST_BAR_V2,
                                        ctaContent: h.jZ.LEARN_MORE
                                    });
                            }
                        })
                    }),
                (0, i.jsx)(c.animated.div, {
                    className: R.videoFooterContGradient,
                    style: {
                        opacity: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(e)
                        )
                    }
                }),
                (0, i.jsx)(
                    'div',
                    {
                        className: s()(R.playPausePopCont, {
                            [R.play]: $ === k.r.PLAYING,
                            [R.pause]: $ === k.r.PAUSED
                        }),
                        children: $ === k.r.PLAYING ? (0, i.jsx)(p.PlayIcon, { className: R.playPausePopIcon }) : (0, i.jsx)(p.PauseIcon, { className: R.playPausePopIcon })
                    },
                    $
                ),
                V &&
                    null != eR &&
                    (0, i.jsx)(c.animated.div, {
                        className: R.captionContainer,
                        ref: eJ,
                        style: {
                            translateY: (0, c.to)(
                                [
                                    eK.to({
                                        range: [0, 1],
                                        output: [0, -50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: R.captionText,
                            children: eR.text
                        })
                    }),
                (0, i.jsxs)(c.animated.div, {
                    className: R.videoFooterCont,
                    style: {
                        paddingLeft: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, i.jsx)(T.Z, {
                            percent: eo,
                            animate: !0 !== eB.current && !el,
                            interactionEnabled: eA && eb,
                            backgroundColor: eZ ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: eZ ? em : void 0,
                            duration: null !== (m = null === (o = ey.current) || void 0 === o ? void 0 : o.duration) && void 0 !== m ? m : 1,
                            maxSeekableTime: eZ && eb ? eO : void 0,
                            onClick: (e) => {
                                eU(e), $ === k.r.ENDED && eH(!0);
                            },
                            onScrubBack: eW,
                            onScrubForward: eQ
                        }),
                        (0, i.jsx)(c.animated.div, {
                            className: R.videoControlsCont,
                            style: {
                                paddingTop: (0, c.to)(
                                    [
                                        eK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, c.to)(
                                    [
                                        eK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, c.to)(
                                    [
                                        eK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, i.jsx)(_.Z, {
                                videoRef: ey,
                                playerState: $,
                                animSpring: eK,
                                visible: eZ,
                                seekForwardEnabled: e7,
                                hideCaptionButton: null == e6,
                                handlePlayPauseBtnClick: eV,
                                handleTranscriptBtnClick: () => {
                                    !H && (null == eL || eL.questId !== C.id || eL.fetchStatus === j.iF.NONE || eL.fetchStatus === j.iF.FAILURE) && (0, S.lL)(C), U(!H);
                                },
                                handleCaptionBtnClick: () => {
                                    z(!V);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !q,
                                        n = (0, x.fn)(null === (e = ey.current) || void 0 === e ? void 0 : e.parentNode, ey.current);
                                    t && null != n ? ((0, x.Dj)(n), n.addEventListener(x.NO, eG)) : !t && null != n && (n.removeEventListener(x.NO, eG), (0, x.Pr)(n)), Y(t);
                                },
                                handleSeekBackBtnClick: () => {
                                    if (null != ey.current) eU(Math.max(ey.current.currentTime - 10, 0));
                                },
                                handleSeekForwardBtnClick: () => {
                                    if (null != ey.current && !!e7) eU(Math.min(ey.current.currentTime + 10, eO));
                                },
                                handleControlBarPendingInteraction: eE
                            })
                        })
                    ]
                })
            ]
        })
    });
}
