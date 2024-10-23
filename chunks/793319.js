n.d(t, {
    NZ: function () {
        return eA;
    },
    r: function () {
        return eN;
    }
}),
    n(47120);
var i,
    s,
    a = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    c = n(512722),
    u = n.n(c),
    d = n(100621),
    h = n(848246),
    m = n(442837),
    p = n(704215),
    _ = n(481060),
    f = n(846027),
    E = n(287734),
    g = n(872810),
    C = n(410575),
    I = n(40851),
    T = n(317381),
    x = n(596040),
    S = n(100527),
    v = n(906732),
    N = n(358221),
    A = n(887012),
    Z = n(659580),
    M = n(793865),
    b = n(575175),
    R = n(868554),
    L = n(243778),
    j = n(258609),
    P = n(446226),
    O = n(569545),
    y = n(74299),
    D = n(803647),
    U = n(554747),
    k = n(95764),
    w = n(459502),
    B = n(386542),
    H = n(746599),
    G = n(455961),
    V = n(611845),
    F = n(634750),
    W = n(618158),
    z = n(390322),
    Y = n(791592),
    K = n(136995),
    q = n(402113),
    X = n(197016),
    J = n(386000),
    Q = n(698877),
    $ = n(25827),
    ee = n(199902),
    et = n(523746),
    en = n(131951),
    ei = n(944486),
    es = n(594174),
    ea = n(78839),
    el = n(626135),
    er = n(700785),
    eo = n(923973),
    ec = n(829750),
    eu = n(189771),
    ed = n(294629),
    eh = n(304745),
    em = n(985370),
    ep = n(544384),
    e_ = n(560688),
    ef = n(127608),
    eE = n(76021),
    eg = n(173507),
    eC = n(981631),
    eI = n(354459),
    eT = n(921944),
    ex = n(37113),
    eS = n(65154),
    ev = n(892216);
