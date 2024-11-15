n.d(t, {
    Z: function () {
        return U;
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
    f = n(210887),
    p = n(866960),
    v = n(228488),
    C = n(617136),
    g = n(272008),
    x = n(497505),
    S = n(918701),
    E = n(184299),
    h = n(720293),
    _ = n(602667),
    T = n(341907),
    I = n(881773),
    j = n(355243),
    N = n(106743),
    b = n(223418),
    D = n(604162),
    y = n(747717),
    A = n(281055),
    k = n(920393),
    B = n(981631),
    L = n(217702),
    P = n(388032),
    M = n(136880);
let O = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
    R = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function w() {
    let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: M.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(u.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: P.intl.string(P.t.U7Xrb2)
        })
    });
}
function F(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(_.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: l()(M.stillFrameImageCard, { [M.stillFrameImageCardHidden]: !n })
                  })
          });
}
function Z(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: s } = e,
        [c, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(u.Clickable, {
        className: l()(M.endScreenPanel, M.accentOnHover, s),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: M.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: M.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: 'heading-md/semibold',
                            className: M.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(u.Heading, {
                            variant: 'heading-sm/normal',
                            className: M.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(y.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: M.endScreenIcon
                })
            ]
        })
    });
}
function U(e) {
    var t, n, i, c, f, _, y, U, V, q, G;
    let { quest: H, onOptimisticProgressUpdate: z, autoplay: Y, parentTransitionState: W } = e,
        Q = (0, E.km)((e) => e.transcriptEnabled),
        K = (0, E.km)((e) => e.setTranscriptEnabled),
        X = (0, E.km)((e) => e.captionEnabled),
        J = (0, E.km)((e) => e.setCaptionEnabled),
        $ = (0, E.km)((e) => e.fullScreenEnabled),
        ee = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: et, focusedChanged: en } = (0, A.xU)(),
        { visible: er, visibleChanged: eo, targetRef: ei } = (0, A.Yy)(),
        [el, ea] = o.useState(!0 === Y ? b.r.PLAYING : b.r.PAUSED),
        [es, ec] = o.useState(!1),
        eu = (0, S.il)(H),
        [ed, em] = o.useState(eu.percentComplete),
        [ef, ep] = o.useState(!1),
        [ev, eC] = o.useState(!0),
        [eg, ex] = o.useState(!1),
        [eS, eE] = o.useState([]),
        [eh, e_] = o.useState(p.Z.getEffectiveConnectionSpeed()),
        [eT, eI] = o.useState(0),
        [ej, eN] = o.useState(0),
        [eb, eD] = o.useState(!1),
        [ey, eA] = o.useState(!1),
        ek = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eB = (0, E.km)((e) => e.setVideoProgress),
        eL = (0, E.km)((e) => e.muted),
        eP = (0, E.km)((e) => e.volume),
        eM = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        eO = (0, o.useRef)(null),
        eR = (0, o.useRef)(null),
        ew = o.useRef(!0),
        eF = (null === (t = H.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eZ = (0, E.km)((e) => e.transcript),
        [eU, eV] = o.useState(null),
        [eq, eG] = o.useState(!1),
        [eH, ez] = o.useState(!1),
        [eY, eW] = o.useState(null),
        eQ = eF ? (null !== (y = null === (n = eO.current) || void 0 === n ? void 0 : n.duration) && void 0 !== y ? y : 0) : Math.max(ek.maxTimestampSec, eu.progressSeconds),
        eK = o.useMemo(() => (O.has(eh) ? h.i.VIDEO_PLAYER_VIDEO : h.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eh]),
        eX = o.useMemo(() => (null != eK ? (0, h.z)(eK, H) : null), [eK, H]),
        eJ = o.useCallback(
            (e) => {
                null != eO.current &&
                    (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: eK,
                            quest_completed: eF,
                            video_duration_sec: eO.current.duration,
                            video_progress: (0, T.formatVideoProgressRatio)(e.segment_end_sec, eO.current.duration)
                        }
                    });
            },
            [H.id, eK, eF]
        ),
        { forceSendCurrentSegment: e$ } = (0, k.Z)({
            videoRef: eO,
            isPlaying: el === b.r.PLAYING,
            isMetadataLoaded: eq,
            isInitialSeekComplete: eH,
            onAnalytics: eJ,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e0 = o.useCallback(
            (e) => {
                if ((ea(e), null != eO.current))
                    switch (e) {
                        case b.r.PLAYING:
                            eO.current.play(), eV(null);
                            break;
                        case b.r.PAUSED:
                            eO.current.pause(), e$();
                            break;
                        case b.r.ENDED:
                            K(!1), e$();
                    }
            },
            [eO, ea, eV, K, e$]
        );
    o.useLayoutEffect(() => {
        ew.current && ((ew.current = !1), e_(p.Z.getEffectiveConnectionSpeed()), eF && ek.timestampSec >= ek.duration && eB(H.id, 0, ek.duration));
    }, []),
        o.useEffect(() => {
            null != eO.current &&
                null != eU &&
                (0, C.dA)({
                    questId: H.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eO.current.currentTime,
                        reason: eU
                    }
                });
        }, [eU, H.id]),
        o.useEffect(() => {
            en &&
                null != eO.current &&
                (0, C.dA)({
                    questId: H.id,
                    event: et ? B.rMx.QUEST_VIDEO_APP_FOCUSED : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eO.current.currentTime,
                        video_state: el
                    }
                });
        }, [et, en, el, H.id]);
    let e1 = o.useCallback(
        (e) => {
            var t;
            !eF && (null === (t = H.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, g.FI)(H.id, e),
                null != eO.current &&
                    (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, T.formatVideoProgressRatio)(eO.current.currentTime, eO.current.duration),
                            video_timestamp_seconds: eO.current.currentTime
                        }
                    });
        },
        [H, eF, eO]
    );
    o.useEffect(() => {
        (W === u.ModalTransitionState.HIDDEN || W === u.ModalTransitionState.EXITING || W === u.ModalTransitionState.EXITED || (null != W && eo && !er && !eF) || (en && !et && !eF)) && null != eO.current && el === b.r.PLAYING && (e0(b.r.PAUSED), !eF && eV(b.y.LOST_FOCUS));
    }, [W, et, en, er, eo, el, eF, e0, e1]);
    let e2 = () => {
            ec(!0);
        },
        e9 = () => {
            ec(!1);
        },
        e7 = es || el === b.r.PAUSED || el === b.r.ENDED,
        e3 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(null === (e = eO.current) || void 0 === e ? void 0 : e.parentNode, eO.current);
            null != t &&
                !(0, v.rB)(t) &&
                (t.removeEventListener(v.NO, e3),
                ee(!1),
                (0, C.dA)({
                    questId: H.id,
                    event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [H.id, ee]),
        e6 = () => {
            if (null != eO.current)
                e8(Math.max(eO.current.currentTime - 10, 0)),
                    el === b.r.ENDED && e0(b.r.PAUSED),
                    (0, C._3)({
                        questId: H.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        e4 = () => {
            if (null == eO.current || !tm) return;
            let e = Math.min(eO.current.currentTime + 10, eQ);
            e8(e),
                el !== b.r.ENDED && e >= eO.current.duration && e0(b.r.ENDED),
                (0, C._3)({
                    questId: H.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eO.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e3);
        };
    }, [e3]);
    let e8 = o.useCallback(
            (e) => {
                null != eO.current && (e$(), ep(!0), ez(!1), (eO.current.currentTime = e), eB(H.id, e, eO.current.duration));
            },
            [eO, eB, H.id, e$]
        ),
        e5 = () => {
            if (null != eO.current)
                switch (el) {
                    case b.r.ENDED:
                        e8(0), e0(b.r.PLAYING);
                        break;
                    case b.r.PLAYING:
                        e0(b.r.PAUSED), eV(b.y.PAUSE_BUTTON);
                        break;
                    default:
                        e0(b.r.PLAYING);
                }
        },
        te = (e) => {
            eW(e);
        },
        tt = (e) => {
            eW((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tn = o.useCallback(() => {
            if (null == eO.current || 0 === eO.current.textTracks.length) return;
            let e = eO.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, D.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => te(n)), (n.onexit = () => tt(n)));
                }
        }, [eO]);
    o.useEffect(() => {
        if (null == eR.current) return;
        let e = eR.current;
        return (
            e.addEventListener('load', tn),
            () => {
                null != e && e.removeEventListener('load', tn);
            }
        );
    }, [eR, tn]);
    let tr = (e) => {
        null != eO.current && el === b.r.PLAYING && (ev && eC(!1), eg && ex(!1), e0(b.r.PLAYING));
    };
    o.useEffect(() => {
        if (!ef) return;
        let e = setTimeout(() => {
            ep(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ef]);
    let [{ controlBarAnimSpring: to }, ti] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: R,
            onStart: () => {
                eA(!1);
            },
            onRest: (e) => {
                1 === e.value && eA(!0);
            }
        })),
        tl = (0, o.useRef)(null),
        [{ captionHeightSpring: ta }, ts] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: R
        }));
    o.useEffect(() => {
        var e, t;
        return (
            ts({
                captionHeightSpring: X && null != eY && null !== (t = null === (e = tl.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eM
            }),
            () => {
                ta.stop();
            }
        );
    }, [X, ts, eM, eY, ta]),
        o.useEffect(
            () => (
                ti({
                    controlBarAnimSpring: e7 || eb ? 1 : 0,
                    immediate: eM
                }),
                () => {
                    to.stop();
                }
            ),
            [e7, ti, eM, eb, to]
        );
    let tc = el === b.r.ENDED,
        tu = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
        td = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, H), [H]),
        tm = eF || ek.maxTimestampSec >= (null !== (U = null === (i = eO.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== U ? U : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.Clickable, {
            className: M.videoCont,
            'data-fullscreen': $,
            tabIndex: -1,
            onMouseEnter: e2,
            onMouseLeave: e9,
            onFocus: e2,
            onBlur: e9,
            children: (0, r.jsxs)('div', {
                className: M.videoContInnerRelative,
                children: [
                    (0, r.jsx)(F, {
                        quest: H,
                        shouldShow: tc
                    }),
                    tc && (0, r.jsx)('div', { className: M.videoContOverlay }),
                    (0, r.jsxs)(m.Z, {
                        ref: (e) => {
                            (eO.current = e), (ei.current = e);
                        },
                        autoPlay: Y,
                        playsInline: !0,
                        mediaLayoutType: $ ? L.hV.STATIC : L.hV.RESPONSIVE,
                        className: l()({
                            [M.hidden]: tc,
                            [M.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tu ? void 0 : tu.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eO.current && (eO.current.currentTime >= eT && (eI(eO.current.currentTime + 6 + 2 * Math.random()), e1(eO.current.currentTime)), eO.current.currentTime >= ej && (eN(eO.current.currentTime + 1), (0, g.qm)(H.id, eu.taskType, eO.current.currentTime), z(eO.current.currentTime)), eB(H.id, eO.current.currentTime, eO.current.duration), em((eO.current.currentTime / eO.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eO.current && (e1(eO.current.duration + 1), eB(H.id, eO.current.duration, eO.current.duration)), e0(b.r.ENDED), ex(!1);
                        },
                        onLoadedData: (e) => {
                            ev && eC(!1);
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eO.current) eG(!0), e8(eF ? ek.timestampSec : Math.max(ek.timestampSec, eu.progressSeconds)), eL ? (eO.current.volume = 0) : (eO.current.volume = eP);
                        },
                        onWaiting: (e) => {
                            ex(!0);
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
                            eE(t);
                        },
                        onCanPlay: tr,
                        onCanPlayThrough: tr,
                        onSeeked: () => {
                            ez(!0);
                        },
                        onClick: () => {
                            e5();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != td &&
                                (0, r.jsx)('track', {
                                    ref: eR,
                                    src: td.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != eX &&
                                (0, r.jsx)('source', {
                                    src: eX.url,
                                    type: eX.mimetype
                                })
                        ]
                    }),
                    (ev || eg) &&
                        (0, r.jsx)(u.Spinner, {
                            type: u.Spinner.Type.WANDERING_CUBES,
                            className: M.loadingSpinner
                        }),
                    el === b.r.PAUSED && eU === b.y.LOST_FOCUS && (0, r.jsx)(w, {}),
                    Q &&
                        el !== b.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Clickable, {
                                    onClick: () => K(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: M.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: M.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([to, ta], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(N.K, {
                                        quest: H,
                                        onClose: () => {
                                            K(!1),
                                                (0, C._3)({
                                                    questId: H.id,
                                                    questContent: x.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    el === b.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(Z, {
                                title: null !== (V = null === (c = H.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== V ? V : P.intl.string(P.t.iiTtpK),
                                subtitle: null !== (q = null === (f = H.config.videoMetadata) || void 0 === f ? void 0 : f.messages.videoEndCtaSubtitle) && void 0 !== q ? q : P.intl.string(P.t.mxaHf3),
                                icon: u.ArrowLargeRightIcon,
                                className: M.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: H.id,
                                        questContent: x.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, S.FE)(H, {
                                            content: x.jn.VIDEO_MODAL,
                                            ctaContent: C.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: M.videoFooterContGradient,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    to.to({
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
                            className: l()(M.playPausePopCont, {
                                [M.play]: el === b.r.PLAYING,
                                [M.pause]: el === b.r.PAUSED
                            }),
                            children: el === b.r.PLAYING ? (0, r.jsx)(u.PlayIcon, { className: M.playPausePopIcon }) : (0, r.jsx)(u.PauseIcon, { className: M.playPausePopIcon })
                        },
                        el
                    ),
                    X &&
                        null != eY &&
                        (0, r.jsx)(a.animated.div, {
                            className: M.captionContainer,
                            ref: tl,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        to.to({
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
                                className: M.captionText,
                                children: eY.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: M.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    to.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    to.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    to.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(j.Z, {
                                percent: ed,
                                animate: !0 !== ew.current && !ef,
                                interactionEnabled: eF && ey,
                                backgroundColor: e7 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e7 ? eS : void 0,
                                duration: null !== (G = null === (_ = eO.current) || void 0 === _ ? void 0 : _.duration) && void 0 !== G ? G : 1,
                                maxSeekableTime: e7 && ey ? eQ : void 0,
                                onClick: (e) => {
                                    e8(e), el === b.r.ENDED && e0(b.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    e6();
                                },
                                onScrubForward: () => {
                                    e4();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: M.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            to.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            to.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            to.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(I.Z, {
                                    videoRef: eO,
                                    quest: H,
                                    playerState: el,
                                    animSpring: to,
                                    visible: e7,
                                    seekForwardEnabled: tm,
                                    hideCaptionBtn: null == td,
                                    handlePlaybackBtnClick: e5,
                                    handleTranscriptBtnClick: () => {
                                        !Q && (null == eZ || eZ.questId !== H.id || eZ.fetchStatus === E.iF.NONE || eZ.fetchStatus === E.iF.FAILURE) && (0, g.lL)(H),
                                            K(!Q),
                                            (0, C._3)({
                                                questId: H.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: Q ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        J(!X),
                                            (0, C._3)({
                                                questId: H.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: X ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !$,
                                            n = (0, v.fn)(null === (e = eO.current) || void 0 === e ? void 0 : e.parentNode, eO.current);
                                        t && null != n
                                            ? ((0, v.Dj)(n),
                                              n.addEventListener(v.NO, e3),
                                              (0, C.dA)({
                                                  questId: H.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(v.NO, e3),
                                              (0, C.dA)({
                                                  questId: H.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, v.Pr)(n)),
                                            ee(t);
                                    },
                                    handleSeekBackBtnClick: e6,
                                    handleSeekForwardBtnClick: e4,
                                    handleControlBarPendingInteraction: eD
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
