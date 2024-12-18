n.d(t, {
    Z: function () {
        return F;
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
    E = n(210887),
    p = n(866960),
    f = n(228488),
    C = n(617136),
    S = n(272008),
    g = n(497505),
    x = n(918701),
    h = n(184299),
    _ = n(720293),
    T = n(602667),
    D = n(341907),
    I = n(881773),
    N = n(355243),
    A = n(106743),
    j = n(223418),
    b = n(604162),
    L = n(747717),
    R = n(281055),
    O = n(920393),
    k = n(981631),
    M = n(217702),
    y = n(388032),
    P = n(451680);
let q = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
    w = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function U() {
    let e = (0, u.e7)([E.Z], () => E.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: P.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: y.intl.string(y.t.U7Xrb2)
        })
    });
}
function B(e) {
    let { quest: t, shouldShow: n } = e,
        l = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(T.A, {
              questOrQuests: t,
              questContent: g.jn.VIDEO_MODAL_END_CARD,
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
function Z(e) {
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
function F(e) {
    var t, n, l, c, E, T, L, F, V, Y, G;
    let { quest: z, videoSessionId: H, onOptimisticProgressUpdate: Q, autoplay: K, parentTransitionState: W } = e,
        X = (0, h.km)((e) => e.transcriptEnabled),
        J = (0, h.km)((e) => e.setTranscriptEnabled),
        $ = (0, h.km)((e) => e.captionEnabled),
        ee = (0, h.km)((e) => e.setCaptionEnabled),
        et = (0, h.km)((e) => e.fullScreenEnabled),
        en = (0, h.km)((e) => e.setFullScreenEnabled),
        { focused: er, focusedChanged: ei } = (0, R.xU)(),
        { visible: el, visibleChanged: eo, targetRef: es } = (0, R.Yy)(),
        [ea, eu] = i.useState(!0 === K ? j.rq.PLAYING : j.rq.PAUSED),
        [ec, ed] = i.useState(!1),
        em = (0, x.il)(z),
        [ev, eE] = i.useState(em.percentComplete),
        [ep, ef] = i.useState(!1),
        [eC, eS] = i.useState(!0),
        [eg, ex] = i.useState(!1),
        [eh, e_] = i.useState([]),
        [eT, eD] = i.useState(p.Z.getEffectiveConnectionSpeed()),
        [eI, eN] = i.useState(0),
        [eA, ej] = i.useState(0),
        [eb, eL] = i.useState(!1),
        [eR, eO] = i.useState(!1),
        ek = i.useRef(null),
        eM = i.useRef(null),
        ey = (0, i.useRef)(-1),
        eP = (0, h.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[z.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }, a.X),
        eq = (0, h.km)((e) => e.setVideoProgress),
        ew = (0, h.km)((e) => e.muted),
        eU = (0, h.km)((e) => e.volume),
        eB = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
        eZ = (0, i.useRef)(null),
        eF = (0, i.useRef)(null),
        eV = i.useRef(!0),
        eY = (null === (t = z.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eG = (0, h.km)((e) => e.transcript),
        [ez, eH] = i.useState(null),
        [eQ, eK] = i.useState(!1),
        [eW, eX] = i.useState(!1),
        [eJ, e$] = i.useState(null),
        e0 = eY ? (null !== (L = null === (n = eZ.current) || void 0 === n ? void 0 : n.duration) && void 0 !== L ? L : 0) : Math.max(eP.maxTimestampSec, em.progressSeconds),
        e1 = i.useMemo(() => (q.has(eT) ? _.i.VIDEO_PLAYER_VIDEO : _.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eT]),
        e2 = i.useMemo(() => (null != e1 ? (0, _.z)(e1, z) : null), [e1, z]),
        e4 = i.useCallback(
            (e) => {
                null != eZ.current &&
                    (0, C.dA)({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: {
                            ...e,
                            video_asset_id: e1,
                            quest_completed: eY,
                            video_duration_sec: eZ.current.duration,
                            video_progress: (0, D.formatVideoProgressRatio)(e.segment_end_sec, eZ.current.duration),
                            video_session_id: H
                        }
                    });
            },
            [z.id, e1, eY, H]
        ),
        { forceSendCurrentSegment: e6 } = (0, O.Z)({
            videoRef: eZ,
            isPlaying: ea === j.rq.PLAYING,
            isMetadataLoaded: eQ,
            isInitialSeekComplete: eW,
            onAnalytics: e4,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e7 = i.useCallback(
            (e) => {
                if ((eu(e), null != eZ.current))
                    switch (e) {
                        case j.rq.PLAYING:
                            eZ.current.play(),
                                (0, C.dA)({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_RESUMED,
                                    properties: {
                                        video_timestamp_seconds: eZ.current.currentTime,
                                        pause_reason: ez,
                                        video_session_id: H
                                    }
                                }),
                                eH(null);
                            break;
                        case j.rq.PAUSED:
                            eZ.current.pause(), e6();
                            break;
                        case j.rq.ENDED:
                            J(!1), e6();
                    }
            },
            [z.id, ez, e6, J, H]
        );
    i.useLayoutEffect(() => {
        eV.current && ((eV.current = !1), eD(p.Z.getEffectiveConnectionSpeed()), eY && eP.timestampSec >= eP.duration && eq(z.id, 0, eP.duration));
    }, []),
        i.useEffect(() => {
            null != eZ.current &&
                null != ez &&
                (0, C.dA)({
                    questId: z.id,
                    event: k.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eZ.current.currentTime,
                        reason: ez,
                        video_session_id: H
                    }
                });
        }, [ez, z.id, H]),
        i.useEffect(() => {
            ei &&
                null != eZ.current &&
                (0, C.dA)({
                    questId: z.id,
                    event: er ? k.rMx.QUEST_VIDEO_APP_FOCUSED : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eZ.current.currentTime,
                        video_state: ea,
                        video_session_id: H
                    }
                });
        }, [er, ei, ea, z.id, H]);
    let e9 = i.useCallback(
        (e) => {
            var t;
            !eY && (null === (t = z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, x.FI)(z, e),
                null != eZ.current &&
                    (0, C.dA)({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: (0, D.formatVideoProgressRatio)(eZ.current.currentTime, eZ.current.duration),
                            video_timestamp_seconds: eZ.current.currentTime,
                            video_session_id: H
                        }
                    });
        },
        [z, eY, eZ, H]
    );
    i.useEffect(() => {
        (W === d.ModalTransitionState.HIDDEN || W === d.ModalTransitionState.EXITING || W === d.ModalTransitionState.EXITED || (null != W && eo && !el && !eY) || (ei && !er && !eY)) && null != eZ.current && ea === j.rq.PLAYING && (e7(j.rq.PAUSED), !eY && eH(j.yE.LOST_FOCUS));
    }, [W, er, ei, el, eo, ea, eY, e7, e9]);
    let e8 = () => {
            ed(!0);
        },
        e3 = () => {
            ed(!1);
        },
        e5 = ec || ea === j.rq.PAUSED || ea === j.rq.ENDED,
        te = i.useCallback(() => {
            var e;
            let t = (0, f.fn)(null === (e = eZ.current) || void 0 === e ? void 0 : e.parentNode, eZ.current);
            null != t &&
                !(0, f.rB)(t) &&
                (t.removeEventListener(f.NO, te),
                en(!1),
                (0, C.dA)({
                    questId: z.id,
                    event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                    properties: { video_session_id: H }
                }));
        }, [z.id, en, H]),
        tt = () => {
            if (null != eZ.current)
                tr(Math.max(eZ.current.currentTime - 10, 0)),
                    ea === j.rq.ENDED && e7(j.rq.PAUSED),
                    (0, C._3)({
                        questId: z.id,
                        questContent: g.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        tn = () => {
            if (null == eZ.current || !tS) return;
            let e = Math.min(eZ.current.currentTime + 10, e0);
            tr(e),
                ea !== j.rq.ENDED && e >= eZ.current.duration && e7(j.rq.ENDED),
                (0, C._3)({
                    questId: z.id,
                    questContent: g.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    i.useEffect(() => {
        let e = eZ.current;
        return () => {
            let t = (0, f.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(f.NO, te);
        };
    }, [te]);
    let tr = i.useCallback(
            (e) => {
                null != eZ.current && (e6(), ef(!0), eX(!1), (eZ.current.currentTime = e), eq(z.id, e, eZ.current.duration));
            },
            [eZ, eq, z.id, e6]
        ),
        ti = () => {
            if (null != eZ.current)
                switch (ea) {
                    case j.rq.ENDED:
                        tr(0), e7(j.rq.PLAYING);
                        break;
                    case j.rq.PLAYING:
                        e7(j.rq.PAUSED), eH(j.yE.PAUSE_BUTTON);
                        break;
                    default:
                        e7(j.rq.PLAYING);
                }
        },
        tl = (e) => {
            e$(e);
        },
        to = (e) => {
            e$((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        ts = i.useCallback(() => {
            if (null == eZ.current || 0 === eZ.current.textTracks.length) return;
            let e = eZ.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => tl(n)), (n.onexit = () => to(n)));
                }
        }, [eZ]);
    i.useEffect(() => {
        if (null == eF.current) return;
        let e = eF.current;
        return (
            e.addEventListener('load', ts),
            () => {
                null != e && e.removeEventListener('load', ts);
            }
        );
    }, [eF, ts]);
    let ta = i.useCallback(
            (e) => {
                try {
                    var t, n;
                    let r = null === (t = eZ.current) || void 0 === t ? void 0 : t.error,
                        i = null === (n = eZ.current) || void 0 === n ? void 0 : n.networkState,
                        l = null != eZ.current ? (0, D.formatVideoProgressRatio)(eZ.current.currentTime, eZ.current.duration) : void 0;
                    (0, C.dA)({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_ERROR,
                        properties: {
                            video_progress: l,
                            video_error_type: e,
                            video_asset_id: e1,
                            network_connection_speed: eT,
                            video_session_id: H,
                            video_error_code: null == r ? void 0 : r.code,
                            video_error_message: null == r ? void 0 : r.message,
                            video_network_state: i
                        }
                    });
                } catch (e) {}
            },
            [eT, z.id, e1, H]
        ),
        tu = (e) => {
            if (null != eZ.current && ea === j.rq.PLAYING) {
                if ((eC && eS(!1), eg)) {
                    let e = null != eM.current ? Date.now() - eM.current : null;
                    (0, C.dA)({
                        questId: z.id,
                        event: k.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: {
                            video_asset_id: e1,
                            network_connection_speed: eT,
                            duration: e,
                            buffer_index: ey.current,
                            video_session_id: H
                        }
                    }),
                        ex(!1);
                }
                e7(j.rq.PLAYING);
            }
        };
    i.useEffect(() => {
        if (!ep) return;
        let e = setTimeout(() => {
            ef(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ep]);
    let [{ controlBarAnimSpring: tc }, td] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: w,
            onStart: () => {
                eO(!1);
            },
            onRest: (e) => {
                1 === e.value && eO(!0);
            }
        })),
        tm = (0, i.useRef)(null),
        [{ captionHeightSpring: tv }, tE] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: w
        }));
    i.useEffect(() => {
        var e, t;
        return (
            tE({
                captionHeightSpring: $ && null != eJ && null !== (t = null === (e = tm.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eB
            }),
            () => {
                tv.stop();
            }
        );
    }, [$, tE, eB, eJ, tv]),
        i.useEffect(
            () => (
                td({
                    controlBarAnimSpring: e5 || eb ? 1 : 0,
                    immediate: eB
                }),
                () => {
                    tc.stop();
                }
            ),
            [e5, td, eB, eb, tc]
        );
    let tp = ea === j.rq.ENDED,
        tf = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, z), [z]),
        tC = i.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, z), [z]),
        tS = eY || eP.maxTimestampSec >= (null !== (F = null === (l = eZ.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== F ? F : 0) + 1;
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
                    (0, r.jsx)(B, {
                        quest: z,
                        shouldShow: tp
                    }),
                    tp && (0, r.jsx)('div', { className: P.videoContOverlay }),
                    (0, r.jsxs)(v.Z, {
                        ref: (e) => {
                            (eZ.current = e), (es.current = e);
                        },
                        autoPlay: K,
                        playsInline: !0,
                        mediaLayoutType: et ? M.hV.STATIC : M.hV.RESPONSIVE,
                        className: o()({
                            [P.hidden]: tp,
                            [P.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tf ? void 0 : tf.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eZ.current && (eZ.current.currentTime >= eI && (eN(eZ.current.currentTime + 6 + 2 * Math.random()), e9(eZ.current.currentTime)), eZ.current.currentTime >= eA && (ej(eZ.current.currentTime + 1), (0, S.qm)(z.id, em.taskType, eZ.current.currentTime), Q(eZ.current.currentTime)), eq(z.id, eZ.current.currentTime, eZ.current.duration), eE((eZ.current.currentTime / eZ.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eZ.current && (e9(eZ.current.duration + 1), eq(z.id, eZ.current.duration, eZ.current.duration)), e7(j.rq.ENDED), ex(!1);
                        },
                        onLoadedData: (e) => {
                            if (eC) {
                                let e = null != ek.current ? Date.now() - ek.current : null;
                                (0, C.dA)({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_LOADING_ENDED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        duration: e,
                                        video_session_id: H
                                    }
                                }),
                                    eS(!1);
                            }
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eZ.current) eK(!0), tr(eY ? eP.timestampSec : Math.max(eP.timestampSec, em.progressSeconds)), ew ? (eZ.current.volume = 0) : (eZ.current.volume = eU);
                        },
                        onLoadStart: () => {
                            (ek.current = Date.now()),
                                (0, C.dA)({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_LOADING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        video_session_id: H
                                    }
                                });
                        },
                        onWaiting: (e) => {
                            (eM.current = Date.now()),
                                (ey.current += 1),
                                (0, C.dA)({
                                    questId: z.id,
                                    event: k.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                                    properties: {
                                        video_asset_id: e1,
                                        network_connection_speed: eT,
                                        buffer_index: ey.current,
                                        video_session_id: H
                                    }
                                }),
                                ex(!0);
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
                            e_(t);
                        },
                        onCanPlay: tu,
                        onCanPlayThrough: tu,
                        onSeeked: () => {
                            eX(!0);
                        },
                        onAbort: () => ta(j.CY.ABORT),
                        onError: () => ta(j.CY.ERROR),
                        onEmptied: () => ta(j.CY.EMPTIED),
                        onStalled: () => ta(j.CY.STALLED),
                        onSuspend: () => ta(j.CY.SUSPEND),
                        onClick: () => {
                            ti();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tC &&
                                (0, r.jsx)('track', {
                                    ref: eF,
                                    src: tC.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e2 &&
                                (0, r.jsx)('source', {
                                    onError: () => ta(j.CY.SOURCE_ERROR),
                                    src: e2.url,
                                    type: e2.mimetype
                                })
                        ]
                    }),
                    (eC || eg) &&
                        ea === j.rq.PLAYING &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: P.loadingSpinner
                        }),
                    ea === j.rq.PAUSED && ez === j.yE.LOST_FOCUS && (0, r.jsx)(U, {}),
                    X &&
                        ea !== j.rq.ENDED &&
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
                                        marginBottom: (0, s.to)([tc, tv], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(A.K, {
                                        quest: z,
                                        onClose: () => {
                                            J(!1),
                                                (0, C._3)({
                                                    questId: z.id,
                                                    questContent: g.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ea === j.rq.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(Z, {
                                title: null !== (V = null === (c = z.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== V ? V : y.intl.string(y.t.iiTtpK),
                                subtitle: null !== (Y = null === (E = z.config.videoMetadata) || void 0 === E ? void 0 : E.messages.videoEndCtaSubtitle) && void 0 !== Y ? Y : y.intl.string(y.t.mxaHf3),
                                icon: d.ArrowLargeRightIcon,
                                className: P.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: z.id,
                                        questContent: g.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, x.FE)(z, {
                                            content: g.jn.VIDEO_MODAL,
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
                            className: o()(P.playPausePopCont, {
                                [P.play]: ea === j.rq.PLAYING,
                                [P.pause]: ea === j.rq.PAUSED
                            }),
                            children: ea === j.rq.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: P.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: P.playPausePopIcon })
                        },
                        ea
                    ),
                    $ &&
                        null != eJ &&
                        (0, r.jsx)(s.animated.div, {
                            className: P.captionContainer,
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
                            (0, r.jsx)(N.Z, {
                                percent: ev,
                                animate: !0 !== eV.current && !ep,
                                interactionEnabled: eY && eR,
                                backgroundColor: e5 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e5 ? eh : void 0,
                                duration: null !== (G = null === (T = eZ.current) || void 0 === T ? void 0 : T.duration) && void 0 !== G ? G : 1,
                                maxSeekableTime: e5 && eR ? e0 : void 0,
                                onClick: (e) => {
                                    tr(e), ea === j.rq.ENDED && e7(j.rq.PLAYING);
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
                                children: (0, r.jsx)(I.Z, {
                                    videoRef: eZ,
                                    quest: z,
                                    playerState: ea,
                                    animSpring: tc,
                                    visible: e5,
                                    seekForwardEnabled: tS,
                                    hideCaptionBtn: null == tC,
                                    handlePlaybackBtnClick: ti,
                                    handleTranscriptBtnClick: () => {
                                        !X && (null == eG || eG.questId !== z.id || eG.fetchStatus === h.iF.NONE || eG.fetchStatus === h.iF.FAILURE) && (0, S.lL)(z),
                                            J(!X),
                                            (0, C._3)({
                                                questId: z.id,
                                                questContent: g.jn.VIDEO_MODAL,
                                                questContentCTA: X ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        ee(!$),
                                            (0, C._3)({
                                                questId: z.id,
                                                questContent: g.jn.VIDEO_MODAL,
                                                questContentCTA: $ ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !et,
                                            n = (0, f.fn)(null === (e = eZ.current) || void 0 === e ? void 0 : e.parentNode, eZ.current);
                                        t && null != n
                                            ? ((0, f.Dj)(n),
                                              n.addEventListener(f.NO, te),
                                              (0, C.dA)({
                                                  questId: z.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED,
                                                  properties: { video_session_id: H }
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(f.NO, te),
                                              (0, C.dA)({
                                                  questId: z.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
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
