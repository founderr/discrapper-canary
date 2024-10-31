n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120),
    n(653041);
var r,
    o,
    a = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    c = n(100621),
    u = n(442837),
    d = n(692547),
    m = n(780384),
    p = n(481060),
    f = n(607070),
    C = n(70097),
    _ = n(210887),
    v = n(866960),
    E = n(228488),
    S = n(617136),
    T = n(272008),
    g = n(497505),
    x = n(918701),
    N = n(184299),
    h = n(720293),
    I = n(881773),
    O = n(355243),
    b = n(106743),
    j = n(528846),
    L = n(604162),
    B = n(747717),
    k = n(281055),
    y = n(981631),
    P = n(217702),
    R = n(689938),
    D = n(417575);
((o = r || (r = {}))[(o.USER_INTERACTION = 0)] = 'USER_INTERACTION'), (o[(o.LOST_FOCUS = 1)] = 'LOST_FOCUS');
let M = new Set([y.IyS.FIVE_G, y.IyS.FOUR_G, y.IyS.UNKNOWN]),
    A = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function Z() {
    let e = (0, u.e7)([_.Z], () => _.Z.getState().theme);
    return (0, a.jsx)('div', {
        className: D.pauseText,
        style: { background: (0, m.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, a.jsx)(p.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: R.Z.Messages.QUESTS_VIDEO_QUEST_PAUSE_MESSAGE
        })
    });
}
function U(e) {
    let { quest: t, className: n } = e,
        r = i.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == r
        ? null
        : (0, a.jsx)('img', {
              src: r.url,
              alt: 'Video thumbnail',
              className: l()(D.stillFrameImageCard, n)
          });
}
function G(e) {
    let { title: t, subtitle: n, icon: r, onClick: o, className: s } = e,
        c = (0, u.e7)([_.Z], () => _.Z.getState().theme),
        [f, C] = i.useState(!1),
        v = () => {
            C(!0);
        },
        E = () => {
            C(!1);
        };
    return (0, a.jsx)(p.Clickable, {
        className: l()(D.endScreenPanel, D.accentOnHover, s),
        onMouseEnter: v,
        onMouseLeave: E,
        onFocus: v,
        onBlur: E,
        onClick: o,
        style: { background: (0, m.wj)(c) ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.55)' },
        children: (0, a.jsxs)('div', {
            className: D.endScreenPanelInner,
            children: [
                (0, a.jsxs)('div', {
                    className: D.endScreenPanelTextCont,
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
                (0, a.jsx)(B.Z, {}),
                (0, a.jsx)(r, {
                    size: 'md',
                    color: f ? d.Z.colors.INTERACTIVE_ACTIVE : d.Z.colors.INTERACTIVE_NORMAL,
                    className: D.endScreenIcon
                })
            ]
        })
    });
}
function V(e) {
    var t, n, r, o, s, d, m;
    let { quest: _, onOptimisticProgressUpdate: B, autoplay: y, parentTransitionState: V } = e,
        F = (0, N.km)((e) => e.transcriptEnabled),
        w = (0, N.km)((e) => e.setTranscriptEnabled),
        H = (0, N.km)((e) => e.captionEnabled),
        Q = (0, N.km)((e) => e.setCaptionEnabled),
        z = (0, N.km)((e) => e.fullScreenEnabled),
        Y = (0, N.km)((e) => e.setFullScreenEnabled),
        { focused: W, focusedChanged: q } = (0, k.xU)(),
        { visible: K, visibleChanged: X, targetRef: J } = (0, k.Yy)(),
        [$, ee] = i.useState(!0 === y ? j.r.PLAYING : j.r.PAUSED),
        [et, en] = i.useState(!1),
        er = (0, x.il)(_),
        [eo, ea] = i.useState(er.percentComplete),
        [ei, es] = i.useState(!1),
        [el, ec] = i.useState(!0),
        [eu, ed] = i.useState(!1),
        [em, ep] = i.useState([]),
        [ef, eC] = i.useState(v.Z.getEffectiveConnectionSpeed()),
        [e_, ev] = i.useState(0),
        [eE, eS] = i.useState(0),
        [eT, eg] = i.useState(!1),
        [ex, eN] = i.useState(!1),
        eh = (0, N.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[_.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eI = (0, N.km)((e) => e.setVideoProgress),
        eO = (0, N.km)((e) => e.muted),
        eb = (0, N.km)((e) => e.volume),
        ej = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        eL = (0, i.useRef)(null),
        eB = i.useRef(!0),
        ek = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        ey = (0, N.km)((e) => e.transcript),
        [eP, eR] = i.useState(null),
        [eD, eM] = i.useState(null),
        eA = ek ? (null !== (s = null === (n = eL.current) || void 0 === n ? void 0 : n.duration) && void 0 !== s ? s : 0) : eh.maxTimestampSec;
    i.useLayoutEffect(() => {
        eB.current && ((eB.current = !1), eC(v.Z.getEffectiveConnectionSpeed()), ek && eh.timestampSec >= eh.duration && eI(_.id, 0, eh.duration));
    }, []),
        i.useEffect(() => {
            (V === p.ModalTransitionState.HIDDEN || V === p.ModalTransitionState.EXITING || V === p.ModalTransitionState.EXITED || (null != V && X && !K && !ek) || (q && !W && !ek)) && null != eL.current && $ === j.r.PLAYING && (eF(!1), eR(1));
        }, [V, W, q, K, X, $, ek]);
    let eZ = () => {
            en(!0);
        },
        eU = () => {
            en(!1);
        },
        eG = et || $ === j.r.PAUSED || $ === j.r.ENDED,
        eV = i.useCallback(() => {
            var e;
            let t = (0, E.fn)(null === (e = eL.current) || void 0 === e ? void 0 : e.parentNode, eL.current);
            null != t && !(0, E.rB)(t) && (t.removeEventListener(E.NO, eV), Y(!1));
        }, [Y]);
    i.useEffect(() => {
        let e = eL.current;
        return () => {
            let t = (0, E.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(E.NO, eV);
        };
    }, [eV]);
    let eF = (e) => {
            if (null != eL.current) e ? (eL.current.play(), eR(null)) : eL.current.pause(), ee(e ? j.r.PLAYING : j.r.PAUSED);
        },
        ew = i.useCallback(
            (e) => {
                if (null != eL.current) es(!0), (eL.current.currentTime = e), eI(_.id, e, eL.current.duration);
            },
            [eL, eI, _]
        ),
        eH = () => {
            if (null != eL.current)
                switch ($) {
                    case j.r.ENDED:
                        ew(0), eF(!0);
                        break;
                    case j.r.PLAYING:
                        eF(!1);
                        break;
                    default:
                        eF(!0);
                }
        },
        eQ = (e) => {
            eM(e);
        },
        ez = (e) => {
            eM((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eY = (e) => {
            if (null != eL.current && $ === j.r.PLAYING) el && ec(!1), eu && ed(!1), eF(!0);
        };
    i.useEffect(() => {
        if (!ei) return;
        let e = setTimeout(() => {
            es(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ei]);
    let eW = i.useCallback(() => {
            if (null != eL.current) ew(Math.max(eL.current.currentTime - 10, 0));
        }, [ew]),
        eq = i.useCallback(() => {
            if (null != eL.current) ew(Math.min(eL.current.currentTime + 10, eL.current.duration));
        }, [ew]),
        [{ controlBarAnimSpring: eK }, eX] = (0, p.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: A,
            onStart: () => {
                eN(!1);
            },
            onRest: (e) => {
                1 === e.value && eN(!0);
            }
        })),
        eJ = (0, i.useRef)(null),
        [{ captionHeightSpring: e$ }, e0] = (0, p.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: A
        }));
    i.useEffect(() => {
        var e, t;
        return (
            e0({
                captionHeightSpring: H && null != eD && null !== (t = null === (e = eJ.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: ej
            }),
            () => {
                e$.stop();
            }
        );
    }, [H, e0, ej, eD, e$]),
        i.useEffect(
            () => (
                eX({
                    controlBarAnimSpring: eG || eT ? 1 : 0,
                    immediate: ej
                }),
                () => {
                    eK.stop();
                }
            ),
            [eG, eX, ej, eT, eK]
        );
    let e1 = (e) => {
            !ek && (0, T.FI)(_.id, e);
        },
        e2 = $ === j.r.ENDED,
        e9 = i.useMemo(() => (M.has(ef) ? (0, h.z)(h.i.VIDEO_PLAYER_VIDEO, _) : (0, h.z)(h.i.VIDEO_PLAYER_VIDEO_LOW_RES, _)), [ef, _]),
        e6 = i.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_THUMBNAIL, _), [_]),
        e4 = i.useMemo(() => (0, h.z)(h.i.VIDEO_PLAYER_CAPTION, _), [_]),
        e7 = ek || eh.maxTimestampSec >= (null !== (d = null === (r = eL.current) || void 0 === r ? void 0 : r.currentTime) && void 0 !== d ? d : 0) + 1;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)(p.Clickable, {
            className: D.videoCont,
            'data-fullscreen': z,
            tabIndex: -1,
            onMouseEnter: eZ,
            onMouseLeave: eU,
            onFocus: eZ,
            onBlur: eU,
            children: [
                (0, a.jsx)(U, {
                    quest: _,
                    className: l()({ [D.stillFrameImageCardHidden]: !e2 })
                }),
                e2 && (0, a.jsx)('div', { className: D.videoContOverlay }),
                (0, a.jsxs)(C.Z, {
                    ref: (e) => {
                        (eL.current = e), (J.current = e);
                    },
                    autoPlay: y,
                    playsInline: !0,
                    mediaLayoutType: z ? P.hV.STATIC : P.hV.RESPONSIVE,
                    className: l()({
                        [D.hidden]: e2,
                        [D.videoInner]: !0
                    }),
                    controls: !1,
                    poster: null == e6 ? void 0 : e6.url,
                    disablePictureInPicture: !0,
                    onTimeUpdate: (e) => {
                        if (null != eL.current) eL.current.currentTime >= e_ && (ev(eL.current.currentTime + 10 + 5 * Math.random()), e1(eL.current.currentTime)), eL.current.currentTime >= eE && (eS(eL.current.currentTime + 1), (0, T.qm)(_.id, er.taskType, eL.current.currentTime), B(eL.current.currentTime)), eI(_.id, eL.current.currentTime, eL.current.duration), ea((eL.current.currentTime / eL.current.duration) * 100);
                    },
                    onEnded: (e) => {
                        null != eL.current && (e1(eL.current.duration + 1), eI(_.id, eL.current.duration, eL.current.duration)), ee(j.r.ENDED);
                    },
                    onLoadedData: (e) => {
                        el && ec(!1);
                    },
                    onLoadedMetadata: (e) => {
                        if (null == eL.current) return;
                        if ((ew(eh.timestampSec), eO ? (eL.current.volume = 0) : (eL.current.volume = eb), 0 === eL.current.textTracks.length)) return;
                        let t = eL.current.textTracks[0];
                        if (((t.mode = 'hidden'), null != t.cues))
                            for (let e = 0; e < t.cues.length; e++) {
                                let n = t.cues[e];
                                (0, L.JC)(n) && ((n.id = 'cue-'.concat(e)), (n.onenter = () => eQ(n)), (n.onexit = () => ez(n)));
                            }
                    },
                    onWaiting: (e) => {
                        ed(!0);
                    },
                    onProgress: (e) => {
                        if (null == eL.current) return;
                        let t = [];
                        for (let e = 0; e < eL.current.buffered.length; e++) {
                            let n = eL.current.buffered.start(e),
                                r = eL.current.buffered.end(e);
                            if (!(r - n < 1))
                                t.push({
                                    start: n / eL.current.duration,
                                    size: (r - n) / eL.current.duration
                                });
                        }
                        ep(t);
                    },
                    onCanPlay: eY,
                    onCanPlayThrough: eY,
                    onClick: () => {
                        eH();
                    },
                    crossOrigin: 'anonymous',
                    children: [
                        null != e4 &&
                            (0, a.jsx)('track', {
                                src: e4.url,
                                label: 'English',
                                kind: 'captions',
                                srcLang: 'en',
                                default: !0
                            }),
                        null != e9 &&
                            (0, a.jsx)('source', {
                                src: e9.url,
                                type: e9.mimetype
                            })
                    ]
                }),
                (el || eu) &&
                    (0, a.jsx)(p.Spinner, {
                        type: p.Spinner.Type.WANDERING_CUBES,
                        className: D.loadingSpinner
                    }),
                $ === j.r.PAUSED && 1 === eP && (0, a.jsx)(Z, {}),
                F &&
                    $ !== j.r.ENDED &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(p.Clickable, {
                                onClick: () => w(!1),
                                children: (0, a.jsx)('div', { className: D.transcriptOverlay })
                            }),
                            (0, a.jsx)(c.animated.div, {
                                className: D.transcriptCont,
                                style: {
                                    marginBottom: (0, c.to)([eK, e$], (e, t) => ''.concat(50 * e + t, 'px'))
                                },
                                children: (0, a.jsx)(b.K, {
                                    quest: _,
                                    onClose: () => {
                                        w(!1);
                                    }
                                })
                            })
                        ]
                    }),
                $ === j.r.ENDED &&
                    (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(G, {
                            title: R.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_TITLE,
                            subtitle: R.Z.Messages.QUESTS_VIDEO_END_PANEL_LEARN_SUBTITLE,
                            icon: p.LinkExternalMediumIcon,
                            className: D.endScreenPanelRight,
                            onClick: () => {
                                (0, S._3)({
                                    questId: _.id,
                                    questContent: g.jn.QUEST_BAR_V2,
                                    questContentCTA: S.jZ.LEARN_MORE
                                }),
                                    (0, x.FE)(_, {
                                        content: g.jn.QUEST_BAR_V2,
                                        ctaContent: S.jZ.LEARN_MORE
                                    });
                            }
                        })
                    }),
                (0, a.jsx)(c.animated.div, {
                    className: D.videoFooterContGradient,
                    style: {
                        opacity: (0, c.to)(
                            [
                                eK.to({
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
                        className: l()(D.playPausePopCont, {
                            [D.play]: $ === j.r.PLAYING,
                            [D.pause]: $ === j.r.PAUSED
                        }),
                        children: $ === j.r.PLAYING ? (0, a.jsx)(p.PlayIcon, { className: D.playPausePopIcon }) : (0, a.jsx)(p.PauseIcon, { className: D.playPausePopIcon })
                    },
                    $
                ),
                H &&
                    null != eD &&
                    (0, a.jsx)(c.animated.div, {
                        className: D.captionContainer,
                        ref: eJ,
                        style: {
                            translateY: (0, c.to)(
                                [
                                    eK.to({
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
                            className: D.captionText,
                            children: eD.text
                        })
                    }),
                (0, a.jsxs)(c.animated.div, {
                    className: D.videoFooterCont,
                    style: {
                        paddingLeft: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        paddingRight: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 25]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        ),
                        height: (0, c.to)(
                            [
                                eK.to({
                                    range: [0, 1],
                                    output: [0, 50]
                                })
                            ],
                            (e) => ''.concat(e, 'px')
                        )
                    },
                    children: [
                        (0, a.jsx)(O.Z, {
                            percent: eo,
                            animate: !0 !== eB.current && !ei,
                            interactionEnabled: ek && ex,
                            backgroundColor: eG ? void 0 : 'rgba(0, 0, 0, 0.0)',
                            preloadedBuffers: eG ? em : void 0,
                            duration: null !== (m = null === (o = eL.current) || void 0 === o ? void 0 : o.duration) && void 0 !== m ? m : 1,
                            maxSeekableTime: eG && ex ? eA : void 0,
                            onClick: (e) => {
                                ew(e), $ === j.r.ENDED && eF(!0);
                            },
                            onScrubBack: eW,
                            onScrubForward: eq
                        }),
                        (0, a.jsx)(c.animated.div, {
                            className: D.videoControlsCont,
                            style: {
                                paddingTop: (0, c.to)(
                                    [
                                        eK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                paddingBottom: (0, c.to)(
                                    [
                                        eK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(e * e * 12, 'px')
                                ),
                                pointerEvents: (0, c.to)(
                                    [
                                        eK.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => (e < 0.3 ? 'none' : 'auto')
                                )
                            },
                            children: (0, a.jsx)(I.Z, {
                                videoRef: eL,
                                playerState: $,
                                animSpring: eK,
                                visible: eG,
                                seekForwardEnabled: e7,
                                hideCaptionButton: null == e4,
                                handlePlayPauseBtnClick: eH,
                                handleTranscriptBtnClick: () => {
                                    !F && (null == ey || ey.questId !== _.id || ey.fetchStatus === N.iF.NONE || ey.fetchStatus === N.iF.FAILURE) && (0, T.lL)(_), w(!F);
                                },
                                handleCaptionBtnClick: () => {
                                    Q(!H);
                                },
                                handleFullScreenBtnClick: () => {
                                    var e;
                                    let t = !z,
                                        n = (0, E.fn)(null === (e = eL.current) || void 0 === e ? void 0 : e.parentNode, eL.current);
                                    t && null != n ? ((0, E.Dj)(n), n.addEventListener(E.NO, eV)) : !t && null != n && (n.removeEventListener(E.NO, eV), (0, E.Pr)(n)), Y(t);
                                },
                                handleSeekBackBtnClick: () => {
                                    if (null != eL.current) ew(Math.max(eL.current.currentTime - 10, 0));
                                },
                                handleSeekForwardBtnClick: () => {
                                    if (null != eL.current && !!e7) ew(Math.min(eL.current.currentTime + 10, eA));
                                },
                                handleControlBarPendingInteraction: eg
                            })
                        })
                    ]
                })
            ]
        })
    });
}
