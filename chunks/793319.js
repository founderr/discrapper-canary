n.d(t, {
    NZ: function () {
        return ej;
    },
    r: function () {
        return eT;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    d = n.n(c),
    u = n(100621),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    f = n(481060),
    g = n(846027),
    C = n(287734),
    x = n(872810),
    v = n(410575),
    _ = n(40851),
    I = n(317381),
    E = n(596040),
    b = n(100527),
    N = n(906732),
    Z = n(358221),
    S = n(887012),
    T = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(335131),
    P = n(120619),
    M = n(578976),
    R = n(868554),
    L = n(243778),
    k = n(258609),
    O = n(446226),
    D = n(569545),
    w = n(74299),
    B = n(803647),
    U = n(554747),
    H = n(95764),
    G = n(459502),
    F = n(386542),
    V = n(140465),
    z = n(746599),
    W = n(455961),
    K = n(611845),
    Y = n(800966),
    q = n(618158),
    X = n(390322),
    J = n(791592),
    Q = n(136995),
    $ = n(402113),
    ee = n(197016),
    et = n(386000),
    en = n(698877),
    ei = n(25827),
    el = n(199902),
    er = n(523746),
    ea = n(131951),
    es = n(944486),
    eo = n(594174),
    ec = n(626135),
    ed = n(700785),
    eu = n(923973),
    eh = n(829750),
    ep = n(189771),
    em = n(294629),
    ef = n(304745),
    eg = n(985370),
    eC = n(544384),
    ex = n(560688),
    ev = n(127608),
    e_ = n(76021),
    eI = n(173507),
    eE = n(981631),
    eb = n(354459),
    eN = n(921944),
    eZ = n(37113),
    eS = n(892216);
function eT(e, t) {
    if (ea.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, eI.Z)(n, t) : n();
}
function ej(e) {
    let { channel: t, currentUser: i, exitFullScreen: l, canGoLive: s, hasPermission: o, disabled: c } = e,
        d = t.hdStreamingBuyerId === i.id && null != t.hdStreamingUntil && new Date(t.hdStreamingUntil) < new Date() ? [m.z.HD_STREAMING_POTION_MODAL_UPSELL] : [],
        [u, C] = (0, L.US)(d);
    a.useEffect(() => {
        if (u === m.z.HD_STREAMING_POTION_MODAL_UPSELL) {
            var e;
            (e = C),
                (0, f.openModalLazy)(async () => {
                    let { default: i } = await n.e('88452').then(n.bind(n, 552394));
                    return (n) =>
                        (0, r.jsx)(i, {
                            markAsDismissed: e,
                            channel: t,
                            ...n
                        });
                });
        }
    }, [u, C, t]);
    let x = (0, p.e7)([ea.Z], () => ea.Z.getGoLiveSource()),
        v = (0, p.e7)([el.Z], () => el.Z.getCurrentUserActiveStream()),
        [I, E] = a.useState(!1),
        b = (0, p.e7)([P.Z], () => P.Z.getPlayedAnimation());
    a.useEffect(() => {
        b && (E(!0), (0, y.LE)());
    }, [b]);
    let N = t.hdStreamingUntil;
    a.useEffect(() => {
        if (null != N && new Date(N) > new Date() && null != v && v.channelId === t.id) {
            var e;
            (0, y.x8)(null === (e = ea.Z.getState().goLiveSource) || void 0 === e ? void 0 : e.quality);
            let t = (0, M.s)(eZ.LY.RESOLUTION_1440, eZ.ws.FPS_60, x);
            g.Z.setGoLiveSource(t), (0, y.LE)();
        }
    }, [N]);
    let Z = (0, _.bp)(),
        S = (0, p.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        T = S.find((e) => e.ownerId === i.id),
        { activated: j, hqStreamingState: A } = (0, F.k)(h.q.STREAM_HIGH_QUALITY),
        k = null != T && j,
        O = a.useRef(null),
        D = t.getGuildId(),
        w = a.useCallback(() => {
            if ((null == l || l(), !s)) return (0, ev.Z)();
            (0, e_.Z)(D, t.id, eE.ZY5.GUILD_CHANNEL);
        }, [D, t.id, s, l]),
        U = (0, V.x8)('GoLiveButton'),
        H = () => {
            if (s) {
                w();
                return;
            }
            (0, ev.Z)();
        },
        G = () => {
            (0, B.Z)(T);
        },
        J = z.pM,
        Q = a.useCallback(() => {
            ec.default.track(eE.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, z.qA)();
        }, [t.guild_id, t.id]),
        $ = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != T;
            return (0, r.jsx)(en.O, {
                ...i,
                centerButton: !0,
                disabled: c || !o,
                className: eS.controlButton,
                hasPermission: o,
                streamActive: null != T,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          A.hqStreamingIsEnabled && !A.hqStreamingPopoutDismissed && J(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: k && A.hqStreamingIsEnabled,
                buttonRef: O,
                onClick: null != T ? G : H
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            I
                ? (0, r.jsx)(R.Z, {
                      channel: t,
                      buttonRef: O,
                      userId: t.hdStreamingBuyerId,
                      streaming: null != T,
                      onClose: () => {
                          E(!1);
                      }
                  })
                : U && 0 === S.length
                  ? (0, r.jsx)(L.ZP, {
                        contentTypes: [m.z.TRIAL_FOR_ALL_STREAM_POPOUT],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === m.z.TRIAL_FOR_ALL_STREAM_POPOUT)
                                return (0, r.jsx)(Y.h, {
                                    buttonRef: O,
                                    dismissed: !1,
                                    onDismiss: () => n(eN.L.USER_DISMISS)
                                });
                        }
                    })
                  : k && A.hqStreamingIsEnabled
                    ? (0, r.jsx)(K.$, {
                          buttonRef: O,
                          dismissed: A.hqStreamingPopoutDismissed,
                          onDismiss: J
                      })
                    : (0, r.jsx)(W.b, {
                          channel: t,
                          buttonRef: O,
                          dismissed: A.hqStreamingOptInPopoutDismissed,
                          onDismiss: Q
                      }),
            (0, r.jsx)(q.Z, {
                children: (0, r.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(X.Z, {
                            children: (0, r.jsx)(eC.Z, {
                                channel: t,
                                currentUser: i,
                                activeStreams: null != T ? [T] : [],
                                handleGoLive: w,
                                onClose: n,
                                appContext: Z
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: f.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: $(n, i) });
                    }
                })
            })
        ]
    });
}
function eA(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, E.Z)(i, t.id)
        ? (0, r.jsx)('div', {
              className: eS.buttonContainer,
              children: (0, r.jsx)(ef.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let ey = a.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        s = (0, p.e7)([Z.Z], () => Z.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = a.useContext(f.AccessibilityPreferencesContext),
        [c, d] = a.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([el.Z], () => (null != h ? el.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === eb.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        v = (0, p.Wu)([el.Z], () =>
            el.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        _ = (0, U.qY)(l.id),
        I = a.useCallback(() => {
            if ((null == s ? void 0 : s.type) === eb.fO.ACTIVITY && s.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != _) return 'EVENT';
            return 'CALL';
        }, [s, t, g, _]),
        [E, b] = a.useState(I()),
        N = (0, f.useSpring)(
            {
                opacity: c ? 0.2 : 1,
                transform: c && !o.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: c ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: c
                },
                onRest: () => {
                    b(I()), d(!1);
                }
            },
            'animate-always'
        );
    a.useEffect(() => {
        I() !== E && d(!0);
    }, [E, I]);
    let S = a.useCallback(() => {
            if (null != m) (0, x.g)((0, D.V9)(m));
            else for (let e of v) (0, x.g)((0, D.V9)(e));
        }, [v, m]),
        T = (e, t) => {
            let a = {
                centerButton: !0,
                className: eS.controlButton,
                popoutOpen: e
            };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == n) return;
                    return (0, r.jsx)($.Z, {
                        ...a,
                        applicationId: s.id,
                        color: 'red',
                        channelId: l.id,
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, r.jsx)(en.O, {
                        ...a,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: S,
                        onPopoutClick: v.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, r.jsx)(ee.Z, {
                        ...a,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, r.jsx)(H.Z, {
                        channelId: l.id,
                        onClick: () => {
                            C.default.disconnect(), null == i || i();
                        }
                    });
            }
        };
    return (0, r.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eC.Z, {
                channel: l,
                currentUser: n,
                activeStreams: v,
                handleGoLive: eE.VqG,
                hideSelfOptions: !0,
                onClose: t
            });
        },
        position: 'top',
        align: 'center',
        animation: f.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(u.animated.div, {
                style: N,
                children: T(i, n)
            });
        }
    });
});
function eP(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, _.bp)(),
        { reachedLimit: c, limit: d } = (0, eh.Z)(t),
        u = a.useCallback(() => {
            (0, eI.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = a.useCallback(() => {
            n ? (0, ex.Z)() : u();
        }, [n, u]),
        m = (0, p.e7)([er.Z], () => {
            let e = er.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: c,
                channelLimit: d,
                channel: t,
                cameraUnavailable: n,
                hasPermission: i,
                onCameraUnavailable: h,
                className: eS.controlButton,
                iconClassName: eS.__invalid_joinIcon,
                onChange: u
            }),
            (0, r.jsx)(Q.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eS.controlButton, eS.__invalid_lastButton)
            }),
            m
                ? (0, r.jsx)(J.Z, {
                      color: 'red',
                      channel: t,
                      className: eS.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: l, exitFullScreen: a, idleProps: s } = e,
        c = (0, p.e7)([eo.default], () => {
            let e = eo.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: u, enabled: h } = (0, eu.Z)(),
        m = (0, ep.Z)(n),
        { suppress: g, selfMute: C, mute: x } = (0, em.Z)(n),
        { canGoLive: _ } = (0, p.cj)([ea.Z], () => ({ canGoLive: (0, w.Z)(ea.Z) })),
        E = (0, O.Z)(),
        Z = (0, p.e7)([k.Z], () => null != k.Z.getAwaitingRemoteSessionInfo()),
        y = null != E,
        P = (0, p.e7)([es.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : es.Z.getVoiceChannelId()) === n.id;
        }),
        M = (0, S.Z)(n, !0),
        R = (0, p.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: L, limit: D } = (0, eh.Z)(n),
        { analyticsLocations: B } = (0, N.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, r.jsx)(N.Gt, {
            value: B,
            children: (0, r.jsx)(eP, {
                channel: n,
                cameraUnavailable: u,
                hasCameraPermission: m,
                currentUser: c
            })
        });
    let U =
        ed.BT({
            permission: eE.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !M;
    return (0, r.jsx)(N.Gt, {
        value: B,
        children: (0, r.jsxs)(v.Z, {
            section: eE.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, r.jsx)('div', {
                    className: eS.eventPromptsContainer,
                    children: (0, r.jsx)(G.Z, { channelId: n.id })
                }),
                (0, r.jsxs)('div', {
                    className: o()(eS.wrapper, i),
                    children: [
                        !y &&
                            (0, r.jsx)(f.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(X.Z, { children: (0, r.jsx)(j.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: f.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, r.jsx)(ei.C, {
                                        centerButton: !0,
                                        hasPermission: m,
                                        className: eS.controlButton,
                                        enabled: h,
                                        cameraUnavailable: u,
                                        onChange: eT,
                                        onCameraUnavailable: ex.Z,
                                        channelLimitReached: L,
                                        channelLimit: D,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !y &&
                            (0, r.jsx)(eA, {
                                channel: n,
                                idle: null === (t = null == s ? void 0 : s.idle) || void 0 === t || t
                            }),
                        !y &&
                            (0, r.jsx)(ej, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: a,
                                canGoLive: _,
                                hasPermission: m
                            }),
                        (0, r.jsx)(f.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(X.Z, {
                                    children: (0, r.jsx)(T.default, {
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderOutputDevices: !0,
                                        renderInputModes: !0
                                    })
                                });
                            },
                            align: 'center',
                            position: 'top',
                            animation: f.Popout.Animation.FADE,
                            children: (e, t) => {
                                let { onClick: n } = e,
                                    { isShown: i } = t;
                                return (0, r.jsx)(et.Z, {
                                    centerButton: !0,
                                    onPopoutClick: y ? null : n,
                                    className: eS.controlButton,
                                    selfMute: C,
                                    serverMute: x,
                                    suppress: g,
                                    popoutOpen: i,
                                    awaitingRemote: Z,
                                    onClick: () => (0, A.Z)(x, g, eE.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        U && !y
                            ? (0, r.jsx)('div', {
                                  className: eS.buttonContainer,
                                  children: (0, r.jsx)(eg.Z, { channel: n })
                              })
                            : null,
                        (0, r.jsx)(ey, {
                            connectedActivityApplicationId: R,
                            currentUser: c,
                            channel: n,
                            onDisconnectCall: l
                        })
                    ]
                })
            ]
        })
    });
};
