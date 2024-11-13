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
    c = n(780384),
    u = n(481060),
    d = n(607070),
    m = n(70097),
    p = n(210887),
    f = n(866960),
    v = n(228488),
    C = n(617136),
    g = n(272008),
    x = n(497505),
    h = n(918701),
    E = n(184299),
    S = n(720293),
    _ = n(881773),
    j = n(355243),
    N = n(106743),
    T = n(223418),
    I = n(604162),
    b = n(747717),
    D = n(281055),
    y = n(981631),
    B = n(217702),
    A = n(388032),
    k = n(417575);
let L = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
    P = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function M() {
    let e = (0, s.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: k.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(u.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: A.intl.string(A.t.U7Xrb2)
        })
    });
}
function O(e) {
    let { quest: t, className: n } = e,
        i = o.useMemo(() => (0, S.z)(S.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)('img', {
              src: i.url,
              alt: 'Video thumbnail',
              className: l()(k.stillFrameImageCard, n)
          });
}
function R(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: s } = e,
        [c, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsx)(u.Clickable, {
        className: l()(k.endScreenPanel, k.accentOnHover, s),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: k.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: k.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: 'heading-md/semibold',
                            className: k.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(u.Heading, {
                            variant: 'heading-sm/normal',
                            className: k.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(b.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: k.endScreenIcon
                })
            ]
        })
    });
}
function w(e) {
    var t, n, i, c, p, b, w, F, Z, U, V;
    let { quest: G, onOptimisticProgressUpdate: q, autoplay: H, parentTransitionState: z } = e,
        Y = (0, E.km)((e) => e.transcriptEnabled),
        W = (0, E.km)((e) => e.setTranscriptEnabled),
        Q = (0, E.km)((e) => e.captionEnabled),
        K = (0, E.km)((e) => e.setCaptionEnabled),
        X = (0, E.km)((e) => e.fullScreenEnabled),
        J = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: $, focusedChanged: ee } = (0, D.xU)(),
        { visible: et, visibleChanged: en, targetRef: er } = (0, D.Yy)(),
        [eo, ei] = o.useState(!0 === H ? T.r.PLAYING : T.r.PAUSED),
        [el, ea] = o.useState(!1),
        es = (0, h.il)(G),
        [ec, eu] = o.useState(es.percentComplete),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState(!0),
        [ev, eC] = o.useState(!1),
        [eg, ex] = o.useState([]),
        [eh, eE] = o.useState(f.Z.getEffectiveConnectionSpeed()),
        [eS, e_] = o.useState(0),
        [ej, eN] = o.useState(0),
        [eT, eI] = o.useState(!1),
        [eb, eD] = o.useState(!1),
        ey = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[G.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eB = (0, E.km)((e) => e.setVideoProgress),
        eA = (0, E.km)((e) => e.muted),
        ek = (0, E.km)((e) => e.volume),
        eL = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        eP = (0, o.useRef)(null),
        eM = (0, o.useRef)(null),
        eO = o.useRef(!0),
        eR = (null === (t = G.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        ew = (0, E.km)((e) => e.transcript),
        [eF, eZ] = o.useState(null),
        [eU, eV] = o.useState(null),
        eG = eR ? (null !== (w = null === (n = eP.current) || void 0 === n ? void 0 : n.duration) && void 0 !== w ? w : 0) : ey.maxTimestampSec,
        eq = o.useCallback(
            (e) => {
                if ((ei(e), null != eP.current))
                    switch (e) {
                        case T.r.PLAYING:
                            eP.current.play(), eZ(null);
                            break;
                        case T.r.PAUSED:
                            eP.current.pause();
                            break;
                        case T.r.ENDED:
                            W(!1);
                    }
            },
            [eP, ei, eZ, W]
        );
    o.useLayoutEffect(() => {
        eO.current && ((eO.current = !1), eE(f.Z.getEffectiveConnectionSpeed()), eR && ey.timestampSec >= ey.duration && eB(G.id, 0, ey.duration));
    }, []),
        o.useEffect(() => {
            null != eP.current &&
                null != eF &&
                (0, C.dA)({
                    questId: G.id,
                    event: y.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        reason: eF
                    }
                });
        }, [eF, G.id]),
        o.useEffect(() => {
            ee &&
                null != eP.current &&
                (0, C.dA)({
                    questId: G.id,
                    event: $ ? y.rMx.QUEST_VIDEO_APP_FOCUSED : y.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        video_state: eo
                    }
                });
        }, [$, ee, eo, G.id]),
        o.useEffect(() => {
            (z === u.ModalTransitionState.HIDDEN || z === u.ModalTransitionState.EXITING || z === u.ModalTransitionState.EXITED || (null != z && en && !et && !eR) || (ee && !$ && !eR)) && null != eP.current && eo === T.r.PLAYING && (eq(T.r.PAUSED), !eR && eZ(T.y.LOST_FOCUS));
        }, [z, $, ee, et, en, eo, eR, eq]);
    let eH = () => {
            ea(!0);
        },
        ez = () => {
            ea(!1);
        },
        eY = el || eo === T.r.PAUSED || eo === T.r.ENDED,
        eW = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
            null != t &&
                !(0, v.rB)(t) &&
                (t.removeEventListener(v.NO, eW),
                J(!1),
                (0, C.dA)({
                    questId: G.id,
                    event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [G.id, J]),
        eQ = () => {
            if (null != eP.current)
                eX(Math.max(eP.current.currentTime - 10, 0)),
                    eo === T.r.ENDED && eq(T.r.PAUSED),
                    (0, C._3)({
                        questId: G.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        eK = () => {
            if (null == eP.current || !tr) return;
            let e = Math.min(eP.current.currentTime + 10, eG);
            eX(e),
                eo !== T.r.ENDED && e >= eP.current.duration && eq(T.r.ENDED),
                (0, C._3)({
                    questId: G.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eP.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, eW);
        };
    }, [eW]);
    let eX = o.useCallback(
            (e) => {
                null != eP.current && (em(!0), (eP.current.currentTime = e), eB(G.id, e, eP.current.duration));
            },
            [eP, eB, G]
        ),
        eJ = () => {
            if (null != eP.current)
                switch (eo) {
                    case T.r.ENDED:
                        eX(0), eq(T.r.PLAYING);
                        break;
                    case T.r.PLAYING:
                        eq(T.r.PAUSED), eZ(T.y.PAUSE_BUTTON);
                        break;
                    default:
                        eq(T.r.PLAYING);
                }
        },
        e$ = (e) => {
            eV(e);
        },
        e0 = (e) => {
            eV((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        e1 = o.useCallback(() => {
            if (null == eP.current || 0 === eP.current.textTracks.length) return;
            let e = eP.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, I.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => e$(n)), (n.onexit = () => e0(n)));
                }
        }, [eP]);
    o.useEffect(() => {
        if (null == eM.current) return;
        let e = eM.current;
        return (
            e.addEventListener('load', e1),
            () => {
                null != e && e.removeEventListener('load', e1);
            }
        );
    }, [eM, e1]);
    let e2 = (e) => {
        null != eP.current && eo === T.r.PLAYING && (ep && ef(!1), ev && eC(!1), eq(T.r.PLAYING));
    };
    o.useEffect(() => {
        if (!ed) return;
        let e = setTimeout(() => {
            em(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ed]);
    let [{ controlBarAnimSpring: e7 }, e9] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: P,
            onStart: () => {
                eD(!1);
            },
            onRest: (e) => {
                1 === e.value && eD(!0);
            }
        })),
        e3 = (0, o.useRef)(null),
        [{ captionHeightSpring: e6 }, e4] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: P
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
                    controlBarAnimSpring: eY || eT ? 1 : 0,
                    immediate: eL
                }),
                () => {
                    e7.stop();
                }
            ),
            [eY, e9, eL, eT, e7]
        );
    let e8 = (e) => {
            !eR && (0, g.FI)(G.id, e),
                null != eP.current &&
                    (0, C.dA)({
                        questId: G.id,
                        event: y.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: ec / 100,
                            video_timestamp_seconds: eP.current.currentTime
                        }
                    });
        },
        e5 = eo === T.r.ENDED,
        te = o.useMemo(() => (L.has(eh) ? (0, S.z)(S.i.VIDEO_PLAYER_VIDEO, G) : (0, S.z)(S.i.VIDEO_PLAYER_VIDEO_LOW_RES, G)), [eh, G]),
        tt = o.useMemo(() => (0, S.z)(S.i.VIDEO_PLAYER_THUMBNAIL, G), [G]),
        tn = o.useMemo(() => (0, S.z)(S.i.VIDEO_PLAYER_CAPTION, G), [G]),
        tr = eR || ey.maxTimestampSec >= (null !== (F = null === (i = eP.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== F ? F : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.Clickable, {
            className: k.videoCont,
            'data-fullscreen': X,
            tabIndex: -1,
            onMouseEnter: eH,
            onMouseLeave: ez,
            onFocus: eH,
            onBlur: ez,
            children: (0, r.jsxs)('div', {
                className: k.videoContInnerRelative,
                children: [
                    (0, r.jsx)(O, {
                        quest: G,
                        className: l()({ [k.stillFrameImageCardHidden]: !e5 })
                    }),
                    e5 && (0, r.jsx)('div', { className: k.videoContOverlay }),
                    (0, r.jsxs)(m.Z, {
                        ref: (e) => {
                            (eP.current = e), (er.current = e);
                        },
                        autoPlay: H,
                        playsInline: !0,
                        mediaLayoutType: X ? B.hV.STATIC : B.hV.RESPONSIVE,
                        className: l()({
                            [k.hidden]: e5,
                            [k.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tt ? void 0 : tt.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eP.current && (eP.current.currentTime >= eS && (e_(eP.current.currentTime + 10 + 5 * Math.random()), e8(eP.current.currentTime)), eP.current.currentTime >= ej && (eN(eP.current.currentTime + 1), (0, g.qm)(G.id, es.taskType, eP.current.currentTime), q(eP.current.currentTime)), eB(G.id, eP.current.currentTime, eP.current.duration), eu((eP.current.currentTime / eP.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eP.current && (e8(eP.current.duration + 1), eB(G.id, eP.current.duration, eP.current.duration)), eq(T.r.ENDED), eC(!1);
                        },
                        onLoadedData: (e) => {
                            ep && ef(!1);
                        },
                        onLoadedMetadata: (e) => {
                            null != eP.current && (eX(ey.timestampSec), eA ? (eP.current.volume = 0) : (eP.current.volume = ek));
                        },
                        onWaiting: (e) => {
                            eC(!0);
                        },
                        onProgress: (e) => {
                            if (null == eP.current) return;
                            let t = [];
                            for (let e = 0; e < eP.current.buffered.length; e++) {
                                let n = eP.current.buffered.start(e),
                                    r = eP.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eP.current.duration,
                                        size: (r - n) / eP.current.duration
                                    });
                            }
                            ex(t);
                        },
                        onCanPlay: e2,
                        onCanPlayThrough: e2,
                        onClick: () => {
                            eJ();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tn &&
                                (0, r.jsx)('track', {
                                    ref: eM,
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
                        (0, r.jsx)(u.Spinner, {
                            type: u.Spinner.Type.WANDERING_CUBES,
                            className: k.loadingSpinner
                        }),
                    eo === T.r.PAUSED && eF === T.y.LOST_FOCUS && (0, r.jsx)(M, {}),
                    Y &&
                        eo !== T.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Clickable, {
                                    onClick: () => W(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: k.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: k.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([e7, e6], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(N.K, {
                                        quest: G,
                                        onClose: () => {
                                            W(!1),
                                                (0, C._3)({
                                                    questId: G.id,
                                                    questContent: x.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    eo === T.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(R, {
                                title: null !== (Z = null === (c = G.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== Z ? Z : A.intl.string(A.t.iiTtpK),
                                subtitle: null !== (U = null === (p = G.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== U ? U : A.intl.string(A.t.mxaHf3),
                                icon: u.ArrowLargeRightIcon,
                                className: k.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: G.id,
                                        questContent: x.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, h.FE)(G, {
                                            content: x.jn.VIDEO_MODAL,
                                            ctaContent: C.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: k.videoFooterContGradient,
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
                            className: l()(k.playPausePopCont, {
                                [k.play]: eo === T.r.PLAYING,
                                [k.pause]: eo === T.r.PAUSED
                            }),
                            children: eo === T.r.PLAYING ? (0, r.jsx)(u.PlayIcon, { className: k.playPausePopIcon }) : (0, r.jsx)(u.PauseIcon, { className: k.playPausePopIcon })
                        },
                        eo
                    ),
                    Q &&
                        null != eU &&
                        (0, r.jsx)(a.animated.div, {
                            className: k.captionContainer,
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
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-lg/semibold',
                                color: 'always-white',
                                className: k.captionText,
                                children: eU.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: k.videoFooterCont,
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
                            (0, r.jsx)(j.Z, {
                                percent: ec,
                                animate: !0 !== eO.current && !ed,
                                interactionEnabled: eR && eb,
                                backgroundColor: eY ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: eY ? eg : void 0,
                                duration: null !== (V = null === (b = eP.current) || void 0 === b ? void 0 : b.duration) && void 0 !== V ? V : 1,
                                maxSeekableTime: eY && eb ? eG : void 0,
                                onClick: (e) => {
                                    eX(e), eo === T.r.ENDED && eq(T.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    eQ();
                                },
                                onScrubForward: () => {
                                    eK();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: k.videoControlsCont,
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
                                children: (0, r.jsx)(_.Z, {
                                    videoRef: eP,
                                    quest: G,
                                    playerState: eo,
                                    animSpring: e7,
                                    visible: eY,
                                    seekForwardEnabled: tr,
                                    hideCaptionBtn: null == tn,
                                    handlePlaybackBtnClick: eJ,
                                    handleTranscriptBtnClick: () => {
                                        !Y && (null == ew || ew.questId !== G.id || ew.fetchStatus === E.iF.NONE || ew.fetchStatus === E.iF.FAILURE) && (0, g.lL)(G),
                                            W(!Y),
                                            (0, C._3)({
                                                questId: G.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: Y ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        K(!Q),
                                            (0, C._3)({
                                                questId: G.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: Q ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !X,
                                            n = (0, v.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
                                        t && null != n
                                            ? ((0, v.Dj)(n),
                                              n.addEventListener(v.NO, eW),
                                              (0, C.dA)({
                                                  questId: G.id,
                                                  event: y.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(v.NO, eW),
                                              (0, C.dA)({
                                                  questId: G.id,
                                                  event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, v.Pr)(n)),
                                            J(t);
                                    },
                                    handleSeekBackBtnClick: eQ,
                                    handleSeekForwardBtnClick: eK,
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