function eN(e, t) {
    if (en.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    e ? (0, eg.Z)(n, t) : n();
}
function eA(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: s, hasPermission: r, disabled: o } = e,
        c = null == t ? void 0 : t.hdStreamingUntil,
        u = (0, m.e7)([en.Z], () => en.Z.getGoLiveSource()),
        d = (0, m.e7)([ee.Z], () => ee.Z.getCurrentUserActiveStream()),
        [E, g] = l.useState(!1),
        C = l.useRef(!0);
    l.useEffect(() => {
        if (C.current) {
            C.current = !1;
            return;
        }
        null != c && new Date(c) > new Date() && g(!0);
    }, [c]),
        l.useEffect(() => {
            if (null != c && new Date(c) > new Date() && null != d && d.channelId === t.id) {
                let e = {
                    qualityOptions: {
                        preset: ex.tI.PRESET_CUSTOM,
                        resolution: ex.LY.RESOLUTION_1440,
                        frameRate: ex.ws.FPS_60
                    },
                    context: eS.Yn.STREAM
                };
                null != u &&
                    (null != u.desktopSource &&
                        (e.desktopSettings = {
                            sourceId: u.desktopSource.id,
                            sound: !0
                        }),
                    null != u.cameraSource &&
                        (e.cameraSettings = {
                            videoDeviceGuid: u.cameraSource.videoDeviceGuid,
                            audioDeviceGuid: u.cameraSource.audioDeviceGuid
                        })),
                    f.Z.setGoLiveSource(e);
            }
        }, [c]);
    let T = (0, I.bp)(),
        x = (0, m.Wu)([ee.Z], () => ee.Z.getAllActiveStreams()),
        S = x.find((e) => e.ownerId === n.id),
        { activated: v, hqStreamingState: N } = (0, B.k)(h.q.STREAM_HIGH_QUALITY),
        A = null != S && v,
        Z = l.useRef(null),
        M = t.getGuildId(),
        b = l.useCallback(() => {
            if ((null == i || i(), !s)) return (0, ef.Z)();
            (0, eE.Z)(M, t.id, eC.ZY5.GUILD_CHANNEL);
        }, [M, t.id, s, i]),
        j = (0, m.e7)([ea.ZP], () => ea.ZP.inReverseTrial()),
        P = () => {
            if (s) {
                b();
                return;
            }
            (0, ef.Z)();
        },
        O = () => {
            (0, D.Z)(S);
        },
        y = H.pM,
        U = l.useCallback(() => {
            el.default.track(eC.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, H.qA)();
        }, [t.guild_id, t.id]),
        k = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                s = null != S;
            return (0, a.jsx)(Q.O, {
                ...i,
                centerButton: !0,
                disabled: o || !r,
                className: ev.controlButton,
                hasPermission: r,
                streamActive: null != S,
                isSelfStream: !0,
                onPopoutClick: s
                    ? function (e) {
                          N.hqStreamingIsEnabled && !N.hqStreamingPopoutDismissed && y(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: A && N.hqStreamingIsEnabled,
                buttonRef: Z,
                onClick: null != S ? O : P
            });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            E
                ? (0, a.jsx)(R.Z, {
                      buttonRef: Z,
                      userId: t.hdStreamingBuyerId,
                      streaming: null != S,
                      onClose: () => {
                          g(!1);
                      }
                  })
                : j && 0 === x.length
                  ? (0, a.jsx)(L.ZP, {
                        contentTypes: [p.z.REVERSE_TRIAL_STREAM_POPOUT],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === p.z.REVERSE_TRIAL_STREAM_POPOUT)
                                return (0, a.jsx)(F.G, {
                                    buttonRef: Z,
                                    dismissed: !1,
                                    onDismiss: () => n(eT.L.USER_DISMISS)
                                });
                        }
                    })
                  : A && N.hqStreamingIsEnabled
                    ? (0, a.jsx)(V.$, {
                          buttonRef: Z,
                          dismissed: N.hqStreamingPopoutDismissed,
                          onDismiss: y
                      })
                    : (0, a.jsx)(G.b, {
                          channel: t,
                          buttonRef: Z,
                          dismissed: N.hqStreamingOptInPopoutDismissed,
                          onDismiss: U
                      }),
            (0, a.jsx)(W.Z, {
                children: (0, a.jsx)(_.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, a.jsx)(z.Z, {
                            children: (0, a.jsx)(ep.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != S ? [S] : [],
                                handleGoLive: b,
                                onClose: i,
                                appContext: T
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: _.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, a.jsx)('div', { children: k(n, i) });
                    }
                })
            })
        ]
    });
}
function eZ(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, x.Z)(i, t.id)
        ? (0, a.jsx)('div', {
              className: ev.buttonContainer,
              children: (0, a.jsx)(eh.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((s = i || (i = {})).ACTIVITY = 'ACTIVITY'), (s.STREAM = 'STREAM'), (s.CALL = 'CALL'), (s.EVENT = 'EVENT');
let eM = l.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: s } = e,
        r = (0, m.e7)([N.Z], () => N.Z.getSelectedParticipant(s.id)),
        { reducedMotion: o } = l.useContext(_.AccessibilityPreferencesContext),
        [c, u] = l.useState(!1),
        h = null == r ? void 0 : r.id,
        p = (0, m.e7)([ee.Z], () => (null != h ? ee.Z.getActiveStreamForStreamKey(h) : null), [h]),
        f = (null == r ? void 0 : r.type) === eI.fO.STREAM && null != p && p.ownerId !== (null == n ? void 0 : n.id),
        C = (0, m.Wu)([ee.Z], () =>
            ee.Z.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        I = (0, U.qY)(s.id),
        T = l.useCallback(() => {
            if ((null == r ? void 0 : r.type) === eI.fO.ACTIVITY && r.id === t) return 'ACTIVITY';
            if (f) return 'STREAM';
            if (null != I) return 'EVENT';
            return 'CALL';
        }, [r, t, f, I]),
        [x, S] = l.useState(T()),
        v = (0, _.useSpring)(
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
                    S(T()), u(!1);
                }
            },
            'animate-always'
        );
    l.useEffect(() => {
        T() !== x && u(!0);
    }, [x, T]);
    let A = l.useCallback(() => {
            if (null != p) (0, g.g)((0, O.V9)(p));
            else for (let e of C) (0, g.g)((0, O.V9)(e));
        }, [C, p]),
        Z = (e, t) => {
            let l = {
                centerButton: !0,
                className: ev.controlButton,
                popoutOpen: e
            };
            switch (x) {
                case 'ACTIVITY':
                    if (null == r || null == n) return;
                    return (0, a.jsx)(q.Z, {
                        ...l,
                        applicationId: r.id,
                        color: 'red',
                        channelId: s.id,
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, a.jsx)(Q.O, {
                        ...l,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: A,
                        onPopoutClick: C.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, a.jsx)(X.Z, {
                        ...l,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, a.jsx)(k.Z, {
                        channelId: s.id,
                        onClick: () => {
                            E.default.disconnect(), null == i || i();
                        }
                    });
            }
        };
    return (0, a.jsx)(_.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ep.Z, {
                channel: s,
                currentUser: n,
                activeStreams: C,
                handleGoLive: eC.VqG,
                hideSelfOptions: !0,
                onClose: t
            });
        },
        position: 'top',
        align: 'center',
        animation: _.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, a.jsx)(d.animated.div, {
                style: v,
                children: Z(i, n)
            });
        }
    });
});
function eb(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: s } = e,
        r = (0, I.bp)(),
        { reachedLimit: c, limit: u } = (0, ec.Z)(t),
        d = l.useCallback(() => {
            (0, eg.Z)(() => E.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r]),
        h = l.useCallback(() => {
            n ? (0, e_.Z)() : d();
        }, [n, d]),
        p = (0, m.e7)([et.Z], () => {
            let e = et.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(s.id)) === !0;
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)($.C, {
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
                className: ev.controlButton,
                iconClassName: ev.__invalid_joinIcon,
                onChange: d
            }),
            (0, a.jsx)(K.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(ev.controlButton, ev.__invalid_lastButton)
            }),
            p
                ? (0, a.jsx)(Y.Z, {
                      color: 'red',
                      channel: t,
                      className: ev.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: s, exitFullScreen: l, idleProps: r } = e,
        c = (0, m.e7)([es.default], () => {
            let e = es.default.getCurrentUser();
            return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: d, enabled: h } = (0, eo.Z)(),
        p = (0, eu.Z)(n),
        { suppress: f, selfMute: E, mute: g } = (0, ed.Z)(n),
        { canGoLive: I } = (0, m.cj)([en.Z], () => ({ canGoLive: (0, y.Z)(en.Z) })),
        x = (0, P.Z)(),
        N = (0, m.e7)([j.Z], () => null != j.Z.getAwaitingRemoteSessionInfo()),
        R = null != x,
        L = (0, m.e7)([ei.Z], () => {
            var e;
            return (null !== (e = null == x ? void 0 : x.channelId) && void 0 !== e ? e : ei.Z.getVoiceChannelId()) === n.id;
        }),
        O = (0, A.Z)(n, !0),
        D = (0, m.e7)([T.ZP], () => {
            let e = T.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: U, limit: k } = (0, ec.Z)(n),
        { analyticsLocations: B } = (0, v.ZP)(S.Z.VOICE_CONTROL_TRAY);
    if (!L)
        return (0, a.jsx)(v.Gt, {
            value: B,
            children: (0, a.jsx)(eb, {
                channel: n,
                cameraUnavailable: d,
                hasCameraPermission: p,
                currentUser: c
            })
        });
    let H =
        er.BT({
            permission: eC.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !O;
    return (0, a.jsx)(v.Gt, {
        value: B,
        children: (0, a.jsxs)(C.Z, {
            section: eC.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, a.jsx)('div', {
                    className: ev.eventPromptsContainer,
                    children: (0, a.jsx)(w.Z, { channelId: n.id })
                }),
                (0, a.jsxs)('div', {
                    className: o()(ev.wrapper, i),
                    children: [
                        !R &&
                            (0, a.jsx)(_.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(z.Z, { children: (0, a.jsx)(M.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: _.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, a.jsx)($.C, {
                                        centerButton: !0,
                                        hasPermission: p,
                                        className: ev.controlButton,
                                        enabled: h,
                                        cameraUnavailable: d,
                                        onChange: eN,
                                        onCameraUnavailable: e_.Z,
                                        channelLimitReached: U,
                                        channelLimit: k,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !R &&
                            (0, a.jsx)(eZ, {
                                channel: n,
                                idle: null === (t = null == r ? void 0 : r.idle) || void 0 === t || t
                            }),
                        !R &&
                            (0, a.jsx)(eA, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: l,
                                canGoLive: I,
                                hasPermission: p
                            }),
                        (0, a.jsx)(_.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(z.Z, {
                                    children: (0, a.jsx)(Z.default, {
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderOutputDevices: !0,
                                        renderInputModes: !0
                                    })
                                });
                            },
                            align: 'center',
                            position: 'top',
                            animation: _.Popout.Animation.FADE,
                            children: (e, t) => {
                                let { onClick: n } = e,
                                    { isShown: i } = t;
                                return (0, a.jsx)(J.Z, {
                                    centerButton: !0,
                                    onPopoutClick: R ? null : n,
                                    className: ev.controlButton,
                                    selfMute: E,
                                    serverMute: g,
                                    suppress: f,
                                    popoutOpen: i,
                                    awaitingRemote: N,
                                    onClick: () => (0, b.Z)(g, f, eC.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        H && !R
                            ? (0, a.jsx)('div', {
                                  className: ev.buttonContainer,
                                  children: (0, a.jsx)(em.Z, { channel: n })
                              })
                            : null,
                        (0, a.jsx)(eM, {
                            connectedActivityApplicationId: D,
                            currentUser: c,
                            channel: n,
                            onDisconnectCall: s
                        })
                    ]
                })
            ]
        })
    });
};
