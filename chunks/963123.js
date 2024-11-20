n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(100621),
    a = n(772848),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    m = n(607070),
    f = n(70097),
    p = n(210887),
    v = n(866960),
    C = n(228488),
    g = n(617136),
    x = n(272008),
    S = n(497505),
    _ = n(918701),
    E = n(184299),
    h = n(720293),
    T = n(602667),
    I = n(341907),
    N = n(881773),
    b = n(355243),
    j = n(106743),
    D = n(223418),
    A = n(604162),
    y = n(747717),
    k = n(281055),
    B = n(920393),
    L = n(981631),
    P = n(217702),
    M = n(388032),
    O = n(417575);
let R = new Set([L.IyS.FIVE_G, L.IyS.FOUR_G, L.IyS.UNKNOWN]),
    w = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function F() {
    let e = (0, c.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: O.pauseText,
        style: { background: (0, u.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: M.intl.string(M.t.U7Xrb2)
        })
    });
}
function Z(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: S.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: l()(O.stillFrameImageCard, { [O.stillFrameImageCardHidden]: !n })
                  })
          });
}
function U(e) {
    let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        m = () => {
            u(!0);
        },
        f = () => {
            u(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: l()(O.endScreenPanel, O.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: O.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: O.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            className: O.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            className: O.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(y.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: O.endScreenIcon
                })
            ]
        })
    });
}
function V(e) {
    var t, n, i, u, p, T, y, V, q, G, H;
    let { quest: z, onOptimisticProgressUpdate: Y, autoplay: W, parentTransitionState: Q } = e,
        K = (0, E.km)((e) => e.transcriptEnabled),
        X = (0, E.km)((e) => e.setTranscriptEnabled),
        J = (0, E.km)((e) => e.captionEnabled),
        $ = (0, E.km)((e) => e.setCaptionEnabled),
        ee = (0, E.km)((e) => e.fullScreenEnabled),
        et = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: en, focusedChanged: er } = (0, k.xU)(),
        { visible: eo, visibleChanged: ei, targetRef: el } = (0, k.Yy)(),
        [es, ea] = o.useState(!0 === W ? D.r.PLAYING : D.r.PAUSED),
        [ec, eu] = o.useState(!1),
        ed = (0, _.il)(z),
        [em, ef] = o.useState(ed.percentComplete),
        [ep, ev] = o.useState(!1),
        [eC, eg] = o.useState(!0),
        [ex, eS] = o.useState(!1),
        [e_, eE] = o.useState([]),
        [eh, eT] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eI, eN] = o.useState(0),
        [eb, ej] = o.useState(0),
        [eD, eA] = o.useState(!1),
        [ey, ek] = o.useState(!1),
        eB = o.useRef(null),
        eL = o.useRef(null),
        eP = (0, o.useRef)(-1),
        eM = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[z.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eO = (0, E.km)((e) => e.setVideoProgress),
        eR = (0, E.km)((e) => e.muted),
        ew = (0, E.km)((e) => e.volume),
        eF = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        eZ = (0, o.useRef)(null),
        eU = (0, o.useRef)(null),
        eV = o.useRef(!0),
        eq = (null === (t = z.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eG = (0, E.km)((e) => e.transcript),
        [eH, ez] = o.useState(null),
        [eY, eW] = o.useState(!1),
        [eQ, eK] = o.useState(!1),
        [eX, eJ] = o.useState(null),
        e$ = eq ? (null !== (y = null === (n = eZ.current) || void 0 === n ? void 0 : n.duration) && void 0 !== y ? y : 0) : Math.max(eM.maxTimestampSec, ed.progressSeconds),
        e0 = o.useMemo(() => (R.has(eh) ? h.i.VIDEO_PLAYER_VIDEO : h.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eh]),
        e1 = o.useMemo(() => (null != e0 ? (0, h.z)(e0, z) : null), [e0, z]),
        [e2] = o.useState(a.Z),
        e7 = o.useCallback(
            (e) => {
                null != eZ.current &&
                    (0, g.dA)({
                        questId: z.id,
                        event: L.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e0,
                            quest_completed: eq,
                            video_duration_sec: eZ.current.duration,
                            video_progress: (0, I.formatVideoProgressRatio)(e.segment_end_sec, eZ.current.duration),
                            video_session_id: e2
                        }
                    });
            },
            [z.id, e0, eq, e2]
        ),
        { forceSendCurrentSegment: e9 } = (0, B.Z)({
            videoRef: eZ,
            isPlaying: es === D.r.PLAYING,
            isMetadataLoaded: eY,
            isInitialSeekComplete: eQ,
            onAnalytics: e7,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e3 = o.useCallback(
            (e) => {
                if ((ea(e), null != eZ.current))
                    switch (e) {
                        case D.r.PLAYING:
                            eZ.current.play(),
                                (0, g.dA)({
                                    questId: z.id,
                                    event: L.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eZ.current.currentTime,
                                        pause_reason: eH,
                                        video_session_id: e2
                                    }
                                }),
                                ez(null);
                            break;
                        case D.r.PAUSED:
                            eZ.current.pause(), e9();
                            break;
                        case D.r.ENDED:
                            X(!1), e9();
                    }
            },
            [z.id, eH, e9, X, e2]
        );
    o.useLayoutEffect(() => {
        eV.current && ((eV.current = !1), eT(v.Z.getEffectiveConnectionSpeed()), eq && eM.timestampSec >= eM.duration && eO(z.id, 0, eM.duration));
    }, []),
        o.useEffect(() => {
            null != eZ.current &&
                null != eH &&
                (0, g.dA)({
                    questId: z.id,
                    event: L.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eZ.current.currentTime,
                        reason: eH,
                        video_session_id: e2
                    }
                });
        }, [eH, z.id, e2]),
        o.useEffect(() => {
            er &&
                null != eZ.current &&
                (0, g.dA)({
                    questId: z.id,
                    event: en ? L.rMx.QUEST_VIDEO_APP_FOCUSED : L.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eZ.current.currentTime,
                        video_state: es,
                        video_session_id: e2
                    }
                });
        }, [en, er, es, z.id, e2]);
    let e6 = o.useCallback(
        (e) => {
            var t;
            !eq && (null === (t = z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, x.FI)(z.id, e),
                null != eZ.current &&
                    (0, g.dA)({
                        questId: z.id,
                        event: L.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, I.formatVideoProgressRatio)(eZ.current.currentTime, eZ.current.duration),
                            video_timestamp_seconds: eZ.current.currentTime,
                            video_session_id: e2
                        }
                    });
        },
        [z, eq, eZ, e2]
    );
    o.useEffect(() => {
        (Q === d.ModalTransitionState.HIDDEN || Q === d.ModalTransitionState.EXITING || Q === d.ModalTransitionState.EXITED || (null != Q && ei && !eo && !eq) || (er && !en && !eq)) && null != eZ.current && es === D.r.PLAYING && (e3(D.r.PAUSED), !eq && ez(D.y.LOST_FOCUS));
    }, [Q, en, er, eo, ei, es, eq, e3, e6]);
    let e4 = () => {
            eu(!0);
        },
        e8 = () => {
            eu(!1);
        },
        e5 = ec || es === D.r.PAUSED || es === D.r.ENDED,
        te = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(null === (e = eZ.current) || void 0 === e ? void 0 : e.parentNode, eZ.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, te),
                et(!1),
                (0, g.dA)({
                    questId: z.id,
                    event: L.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: e2 }
                }));
        }, [z.id, et, e2]),
        tt = () => {
            if (null != eZ.current)
                tr(Math.max(eZ.current.currentTime - 10, 0)),
                    es === D.r.ENDED && e3(D.r.PAUSED),
                    (0, g._3)({
                        questId: z.id,
                        questContent: S.jn.VIDEO_MODAL,
                        questContentCTA: g.jZ.SEEK_BACKWARD
                    });
        },
        tn = () => {
            if (null == eZ.current || !tg) return;
            let e = Math.min(eZ.current.currentTime + 10, e$);
            tr(e),
                es !== D.r.ENDED && e >= eZ.current.duration && e3(D.r.ENDED),
                (0, g._3)({
                    questId: z.id,
                    questContent: S.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eZ.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, te);
        };
    }, [te]);
    let tr = o.useCallback(
            (e) => {
                null != eZ.current && (e9(), ev(!0), eK(!1), (eZ.current.currentTime = e), eO(z.id, e, eZ.current.duration));
            },
            [eZ, eO, z.id, e9]
        ),
        to = () => {
            if (null != eZ.current)
                switch (es) {
                    case D.r.ENDED:
                        tr(0), e3(D.r.PLAYING);
                        break;
                    case D.r.PLAYING:
                        e3(D.r.PAUSED), ez(D.y.PAUSE_BUTTON);
                        break;
                    default:
                        e3(D.r.PLAYING);
                }
        },
        ti = (e) => {
            eJ(e);
        },
        tl = (e) => {
            eJ((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        ts = o.useCallback(() => {
            if (null == eZ.current || 0 === eZ.current.textTracks.length) return;
            let e = eZ.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, A.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => ti(n)), (n.onexit = () => tl(n)));
                }
        }, [eZ]);
    o.useEffect(() => {
        if (null == eU.current) return;
        let e = eU.current;
        return (
            e.addEventListener('load', ts),
            () => {
                null != e && e.removeEventListener('load', ts);
            }
        );
    }, [eU, ts]);
    let ta = (e) => {
        if (null != eZ.current && es === D.r.PLAYING) {
            if ((eC && eg(!1), ex)) {
                let e = null != eL.current ? Date.now() - eL.current : null;
                (0, g.dA)({
                    questId: z.id,
                    event: L.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                    properties: {
                        video_asset_id: e0,
                        network_connection_speed: eh,
                        duration: e,
                        buffer_index: eP.current,
                        video_session_id: e2
                    }
                }),
                    eS(!1);
            }
            e3(D.r.PLAYING);
        }
    };
    o.useEffect(() => {
        if (!ep) return;
        let e = setTimeout(() => {
            ev(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ep]);
    let [{ controlBarAnimSpring: tc }, tu] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: w,
            onStart: () => {
                ek(!1);
            },
            onRest: (e) => {
                1 === e.value && ek(!0);
            }
        })),
        td = (0, o.useRef)(null),
        [{ captionHeightSpring: tm }, tf] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: w
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tf({
                captionHeightSpring: J && null != eX && null !== (t = null === (e = td.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eF
            }),
            () => {
                tm.stop();
            }
        );
    }, [J, tf, eF, eX, tm]),
        o.useEffect(
            () => (
                tu({
                    controlBarAnimSpring: e5 || eD ? 1 : 0,
                    immediate: eF
                }),
                () => {
                    tc.stop();
                }
            ),
            [e5, tu, eF, eD, tc]
        );
    let tp = es === D.r.ENDED,
        tv = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, z), [z]),
        tC = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, z), [z]),
        tg = eq || eM.maxTimestampSec >= (null !== (V = null === (i = eZ.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== V ? V : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: O.videoCont,
            'data-fullscreen': ee,
            tabIndex: -1,
            onMouseEnter: e4,
            onMouseLeave: e8,
            onFocus: e4,
            onBlur: e8,
            children: (0, r.jsxs)('div', {
                className: O.videoContInnerRelative,
                children: [
                    (0, r.jsx)(Z, {
                        quest: z,
                        shouldShow: tp
                    }),
                    tp && (0, r.jsx)('div', { className: O.videoContOverlay }),
                    (0, r.jsxs)(f.Z, {
                        ref: (e) => {
                            (eZ.current = e), (el.current = e);
                        },
                        autoPlay: W,
                        playsInline: !0,
                        mediaLayoutType: ee ? P.hV.STATIC : P.hV.RESPONSIVE,
                        className: l()({
                            [O.hidden]: tp,
                            [O.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tv ? void 0 : tv.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eZ.current && (eZ.current.currentTime >= eI && (eN(eZ.current.currentTime + 6 + 2 * Math.random()), e6(eZ.current.currentTime)), eZ.current.currentTime >= eb && (ej(eZ.current.currentTime + 1), (0, x.qm)(z.id, ed.taskType, eZ.current.currentTime), Y(eZ.current.currentTime)), eO(z.id, eZ.current.currentTime, eZ.current.duration), ef((eZ.current.currentTime / eZ.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eZ.current && (e6(eZ.current.duration + 1), eO(z.id, eZ.current.duration, eZ.current.duration)), e3(D.r.ENDED), eS(!1);
                        },
                        onLoadedData: (e) => {
                            if (eC) {
                                let e = null != eB.current ? Date.now() - eB.current : null;
                                (0, g.dA)({
                                    questId: z.id,
                                    event: L.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e0,
                                        network_connection_speed: eh,
                                        duration: e,
                                        video_session_id: e2
                                    }
                                }),
                                    eg(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eZ.current) eW(!0), tr(eq ? eM.timestampSec : Math.max(eM.timestampSec, ed.progressSeconds)), eR ? (eZ.current.volume = 0) : (eZ.current.volume = ew);
                        },
                        onLoadStart: () => {
                            (eB.current = Date.now()),
                                (0, g.dA)({
                                    questId: z.id,
                                    event: L.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e0,
                                        network_connection_speed: eh,
                                        video_session_id: e2
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eL.current = Date.now()),
                                (eP.current += 1),
                                (0, g.dA)({
                                    questId: z.id,
                                    event: L.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e0,
                                        network_connection_speed: eh,
                                        buffer_index: eP.current,
                                        video_session_id: e2
                                    }
                                }),
                                eS(!0);
                        },
                        onProgress: (e) => {
                            if (null == eZ.current) return;
                            let t = [];
                            for (let e = 0; e < eZ.current.buffered.length; e++) {
                                let n = eZ.current.buffered.start(e),
                                    r = eZ.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eZ.current.duration,
                                        size: (r - n) / eZ.current.duration
                                    });
                            }
                            eE(t);
                        },
                        onCanPlay: ta,
                        onCanPlayThrough: ta,
                        onSeeked: () => {
                            eK(!0);
                        },
                        onClick: () => {
                            to();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tC &&
                                (0, r.jsx)('track', {
                                    ref: eU,
                                    src: tC.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e1 &&
                                (0, r.jsx)('source', {
                                    src: e1.url,
                                    type: e1.mimetype
                                })
                        ]
                    }),
                    (eC || ex) &&
                        es === D.r.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: O.loadingSpinner
                        }),
                    es === D.r.PAUSED && eH === D.y.LOST_FOCUS && (0, r.jsx)(F, {}),
                    K &&
                        es !== D.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => X(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: O.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: O.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tc, tm], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(j.K, {
                                        quest: z,
                                        onClose: () => {
                                            X(!1),
                                                (0, g._3)({
                                                    questId: z.id,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    es === D.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(U, {
                                title: null !== (q = null === (u = z.config.videoMetadata) || void 0 === u ? void 0 : u.messages.videoEndCtaTitle) && void 0 !== q ? q : M.intl.string(M.t.iiTtpK),
                                subtitle: null !== (G = null === (p = z.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== G ? G : M.intl.string(M.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: O.endScreenPanelRight,
                                onClick: () => {
                                    (0, g._3)({
                                        questId: z.id,
                                        questContent: S.jn.VIDEO_MODAL,
                                        questContentCTA: g.jZ.LEARN_MORE
                                    }),
                                        (0, _.FE)(z, {
                                            content: S.jn.VIDEO_MODAL,
                                            ctaContent: g.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: O.videoFooterContGradient,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    tc.to({
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
                            className: l()(O.playPausePopCont, {
                                [O.play]: es === D.r.PLAYING,
                                [O.pause]: es === D.r.PAUSED
                            }),
                            children: es === D.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: O.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: O.playPausePopIcon })
                        },
                        es
                    ),
                    J &&
                        null != eX &&
                        (0, r.jsx)(s.animated.div, {
                            className: O.captionContainer,
                            ref: td,
                            style: {
                                translateY: (0, s.to)(
                                    [
                                        tc.to({
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
                                className: O.captionText,
                                children: eX.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: O.videoFooterCont,
                        style: {
                            paddingLeft: (0, s.to)(
                                [
                                    tc.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, s.to)(
                                [
                                    tc.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, s.to)(
                                [
                                    tc.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(b.Z, {
                                percent: em,
                                animate: !0 !== eV.current && !ep,
                                interactionEnabled: eq && ey,
                                backgroundColor: e5 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e5 ? e_ : void 0,
                                duration: null !== (H = null === (T = eZ.current) || void 0 === T ? void 0 : T.duration) && void 0 !== H ? H : 1,
                                maxSeekableTime: e5 && ey ? e$ : void 0,
                                onClick: (e) => {
                                    tr(e), es === D.r.ENDED && e3(D.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    tt();
                                },
                                onScrubForward: () => {
                                    tn();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: O.videoControlsCont,
                                style: {
                                    paddingTop: (0, s.to)(
                                        [
                                            tc.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [
                                            tc.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, s.to)(
                                        [
                                            tc.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(N.Z, {
                                    videoRef: eZ,
                                    quest: z,
                                    playerState: es,
                                    animSpring: tc,
                                    visible: e5,
                                    seekForwardEnabled: tg,
                                    hideCaptionBtn: null == tC,
                                    handlePlaybackBtnClick: to,
                                    handleTranscriptBtnClick: () => {
                                        !K && (null == eG || eG.questId !== z.id || eG.fetchStatus === E.iF.NONE || eG.fetchStatus === E.iF.FAILURE) && (0, x.lL)(z),
                                            X(!K),
                                            (0, g._3)({
                                                questId: z.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: K ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        $(!J),
                                            (0, g._3)({
                                                questId: z.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: J ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !ee,
                                            n = (0, C.fn)(null === (e = eZ.current) || void 0 === e ? void 0 : e.parentNode, eZ.current);
                                        t && null != n
                                            ? ((0, C.Dj)(n),
                                              n.addEventListener(C.NO, te),
                                              (0, g.dA)({
                                                  questId: z.id,
                                                  event: L.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(C.NO, te),
                                              (0, g.dA)({
                                                  questId: z.id,
                                                  event: L.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: e2 }
                                              }),
                                              (0, C.Pr)(n)),
                                            et(t);
                                    },
                                    handleSeekBackBtnClick: tt,
                                    handleSeekForwardBtnClick: tn,
                                    handleControlBarPendingInteraction: eA
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
