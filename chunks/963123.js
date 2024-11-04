n.d(t, {
    Z: function () {
        return F;
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
    c = n(692547),
    u = n(780384),
    d = n(481060),
    m = n(607070),
    p = n(70097),
    f = n(210887),
    v = n(866960),
    C = n(228488),
    g = n(617136),
    x = n(272008),
    h = n(497505),
    S = n(918701),
    E = n(184299),
    _ = n(720293),
    T = n(881773),
    b = n(355243),
    j = n(106743),
    N = n(528846),
    I = n(604162),
    y = n(747717),
    k = n(281055),
    B = n(981631),
    D = n(217702),
    A = n(388032),
    L = n(417575);
let P = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
    M = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function R() {
    let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: L.pauseText,
        style: { background: (0, u.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: A.intl.string(A.t.U7Xrb2)
        })
    });
}
function O(e) {
    let { quest: t, className: n } = e,
        i = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)('img', {
              src: i.url,
              alt: 'Video thumbnail',
              className: l()(L.stillFrameImageCard, n)
          });
}
function U(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: m } = e,
        p = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        [v, C] = o.useState(!1),
        g = () => {
            C(!0);
        },
        x = () => {
            C(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: l()(L.endScreenPanel, L.accentOnHover, m),
        onMouseEnter: g,
        onMouseLeave: x,
        onFocus: g,
        onBlur: x,
        onClick: a,
        style: { background: (0, u.wj)(p) ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.55)' },
        children: (0, r.jsxs)('div', {
            className: L.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: L.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            color: 'text-normal',
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(y.Z, {}),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: v ? c.Z.colors.INTERACTIVE_ACTIVE : c.Z.colors.INTERACTIVE_NORMAL,
                    className: L.endScreenIcon
                })
            ]
        })
    });
}
function F(e) {
    var t, n, i, c, u, f, y;
    let { quest: F, onOptimisticProgressUpdate: w, autoplay: Z, parentTransitionState: G } = e,
        V = (0, E.km)((e) => e.transcriptEnabled),
        H = (0, E.km)((e) => e.setTranscriptEnabled),
        z = (0, E.km)((e) => e.captionEnabled),
        q = (0, E.km)((e) => e.setCaptionEnabled),
        Y = (0, E.km)((e) => e.fullScreenEnabled),
        W = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: Q, focusedChanged: K } = (0, k.xU)(),
        { visible: X, visibleChanged: J, targetRef: $ } = (0, k.Yy)(),
        [ee, et] = o.useState(!0 === Z ? N.r.PLAYING : N.r.PAUSED),
        [en, er] = o.useState(!1),
        eo = (0, S.il)(F),
        [ei, el] = o.useState(eo.percentComplete),
        [ea, es] = o.useState(!1),
        [ec, eu] = o.useState(!0),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState([]),
        [ev, eC] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eg, ex] = o.useState(0),
        [eh, eS] = o.useState(0),
        [eE, e_] = o.useState(!1),
        [eT, eb] = o.useState(!1),
        ej = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[F.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eN = (0, E.km)((e) => e.setVideoProgress),
        eI = (0, E.km)((e) => e.muted),
        ey = (0, E.km)((e) => e.volume),
        ek = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        eB = (0, o.useRef)(null),
        eD = o.useRef(!0),
        eA = (null === (t = F.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eL = (0, E.km)((e) => e.transcript),
        [eP, eM] = o.useState(null),
        [eR, eO] = o.useState(null),
        eU = eA ? (null !== (u = null === (n = eB.current) || void 0 === n ? void 0 : n.duration) && void 0 !== u ? u : 0) : ej.maxTimestampSec;
    o.useLayoutEffect(() => {
        eD.current && ((eD.current = !1), eC(v.Z.getEffectiveConnectionSpeed()), eA && ej.timestampSec >= ej.duration && eN(F.id, 0, ej.duration));
    }, []),
        o.useEffect(() => {
            null != eB.current &&
                (0, g.dA)({
                    questId: F.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eB.current.currentTime,
                        reason: eP
                    }
                });
        }, [eP, F.id]),
        o.useEffect(() => {
            K &&
                null != eB.current &&
                (0, g.dA)({
                    questId: F.id,
                    event: Q ? B.rMx.QUEST_VIDEO_APP_FOCUSED : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eB.current.currentTime,
                        video_state: ee
                    }
                });
        }, [Q, K, ee, F.id]),
        o.useEffect(() => {
            (G === d.ModalTransitionState.HIDDEN || G === d.ModalTransitionState.EXITING || G === d.ModalTransitionState.EXITED || (null != G && J && !X && !eA) || (K && !Q && !eA)) && null != eB.current && ee === N.r.PLAYING && (eV(!1), eM(N.y.LOST_FOCUS));
        }, [G, Q, K, X, J, ee, eA]);
    let eF = () => {
            er(!0);
        },
        ew = () => {
            er(!1);
        },
        eZ = en || ee === N.r.PAUSED || ee === N.r.ENDED,
        eG = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(null === (e = eB.current) || void 0 === e ? void 0 : e.parentNode, eB.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, eG),
                W(!1),
                (0, g.dA)({
                    questId: F.id,
                    event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [F.id, W]);
    o.useEffect(() => {
        let e = eB.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, eG);
        };
    }, [eG]);
    let eV = (e) => {
            if (null != eB.current) e ? (eB.current.play(), eM(null)) : eB.current.pause(), et(e ? N.r.PLAYING : N.r.PAUSED);
        },
        eH = o.useCallback(
            (e) => {
                if (null != eB.current) es(!0), (eB.current.currentTime = e), eN(F.id, e, eB.current.duration);
            },
            [eB, eN, F]
        ),
        ez = () => {
            if (null != eB.current)
                switch (ee) {
                    case N.r.ENDED:
                        eH(0), eV(!0);
                        break;
                    case N.r.PLAYING:
                        eV(!1), eM(N.y.PAUSE_BUTTON);
                        break;
                    default:
                        eV(!0);
                }
        },
        eq = (e) => {
            eO(e);
        },
        eY = (e) => {
            eO((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eW = (e) => {
            if (null != eB.current && ee === N.r.PLAYING) ec && eu(!1), ed && em(!1), eV(!0);
        };
    o.useEffect(() => {
        if (!ea) return;
        let e = setTimeout(() => {
            es(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ea]);
    let eQ = o.useCallback(() => {
            if (null != eB.current) eH(Math.max(eB.current.currentTime - 10, 0));
        }, [eH]),
        eK = o.useCallback(() => {
            if (null != eB.current) eH(Math.min(eB.current.currentTime + 10, eB.current.duration));
        }, [eH]),
        [{ controlBarAnimSpring: eX }, eJ] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: M,
            onStart: () => {
                eb(!1);
            },
            onRest: (e) => {
                1 === e.value && eb(!0);
            }
        })),
        e$ = (0, o.useRef)(null),
        [{ captionHeightSpring: e0 }, e1] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: M
        }));
    o.useEffect(() => {
        var e, t;
        return (
            e1({
                captionHeightSpring: z && null != eR && null !== (t = null === (e = e$.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: ek
            }),
            () => {
                e0.stop();
            }
        );
    }, [z, e1, ek, eR, e0]),
        o.useEffect(
            () => (
                eJ({
                    controlBarAnimSpring: eZ || eE ? 1 : 0,
                    immediate: ek
                }),
                () => {
                    eX.stop();
                }
            ),
            [eZ, eJ, ek, eE, eX]
        );
    let e2 = (e) => {
            !eA && (0, x.FI)(F.id, e),
                null != eB.current &&
                    (0, g.dA)({
                        questId: F.id,
                        event: B.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: ei / 100,
                            video_timestamp_seconds: eB.current.currentTime
                        }
                    });
        },
        e9 = ee === N.r.ENDED,
        e6 = o.useMemo(() => (P.has(ev) ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, F) : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, F)), [ev, F]),
        e4 = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, F), [F]),
        e7 = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, F), [F]),
        e3 = eA || ej.maxTimestampSec >= (null !== (f = null === (i = eB.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== f ? f : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(d.Clickable, {
            className: L.videoCont,
            'data-fullscreen': Y,
            tabIndex: -1,
            onMouseEnter: eF,
            onMouseLeave: ew,
            onFocus: eF,
            onBlur: ew,
            children: [
                (0, r.jsx)(O, {
                    quest: F,
                    className: l()({ [L.stillFrameImageCardHidden]: !e9 })
                }),
                e9 && (0, r.jsx)('div', { className: L.videoContOverlay }),
                (0, r.jsxs)(p.Z, {
                    ref: (e) => {
                        (eB.current = e), ($.current = e);
                    },
                    autoPlay: Z,
                    playsInline: !0,
                    mediaLayoutType: Y ? D.hV.STATIC : D.hV.RESPONSIVE,
                    className: l()({
                        [L.hidden]: e9,
                        [L.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == e4 ? void 0 : e4.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null != eB.current) eB.current.currentTime >= eg && (ex(eB.current.currentTime + 10 + 5 * Math.random()), e2(eB.current.currentTime)), eB.current.currentTime >= eh && (eS(eB.current.currentTime + 1), (0, x.qm)(F.id, eo.taskType, eB.current.currentTime), w(eB.current.currentTime)), eN(F.id, eB.current.currentTime, eB.current.duration), el((eB.current.currentTime / eB.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eB.current && (e2(eB.current.duration + 1), eN(F.id, eB.current.duration, eB.current.duration)), et(N.r.ENDED);
                    },
                    onLoadedData: (e) => {
                        ec && eu(!1);
                    },
                    onLoadedMetadata: (e) => {
                        if (null == eB.current) return;
                        if ((eH(ej.timestampSec), eI ? (eB.current.volume = 0) : (eB.current.volume = ey), 0 === eB.current.textTracks.length)) return;
                        let t = eB.current.textTracks[0];
                        if (((t.mode = 'hidden'), null != t.cues))
                            for (let e = 0; e < t.cues.length; e++) {
                                let n = t.cues[e];
                                (0, I.JC)(n) && ((n.id = 'cue-'.concat(e)), (n.onenter = () => eq(n)), (n.onexit = () => eY(n)));
                            }
                    },
                    onWaiting: (e) => {
                        em(!0);
                    },
                    onProgress: (e) => {
                        if (null == eB.current) return;
                        let t = [];
                        for (let e = 0; e < eB.current.buffered.length; e++) {
                            let n = eB.current.buffered.start(e),
                                r = eB.current.buffered.end(e);
                            if (!(r - n < 1))
                                t.push({
                                    start: n / eB.current.duration,
                                    size: (r - n) / eB.current.duration
                                });
                        }
                        ef(t);
                    },
                    onCanPlay: eW,
                    onCanPlayThrough: eW,
                    onClick: () => {
                        ez();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != e7 &&
                            (0, r.jsx)('track', {
                                src: e7.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != e6 &&
                            (0, r.jsx)('source', {
                                src: e6.url,
                                type: e6.mimetype
                            })
                    ]
                }),
                (ec || ed) &&
                    (0, r.jsx)(d.Spinner, {
                        type: d.Spinner.Type.WANDERING_CUBES,
                        className: L.loadingSpinner
                    }),
                ee === N.r.PAUSED && eP === N.y.LOST_FOCUS && (0, r.jsx)(R, {}),
                V &&
                    ee !== N.r.ENDED &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.Clickable, {
                                onClick: () => H(!1),
                                children: (0, r.jsx)('div', { className: L.transcriptOverlay })
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: L.transcriptCont,
                                style: {
                                    marginBottom: (0, a.to)([eX, e0], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, r.jsx)(j.K, {
                                    quest: F,
                                    onClose: () => {
                                        H(!1);
                                    }
                                })
                            })
                        ]
                    }),
                ee === N.r.ENDED &&
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(U, {
                            title: A.intl.string(A.t.iiTtpK),
                            subtitle: A.intl.string(A.t.mxaHf3),
                            icon: d.LinkExternalMediumIcon,
                            className: L.endScreenPanelRight,
                            onClick: () => {
                                (0, g._3)({
                                    questId: F.id,
                                    questContent: h.jn.QUEST_BAR_V2,
                                    questContentCTA: g.jZ.LEARN_MORE
                                }),
                                    (0, S.FE)(F, {
                                        content: h.jn.QUEST_BAR_V2,
                                        ctaContent: g.jZ.LEARN_MORE
                                    });
                            }
                        })
                    }),
                (0, r.jsx)(a.animated.div, {
                    className: L.videoFooterContGradient,
                    style: {
                        opacity: (0, a.to)(
                            [
                                eX.to({
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
                        className: l()(L.playPausePopCont, {
                            [L.play]: ee === N.r.PLAYING,
                            [L.pause]: ee === N.r.PAUSED
                        }),
                        children: ee === N.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: L.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: L.playPausePopIcon })
                    },
                    ee
                ),
                z &&
                    null != eR &&
                    (0, r.jsx)(a.animated.div, {
                        className: L.captionContainer,
                        ref: e$,
                        style: {
                            translateY: (0, a.to)(
                                [
                                    eX.to({
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
                            className: L.captionText,
                            children: eR.text
                        })
                    }),
                (0, r.jsxs)(a.animated.div, {
                    className: L.videoFooterCont,
                    style: {
                        paddingLeft: (0, a.to)(
                            [
                                eX.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, a.to)(
                            [
                                eX.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, a.to)(
                            [
                                eX.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, r.jsx)(b.Z, {
                            percent: ei,
                            animate: !0 !== eD.current && !ea,
                            interactionEnabled: eA && eT,
                            backgroundColor: eZ ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: eZ ? ep : void 0,
                            duration: null !== (y = null === (c = eB.current) || void 0 === c ? void 0 : c.duration) && void 0 !== y ? y : 1,
                            maxSeekableTime: eZ && eT ? eU : void 0,
                            onClick: (e) => {
                                eH(e), ee === N.r.ENDED && eV(!0);
                            },
                            onScrubBack: eQ,
                            onScrubForward: eK
                        }),
                        (0, r.jsx)(a.animated.div, {
                            className: L.videoControlsCont,
                            style: {
                                paddingTop: (0, a.to)(
                                    [
                                        eX.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, a.to)(
                                    [
                                        eX.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, a.to)(
                                    [
                                        eX.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, r.jsx)(T.Z, {
                                videoRef: eB,
                                quest: F,
                                playerState: ee,
                                animSpring: eX,
                                visible: eZ,
                                seekForwardEnabled: e3,
                                hideCaptionButton: null == e7,
                                handlePlayPauseBtnClick: ez,
                                handleTranscriptBtnClick: () => {
                                    !V && (null == eL || eL.questId !== F.id || eL.fetchStatus === E.iF.NONE || eL.fetchStatus === E.iF.FAILURE) && (0, x.lL)(F), H(!V);
                                },
                                handleCaptionBtnClick: () => {
                                    q(!z);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !Y,
                                        n = (0, C.fn)(null === (e = eB.current) || void 0 === e ? void 0 : e.parentNode, eB.current);
                                    t && null != n
                                        ? ((0, C.Dj)(n),
                                          n.addEventListener(C.NO, eG),
                                          (0, g.dA)({
                                              questId: F.id,
                                              event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                          }))
                                        : !t && null != n && (n.removeEventListener(C.NO, eG), (0, C.Pr)(n)),
                                        W(t);
                                },
                                handleSeekBackBtnClick: () => {
                                    if (null != eB.current) eH(Math.max(eB.current.currentTime - 10, 0));
                                },
                                handleSeekForwardBtnClick: () => {
                                    if (null != eB.current && !!e3) eH(Math.min(eB.current.currentTime + 10, eU));
                                },
                                handleControlBarPendingInteraction: e_
                            })
                        })
                    ]
                })
            ]
        })
    });
}
