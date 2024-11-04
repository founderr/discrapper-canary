n.d(t, {
    NZ: function () {
        return ej;
    },
    r: function () {
        return eS;
    }
}),
    n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
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
    T = n(887012),
    S = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(335131),
    P = n(120619),
    M = n(868554),
    R = n(243778),
    L = n(258609),
    k = n(446226),
    O = n(569545),
    D = n(74299),
    w = n(803647),
    B = n(554747),
    U = n(95764),
    H = n(459502),
    G = n(386542),
    F = n(746599),
    V = n(455961),
    z = n(611845),
    W = n(634750),
    K = n(618158),
    Y = n(390322),
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
    ea = n(944486),
    er = n(594174),
    es = n(78839),
    eo = n(626135),
    ec = n(700785),
    ed = n(923973),
    eu = n(829750),
    eh = n(189771),
    ep = n(294629),
    em = n(304745),
    ef = n(985370),
    eg = n(544384),
    eC = n(560688),
    ex = n(127608),
    ev = n(76021),
    e_ = n(173507),
    eI = n(981631),
    eE = n(354459),
    eb = n(921944),
    eN = n(37113),
    eZ = n(65154),
    eT = n(892216);
function eS(e, t) {
    if (el.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, e_.Z)(n, t) : n();
}
function ej(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: l, hasPermission: s, disabled: o } = e,
        c = (0, p.e7)([el.Z], () => el.Z.getGoLiveSource()),
        d = (0, p.e7)([en.Z], () => en.Z.getCurrentUserActiveStream()),
        [u, C] = r.useState(!1),
        x = (0, p.e7)([P.Z], () => P.Z.getPlayedAnimation());
    r.useEffect(() => {
        x && C(!0);
    }, [x]);
    let v = t.hdStreamingUntil;
    r.useEffect(() => {
        if (null != v && new Date(v) > new Date() && null != d && d.channelId === t.id) {
            let e = {
                qualityOptions: {
                    preset: eN.tI.PRESET_CUSTOM,
                    resolution: eN.LY.RESOLUTION_1440,
                    frameRate: eN.ws.FPS_60
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
        E = (0, p.Wu)([en.Z], () => en.Z.getAllActiveStreams()),
        b = E.find((e) => e.ownerId === n.id),
        { activated: N, hqStreamingState: Z } = (0, G.k)(h.q.STREAM_HIGH_QUALITY),
        T = null != b && N,
        S = r.useRef(null),
        j = t.getGuildId(),
        A = r.useCallback(() => {
            if ((null == i || i(), !l)) return (0, ex.Z)();
            (0, ev.Z)(j, t.id, eI.ZY5.GUILD_CHANNEL);
        }, [j, t.id, l, i]),
        L = (0, p.e7)([es.ZP], () => es.ZP.inReverseTrial()),
        k = () => {
            if (l) {
                A();
                return;
            }
            (0, ex.Z)();
        },
        O = () => {
            (0, w.Z)(b);
        },
        D = F.pM,
        B = r.useCallback(() => {
            eo.default.track(eI.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, F.qA)();
        }, [t.guild_id, t.id]),
        U = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != b;
            return (0, a.jsx)(ee.O, {
                ...i,
                centerButton: !0,
                disabled: o || !s,
                className: eT.controlButton,
                hasPermission: s,
                streamActive: null != b,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          Z.hqStreamingIsEnabled && !Z.hqStreamingPopoutDismissed && D(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: T && Z.hqStreamingIsEnabled,
                buttonRef: S,
                onClick: null != b ? O : k
            });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, a.jsx)(M.Z, {
                      buttonRef: S,
                      userId: t.hdStreamingBuyerId,
                      streaming: null != b,
                      onClose: () => {
                          C(!1);
                      }
                  })
                : L && 0 === E.length
                  ? (0, a.jsx)(R.ZP, {
                        contentTypes: [m.z.REVERSE_TRIAL_STREAM_POPOUT],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === m.z.REVERSE_TRIAL_STREAM_POPOUT)
                                return (0, a.jsx)(W.G, {
                                    buttonRef: S,
                                    dismissed: !1,
                                    onDismiss: () => n(eb.L.USER_DISMISS)
                                });
                        }
                    })
                  : T && Z.hqStreamingIsEnabled
                    ? (0, a.jsx)(z.$, {
                          buttonRef: S,
                          dismissed: Z.hqStreamingPopoutDismissed,
                          onDismiss: D
                      })
                    : (0, a.jsx)(V.b, {
                          channel: t,
                          buttonRef: S,
                          dismissed: Z.hqStreamingOptInPopoutDismissed,
                          onDismiss: B
                      }),
            (0, a.jsx)(K.Z, {
                children: (0, a.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, a.jsx)(Y.Z, {
                            children: (0, a.jsx)(eg.Z, {
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
                        return (0, a.jsx)('div', { children: U(n, i) });
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
        ? (0, a.jsx)('div', {
              className: eT.buttonContainer,
              children: (0, a.jsx)(em.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let ey = r.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        s = (0, p.e7)([Z.Z], () => Z.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = r.useContext(f.AccessibilityPreferencesContext),
        [c, d] = r.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([en.Z], () => (null != h ? en.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === eE.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        v = (0, p.Wu)([en.Z], () =>
            en.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        _ = (0, B.qY)(l.id),
        I = r.useCallback(() => {
            if ((null == s ? void 0 : s.type) === eE.fO.ACTIVITY && s.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != _) return 'EVENT';
            return 'CALL';
        }, [s, t, g, _]),
        [E, b] = r.useState(I()),
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
    r.useEffect(() => {
        I() !== E && d(!0);
    }, [E, I]);
    let T = r.useCallback(() => {
            if (null != m) (0, x.g)((0, O.V9)(m));
            else for (let e of v) (0, x.g)((0, O.V9)(e));
        }, [v, m]),
        S = (e, t) => {
            let r = {
                centerButton: !0,
                className: eT.controlButton,
                popoutOpen: e
            };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == n) return;
                    return (0, a.jsx)(J.Z, {
                        ...r,
                        applicationId: s.id,
                        color: 'red',
                        channelId: l.id,
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, a.jsx)(ee.O, {
                        ...r,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: T,
                        onPopoutClick: v.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, a.jsx)(Q.Z, {
                        ...r,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, a.jsx)(U.Z, {
                        channelId: l.id,
                        onClick: () => {
                            C.default.disconnect(), null == i || i();
                        }
                    });
            }
        };
    return (0, a.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(eg.Z, {
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
            return (0, a.jsx)(u.animated.div, {
                style: N,
                children: S(i, n)
            });
        }
    });
});
function eP(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, _.bp)(),
        { reachedLimit: c, limit: d } = (0, eu.Z)(t),
        u = r.useCallback(() => {
            (0, e_.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = r.useCallback(() => {
            n ? (0, eC.Z)() : u();
        }, [n, u]),
        m = (0, p.e7)([ei.Z], () => {
            let e = ei.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(et.C, {
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
                className: eT.controlButton,
                iconClassName: eT.__invalid_joinIcon,
                onChange: u
            }),
            (0, a.jsx)(X.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eT.controlButton, eT.__invalid_lastButton)
            }),
            m
                ? (0, a.jsx)(q.Z, {
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
    let { channel: n, className: i, onDisconnectCall: l, exitFullScreen: r, idleProps: s } = e,
        c = (0, p.e7)([er.default], () => {
            let e = er.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: u, enabled: h } = (0, ed.Z)(),
        m = (0, eh.Z)(n),
        { suppress: g, selfMute: C, mute: x } = (0, ep.Z)(n),
        { canGoLive: _ } = (0, p.cj)([el.Z], () => ({ canGoLive: (0, D.Z)(el.Z) })),
        E = (0, k.Z)(),
        Z = (0, p.e7)([L.Z], () => null != L.Z.getAwaitingRemoteSessionInfo()),
        y = null != E,
        P = (0, p.e7)([ea.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : ea.Z.getVoiceChannelId()) === n.id;
        }),
        M = (0, T.Z)(n, !0),
        R = (0, p.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: O, limit: w } = (0, eu.Z)(n),
        { analyticsLocations: B } = (0, N.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, a.jsx)(N.Gt, {
            value: B,
            children: (0, a.jsx)(eP, {
                channel: n,
                cameraUnavailable: u,
                hasCameraPermission: m,
                currentUser: c
            })
        });
    let U =
        ec.BT({
            permission: eI.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !M;
    return (0, a.jsx)(N.Gt, {
        value: B,
        children: (0, a.jsxs)(v.Z, {
            section: eI.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, a.jsx)('div', {
                    className: eT.eventPromptsContainer,
                    children: (0, a.jsx)(H.Z, { channelId: n.id })
                }),
                (0, a.jsxs)('div', {
                    className: o()(eT.wrapper, i),
                    children: [
                        !y &&
                            (0, a.jsx)(f.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(Y.Z, { children: (0, a.jsx)(j.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: f.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, a.jsx)(et.C, {
                                        centerButton: !0,
                                        hasPermission: m,
                                        className: eT.controlButton,
                                        enabled: h,
                                        cameraUnavailable: u,
                                        onChange: eS,
                                        onCameraUnavailable: eC.Z,
                                        channelLimitReached: O,
                                        channelLimit: w,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !y &&
                            (0, a.jsx)(eA, {
                                channel: n,
                                idle: null === (t = null == s ? void 0 : s.idle) || void 0 === t || t
                            }),
                        !y &&
                            (0, a.jsx)(ej, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: r,
                                canGoLive: _,
                                hasPermission: m
                            }),
                        (0, a.jsx)(f.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(Y.Z, {
                                    children: (0, a.jsx)(S.default, {
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
                                return (0, a.jsx)($.Z, {
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
                        U && !y
                            ? (0, a.jsx)('div', {
                                  className: eT.buttonContainer,
                                  children: (0, a.jsx)(ef.Z, { channel: n })
                              })
                            : null,
                        (0, a.jsx)(ey, {
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
