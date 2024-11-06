n.d(t, {
    Z: function () {
        return Z;
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
    g = n(617136),
    x = n(272008),
    S = n(497505),
    E = n(918701),
    h = n(184299),
    _ = n(720293),
    T = n(881773),
    I = n(355243),
    j = n(106743),
    N = n(223418),
    b = n(604162),
    D = n(747717),
    y = n(281055),
    B = n(981631),
    k = n(217702),
    A = n(388032),
    L = n(417575);
let O = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
    P = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function M() {
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
function F(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: m } = e,
        p = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        [v, C] = o.useState(!1),
        g = () => {
            C(!0);
        },
        x = () => {
            C(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: l()(L.endScreenPanel, L.accentOnHover, m),
        onMouseEnter: g,
        onMouseLeave: x,
        onFocus: g,
        onBlur: x,
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
                (0, r.jsx)(D.Z, {}),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: v ? c.Z.colors.INTERACTIVE_ACTIVE : c.Z.colors.INTERACTIVE_NORMAL,
                    className: L.endScreenIcon
                })
            ]
        })
    });
}
function Z(e) {
    var t, n, i, c, u, f, D, Z, U, w, G;
    let { quest: V, onOptimisticProgressUpdate: q, autoplay: H, parentTransitionState: z } = e,
        W = (0, h.km)((e) => e.transcriptEnabled),
        Y = (0, h.km)((e) => e.setTranscriptEnabled),
        Q = (0, h.km)((e) => e.captionEnabled),
        K = (0, h.km)((e) => e.setCaptionEnabled),
        X = (0, h.km)((e) => e.fullScreenEnabled),
        J = (0, h.km)((e) => e.setFullScreenEnabled),
        { focused: $, focusedChanged: ee } = (0, y.xU)(),
        { visible: et, visibleChanged: en, targetRef: er } = (0, y.Yy)(),
        [eo, ei] = o.useState(!0 === H ? N.r.PLAYING : N.r.PAUSED),
        [el, ea] = o.useState(!1),
        es = (0, E.il)(V),
        [ec, eu] = o.useState(es.percentComplete),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState(!0),
        [ev, eC] = o.useState(!1),
        [eg, ex] = o.useState([]),
        [eS, eE] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eh, e_] = o.useState(0),
        [eT, eI] = o.useState(0),
        [ej, eN] = o.useState(!1),
        [eb, eD] = o.useState(!1),
        ey = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[V.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eB = (0, h.km)((e) => e.setVideoProgress),
        ek = (0, h.km)((e) => e.muted),
        eA = (0, h.km)((e) => e.volume),
        eL = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        eO = (0, o.useRef)(null),
        eP = o.useRef(!0),
        eM = (null === (t = V.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eR = (0, h.km)((e) => e.transcript),
        [eF, eZ] = o.useState(null),
        [eU, ew] = o.useState(null),
        eG = eM ? (null !== (D = null === (n = eO.current) || void 0 === n ? void 0 : n.duration) && void 0 !== D ? D : 0) : ey.maxTimestampSec;
    o.useLayoutEffect(() => {
        eP.current && ((eP.current = !1), eE(v.Z.getEffectiveConnectionSpeed()), eM && ey.timestampSec >= ey.duration && eB(V.id, 0, ey.duration));
    }, []),
        o.useEffect(() => {
            null != eO.current &&
                null != eF &&
                (0, g.dA)({
                    questId: V.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eO.current.currentTime,
                        reason: eF
                    }
                });
        }, [eF, V.id]),
        o.useEffect(() => {
            ee &&
                null != eO.current &&
                (0, g.dA)({
                    questId: V.id,
                    event: $ ? B.rMx.QUEST_VIDEO_APP_FOCUSED : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eO.current.currentTime,
                        video_state: eo
                    }
                });
        }, [$, ee, eo, V.id]),
        o.useEffect(() => {
            (z === d.ModalTransitionState.HIDDEN || z === d.ModalTransitionState.EXITING || z === d.ModalTransitionState.EXITED || (null != z && en && !et && !eM) || (ee && !$ && !eM)) && null != eO.current && eo === N.r.PLAYING && (eW(!1), eZ(N.y.LOST_FOCUS));
        }, [z, $, ee, et, en, eo, eM]);
    let eV = () => {
            ea(!0);
        },
        eq = () => {
            ea(!1);
        },
        eH = el || eo === N.r.PAUSED || eo === N.r.ENDED,
        ez = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(null === (e = eO.current) || void 0 === e ? void 0 : e.parentNode, eO.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, ez),
                J(!1),
                (0, g.dA)({
                    questId: V.id,
                    event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [V.id, J]);
    o.useEffect(() => {
        let e = eO.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, ez);
        };
    }, [ez]);
    let eW = (e) => {
            if (null != eO.current) e ? (eO.current.play(), eZ(null)) : eO.current.pause(), ei(e ? N.r.PLAYING : N.r.PAUSED);
        },
        eY = o.useCallback(
            (e) => {
                if (null != eO.current) em(!0), (eO.current.currentTime = e), eB(V.id, e, eO.current.duration);
            },
            [eO, eB, V]
        ),
        eQ = () => {
            if (null != eO.current)
                switch (eo) {
                    case N.r.ENDED:
                        eY(0), eW(!0);
                        break;
                    case N.r.PLAYING:
                        eW(!1), eZ(N.y.PAUSE_BUTTON);
                        break;
                    default:
                        eW(!0);
                }
        },
        eK = (e) => {
            ew(e);
        },
        eX = (e) => {
            ew((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eJ = (e) => {
            if (null != eO.current && eo === N.r.PLAYING) ep && ef(!1), ev && eC(!1), eW(!0);
        };
    o.useEffect(() => {
        if (!ed) return;
        let e = setTimeout(() => {
            em(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ed]);
    let e$ = o.useCallback(() => {
            if (null != eO.current) eY(Math.max(eO.current.currentTime - 10, 0));
        }, [eY]),
        e0 = o.useCallback(() => {
            if (null != eO.current) eY(Math.min(eO.current.currentTime + 10, eO.current.duration));
        }, [eY]),
        [{ controlBarAnimSpring: e1 }, e2] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: P,
            onStart: () => {
                eD(!1);
            },
            onRest: (e) => {
                1 === e.value && eD(!0);
            }
        })),
        e9 = (0, o.useRef)(null),
        [{ captionHeightSpring: e4 }, e6] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: P
        }));
    o.useEffect(() => {
        var e, t;
        return (
            e6({
                captionHeightSpring: Q && null != eU && null !== (t = null === (e = e9.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eL
            }),
            () => {
                e4.stop();
            }
        );
    }, [Q, e6, eL, eU, e4]),
        o.useEffect(
            () => (
                e2({
                    controlBarAnimSpring: eH || ej ? 1 : 0,
                    immediate: eL
                }),
                () => {
                    e1.stop();
                }
            ),
            [eH, e2, eL, ej, e1]
        );
    let e3 = (e) => {
            !eM && (0, x.FI)(V.id, e),
                null != eO.current &&
                    (0, g.dA)({
                        questId: V.id,
                        event: B.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: ec / 100,
                            video_timestamp_seconds: eO.current.currentTime
                        }
                    });
        },
        e7 = eo === N.r.ENDED,
        e5 = o.useMemo(() => (O.has(eS) ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, V) : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, V)), [eS, V]),
        e8 = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, V), [V]),
        te = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, V), [V]),
        tt = eM || ey.maxTimestampSec >= (null !== (Z = null === (i = eO.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== Z ? Z : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: L.videoCont,
            'data-fullscreen': X,
            tabIndex: -1,
            onMouseEnter: eV,
            onMouseLeave: eq,
            onFocus: eV,
            onBlur: eq,
            children: (0, r.jsxs)('div', {
                className: L.videoContInnerRelative,
                children: [
                    (0, r.jsx)(R, {
                        quest: V,
                        className: l()({ [L.stillFrameImageCardHidden]: !e7 })
                    }),
                    e7 && (0, r.jsx)('div', { className: L.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eO.current = e), (er.current = e);
                        },
                        autoPlay: H,
                        playsInline: !0,
                        mediaLayoutType: X ? k.hV.STATIC : k.hV.RESPONSIVE,
                        className: l()({
                            [L.hidden]: e7,
                            [L.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == e8 ? void 0 : e8.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            if (null != eO.current) eO.current.currentTime >= eh && (e_(eO.current.currentTime + 10 + 5 * Math.random()), e3(eO.current.currentTime)), eO.current.currentTime >= eT && (eI(eO.current.currentTime + 1), (0, x.qm)(V.id, es.taskType, eO.current.currentTime), q(eO.current.currentTime)), eB(V.id, eO.current.currentTime, eO.current.duration), eu((eO.current.currentTime / eO.current.duration) * 100);
                        },
                        onEnded: (e) => {
                            null != eO.current && (e3(eO.current.duration + 1), eB(V.id, eO.current.duration, eO.current.duration)), ei(N.r.ENDED);
                        },
                        onLoadedData: (e) => {
                            ep && ef(!1);
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eO.current) return;
                            if ((eY(ey.timestampSec), ek ? (eO.current.volume = 0) : (eO.current.volume = eA), 0 === eO.current.textTracks.length)) return;
                            let t = eO.current.textTracks[0];
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
                            if (null == eO.current) return;
                            let t = [];
                            for (let e = 0; e < eO.current.buffered.length; e++) {
                                let n = eO.current.buffered.start(e),
                                    r = eO.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eO.current.duration,
                                        size: (r - n) / eO.current.duration
                                    });
                            }
                            ex(t);
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
                            null != e5 &&
                                (0, r.jsx)('source', {
                                    src: e5.url,
                                    type: e5.mimetype
                                })
                        ]
                    }),
                    (ep || ev) &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: L.loadingSpinner
                        }),
                    eo === N.r.PAUSED && eF === N.y.LOST_FOCUS && (0, r.jsx)(M, {}),
                    W &&
                        eo !== N.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => Y(!1),
                                    children: (0, r.jsx)('div', { className: L.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: L.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([e1, e4], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(j.K, {
                                        quest: V,
                                        onClose: () => {
                                            Y(!1),
                                                (0, g._3)({
                                                    questId: V.id,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    eo === N.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(F, {
                                title: null !== (U = null === (c = V.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== U ? U : A.intl.string(A.t.iiTtpK),
                                subtitle: null !== (w = null === (u = V.config.videoMetadata) || void 0 === u ? void 0 : u.messages.videoEndCtaSubtitle) && void 0 !== w ? w : A.intl.string(A.t.mxaHf3),
                                icon: d.LinkExternalMediumIcon,
                                className: L.endScreenPanelRight,
                                onClick: () => {
                                    (0, g._3)({
                                        questId: V.id,
                                        questContent: S.jn.VIDEO_MODAL,
                                        questContentCTA: g.jZ.LEARN_MORE
                                    }),
                                        (0, E.FE)(V, {
                                            content: S.jn.VIDEO_MODAL,
                                            ctaContent: g.jZ.LEARN_MORE
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
                                [L.play]: eo === N.r.PLAYING,
                                [L.pause]: eo === N.r.PAUSED
                            }),
                            children: eo === N.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: L.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: L.playPausePopIcon })
                        },
                        eo
                    ),
                    Q &&
                        null != eU &&
                        (0, r.jsx)(a.animated.div, {
                            className: L.captionContainer,
                            ref: e9,
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
                                children: eU.text
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
                            (0, r.jsx)(I.Z, {
                                percent: ec,
                                animate: !0 !== eP.current && !ed,
                                interactionEnabled: eM && eb,
                                backgroundColor: eH ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: eH ? eg : void 0,
                                duration: null !== (G = null === (f = eO.current) || void 0 === f ? void 0 : f.duration) && void 0 !== G ? G : 1,
                                maxSeekableTime: eH && eb ? eG : void 0,
                                onClick: (e) => {
                                    eY(e), eo === N.r.ENDED && eW(!0);
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
                                children: (0, r.jsx)(T.Z, {
                                    videoRef: eO,
                                    quest: V,
                                    playerState: eo,
                                    animSpring: e1,
                                    visible: eH,
                                    seekForwardEnabled: tt,
                                    hideCaptionButton: null == te,
                                    handlePlayPauseBtnClick: eQ,
                                    handleTranscriptBtnClick: () => {
                                        !W && (null == eR || eR.questId !== V.id || eR.fetchStatus === h.iF.NONE || eR.fetchStatus === h.iF.FAILURE) && (0, x.lL)(V),
                                            Y(!W),
                                            (0, g._3)({
                                                questId: V.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: W ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        K(!Q),
                                            (0, g._3)({
                                                questId: V.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: Q ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !X,
                                            n = (0, C.fn)(null === (e = eO.current) || void 0 === e ? void 0 : e.parentNode, eO.current);
                                        t && null != n
                                            ? ((0, C.Dj)(n),
                                              n.addEventListener(C.NO, ez),
                                              (0, g.dA)({
                                                  questId: V.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(C.NO, ez),
                                              (0, g.dA)({
                                                  questId: V.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, C.Pr)(n)),
                                            J(t);
                                    },
                                    handleSeekBackBtnClick: () => {
                                        if (null != eO.current)
                                            eY(Math.max(eO.current.currentTime - 10, 0)),
                                                (0, g._3)({
                                                    questId: V.id,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.SEEK_BACKWARD
                                                });
                                    },
                                    handleSeekForwardBtnClick: () => {
                                        if (null != eO.current && !!tt)
                                            eY(Math.min(eO.current.currentTime + 10, eG)),
                                                (0, g._3)({
                                                    questId: V.id,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.SEEK_FORWARD
                                                });
                                    },
                                    handleControlBarPendingInteraction: eN
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
