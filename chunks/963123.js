n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    o = n(192379),
    l = n(120356),
    i = n.n(l),
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
    T = n(881773),
    I = n(355243),
    j = n(106743),
    N = n(223418),
    b = n(604162),
    D = n(747717),
    y = n(281055),
    A = n(920393),
    k = n(981631),
    B = n(217702),
    L = n(388032),
    P = n(417575);
let M = new Set([k.IyS.FIVE_G, k.IyS.FOUR_G, k.IyS.UNKNOWN]),
    O = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function R() {
    let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: P.pauseText,
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
        l = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == l
        ? null
        : (0, r.jsx)(_.A, {
              questOrQuests: t,
              questContent: x.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: 'Video thumbnail',
                      className: i()(P.stillFrameImageCard, { [P.stillFrameImageCardHidden]: !n })
                  })
          });
}
function F(e) {
    let { title: t, subtitle: n, icon: l, onClick: a, className: s } = e,
        [c, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(u.Clickable, {
        className: i()(P.endScreenPanel, P.accentOnHover, s),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: a,
        children: (0, r.jsxs)('div', {
            className: P.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: P.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: 'heading-md/semibold',
                            className: P.endScreenPanelTextTitle,
                            children: t
                        }),
                        (0, r.jsx)(u.Heading, {
                            variant: 'heading-sm/normal',
                            className: P.endScreenPanelTextSubtitle,
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(D.Z, { color: '#747783' }),
                (0, r.jsx)(l, {
                    size: 'md',
                    color: c ? '#FFFFFF' : '#B5BAC1',
                    className: P.endScreenIcon
                })
            ]
        })
    });
}
function Z(e) {
    var t, n, l, c, f, _, D, Z, U, V, q;
    let { quest: G, onOptimisticProgressUpdate: H, autoplay: z, parentTransitionState: Y } = e,
        W = (0, E.km)((e) => e.transcriptEnabled),
        Q = (0, E.km)((e) => e.setTranscriptEnabled),
        K = (0, E.km)((e) => e.captionEnabled),
        X = (0, E.km)((e) => e.setCaptionEnabled),
        J = (0, E.km)((e) => e.fullScreenEnabled),
        $ = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: ee, focusedChanged: et } = (0, y.xU)(),
        { visible: en, visibleChanged: er, targetRef: eo } = (0, y.Yy)(),
        [el, ei] = o.useState(!0 === z ? N.r.PLAYING : N.r.PAUSED),
        [ea, es] = o.useState(!1),
        ec = (0, S.il)(G),
        [eu, ed] = o.useState(ec.percentComplete),
        [em, ef] = o.useState(!1),
        [ep, ev] = o.useState(!0),
        [eC, eg] = o.useState(!1),
        [ex, eS] = o.useState([]),
        [eE, eh] = o.useState(p.Z.getEffectiveConnectionSpeed()),
        [e_, eT] = o.useState(0),
        [eI, ej] = o.useState(0),
        [eN, eb] = o.useState(!1),
        [eD, ey] = o.useState(!1),
        eA = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[G.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        ek = (0, E.km)((e) => e.setVideoProgress),
        eB = (0, E.km)((e) => e.muted),
        eL = (0, E.km)((e) => e.volume),
        eP = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        eM = (0, o.useRef)(null),
        eO = (0, o.useRef)(null),
        eR = o.useRef(!0),
        ew = (null === (t = G.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eF = (0, E.km)((e) => e.transcript),
        [eZ, eU] = o.useState(null),
        [eV, eq] = o.useState(!1),
        [eG, eH] = o.useState(!1),
        [ez, eY] = o.useState(null),
        eW = ew ? (null !== (D = null === (n = eM.current) || void 0 === n ? void 0 : n.duration) && void 0 !== D ? D : 0) : Math.max(eA.maxTimestampSec, ec.progressSeconds),
        eQ = o.useMemo(() => (M.has(eE) ? h.i.VIDEO_PLAYER_VIDEO : h.i.VIDEO_PLAYER_VIDEO_LOW_RES), [eE]),
        eK = o.useMemo(() => (null != eQ ? (0, h.z)(eQ, G) : null), [eQ, G]),
        eX = o.useCallback(
            (e) => {
                var t, n;
                (0, C.dA)({
                    questId: G.id,
                    event: k.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                    properties: {
                        ...e,
                        video_asset_id: eQ,
                        quest_completed: ew,
                        video_duration_sec: null !== (n = null === (t = eM.current) || void 0 === t ? void 0 : t.duration) && void 0 !== n ? n : -1,
                        video_progress: eu / 100
                    }
                });
            },
            [G.id, eQ, ew, eu]
        ),
        { forceSendCurrentSegment: eJ } = (0, A.Z)({
            videoRef: eM,
            isPlaying: el === N.r.PLAYING,
            isMetadataLoaded: eV,
            isInitialSeekComplete: eG,
            onAnalytics: eX,
            emitIntervalMs: 4000,
            minSegmentDurationMs: 2000
        }),
        e$ = o.useCallback(
            (e) => {
                if ((ei(e), null != eM.current))
                    switch (e) {
                        case N.r.PLAYING:
                            eM.current.play(), eU(null);
                            break;
                        case N.r.PAUSED:
                            eM.current.pause(), eJ();
                            break;
                        case N.r.ENDED:
                            Q(!1), eJ();
                    }
            },
            [eM, ei, eU, Q, eJ]
        );
    o.useLayoutEffect(() => {
        eR.current && ((eR.current = !1), eh(p.Z.getEffectiveConnectionSpeed()), ew && eA.timestampSec >= eA.duration && ek(G.id, 0, eA.duration));
    }, []),
        o.useEffect(() => {
            null != eM.current &&
                null != eZ &&
                (0, C.dA)({
                    questId: G.id,
                    event: k.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eM.current.currentTime,
                        reason: eZ
                    }
                });
        }, [eZ, G.id]),
        o.useEffect(() => {
            et &&
                null != eM.current &&
                (0, C.dA)({
                    questId: G.id,
                    event: ee ? k.rMx.QUEST_VIDEO_APP_FOCUSED : k.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eM.current.currentTime,
                        video_state: el
                    }
                });
        }, [ee, et, el, G.id]);
    let e0 = o.useCallback(
        (e) => {
            var t;
            !ew && (null === (t = G.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (0, g.FI)(G.id, e),
                null != eM.current &&
                    (0, C.dA)({
                        questId: G.id,
                        event: k.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: eu / 100,
                            video_timestamp_seconds: eM.current.currentTime
                        }
                    });
        },
        [G, eu, ew, eM]
    );
    o.useEffect(() => {
        (Y === u.ModalTransitionState.HIDDEN || Y === u.ModalTransitionState.EXITING || Y === u.ModalTransitionState.EXITED || (null != Y && er && !en && !ew) || (et && !ee && !ew)) && null != eM.current && el === N.r.PLAYING && (e$(N.r.PAUSED), !ew && eU(N.y.LOST_FOCUS));
    }, [Y, ee, et, en, er, el, ew, e$, e0]);
    let e1 = () => {
            es(!0);
        },
        e2 = () => {
            es(!1);
        },
        e7 = ea || el === N.r.PAUSED || el === N.r.ENDED,
        e9 = o.useCallback(() => {
            var e;
            let t = (0, v.fn)(null === (e = eM.current) || void 0 === e ? void 0 : e.parentNode, eM.current);
            null != t &&
                !(0, v.rB)(t) &&
                (t.removeEventListener(v.NO, e9),
                $(!1),
                (0, C.dA)({
                    questId: G.id,
                    event: k.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [G.id, $]),
        e3 = () => {
            if (null != eM.current)
                e4(Math.max(eM.current.currentTime - 10, 0)),
                    el === N.r.ENDED && e$(N.r.PAUSED),
                    (0, C._3)({
                        questId: G.id,
                        questContent: x.jn.VIDEO_MODAL,
                        questContentCTA: C.jZ.SEEK_BACKWARD
                    });
        },
        e6 = () => {
            if (null == eM.current || !td) return;
            let e = Math.min(eM.current.currentTime + 10, eW);
            e4(e),
                el !== N.r.ENDED && e >= eM.current.duration && e$(N.r.ENDED),
                (0, C._3)({
                    questId: G.id,
                    questContent: x.jn.VIDEO_MODAL,
                    questContentCTA: C.jZ.SEEK_FORWARD
                });
        };
    o.useEffect(() => {
        let e = eM.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, e9);
        };
    }, [e9]);
    let e4 = o.useCallback(
            (e) => {
                null != eM.current && (eJ(), ef(!0), eH(!1), (eM.current.currentTime = e), ek(G.id, e, eM.current.duration));
            },
            [eM, ek, G.id, eJ]
        ),
        e8 = () => {
            if (null != eM.current)
                switch (el) {
                    case N.r.ENDED:
                        e4(0), e$(N.r.PLAYING);
                        break;
                    case N.r.PLAYING:
                        e$(N.r.PAUSED), eU(N.y.PAUSE_BUTTON);
                        break;
                    default:
                        e$(N.r.PLAYING);
                }
        },
        e5 = (e) => {
            eY(e);
        },
        te = (e) => {
            eY((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        tt = o.useCallback(() => {
            if (null == eM.current || 0 === eM.current.textTracks.length) return;
            let e = eM.current.textTracks[0];
            if (((e.mode = 'hidden'), null != e.cues))
                for (let t = 0; t < e.cues.length; t++) {
                    let n = e.cues[t];
                    (0, b.JC)(n) && ((n.id = 'cue-'.concat(t)), (n.onenter = () => e5(n)), (n.onexit = () => te(n)));
                }
        }, [eM]);
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
        null != eM.current && el === N.r.PLAYING && (ep && ev(!1), eC && eg(!1), e$(N.r.PLAYING));
    };
    o.useEffect(() => {
        if (!em) return;
        let e = setTimeout(() => {
            ef(!1);
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
        tl = (0, o.useRef)(null),
        [{ captionHeightSpring: ti }, ta] = (0, u.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: O
        }));
    o.useEffect(() => {
        var e, t;
        return (
            ta({
                captionHeightSpring: K && null != ez && null !== (t = null === (e = tl.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eP
            }),
            () => {
                ti.stop();
            }
        );
    }, [K, ta, eP, ez, ti]),
        o.useEffect(
            () => (
                to({
                    controlBarAnimSpring: e7 || eN ? 1 : 0,
                    immediate: eP
                }),
                () => {
                    tr.stop();
                }
            ),
            [e7, to, eP, eN, tr]
        );
    let ts = el === N.r.ENDED,
        tc = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, G), [G]),
        tu = o.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, G), [G]),
        td = ew || eA.maxTimestampSec >= (null !== (Z = null === (l = eM.current) || void 0 === l ? void 0 : l.currentTime) && void 0 !== Z ? Z : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.Clickable, {
            className: P.videoCont,
            'data-fullscreen': J,
            tabIndex: -1,
            onMouseEnter: e1,
            onMouseLeave: e2,
            onFocus: e1,
            onBlur: e2,
            children: (0, r.jsxs)('div', {
                className: P.videoContInnerRelative,
                children: [
                    (0, r.jsx)(w, {
                        quest: G,
                        shouldShow: ts
                    }),
                    ts && (0, r.jsx)('div', { className: P.videoContOverlay }),
                    (0, r.jsxs)(m.Z, {
                        ref: (e) => {
                            (eM.current = e), (eo.current = e);
                        },
                        autoPlay: z,
                        playsInline: !0,
                        mediaLayoutType: J ? B.hV.STATIC : B.hV.RESPONSIVE,
                        className: i()({
                            [P.hidden]: ts,
                            [P.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == tc ? void 0 : tc.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            null != eM.current && (eM.current.currentTime >= e_ && (eT(eM.current.currentTime + 6 + 2 * Math.random()), e0(eM.current.currentTime)), eM.current.currentTime >= eI && (ej(eM.current.currentTime + 1), (0, g.qm)(G.id, ec.taskType, eM.current.currentTime), H(eM.current.currentTime)), ek(G.id, eM.current.currentTime, eM.current.duration), ed((eM.current.currentTime / eM.current.duration) * 100));
                        },
                        onEnded: (e) => {
                            null != eM.current && (e0(eM.current.duration + 1), ek(G.id, eM.current.duration, eM.current.duration)), e$(N.r.ENDED), eg(!1);
                        },
                        onLoadedData: (e) => {
                            ep && ev(!1);
                        },
                        onLoadedMetadata: (e) => {
                            if (null != eM.current) eq(!0), e4(ew ? eA.timestampSec : Math.max(eA.timestampSec, ec.progressSeconds)), eB ? (eM.current.volume = 0) : (eM.current.volume = eL);
                        },
                        onWaiting: (e) => {
                            eg(!0);
                        },
                        onProgress: (e) => {
                            if (null == eM.current) return;
                            let t = [];
                            for (let e = 0; e < eM.current.buffered.length; e++) {
                                let n = eM.current.buffered.start(e),
                                    r = eM.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eM.current.duration,
                                        size: (r - n) / eM.current.duration
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
                    (ep || eC) &&
                        (0, r.jsx)(u.Spinner, {
                            type: u.Spinner.Type.WANDERING_CUBES,
                            className: P.loadingSpinner
                        }),
                    el === N.r.PAUSED && eZ === N.y.LOST_FOCUS && (0, r.jsx)(R, {}),
                    W &&
                        el !== N.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Clickable, {
                                    onClick: () => Q(!1),
                                    tabIndex: -1,
                                    children: (0, r.jsx)('div', { className: P.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: P.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([tr, ti], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(j.K, {
                                        quest: G,
                                        onClose: () => {
                                            Q(!1),
                                                (0, C._3)({
                                                    questId: G.id,
                                                    questContent: x.jn.VIDEO_MODAL,
                                                    questContentCTA: C.jZ.TRANSCRIPT_DISABLE
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                    el === N.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(F, {
                                title: null !== (U = null === (c = G.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== U ? U : L.intl.string(L.t.iiTtpK),
                                subtitle: null !== (V = null === (f = G.config.videoMetadata) || void 0 === f ? void 0 : f.messages.videoEndCtaSubtitle) && void 0 !== V ? V : L.intl.string(L.t.mxaHf3),
                                icon: u.ArrowLargeRightIcon,
                                className: P.endScreenPanelRight,
                                onClick: () => {
                                    (0, C._3)({
                                        questId: G.id,
                                        questContent: x.jn.VIDEO_MODAL,
                                        questContentCTA: C.jZ.LEARN_MORE
                                    }),
                                        (0, S.FE)(G, {
                                            content: x.jn.VIDEO_MODAL,
                                            ctaContent: C.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: P.videoFooterContGradient,
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
                            className: i()(P.playPausePopCont, {
                                [P.play]: el === N.r.PLAYING,
                                [P.pause]: el === N.r.PAUSED
                            }),
                            children: el === N.r.PLAYING ? (0, r.jsx)(u.PlayIcon, { className: P.playPausePopIcon }) : (0, r.jsx)(u.PauseIcon, { className: P.playPausePopIcon })
                        },
                        el
                    ),
                    K &&
                        null != ez &&
                        (0, r.jsx)(a.animated.div, {
                            className: P.captionContainer,
                            ref: tl,
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
                                className: P.captionText,
                                children: ez.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: P.videoFooterCont,
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
                                duration: null !== (q = null === (_ = eM.current) || void 0 === _ ? void 0 : _.duration) && void 0 !== q ? q : 1,
                                maxSeekableTime: e7 && eD ? eW : void 0,
                                onClick: (e) => {
                                    e4(e), el === N.r.ENDED && e$(N.r.PLAYING);
                                },
                                onScrubBack: () => {
                                    e3();
                                },
                                onScrubForward: () => {
                                    e6();
                                }
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: P.videoControlsCont,
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
                                    videoRef: eM,
                                    quest: G,
                                    playerState: el,
                                    animSpring: tr,
                                    visible: e7,
                                    seekForwardEnabled: td,
                                    hideCaptionBtn: null == tu,
                                    handlePlaybackBtnClick: e8,
                                    handleTranscriptBtnClick: () => {
                                        !W && (null == eF || eF.questId !== G.id || eF.fetchStatus === E.iF.NONE || eF.fetchStatus === E.iF.FAILURE) && (0, g.lL)(G),
                                            Q(!W),
                                            (0, C._3)({
                                                questId: G.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: W ? C.jZ.TRANSCRIPT_DISABLE : C.jZ.TRANSCRIPT_ENABLE
                                            });
                                    },
                                    handleCaptionBtnClick: () => {
                                        X(!K),
                                            (0, C._3)({
                                                questId: G.id,
                                                questContent: x.jn.VIDEO_MODAL,
                                                questContentCTA: K ? C.jZ.CLOSED_CAPTIONING_DISABLE : C.jZ.CLOSED_CAPTIONING_ENABLE
                                            });
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !J,
                                            n = (0, v.fn)(null === (e = eM.current) || void 0 === e ? void 0 : e.parentNode, eM.current);
                                        t && null != n
                                            ? ((0, v.Dj)(n),
                                              n.addEventListener(v.NO, e9),
                                              (0, C.dA)({
                                                  questId: G.id,
                                                  event: k.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t &&
                                              null != n &&
                                              (n.removeEventListener(v.NO, e9),
                                              (0, C.dA)({
                                                  questId: G.id,
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
