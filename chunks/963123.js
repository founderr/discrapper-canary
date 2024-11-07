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
    E = n(918701),
    S = n(184299),
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
        W = (0, S.km)((e) => e.transcriptEnabled),
        Y = (0, S.km)((e) => e.setTranscriptEnabled),
        Q = (0, S.km)((e) => e.captionEnabled),
        K = (0, S.km)((e) => e.setCaptionEnabled),
        X = (0, S.km)((e) => e.fullScreenEnabled),
        J = (0, S.km)((e) => e.setFullScreenEnabled),
        { focused: $, focusedChanged: ee } = (0, D.xU)(),
        { visible: et, visibleChanged: en, targetRef: er } = (0, D.Yy)(),
        [eo, ei] = o.useState(!0 === H ? I.r.PLAYING : I.r.PAUSED),
        [el, ea] = o.useState(!1),
        es = (0, E.il)(G),
        [ec, eu] = o.useState(es.percentComplete),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState(!0),
        [ev, eC] = o.useState(!1),
        [ex, eg] = o.useState([]),
        [eh, eE] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eS, e_] = o.useState(0),
        [ej, eT] = o.useState(0),
        [eN, eI] = o.useState(!1),
        [eb, ey] = o.useState(!1),
        eD = (0, S.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[G.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eB = (0, S.km)((e) => e.setVideoProgress),
        ek = (0, S.km)((e) => e.muted),
        eA = (0, S.km)((e) => e.volume),
        eL = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        eM = (0, o.useRef)(null),
        eO = (0, o.useRef)(null),
        eP = o.useRef(!0),
        eR = (null === (t = G.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eZ = (0, S.km)((e) => e.transcript),
        [ew, eF] = o.useState(null),
        [eU, eV] = o.useState(null),
        eG = eR ? (null !== (y = null === (n = eM.current) || void 0 === n ? void 0 : n.duration) && void 0 !== y ? y : 0) : eD.maxTimestampSec;
    o.useLayoutEffect(() => {
        eP.current && ((eP.current = !1), eE(v.Z.getEffectiveConnectionSpeed()), eR && eD.timestampSec >= eD.duration && eB(G.id, 0, eD.duration));
    }, []),
        o.useEffect(() => {
            null != eM.current &&
                null != ew &&
                (0, x.dA)({
                    questId: G.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eM.current.currentTime,
                        reason: ew
                    }
                });
        }, [ew, G.id]),
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
            (z === d.ModalTransitionState.HIDDEN || z === d.ModalTransitionState.EXITING || z === d.ModalTransitionState.EXITED || (null != z && en && !et && !eR) || (ee && !$ && !eR)) && null != eM.current && eo === I.r.PLAYING && (eY(!1), eF(I.y.LOST_FOCUS));
        }, [z, $, ee, et, en, eo, eR]);
    let eq = () => {
            ea(!0);
        },
        eH = () => {
            ea(!1);
        },
        ez = el || eo === I.r.PAUSED || eo === I.r.ENDED,
        eW = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(null === (e = eM.current) || void 0 === e ? void 0 : e.parentNode, eM.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, eW),
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
            null != t && t.removeEventListener(C.NO, eW);
        };
    }, [eW]);
    let eY = (e) => {
            null != eM.current && (e ? (eM.current.play(), eF(null)) : eM.current.pause(), ei(e ? I.r.PLAYING : I.r.PAUSED));
        },
        eQ = o.useCallback(
            (e) => {
                null != eM.current && (em(!0), (eM.current.currentTime = e), eB(G.id, e, eM.current.duration));
            },
            [eM, eB, G]
        ),
        eK = () => {
            if (null != eM.current)
                switch (eo) {
                    case I.r.ENDED:
                        eQ(0), eY(!0);
                        break;
                    case I.r.PLAYING:
                        eY(!1), eF(I.y.PAUSE_BUTTON);
                        break;
                    default:
                        eY(!0);
                }
        },
        eX = (e) => {
            eV(e);
        },
        eJ = (e) => {
            eV((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        e$ = o.useCallback(() => {
            if (null == eM.current || 0 === eM.current.textTracks.length) return;
            let e = eM.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => eX(n)), (n.onexit = () => eJ(n)));
                }
        }, [eM]);
    o.useEffect(() => {
        if (null == eO.current) return;
        let e = eO.current;
        return (
            e.addEventListener('load', e$),
            () => {
                null != e && e.removeEventListener('load', e$);
            }
        );
    }, [eO, e$]);
    let e0 = (e) => {
        null != eM.current && eo === I.r.PLAYING && (ep && ef(!1), ev && eC(!1), eY(!0));
    };
    o.useEffect(() => {
        if (!ed) return;
        let e = setTimeout(() => {
            em(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ed]);
    let e1 = o.useCallback(() => {
            if (null != eM.current) eQ(Math.max(eM.current.currentTime - 10, 0));
        }, [eQ]),
        e2 = o.useCallback(() => {
            if (null != eM.current) eQ(Math.min(eM.current.currentTime + 10, eM.current.duration));
        }, [eQ]),
        [{ controlBarAnimSpring: e7 }, e9] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
                ey(!1);
            },
            onRest: (e) => {
                1 === e.value && ey(!0);
            }
        })),
        e3 = (0, o.useRef)(null),
        [{ captionHeightSpring: e6 }, e4] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O
        }));
    o.useEffect(() => {
        var e, t;
        return (
            e4({
                captionHeightSpring: Q && null != eU && null !== (t = null === (e = e3.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eL
            }),
            () => {
                e6.stop();
            }
        );
    }, [Q, e4, eL, eU, e6]),
        o.useEffect(
            () => (
                e9({
                    controlBarAnimSpring: ez || eN ? 1 : 0,
                    immediate: eL
                }),
                () => {
                    e7.stop();
                }
            ),
            [ez, e9, eL, eN, e7]
        );
    let e8 = (e) => {
            !eR && (0, g.FI)(G.id, e),
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
        e5 = eo === I.r.ENDED,
        te = o.useMemo(() => (M.has(eh) ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, G) : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, G)), [eh, G]),
        tt = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, G), [G]),
        tn = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, G), [G]),
        tr = eR || eD.maxTimestampSec >= (null !== (w = null === (i = eM.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== w ? w : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: L.videoCont,
            'data-fullscreen': X,
            tabIndex: -1,
            onMouseEnter: eq,
            onMouseLeave: eH,
            onFocus: eq,
            onBlur: eH,
            children: (0, r.jsxs)('div', {
                className: L.videoContInnerRelative,
                children: [
                    (0, r.jsx)(R, {
                        quest: G,
                        className: l()({ [L.stillFrameImageCardHidden]: !e5 })
                    }),
                    e5 && (0, r.jsx)('div', { className: L.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eM.current = e), (er.current = e);
                        },
                        autoPlay: H,
                        playsInline: !0,
                        mediaLayoutType: X ? k.hV.STATIC : k.hV.RESPONSIVE,
                        className: l()({
                            [L.hidden]: e5,
                            [L.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tt ? void 0 : tt.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eM.current && (eM.current.currentTime >= eS && (e_(eM.current.currentTime + 10 + 5 * Math.random()), e8(eM.current.currentTime)), eM.current.currentTime >= ej && (eT(eM.current.currentTime + 1), (0, g.qm)(G.id, es.taskType, eM.current.currentTime), q(eM.current.currentTime)), eB(G.id, eM.current.currentTime, eM.current.duration), eu((eM.current.currentTime / eM.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eM.current && (e8(eM.current.duration + 1), eB(G.id, eM.current.duration, eM.current.duration)), ei(I.r.ENDED);
                        },
                        onLoadedData: (e) => {
                            ep && ef(!1);
                        },
                        onLoadedMetadata: (e) => {
                            null != eM.current && (eQ(eD.timestampSec), ek ? (eM.current.volume = 0) : (eM.current.volume = eA));
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
                        onCanPlay: e0,
                        onCanPlayThrough: e0,
                        onClick: () => {
                            eK();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tn &&
                                (0, r.jsx)('track', {
                                    ref: eO,
                                    src: tn.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != te &&
                                (0, r.jsx)('source', {
                                    src: te.url,
                                    type: te.mimetype
                                })
                        ]
                    }),
                    (ep || ev) &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: L.loadingSpinner
                        }),
                    eo === I.r.PAUSED && ew === I.y.LOST_FOCUS && (0, r.jsx)(P, {}),
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
                                        marginBottom: (0, a.to)([e7, e6], (e, t) => ''.concat(50 * e + t, 'px'))
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
                                        (0, E.FE)(G, {
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
                                    e7.to({
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
                        null != eU &&
                        (0, r.jsx)(a.animated.div, {
                            className: L.captionContainer,
                            ref: e3,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        e7.to({
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
                                children: eU.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: L.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    e7.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    e7.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    e7.to({
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
                                animate: !0 !== eP.current && !ed,
                                interactionEnabled: eR && eb,
                                backgroundColor: ez ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: ez ? ex : void 0,
                                duration: null !== (V = null === (f = eM.current) || void 0 === f ? void 0 : f.duration) && void 0 !== V ? V : 1,
                                maxSeekableTime: ez && eb ? eG : void 0,
                                onClick: (e) => {
                                    eQ(e), eo === I.r.ENDED && eY(!0);
                                },
                                onScrubBack: e1,
                                onScrubForward: e2
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: L.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            e7.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            e7.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            e7.to({
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
                                    animSpring: e7,
                                    visible: ez,
                                    seekForwardEnabled: tr,
                                    hideCaptionButton: null == tn,
                                    handlePlayPauseBtnClick: eK,
                                    handleTranscriptBtnClick: () => {
                                        !W && (null == eZ || eZ.questId !== G.id || eZ.fetchStatus === S.iF.NONE || eZ.fetchStatus === S.iF.FAILURE) && (0, g.lL)(G),
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
                                              n.addEventListener(C.NO, eW),
                                              (0, x.dA)({
                                                  questId: G.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(C.NO, eW),
                                              (0, x.dA)({
                                                  questId: G.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, C.Pr)(n)),
                                            J(t);
                                    },
                                    handleSeekBackBtnClick: () => {
                                        if (null != eM.current)
                                            eQ(Math.max(eM.current.currentTime - 10, 0)),
                                                (0, x._3)({
                                                    questId: G.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: x.jZ.SEEK_BACKWARD
                                                });
                                    },
                                    handleSeekForwardBtnClick: () => {
                                        if (null != eM.current && !!tr)
                                            eQ(Math.min(eM.current.currentTime + 10, eG)),
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
