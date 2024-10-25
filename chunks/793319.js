n.d(t, {
    NZ: function () {
        return eM;
    },
    r: function () {
        return eZ;
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
    R = n(335131),
    L = n(120619),
    P = n(868554),
    j = n(243778),
    O = n(258609),
    y = n(446226),
    D = n(569545),
    U = n(74299),
    k = n(803647),
    w = n(554747),
    B = n(95764),
    H = n(459502),
    G = n(386542),
    V = n(746599),
    F = n(455961),
    W = n(611845),
    z = n(634750),
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
    es = n(131951),
    ea = n(944486),
    el = n(594174),
    er = n(78839),
    eo = n(626135),
    ec = n(700785),
    eu = n(923973),
    ed = n(829750),
    eh = n(189771),
    em = n(294629),
    ep = n(304745),
    e_ = n(985370),
    ef = n(544384),
    eE = n(560688),
    eg = n(127608),
    eC = n(76021),
    eI = n(173507),
    eT = n(981631),
    ex = n(354459),
    eS = n(921944),
    ev = n(37113),
    eN = n(65154),
    eA = n(892216);
function eZ(e, t) {
    if (es.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    e ? (0, eI.Z)(n, t) : n();
}
function eM(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: s, hasPermission: r, disabled: o } = e,
        c = (0, m.e7)([es.Z], () => es.Z.getGoLiveSource()),
        u = (0, m.e7)([en.Z], () => en.Z.getCurrentUserActiveStream()),
        [d, E] = l.useState(!1),
        g = (0, m.e7)([L.Z], () => L.Z.getPlayedAnimation());
    l.useEffect(() => {
        g && E(!0);
    }, [g]);
    let C = t.hdStreamingUntil;
    l.useEffect(() => {
        if (null != C && new Date(C) > new Date() && null != u && u.channelId === t.id) {
            let e = {
                qualityOptions: {
                    preset: ev.tI.PRESET_CUSTOM,
                    resolution: ev.LY.RESOLUTION_1440,
                    frameRate: ev.ws.FPS_60
                },
                context: eN.Yn.STREAM
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
                f.Z.setGoLiveSource(e),
                (0, R.LE)();
        }
    }, [C]);
    let T = (0, I.bp)(),
        x = (0, m.Wu)([en.Z], () => en.Z.getAllActiveStreams()),
        S = x.find((e) => e.ownerId === n.id),
        { activated: v, hqStreamingState: N } = (0, G.k)(h.q.STREAM_HIGH_QUALITY),
        A = null != S && v,
        Z = l.useRef(null),
        M = t.getGuildId(),
        b = l.useCallback(() => {
            if ((null == i || i(), !s)) return (0, eg.Z)();
            (0, eC.Z)(M, t.id, eT.ZY5.GUILD_CHANNEL);
        }, [M, t.id, s, i]),
        O = (0, m.e7)([er.ZP], () => er.ZP.inReverseTrial()),
        y = () => {
            if (s) {
                b();
                return;
            }
            (0, eg.Z)();
        },
        D = () => {
            (0, k.Z)(S);
        },
        U = V.pM,
        w = l.useCallback(() => {
            eo.default.track(eT.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, V.qA)();
        }, [t.guild_id, t.id]),
        B = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                s = null != S;
            return (0, a.jsx)(ee.O, {
                ...i,
                centerButton: !0,
                disabled: o || !r,
                className: eA.controlButton,
                hasPermission: r,
                streamActive: null != S,
                isSelfStream: !0,
                onPopoutClick: s
                    ? function (e) {
                          N.hqStreamingIsEnabled && !N.hqStreamingPopoutDismissed && U(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: A && N.hqStreamingIsEnabled,
                buttonRef: Z,
                onClick: null != S ? D : y
            });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d
                ? (0, a.jsx)(P.Z, {
                      buttonRef: Z,
                      userId: t.hdStreamingBuyerId,
                      streaming: null != S,
                      onClose: () => {
                          E(!1);
                      }
                  })
                : O && 0 === x.length
                  ? (0, a.jsx)(j.ZP, {
                        contentTypes: [p.z.REVERSE_TRIAL_STREAM_POPOUT],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === p.z.REVERSE_TRIAL_STREAM_POPOUT)
                                return (0, a.jsx)(z.G, {
                                    buttonRef: Z,
                                    dismissed: !1,
                                    onDismiss: () => n(eS.L.USER_DISMISS)
                                });
                        }
                    })
                  : A && N.hqStreamingIsEnabled
                    ? (0, a.jsx)(W.$, {
                          buttonRef: Z,
                          dismissed: N.hqStreamingPopoutDismissed,
                          onDismiss: U
                      })
                    : (0, a.jsx)(F.b, {
                          channel: t,
                          buttonRef: Z,
                          dismissed: N.hqStreamingOptInPopoutDismissed,
                          onDismiss: w
                      }),
            (0, a.jsx)(Y.Z, {
                children: (0, a.jsx)(_.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, a.jsx)(K.Z, {
                            children: (0, a.jsx)(ef.Z, {
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
                        return (0, a.jsx)('div', { children: B(n, i) });
                    }
                })
            })
        ]
    });
}
function eb(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, x.Z)(i, t.id)
        ? (0, a.jsx)('div', {
              className: eA.buttonContainer,
              children: (0, a.jsx)(ep.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((s = i || (i = {})).ACTIVITY = 'ACTIVITY'), (s.STREAM = 'STREAM'), (s.CALL = 'CALL'), (s.EVENT = 'EVENT');
let eR = l.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: s } = e,
        r = (0, m.e7)([N.Z], () => N.Z.getSelectedParticipant(s.id)),
        { reducedMotion: o } = l.useContext(_.AccessibilityPreferencesContext),
        [c, u] = l.useState(!1),
        h = null == r ? void 0 : r.id,
        p = (0, m.e7)([en.Z], () => (null != h ? en.Z.getActiveStreamForStreamKey(h) : null), [h]),
        f = (null == r ? void 0 : r.type) === ex.fO.STREAM && null != p && p.ownerId !== (null == n ? void 0 : n.id),
        C = (0, m.Wu)([en.Z], () =>
            en.Z.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        I = (0, w.qY)(s.id),
        T = l.useCallback(() => {
            if ((null == r ? void 0 : r.type) === ex.fO.ACTIVITY && r.id === t) return 'ACTIVITY';
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
            if (null != p) (0, g.g)((0, D.V9)(p));
            else for (let e of C) (0, g.g)((0, D.V9)(e));
        }, [C, p]),
        Z = (e, t) => {
            let l = {
                centerButton: !0,
                className: eA.controlButton,
                popoutOpen: e
            };
            switch (x) {
                case 'ACTIVITY':
                    if (null == r || null == n) return;
                    return (0, a.jsx)(J.Z, {
                        ...l,
                        applicationId: r.id,
                        color: 'red',
                        channelId: s.id,
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, a.jsx)(ee.O, {
                        ...l,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: A,
                        onPopoutClick: C.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, a.jsx)(Q.Z, {
                        ...l,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, a.jsx)(B.Z, {
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
            return (0, a.jsx)(ef.Z, {
                channel: s,
                currentUser: n,
                activeStreams: C,
                handleGoLive: eT.VqG,
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
function eL(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: s } = e,
        r = (0, I.bp)(),
        { reachedLimit: c, limit: u } = (0, ed.Z)(t),
        d = l.useCallback(() => {
            (0, eI.Z)(() => E.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r]),
        h = l.useCallback(() => {
            n ? (0, eE.Z)() : d();
        }, [n, d]),
        p = (0, m.e7)([ei.Z], () => {
            let e = ei.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(s.id)) === !0;
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(et.C, {
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
                className: eA.controlButton,
                iconClassName: eA.__invalid_joinIcon,
                onChange: d
            }),
            (0, a.jsx)(X.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eA.controlButton, eA.__invalid_lastButton)
            }),
            p
                ? (0, a.jsx)(q.Z, {
                      color: 'red',
                      channel: t,
                      className: eA.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: s, exitFullScreen: l, idleProps: r } = e,
        c = (0, m.e7)([el.default], () => {
            let e = el.default.getCurrentUser();
            return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: d, enabled: h } = (0, eu.Z)(),
        p = (0, eh.Z)(n),
        { suppress: f, selfMute: E, mute: g } = (0, em.Z)(n),
        { canGoLive: I } = (0, m.cj)([es.Z], () => ({ canGoLive: (0, U.Z)(es.Z) })),
        x = (0, y.Z)(),
        N = (0, m.e7)([O.Z], () => null != O.Z.getAwaitingRemoteSessionInfo()),
        R = null != x,
        L = (0, m.e7)([ea.Z], () => {
            var e;
            return (null !== (e = null == x ? void 0 : x.channelId) && void 0 !== e ? e : ea.Z.getVoiceChannelId()) === n.id;
        }),
        P = (0, A.Z)(n, !0),
        j = (0, m.e7)([T.ZP], () => {
            let e = T.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: D, limit: k } = (0, ed.Z)(n),
        { analyticsLocations: w } = (0, v.ZP)(S.Z.VOICE_CONTROL_TRAY);
    if (!L)
        return (0, a.jsx)(v.Gt, {
            value: w,
            children: (0, a.jsx)(eL, {
                channel: n,
                cameraUnavailable: d,
                hasCameraPermission: p,
                currentUser: c
            })
        });
    let B =
        ec.BT({
            permission: eT.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !P;
    return (0, a.jsx)(v.Gt, {
        value: w,
        children: (0, a.jsxs)(C.Z, {
            section: eT.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, a.jsx)('div', {
                    className: eA.eventPromptsContainer,
                    children: (0, a.jsx)(H.Z, { channelId: n.id })
                }),
                (0, a.jsxs)('div', {
                    className: o()(eA.wrapper, i),
                    children: [
                        !R &&
                            (0, a.jsx)(_.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(K.Z, { children: (0, a.jsx)(M.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: _.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, a.jsx)(et.C, {
                                        centerButton: !0,
                                        hasPermission: p,
                                        className: eA.controlButton,
                                        enabled: h,
                                        cameraUnavailable: d,
                                        onChange: eZ,
                                        onCameraUnavailable: eE.Z,
                                        channelLimitReached: D,
                                        channelLimit: k,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !R &&
                            (0, a.jsx)(eb, {
                                channel: n,
                                idle: null === (t = null == r ? void 0 : r.idle) || void 0 === t || t
                            }),
                        !R &&
                            (0, a.jsx)(eM, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: l,
                                canGoLive: I,
                                hasPermission: p
                            }),
                        (0, a.jsx)(_.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(K.Z, {
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
                                return (0, a.jsx)($.Z, {
                                    centerButton: !0,
                                    onPopoutClick: R ? null : n,
                                    className: eA.controlButton,
                                    selfMute: E,
                                    serverMute: g,
                                    suppress: f,
                                    popoutOpen: i,
                                    awaitingRemote: N,
                                    onClick: () => (0, b.Z)(g, f, eT.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        B && !R
                            ? (0, a.jsx)('div', {
                                  className: eA.buttonContainer,
                                  children: (0, a.jsx)(e_.Z, { channel: n })
                              })
                            : null,
                        (0, a.jsx)(eR, {
                            connectedActivityApplicationId: j,
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
