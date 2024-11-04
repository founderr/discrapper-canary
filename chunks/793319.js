n.d(t, {
    NZ: function () {
        return ej;
    },
    r: function () {
        return eN;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(512722),
    u = n.n(c),
    d = n(100621),
    h = n(848246),
    m = n(442837),
    p = n(704215),
    f = n(481060),
    g = n(846027),
    C = n(287734),
    x = n(872810),
    v = n(410575),
    _ = n(40851),
    I = n(317381),
    E = n(596040),
    b = n(100527),
    S = n(906732),
    Z = n(358221),
    T = n(887012),
    N = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(335131),
    P = n(120619),
    M = n(868554),
    R = n(243778),
    L = n(258609),
    k = n(446226),
    O = n(569545),
    w = n(74299),
    D = n(803647),
    U = n(554747),
    B = n(95764),
    H = n(459502),
    F = n(386542),
    G = n(746599),
    V = n(455961),
    z = n(611845),
    W = n(634750),
    Y = n(618158),
    K = n(390322),
    q = n(791592),
    X = n(136995),
    J = n(402113),
    Q = n(197016),
    $ = n(386000),
    ee = n(698877),
    et = n(25827),
    en = n(199902),
    ei = n(523746),
    el = n(131951),
    er = n(944486),
    es = n(594174),
    ea = n(78839),
    eo = n(626135),
    ec = n(700785),
    eu = n(923973),
    ed = n(829750),
    eh = n(189771),
    em = n(294629),
    ep = n(304745),
    ef = n(985370),
    eg = n(544384),
    eC = n(560688),
    ex = n(127608),
    ev = n(76021),
    e_ = n(173507),
    eI = n(981631),
    eE = n(354459),
    eb = n(921944),
    eS = n(37113),
    eZ = n(65154),
    eT = n(892216);
function eN(e, t) {
    if (el.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, e_.Z)(n, t) : n();
}
function ej(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: l, hasPermission: a, disabled: o } = e,
        c = (0, m.e7)([el.Z], () => el.Z.getGoLiveSource()),
        u = (0, m.e7)([en.Z], () => en.Z.getCurrentUserActiveStream()),
        [d, C] = s.useState(!1),
        x = (0, m.e7)([P.Z], () => P.Z.getPlayedAnimation());
    s.useEffect(() => {
        x && C(!0);
    }, [x]);
    let v = t.hdStreamingUntil;
    s.useEffect(() => {
        if (null != v && new Date(v) > new Date() && null != u && u.channelId === t.id) {
            let e = {
                qualityOptions: {
                    preset: eS.tI.PRESET_CUSTOM,
                    resolution: eS.LY.RESOLUTION_1440,
                    frameRate: eS.ws.FPS_60
                },
                context: eZ.Yn.STREAM
            };
            null != c &&
                (null != c.desktopSource &&
                    (e.desktopSettings = {
                        sourceId: c.desktopSource.id,
                        sound: !0
                    }),
                null != c.cameraSource &&
                    (e.cameraSettings = {
                        videoDeviceGuid: c.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: c.cameraSource.audioDeviceGuid
                    })),
                g.Z.setGoLiveSource(e),
                (0, y.LE)();
        }
    }, [v]);
    let I = (0, _.bp)(),
        E = (0, m.Wu)([en.Z], () => en.Z.getAllActiveStreams()),
        b = E.find((e) => e.ownerId === n.id),
        { activated: S, hqStreamingState: Z } = (0, F.k)(h.q.STREAM_HIGH_QUALITY),
        T = null != b && S,
        N = s.useRef(null),
        j = t.getGuildId(),
        A = s.useCallback(() => {
            if ((null == i || i(), !l)) return (0, ex.Z)();
            (0, ev.Z)(j, t.id, eI.ZY5.GUILD_CHANNEL);
        }, [j, t.id, l, i]),
        L = (0, m.e7)([ea.ZP], () => ea.ZP.inReverseTrial()),
        k = () => {
            if (l) {
                A();
                return;
            }
            (0, ex.Z)();
        },
        O = () => {
            (0, D.Z)(b);
        },
        w = G.pM,
        U = s.useCallback(() => {
            eo.default.track(eI.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, G.qA)();
        }, [t.guild_id, t.id]),
        B = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != b;
            return (0, r.jsx)(ee.O, {
                ...i,
                centerButton: !0,
                disabled: o || !a,
                className: eT.controlButton,
                hasPermission: a,
                streamActive: null != b,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          Z.hqStreamingIsEnabled && !Z.hqStreamingPopoutDismissed && w(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: T && Z.hqStreamingIsEnabled,
                buttonRef: N,
                onClick: null != b ? O : k
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d
                ? (0, r.jsx)(M.Z, {
                      buttonRef: N,
                      userId: t.hdStreamingBuyerId,
                      streaming: null != b,
                      onClose: () => {
                          C(!1);
                      }
                  })
                : L && 0 === E.length
                  ? (0, r.jsx)(R.ZP, {
                        contentTypes: [p.z.REVERSE_TRIAL_STREAM_POPOUT],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === p.z.REVERSE_TRIAL_STREAM_POPOUT)
                                return (0, r.jsx)(W.G, {
                                    buttonRef: N,
                                    dismissed: !1,
                                    onDismiss: () => n(eb.L.USER_DISMISS)
                                });
                        }
                    })
                  : T && Z.hqStreamingIsEnabled
                    ? (0, r.jsx)(z.$, {
                          buttonRef: N,
                          dismissed: Z.hqStreamingPopoutDismissed,
                          onDismiss: w
                      })
                    : (0, r.jsx)(V.b, {
                          channel: t,
                          buttonRef: N,
                          dismissed: Z.hqStreamingOptInPopoutDismissed,
                          onDismiss: U
                      }),
            (0, r.jsx)(Y.Z, {
                children: (0, r.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(K.Z, {
                            children: (0, r.jsx)(eg.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != b ? [b] : [],
                                handleGoLive: A,
                                onClose: i,
                                appContext: I
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: f.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: B(n, i) });
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
              className: eT.buttonContainer,
              children: (0, r.jsx)(ep.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let ey = s.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        a = (0, m.e7)([Z.Z], () => Z.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = s.useContext(f.AccessibilityPreferencesContext),
        [c, u] = s.useState(!1),
        h = null == a ? void 0 : a.id,
        p = (0, m.e7)([en.Z], () => (null != h ? en.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == a ? void 0 : a.type) === eE.fO.STREAM && null != p && p.ownerId !== (null == n ? void 0 : n.id),
        v = (0, m.Wu)([en.Z], () =>
            en.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        _ = (0, U.qY)(l.id),
        I = s.useCallback(() => {
            if ((null == a ? void 0 : a.type) === eE.fO.ACTIVITY && a.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != _) return 'EVENT';
            return 'CALL';
        }, [a, t, g, _]),
        [E, b] = s.useState(I()),
        S = (0, f.useSpring)(
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
                    b(I()), u(!1);
                }
            },
            'animate-always'
        );
    s.useEffect(() => {
        I() !== E && u(!0);
    }, [E, I]);
    let T = s.useCallback(() => {
            if (null != p) (0, x.g)((0, O.V9)(p));
            else for (let e of v) (0, x.g)((0, O.V9)(e));
        }, [v, p]),
        N = (e, t) => {
            let s = {
                centerButton: !0,
                className: eT.controlButton,
                popoutOpen: e
            };
            switch (E) {
                case 'ACTIVITY':
                    if (null == a || null == n) return;
                    return (0, r.jsx)(J.Z, {
                        ...s,
                        applicationId: a.id,
                        color: 'red',
                        channelId: l.id,
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, r.jsx)(ee.O, {
                        ...s,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: T,
                        onPopoutClick: v.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, r.jsx)(Q.Z, {
                        ...s,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, r.jsx)(B.Z, {
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
            return (0, r.jsx)(eg.Z, {
                channel: l,
                currentUser: n,
                activeStreams: v,
                handleGoLive: eI.VqG,
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
            return (0, r.jsx)(d.animated.div, {
                style: S,
                children: N(i, n)
            });
        }
    });
});
function eP(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        a = (0, _.bp)(),
        { reachedLimit: c, limit: u } = (0, ed.Z)(t),
        d = s.useCallback(() => {
            (0, e_.Z)(() => C.default.selectVoiceChannel(t.id, !0), a);
        }, [t.id, a]),
        h = s.useCallback(() => {
            n ? (0, eC.Z)() : d();
        }, [n, d]),
        p = (0, m.e7)([ei.Z], () => {
            let e = ei.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: c,
                channelLimit: u,
                channel: t,
                cameraUnavailable: n,
                hasPermission: i,
                onCameraUnavailable: h,
                className: eT.controlButton,
                iconClassName: eT.__invalid_joinIcon,
                onChange: d
            }),
            (0, r.jsx)(X.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eT.controlButton, eT.__invalid_lastButton)
            }),
            p
                ? (0, r.jsx)(q.Z, {
                      color: 'red',
                      channel: t,
                      className: eT.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: l, exitFullScreen: s, idleProps: a } = e,
        c = (0, m.e7)([es.default], () => {
            let e = es.default.getCurrentUser();
            return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: d, enabled: h } = (0, eu.Z)(),
        p = (0, eh.Z)(n),
        { suppress: g, selfMute: C, mute: x } = (0, em.Z)(n),
        { canGoLive: _ } = (0, m.cj)([el.Z], () => ({ canGoLive: (0, w.Z)(el.Z) })),
        E = (0, k.Z)(),
        Z = (0, m.e7)([L.Z], () => null != L.Z.getAwaitingRemoteSessionInfo()),
        y = null != E,
        P = (0, m.e7)([er.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : er.Z.getVoiceChannelId()) === n.id;
        }),
        M = (0, T.Z)(n, !0),
        R = (0, m.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: O, limit: D } = (0, ed.Z)(n),
        { analyticsLocations: U } = (0, S.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, r.jsx)(S.Gt, {
            value: U,
            children: (0, r.jsx)(eP, {
                channel: n,
                cameraUnavailable: d,
                hasCameraPermission: p,
                currentUser: c
            })
        });
    let B =
        ec.BT({
            permission: eI.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !M;
    return (0, r.jsx)(S.Gt, {
        value: U,
        children: (0, r.jsxs)(v.Z, {
            section: eI.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, r.jsx)('div', {
                    className: eT.eventPromptsContainer,
                    children: (0, r.jsx)(H.Z, { channelId: n.id })
                }),
                (0, r.jsxs)('div', {
                    className: o()(eT.wrapper, i),
                    children: [
                        !y &&
                            (0, r.jsx)(f.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(K.Z, { children: (0, r.jsx)(j.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: f.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, r.jsx)(et.C, {
                                        centerButton: !0,
                                        hasPermission: p,
                                        className: eT.controlButton,
                                        enabled: h,
                                        cameraUnavailable: d,
                                        onChange: eN,
                                        onCameraUnavailable: eC.Z,
                                        channelLimitReached: O,
                                        channelLimit: D,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !y &&
                            (0, r.jsx)(eA, {
                                channel: n,
                                idle: null === (t = null == a ? void 0 : a.idle) || void 0 === t || t
                            }),
                        !y &&
                            (0, r.jsx)(ej, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: s,
                                canGoLive: _,
                                hasPermission: p
                            }),
                        (0, r.jsx)(f.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(K.Z, {
                                    children: (0, r.jsx)(N.default, {
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
                                return (0, r.jsx)($.Z, {
                                    centerButton: !0,
                                    onPopoutClick: y ? null : n,
                                    className: eT.controlButton,
                                    selfMute: C,
                                    serverMute: x,
                                    suppress: g,
                                    popoutOpen: i,
                                    awaitingRemote: Z,
                                    onClick: () => (0, A.Z)(x, g, eI.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        B && !y
                            ? (0, r.jsx)('div', {
                                  className: eT.buttonContainer,
                                  children: (0, r.jsx)(ef.Z, { channel: n })
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
