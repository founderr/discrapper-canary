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
    h = n(497505),
    E = n(918701),
    S = n(184299),
    _ = n(720293),
    N = n(881773),
    j = n(355243),
    I = n(106743),
    T = n(223418),
    b = n(604162),
    D = n(747717),
    y = n(281055),
    A = n(981631),
    B = n(217702),
    k = n(388032),
    L = n(417575);
let P = new Set([A.IyS.FIVE_G, A.IyS.FOUR_G, A.IyS.UNKNOWN]),
    M = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function O() {
    let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: L.pauseText,
        style: { background: (0, u.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: k.intl.string(k.t.U7Xrb2)
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
function w(e) {
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
    var t, n, i, c, u, f, D, Z, F, U, V;
    let { quest: G, onOptimisticProgressUpdate: q, autoplay: H, parentTransitionState: z } = e,
        Y = (0, S.km)((e) => e.transcriptEnabled),
        W = (0, S.km)((e) => e.setTranscriptEnabled),
        Q = (0, S.km)((e) => e.captionEnabled),
        K = (0, S.km)((e) => e.setCaptionEnabled),
        X = (0, S.km)((e) => e.fullScreenEnabled),
        J = (0, S.km)((e) => e.setFullScreenEnabled),
        { focused: $, focusedChanged: ee } = (0, y.xU)(),
        { visible: et, visibleChanged: en, targetRef: er } = (0, y.Yy)(),
        [eo, ei] = o.useState(!0 === H ? T.r.PLAYING : T.r.PAUSED),
        [el, ea] = o.useState(!1),
        es = (0, E.il)(G),
        [ec, eu] = o.useState(es.percentComplete),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState(!0),
        [ev, eC] = o.useState(!1),
        [eg, ex] = o.useState([]),
        [eh, eE] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eS, e_] = o.useState(0),
        [eN, ej] = o.useState(0),
        [eI, eT] = o.useState(!1),
        [eb, eD] = o.useState(!1),
        ey = (0, S.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[G.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eA = (0, S.km)((e) => e.setVideoProgress),
        eB = (0, S.km)((e) => e.muted),
        ek = (0, S.km)((e) => e.volume),
        eL = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        eP = (0, o.useRef)(null),
        eM = (0, o.useRef)(null),
        eO = o.useRef(!0),
        eR = (null === (t = G.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        ew = (0, S.km)((e) => e.transcript),
        [eZ, eF] = o.useState(null),
        [eU, eV] = o.useState(null),
        eG = eR ? (null !== (D = null === (n = eP.current) || void 0 === n ? void 0 : n.duration) && void 0 !== D ? D : 0) : ey.maxTimestampSec,
        eq = o.useCallback(
            (e) => {
                if ((ei(e), null != eP.current))
                    switch (e) {
                        case T.r.PLAYING:
                            eP.current.play(), eF(null);
                            break;
                        case T.r.PAUSED:
                            eP.current.pause();
                            break;
                        case T.r.ENDED:
                            W(!1);
                    }
            },
            [eP, ei, eF, W]
        );
    o.useLayoutEffect(() => {
        eO.current && ((eO.current = !1), eE(v.Z.getEffectiveConnectionSpeed()), eR && ey.timestampSec >= ey.duration && eA(G.id, 0, ey.duration));
    }, []),
        o.useEffect(() => {
            null != eP.current &&
                null != eZ &&
                (0, g.dA)({
                    questId: G.id,
                    event: A.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        reason: eZ
                    }
                });
        }, [eZ, G.id]),
        o.useEffect(() => {
            ee &&
                null != eP.current &&
                (0, g.dA)({
                    questId: G.id,
                    event: $ ? A.rMx.QUEST_VIDEO_APP_FOCUSED : A.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        video_state: eo
                    }
                });
        }, [$, ee, eo, G.id]),
        o.useEffect(() => {
            (z === d.ModalTransitionState.HIDDEN || z === d.ModalTransitionState.EXITING || z === d.ModalTransitionState.EXITED || (null != z && en && !et && !eR) || (ee && !$ && !eR)) && null != eP.current && eo === T.r.PLAYING && (eq(T.r.PAUSED), eF(T.y.LOST_FOCUS));
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
            let t = (0, C.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, eW),
                J(!1),
                (0, g.dA)({
                    questId: G.id,
                    event: A.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [G.id, J]),
        eQ = () => {
            if (null != eP.current)
                eX(Math.max(eP.current.currentTime - 10, 0)),
                    eo === T.r.ENDED && eq(T.r.PAUSED),
                    (0, g._3)({
                        questId: G.id,
                        questContent: h.jn.VIDEO_MODAL,
                        questContentCTA: g.jZ.SEEK_BACKWARD
                    });
        },
        eK = () => {
            if (null == eP.current || !tr) return;
            let e = Math.min(eP.current.currentTime + 10, eG);
            eX(e),
                eo !== T.r.ENDED && e >= eP.current.duration && eq(T.r.ENDED),
                (0, g._3)({
                    questId: G.id,
                    questContent: h.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eP.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, eW);
        };
    }, [eW]);
    let eX = o.useCallback(
            (e) => {
                null != eP.current && (em(!0), (eP.current.currentTime = e), eA(G.id, e, eP.current.duration));
            },
            [eP, eA, G]
        ),
        eJ = () => {
            if (null != eP.current)
                switch (eo) {
                    case T.r.ENDED:
                        eX(0), eq(T.r.PLAYING);
                        break;
                    case T.r.PLAYING:
                        eq(T.r.PAUSED), eF(T.y.PAUSE_BUTTON);
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
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => e$(n)), (n.onexit = () => e0(n)));
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
    let [{ controlBarAnimSpring: e7 }, e9] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: M,
            onStart: () => {
                eD(!1);
            },
            onRest: (e) => {
                1 === e.value && eD(!0);
            }
        })),
        e3 = (0, o.useRef)(null),
        [{ captionHeightSpring: e6 }, e4] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: M
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
                    controlBarAnimSpring: eY || eI ? 1 : 0,
                    immediate: eL
                }),
                () => {
                    e7.stop();
                }
            ),
            [eY, e9, eL, eI, e7]
        );
    let e8 = (e) => {
            !eR && (0, x.FI)(G.id, e),
                null != eP.current &&
                    (0, g.dA)({
                        questId: G.id,
                        event: A.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: ec / 100,
                            video_timestamp_seconds: eP.current.currentTime
                        }
                    });
        },
        e5 = eo === T.r.ENDED,
        te = o.useMemo(() => (P.has(eh) ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, G) : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, G)), [eh, G]),
        tt = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, G), [G]),
        tn = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, G), [G]),
        tr = eR || ey.maxTimestampSec >= (null !== (Z = null === (i = eP.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== Z ? Z : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: L.videoCont,
            'data-fullscreen': X,
            tabIndex: -1,
            onMouseEnter: eH,
            onMouseLeave: ez,
            onFocus: eH,
            onBlur: ez,
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
                            (eP.current = e), (er.current = e);
                        },
                        autoPlay: H,
                        playsInline: !0,
                        mediaLayoutType: X ? B.hV.STATIC : B.hV.RESPONSIVE,
                        className: l()({
                            [L.hidden]: e5,
                            [L.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tt ? void 0 : tt.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eP.current && (eP.current.currentTime >= eS && (e_(eP.current.currentTime + 10 + 5 * Math.random()), e8(eP.current.currentTime)), eP.current.currentTime >= eN && (ej(eP.current.currentTime + 1), (0, x.qm)(G.id, es.taskType, eP.current.currentTime), q(eP.current.currentTime)), eA(G.id, eP.current.currentTime, eP.current.duration), eu((eP.current.currentTime / eP.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eP.current && (e8(eP.current.duration + 1), eA(G.id, eP.current.duration, eP.current.duration)), eq(T.r.ENDED);
                        },
                        onLoadedData: (e) => {
                            ep && ef(!1);
                        },
                        onLoadedMetadata: (e) => {
                            null != eP.current && (eX(ey.timestampSec), eB ? (eP.current.volume = 0) : (eP.current.volume = ek));
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
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: L.loadingSpinner
                        }),
                    eo === T.r.PAUSED && eZ === T.y.LOST_FOCUS && (0, r.jsx)(O, {}),
                    Y &&
                        eo !== T.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => W(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: L.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: L.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([e7, e6], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(I.K, {
                                        quest: G,
                                        onClose: () => {
                                            W(!1),
                                                (0, g._3)({
                                                    questId: G.id,
                                                    questContent: h.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    eo === T.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(w, {
                                title: null !== (F = null === (c = G.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== F ? F : k.intl.string(k.t.iiTtpK),
                                subtitle: null !== (U = null === (u = G.config.videoMetadata) || void 0 === u ? void 0 : u.messages.videoEndCtaSubtitle) && void 0 !== U ? U : k.intl.string(k.t.mxaHf3),
                                icon: d.LinkExternalMediumIcon,
                                className: L.endScreenPanelRight,
                                onClick: () => {
                                    (0, g._3)({
                                        questId: G.id,
                                        questContent: h.jn.VIDEO_MODAL,
                                        questContentCTA: g.jZ.LEARN_MORE
                                    }),
                                        (0, E.FE)(G, {
                                            content: h.jn.VIDEO_MODAL,
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
                                [L.play]: eo === T.r.PLAYING,
                                [L.pause]: eo === T.r.PAUSED
                            }),
                            children: eo === T.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: L.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: L.playPausePopIcon })
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
                            (0, r.jsx)(j.Z, {
                                percent: ec,
                                animate: !0 !== eO.current && !ed,
                                interactionEnabled: eR && eb,
                                backgroundColor: eY ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: eY ? eg : void 0,
                                duration: null !== (V = null === (f = eP.current) || void 0 === f ? void 0 : f.duration) && void 0 !== V ? V : 1,
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
                                children: (0, r.jsx)(N.Z, {
                                    videoRef: eP,
                                    quest: G,
                                    playerState: eo,
                                    animSpring: e7,
                                    visible: eY,
                                    seekForwardEnabled: tr,
                                    hideCaptionBtn: null == tn,
                                    handlePlaybackBtnClick: eJ,
                                    handleTranscriptBtnClick: () => {
                                        !Y && (null == ew || ew.questId !== G.id || ew.fetchStatus === S.iF.NONE || ew.fetchStatus === S.iF.FAILURE) && (0, x.lL)(G),
                                            W(!Y),
                                            (0, g._3)({
                                                questId: G.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: Y ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        K(!Q),
                                            (0, g._3)({
                                                questId: G.id,
                                                questContent: h.jn.VIDEO_MODAL,
                                                questContentCTA: Q ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !X,
                                            n = (0, C.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
                                        t && null != n
                                            ? ((0, C.Dj)(n),
                                              n.addEventListener(C.NO, eW),
                                              (0, g.dA)({
                                                  questId: G.id,
                                                  event: A.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(C.NO, eW),
                                              (0, g.dA)({
                                                  questId: G.id,
                                                  event: A.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, C.Pr)(n)),
                                            J(t);
                                    },
                                    handleSeekBackBtnClick: eQ,
                                    handleSeekForwardBtnClick: eK,
                                    handleControlBarPendingInteraction: eT
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
