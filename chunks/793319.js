n.d(t, {
    NZ: function () {
        return eS;
    },
    r: function () {
        return eN;
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
    u = n(752877),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    f = n(481060),
    g = n(846027),
    C = n(287734),
    x = n(872810),
    _ = n(410575),
    v = n(40851),
    I = n(317381),
    E = n(596040),
    b = n(100527),
    Z = n(906732),
    N = n(358221),
    S = n(887012),
    T = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(464792),
    P = n(324085),
    M = n(605236),
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
    F = n(140465),
    V = n(746599),
    z = n(455961),
    W = n(611845),
    K = n(800966),
    Y = n(618158),
    q = n(390322),
    X = n(791592),
    J = n(136995),
    Q = n(402113),
    $ = n(197016),
    ee = n(386000),
    et = n(698877),
    en = n(25827),
    ei = n(199902),
    el = n(523746),
    er = n(131951),
    ea = n(944486),
    es = n(594174),
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
    e_ = n(76021),
    ev = n(173507),
    eI = n(981631),
    eE = n(354459),
    eb = n(921944),
    eZ = n(892216);
function eN(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, ev.Z)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: l, hasPermission: s, disabled: o } = e,
        c = (0, v.bp)(),
        d = (0, p.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        u = d.find((e) => e.ownerId === n.id),
        { activated: g, hqStreamingState: C } = (0, G.k)(h.q.STREAM_HIGH_QUALITY),
        x = null != u && g,
        _ = a.useRef(null),
        I = t.getGuildId(),
        E = a.useCallback(() => {
            if ((null == i || i(), !l)) return (0, ex.Z)();
            (0, e_.Z)(I, t.id, eI.ZY5.GUILD_CHANNEL);
        }, [I, t.id, l, i]),
        b = (0, F.x8)('GoLiveButton'),
        Z = (0, P.Zm)(t, 'GoLiveButton'),
        N = (0, M.wE)(m.z.CONSUMABLE_HD_POTION_UPSELL),
        S = (0, P.bK)(),
        [T, j] = a.useState(!1);
    a.useEffect(() => {
        if ((j(((Z && !N) || (t.isHDStreamSplashed && null == u)) && !S), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                j(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, N, u, Z, S]);
    let A = () => {
            if (l) {
                E();
                return;
            }
            (0, ex.Z)();
        },
        L = () => {
            (0, w.Z)(u);
        },
        k = V.pM,
        O = a.useCallback(() => {
            eo.default.track(eI.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, V.qA)();
        }, [t.guild_id, t.id]),
        D = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != u;
            return (0, r.jsx)(et.O, {
                ...i,
                centerButton: !0,
                disabled: o || !s,
                className: eZ.controlButton,
                hasPermission: s,
                streamActive: null != u,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          C.hqStreamingIsEnabled && !C.hqStreamingPopoutDismissed && k(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: T,
                buttonRef: _,
                onClick: null != u ? L : A
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            Z
                ? (0, r.jsx)(R.ZP, {
                      contentTypes: [m.z.CONSUMABLE_HD_POTION_UPSELL],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: n, markAsDismissed: i } = e;
                          if (n === m.z.CONSUMABLE_HD_POTION_UPSELL)
                              return (0, r.jsx)(y.Z, {
                                  channel: t,
                                  buttonRef: _,
                                  dismissed: !1,
                                  onClick: () => {
                                      i(eb.L.TAKE_ACTION);
                                  },
                                  onDismiss: () => {
                                      i(eb.L.USER_DISMISS);
                                  }
                              });
                      }
                  })
                : b && 0 === d.length
                  ? (0, r.jsx)(R.ZP, {
                        contentTypes: [m.z.TRIAL_FOR_ALL_STREAM_POPOUT],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === m.z.TRIAL_FOR_ALL_STREAM_POPOUT)
                                return (0, r.jsx)(K.h, {
                                    buttonRef: _,
                                    dismissed: !1,
                                    onDismiss: () => n(eb.L.USER_DISMISS)
                                });
                        }
                    })
                  : x && C.hqStreamingIsEnabled
                    ? (0, r.jsx)(W.$, {
                          buttonRef: _,
                          dismissed: C.hqStreamingPopoutDismissed,
                          onDismiss: k
                      })
                    : (0, r.jsx)(z.b, {
                          channel: t,
                          buttonRef: _,
                          dismissed: C.hqStreamingOptInPopoutDismissed,
                          onDismiss: O
                      }),
            (0, r.jsx)(Y.Z, {
                children: (0, r.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(q.Z, {
                            children: (0, r.jsx)(eg.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != u ? [u] : [],
                                handleGoLive: E,
                                onClose: i,
                                appContext: c
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: f.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: D(n, i) });
                    }
                })
            })
        ]
    });
}
function eT(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, E.Z)(i, t.id)
        ? (0, r.jsx)('div', {
              className: eZ.buttonContainer,
              children: (0, r.jsx)(em.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let ej = a.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        s = (0, p.e7)([N.Z], () => N.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = a.useContext(f.AccessibilityPreferencesContext),
        [c, d] = a.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([ei.Z], () => (null != h ? ei.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === eE.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        _ = (0, p.Wu)([ei.Z], () =>
            ei.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        v = (0, B.qY)(l.id),
        I = a.useCallback(() => {
            if ((null == s ? void 0 : s.type) === eE.fO.ACTIVITY && s.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != v) return 'EVENT';
            return 'CALL';
        }, [s, t, g, v]),
        [E, b] = a.useState(I()),
        Z = (0, f.useSpring)(
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
            if (null != m) (0, x.g)((0, O.V9)(m));
            else for (let e of _) (0, x.g)((0, O.V9)(e));
        }, [_, m]),
        T = (e, t) => {
            let a = {
                centerButton: !0,
                className: eZ.controlButton,
                popoutOpen: e
            };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == n) return;
                    return (0, r.jsx)(Q.Z, {
                        ...a,
                        applicationId: s.id,
                        color: 'red',
                        channelId: l.id,
                        onPopoutClick: _.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, r.jsx)(et.O, {
                        ...a,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: S,
                        onPopoutClick: _.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, r.jsx)($.Z, {
                        ...a,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: _.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, r.jsx)(U.Z, {
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
                activeStreams: _,
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
            return (0, r.jsx)(u.animated.div, {
                style: Z,
                children: T(i, n)
            });
        }
    });
});
function eA(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, v.bp)(),
        { reachedLimit: c, limit: d } = (0, eu.Z)(t),
        u = a.useCallback(() => {
            (0, ev.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = a.useCallback(() => {
            n ? (0, eC.Z)() : u();
        }, [n, u]),
        m = (0, p.e7)([el.Z], () => {
            let e = el.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(en.C, {
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
                className: eZ.controlButton,
                iconClassName: eZ.__invalid_joinIcon,
                onChange: u
            }),
            (0, r.jsx)(J.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eZ.controlButton, eZ.__invalid_lastButton)
            }),
            m
                ? (0, r.jsx)(X.Z, {
                      color: 'red',
                      channel: t,
                      className: eZ.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: l, exitFullScreen: a, idleProps: s } = e,
        c = (0, p.e7)([es.default], () => {
            let e = es.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: u, enabled: h } = (0, ed.Z)(),
        m = (0, eh.Z)(n),
        { suppress: g, selfMute: C, mute: x } = (0, ep.Z)(n),
        { canGoLive: v } = (0, p.cj)([er.Z], () => ({ canGoLive: (0, D.Z)(er.Z) })),
        E = (0, k.Z)(),
        N = (0, p.e7)([L.Z], () => null != L.Z.getAwaitingRemoteSessionInfo()),
        y = null != E,
        P = (0, p.e7)([ea.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : ea.Z.getVoiceChannelId()) === n.id;
        }),
        M = (0, S.Z)(n, !0),
        R = (0, p.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: O, limit: w } = (0, eu.Z)(n),
        { analyticsLocations: B } = (0, Z.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, r.jsx)(Z.Gt, {
            value: B,
            children: (0, r.jsx)(eA, {
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
    return (0, r.jsx)(Z.Gt, {
        value: B,
        children: (0, r.jsxs)(_.Z, {
            section: eI.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, r.jsx)('div', {
                    className: eZ.eventPromptsContainer,
                    children: (0, r.jsx)(H.Z, { channelId: n.id })
                }),
                (0, r.jsxs)('div', {
                    className: o()(eZ.wrapper, i),
                    children: [
                        !y &&
                            (0, r.jsx)(f.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(q.Z, { children: (0, r.jsx)(j.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: f.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, r.jsx)(en.C, {
                                        centerButton: !0,
                                        hasPermission: m,
                                        className: eZ.controlButton,
                                        enabled: h,
                                        cameraUnavailable: u,
                                        onChange: eN,
                                        onCameraUnavailable: eC.Z,
                                        channelLimitReached: O,
                                        channelLimit: w,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !y &&
                            (0, r.jsx)(eT, {
                                channel: n,
                                idle: null === (t = null == s ? void 0 : s.idle) || void 0 === t || t
                            }),
                        !y &&
                            (0, r.jsx)(eS, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: a,
                                canGoLive: v,
                                hasPermission: m
                            }),
                        (0, r.jsx)(f.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(q.Z, {
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
                                return (0, r.jsx)(ee.Z, {
                                    centerButton: !0,
                                    onPopoutClick: y ? null : n,
                                    className: eZ.controlButton,
                                    selfMute: C,
                                    serverMute: x,
                                    suppress: g,
                                    popoutOpen: i,
                                    awaitingRemote: N,
                                    onClick: () => (0, A.Z)(x, g, eI.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        U && !y
                            ? (0, r.jsx)('div', {
                                  className: eZ.buttonContainer,
                                  children: (0, r.jsx)(ef.Z, { channel: n })
                              })
                            : null,
                        (0, r.jsx)(ej, {
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
