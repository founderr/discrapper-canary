n.d(t, {
    NZ: function () {
        return eL;
    },
    r: function () {
        return eR;
    }
}),
    n(47120);
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(512722),
    u = n.n(c),
    d = n(338545),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    _ = n(481060),
    f = n(846027),
    E = n(287734),
    g = n(872810),
    C = n(410575),
    I = n(40851),
    x = n(317381),
    T = n(596040),
    N = n(100527),
    v = n(906732),
    S = n(67212),
    Z = n(757454),
    A = n(158631),
    M = n(709369),
    b = n(552740),
    R = n(358221),
    L = n(887012),
    j = n(659580),
    P = n(793865),
    O = n(575175),
    y = n(243778),
    D = n(258609),
    k = n(446226),
    U = n(594190),
    w = n(569545),
    B = n(74299),
    H = n(989941),
    G = n(803647),
    V = n(554747),
    F = n(95764),
    W = n(459502),
    z = n(386542),
    Y = n(746599),
    K = n(455961),
    q = n(611845),
    X = n(634750),
    Q = n(618158),
    J = n(390322),
    $ = n(791592),
    ee = n(136995),
    et = n(402113),
    en = n(197016),
    ei = n(386000),
    ea = n(698877),
    es = n(25827),
    el = n(199902),
    er = n(523746),
    eo = n(131951),
    ec = n(944486),
    eu = n(594174),
    ed = n(78839),
    eh = n(449224),
    ep = n(626135),
    em = n(700785),
    e_ = n(923973),
    ef = n(829750),
    eE = n(189771),
    eg = n(294629),
    eC = n(304745),
    eI = n(985370),
    ex = n(544384),
    eT = n(560688),
    eN = n(127608),
    ev = n(76021),
    eS = n(173507),
    eZ = n(981631),
    eA = n(354459),
    eM = n(921944),
    eb = n(177480);
