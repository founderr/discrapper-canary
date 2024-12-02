n.d(t, {
    NZ: function () {
        return eN;
    },
    r: function () {
        return eb;
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
    N = n(906732),
    S = n(358221),
    Z = n(887012),
    T = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(324085),
    P = n(243778),
    M = n(258609),
    R = n(446226),
    L = n(569545),
    k = n(74299),
    O = n(803647),
    D = n(554747),
    w = n(95764),
    B = n(459502),
    U = n(386542),
    H = n(140465),
    G = n(746599),
    F = n(455961),
    V = n(611845),
    z = n(800966),
    W = n(618158),
    K = n(390322),
    Y = n(791592),
    q = n(136995),
    X = n(402113),
    J = n(197016),
    Q = n(386000),
    $ = n(698877),
    ee = n(25827),
    et = n(199902),
    en = n(523746),
    ei = n(131951),
    el = n(944486),
    er = n(594174),
    ea = n(626135),
    es = n(700785),
    eo = n(923973),
    ec = n(829750),
    ed = n(189771),
    eu = n(294629),
    eh = n(304745),
    ep = n(985370),
    em = n(544384),
    ef = n(560688),
    eg = n(127608),
    eC = n(76021),
    ex = n(173507),
    e_ = n(981631),
    ev = n(354459),
    eI = n(921944),
    eE = n(812801);
function eb(e, t) {
    if (ei.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, ex.Z)(n, t) : n();
}
function eN(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: l, hasPermission: s, disabled: o } = e,
        c = (0, v.bp)(),
        d = (0, p.Wu)([et.Z], () => et.Z.getAllActiveStreams()),
        u = d.find((e) => e.ownerId === n.id),
        { activated: g, hqStreamingState: C } = (0, U.k)(h.q.STREAM_HIGH_QUALITY),
        x = null != u && g,
        _ = a.useRef(null),
        I = t.getGuildId(),
        E = a.useCallback(() => {
            if ((null == i || i(), !l)) return (0, eg.Z)();
            (0, eC.Z)(I, t.id, e_.ZY5.GUILD_CHANNEL);
        }, [I, t.id, l, i]),
        b = (0, H.x8)('GoLiveButton'),
        N = (0, y.bK)(),
        [S, Z] = a.useState(!1);
    a.useEffect(() => {
        if ((Z(t.isHDStreamSplashed && null == u && !N), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                Z(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, u, N]);
    let T = () => {
            if (l) {
                E();
                return;
            }
            (0, eg.Z)();
        },
        j = () => {
            (0, O.Z)(u);
        },
        A = G.pM,
        M = a.useCallback(() => {
            ea.default.track(e_.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, G.qA)();
        }, [t.guild_id, t.id]),
        R = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != u;
            return (0, r.jsx)($.O, {
                ...i,
                centerButton: !0,
                disabled: o || !s,
                className: eE.controlButton,
                hasPermission: s,
                streamActive: null != u,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          C.hqStreamingIsEnabled && !C.hqStreamingPopoutDismissed && A(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: S,
                buttonRef: _,
                onClick: null != u ? j : T
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b && 0 === d.length
                ? (0, r.jsx)(P.ZP, {
                      contentTypes: [m.z.TRIAL_FOR_ALL_STREAM_POPOUT],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === m.z.TRIAL_FOR_ALL_STREAM_POPOUT)
                              return (0, r.jsx)(z.h, {
                                  buttonRef: _,
                                  dismissed: !1,
                                  onDismiss: () => n(eI.L.USER_DISMISS)
                              });
                      }
                  })
                : x && C.hqStreamingIsEnabled
                  ? (0, r.jsx)(V.$, {
                        buttonRef: _,
                        dismissed: C.hqStreamingPopoutDismissed,
                        onDismiss: A
                    })
                  : (0, r.jsx)(F.b, {
                        channel: t,
                        buttonRef: _,
                        dismissed: C.hqStreamingOptInPopoutDismissed,
                        onDismiss: M
                    }),
            (0, r.jsx)(W.Z, {
                children: (0, r.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(K.Z, {
                            children: (0, r.jsx)(em.Z, {
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
                        return (0, r.jsx)('div', { children: R(n, i) });
                    }
                })
            })
        ]
    });
}
function eS(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, E.Z)(i, t.id)
        ? (0, r.jsx)('div', {
              className: eE.buttonContainer,
              children: (0, r.jsx)(eh.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let eZ = a.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        s = (0, p.e7)([S.Z], () => S.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = a.useContext(f.AccessibilityPreferencesContext),
        [c, d] = a.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([et.Z], () => (null != h ? et.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === ev.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        _ = (0, p.Wu)([et.Z], () =>
            et.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        v = (0, D.qY)(l.id),
        I = a.useCallback(() => {
            if ((null == s ? void 0 : s.type) === ev.fO.ACTIVITY && s.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != v) return 'EVENT';
            return 'CALL';
        }, [s, t, g, v]),
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
    let Z = a.useCallback(() => {
            if (null != m) (0, x.g)((0, L.V9)(m));
            else for (let e of _) (0, x.g)((0, L.V9)(e));
        }, [_, m]),
        T = (e, t) => {
            let a = {
                centerButton: !0,
                className: eE.controlButton,
                popoutOpen: e
            };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == n) return;
                    return (0, r.jsx)(X.Z, {
                        ...a,
                        applicationId: s.id,
                        color: 'red',
                        channelId: l.id,
                        onPopoutClick: _.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, r.jsx)($.O, {
                        ...a,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: Z,
                        onPopoutClick: _.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, r.jsx)(J.Z, {
                        ...a,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: _.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, r.jsx)(w.Z, {
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
            return (0, r.jsx)(em.Z, {
                channel: l,
                currentUser: n,
                activeStreams: _,
                handleGoLive: e_.VqG,
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
function eT(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, v.bp)(),
        { reachedLimit: c, limit: d } = (0, ec.Z)(t),
        u = a.useCallback(() => {
            (0, ex.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = a.useCallback(() => {
            n ? (0, ef.Z)() : u();
        }, [n, u]),
        m = (0, p.e7)([en.Z], () => {
            let e = en.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ee.C, {
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
                className: eE.controlButton,
                iconClassName: eE.__invalid_joinIcon,
                onChange: u
            }),
            (0, r.jsx)(q.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eE.controlButton, eE.__invalid_lastButton)
            }),
            m
                ? (0, r.jsx)(Y.Z, {
                      color: 'red',
                      channel: t,
                      className: eE.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: l, exitFullScreen: a, idleProps: s } = e,
        c = (0, p.e7)([er.default], () => {
            let e = er.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: u, enabled: h } = (0, eo.Z)(),
        m = (0, ed.Z)(n),
        { suppress: g, selfMute: C, mute: x } = (0, eu.Z)(n),
        { canGoLive: v } = (0, p.cj)([ei.Z], () => ({ canGoLive: (0, k.Z)(ei.Z) })),
        E = (0, R.Z)(),
        S = (0, p.e7)([M.Z], () => null != M.Z.getAwaitingRemoteSessionInfo()),
        y = null != E,
        P = (0, p.e7)([el.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : el.Z.getVoiceChannelId()) === n.id;
        }),
        L = (0, Z.Z)(n, !0),
        O = (0, p.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: D, limit: w } = (0, ec.Z)(n),
        { analyticsLocations: U } = (0, N.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, r.jsx)(N.Gt, {
            value: U,
            children: (0, r.jsx)(eT, {
                channel: n,
                cameraUnavailable: u,
                hasCameraPermission: m,
                currentUser: c
            })
        });
    let H =
        es.BT({
            permission: e_.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !L;
    return (0, r.jsx)(N.Gt, {
        value: U,
        children: (0, r.jsxs)(_.Z, {
            section: e_.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, r.jsx)('div', {
                    className: eE.eventPromptsContainer,
                    children: (0, r.jsx)(B.Z, { channelId: n.id })
                }),
                (0, r.jsxs)('div', {
                    className: o()(eE.wrapper, i),
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
                                    return (0, r.jsx)(ee.C, {
                                        centerButton: !0,
                                        hasPermission: m,
                                        className: eE.controlButton,
                                        enabled: h,
                                        cameraUnavailable: u,
                                        onChange: eb,
                                        onCameraUnavailable: ef.Z,
                                        channelLimitReached: D,
                                        channelLimit: w,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !y &&
                            (0, r.jsx)(eS, {
                                channel: n,
                                idle: null === (t = null == s ? void 0 : s.idle) || void 0 === t || t
                            }),
                        !y &&
                            (0, r.jsx)(eN, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: a,
                                canGoLive: v,
                                hasPermission: m
                            }),
                        (0, r.jsx)(f.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(K.Z, {
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
                                return (0, r.jsx)(Q.Z, {
                                    centerButton: !0,
                                    onPopoutClick: y ? null : n,
                                    className: eE.controlButton,
                                    selfMute: C,
                                    serverMute: x,
                                    suppress: g,
                                    popoutOpen: i,
                                    awaitingRemote: S,
                                    onClick: () => (0, A.Z)(x, g, e_.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        H && !y
                            ? (0, r.jsx)('div', {
                                  className: eE.buttonContainer,
                                  children: (0, r.jsx)(ep.Z, { channel: n })
                              })
                            : null,
                        (0, r.jsx)(eZ, {
                            connectedActivityApplicationId: O,
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
