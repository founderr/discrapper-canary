n.d(t, {
    Z: function () {
        return q;
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
    c = n(232713),
    u = n(442837),
    d = n(780384),
    m = n(481060),
    f = n(607070),
    p = n(70097),
    v = n(210887),
    C = n(866960),
    g = n(228488),
    x = n(617136),
    S = n(272008),
    _ = n(497505),
    E = n(918701),
    h = n(184299),
    T = n(720293),
    I = n(602667),
    N = n(341907),
    b = n(881773),
    j = n(355243),
    D = n(106743),
    A = n(223418),
    y = n(604162),
    k = n(747717),
    B = n(281055),
    L = n(920393),
    P = n(981631),
    M = n(217702),
    O = n(388032),
    R = n(417575);
let w = new Set([P.IyS.FIVE_G, P.IyS.FOUR_G, P.IyS.UNKNOWN]),
    F = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function Z() {
    let e = (0, u.e7)([v.Z], () => v.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: R.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: O.intl.string(O.t.U7Xrb2)
        })
    });
}
function U(e) {
    let { quest: t, shouldShow: n } = e,
        i = o.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: _.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: 'Video thumbnail',
                      className: l()(R.stillFrameImageCard, { [R.stillFrameImageCardHidden]: !n })
                  })
          });
}
function V(e) {
    let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        f = () => {
            u(!1);
        };
    return (0, r.jsx)(m.Clickable, {
        className: l()(R.endScreenPanel, R.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: f,
        onFocus: d,
        onBlur: f,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: R.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: R.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-md/semibold',
                            className: R.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-sm/normal',
                            className: R.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(k.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: R.endScreenIcon
                })
            ]
        })
    });
}
function q(e) {
    var t, n, i, d, v, I, k, q, G, H, z;
    let { quest: Y, onOptimisticProgressUpdate: W, autoplay: Q, parentTransitionState: K } = e,
        X = (0, h.km)((e) => e.transcriptEnabled),
        J = (0, h.km)((e) => e.setTranscriptEnabled),
        $ = (0, h.km)((e) => e.captionEnabled),
        ee = (0, h.km)((e) => e.setCaptionEnabled),
        et = (0, h.km)((e) => e.fullScreenEnabled),
        en = (0, h.km)((e) => e.setFullScreenEnabled),
        { focused: er, focusedChanged: eo } = (0, B.xU)(),
        { visible: ei, visibleChanged: el, targetRef: es } = (0, B.Yy)(),
        [ea, ec] = o.useState(!0 === Q ? A.r.PLAYING : A.r.PAUSED),
        [eu, ed] = o.useState(!1),
        em = (0, E.il)(Y),
        [ef, ep] = o.useState(em.percentComplete),
        [ev, eC] = o.useState(!1),
        [eg, ex] = o.useState(!0),
        [eS, e_] = o.useState(!1),
        [eE, eh] = o.useState([]),
        [eT, eI] = o.useState(C.Z.getEffectiveConnectionSpeed()),
        [eN, eb] = o.useState(0),
        [ej, eD] = o.useState(0),
        [eA, ey] = o.useState(!1),
        [ek, eB] = o.useState(!1),
        eL = o.useRef(null),
        eP = o.useRef(null),
        eM = (0, o.useRef)(-1),
        eO = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[Y.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, c.X),
        eR = (0, h.km)((e) => e.setVideoProgress),
        ew = (0, h.km)((e) => e.muted),
        eF = (0, h.km)((e) => e.volume),
        eZ = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        eU = (0, o.useRef)(null),
        eV = (0, o.useRef)(null),
        eq = o.useRef(!0),
        eG = (null === (t = Y.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eH = (0, h.km)((e) => e.transcript),
        [ez, eY] = o.useState(null),
        [eW, eQ] = o.useState(!1),
        [eK, eX] = o.useState(!1),
        [eJ, e$] = o.useState(null),
        e0 = eG ? (null !== (k = null === (n = eU.current) || void 0 === n ? void 0 : n.duration) && void 0 !== k ? k : 0) : Math.max(eO.maxTimestampSec, em.progressSeconds),
        e1 = o.useMemo(() => (w.has(eT) ? T.i.VIDEO_PLAYER_VIDEO : T.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eT]),
        e2 = o.useMemo(() => (null != e1 ? (0, T.z)(e1, Y) : null), [e1, Y]),
        [e7] = o.useState(a.Z),
        e9 = o.useCallback(
            (e) => {
                null != eU.current &&
                    (0, x.dA)({
                        questId: Y.id,
                        event: P.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e1,
                            quest_completed: eG,
                            video_duration_sec: eU.current.duration,
                            video_progress: (0, N.formatVideoProgressRatio)(e.segment_end_sec, eU.current.duration),
                            video_session_id: e7
                        }
                    });
            },
            [Y.id, e1, eG, e7]
        ),
        { forceSendCurrentSegment: e3 } = (0, L.Z)({
            videoRef: eU,
            isPlaying: ea === A.r.PLAYING,
            isMetadataLoaded: eW,
            isInitialSeekComplete: eK,
            onAnalytics: e9,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e6 = o.useCallback(
            (e) => {
                if ((ec(e), null != eU.current))
                    switch (e) {
                        case A.r.PLAYING:
                            eU.current.play(),
                                (0, x.dA)({
                                    questId: Y.id,
                                    event: P.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eU.current.currentTime,
                                        pause_reason: ez,
                                        video_session_id: e7
                                    }
                                }),
                                eY(null);
                            break;
                        case A.r.PAUSED:
                            eU.current.pause(), e3();
                            break;
                        case A.r.ENDED:
                            J(!1), e3();
                    }
            },
            [Y.id, ez, e3, J, e7]
        );
    o.useLayoutEffect(() => {
        eq.current && ((eq.current = !1), eI(C.Z.getEffectiveConnectionSpeed()), eG && eO.timestampSec >= eO.duration && eR(Y.id, 0, eO.duration));
    }, []),
        o.useEffect(() => {
            null != eU.current &&
                null != ez &&
                (0, x.dA)({
                    questId: Y.id,
                    event: P.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eU.current.currentTime,
                        reason: ez,
                        video_session_id: e7
                    }
                });
        }, [ez, Y.id, e7]),
        o.useEffect(() => {
            eo &&
                null != eU.current &&
                (0, x.dA)({
                    questId: Y.id,
                    event: er ? P.rMx.QUEST_VIDEO_APP_FOCUSED : P.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eU.current.currentTime,
                        video_state: ea,
                        video_session_id: e7
                    }
                });
        }, [er, eo, ea, Y.id, e7]);
    let e4 = o.useCallback(
        (e) => {
            var t;
            !eG && (null === (t = Y.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, S.FI)(Y.id, e),
                null != eU.current &&
                    (0, x.dA)({
                        questId: Y.id,
                        event: P.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, N.formatVideoProgressRatio)(eU.current.currentTime, eU.current.duration),
                            video_timestamp_seconds: eU.current.currentTime,
                            video_session_id: e7
                        }
                    });
        },
        [Y, eG, eU, e7]
    );
    o.useEffect(() => {
        (K === m.ModalTransitionState.HIDDEN || K === m.ModalTransitionState.EXITING || K === m.ModalTransitionState.EXITED || (null != K && el && !ei && !eG) || (eo && !er && !eG)) && null != eU.current && ea === A.r.PLAYING && (e6(A.r.PAUSED), !eG && eY(A.y.LOST_FOCUS));
    }, [K, er, eo, ei, el, ea, eG, e6, e4]);
    let e8 = () => {
            ed(!0);
        },
        e5 = () => {
            ed(!1);
        },
        te = eu || ea === A.r.PAUSED || ea === A.r.ENDED,
        tt = o.useCallback(() => {
            var e;
            let t = (0, g.fn)(null === (e = eU.current) || void 0 === e ? void 0 : e.parentNode, eU.current);
            null != t &&
                !(0, g.rB)(t) &&
                (t.removeEventListener(g.NO, tt),
                en(!1),
                (0, x.dA)({
                    questId: Y.id,
                    event: P.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: e7 }
                }));
        }, [Y.id, en, e7]),
        tn = () => {
            if (null != eU.current)
                to(Math.max(eU.current.currentTime - 10, 0)),
                    ea === A.r.ENDED && e6(A.r.PAUSED),
                    (0, x._3)({
                        questId: Y.id,
                        questContent: _.jn.VIDEO_MODAL,
                        questContentCTA: x.jZ.SEEK_BACKWARD
                    });
        },
        tr = () => {
            if (null == eU.current || !tx) return;
            let e = Math.min(eU.current.currentTime + 10, e0);
            to(e),
                ea !== A.r.ENDED && e >= eU.current.duration && e6(A.r.ENDED),
                (0, x._3)({
                    questId: Y.id,
                    questContent: _.jn.VIDEO_MODAL,
                    questContentCTA: x.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eU.current;
        return () => {
            let t = (0, g.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(g.NO, tt);
        };
    }, [tt]);
    let to = o.useCallback(
            (e) => {
                null != eU.current && (e3(), eC(!0), eX(!1), (eU.current.currentTime = e), eR(Y.id, e, eU.current.duration));
            },
            [eU, eR, Y.id, e3]
        ),
        ti = () => {
            if (null != eU.current)
                switch (ea) {
                    case A.r.ENDED:
                        to(0), e6(A.r.PLAYING);
                        break;
                    case A.r.PLAYING:
                        e6(A.r.PAUSED), eY(A.y.PAUSE_BUTTON);
                        break;
                    default:
                        e6(A.r.PLAYING);
                }
        },
        tl = (e) => {
            e$(e);
        },
        ts = (e) => {
            e$((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        ta = o.useCallback(() => {
            if (null == eU.current || 0 === eU.current.textTracks.length) return;
            let e = eU.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, y.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tl(n)), (n.onexit = () => ts(n)));
                }
        }, [eU]);
    o.useEffect(() => {
        if (null == eV.current) return;
        let e = eV.current;
        return (
            e.addEventListener('load', ta),
            () => {
                null != e && e.removeEventListener('load', ta);
            }
        );
    }, [eV, ta]);
    let tc = (e) => {
        if (null != eU.current && ea === A.r.PLAYING) {
            if ((eg && ex(!1), eS)) {
                let e = null != eP.current ? Date.now() - eP.current : null;
                (0, x.dA)({
                    questId: Y.id,
                    event: P.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                    properties: {
                        video_asset_id: e1,
                        network_connection_speed: eT,
                        duration: e,
                        buffer_index: eM.current,
                        video_session_id: e7
                    }
                }),
                    e_(!1);
            }
            e6(A.r.PLAYING);
        }
    };
    o.useEffect(() => {
        if (!ev) return;
        let e = setTimeout(() => {
            eC(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ev]);
    let [{ controlBarAnimSpring: tu }, td] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: F,
            onStart: () => {
                eB(!1);
            },
            onRest: (e) => {
                1 === e.value && eB(!0);
            }
        })),
        tm = (0, o.useRef)(null),
        [{ captionHeightSpring: tf }, tp] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: F
        }));
    o.useEffect(() => {
        var e, t;
        return (
            tp({
                captionHeightSpring: $ && null != eJ && null !== (t = null === (e = tm.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eZ
            }),
            () => {
                tf.stop();
            }
        );
    }, [$, tp, eZ, eJ, tf]),
        o.useEffect(
            () => (
                td({
                    controlBarAnimSpring: te || eA ? 1 : 0,
                    immediate: eZ
                }),
                () => {
                    tu.stop();
                }
            ),
            [te, td, eZ, eA, tu]
        );
    let tv = ea === A.r.ENDED,
        tC = o.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, Y), [Y]),
        tg = o.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_CAPTION, Y), [Y]),
        tx = eG || eO.maxTimestampSec >= (null !== (q = null === (i = eU.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== q ? q : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.Clickable, {
            className: R.videoCont,
            'data-fullscreen': et,
            tabIndex: -1,
            onMouseEnter: e8,
            onMouseLeave: e5,
            onFocus: e8,
            onBlur: e5,
            children: (0, r.jsxs)('div', {
                className: R.videoContInnerRelative,
                children: [
                    (0, r.jsx)(U, {
                        quest: Y,
                        shouldShow: tv
                    }),
                    tv && (0, r.jsx)('div', { className: R.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eU.current = e), (es.current = e);
                        },
                        autoPlay: Q,
                        playsInline: !0,
                        mediaLayoutType: et ? M.hV.STATIC : M.hV.RESPONSIVE,
                        className: l()({
                            [R.hidden]: tv,
                            [R.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tC ? void 0 : tC.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eU.current && (eU.current.currentTime >= eN && (eb(eU.current.currentTime + 6 + 2 * Math.random()), e4(eU.current.currentTime)), eU.current.currentTime >= ej && (eD(eU.current.currentTime + 1), (0, S.qm)(Y.id, em.taskType, eU.current.currentTime), W(eU.current.currentTime)), eR(Y.id, eU.current.currentTime, eU.current.duration), ep((eU.current.currentTime / eU.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eU.current && (e4(eU.current.duration + 1), eR(Y.id, eU.current.duration, eU.current.duration)), e6(A.r.ENDED), e_(!1);
                        },
                        onLoadedData: (e) => {
                            if (eg) {
                                let e = null != eL.current ? Date.now() - eL.current : null;
                                (0, x.dA)({
                                    questId: Y.id,
                                    event: P.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        duration: e,
                                        video_session_id: e7
                                    }
                                }),
                                    ex(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eU.current) eQ(!0), to(eG ? eO.timestampSec : Math.max(eO.timestampSec, em.progressSeconds)), ew ? (eU.current.volume = 0) : (eU.current.volume = eF);
                        },
                        onLoadStart: () => {
                            (eL.current = Date.now()),
                                (0, x.dA)({
                                    questId: Y.id,
                                    event: P.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        video_session_id: e7
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eP.current = Date.now()),
                                (eM.current += 1),
                                (0, x.dA)({
                                    questId: Y.id,
                                    event: P.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        buffer_index: eM.current,
                                        video_session_id: e7
                                    }
                                }),
                                e_(!0);
                        },
                        onProgress: (e) => {
                            if (null == eU.current) return;
                            let t = [];
                            for (let e = 0; e < eU.current.buffered.length; e++) {
                                let n = eU.current.buffered.start(e),
                                    r = eU.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eU.current.duration,
                                        size: (r - n) / eU.current.duration
                                    });
                            }
                            eh(t);
                        },
                        onCanPlay: tc,
                        onCanPlayThrough: tc,
                        onSeeked: () => {
                            eX(!0);
                        },
                        onClick: () => {
                            ti();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tg &&
                                (0, r.jsx)('track', {
                                    ref: eV,
                                    src: tg.url,
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
                        (0, r.jsx)(m.Spinner, {
                            type: m.Spinner.Type.WANDERING_CUBES,
                            className: R.loadingSpinner
                        }),
                    ea === A.r.PAUSED && ez === A.y.LOST_FOCUS && (0, r.jsx)(Z, {}),
                    X &&
                        ea !== A.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Clickable, {
                                    onClick: () => J(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: R.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: R.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tu, tf], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(D.K, {
                                        quest: Y,
                                        onClose: () => {
                                            J(!1),
                                                (0, x._3)({
                                                    questId: Y.id,
                                                    questContent: _.jn.VIDEO_MODAL,
                                                    questContentCTA: x.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ea === A.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(V, {
                                title: null !== (G = null === (d = Y.config.videoMetadata) || void 0 === d ? void 0 : d.messages.videoEndCtaTitle) && void 0 !== G ? G : O.intl.string(O.t.iiTtpK),
                                subtitle: null !== (H = null === (v = Y.config.videoMetadata) || void 0 === v ? void 0 : v.messages.videoEndCtaSubtitle) && void 0 !== H ? H : O.intl.string(O.t.mxaHf3),
                                icon: m.ArrowLargeRightIcon,
                                className: R.endScreenPanelRight,
                                onClick: () => {
                                    (0, x._3)({
                                        questId: Y.id,
                                        questContent: _.jn.VIDEO_MODAL,
                                        questContentCTA: x.jZ.LEARN_MORE
                                    }),
                                        (0, E.FE)(Y, {
                                            content: _.jn.VIDEO_MODAL,
                                            ctaContent: x.jZ.LEARN_MORE
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
                            className: l()(R.playPausePopCont, {
                                [R.play]: ea === A.r.PLAYING,
                                [R.pause]: ea === A.r.PAUSED
                            }),
                            children: ea === A.r.PLAYING ? (0, r.jsx)(m.PlayIcon, { className: R.playPausePopIcon }) : (0, r.jsx)(m.PauseIcon, { className: R.playPausePopIcon })
                        },
                        ea
                    ),
                    $ &&
                        null != eJ &&
                        (0, r.jsx)(s.animated.div, {
                            className: R.captionContainer,
                            ref: tm,
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
                            children: (0, r.jsx)(m.Text, {
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
                            (0, r.jsx)(j.Z, {
                                percent: ef,
                                animate: !0 !== eq.current && !ev,
                                interactionEnabled: eG && ek,
                                backgroundColor: te ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: te ? eE : void 0,
                                duration: null !== (z = null === (I = eU.current) || void 0 === I ? void 0 : I.duration) && void 0 !== z ? z : 1,
                                maxSeekableTime: te && ek ? e0 : void 0,
                                onClick: (e) => {
                                    to(e), ea === A.r.ENDED && e6(A.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    tn();
                                },
                                onScrubForward: () => {
                                    tr();
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
                                children: (0, r.jsx)(b.Z, {
                                    videoRef: eU,
                                    quest: Y,
                                    playerState: ea,
                                    animSpring: tu,
                                    visible: te,
                                    seekForwardEnabled: tx,
                                    hideCaptionBtn: null == tg,
                                    handlePlaybackBtnClick: ti,
                                    handleTranscriptBtnClick: () => {
                                        !X && (null == eH || eH.questId !== Y.id || eH.fetchStatus === h.iF.NONE || eH.fetchStatus === h.iF.FAILURE) && (0, S.lL)(Y),
                                            J(!X),
                                            (0, x._3)({
                                                questId: Y.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: X ? x.jZ.TRANSCRIPT_DISABLE : x.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        ee(!$),
                                            (0, x._3)({
                                                questId: Y.id,
                                                questContent: _.jn.VIDEO_MODAL,
                                                questContentCTA: $ ? x.jZ.CLOSED_CAPTIONING_DISABLE : x.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !et,
                                            n = (0, g.fn)(null === (e = eU.current) || void 0 === e ? void 0 : e.parentNode, eU.current);
                                        t && null != n
                                            ? ((0, g.Dj)(n),
                                              n.addEventListener(g.NO, tt),
                                              (0, x.dA)({
                                                  questId: Y.id,
                                                  event: P.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(g.NO, tt),
                                              (0, x.dA)({
                                                  questId: Y.id,
                                                  event: P.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: e7 }
                                              }),
                                              (0, g.Pr)(n)),
                                            en(t);
                                    },
                                    handleSeekBackBtnClick: tn,
                                    handleSeekForwardBtnClick: tr,
                                    handleControlBarPendingInteraction: ey
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
