n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(752877),
    a = n(232713),
    u = n(442837),
    c = n(780384),
    d = n(481060),
    m = n(607070),
    v = n(70097),
    p = n(210887),
    E = n(866960),
    f = n(228488),
    g = n(617136),
    C = n(272008),
    S = n(497505),
    x = n(918701),
    h = n(184299),
    _ = n(720293),
    T = n(602667),
    I = n(341907),
    D = n(881773),
    N = n(355243),
    j = n(106743),
    A = n(223418),
    b = n(604162),
    L = n(747717),
    M = n(281055),
    O = n(920393),
    k = n(981631),
    y = n(217702),
    P = n(388032),
    R = n(451680);
let w = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
    Z = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function B() {
    let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: R.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: P.intl.string(P.t.U7Xrb2)
        })
    });
}
function U(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: S.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(R.stillFrameImageCard, { [R.stillFrameImageCardHidden]: !n })
                  })
          });
}
function F(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        m = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: o()(R.endScreenPanel, R.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: R.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: R.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            className: R.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            className: R.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(L.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: R.endScreenIcon
                })
            ]
        })
    });
}
function V(e) {
    var t, n, l, c, p, T, L, V, q, G, z;
    let { quest: H, videoSessionId: Y, onOptimisticProgressUpdate: Q, autoplay: W, parentTransitionState: K } = e,
        X = (0, h.km)((e) => e.transcriptEnabled),
        J = (0, h.km)((e) => e.setTranscriptEnabled),
        $ = (0, h.km)((e) => e.captionEnabled),
        ee = (0, h.km)((e) => e.setCaptionEnabled),
        et = (0, h.km)((e) => e.fullScreenEnabled),
        en = (0, h.km)((e) => e.setFullScreenEnabled),
        { focused: er, focusedChanged: ei } = (0, M.xU)(),
        { visible: el, visibleChanged: eo, targetRef: es } = (0, M.Yy)(),
        [ea, eu] = i.useState(!0 === W ? A.r.PLAYING : A.r.PAUSED),
        [ec, ed] = i.useState(!1),
        em = (0, x.il)(H),
        [ev, ep] = i.useState(em.percentComplete),
        [eE, ef] = i.useState(!1),
        [eg, eC] = i.useState(!0),
        [eS, ex] = i.useState(!1),
        [eh, e_] = i.useState([]),
        [eT, eI] = i.useState(E.Z.getEffectiveConnectionSpeed()),
        [eD, eN] = i.useState(0),
        [ej, eA] = i.useState(0),
        [eb, eL] = i.useState(!1),
        [eM, eO] = i.useState(!1),
        ek = i.useRef(null),
        ey = i.useRef(null),
        eP = (0, i.useRef)(-1),
        eR = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, a.X),
        ew = (0, h.km)((e) => e.setVideoProgress),
        eZ = (0, h.km)((e) => e.muted),
        eB = (0, h.km)((e) => e.volume),
        eU = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        eF = (0, i.useRef)(null),
        eV = (0, i.useRef)(null),
        eq = i.useRef(!0),
        eG = (null === (t = H.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        ez = (0, h.km)((e) => e.transcript),
        [eH, eY] = i.useState(null),
        [eQ, eW] = i.useState(!1),
        [eK, eX] = i.useState(!1),
        [eJ, e$] = i.useState(null),
        e0 = eG ? (null !== (L = null === (n = eF.current) || void 0 === n ? void 0 : n.duration) && void 0 !== L ? L : 0) : Math.max(eR.maxTimestampSec, em.progressSeconds),
        e1 = i.useMemo(() => (w.has(eT) ? _.i.VIDEO_PLAYER_VIDEO : _.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eT]),
        e2 = i.useMemo(() => (null != e1 ? (0, _.z)(e1, H) : null), [e1, H]),
        e6 = i.useCallback(
            (e) => {
                null != eF.current &&
                    (0, g.dA)({
                        questId: H.id,
                        event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e1,
                            quest_completed: eG,
                            video_duration_sec: eF.current.duration,
                            video_progress: (0, I.formatVideoProgressRatio)(e.segment_end_sec, eF.current.duration),
                            video_session_id: Y
                        }
                    });
            },
            [H.id, e1, eG, Y]
        ),
        { forceSendCurrentSegment: e4 } = (0, O.Z)({
            videoRef: eF,
            isPlaying: ea === A.r.PLAYING,
            isMetadataLoaded: eQ,
            isInitialSeekComplete: eK,
            onAnalytics: e6,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e7 = i.useCallback(
            (e) => {
                if ((eu(e), null != eF.current))
                    switch (e) {
                        case A.r.PLAYING:
                            eF.current.play(),
                                (0, g.dA)({
                                    questId: H.id,
                                    event: k.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eF.current.currentTime,
                                        pause_reason: eH,
                                        video_session_id: Y
                                    }
                                }),
                                eY(null);
                            break;
                        case A.r.PAUSED:
                            eF.current.pause(), e4();
                            break;
                        case A.r.ENDED:
                            J(!1), e4();
                    }
            },
            [H.id, eH, e4, J, Y]
        );
    i.useLayoutEffect(() => {
        eq.current && ((eq.current = !1), eI(E.Z.getEffectiveConnectionSpeed()), eG && eR.timestampSec >= eR.duration && ew(H.id, 0, eR.duration));
    }, []),
        i.useEffect(() => {
            null != eF.current &&
                null != eH &&
                (0, g.dA)({
                    questId: H.id,
                    event: k.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        reason: eH,
                        video_session_id: Y
                    }
                });
        }, [eH, H.id, Y]),
        i.useEffect(() => {
            ei &&
                null != eF.current &&
                (0, g.dA)({
                    questId: H.id,
                    event: er ? k.rMx.QUEST_VIDEO_APP_FOCUSED : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        video_state: ea,
                        video_session_id: Y
                    }
                });
        }, [er, ei, ea, H.id, Y]);
    let e9 = i.useCallback(
        (e) => {
            var t;
            !eG && (null === (t = H.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, x.FI)(H, e),
                null != eF.current &&
                    (0, g.dA)({
                        questId: H.id,
                        event: k.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, I.formatVideoProgressRatio)(eF.current.currentTime, eF.current.duration),
                            video_timestamp_seconds: eF.current.currentTime,
                            video_session_id: Y
                        }
                    });
        },
        [H, eG, eF, Y]
    );
    i.useEffect(() => {
        (K === d.ModalTransitionState.HIDDEN || K === d.ModalTransitionState.EXITING || K === d.ModalTransitionState.EXITED || (null != K && eo && !el && !eG) || (ei && !er && !eG)) && null != eF.current && ea === A.r.PLAYING && (e7(A.r.PAUSED), !eG && eY(A.y.LOST_FOCUS));
    }, [K, er, ei, el, eo, ea, eG, e7, e9]);
    let e8 = () => {
            ed(!0);
        },
        e3 = () => {
            ed(!1);
        },
        e5 = ec || ea === A.r.PAUSED || ea === A.r.ENDED,
        te = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
            null != t &&
                !(0, f.rB)(t) &&
                (t.removeEventListener(f.NO, te),
                en(!1),
                (0, g.dA)({
                    questId: H.id,
                    event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: Y }
                }));
        }, [H.id, en, Y]),
        tt = () => {
            if (null != eF.current)
                tr(Math.max(eF.current.currentTime - 10, 0)),
                    ea === A.r.ENDED && e7(A.r.PAUSED),
                    (0, g._3)({
                        questId: H.id,
                        questContent: S.jn.VIDEO_MODAL,
                        questContentCTA: g.jZ.SEEK_BACKWARD
                    });
        },
        tn = () => {
            if (null == eF.current || !tg) return;
            let e = Math.min(eF.current.currentTime + 10, e0);
            tr(e),
                ea !== A.r.ENDED && e >= eF.current.duration && e7(A.r.ENDED),
                (0, g._3)({
                    questId: H.id,
                    questContent: S.jn.VIDEO_MODAL,
                    questContentCTA: g.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = eF.current;
        return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, te);
        };
    }, [te]);
    let tr = i.useCallback(
            (e) => {
                null != eF.current && (e4(), ef(!0), eX(!1), (eF.current.currentTime = e), ew(H.id, e, eF.current.duration));
            },
            [eF, ew, H.id, e4]
        ),
        ti = () => {
            if (null != eF.current)
                switch (ea) {
                    case A.r.ENDED:
                        tr(0), e7(A.r.PLAYING);
                        break;
                    case A.r.PLAYING:
                        e7(A.r.PAUSED), eY(A.y.PAUSE_BUTTON);
                        break;
                    default:
                        e7(A.r.PLAYING);
                }
        },
        tl = (e) => {
            e$(e);
        },
        to = (e) => {
            e$((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        ts = i.useCallback(() => {
            if (null == eF.current || 0 === eF.current.textTracks.length) return;
            let e = eF.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tl(n)), (n.onexit = () => to(n)));
                }
        }, [eF]);
    i.useEffect(() => {
        if (null == eV.current) return;
        let e = eV.current;
        return (
            e.addEventListener('load', ts),
            () => {
                null != e && e.removeEventListener('load', ts);
            }
        );
    }, [eV, ts]);
    let ta = (e) => {
        if (null != eF.current && ea === A.r.PLAYING) {
            if ((eg && eC(!1), eS)) {
                let e = null != ey.current ? Date.now() - ey.current : null;
                (0, g.dA)({
                    questId: H.id,
                    event: k.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                    properties: {
                        video_asset_id: e1,
                        network_connection_speed: eT,
                        duration: e,
                        buffer_index: eP.current,
                        video_session_id: Y
                    }
                }),
                    ex(!1);
            }
            e7(A.r.PLAYING);
        }
    };
    i.useEffect(() => {
        if (!eE) return;
        let e = setTimeout(() => {
            ef(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eE]);
    let [{ controlBarAnimSpring: tu }, tc] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: Z,
            onStart: () => {
                eO(!1);
            },
            onRest: (e) => {
                1 === e.value && eO(!0);
            }
        })),
        td = (0, i.useRef)(null),
        [{ captionHeightSpring: tm }, tv] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: Z
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tv({
                captionHeightSpring: $ && null != eJ && null !== (t = null === (e = td.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eU
            }),
            () => {
                tm.stop();
            }
        );
    }, [$, tv, eU, eJ, tm]),
        i.useEffect(
            () => (
                tc({
                    controlBarAnimSpring: e5 || eb ? 1 : 0,
                    immediate: eU
                }),
                () => {
                    tu.stop();
                }
            ),
            [e5, tc, eU, eb, tu]
        );
    let tp = ea === A.r.ENDED,
        tE = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
        tf = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, H), [H]),
        tg = eG || eR.maxTimestampSec >= (null !== (V = null === (l = eF.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== V ? V : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: R.videoCont,
            'data-fullscreen': et,
            tabIndex: -1,
            onMouseEnter: e8,
            onMouseLeave: e3,
            onFocus: e8,
            onBlur: e3,
            children: (0, r.jsxs)('div', {
                className: R.videoContInnerRelative,
                children: [
                    (0, r.jsx)(U, {
                        quest: H,
                        shouldShow: tp
                    }),
                    tp && (0, r.jsx)('div', { className: R.videoContOverlay }),
                    (0, r.jsxs)(v.Z, {
                        ref: (e) => {
                            (eF.current = e), (es.current = e);
                        },
                        autoPlay: W,
                        playsInline: !0,
                        mediaLayoutType: et ? y.hV.STATIC : y.hV.RESPONSIVE,
                        className: o()({
                            [R.hidden]: tp,
                            [R.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tE ? void 0 : tE.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eF.current && (eF.current.currentTime >= eD && (eN(eF.current.currentTime + 6 + 2 * Math.random()), e9(eF.current.currentTime)), eF.current.currentTime >= ej && (eA(eF.current.currentTime + 1), (0, C.qm)(H.id, em.taskType, eF.current.currentTime), Q(eF.current.currentTime)), ew(H.id, eF.current.currentTime, eF.current.duration), ep((eF.current.currentTime / eF.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eF.current && (e9(eF.current.duration + 1), ew(H.id, eF.current.duration, eF.current.duration)), e7(A.r.ENDED), ex(!1);
                        },
                        onLoadedData: (e) => {
                            if (eg) {
                                let e = null != ek.current ? Date.now() - ek.current : null;
                                (0, g.dA)({
                                    questId: H.id,
                                    event: k.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        duration: e,
                                        video_session_id: Y
                                    }
                                }),
                                    eC(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eF.current) eW(!0), tr(eG ? eR.timestampSec : Math.max(eR.timestampSec, em.progressSeconds)), eZ ? (eF.current.volume = 0) : (eF.current.volume = eB);
                        },
                        onLoadStart: () => {
                            (ek.current = Date.now()),
                                (0, g.dA)({
                                    questId: H.id,
                                    event: k.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        video_session_id: Y
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (ey.current = Date.now()),
                                (eP.current += 1),
                                (0, g.dA)({
                                    questId: H.id,
                                    event: k.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        buffer_index: eP.current,
                                        video_session_id: Y
                                    }
                                }),
                                ex(!0);
                        },
                        onProgress: (e) => {
                            if (null == eF.current) return;
                            let t = [];
                            for (let e = 0; e < eF.current.buffered.length; e++) {
                                let n = eF.current.buffered.start(e),
                                    r = eF.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eF.current.duration,
                                        size: (r - n) / eF.current.duration
                                    });
                            }
                            e_(t);
                        },
                        onCanPlay: ta,
                        onCanPlayThrough: ta,
                        onSeeked: () => {
                            eX(!0);
                        },
                        onClick: () => {
                            ti();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tf &&
                                (0, r.jsx)('track', {
                                    ref: eV,
                                    src: tf.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e2 &&
                                (0, r.jsx)('source', {
                                    src: e2.url,
                                    type: e2.mimetype
                                })
                        ]
                    }),
                    (eg || eS) &&
                        ea === A.r.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: R.loadingSpinner
                        }),
                    ea === A.r.PAUSED && eH === A.y.LOST_FOCUS && (0, r.jsx)(B, {}),
                    X &&
                        ea !== A.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => J(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: R.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: R.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tu, tm], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(j.K, {
                                        quest: H,
                                        onClose: () => {
                                            J(!1),
                                                (0, g._3)({
                                                    questId: H.id,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    questContentCTA: g.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ea === A.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(F, {
                                title: null !== (q = null === (c = H.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== q ? q : P.intl.string(P.t.iiTtpK),
                                subtitle: null !== (G = null === (p = H.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== G ? G : P.intl.string(P.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: R.endScreenPanelRight,
                                onClick: () => {
                                    (0, g._3)({
                                        questId: H.id,
                                        questContent: S.jn.VIDEO_MODAL,
                                        questContentCTA: g.jZ.LEARN_MORE
                                    }),
                                        (0, x.FE)(H, {
                                            content: S.jn.VIDEO_MODAL,
                                            ctaContent: g.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: R.videoFooterContGradient,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    tu.to({
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
                            className: o()(R.playPausePopCont, {
                                [R.play]: ea === A.r.PLAYING,
                                [R.pause]: ea === A.r.PAUSED
                            }),
                            children: ea === A.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: R.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: R.playPausePopIcon })
                        },
                        ea
                    ),
                    $ &&
                        null != eJ &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.captionContainer,
                            ref: td,
                            style: {
                                translateY: (0, s.to)(
                                    [
                                        tu.to({
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
                                className: R.captionText,
                                children: eJ.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: R.videoFooterCont,
                        style: {
                            paddingLeft: (0, s.to)(
                                [
                                    tu.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, s.to)(
                                [
                                    tu.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, s.to)(
                                [
                                    tu.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(N.Z, {
                                percent: ev,
                                animate: !0 !== eq.current && !eE,
                                interactionEnabled: eG && eM,
                                backgroundColor: e5 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e5 ? eh : void 0,
                                duration: null !== (z = null === (T = eF.current) || void 0 === T ? void 0 : T.duration) && void 0 !== z ? z : 1,
                                maxSeekableTime: e5 && eM ? e0 : void 0,
                                onClick: (e) => {
                                    tr(e), ea === A.r.ENDED && e7(A.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    tt();
                                },
                                onScrubForward: () => {
                                    tn();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: R.videoControlsCont,
                                style: {
                                    paddingTop: (0, s.to)(
                                        [
                                            tu.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [
                                            tu.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, s.to)(
                                        [
                                            tu.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(D.Z, {
                                    videoRef: eF,
                                    quest: H,
                                    playerState: ea,
                                    animSpring: tu,
                                    visible: e5,
                                    seekForwardEnabled: tg,
                                    hideCaptionBtn: null == tf,
                                    handlePlaybackBtnClick: ti,
                                    handleTranscriptBtnClick: () => {
                                        !X && (null == ez || ez.questId !== H.id || ez.fetchStatus === h.iF.NONE || ez.fetchStatus === h.iF.FAILURE) && (0, C.lL)(H),
                                            J(!X),
                                            (0, g._3)({
                                                questId: H.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: X ? g.jZ.TRANSCRIPT_DISABLE : g.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        ee(!$),
                                            (0, g._3)({
                                                questId: H.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: $ ? g.jZ.CLOSED_CAPTIONING_DISABLE : g.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !et,
                                            n = (0, f.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, te),
                                              (0, g.dA)({
                                                  questId: H.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: Y }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(f.NO, te),
                                              (0, g.dA)({
                                                  questId: H.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: Y }
                                              }),
                                              (0, f.Pr)(n)),
                                            en(t);
                                    },
                                    handleSeekBackBtnClick: tt,
                                    handleSeekForwardBtnClick: tn,
                                    handleControlBarPendingInteraction: eL
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
