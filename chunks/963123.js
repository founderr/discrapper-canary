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
    C = n(617136),
    g = n(272008),
    S = n(497505),
    x = n(918701),
    h = n(184299),
    _ = n(720293),
    T = n(602667),
    N = n(341907),
    I = n(881773),
    D = n(355243),
    A = n(106743),
    j = n(223418),
    b = n(604162),
    L = n(747717),
    k = n(281055),
    O = n(920393),
    M = n(981631),
    y = n(217702),
    R = n(388032),
    P = n(451680);
let w = new Set([M.IyS.FIVE_G, M.IyS.FOUR_G, M.IyS.UNKNOWN]),
    B = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function U() {
    let e = (0, u.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: P.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: R.intl.string(R.t.U7Xrb2)
        })
    });
}
function Z(e) {
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
                      className: o()(P.stillFrameImageCard, { [P.stillFrameImageCardHidden]: !n })
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
        className: o()(P.endScreenPanel, P.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)('div', {
            className: P.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: P.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            className: P.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            className: P.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(L.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: u ? '#FFFFFF' : '#B5BAC1',
                    className: P.endScreenIcon
                })
            ]
        })
    });
}
function V(e) {
    var t, n, l, c, p, T, L, V, q, G, Y;
    let { quest: z, videoSessionId: H, onOptimisticProgressUpdate: K, autoplay: Q, parentTransitionState: W } = e,
        X = (0, h.km)((e) => e.transcriptEnabled),
        J = (0, h.km)((e) => e.setTranscriptEnabled),
        $ = (0, h.km)((e) => e.captionEnabled),
        ee = (0, h.km)((e) => e.setCaptionEnabled),
        et = (0, h.km)((e) => e.fullScreenEnabled),
        en = (0, h.km)((e) => e.setFullScreenEnabled),
        { focused: er, focusedChanged: ei } = (0, k.xU)(),
        { visible: el, visibleChanged: eo, targetRef: es } = (0, k.Yy)(),
        [ea, eu] = i.useState(!0 === Q ? j.r.PLAYING : j.r.PAUSED),
        [ec, ed] = i.useState(!1),
        em = (0, x.il)(z),
        [ev, ep] = i.useState(em.percentComplete),
        [eE, ef] = i.useState(!1),
        [eC, eg] = i.useState(!0),
        [eS, ex] = i.useState(!1),
        [eh, e_] = i.useState([]),
        [eT, eN] = i.useState(E.Z.getEffectiveConnectionSpeed()),
        [eI, eD] = i.useState(0),
        [eA, ej] = i.useState(0),
        [eb, eL] = i.useState(!1),
        [ek, eO] = i.useState(!1),
        eM = i.useRef(null),
        ey = i.useRef(null),
        eR = (0, i.useRef)(-1),
        eP = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[z.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, a.X),
        ew = (0, h.km)((e) => e.setVideoProgress),
        eB = (0, h.km)((e) => e.muted),
        eU = (0, h.km)((e) => e.volume),
        eZ = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        eF = (0, i.useRef)(null),
        eV = (0, i.useRef)(null),
        eq = i.useRef(!0),
        eG = (null === (t = z.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eY = (0, h.km)((e) => e.transcript),
        [ez, eH] = i.useState(null),
        [eK, eQ] = i.useState(!1),
        [eW, eX] = i.useState(!1),
        [eJ, e$] = i.useState(null),
        e0 = eG ? (null !== (L = null === (n = eF.current) || void 0 === n ? void 0 : n.duration) && void 0 !== L ? L : 0) : Math.max(eP.maxTimestampSec, em.progressSeconds),
        e1 = i.useMemo(() => (w.has(eT) ? _.i.VIDEO_PLAYER_VIDEO : _.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eT]),
        e2 = i.useMemo(() => (null != e1 ? (0, _.z)(e1, z) : null), [e1, z]),
        e6 = i.useCallback(
            (e) => {
                null != eF.current &&
                    (0, C.dA)({
                        questId: z.id,
                        event: M.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e1,
                            quest_completed: eG,
                            video_duration_sec: eF.current.duration,
                            video_progress: (0, N.formatVideoProgressRatio)(e.segment_end_sec, eF.current.duration),
                            video_session_id: H
                        }
                    });
            },
            [z.id, e1, eG, H]
        ),
        { forceSendCurrentSegment: e4 } = (0, O.Z)({
            videoRef: eF,
            isPlaying: ea === j.r.PLAYING,
            isMetadataLoaded: eK,
            isInitialSeekComplete: eW,
            onAnalytics: e6,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e7 = i.useCallback(
            (e) => {
                if ((eu(e), null != eF.current))
                    switch (e) {
                        case j.r.PLAYING:
                            eF.current.play(),
                                (0, C.dA)({
                                    questId: z.id,
                                    event: M.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eF.current.currentTime,
                                        pause_reason: ez,
                                        video_session_id: H
                                    }
                                }),
                                eH(null);
                            break;
                        case j.r.PAUSED:
                            eF.current.pause(), e4();
                            break;
                        case j.r.ENDED:
                            J(!1), e4();
                    }
            },
            [z.id, ez, e4, J, H]
        );
    i.useLayoutEffect(() => {
        eq.current && ((eq.current = !1), eN(E.Z.getEffectiveConnectionSpeed()), eG && eP.timestampSec >= eP.duration && ew(z.id, 0, eP.duration));
    }, []),
        i.useEffect(() => {
            null != eF.current &&
                null != ez &&
                (0, C.dA)({
                    questId: z.id,
                    event: M.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        reason: ez,
                        video_session_id: H
                    }
                });
        }, [ez, z.id, H]),
        i.useEffect(() => {
            ei &&
                null != eF.current &&
                (0, C.dA)({
                    questId: z.id,
                    event: er ? M.rMx.QUEST_VIDEO_APP_FOCUSED : M.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eF.current.currentTime,
                        video_state: ea,
                        video_session_id: H
                    }
                });
        }, [er, ei, ea, z.id, H]);
    let e9 = i.useCallback(
        (e) => {
            var t;
            !eG && (null === (t = z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, x.FI)(z, e),
                null != eF.current &&
                    (0, C.dA)({
                        questId: z.id,
                        event: M.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, N.formatVideoProgressRatio)(eF.current.currentTime, eF.current.duration),
                            video_timestamp_seconds: eF.current.currentTime,
                            video_session_id: H
                        }
                    });
        },
        [z, eG, eF, H]
    );
    i.useEffect(() => {
        (W === d.ModalTransitionState.HIDDEN || W === d.ModalTransitionState.EXITING || W === d.ModalTransitionState.EXITED || (null != W && eo && !el && !eG) || (ei && !er && !eG)) && null != eF.current && ea === j.r.PLAYING && (e7(j.r.PAUSED), !eG && eH(j.y.LOST_FOCUS));
    }, [W, er, ei, el, eo, ea, eG, e7, e9]);
    let e8 = () => {
            ed(!0);
        },
        e3 = () => {
            ed(!1);
        },
        e5 = ec || ea === j.r.PAUSED || ea === j.r.ENDED,
        te = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
            null != t &&
                !(0, f.rB)(t) &&
                (t.removeEventListener(f.NO, te),
                en(!1),
                (0, C.dA)({
                    questId: z.id,
                    event: M.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: H }
                }));
        }, [z.id, en, H]),
        tt = () => {
            if (null != eF.current)
                tr(Math.max(eF.current.currentTime - 10, 0)),
                    ea === j.r.ENDED && e7(j.r.PAUSED),
                    (0, C._3)({
                        questId: z.id,
                        questContent: S.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        tn = () => {
            if (null == eF.current || !tC) return;
            let e = Math.min(eF.current.currentTime + 10, e0);
            tr(e),
                ea !== j.r.ENDED && e >= eF.current.duration && e7(j.r.ENDED),
                (0, C._3)({
                    questId: z.id,
                    questContent: S.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
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
                null != eF.current && (e4(), ef(!0), eX(!1), (eF.current.currentTime = e), ew(z.id, e, eF.current.duration));
            },
            [eF, ew, z.id, e4]
        ),
        ti = () => {
            if (null != eF.current)
                switch (ea) {
                    case j.r.ENDED:
                        tr(0), e7(j.r.PLAYING);
                        break;
                    case j.r.PLAYING:
                        e7(j.r.PAUSED), eH(j.y.PAUSE_BUTTON);
                        break;
                    default:
                        e7(j.r.PLAYING);
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
        if (null != eF.current && ea === j.r.PLAYING) {
            if ((eC && eg(!1), eS)) {
                let e = null != ey.current ? Date.now() - ey.current : null;
                (0, C.dA)({
                    questId: z.id,
                    event: M.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                    properties: {
                        video_asset_id: e1,
                        network_connection_speed: eT,
                        duration: e,
                        buffer_index: eR.current,
                        video_session_id: H
                    }
                }),
                    ex(!1);
            }
            e7(j.r.PLAYING);
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
            config: B,
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
            config: B
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tv({
                captionHeightSpring: $ && null != eJ && null !== (t = null === (e = td.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eZ
            }),
            () => {
                tm.stop();
            }
        );
    }, [$, tv, eZ, eJ, tm]),
        i.useEffect(
            () => (
                tc({
                    controlBarAnimSpring: e5 || eb ? 1 : 0,
                    immediate: eZ
                }),
                () => {
                    tu.stop();
                }
            ),
            [e5, tc, eZ, eb, tu]
        );
    let tp = ea === j.r.ENDED,
        tE = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, z), [z]),
        tf = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, z), [z]),
        tC = eG || eP.maxTimestampSec >= (null !== (V = null === (l = eF.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== V ? V : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: P.videoCont,
            'data-fullscreen': et,
            tabIndex: -1,
            onMouseEnter: e8,
            onMouseLeave: e3,
            onFocus: e8,
            onBlur: e3,
            children: (0, r.jsxs)('div', {
                className: P.videoContInnerRelative,
                children: [
                    (0, r.jsx)(Z, {
                        quest: z,
                        shouldShow: tp
                    }),
                    tp && (0, r.jsx)('div', { className: P.videoContOverlay }),
                    (0, r.jsxs)(v.Z, {
                        ref: (e) => {
                            (eF.current = e), (es.current = e);
                        },
                        autoPlay: Q,
                        playsInline: !0,
                        mediaLayoutType: et ? y.hV.STATIC : y.hV.RESPONSIVE,
                        className: o()({
                            [P.hidden]: tp,
                            [P.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tE ? void 0 : tE.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eF.current && (eF.current.currentTime >= eI && (eD(eF.current.currentTime + 6 + 2 * Math.random()), e9(eF.current.currentTime)), eF.current.currentTime >= eA && (ej(eF.current.currentTime + 1), (0, g.qm)(z.id, em.taskType, eF.current.currentTime), K(eF.current.currentTime)), ew(z.id, eF.current.currentTime, eF.current.duration), ep((eF.current.currentTime / eF.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eF.current && (e9(eF.current.duration + 1), ew(z.id, eF.current.duration, eF.current.duration)), e7(j.r.ENDED), ex(!1);
                        },
                        onLoadedData: (e) => {
                            if (eC) {
                                let e = null != eM.current ? Date.now() - eM.current : null;
                                (0, C.dA)({
                                    questId: z.id,
                                    event: M.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        duration: e,
                                        video_session_id: H
                                    }
                                }),
                                    eg(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eF.current) eQ(!0), tr(eG ? eP.timestampSec : Math.max(eP.timestampSec, em.progressSeconds)), eB ? (eF.current.volume = 0) : (eF.current.volume = eU);
                        },
                        onLoadStart: () => {
                            (eM.current = Date.now()),
                                (0, C.dA)({
                                    questId: z.id,
                                    event: M.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        video_session_id: H
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (ey.current = Date.now()),
                                (eR.current += 1),
                                (0, C.dA)({
                                    questId: z.id,
                                    event: M.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        buffer_index: eR.current,
                                        video_session_id: H
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
                    (eC || eS) &&
                        ea === j.r.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: P.loadingSpinner
                        }),
                    ea === j.r.PAUSED && ez === j.y.LOST_FOCUS && (0, r.jsx)(U, {}),
                    X &&
                        ea !== j.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => J(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: P.transcriptOverlay })
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: P.transcriptCont,
                                    style: {
                                        marginBottom: (0, s.to)([tu, tm], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(A.K, {
                                        quest: z,
                                        onClose: () => {
                                            J(!1),
                                                (0, C._3)({
                                                    questId: z.id,
                                                    questContent: S.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ea === j.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(F, {
                                title: null !== (q = null === (c = z.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== q ? q : R.intl.string(R.t.iiTtpK),
                                subtitle: null !== (G = null === (p = z.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== G ? G : R.intl.string(R.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: P.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: z.id,
                                        questContent: S.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, x.FE)(z, {
                                            content: S.jn.VIDEO_MODAL,
                                            ctaContent: C.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(s.animated.div, {
                        className: P.videoFooterContGradient,
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
                            className: o()(P.playPausePopCont, {
                                [P.play]: ea === j.r.PLAYING,
                                [P.pause]: ea === j.r.PAUSED
                            }),
                            children: ea === j.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: P.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: P.playPausePopIcon })
                        },
                        ea
                    ),
                    $ &&
                        null != eJ &&
                        (0, r.jsx)(s.animated.div, {
                            className: P.captionContainer,
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
                                className: P.captionText,
                                children: eJ.text
                            })
                        }),
                    (0, r.jsxs)(s.animated.div, {
                        className: P.videoFooterCont,
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
                            (0, r.jsx)(D.Z, {
                                percent: ev,
                                animate: !0 !== eq.current && !eE,
                                interactionEnabled: eG && ek,
                                backgroundColor: e5 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e5 ? eh : void 0,
                                duration: null !== (Y = null === (T = eF.current) || void 0 === T ? void 0 : T.duration) && void 0 !== Y ? Y : 1,
                                maxSeekableTime: e5 && ek ? e0 : void 0,
                                onClick: (e) => {
                                    tr(e), ea === j.r.ENDED && e7(j.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    tt();
                                },
                                onScrubForward: () => {
                                    tn();
                                }
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: P.videoControlsCont,
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
                                children: (0, r.jsx)(I.Z, {
                                    videoRef: eF,
                                    quest: z,
                                    playerState: ea,
                                    animSpring: tu,
                                    visible: e5,
                                    seekForwardEnabled: tC,
                                    hideCaptionBtn: null == tf,
                                    handlePlaybackBtnClick: ti,
                                    handleTranscriptBtnClick: () => {
                                        !X && (null == eY || eY.questId !== z.id || eY.fetchStatus === h.iF.NONE || eY.fetchStatus === h.iF.FAILURE) && (0, g.lL)(z),
                                            J(!X),
                                            (0, C._3)({
                                                questId: z.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: X ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        ee(!$),
                                            (0, C._3)({
                                                questId: z.id,
                                                questContent: S.jn.VIDEO_MODAL,
                                                questContentCTA: $ ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !et,
                                            n = (0, f.fn)(null === (e = eF.current) || void 0 === e ? void 0 : e.parentNode, eF.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, te),
                                              (0, C.dA)({
                                                  questId: z.id,
                                                  event: M.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: H }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(f.NO, te),
                                              (0, C.dA)({
                                                  questId: z.id,
                                                  event: M.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                                                  properties: { video_session_id: H }
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
