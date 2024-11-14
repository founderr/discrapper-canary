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
    S = n(918701),
    E = n(184299),
    h = n(720293),
    _ = n(602667),
    T = n(881773),
    I = n(355243),
    N = n(106743),
    j = n(223418),
    b = n(604162),
    D = n(747717),
    y = n(281055),
    A = n(920393),
    k = n(981631),
    B = n(217702),
    L = n(388032),
    M = n(417575);
let P = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
    O = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function R() {
    let e = (0, s.e7)([p.Z], () => p.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: M.pauseText,
        style: { background: (0, c.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(u.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: L.intl.string(L.t.U7Xrb2)
        })
    });
}
function w(e) {
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
function F(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: s } = e,
        [c, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsx)(u.Clickable, {
        className: l()(M.endScreenPanel, M.accentOnHover, s),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
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
                (0, r.jsx)(D.Z, { color: '#747783' }),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: M.endScreenIcon
                })
            ]
        })
    });
}
function Z(e) {
    var t, n, i, c, p, _, D, Z, U, G, V;
    let { quest: q, onOptimisticProgressUpdate: H, autoplay: z, parentTransitionState: Y } = e,
        W = (0, E.km)((e) => e.transcriptEnabled),
        Q = (0, E.km)((e) => e.setTranscriptEnabled),
        K = (0, E.km)((e) => e.captionEnabled),
        X = (0, E.km)((e) => e.setCaptionEnabled),
        J = (0, E.km)((e) => e.fullScreenEnabled),
        $ = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: ee, focusedChanged: et } = (0, y.xU)(),
        { visible: en, visibleChanged: er, targetRef: eo } = (0, y.Yy)(),
        [ei, el] = o.useState(!0 === z ? j.r.PLAYING : j.r.PAUSED),
        [ea, es] = o.useState(!1),
        ec = (0, S.il)(q),
        [eu, ed] = o.useState(ec.percentComplete),
        [em, ep] = o.useState(!1),
        [ef, ev] = o.useState(!0),
        [eC, eg] = o.useState(!1),
        [ex, eS] = o.useState([]),
        [eE, eh] = o.useState(f.Z.getEffectiveConnectionSpeed()),
        [e_, eT] = o.useState(0),
        [eI, eN] = o.useState(0),
        [ej, eb] = o.useState(!1),
        [eD, ey] = o.useState(!1),
        eA = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[q.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        ek = (0, E.km)((e) => e.setVideoProgress),
        eB = (0, E.km)((e) => e.muted),
        eL = (0, E.km)((e) => e.volume),
        eM = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        eP = (0, o.useRef)(null),
        eO = (0, o.useRef)(null),
        eR = o.useRef(!0),
        ew = (null === (t = q.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eF = (0, E.km)((e) => e.transcript),
        [eZ, eU] = o.useState(null),
        [eG, eV] = o.useState(!1),
        [eq, eH] = o.useState(!1),
        [ez, eY] = o.useState(null),
        eW = ew ? (null !== (D = null === (n = eP.current) || void 0 === n ? void 0 : n.duration) && void 0 !== D ? D : 0) : Math.max(eA.maxTimestampSec, ec.progressSeconds),
        eQ = o.useMemo(() => (P.has(eE) ? h.i.VIDEO_PLAYER_VIDEO : h.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eE]),
        eK = o.useMemo(() => (null != eQ ? (0, h.z)(eQ, q) : null), [eQ, q]),
        eX = o.useCallback(
            (e) => {
                var t, n;
                (0, C.dA)({
                    questId: q.id,
                    event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                    properties: {
                        ...e,
                        video_asset_id: eQ,
                        quest_completed: ew,
                        video_duration_sec: null !== (n = null === (t = eP.current) || void 0 === t ? void 0 : t.duration) && void 0 !== n ? n : -1,
                        video_progress: eu / 100
                    }
                });
            },
            [q.id, eQ, ew, eu]
        ),
        { forceSendCurrentSegment: eJ } = (0, A.Z)({
            videoRef: eP,
            isPlaying: ei === j.r.PLAYING,
            isMetadataLoaded: eG,
            isInitialSeekComplete: eq,
            onAnalytics: eX,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e$ = o.useCallback(
            (e) => {
                if ((el(e), null != eP.current))
                    switch (e) {
                        case j.r.PLAYING:
                            eP.current.play(), eU(null);
                            break;
                        case j.r.PAUSED:
                            eP.current.pause(), eJ();
                            break;
                        case j.r.ENDED:
                            Q(!1), eJ();
                    }
            },
            [eP, el, eU, Q, eJ]
        );
    o.useLayoutEffect(() => {
        eR.current && ((eR.current = !1), eh(f.Z.getEffectiveConnectionSpeed()), ew && eA.timestampSec >= eA.duration && ek(q.id, 0, eA.duration));
    }, []),
        o.useEffect(() => {
            null != eP.current &&
                null != eZ &&
                (0, C.dA)({
                    questId: q.id,
                    event: k.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        reason: eZ
                    }
                });
        }, [eZ, q.id]),
        o.useEffect(() => {
            et &&
                null != eP.current &&
                (0, C.dA)({
                    questId: q.id,
                    event: ee ? k.rMx.QUEST_VIDEO_APP_FOCUSED : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        video_state: ei
                    }
                });
        }, [ee, et, ei, q.id]);
    let e0 = o.useCallback(
        (e) => {
            !ew && (0, g.FI)(q.id, e),
                null != eP.current &&
                    (0, C.dA)({
                        questId: q.id,
                        event: k.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: eu / 100,
                            video_timestamp_seconds: eP.current.currentTime
                        }
                    });
        },
        [q.id, eu, ew, eP]
    );
    o.useEffect(() => {
        (Y === u.ModalTransitionState.HIDDEN || Y === u.ModalTransitionState.EXITING || Y === u.ModalTransitionState.EXITED || (null != Y && er && !en && !ew) || (et && !ee && !ew)) && (null != eP.current && (Y === u.ModalTransitionState.EXITING || Y === u.ModalTransitionState.EXITED) && e0(eP.current.currentTime), null != eP.current && ei === j.r.PLAYING && (e$(j.r.PAUSED), !ew && eU(j.y.LOST_FOCUS)));
    }, [Y, ee, et, en, er, ei, ew, e$, e0]);
    let e1 = () => {
            es(!0);
        },
        e2 = () => {
            es(!1);
        },
        e7 = ea || ei === j.r.PAUSED || ei === j.r.ENDED,
        e9 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
            null != t &&
                !(0, v.rB)(t) &&
                (t.removeEventListener(v.NO, e9),
                $(!1),
                (0, C.dA)({
                    questId: q.id,
                    event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [q.id, $]),
        e3 = () => {
            if (null != eP.current)
                e4(Math.max(eP.current.currentTime - 10, 0)),
                    ei === j.r.ENDED && e$(j.r.PAUSED),
                    (0, C._3)({
                        questId: q.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        e6 = () => {
            if (null == eP.current || !td) return;
            let e = Math.min(eP.current.currentTime + 10, eW);
            e4(e),
                ei !== j.r.ENDED && e >= eP.current.duration && e$(j.r.ENDED),
                (0, C._3)({
                    questId: q.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eP.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e9);
        };
    }, [e9]);
    let e4 = o.useCallback(
            (e) => {
                null != eP.current && (eJ(), ep(!0), eH(!1), (eP.current.currentTime = e), ek(q.id, e, eP.current.duration));
            },
            [eP, ek, q.id, eJ]
        ),
        e8 = () => {
            if (null != eP.current)
                switch (ei) {
                    case j.r.ENDED:
                        e4(0), e$(j.r.PLAYING);
                        break;
                    case j.r.PLAYING:
                        e$(j.r.PAUSED), eU(j.y.PAUSE_BUTTON);
                        break;
                    default:
                        e$(j.r.PLAYING);
                }
        },
        e5 = (e) => {
            eY(e);
        },
        te = (e) => {
            eY((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tt = o.useCallback(() => {
            if (null == eP.current || 0 === eP.current.textTracks.length) return;
            let e = eP.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => e5(n)), (n.onexit = () => te(n)));
                }
        }, [eP]);
    o.useEffect(() => {
        if (null == eO.current) return;
        let e = eO.current;
        return (
            e.addEventListener('load', tt),
            () => {
                null != e && e.removeEventListener('load', tt);
            }
        );
    }, [eO, tt]);
    let tn = (e) => {
        null != eP.current && ei === j.r.PLAYING && (ef && ev(!1), eC && eg(!1), e$(j.r.PLAYING));
    };
    o.useEffect(() => {
        if (!em) return;
        let e = setTimeout(() => {
            ep(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [em]);
    let [{ controlBarAnimSpring: tr }, to] = (0, u.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: O,
            onStart: () => {
                ey(!1);
            },
            onRest: (e) => {
                1 === e.value && ey(!0);
            }
        })),
        ti = (0, o.useRef)(null),
        [{ captionHeightSpring: tl }, ta] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O
        }));
    o.useEffect(() => {
        var e, t;
        return (
            ta({
                captionHeightSpring: K && null != ez && null !== (t = null === (e = ti.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eM
            }),
            () => {
                tl.stop();
            }
        );
    }, [K, ta, eM, ez, tl]),
        o.useEffect(
            () => (
                to({
                    controlBarAnimSpring: e7 || ej ? 1 : 0,
                    immediate: eM
                }),
                () => {
                    tr.stop();
                }
            ),
            [e7, to, eM, ej, tr]
        );
    let ts = ei === j.r.ENDED,
        tc = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, q), [q]),
        tu = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, q), [q]),
        td = ew || eA.maxTimestampSec >= (null !== (Z = null === (i = eP.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== Z ? Z : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.Clickable, {
            className: M.videoCont,
            'data-fullscreen': J,
            tabIndex: -1,
            onMouseEnter: e1,
            onMouseLeave: e2,
            onFocus: e1,
            onBlur: e2,
            children: (0, r.jsxs)('div', {
                className: M.videoContInnerRelative,
                children: [
                    (0, r.jsx)(w, {
                        quest: q,
                        shouldShow: ts
                    }),
                    ts && (0, r.jsx)('div', { className: M.videoContOverlay }),
                    (0, r.jsxs)(m.Z, {
                        ref: (e) => {
                            (eP.current = e), (eo.current = e);
                        },
                        autoPlay: z,
                        playsInline: !0,
                        mediaLayoutType: J ? B.hV.STATIC : B.hV.RESPONSIVE,
                        className: l()({
                            [M.hidden]: ts,
                            [M.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tc ? void 0 : tc.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eP.current && (eP.current.currentTime >= e_ && (eT(eP.current.currentTime + 6 + 2 * Math.random()), e0(eP.current.currentTime)), eP.current.currentTime >= eI && (eN(eP.current.currentTime + 1), (0, g.qm)(q.id, ec.taskType, eP.current.currentTime), H(eP.current.currentTime)), ek(q.id, eP.current.currentTime, eP.current.duration), ed((eP.current.currentTime / eP.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eP.current && (e0(eP.current.duration + 1), ek(q.id, eP.current.duration, eP.current.duration)), e$(j.r.ENDED), eg(!1);
                        },
                        onLoadedData: (e) => {
                            ef && ev(!1);
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eP.current) eV(!0), e4(ew ? eA.timestampSec : Math.max(eA.timestampSec, ec.progressSeconds)), eB ? (eP.current.volume = 0) : (eP.current.volume = eL);
                        },
                        onWaiting: (e) => {
                            eg(!0);
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
                            eS(t);
                        },
                        onCanPlay: tn,
                        onCanPlayThrough: tn,
                        onSeeked: () => {
                            eH(!0);
                        },
                        onClick: () => {
                            e8();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != tu &&
                                (0, r.jsx)('track', {
                                    ref: eO,
                                    src: tu.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != eK &&
                                (0, r.jsx)('source', {
                                    src: eK.url,
                                    type: eK.mimetype
                                })
                        ]
                    }),
                    (ef || eC) &&
                        (0, r.jsx)(u.Spinner, {
                            type: u.Spinner.Type.WANDERING_CUBES,
                            className: M.loadingSpinner
                        }),
                    ei === j.r.PAUSED && eZ === j.y.LOST_FOCUS && (0, r.jsx)(R, {}),
                    W &&
                        ei !== j.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Clickable, {
                                    onClick: () => Q(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: M.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: M.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tr, tl], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(N.K, {
                                        quest: q,
                                        onClose: () => {
                                            Q(!1),
                                                (0, C._3)({
                                                    questId: q.id,
                                                    questContent: x.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    ei === j.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(F, {
                                title: null !== (U = null === (c = q.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== U ? U : L.intl.string(L.t.iiTtpK),
                                subtitle: null !== (G = null === (p = q.config.videoMetadata) || void 0 === p ? void 0 : p.messages.videoEndCtaSubtitle) && void 0 !== G ? G : L.intl.string(L.t.mxaHf3),
                                icon: u.ArrowLargeRightIcon,
                                className: M.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: q.id,
                                        questContent: x.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, S.FE)(q, {
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
                                    tr.to({
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
                                [M.play]: ei === j.r.PLAYING,
                                [M.pause]: ei === j.r.PAUSED
                            }),
                            children: ei === j.r.PLAYING ? (0, r.jsx)(u.PlayIcon, { className: M.playPausePopIcon }) : (0, r.jsx)(u.PauseIcon, { className: M.playPausePopIcon })
                        },
                        ei
                    ),
                    K &&
                        null != ez &&
                        (0, r.jsx)(a.animated.div, {
                            className: M.captionContainer,
                            ref: ti,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        tr.to({
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
                                children: ez.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: M.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    tr.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    tr.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    tr.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(I.Z, {
                                percent: eu,
                                animate: !0 !== eR.current && !em,
                                interactionEnabled: ew && eD,
                                backgroundColor: e7 ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: e7 ? ex : void 0,
                                duration: null !== (V = null === (_ = eP.current) || void 0 === _ ? void 0 : _.duration) && void 0 !== V ? V : 1,
                                maxSeekableTime: e7 && eD ? eW : void 0,
                                onClick: (e) => {
                                    e4(e), ei === j.r.ENDED && e$(j.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    e3();
                                },
                                onScrubForward: () => {
                                    e6();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: M.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            tr.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            tr.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            tr.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(T.Z, {
                                    videoRef: eP,
                                    quest: q,
                                    playerState: ei,
                                    animSpring: tr,
                                    visible: e7,
                                    seekForwardEnabled: td,
                                    hideCaptionBtn: null == tu,
                                    handlePlaybackBtnClick: e8,
                                    handleTranscriptBtnClick: () => {
                                        !W && (null == eF || eF.questId !== q.id || eF.fetchStatus === E.iF.NONE || eF.fetchStatus === E.iF.FAILURE) && (0, g.lL)(q),
                                            Q(!W),
                                            (0, C._3)({
                                                questId: q.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: W ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        X(!K),
                                            (0, C._3)({
                                                questId: q.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: K ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !J,
                                            n = (0, v.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
                                        t && null != n
                                            ? ((0, v.Dj)(n),
                                              n.addEventListener(v.NO, e9),
                                              (0, C.dA)({
                                                  questId: q.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(v.NO, e9),
                                              (0, C.dA)({
                                                  questId: q.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                                              }),
                                              (0, v.Pr)(n)),
                                            $(t);
                                    },
                                    handleSeekBackBtnClick: e3,
                                    handleSeekForwardBtnClick: e6,
                                    handleControlBarPendingInteraction: eb
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
