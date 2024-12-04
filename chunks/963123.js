n.d(t, {
    Z: function () {
        return q;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(752877),
    a = n(772848),
    u = n(232713),
    c = n(442837),
    d = n(780384),
    m = n(481060),
    v = n(607070),
    p = n(70097),
    E = n(210887),
    f = n(866960),
    g = n(228488),
    C = n(617136),
    S = n(272008),
    x = n(497505),
    h = n(918701),
    _ = n(184299),
    T = n(720293),
    I = n(602667),
    D = n(341907),
    N = n(881773),
    j = n(355243),
    A = n(106743),
    b = n(223418),
    L = n(604162),
    M = n(747717),
    O = n(281055),
    k = n(920393),
    y = n(981631),
    P = n(217702),
    R = n(388032),
    w = n(451680);
let Z = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
    B = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function U() {
    let e = (0, c.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: w.pauseText,
        style: { background: (0, d.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: R.intl.string(R.t.U7Xrb2)
        })
    });
}
function F(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: o()(w.stillFrameImageCard, { [w.stillFrameImageCardHidden]: !n })
                  })
          });
}
function V(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: a } = e,
        [u, c] = i.useState(!1),
        d = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsx)(m.Clickable, {
        className: o()(w.endScreenPanel, w.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: v,
        onFocus: d,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: w.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: w.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-md/semibold',
                            className: w.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(m.Heading, {
                            variant: 'heading-sm/normal',
                            className: w.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(M.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: w.endScreenIcon
                })
            ]
        })
    });
}
function q(e) {
    var t, n, l, d, E, I, M, q, G, z, H;
    let { quest: Y, onOptimisticProgressUpdate: Q, autoplay: W, parentTransitionState: K } = e,
        X = (0, _.km)((e) => e.transcriptEnabled),
        J = (0, _.km)((e) => e.setTranscriptEnabled),
        $ = (0, _.km)((e) => e.captionEnabled),
        ee = (0, _.km)((e) => e.setCaptionEnabled),
        et = (0, _.km)((e) => e.fullScreenEnabled),
        en = (0, _.km)((e) => e.setFullScreenEnabled),
        { focused: er, focusedChanged: ei } = (0, O.xU)(),
        { visible: el, visibleChanged: eo, targetRef: es } = (0, O.Yy)(),
        [ea, eu] = i.useState(!0 === W ? b.r.PLAYING : b.r.PAUSED),
        [ec, ed] = i.useState(!1),
        em = (0, h.il)(Y),
        [ev, ep] = i.useState(em.percentComplete),
        [eE, ef] = i.useState(!1),
        [eg, eC] = i.useState(!0),
        [eS, ex] = i.useState(!1),
        [eh, e_] = i.useState([]),
        [eT, eI] = i.useState(f.Z.getEffectiveConnectionSpeed()),
        [eD, eN] = i.useState(0),
        [ej, eA] = i.useState(0),
        [eb, eL] = i.useState(!1),
        [eM, eO] = i.useState(!1),
        ek = i.useRef(null),
        ey = i.useRef(null),
        eP = (0, i.useRef)(-1),
        eR = (0, _.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[Y.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, u.X),
        ew = (0, _.km)((e) => e.setVideoProgress),
        eZ = (0, _.km)((e) => e.muted),
        eB = (0, _.km)((e) => e.volume),
        eU = (0, c.e7)([v.Z], () => v.Z.useReducedMotion),
        eF = (0, i.useRef)(null),
        eV = (0, i.useRef)(null),
        eq = i.useRef(!0),
        eG = (null === (t = Y.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        ez = (0, _.km)((e) => e.transcript),
        [eH, eY] = i.useState(null),
        [eQ, eW] = i.useState(!1),
        [eK, eX] = i.useState(!1),
        [eJ, e$] = i.useState(null),
        e0 = eG ? (null !== (M = null === (n = eF.current) || void 0 === n ? void 0 : n.duration) && void 0 !== M ? M : 0) : Math.max(eR.maxTimestampSec, em.progressSeconds),
        e1 = i.useMemo(() => (Z.has(eT) ? T.i.VIDEO_PLAYER_VIDEO : T.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eT]),
        e2 = i.useMemo(() => (null != e1 ? (0, T.z)(e1, Y) : null), [e1, Y]),
        [e6] = i.useState(a.Z),
        e4 = i.useCallback(
            (e) => {
                null != eF.current &&
                    (0, C.dA)({
                        questId: Y.id,
                        event: y.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e1,
                            quest_completed: eG,
                            video_duration_sec: eF.current.duration,
                            video_progress: (0, D.formatVideoProgressRatio)(e.segment_end_sec, eF.current.duration),
                            video_session_id: e6
                        }
                    });
            },
            [Y.id, e1, eG, e6]
        ),
        { forceSendCurrentSegment: e7 } = (0, k.Z)({
            videoRef: eF,
            isPlaying: ea === b.r.PLAYING,
            isMetadataLoaded: eQ,
            isInitialSeekComplete: eK,
            onAnalytics: e4,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e8 = i.useCallback(
            (e) => {
                if ((eu(e), null != eF.current))
                    switch (e) {
                        case b.r.PLAYING:
                            eF.current.play(),
                                (0, C.dA)({
                                    questId: Y.id,
                                    event: y.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eF.current.currentTime,
                                        pause_reason: eH,
                                        video_session_id: e6
                                    }
                                }),
                                eY(null);
                            break;
                        case b.r.PAUSED:
                            eF.current.pause(), e7();
                            break;
                        case b.r.ENDED:
                            J(!1), e7();
                    }
            },
            [Y.id, eH, e7, J, e6]
        );
    i.useLayoutEffect(() => {
        eq.current && ((eq.current = !1), eI(f.Z.getEffectiveConnectionSpeed()), eG && eR.timestampSec >= eR.duration && ew(Y.id, 0, eR.duration));
    }, []),
        i.useEffect(() => {
            null != eF.current &&
                null != eH &&
                (0, C.dA)({
                    questId: Y.id,
                    event: y.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        reason: eH,
                        video_session_id: e6
                    }
                });
        }, [eH, Y.id, e6]),
        i.useEffect(() => {
            ei &&
                null != eF.current &&
                (0, C.dA)({
                    questId: Y.id,
                    event: er ? y.rMx.QUEST_VIDEO_APP_FOCUSED : y.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        video_state: ea,
                        video_session_id: e6
                    }
                });
        }, [er, ei, ea, Y.id, e6]);
    let e9 = i.useCallback(
        (e) => {
            var t;
            !eG && (null === (t = Y.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, h.FI)(Y, e),
                null != eF.current &&
                    (0, C.dA)({
                        questId: Y.id,
                        event: y.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, D.formatVideoProgressRatio)(eF.current.currentTime, eF.current.duration),
                            video_timestamp_seconds: eF.current.currentTime,
                            video_session_id: e6
                        }
                    });
        },
        [Y, eG, eF, e6]
    );
    i.useEffect(() => {
        (K === m.ModalTransitionState.HIDDEN || K === m.ModalTransitionState.EXITING || K === m.ModalTransitionState.EXITED || (null != K && eo && !el && !eG) || (ei && !er && !eG)) && null != eF.current && ea === b.r.PLAYING && (e8(b.r.PAUSED), !eG && eY(b.y.LOST_FOCUS));
    }, [K, er, ei, el, eo, ea, eG, e8, e9]);
    let e3 = () => {
            ed(!0);
        },
        e5 = () => {
            ed(!1);
        },
        te = ec || ea === b.r.PAUSED || ea === b.r.ENDED,
        tt = i.useCallback(() => {
            var e;
            let t = (0, g.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
            null != t &&
                !(0, g.rB)(t) &&
                (t.removeEventListener(g.NO, tt),
                en(!1),
                (0, C.dA)({
                    questId: Y.id,
                    event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: e6 }
                }));
        }, [Y.id, en, e6]),
        tn = () => {
            if (null != eF.current)
                ti(Math.max(eF.current.currentTime - 10, 0)),
                    ea === b.r.ENDED && e8(b.r.PAUSED),
                    (0, C._3)({
                        questId: Y.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        tr = () => {
            if (null == eF.current || !tC) return;
            let e = Math.min(eF.current.currentTime + 10, e0);
            ti(e),
                ea !== b.r.ENDED && e >= eF.current.duration && e8(b.r.ENDED),
                (0, C._3)({
                    questId: Y.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = eF.current;
        return () => {
            let t = (0, g.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(g.NO, tt);
        };
    }, [tt]);
    let ti = i.useCallback(
            (e) => {
                null != eF.current && (e7(), ef(!0), eX(!1), (eF.current.currentTime = e), ew(Y.id, e, eF.current.duration));
            },
            [eF, ew, Y.id, e7]
        ),
        tl = () => {
            if (null != eF.current)
                switch (ea) {
                    case b.r.ENDED:
                        ti(0), e8(b.r.PLAYING);
                        break;
                    case b.r.PLAYING:
                        e8(b.r.PAUSED), eY(b.y.PAUSE_BUTTON);
                        break;
                    default:
                        e8(b.r.PLAYING);
                }
        },
        to = (e) => {
            e$(e);
        },
        ts = (e) => {
            e$((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        ta = i.useCallback(() => {
            if (null == eF.current || 0 === eF.current.textTracks.length) return;
            let e = eF.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, L.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => to(n)), (n.onexit = () => ts(n)));
                }
        }, [eF]);
    i.useEffect(() => {
        if (null == eV.current) return;
        let e = eV.current;
        return (
            e.addEventListener('load', ta),
            () => {
                null != e && e.removeEventListener('load', ta);
            }
        );
    }, [eV, ta]);
    let tu = (e) => {
        if (null != eF.current && ea === b.r.PLAYING) {
            if ((eg && eC(!1), eS)) {
                let e = null != ey.current ? Date.now() - ey.current : null;
                (0, C.dA)({
                    questId: Y.id,
                    event: y.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                    properties: {
                        video_asset_id: e1,
                        network_connection_speed: eT,
                        duration: e,
                        buffer_index: eP.current,
                        video_session_id: e6
                    }
                }),
                    ex(!1);
            }
            e8(b.r.PLAYING);
        }
    };
    i.useEffect(() => {
        if (!eE) return;
        let e = setTimeout(() => {
            ef(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [eE]);
    let [{ controlBarAnimSpring: tc }, td] = (0, m.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: B,
            onStart: () => {
                eO(!1);
            },
            onRest: (e) => {
                1 === e.value && eO(!0);
            }
        })),
        tm = (0, i.useRef)(null),
        [{ captionHeightSpring: tv }, tp] = (0, m.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: B
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tp({
                captionHeightSpring: $ && null != eJ && null !== (t = null === (e = tm.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eU
            }),
            () => {
                tv.stop();
            }
        );
    }, [$, tp, eU, eJ, tv]),
        i.useEffect(
            () => (
                td({
                    controlBarAnimSpring: te || eb ? 1 : 0,
                    immediate: eU
                }),
                () => {
                    tc.stop();
                }
            ),
            [te, td, eU, eb, tc]
        );
    let tE = ea === b.r.ENDED,
        tf = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, Y), [Y]),
        tg = i.useMemo(() => (0, T.z)(T.i.VIDEO_PLAYER_CAPTION, Y), [Y]),
        tC = eG || eR.maxTimestampSec >= (null !== (q = null === (l = eF.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== q ? q : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(m.Clickable, {
            className: w.videoCont,
            'data-fullscreen': et,
            tabIndex: -1,
            onMouseEnter: e3,
            onMouseLeave: e5,
            onFocus: e3,
            onBlur: e5,
            children: (0, r.jsxs)('div', {
                className: w.videoContInnerRelative,
                children: [
                    (0, r.jsx)(F, {
                        quest: Y,
                        shouldShow: tE
                    }),
                    tE && (0, r.jsx)('div', { className: w.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eF.current = e), (es.current = e);
                        },
                        autoPlay: W,
                        playsInline: !0,
                        mediaLayoutType: et ? P.hV.STATIC : P.hV.RESPONSIVE,
                        className: o()({
                            [w.hidden]: tE,
                            [w.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tf ? void 0 : tf.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eF.current && (eF.current.currentTime >= eD && (eN(eF.current.currentTime + 6 + 2 * Math.random()), e9(eF.current.currentTime)), eF.current.currentTime >= ej && (eA(eF.current.currentTime + 1), (0, S.qm)(Y.id, em.taskType, eF.current.currentTime), Q(eF.current.currentTime)), ew(Y.id, eF.current.currentTime, eF.current.duration), ep((eF.current.currentTime / eF.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eF.current && (e9(eF.current.duration + 1), ew(Y.id, eF.current.duration, eF.current.duration)), e8(b.r.ENDED), ex(!1);
                        },
                        onLoadedData: (e) => {
                            if (eg) {
                                let e = null != ek.current ? Date.now() - ek.current : null;
                                (0, C.dA)({
                                    questId: Y.id,
                                    event: y.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        duration: e,
                                        video_session_id: e6
                                    }
                                }),
                                    eC(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eF.current) eW(!0), ti(eG ? eR.timestampSec : Math.max(eR.timestampSec, em.progressSeconds)), eZ ? (eF.current.volume = 0) : (eF.current.volume = eB);
                        },
                        onLoadStart: () => {
                            (ek.current = Date.now()),
                                (0, C.dA)({
                                    questId: Y.id,
                                    event: y.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        video_session_id: e6
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (ey.current = Date.now()),
                                (eP.current += 1),
                                (0, C.dA)({
                                    questId: Y.id,
                                    event: y.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        buffer_index: eP.current,
                                        video_session_id: e6
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
                        onCanPlay: tu,
                        onCanPlayThrough: tu,
                        onSeeked: () => {
                            eX(!0);
                        },
                        onClick: () => {
                            tl();
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
                        ea === b.r.PLAYING &&
                        (0, r.jsx)(m.Spinner, {
                            type: m.Spinner.Type.WANDERING_CUBES,
                            className: w.loadingSpinner
                        }),
                    ea === b.r.PAUSED && eH === b.y.LOST_FOCUS && (0, r.jsx)(U, {}),
                    X &&
                        ea !== b.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Clickable, {
                                    onClick: () => J(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: w.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: w.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tc, tv], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(A.K, {
                                        quest: Y,
                                        onClose: () => {
                                            J(!1),
                                                (0, C._3)({
                                                    questId: Y.id,
                                                    questContent: x.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ea === b.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(V, {
                                title: null !== (G = null === (d = Y.config.videoMetadata) || void 0 === d ? void 0 : d.messages.videoEndCtaTitle) && void 0 !== G ? G : R.intl.string(R.t.iiTtpK),
                                subtitle: null !== (z = null === (E = Y.config.videoMetadata) || void 0 === E ? void 0 : E.messages.videoEndCtaSubtitle) && void 0 !== z ? z : R.intl.string(R.t.mxaHf3),
                                icon: m.ArrowLargeRightIcon,
                                className: w.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: Y.id,
                                        questContent: x.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, h.FE)(Y, {
                                            content: x.jn.VIDEO_MODAL,
                                            ctaContent: C.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: w.videoFooterContGradient,
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
                            className: o()(w.playPausePopCont, {
                                [w.play]: ea === b.r.PLAYING,
                                [w.pause]: ea === b.r.PAUSED
                            }),
                            children: ea === b.r.PLAYING ? (0, r.jsx)(m.PlayIcon, { className: w.playPausePopIcon }) : (0, r.jsx)(m.PauseIcon, { className: w.playPausePopIcon })
                        },
                        ea
                    ),
                    $ &&
                        null != eJ &&
                        (0, r.jsx)(s.animated.div, {
                            className: w.captionContainer,
                            ref: tm,
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
                            children: (0, r.jsx)(m.Text, {
                                variant: 'text-lg/semibold',
                                color: 'always-white',
                                className: w.captionText,
                                children: eJ.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: w.videoFooterCont,
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
                            (0, r.jsx)(j.Z, {
                                percent: ev,
                                animate: !0 !== eq.current && !eE,
                                interactionEnabled: eG && eM,
                                backgroundColor: te ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: te ? eh : void 0,
                                duration: null !== (H = null === (I = eF.current) || void 0 === I ? void 0 : I.duration) && void 0 !== H ? H : 1,
                                maxSeekableTime: te && eM ? e0 : void 0,
                                onClick: (e) => {
                                    ti(e), ea === b.r.ENDED && e8(b.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    tn();
                                },
                                onScrubForward: () => {
                                    tr();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: w.videoControlsCont,
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
                                    videoRef: eF,
                                    quest: Y,
                                    playerState: ea,
                                    animSpring: tc,
                                    visible: te,
                                    seekForwardEnabled: tC,
                                    hideCaptionBtn: null == tg,
                                    handlePlaybackBtnClick: tl,
                                    handleTranscriptBtnClick: () => {
                                        !X && (null == ez || ez.questId !== Y.id || ez.fetchStatus === _.iF.NONE || ez.fetchStatus === _.iF.FAILURE) && (0, S.lL)(Y),
                                            J(!X),
                                            (0, C._3)({
                                                questId: Y.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: X ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        ee(!$),
                                            (0, C._3)({
                                                questId: Y.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: $ ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !et,
                                            n = (0, g.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
                                        t && null != n
                                            ? ((0, g.Dj)(n),
                                              n.addEventListener(g.NO, tt),
                                              (0, C.dA)({
                                                  questId: Y.id,
                                                  event: y.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(g.NO, tt),
                                              (0, C.dA)({
                                                  questId: Y.id,
                                                  event: y.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: e6 }
                                              }),
                                              (0, g.Pr)(n)),
                                            en(t);
                                    },
                                    handleSeekBackBtnClick: tn,
                                    handleSeekForwardBtnClick: tr,
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
