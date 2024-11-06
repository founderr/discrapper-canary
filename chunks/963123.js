n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(100621),
    s = n(442837),
    c = n(692547),
    u = n(780384),
    d = n(481060),
    m = n(607070),
    p = n(70097),
    f = n(210887),
    v = n(866960),
    C = n(228488),
    x = n(617136),
    g = n(272008),
    h = n(497505),
    S = n(918701),
    E = n(184299),
    _ = n(720293),
    j = n(881773),
    T = n(355243),
    N = n(106743),
    I = n(223418),
    b = n(604162),
    y = n(747717),
    D = n(281055),
    B = n(981631),
    k = n(217702),
    A = n(388032),
    L = n(417575);
let M = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
    O = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function P() {
    let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: L.pauseText,
        style: { background: (0, u.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: A.intl.string(A.t.U7Xrb2)
        })
    });
}
function R(e) {
    let { quest: t, className: n } = e,
        i = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)('img', {
              src: i.url,
              alt: 'Video thumbnail',
              className: l()(L.stillFrameImageCard, n)
          });
}
function Z(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: m } = e,
        p = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        [v, C] = o.useState(!1),
        x = () => {
            C(!0);
        },
        g = () => {
            C(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: l()(L.endScreenPanel, L.accentOnHover, m),
        onMouseEnter: x,
        onMouseLeave: g,
        onFocus: x,
        onBlur: g,
        onClick: a,
        style: { background: (0, u.wj)(p) ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.55)' },
        children: (0, r.jsxs)('div', {
            className: L.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: L.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            color: 'text-normal',
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(y.Z, {}),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: v ? c.Z.colors.INTERACTIVE_ACTIVE : c.Z.colors.INTERACTIVE_NORMAL,
                    className: L.endScreenIcon
                })
            ]
        })
    });
}
function w(e) {
    var t, n, i, c, u, f, y, w, F, U, V;
    let { quest: G, onOptimisticProgressUpdate: q, autoplay: H, parentTransitionState: z } = e,
        W = (0, E.km)((e) => e.transcriptEnabled),
        Y = (0, E.km)((e) => e.setTranscriptEnabled),
        Q = (0, E.km)((e) => e.captionEnabled),
        K = (0, E.km)((e) => e.setCaptionEnabled),
        X = (0, E.km)((e) => e.fullScreenEnabled),
        J = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: $, focusedChanged: ee } = (0, D.xU)(),
        { visible: et, visibleChanged: en, targetRef: er } = (0, D.Yy)(),
        [eo, ei] = o.useState(!0 === H ? I.r.PLAYING : I.r.PAUSED),
        [el, ea] = o.useState(!1),
        es = (0, S.il)(G),
        [ec, eu] = o.useState(es.percentComplete),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState(!0),
        [ev, eC] = o.useState(!1),
        [ex, eg] = o.useState([]),
        [eh, eS] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eE, e_] = o.useState(0),
        [ej, eT] = o.useState(0),
        [eN, eI] = o.useState(!1),
        [eb, ey] = o.useState(!1),
        eD = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[G.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eB = (0, E.km)((e) => e.setVideoProgress),
        ek = (0, E.km)((e) => e.muted),
        eA = (0, E.km)((e) => e.volume),
        eL = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        eM = (0, o.useRef)(null),
        eO = o.useRef(!0),
        eP = (null === (t = G.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eR = (0, E.km)((e) => e.transcript),
        [eZ, ew] = o.useState(null),
        [eF, eU] = o.useState(null),
        eV = eP ? (null !== (y = null === (n = eM.current) || void 0 === n ? void 0 : n.duration) && void 0 !== y ? y : 0) : eD.maxTimestampSec;
    o.useLayoutEffect(() => {
        eO.current && ((eO.current = !1), eS(v.Z.getEffectiveConnectionSpeed()), eP && eD.timestampSec >= eD.duration && eB(G.id, 0, eD.duration));
    }, []),
        o.useEffect(() => {
            null != eM.current &&
                null != eZ &&
                (0, x.dA)({
                    questId: G.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eM.current.currentTime,
                        reason: eZ
                    }
                });
        }, [eZ, G.id]),
        o.useEffect(() => {
            ee &&
                null != eM.current &&
                (0, x.dA)({
                    questId: G.id,
                    event: $ ? B.rMx.QUEST_VIDEO_APP_FOCUSED : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eM.current.currentTime,
                        video_state: eo
                    }
                });
        }, [$, ee, eo, G.id]),
        o.useEffect(() => {
            (z === d.ModalTransitionState.HIDDEN || z === d.ModalTransitionState.EXITING || z === d.ModalTransitionState.EXITED || (null != z && en && !et && !eP) || (ee && !$ && !eP)) && null != eM.current && eo === I.r.PLAYING && (eW(!1), ew(I.y.LOST_FOCUS));
        }, [z, $, ee, et, en, eo, eP]);
    let eG = () => {
            ea(!0);
        },
        eq = () => {
            ea(!1);
        },
        eH = el || eo === I.r.PAUSED || eo === I.r.ENDED,
        ez = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(null === (e = eM.current) || void 0 === e ? void 0 : e.parentNode, eM.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, ez),
                J(!1),
                (0, x.dA)({
                    questId: G.id,
                    event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [G.id, J]);
    o.useEffect(() => {
        let e = eM.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, ez);
        };
    }, [ez]);
    let eW = (e) => {
            if (null != eM.current) e ? (eM.current.play(), ew(null)) : eM.current.pause(), ei(e ? I.r.PLAYING : I.r.PAUSED);
        },
        eY = o.useCallback(
            (e) => {
                if (null != eM.current) em(!0), (eM.current.currentTime = e), eB(G.id, e, eM.current.duration);
            },
            [eM, eB, G]
        ),
        eQ = () => {
            if (null != eM.current)
                switch (eo) {
                    case I.r.ENDED:
                        eY(0), eW(!0);
                        break;
                    case I.r.PLAYING:
                        eW(!1), ew(I.y.PAUSE_BUTTON);
                        break;
                    default:
                        eW(!0);
                }
        },
        eK = (e) => {
            eU(e);
        },
        eX = (e) => {
            eU((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eJ = (e) => {
            if (null != eM.current && eo === I.r.PLAYING) ep && ef(!1), ev && eC(!1), eW(!0);
        };
    o.useEffect(() => {
        if (!ed) return;
        let e = setTimeout(() => {
            em(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ed]);
    let e$ = o.useCallback(() => {
            if (null != eM.current) eY(Math.max(eM.current.currentTime - 10, 0));
        }, [eY]),
        e0 = o.useCallback(() => {
            if (null != eM.current) eY(Math.min(eM.current.currentTime + 10, eM.current.duration));
        }, [eY]),
        [{ controlBarAnimSpring: e1 }, e2] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
                ey(!1);
            },
            onRest: (e) => {
                1 === e.value && ey(!0);
            }
        })),
        e7 = (0, o.useRef)(null),
        [{ captionHeightSpring: e9 }, e3] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O
        }));
    o.useEffect(() => {
        var e, t;
        return (
            e3({
                captionHeightSpring: Q && null != eF && null !== (t = null === (e = e7.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eL
            }),
            () => {
                e9.stop();
            }
        );
    }, [Q, e3, eL, eF, e9]),
        o.useEffect(
            () => (
                e2({
                    controlBarAnimSpring: eH || eN ? 1 : 0,
                    immediate: eL
                }),
                () => {
                    e1.stop();
                }
            ),
            [eH, e2, eL, eN, e1]
        );
    let e6 = (e) => {
            !eP && (0, g.FI)(G.id, e),
                null != eM.current &&
                    (0, x.dA)({
                        questId: G.id,
                        event: B.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: ec / 100,
                            video_timestamp_seconds: eM.current.currentTime
                        }
                    });
        },
        e4 = eo === I.r.ENDED,
        e8 = o.useMemo(() => (M.has(eh) ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, G) : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, G)), [eh, G]),
        e5 = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, G), [G]),
        te = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, G), [G]),
        tt = eP || eD.maxTimestampSec >= (null !== (w = null === (i = eM.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== w ? w : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: L.videoCont,
            'data-fullscreen': X,
            tabIndex: -1,
            onMouseEnter: eG,
            onMouseLeave: eq,
            onFocus: eG,
            onBlur: eq,
            children: (0, r.jsxs)('div', {
                className: L.videoContInnerRelative,
                children: [
                    (0, r.jsx)(R, {
                        quest: G,
                        className: l()({ [L.stillFrameImageCardHidden]: !e4 })
                    }),
                    e4 && (0, r.jsx)('div', { className: L.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eM.current = e), (er.current = e);
                        },
                        autoPlay: H,
                        playsInline: !0,
                        mediaLayoutType: X ? k.hV.STATIC : k.hV.RESPONSIVE,
                        className: l()({
                            [L.hidden]: e4,
                            [L.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == e5 ? void 0 : e5.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            if (null != eM.current) eM.current.currentTime >= eE && (e_(eM.current.currentTime + 10 + 5 * Math.random()), e6(eM.current.currentTime)), eM.current.currentTime >= ej && (eT(eM.current.currentTime + 1), (0, g.qm)(G.id, es.taskType, eM.current.currentTime), q(eM.current.currentTime)), eB(G.id, eM.current.currentTime, eM.current.duration), eu((eM.current.currentTime / eM.current.duration) * 100);
                        },
                        onEnded: (e) => {
                            null != eM.current && (e6(eM.current.duration + 1), eB(G.id, eM.current.duration, eM.current.duration)), ei(I.r.ENDED);
                        },
                        onLoadedData: (e) => {
                            ep && ef(!1);
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eM.current) return;
                            if ((eY(eD.timestampSec), ek ? (eM.current.volume = 0) : (eM.current.volume = eA), 0 === eM.current.textTracks.length)) return;
                            let t = eM.current.textTracks[0];
                            if (((t.mode = 'hidden'), null != t.cues))
                                for (let e = 0; e < t.cues.length; e++) {
                                    let n = t.cues[e];
                                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(e)), (n.onenter = () => eK(n)), (n.onexit = () => eX(n)));
                                }
                        },
                        onWaiting: (e) => {
                            eC(!0);
                        },
                        onProgress: (e) => {
                            if (null == eM.current) return;
                            let t = [];
                            for (let e = 0; e < eM.current.buffered.length; e++) {
                                let n = eM.current.buffered.start(e),
                                    r = eM.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eM.current.duration,
                                        size: (r - n) / eM.current.duration
                                    });
                            }
                            eg(t);
                        },
                        onCanPlay: eJ,
                        onCanPlayThrough: eJ,
                        onClick: () => {
                            eQ();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != te &&
                                (0, r.jsx)('track', {
                                    src: te.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e8 &&
                                (0, r.jsx)('source', {
                                    src: e8.url,
                                    type: e8.mimetype
                                })
                        ]
                    }),
                    (ep || ev) &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: L.loadingSpinner
                        }),
                    eo === I.r.PAUSED && eZ === I.y.LOST_FOCUS && (0, r.jsx)(P, {}),
                    W &&
                        eo !== I.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => Y(!1),
                                    children: (0, r.jsx)('div', { className: L.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: L.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([e1, e9], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(N.K, {
                                        quest: G,
                                        onClose: () => {
                                            Y(!1),
                                                (0, x._3)({
                                                    questId: G.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: x.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    eo === I.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(Z, {
                                title: null !== (F = null === (c = G.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== F ? F : A.intl.string(A.t.iiTtpK),
                                subtitle: null !== (U = null === (u = G.config.videoMetadata) || void 0 === u ? void 0 : u.messages.videoEndCtaSubtitle) && void 0 !== U ? U : A.intl.string(A.t.mxaHf3),
                                icon: d.LinkExternalMediumIcon,
                                className: L.endScreenPanelRight,
                                onClick: () => {
                                    (0, x._3)({
                                        questId: G.id,
                                        questContent: h.jn.VIDEO_MODAL,
                                        questContentCTA: x.jZ.LEARN_MORE
                                    }),
                                        (0, S.FE)(G, {
                                            content: h.jn.VIDEO_MODAL,
                                            ctaContent: x.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: L.videoFooterContGradient,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 1]
                                    })
                                ],
                                (e) => ''.concat(e)
                            )
                        }
                    }),
                    (0, r.jsx)(
                        'div',
                        {
                            className: l()(L.playPausePopCont, {
                                [L.play]: eo === I.r.PLAYING,
                                [L.pause]: eo === I.r.PAUSED
                            }),
                            children: eo === I.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: L.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: L.playPausePopIcon })
                        },
                        eo
                    ),
                    Q &&
                        null != eF &&
                        (0, r.jsx)(a.animated.div, {
                            className: L.captionContainer,
                            ref: e7,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        e1.to({
                                            range: [0, 1],
                                            output: [0, -50]
                                        })
                                    ],
                                    (e) => ''.concat(e, 'px')
                                )
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-lg/semibold',
                                color: 'always-white',
                                className: L.captionText,
                                children: eF.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: L.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(T.Z, {
                                percent: ec,
                                animate: !0 !== eO.current && !ed,
                                interactionEnabled: eP && eb,
                                backgroundColor: eH ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: eH ? ex : void 0,
                                duration: null !== (V = null === (f = eM.current) || void 0 === f ? void 0 : f.duration) && void 0 !== V ? V : 1,
                                maxSeekableTime: eH && eb ? eV : void 0,
                                onClick: (e) => {
                                    eY(e), eo === I.r.ENDED && eW(!0);
                                },
                                onScrubBack: e$,
                                onScrubForward: e0
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: L.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            e1.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            e1.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            e1.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(j.Z, {
                                    videoRef: eM,
                                    quest: G,
                                    playerState: eo,
                                    animSpring: e1,
                                    visible: eH,
                                    seekForwardEnabled: tt,
                                    hideCaptionButton: null == te,
                                    handlePlayPauseBtnClick: eQ,
                                    handleTranscriptBtnClick: () => {
                                        !W && (null == eR || eR.questId !== G.id || eR.fetchStatus === E.iF.NONE || eR.fetchStatus === E.iF.FAILURE) && (0, g.lL)(G),
                                            Y(!W),
                                            (0, x._3)({
                                                questId: G.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: W ? x.jZ.TRANSCRIPT_DISABLE : x.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        K(!Q),
                                            (0, x._3)({
                                                questId: G.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: Q ? x.jZ.CLOSED_CAPTIONING_DISABLE : x.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !X,
                                            n = (0, C.fn)(null === (e = eM.current) || void 0 === e ? void 0 : e.parentNode, eM.current);
                                        t && null != n
                                            ? ((0, C.Dj)(n),
                                              n.addEventListener(C.NO, ez),
                                              (0, x.dA)({
                                                  questId: G.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(C.NO, ez),
                                              (0, x.dA)({
                                                  questId: G.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, C.Pr)(n)),
                                            J(t);
                                    },
                                    handleSeekBackBtnClick: () => {
                                        if (null != eM.current)
                                            eY(Math.max(eM.current.currentTime - 10, 0)),
                                                (0, x._3)({
                                                    questId: G.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: x.jZ.SEEK_BACKWARD
                                                });
                                    },
                                    handleSeekForwardBtnClick: () => {
                                        if (null != eM.current && !!tt)
                                            eY(Math.min(eM.current.currentTime + 10, eV)),
                                                (0, x._3)({
                                                    questId: G.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: x.jZ.SEEK_FORWARD
                                                });
                                    },
                                    handleControlBarPendingInteraction: eI
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
