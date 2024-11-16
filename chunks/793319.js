n.d(t, {
    NZ: function () {
        return eP;
    },
    r: function () {
        return ey;
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
    Z = n(906732),
    N = n(358221),
    S = n(887012),
    T = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(997323),
    P = n(120619),
    M = n(578976),
    R = n(955843),
    L = n(868554),
    k = n(464792),
    O = n(605236),
    D = n(243778),
    w = n(258609),
    B = n(446226),
    U = n(569545),
    H = n(74299),
    G = n(803647),
    F = n(554747),
    V = n(95764),
    z = n(459502),
    W = n(386542),
    K = n(140465),
    Y = n(746599),
    q = n(455961),
    X = n(611845),
    J = n(800966),
    Q = n(618158),
    $ = n(390322),
    ee = n(791592),
    et = n(136995),
    en = n(402113),
    ei = n(197016),
    el = n(386000),
    ea = n(698877),
    er = n(25827),
    es = n(199902),
    eo = n(523746),
    ec = n(131951),
    ed = n(944486),
    eu = n(594174),
    eh = n(626135),
    ep = n(700785),
    em = n(923973),
    ef = n(829750),
    eg = n(189771),
    eC = n(294629),
    ex = n(304745),
    ev = n(985370),
    e_ = n(544384),
    eI = n(560688),
    eE = n(127608),
    eb = n(76021),
    eZ = n(173507),
    eN = n(981631),
    eS = n(354459),
    eT = n(921944),
    ej = n(37113),
    eA = n(313439);
function ey(e, t) {
    if (ec.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, eZ.Z)(n, t) : n();
}
function eP(e) {
    let { channel: t, currentUser: i, exitFullScreen: l, canGoLive: s, hasPermission: o, disabled: c } = e,
        d = t.hdStreamingBuyerId === i.id && t.isHDStreamSplashed ? [m.z.HD_STREAMING_POTION_MODAL_UPSELL] : [],
        [u, C] = (0, D.US)(d);
    r.useEffect(() => {
        if (u === m.z.HD_STREAMING_POTION_MODAL_UPSELL) {
            var e;
            (e = C),
                (0, f.openModalLazy)(async () => {
                    let { default: i } = await n.e('88452').then(n.bind(n, 552394));
                    return (n) =>
                        (0, a.jsx)(i, {
                            markAsDismissed: e,
                            channel: t,
                            ...n
                        });
                });
        }
    }, [u, C, t]);
    let x = (0, p.e7)([ec.Z], () => ec.Z.getGoLiveSource()),
        v = (0, p.e7)([es.Z], () => es.Z.getCurrentUserActiveStream()),
        [I, E] = r.useState(!1),
        b = (0, p.e7)([P.Z], () => P.Z.getPlayedAnimation());
    r.useEffect(() => {
        b && (E(!0), (0, y.LE)());
    }, [b]);
    let Z = t.hdStreamingUntil;
    r.useEffect(() => {
        if (null != Z && new Date(Z) > new Date() && null != v && v.channelId === t.id) {
            var e;
            (0, y.x8)(null === (e = ec.Z.getState().goLiveSource) || void 0 === e ? void 0 : e.quality);
            let t = (0, M.s)(ej.LY.RESOLUTION_1440, ej.ws.FPS_60, x);
            g.Z.setGoLiveSource(t), (0, y.LE)();
        }
    }, [Z]);
    let N = (0, _.bp)(),
        S = (0, p.Wu)([es.Z], () => es.Z.getAllActiveStreams()),
        T = S.find((e) => e.ownerId === i.id),
        { activated: j, hqStreamingState: A } = (0, W.k)(h.q.STREAM_HIGH_QUALITY),
        w = null != T && j,
        B = r.useRef(null),
        U = t.getGuildId(),
        H = r.useCallback(() => {
            if ((null == l || l(), !s)) return (0, eE.Z)();
            (0, eb.Z)(U, t.id, eN.ZY5.GUILD_CHANNEL);
        }, [U, t.id, s, l]),
        F = (0, K.x8)('GoLiveButton'),
        V = (0, R.Z)(t, 'GoLiveButton'),
        z = (0, O.wE)(m.z.CONSUMABLE_HD_POTION_UPSELL),
        ee = (V && !z) || (t.isHDStreamSplashed && null == T),
        et = () => {
            if (s) {
                H();
                return;
            }
            (0, eE.Z)();
        },
        en = () => {
            (0, G.Z)(T);
        },
        ei = Y.pM,
        el = r.useCallback(() => {
            eh.default.track(eN.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, Y.qA)();
        }, [t.guild_id, t.id]),
        er = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != T;
            return (0, a.jsx)(ea.O, {
                ...i,
                centerButton: !0,
                disabled: c || !o,
                className: eA.controlButton,
                hasPermission: o,
                streamActive: null != T,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          A.hqStreamingIsEnabled && !A.hqStreamingPopoutDismissed && ei(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: ee,
                buttonRef: B,
                onClick: null != T ? en : et
            });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            V
                ? (0, a.jsx)(D.ZP, {
                      contentTypes: [m.z.CONSUMABLE_HD_POTION_UPSELL],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: n, markAsDismissed: i } = e;
                          if (n === m.z.CONSUMABLE_HD_POTION_UPSELL)
                              return (0, a.jsx)(k.Z, {
                                  channel: t,
                                  buttonRef: B,
                                  dismissed: !1,
                                  onClick: () => {
                                      i(eT.L.TAKE_ACTION);
                                  },
                                  onDismiss: () => {
                                      i(eT.L.USER_DISMISS);
                                  }
                              });
                      }
                  })
                : I
                  ? (0, a.jsx)(L.Z, {
                        channel: t,
                        buttonRef: B,
                        userId: t.hdStreamingBuyerId,
                        streaming: null != T,
                        onClose: () => {
                            E(!1);
                        }
                    })
                  : t.isHDStreamSplashed
                    ? (0, a.jsx)(D.ZP, {
                          contentTypes: [m.z.HD_STREAMING_POTION_BANNER],
                          bypassAutoDismiss: !0,
                          children: (e) => {
                              let { visibleContent: n, markAsDismissed: i } = e;
                              if (n === m.z.HD_STREAMING_POTION_BANNER)
                                  return (0, a.jsx)(L.Z, {
                                      channel: t,
                                      buttonRef: B,
                                      userId: t.hdStreamingBuyerId,
                                      onClose: () => {
                                          i(eT.L.USER_DISMISS);
                                      },
                                      dismissibleContent: !0
                                  });
                          }
                      })
                    : F && 0 === S.length
                      ? (0, a.jsx)(D.ZP, {
                            contentTypes: [m.z.TRIAL_FOR_ALL_STREAM_POPOUT],
                            bypassAutoDismiss: !0,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === m.z.TRIAL_FOR_ALL_STREAM_POPOUT)
                                    return (0, a.jsx)(J.h, {
                                        buttonRef: B,
                                        dismissed: !1,
                                        onDismiss: () => n(eT.L.USER_DISMISS)
                                    });
                            }
                        })
                      : w && A.hqStreamingIsEnabled
                        ? (0, a.jsx)(X.$, {
                              buttonRef: B,
                              dismissed: A.hqStreamingPopoutDismissed,
                              onDismiss: ei
                          })
                        : (0, a.jsx)(q.b, {
                              channel: t,
                              buttonRef: B,
                              dismissed: A.hqStreamingOptInPopoutDismissed,
                              onDismiss: el
                          }),
            (0, a.jsx)(Q.Z, {
                children: (0, a.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, a.jsx)($.Z, {
                            children: (0, a.jsx)(e_.Z, {
                                channel: t,
                                currentUser: i,
                                activeStreams: null != T ? [T] : [],
                                handleGoLive: H,
                                onClose: n,
                                appContext: N
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: f.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, a.jsx)('div', { children: er(n, i) });
                    }
                })
            })
        ]
    });
}
function eM(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, E.Z)(i, t.id)
        ? (0, a.jsx)('div', {
              className: eA.buttonContainer,
              children: (0, a.jsx)(ex.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let eR = r.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        s = (0, p.e7)([N.Z], () => N.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = r.useContext(f.AccessibilityPreferencesContext),
        [c, d] = r.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([es.Z], () => (null != h ? es.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === eS.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        v = (0, p.Wu)([es.Z], () =>
            es.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        _ = (0, F.qY)(l.id),
        I = r.useCallback(() => {
            if ((null == s ? void 0 : s.type) === eS.fO.ACTIVITY && s.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != _) return 'EVENT';
            return 'CALL';
        }, [s, t, g, _]),
        [E, b] = r.useState(I()),
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
    r.useEffect(() => {
        I() !== E && d(!0);
    }, [E, I]);
    let S = r.useCallback(() => {
            if (null != m) (0, x.g)((0, U.V9)(m));
            else for (let e of v) (0, x.g)((0, U.V9)(e));
        }, [v, m]),
        T = (e, t) => {
            let r = {
                centerButton: !0,
                className: eA.controlButton,
                popoutOpen: e
            };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == n) return;
                    return (0, a.jsx)(en.Z, {
                        ...r,
                        applicationId: s.id,
                        color: 'red',
                        channelId: l.id,
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, a.jsx)(ea.O, {
                        ...r,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: S,
                        onPopoutClick: v.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, a.jsx)(ei.Z, {
                        ...r,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, a.jsx)(V.Z, {
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
            return (0, a.jsx)(e_.Z, {
                channel: l,
                currentUser: n,
                activeStreams: v,
                handleGoLive: eN.VqG,
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
                style: Z,
                children: T(i, n)
            });
        }
    });
});
function eL(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, _.bp)(),
        { reachedLimit: c, limit: d } = (0, ef.Z)(t),
        u = r.useCallback(() => {
            (0, eZ.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = r.useCallback(() => {
            n ? (0, eI.Z)() : u();
        }, [n, u]),
        m = (0, p.e7)([eo.Z], () => {
            let e = eo.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(er.C, {
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
                className: eA.controlButton,
                iconClassName: eA.__invalid_joinIcon,
                onChange: u
            }),
            (0, a.jsx)(et.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eA.controlButton, eA.__invalid_lastButton)
            }),
            m
                ? (0, a.jsx)(ee.Z, {
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
    let { channel: n, className: i, onDisconnectCall: l, exitFullScreen: r, idleProps: s } = e,
        c = (0, p.e7)([eu.default], () => {
            let e = eu.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: u, enabled: h } = (0, em.Z)(),
        m = (0, eg.Z)(n),
        { suppress: g, selfMute: C, mute: x } = (0, eC.Z)(n),
        { canGoLive: _ } = (0, p.cj)([ec.Z], () => ({ canGoLive: (0, H.Z)(ec.Z) })),
        E = (0, B.Z)(),
        N = (0, p.e7)([w.Z], () => null != w.Z.getAwaitingRemoteSessionInfo()),
        y = null != E,
        P = (0, p.e7)([ed.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : ed.Z.getVoiceChannelId()) === n.id;
        }),
        M = (0, S.Z)(n, !0),
        R = (0, p.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: L, limit: k } = (0, ef.Z)(n),
        { analyticsLocations: O } = (0, Z.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, a.jsx)(Z.Gt, {
            value: O,
            children: (0, a.jsx)(eL, {
                channel: n,
                cameraUnavailable: u,
                hasCameraPermission: m,
                currentUser: c
            })
        });
    let D =
        ep.BT({
            permission: eN.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !M;
    return (0, a.jsx)(Z.Gt, {
        value: O,
        children: (0, a.jsxs)(v.Z, {
            section: eN.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, a.jsx)('div', {
                    className: eA.eventPromptsContainer,
                    children: (0, a.jsx)(z.Z, { channelId: n.id })
                }),
                (0, a.jsxs)('div', {
                    className: o()(eA.wrapper, i),
                    children: [
                        !y &&
                            (0, a.jsx)(f.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)($.Z, { children: (0, a.jsx)(j.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: f.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, a.jsx)(er.C, {
                                        centerButton: !0,
                                        hasPermission: m,
                                        className: eA.controlButton,
                                        enabled: h,
                                        cameraUnavailable: u,
                                        onChange: ey,
                                        onCameraUnavailable: eI.Z,
                                        channelLimitReached: L,
                                        channelLimit: k,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !y &&
                            (0, a.jsx)(eM, {
                                channel: n,
                                idle: null === (t = null == s ? void 0 : s.idle) || void 0 === t || t
                            }),
                        !y &&
                            (0, a.jsx)(eP, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: r,
                                canGoLive: _,
                                hasPermission: m
                            }),
                        (0, a.jsx)(f.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)($.Z, {
                                    children: (0, a.jsx)(T.default, {
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
                                return (0, a.jsx)(el.Z, {
                                    centerButton: !0,
                                    onPopoutClick: y ? null : n,
                                    className: eA.controlButton,
                                    selfMute: C,
                                    serverMute: x,
                                    suppress: g,
                                    popoutOpen: i,
                                    awaitingRemote: N,
                                    onClick: () => (0, A.Z)(x, g, eN.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        D && !y
                            ? (0, a.jsx)('div', {
                                  className: eA.buttonContainer,
                                  children: (0, a.jsx)(ev.Z, { channel: n })
                              })
                            : null,
                        (0, a.jsx)(eR, {
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