function eR(e, t) {
    if (eo.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    e ? (0, eS.Z)(n, t) : n();
}
function eL(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: a, hasPermission: r, disabled: o } = e,
        c = (0, I.bp)(),
        u = (0, p.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        d = u.find((e) => e.ownerId === n.id),
        { activated: f, hqStreamingState: E } = (0, z.k)(h.q.STREAM_HIGH_QUALITY),
        C = null != d && f,
        x = l.useRef(null),
        T = t.getGuildId(),
        N = l.useCallback(() => {
            if ((null == i || i(), !a)) return (0, eN.Z)();
            (0, ev.Z)(T, t.id, eZ.ZY5.GUILD_CHANNEL);
        }, [T, t.id, a, i]),
        v = (0, p.e7)([U.ZP, eh.Z], () => (0, H.Z)(U.ZP, eh.Z)),
        M = (0, A.ZP)(),
        R = (0, Z.Z)() && null != v,
        L = (0, p.e7)([ed.ZP], () => ed.ZP.inReverseTrial()),
        j = () => {
            R &&
                (null == d
                    ? (0, g.tE)({
                          channelId: t.id,
                          pid: null == v ? void 0 : v.pid
                      })
                    : (0, S.v$)((0, w.V9)(d), null == v ? void 0 : v.pid));
        },
        P = () => {
            if (R) {
                (0, b.D)(j);
                return;
            }
            if (a) {
                N();
                return;
            }
            (0, eN.Z)();
        },
        O = () => {
            if (M) {
                (0, b.Z)(() => (0, G.Z)(d));
                return;
            }
            (0, G.Z)(d);
        },
        D = Y.pM,
        k = l.useCallback(() => {
            ep.default.track(eZ.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, Y.qA)();
        }, [t.guild_id, t.id]),
        B = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                a = null != d && !M;
            return (0, s.jsx)(ea.O, {
                ...i,
                centerButton: !0,
                disabled: o || !r,
                className: eb.controlButton,
                hasPermission: r,
                streamActive: null != d,
                isSelfStream: !0,
                onPopoutClick: a
                    ? function (e) {
                          E.hqStreamingIsEnabled && !E.hqStreamingPopoutDismissed && D(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: C && E.hqStreamingIsEnabled,
                buttonRef: x,
                onClick: null != d ? O : P
            });
        };
    return M
        ? B()
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  L && 0 === u.length
                      ? (0, s.jsx)(y.ZP, {
                            contentTypes: [m.z.REVERSE_TRIAL_STREAM_POPOUT],
                            bypassAutoDismiss: !0,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === m.z.REVERSE_TRIAL_STREAM_POPOUT)
                                    return (0, s.jsx)(X.G, {
                                        buttonRef: x,
                                        dismissed: !1,
                                        onDismiss: () => n(eM.L.USER_DISMISS)
                                    });
                            }
                        })
                      : C && E.hqStreamingIsEnabled
                        ? (0, s.jsx)(q.$, {
                              buttonRef: x,
                              dismissed: E.hqStreamingPopoutDismissed,
                              onDismiss: D
                          })
                        : (0, s.jsx)(K.b, {
                              channel: t,
                              buttonRef: x,
                              dismissed: E.hqStreamingOptInPopoutDismissed,
                              onDismiss: k
                          }),
                  (0, s.jsx)(Q.Z, {
                      children: (0, s.jsx)(_.Popout, {
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, s.jsx)(J.Z, {
                                  children: (0, s.jsx)(ex.Z, {
                                      channel: t,
                                      currentUser: n,
                                      activeStreams: null != d ? [d] : [],
                                      handleGoLive: N,
                                      onClose: i,
                                      appContext: c
                                  })
                              });
                          },
                          position: 'top',
                          align: 'center',
                          animation: _.Popout.Animation.FADE,
                          children: (e, t) => {
                              let { ...n } = e,
                                  { isShown: i } = t;
                              return (0, s.jsx)('div', { children: B(n, i) });
                          }
                      })
                  })
              ]
          });
}
function ej(e) {
    let { channel: t } = e,
        n = t.getGuildId();
    return (0, T.Z)(n, t.id)
        ? (0, s.jsx)('div', {
              className: eb.buttonContainer,
              children: (0, s.jsx)(eC.M, { channel: t })
          })
        : null;
}
((a = i || (i = {})).ACTIVITY = 'ACTIVITY'), (a.STREAM = 'STREAM'), (a.CALL = 'CALL'), (a.EVENT = 'EVENT'), (a.BROADCAST = 'BROADCAST');
let eP = l.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: a } = e,
        r = (0, p.e7)([R.Z], () => R.Z.getSelectedParticipant(a.id)),
        { reducedMotion: o } = l.useContext(_.AccessibilityPreferencesContext),
        [c, u] = l.useState(!1),
        h = null == r ? void 0 : r.id,
        m = (0, p.e7)([el.Z], () => (null != h ? el.Z.getActiveStreamForStreamKey(h) : null), [h]),
        f = (null == r ? void 0 : r.type) === eA.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        C = (0, p.Wu)([el.Z], () =>
            el.Z.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        I = (0, V.qY)(a.id),
        x = (0, A.zW)(a.id),
        T = l.useCallback(() => {
            if ((null == r ? void 0 : r.type) === eA.fO.ACTIVITY && r.id === t) return 'ACTIVITY';
            if (f) return 'STREAM';
            if (null != I) return 'EVENT';
            return 'CALL';
        }, [r, t, f, I]),
        [N, v] = l.useState(T()),
        S = (0, _.useSpring)(
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
                    v(T()), u(!1);
                }
            },
            'animate-always'
        );
    l.useEffect(() => {
        T() !== N && u(!0);
    }, [N, T]);
    let Z = l.useCallback(() => {
            if (null != m) (0, g.g)((0, w.V9)(m));
            else for (let e of C) (0, g.g)((0, w.V9)(e));
        }, [C, m]),
        b = (e, t) => {
            let l = {
                centerButton: !0,
                className: eb.controlButton,
                popoutOpen: e
            };
            switch (N) {
                case 'ACTIVITY':
                    if (null == r || null == n) return;
                    return (0, s.jsx)(et.Z, {
                        ...l,
                        applicationId: r.id,
                        color: 'red',
                        channelId: a.id,
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, s.jsx)(ea.O, {
                        ...l,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: Z,
                        onPopoutClick: C.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, s.jsx)(en.Z, {
                        ...l,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: C.length > 0 ? t : null,
                        channel: a
                    });
                case 'EVENT':
                    return (0, s.jsx)(F.Z, {
                        channelId: a.id,
                        onClick: () => {
                            E.default.disconnect(), null == i || i();
                        }
                    });
            }
        };
    return (0, s.jsx)(_.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return x
                ? (0, s.jsx)(M.Z, { onClose: t })
                : (0, s.jsx)(ex.Z, {
                      channel: a,
                      currentUser: n,
                      activeStreams: C,
                      handleGoLive: eZ.VqG,
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
            return (0, s.jsx)(d.animated.div, {
                style: S,
                children: b(i, n)
            });
        }
    });
});
function eO(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: a } = e,
        r = (0, I.bp)(),
        { reachedLimit: c, limit: u } = (0, ef.Z)(t),
        d = l.useCallback(() => {
            (0, eS.Z)(() => E.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r]),
        h = l.useCallback(() => {
            n ? (0, eT.Z)() : d();
        }, [n, d]),
        m = (0, p.e7)([er.Z], () => {
            let e = er.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(es.C, {
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
                className: eb.controlButton,
                iconClassName: eb.__invalid_joinIcon,
                onChange: d
            }),
            (0, s.jsx)(ee.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eb.controlButton, eb.__invalid_lastButton)
            }),
            m
                ? (0, s.jsx)($.Z, {
                      color: 'red',
                      channel: t,
                      className: eb.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    let { channel: t, className: n, onDisconnectCall: i, exitFullScreen: a } = e,
        l = (0, p.e7)([eu.default], () => {
            let e = eu.default.getCurrentUser();
            return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: r, enabled: c } = (0, e_.Z)(),
        d = (0, eE.Z)(t),
        { suppress: h, selfMute: m, mute: f } = (0, eg.Z)(t),
        { canGoLive: E } = (0, p.cj)([eo.Z], () => ({ canGoLive: (0, B.Z)(eo.Z) })),
        g = (0, k.Z)(),
        I = (0, p.e7)([D.Z], () => null != D.Z.getAwaitingRemoteSessionInfo()),
        T = null != g,
        S = (0, p.e7)([ec.Z], () => {
            var e;
            return (null !== (e = null == g ? void 0 : g.channelId) && void 0 !== e ? e : ec.Z.getVoiceChannelId()) === t.id;
        }),
        Z = (0, L.Z)(t, !0),
        A = (0, p.e7)([x.ZP], () => {
            let e = x.ZP.getSelfEmbeddedActivityForChannel(t.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: M, limit: b } = (0, ef.Z)(t),
        { analyticsLocations: R } = (0, v.ZP)(N.Z.VOICE_CONTROL_TRAY);
    if (!S)
        return (0, s.jsx)(v.Gt, {
            value: R,
            children: (0, s.jsx)(eO, {
                channel: t,
                cameraUnavailable: r,
                hasCameraPermission: d,
                currentUser: l
            })
        });
    let y =
        em.BT({
            permission: eZ.Plq.ADD_REACTIONS,
            user: l,
            context: t
        }) &&
        !t.isPrivate() &&
        !Z;
    return (0, s.jsx)(v.Gt, {
        value: R,
        children: (0, s.jsxs)(C.Z, {
            section: eZ.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, s.jsx)('div', {
                    className: eb.eventPromptsContainer,
                    children: (0, s.jsx)(W.Z, { channelId: t.id })
                }),
                (0, s.jsxs)('div', {
                    className: o()(eb.wrapper, n),
                    children: [
                        !T &&
                            (0, s.jsx)(_.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, s.jsx)(J.Z, { children: (0, s.jsx)(P.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: _.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, s.jsx)(es.C, {
                                        centerButton: !0,
                                        hasPermission: d,
                                        className: eb.controlButton,
                                        enabled: c,
                                        cameraUnavailable: r,
                                        onChange: eR,
                                        onCameraUnavailable: eT.Z,
                                        channelLimitReached: M,
                                        channelLimit: b,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !T && (0, s.jsx)(ej, { channel: t }),
                        !T &&
                            (0, s.jsx)(eL, {
                                channel: t,
                                currentUser: l,
                                exitFullScreen: a,
                                canGoLive: E,
                                hasPermission: d
                            }),
                        (0, s.jsx)(_.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, s.jsx)(J.Z, {
                                    children: (0, s.jsx)(j.default, {
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
                                return (0, s.jsx)(ei.Z, {
                                    centerButton: !0,
                                    onPopoutClick: T ? null : n,
                                    className: eb.controlButton,
                                    selfMute: m,
                                    serverMute: f,
                                    suppress: h,
                                    popoutOpen: i,
                                    awaitingRemote: I,
                                    onClick: () => (0, O.Z)(f, h)
                                });
                            }
                        }),
                        y && !T
                            ? (0, s.jsx)('div', {
                                  className: eb.buttonContainer,
                                  children: (0, s.jsx)(eI.Z, { channel: t })
                              })
                            : null,
                        (0, s.jsx)(eP, {
                            connectedActivityApplicationId: A,
                            currentUser: l,
                            channel: t,
                            onDisconnectCall: i
                        })
                    ]
                })
            ]
        })
    });
};
