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
    s = n(100621),
    a = n(442837),
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
    _ = n(720293),
    h = n(602667),
    T = n(341907),
    I = n(881773),
    N = n(355243),
    b = n(106743),
    j = n(223418),
    D = n(604162),
    A = n(747717),
    y = n(281055),
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
    let e = (0, a.e7)([f.Z], () => f.Z.getState().theme);
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
        i = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)(h.A, {
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
    let { title: t, subtitle: n, icon: i, onClick: s, className: a } = e,
        [c, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(u.Clickable, {
        className: l()(M.endScreenPanel, M.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: s,
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
                (0, r.jsx)(A.Z, { color: '#747783' }),
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
    var t, n, i, c, f, h, A, U, V, q, G;
    let { quest: H, onOptimisticProgressUpdate: z, autoplay: Y, parentTransitionState: W } = e,
        Q = (0, E.km)((e) => e.transcriptEnabled),
        K = (0, E.km)((e) => e.setTranscriptEnabled),
        X = (0, E.km)((e) => e.captionEnabled),
        J = (0, E.km)((e) => e.setCaptionEnabled),
        $ = (0, E.km)((e) => e.fullScreenEnabled),
        ee = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: et, focusedChanged: en } = (0, y.xU)(),
        { visible: er, visibleChanged: eo, targetRef: ei } = (0, y.Yy)(),
        [el, es] = o.useState(!0 === Y ? j.r.PLAYING : j.r.PAUSED),
        [ea, ec] = o.useState(!1),
        eu = (0, S.il)(H),
        [ed, em] = o.useState(eu.percentComplete),
        [ef, ep] = o.useState(!1),
        [ev, eC] = o.useState(!0),
        [eg, ex] = o.useState(!1),
        [eS, eE] = o.useState([]),
        [e_, eh] = o.useState(p.Z.getEffectiveConnectionSpeed()),
        [eT, eI] = o.useState(0),
        [eN, eb] = o.useState(0),
        [ej, eD] = o.useState(!1),
        [eA, ey] = o.useState(!1),
        ek = o.useRef(null),
        eB = o.useRef(null),
        eL = (0, o.useRef)(-1),
        eP = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[H.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eM = (0, E.km)((e) => e.setVideoProgress),
        eO = (0, E.km)((e) => e.muted),
        eR = (0, E.km)((e) => e.volume),
        ew = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        eF = (0, o.useRef)(null),
        eZ = (0, o.useRef)(null),
        eU = o.useRef(!0),
        eV = (null === (t = H.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eq = (0, E.km)((e) => e.transcript),
        [eG, eH] = o.useState(null),
        [ez, eY] = o.useState(!1),
        [eW, eQ] = o.useState(!1),
        [eK, eX] = o.useState(null),
        eJ = eV ? (null !== (A = null === (n = eF.current) || void 0 === n ? void 0 : n.duration) && void 0 !== A ? A : 0) : Math.max(eP.maxTimestampSec, eu.progressSeconds),
        e$ = o.useMemo(() => (O.has(e_) ? _.i.VIDEO_PLAYER_VIDEO : _.i.VIDEO_PLAYER_VIDEO_LOW_RES), [e_]),
        e0 = o.useMemo(() => (null != e$ ? (0, _.z)(e$, H) : null), [e$, H]),
        e1 = o.useCallback(
            (e) => {
                null != eF.current &&
                    (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e$,
                            quest_completed: eV,
                            video_duration_sec: eF.current.duration,
                            video_progress: (0, T.formatVideoProgressRatio)(e.segment_end_sec, eF.current.duration)
                        }
                    });
            },
            [H.id, e$, eV]
        ),
        { forceSendCurrentSegment: e2 } = (0, k.Z)({
            videoRef: eF,
            isPlaying: el === j.r.PLAYING,
            isMetadataLoaded: ez,
            isInitialSeekComplete: eW,
            onAnalytics: e1,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e9 = o.useCallback(
            (e) => {
                if ((es(e), null != eF.current))
                    switch (e) {
                        case j.r.PLAYING:
                            eF.current.play(),
                                (0, C.dA)({
                                    questId: H.id,
                                    event: B.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eF.current.currentTime,
                                        pause_reason: eG
                                    }
                                }),
                                eH(null);
                            break;
                        case j.r.PAUSED:
                            eF.current.pause(), e2();
                            break;
                        case j.r.ENDED:
                            K(!1), e2();
                    }
            },
            [H.id, eG, e2, K]
        );
    o.useLayoutEffect(() => {
        eU.current && ((eU.current = !1), eh(p.Z.getEffectiveConnectionSpeed()), eV && eP.timestampSec >= eP.duration && eM(H.id, 0, eP.duration));
    }, []),
        o.useEffect(() => {
            null != eF.current &&
                null != eG &&
                (0, C.dA)({
                    questId: H.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        reason: eG
                    }
                });
        }, [eG, H.id]),
        o.useEffect(() => {
            en &&
                null != eF.current &&
                (0, C.dA)({
                    questId: H.id,
                    event: et ? B.rMx.QUEST_VIDEO_APP_FOCUSED : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        video_state: el
                    }
                });
        }, [et, en, el, H.id]);
    let e7 = o.useCallback(
        (e) => {
            var t;
            !eV && (null === (t = H.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, g.FI)(H.id, e),
                null != eF.current &&
                    (0, C.dA)({
                        questId: H.id,
                        event: B.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, T.formatVideoProgressRatio)(eF.current.currentTime, eF.current.duration),
                            video_timestamp_seconds: eF.current.currentTime
                        }
                    });
        },
        [H, eV, eF]
    );
    o.useEffect(() => {
        (W === u.ModalTransitionState.HIDDEN || W === u.ModalTransitionState.EXITING || W === u.ModalTransitionState.EXITED || (null != W && eo && !er && !eV) || (en && !et && !eV)) && null != eF.current && el === j.r.PLAYING && (e9(j.r.PAUSED), !eV && eH(j.y.LOST_FOCUS));
    }, [W, et, en, er, eo, el, eV, e9, e7]);
    let e3 = () => {
            ec(!0);
        },
        e6 = () => {
            ec(!1);
        },
        e4 = ea || el === j.r.PAUSED || el === j.r.ENDED,
        e8 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
            null != t &&
                !(0, v.rB)(t) &&
                (t.removeEventListener(v.NO, e8),
                ee(!1),
                (0, C.dA)({
                    questId: H.id,
                    event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [H.id, ee]),
        e5 = () => {
            if (null != eF.current)
                tt(Math.max(eF.current.currentTime - 10, 0)),
                    el === j.r.ENDED && e9(j.r.PAUSED),
                    (0, C._3)({
                        questId: H.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        te = () => {
            if (null == eF.current || !tv) return;
            let e = Math.min(eF.current.currentTime + 10, eJ);
            tt(e),
                el !== j.r.ENDED && e >= eF.current.duration && e9(j.r.ENDED),
                (0, C._3)({
                    questId: H.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eF.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e8);
        };
    }, [e8]);
    let tt = o.useCallback(
            (e) => {
                null != eF.current && (e2(), ep(!0), eQ(!1), (eF.current.currentTime = e), eM(H.id, e, eF.current.duration));
            },
            [eF, eM, H.id, e2]
        ),
        tn = () => {
            if (null != eF.current)
                switch (el) {
                    case j.r.ENDED:
                        tt(0), e9(j.r.PLAYING);
                        break;
                    case j.r.PLAYING:
                        e9(j.r.PAUSED), eH(j.y.PAUSE_BUTTON);
                        break;
                    default:
                        e9(j.r.PLAYING);
                }
        },
        tr = (e) => {
            eX(e);
        },
        to = (e) => {
            eX((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        ti = o.useCallback(() => {
            if (null == eF.current || 0 === eF.current.textTracks.length) return;
            let e = eF.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, D.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tr(n)), (n.onexit = () => to(n)));
                }
        }, [eF]);
    o.useEffect(() => {
        if (null == eZ.current) return;
        let e = eZ.current;
        return (
            e.addEventListener('load', ti),
            () => {
                null != e && e.removeEventListener('load', ti);
            }
        );
    }, [eZ, ti]);
    let tl = (e) => {
        if (null != eF.current && el === j.r.PLAYING) {
            if ((ev && eC(!1), eg)) {
                let e = null != eB.current ? Date.now() - eB.current : null;
                (0, C.dA)({
                    questId: H.id,
                    event: B.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                    properties: {
                        video_asset_id: e$,
                        network_connection_speed: e_,
                        duration: e,
                        buffer_index: eL.current
                    }
                }),
                    ex(!1);
            }
            e9(j.r.PLAYING);
        }
    };
    o.useEffect(() => {
        if (!ef) return;
        let e = setTimeout(() => {
            ep(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ef]);
    let [{ controlBarAnimSpring: ts }, ta] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: R,
            onStart: () => {
                ey(!1);
            },
            onRest: (e) => {
                1 === e.value && ey(!0);
            }
        })),
        tc = (0, o.useRef)(null),
        [{ captionHeightSpring: tu }, td] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: R
        }));
    o.useEffect(() => {
        var e, t;
        return (
            td({
                captionHeightSpring: X && null != eK && null !== (t = null === (e = tc.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: ew
            }),
            () => {
                tu.stop();
            }
        );
    }, [X, td, ew, eK, tu]),
        o.useEffect(
            () => (
                ta({
                    controlBarAnimSpring: e4 || ej ? 1 : 0,
                    immediate: ew
                }),
                () => {
                    ts.stop();
                }
            ),
            [e4, ta, ew, ej, ts]
        );
    let tm = el === j.r.ENDED,
        tf = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, H), [H]),
        tp = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, H), [H]),
        tv = eV || eP.maxTimestampSec >= (null !== (U = null === (i = eF.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== U ? U : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.Clickable, {
            className: M.videoCont,
            'data-fullscreen': $,
            tabIndex: -1,
            onMouseEnter: e3,
            onMouseLeave: e6,
            onFocus: e3,
            onBlur: e6,
            children: (0, r.jsxs)('div', {
                className: M.videoContInnerRelative,
                children: [
                    (0, r.jsx)(F, {
                        quest: H,
                        shouldShow: tm
                    }),
                    tm && (0, r.jsx)('div', { className: M.videoContOverlay }),
                    (0, r.jsxs)(m.Z, {
                        ref: (e) => {
                            (eF.current = e), (ei.current = e);
                        },
                        autoPlay: Y,
                        playsInline: !0,
                        mediaLayoutType: $ ? L.hV.STATIC : L.hV.RESPONSIVE,
                        className: l()({
                            [M.hidden]: tm,
                            [M.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tf ? void 0 : tf.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eF.current && (eF.current.currentTime >= eT && (eI(eF.current.currentTime + 6 + 2 * Math.random()), e7(eF.current.currentTime)), eF.current.currentTime >= eN && (eb(eF.current.currentTime + 1), (0, g.qm)(H.id, eu.taskType, eF.current.currentTime), z(eF.current.currentTime)), eM(H.id, eF.current.currentTime, eF.current.duration), em((eF.current.currentTime / eF.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eF.current && (e7(eF.current.duration + 1), eM(H.id, eF.current.duration, eF.current.duration)), e9(j.r.ENDED), ex(!1);
                        },
                        onLoadedData: (e) => {
                            if (ev) {
                                let e = null != ek.current ? Date.now() - ek.current : null;
                                (0, C.dA)({
                                    questId: H.id,
                                    event: B.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e$,
                                        network_connection_speed: e_,
                                        duration: e
                                    }
                                }),
                                    eC(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eF.current) eY(!0), tt(eV ? eP.timestampSec : Math.max(eP.timestampSec, eu.progressSeconds)), eO ? (eF.current.volume = 0) : (eF.current.volume = eR);
                        },
                        onLoadStart: () => {
                            (ek.current = Date.now()),
                                (0, C.dA)({
                                    questId: H.id,
                                    event: B.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e$,
                                        network_connection_speed: e_
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eB.current = Date.now()),
                                (eL.current += 1),
                                (0, C.dA)({
                                    questId: H.id,
                                    event: B.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e$,
                                        network_connection_speed: e_,
                                        buffer_index: eL.current
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
                            eE(t);
                        },
                        onCanPlay: tl,
                        onCanPlayThrough: tl,
                        onSeeked: () => {
                            eQ(!0);
                        },
                        onClick: () => {
                            tn();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tp &&
                                (0, r.jsx)('track', {
                                    ref: eZ,
                                    src: tp.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e0 &&
                                (0, r.jsx)('source', {
                                    src: e0.url,
                                    type: e0.mimetype
                                })
                        ]
                    }),
                    (ev || eg) &&
                        el === j.r.PLAYING &&
                        (0, r.jsx)(u.Spinner, {
                            type: u.Spinner.Type.WANDERING_CUBES,
                            className: M.loadingSpinner
                        }),
                    el === j.r.PAUSED && eG === j.y.LOST_FOCUS && (0, r.jsx)(w, {}),
                    Q &&
                        el !== j.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Clickable, {
                                    onClick: () => K(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: M.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: M.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([ts, tu], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(b.K, {
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
                    el === j.r.ENDED &&
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
                    (0, r.jsx)(s.animated.div, {
                        className: M.videoFooterContGradient,
                        style: {
                            opacity: (0, s.to)(
                                [
                                    ts.to({
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
                                [M.play]: el === j.r.PLAYING,
                                [M.pause]: el === j.r.PAUSED
                            }),
                            children: el === j.r.PLAYING ? (0, r.jsx)(u.PlayIcon, { className: M.playPausePopIcon }) : (0, r.jsx)(u.PauseIcon, { className: M.playPausePopIcon })
                        },
                        el
                    ),
                    X &&
                        null != eK &&
                        (0, r.jsx)(s.animated.div, {
                            className: M.captionContainer,
                            ref: tc,
                            style: {
                                translateY: (0, s.to)(
                                    [
                                        ts.to({
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
                                children: eK.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: M.videoFooterCont,
                        style: {
                            paddingLeft: (0, s.to)(
                                [
                                    ts.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, s.to)(
                                [
                                    ts.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, s.to)(
                                [
                                    ts.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(N.Z, {
                                percent: ed,
                                animate: !0 !== eU.current && !ef,
                                interactionEnabled: eV && eA,
                                backgroundColor: e4 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e4 ? eS : void 0,
                                duration: null !== (G = null === (h = eF.current) || void 0 === h ? void 0 : h.duration) && void 0 !== G ? G : 1,
                                maxSeekableTime: e4 && eA ? eJ : void 0,
                                onClick: (e) => {
                                    tt(e), el === j.r.ENDED && e9(j.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    e5();
                                },
                                onScrubForward: () => {
                                    te();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: M.videoControlsCont,
                                style: {
                                    paddingTop: (0, s.to)(
                                        [
                                            ts.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, s.to)(
                                        [
                                            ts.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, s.to)(
                                        [
                                            ts.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(I.Z, {
                                    videoRef: eF,
                                    quest: H,
                                    playerState: el,
                                    animSpring: ts,
                                    visible: e4,
                                    seekForwardEnabled: tv,
                                    hideCaptionBtn: null == tp,
                                    handlePlaybackBtnClick: tn,
                                    handleTranscriptBtnClick: () => {
                                        !Q && (null == eq || eq.questId !== H.id || eq.fetchStatus === E.iF.NONE || eq.fetchStatus === E.iF.FAILURE) && (0, g.lL)(H),
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
                                            n = (0, v.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
                                        t && null != n
                                            ? ((0, v.Dj)(n),
                                              n.addEventListener(v.NO, e8),
                                              (0, C.dA)({
                                                  questId: H.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(v.NO, e8),
                                              (0, C.dA)({
                                                  questId: H.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, v.Pr)(n)),
                                            ee(t);
                                    },
                                    handleSeekBackBtnClick: e5,
                                    handleSeekForwardBtnClick: te,
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
