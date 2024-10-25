n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120),
    n(653041);
var r,
    o,
    a = n(200651),
    s = n(192379),
    i = n(120356),
    l = n.n(i),
    c = n(100621),
    u = n(442837),
    d = n(692547),
    m = n(780384),
    p = n(481060),
    f = n(607070),
    C = n(70097),
    _ = n(210887),
    E = n(866960),
    v = n(228488),
    S = n(617136),
    T = n(272008),
    g = n(497505),
    x = n(918701),
    N = n(184299),
    h = n(720293),
    I = n(341907),
    L = n(881773),
    O = n(355243),
    j = n(106743),
    b = n(528846),
    B = n(604162),
    P = n(747717),
    k = n(281055),
    y = n(46140),
    R = n(981631),
    D = n(217702),
    A = n(689938),
    M = n(417575);
((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = 'USER_INTERACTION'), (o[(o.LOST_FOCUS = 1)] = 'LOST_FOCUS');
let Z = new Set([R.IyS.FIVE_G, R.IyS.FOUR_G, R.IyS.UNKNOWN]),
    U = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function G() {
    let e = (0, u.e7)([_.Z], () => _.Z.getState().theme);
    return (0, a.jsx)('div', {
        className: M.pauseText,
        style: { background: (0, m.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, a.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: A.Z.Messages.QUESTS_VIDEO_QUEST_PAUSE_MESSAGE
        })
    });
}
function V(e) {
    let { quest: t, className: n } = e,
        r = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == r
        ? null
        : (0, a.jsx)('img', {
              src: r.url,
              alt: 'Video thumbnail',
              className: l()(M.stillFrameImageCard, n)
          });
}
function F(e) {
    let { title: t, subtitle: n, icon: r, onClick: o, className: i } = e,
        c = (0, u.e7)([_.Z], () => _.Z.getState().theme),
        [f, C] = s.useState(!1),
        E = () => {
            C(!0);
        },
        v = () => {
            C(!1);
        };
    return (0, a.jsx)(p.Clickable, {
        className: l()(M.endScreenPanel, i),
        onMouseEnter: E,
        onMouseLeave: v,
        onFocus: E,
        onBlur: v,
        onClick: o,
        style: { background: (0, m.wj)(c) ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.55)' },
        children: (0, a.jsxs)('div', {
            className: M.endScreenPanelInner,
            children: [
                (0, a.jsxs)('div', {
                    className: M.endScreenPanelTextCont,
                    children: [
                        (0, a.jsx)(p.Heading, {
                            variant: 'heading-md/semibold',
                            children: t
                        }),
                        (0, a.jsx)(p.Heading, {
                            variant: 'heading-sm/normal',
                            color: 'text-normal',
                            children: n
                        })
                    ]
                }),
                (0, a.jsx)(P.Z, {}),
                (0, a.jsx)(r, {
                    size: 'md',
                    color: f ? d.Z.colors.INTERACTIVE_ACTIVE : d.Z.colors.INTERACTIVE_NORMAL,
                    className: M.endScreenIcon
                })
            ]
        })
    });
}
function w(e) {
    var t, n, r, o, i, d, m;
    let { quest: _, onOptimisticProgressUpdate: P, onClose: R, autoplay: w, parentTransitionState: H } = e,
        Q = (0, N.km)((e) => e.transcriptEnabled),
        z = (0, N.km)((e) => e.setTranscriptEnabled),
        W = (0, N.km)((e) => e.captionEnabled),
        Y = (0, N.km)((e) => e.setCaptionEnabled),
        q = (0, N.km)((e) => e.fullScreenEnabled),
        K = (0, N.km)((e) => e.setFullScreenEnabled),
        { focused: X, focusedChanged: J } = (0, k.xU)(),
        { visible: $, visibleChanged: ee, targetRef: et } = (0, k.Yy)(),
        [en, er] = s.useState(!0 === w ? b.r.PLAYING : b.r.PAUSED),
        [eo, ea] = s.useState(!1),
        es = (0, x.il)(_),
        [ei, el] = s.useState(es.percentComplete),
        [ec, eu] = s.useState(!1),
        [ed, em] = s.useState(!0),
        [ep, ef] = s.useState(!1),
        [eC, e_] = s.useState([]),
        [eE, ev] = s.useState(E.Z.getEffectiveConnectionSpeed()),
        [eS, eT] = s.useState(0),
        [eg, ex] = s.useState(0),
        [eN, eh] = s.useState(!1),
        [eI, eL] = s.useState(!1),
        eO = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[_.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        ej = (0, N.km)((e) => e.setVideoProgress),
        eb = (0, N.km)((e) => e.muted),
        eB = (0, N.km)((e) => e.volume),
        eP = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        ek = (0, s.useRef)(null),
        ey = s.useRef(!0),
        eR = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eD = (0, N.km)((e) => e.transcript),
        [eA, eM] = s.useState(null),
        [eZ, eU] = s.useState(null),
        eG = eR ? (null !== (i = null === (n = ek.current) || void 0 === n ? void 0 : n.duration) && void 0 !== i ? i : 0) : eO.maxTimestampSec;
    s.useLayoutEffect(() => {
        ey.current && ((ey.current = !1), ev(E.Z.getEffectiveConnectionSpeed()), eR && eO.timestampSec >= eO.duration && ej(_.id, 0, eO.duration));
    }, []),
        s.useEffect(() => {
            (H === p.ModalTransitionState.HIDDEN || H === p.ModalTransitionState.EXITING || H === p.ModalTransitionState.EXITED || (null != H && ee && !$ && !eR) || (J && !X && !eR)) && null != ek.current && en === b.r.PLAYING && (eQ(!1), eM(1));
        }, [H, X, J, $, ee, en, eR]);
    let eV = () => {
            ea(!0);
        },
        eF = () => {
            ea(!1);
        },
        ew = eo || en === b.r.PAUSED || en === b.r.ENDED,
        eH = s.useCallback(() => {
            var e;
            let t = (0, v.fn)(null === (e = ek.current) || void 0 === e ? void 0 : e.parentNode, ek.current);
            null != t && !(0, v.rB)(t) && (t.removeEventListener(v.NO, eH), K(!1));
        }, [K]);
    s.useEffect(() => {
        let e = ek.current;
        return () => {
            let t = (0, v.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(v.NO, eH);
        };
    }, [eH]);
    let eQ = (e) => {
            if (null != ek.current) e ? (ek.current.play(), eM(null)) : ek.current.pause(), er(e ? b.r.PLAYING : b.r.PAUSED);
        },
        ez = s.useCallback(
            (e) => {
                if (null != ek.current) eu(!0), (ek.current.currentTime = e), ej(_.id, e, ek.current.duration);
            },
            [ek, ej, _]
        ),
        eW = () => {
            if (null != ek.current)
                switch (en) {
                    case b.r.ENDED:
                        ez(0), eQ(!0);
                        break;
                    case b.r.PLAYING:
                        eQ(!1);
                        break;
                    default:
                        eQ(!0);
                }
        },
        eY = (e) => {
            eU(e);
        },
        eq = (e) => {
            eU((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eK = (e) => {
            if (null != ek.current && en === b.r.PLAYING) ed && em(!1), ep && ef(!1), eQ(!0);
        };
    s.useEffect(() => {
        if (!ec) return;
        let e = setTimeout(() => {
            eu(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ec]);
    let eX = s.useCallback(() => {
            if (null != ek.current) ez(Math.max(ek.current.currentTime - 10, 0));
        }, [ez]),
        eJ = s.useCallback(() => {
            if (null != ek.current) ez(Math.min(ek.current.currentTime + 10, ek.current.duration));
        }, [ez]),
        [{ controlBarAnimSpring: e$ }, e0] = (0, p.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: U,
            onStart: () => {
                eL(!1);
            },
            onRest: (e) => {
                1 === e.value && eL(!0);
            }
        })),
        e1 = (0, s.useRef)(null),
        [{ captionHeightSpring: e2 }, e9] = (0, p.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: U
        }));
    s.useEffect(() => {
        var e, t;
        return (
            e9({
                captionHeightSpring: W && null != eZ && null !== (t = null === (e = e1.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eP
            }),
            () => {
                e2.stop();
            }
        );
    }, [W, e9, eP, eZ, e2]),
        s.useEffect(
            () => (
                e0({
                    controlBarAnimSpring: ew || eN ? 1 : 0,
                    immediate: eP
                }),
                () => {
                    e$.stop();
                }
            ),
            [ew, e0, eP, eN, e$]
        );
    let e6 = (e) => {
            !eR && (0, T.FI)(_.id, e);
        },
        e4 = en === b.r.ENDED,
        e7 = s.useMemo(() => (Z.has(eE) ? (0, h.z)(h.i.VIDEO_PLAYER_VIDEO, _) : (0, h.z)(h.i.VIDEO_PLAYER_VIDEO_LOW_RES, _)), [eE, _]),
        e3 = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, _), [_]),
        e5 = s.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, _), [_]),
        e8 = eR || eO.maxTimestampSec >= (null !== (d = null === (r = ek.current) || void 0 === r ? void 0 : r.currentTime) && void 0 !== d ? d : 0) + 1;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)(p.Clickable, {
            className: M.videoCont,
            'data-fullscreen': q,
            tabIndex: -1,
            onMouseEnter: eV,
            onMouseLeave: eF,
            onFocus: eV,
            onBlur: eF,
            children: [
                (0, a.jsx)(V, {
                    quest: _,
                    className: l()({ [M.stillFrameImageCardHidden]: !e4 })
                }),
                e4 && (0, a.jsx)('div', { className: M.videoContOverlay }),
                (0, a.jsxs)(C.Z, {
                    ref: (e) => {
                        (ek.current = e), (et.current = e);
                    },
                    autoPlay: w,
                    playsInline: !0,
                    mediaLayoutType: q ? D.hV.STATIC : D.hV.RESPONSIVE,
                    className: l()({
                        [M.hidden]: e4,
                        [M.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == e3 ? void 0 : e3.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null != ek.current) ek.current.currentTime >= eS && (eT(ek.current.currentTime + 10 + 5 * Math.random()), e6(ek.current.currentTime)), ek.current.currentTime >= eg && (ex(ek.current.currentTime + 1), (0, T.qm)(_.id, es.taskType, ek.current.currentTime), P(ek.current.currentTime)), ej(_.id, ek.current.currentTime, ek.current.duration), el((ek.current.currentTime / ek.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != ek.current && (e6(ek.current.duration + 1), ej(_.id, ek.current.duration, ek.current.duration)), er(b.r.ENDED);
                    },
                    onLoadedData: (e) => {
                        ed && em(!1);
                    },
                    onLoadedMetadata: (e) => {
                        if (null == ek.current) return;
                        if ((ez(eO.timestampSec), eb ? (ek.current.volume = 0) : (ek.current.volume = eB), 0 === ek.current.textTracks.length)) return;
                        let t = ek.current.textTracks[0];
                        if (((t.mode = 'hidden'), null != t.cues))
                            for (let e = 0; e < t.cues.length; e++) {
                                let n = t.cues[e];
                                (0, B.JC)(n) && ((n.id = 'cue-'.concat(e)), (n.onenter = () => eY(n)), (n.onexit = () => eq(n)));
                            }
                    },
                    onWaiting: (e) => {
                        ef(!0);
                    },
                    onProgress: (e) => {
                        if (null == ek.current) return;
                        let t = [];
                        for (let e = 0; e < ek.current.buffered.length; e++) {
                            let n = ek.current.buffered.start(e),
                                r = ek.current.buffered.end(e);
                            if (!(r - n < 1))
                                t.push({
                                    start: n / ek.current.duration,
                                    size: (r - n) / ek.current.duration
                                });
                        }
                        e_(t);
                    },
                    onCanPlay: eK,
                    onCanPlayThrough: eK,
                    onClick: () => {
                        eW();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != e5 &&
                            (0, a.jsx)('track', {
                                src: e5.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != e7 &&
                            (0, a.jsx)('source', {
                                src: e7.url,
                                type: e7.mimetype
                            })
                    ]
                }),
                (ed || ep) &&
                    (0, a.jsx)(p.Spinner, {
                        type: p.Spinner.Type.WANDERING_CUBES,
                        className: M.loadingSpinner
                    }),
                en === b.r.PAUSED && 1 === eA && (0, a.jsx)(G, {}),
                Q &&
                    en !== b.r.ENDED &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(p.Clickable, {
                                onClick: () => z(!1),
                                children: (0, a.jsx)('div', { className: M.transcriptOverlay })
                            }),
                            (0, a.jsx)(c.animated.div, {
                                className: M.transcriptCont,
                                style: {
                                    marginBottom: (0, c.to)([e$, e2], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, a.jsx)(j.K, {
                                    quest: _,
                                    onClose: () => {
                                        z(!1);
                                    }
                                })
                            })
                        ]
                    }),
                en === b.r.ENDED &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(F, {
                                title: A.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_TITLE,
                                subtitle: A.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_SUBTITLE,
                                icon: p.LinkExternalMediumIcon,
                                className: M.endScreenPanelLeft,
                                onClick: () => {
                                    (0, x.FE)(_, {
                                        content: g.jn.QUEST_BAR_V2,
                                        ctaContent: S.jZ.LEARN_MORE
                                    });
                                }
                            }),
                            (0, a.jsx)(F, {
                                title: A.Z.Messages.QUESTS_VIDEO_END_PANEL_REWARD_TITLE,
                                subtitle: A.Z.Messages.QUESTS_VIDEO_END_PANEL_REWARD_SUBTITLE,
                                onClick: () => {
                                    (0, S._3)({
                                        questId: _.id,
                                        questContent: g.jn.QUEST_BAR_V2,
                                        questContentCTA: S.jZ.LEARN_MORE
                                    }),
                                        R(),
                                        (0, I.navigateToQuestHome)(y.dr.QUESTS_BAR, g.jn.QUEST_BAR_V2);
                                },
                                icon: p.ArrowLargeRightIcon,
                                className: M.endScreenPanelRight
                            })
                        ]
                    }),
                (0, a.jsx)(c.animated.div, {
                    className: M.videoFooterContGradient,
                    style: {
                        opacity: (0, c.to)(
                            [
                                e$.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(e)
                        )
                    }
                }),
                (0, a.jsx)(
                    'div',
                    {
                        className: l()(M.playPausePopCont, {
                            [M.play]: en === b.r.PLAYING,
                            [M.pause]: en === b.r.PAUSED
                        }),
                        children: en === b.r.PLAYING ? (0, a.jsx)(p.PlayIcon, { className: M.playPausePopIcon }) : (0, a.jsx)(p.PauseIcon, { className: M.playPausePopIcon })
                    },
                    en
                ),
                W &&
                    null != eZ &&
                    (0, a.jsx)(c.animated.div, {
                        className: M.captionContainer,
                        ref: e1,
                        style: {
                            translateY: (0, c.to)(
                                [
                                    e$.to({
                                        range: [0, 1],
                                        output: [0, -50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: (0, a.jsx)(p.Text, {
                            variant: 'text-lg/semibold',
                            color: 'always-white',
                            className: M.captionText,
                            children: eZ.text
                        })
                    }),
                (0, a.jsxs)(c.animated.div, {
                    className: M.videoFooterCont,
                    style: {
                        paddingLeft: (0, c.to)(
                            [
                                e$.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, c.to)(
                            [
                                e$.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, c.to)(
                            [
                                e$.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, a.jsx)(O.Z, {
                            percent: ei,
                            animate: !0 !== ey.current && !ec,
                            interactionEnabled: eR && eI,
                            backgroundColor: ew ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: ew ? eC : void 0,
                            duration: null !== (m = null === (o = ek.current) || void 0 === o ? void 0 : o.duration) && void 0 !== m ? m : 1,
                            maxSeekableTime: ew && eI ? eG : void 0,
                            onClick: (e) => {
                                ez(e), en === b.r.ENDED && eQ(!0);
                            },
                            onScrubBack: eX,
                            onScrubForward: eJ
                        }),
                        (0, a.jsx)(c.animated.div, {
                            className: M.videoControlsCont,
                            style: {
                                paddingTop: (0, c.to)(
                                    [
                                        e$.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, c.to)(
                                    [
                                        e$.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, c.to)(
                                    [
                                        e$.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, a.jsx)(L.Z, {
                                videoRef: ek,
                                playerState: en,
                                animSpring: e$,
                                visible: ew,
                                seekForwardEnabled: e8,
                                hideCaptionButton: null == e5,
                                handlePlayPauseBtnClick: eW,
                                handleTranscriptBtnClick: () => {
                                    !Q && (null == eD || eD.questId !== _.id || eD.fetchStatus === N.iF.NONE || eD.fetchStatus === N.iF.FAILURE) && (0, T.lL)(_), z(!Q);
                                },
                                handleCaptionBtnClick: () => {
                                    Y(!W);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !q,
                                        n = (0, v.fn)(null === (e = ek.current) || void 0 === e ? void 0 : e.parentNode, ek.current);
                                    t && null != n ? ((0, v.Dj)(n), n.addEventListener(v.NO, eH)) : !t && null != n && (n.removeEventListener(v.NO, eH), (0, v.Pr)(n)), K(t);
                                },
                                handleSeekBackBtnClick: () => {
                                    if (null != ek.current) ez(Math.max(ek.current.currentTime - 10, 0));
                                },
                                handleSeekForwardBtnClick: () => {
                                    if (null != ek.current && !!e8) ez(Math.min(ek.current.currentTime + 10, eG));
                                },
                                handleControlBarPendingInteraction: eh
                            })
                        })
                    ]
                })
            ]
        })
    });
}
