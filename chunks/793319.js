n.d(t, {
    NZ: function () {
        return eT;
    },
    r: function () {
        return eS;
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
    y = n(997614),
    P = n(324085),
    M = n(243778),
    R = n(258609),
    L = n(446226),
    k = n(569545),
    O = n(74299),
    D = n(803647),
    w = n(554747),
    B = n(95764),
    U = n(459502),
    H = n(386542),
    G = n(140465),
    F = n(746599),
    V = n(455961),
    z = n(611845),
    W = n(800966),
    K = n(641015),
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
    eC = n(411840),
    ex = n(560688),
    ev = n(127608),
    e_ = n(76021),
    eI = n(173507),
    eE = n(981631),
    eb = n(354459),
    eN = n(921944),
    eZ = n(812801);
function eS(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, eI.Z)(n, t) : n();
}
function eT(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: l, hasPermission: s, disabled: o } = e,
        { groupedButtons: c } = (0, eC.Z)({ location: 'GoLiveButton' }),
        d = (0, _.bp)(),
        u = (0, p.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        g = u.find((e) => e.ownerId === n.id),
        { activated: C, hqStreamingState: x } = (0, H.k)(h.q.STREAM_HIGH_QUALITY),
        v = null != g && C,
        I = a.useRef(null),
        E = t.getGuildId(),
        b = a.useCallback(() => {
            if ((null == i || i(), !l)) return (0, ev.Z)();
            (0, e_.Z)(E, t.id, eE.ZY5.GUILD_CHANNEL);
        }, [E, t.id, l, i]),
        N = (0, G.x8)('GoLiveButton'),
        Z = (0, P.bK)(),
        [S, T] = a.useState(!1);
    a.useEffect(() => {
        if ((T(t.isHDStreamSplashed && null == g && !Z), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                T(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, Z]);
    let j = () => {
            if (l) {
                b();
                return;
            }
            (0, ev.Z)();
        },
        A = () => {
            (0, D.Z)(g);
        },
        y = F.pM,
        R = a.useCallback(() => {
            eo.default.track(eE.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, F.qA)();
        }, [t.guild_id, t.id]),
        L = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != g;
            return (0, r.jsx)(et.O, {
                ...i,
                centerButton: !0,
                disabled: o || !s,
                className: c ? void 0 : eZ.controlButton,
                hasPermission: s,
                streamActive: null != g,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          x.hqStreamingIsEnabled && !x.hqStreamingPopoutDismissed && y(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: S,
                buttonRef: I,
                onClick: null != g ? A : j
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N && 0 === u.length
                ? (0, r.jsx)(M.ZP, {
                      contentTypes: [m.z.TRIAL_FOR_ALL_STREAM_POPOUT],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === m.z.TRIAL_FOR_ALL_STREAM_POPOUT)
                              return (0, r.jsx)(W.h, {
                                  buttonRef: I,
                                  dismissed: !1,
                                  onDismiss: () => n(eN.L.USER_DISMISS)
                              });
                      }
                  })
                : v && x.hqStreamingIsEnabled
                  ? (0, r.jsx)(z.$, {
                        buttonRef: I,
                        dismissed: x.hqStreamingPopoutDismissed,
                        onDismiss: y
                    })
                  : (0, r.jsx)(V.b, {
                        channel: t,
                        buttonRef: I,
                        dismissed: x.hqStreamingOptInPopoutDismissed,
                        onDismiss: R
                    }),
            (0, r.jsx)(Y.Z, {
                children: (0, r.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(q.Z, {
                            children: (0, r.jsx)(eg.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: b,
                                onClose: i,
                                appContext: d
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: f.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: L(n, i) });
                    }
                })
            })
        ]
    });
}
function ej(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, E.Z)(a, t.id)
        ? (0, r.jsx)('div', {
              className: eZ.buttonContainer,
              children: (0, r.jsx)(em.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let eA = a.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: l } = e,
        s = (0, p.e7)([Z.Z], () => Z.Z.getSelectedParticipant(l.id)),
        { reducedMotion: o } = a.useContext(f.AccessibilityPreferencesContext),
        [c, d] = a.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([ei.Z], () => (null != h ? ei.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === eb.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        v = (0, p.Wu)([ei.Z], () =>
            ei.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        _ = (0, w.qY)(l.id),
        I = a.useCallback(() => {
            if ((null == s ? void 0 : s.type) === eb.fO.ACTIVITY && s.id === t) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != _) return 'EVENT';
            return 'CALL';
        }, [s, t, g, _]),
        [E, b] = a.useState(I()),
        { groupedButtons: N } = (0, eC.Z)({ location: 'DisconnectButton' }),
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
                    b(I()), d(!1);
                }
            },
            'animate-always'
        );
    a.useEffect(() => {
        I() !== E && d(!0);
    }, [E, I]);
    let T = a.useCallback(() => {
            if (null != m) (0, x.g)((0, k.V9)(m));
            else for (let e of v) (0, x.g)((0, k.V9)(e));
        }, [v, m]),
        j = (e, t) => {
            let a = N
                ? {
                      fullRegionButton: !0,
                      centerButton: !0,
                      popoutOpen: e
                  }
                : {
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
                        onPopoutClick: v.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, r.jsx)(et.O, {
                        ...a,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: T,
                        onPopoutClick: v.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, r.jsx)($.Z, {
                        ...a,
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
                style: S,
                children: j(i, n)
            });
        }
    });
});
function ey(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, _.bp)(),
        { reachedLimit: o, limit: c } = (0, eu.Z)(t),
        d = a.useCallback(() => {
            (0, eI.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        u = a.useCallback(() => {
            n ? (0, ex.Z)() : d();
        }, [n, d]),
        h = (0, p.e7)([el.Z], () => {
            let e = el.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        }),
        { groupedButtons: m } = (0, eC.Z)({ location: 'JoinCall' });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(en.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: o,
                channelLimit: c,
                channel: t,
                cameraUnavailable: n,
                hasPermission: i,
                onCameraUnavailable: u,
                className: eZ.controlButton,
                onChange: d
            }),
            (0, r.jsx)(J.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: eZ.controlButton,
                fullRegionButton: m
            }),
            h
                ? (0, r.jsx)(X.Z, {
                      color: 'red',
                      channel: t,
                      className: eZ.controlButton,
                      fullRegionButton: m
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t, n;
    let { channel: i, className: l, onDisconnectCall: s, exitFullScreen: c, idleProps: u } = e,
        { mode: h, groupedButtons: m } = (0, eC.Z)({ location: 'CenterControlTray' }),
        [g, C] = a.useState(void 0),
        x = (0, p.e7)([es.default], () => {
            let e = es.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: _, enabled: E } = (0, ed.Z)(),
        Z = (0, eh.Z)(i),
        { suppress: P, selfMute: M, mute: k } = (0, ep.Z)(i),
        { canGoLive: D } = (0, p.cj)([er.Z], () => ({ canGoLive: (0, O.Z)(er.Z) })),
        w = (0, L.Z)(),
        B = (0, p.e7)([R.Z], () => null != R.Z.getAwaitingRemoteSessionInfo()),
        H = null != w,
        G = (0, p.e7)([ea.Z], () => {
            var e;
            return (null !== (e = null == w ? void 0 : w.channelId) && void 0 !== e ? e : ea.Z.getVoiceChannelId()) === i.id;
        }),
        F = (0, S.Z)(i, !0),
        V = (0, p.e7)([I.ZP], () => {
            let e = I.ZP.getSelfEmbeddedActivityForChannel(i.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: z, limit: W } = (0, eu.Z)(i),
        { analyticsLocations: Y } = (0, N.ZP)(b.Z.VOICE_CONTROL_TRAY);
    if (!G)
        return (0, r.jsx)(N.Gt, {
            value: Y,
            children: (0, r.jsx)(ey, {
                channel: i,
                cameraUnavailable: _,
                hasCameraPermission: Z,
                currentUser: x
            })
        });
    let X =
            ec.BT({
                permission: eE.Plq.ADD_REACTIONS,
                user: x,
                context: i
            }) &&
            !i.isPrivate() &&
            !F,
        J =
            ec.BT({
                permission: eE.Plq.ADD_REACTIONS,
                user: x,
                context: i
            }) && !i.isPrivate(),
        Q = (0, K.Z)(i);
    return m
        ? (0, r.jsx)(N.Gt, {
              value: Y,
              children: (0, r.jsxs)(v.Z, {
                  section: eE.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eZ.eventPromptsContainer,
                          children: (0, r.jsx)(U.Z, { channelId: i.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eZ.experimentWrapper, l),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: eZ.buttonSection,
                                  children: [
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
                                          align: 'right',
                                          position: 'top',
                                          animation: f.Popout.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(ee.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: H ? null : n,
                                                  selfMute: M,
                                                  serverMute: k,
                                                  suppress: P,
                                                  popoutOpen: i,
                                                  awaitingRemote: B,
                                                  onClick: () => (0, A.Z)(k, P, eE.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !H &&
                                          (0, r.jsx)(f.Popout, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(q.Z, { children: (0, r.jsx)(j.Z, { onClose: t }) });
                                              },
                                              position: 'top',
                                              align: 'right',
                                              spacing: 16,
                                              animation: f.Popout.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: i } = t;
                                                  return (0, r.jsx)(en.C, {
                                                      centerButton: !0,
                                                      hasPermission: Z,
                                                      enabled: E,
                                                      cameraUnavailable: _,
                                                      onChange: eS,
                                                      onCameraUnavailable: ex.Z,
                                                      channelLimitReached: z,
                                                      channelLimit: W,
                                                      popoutOpen: i,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: eZ.buttonSection,
                                  children: [
                                      !H &&
                                          (0, r.jsx)(eT, {
                                              channel: i,
                                              currentUser: x,
                                              exitFullScreen: c,
                                              canGoLive: D,
                                              hasPermission: Z
                                          }),
                                      !H &&
                                          (0, r.jsx)(ej, {
                                              channel: i,
                                              idle: null === (t = null == u ? void 0 : u.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          }),
                                      Q &&
                                          (0, r.jsx)(y.Z, {
                                              channel: i,
                                              themeable: !0,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          }),
                                      J &&
                                          !H &&
                                          (0, r.jsx)(ef.Z, {
                                              channel: i,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          })
                                  ]
                              }),
                              (0, r.jsx)(eA, {
                                  connectedActivityApplicationId: V,
                                  currentUser: x,
                                  channel: i,
                                  onDisconnectCall: s
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(N.Gt, {
              value: Y,
              children: (0, r.jsxs)(v.Z, {
                  section: eE.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eZ.eventPromptsContainer,
                          children: (0, r.jsx)(U.Z, { channelId: i.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eZ.wrapper, l),
                          children: [
                              'mic-button-moved-left' === h
                                  ? (0, r.jsx)(f.Popout, {
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
                                                onPopoutClick: H ? null : n,
                                                className: eZ.controlButton,
                                                selfMute: M,
                                                serverMute: k,
                                                suppress: P,
                                                popoutOpen: i,
                                                awaitingRemote: B,
                                                onClick: () => (0, A.Z)(k, P, eE.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !H &&
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
                                              hasPermission: Z,
                                              className: eZ.controlButton,
                                              enabled: E,
                                              cameraUnavailable: _,
                                              onChange: eS,
                                              onCameraUnavailable: ex.Z,
                                              channelLimitReached: z,
                                              channelLimit: W,
                                              popoutOpen: i,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !H &&
                                  (0, r.jsx)(ej, {
                                      channel: i,
                                      idle: null === (n = null == u ? void 0 : u.idle) || void 0 === n || n
                                  }),
                              !H &&
                                  (0, r.jsx)(eT, {
                                      channel: i,
                                      currentUser: x,
                                      exitFullScreen: c,
                                      canGoLive: D,
                                      hasPermission: Z
                                  }),
                              h === eC.B.MicPushToEnable
                                  ? (0, r.jsx)(f.Popout, {
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
                                                onPopoutClick: H ? null : n,
                                                className: eZ.controlButton,
                                                selfMute: M,
                                                serverMute: k,
                                                suppress: P,
                                                popoutOpen: i,
                                                awaitingRemote: B,
                                                onClick: () => (0, A.Z)(k, P, eE.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              X && !H
                                  ? (0, r.jsx)('div', {
                                        className: eZ.buttonContainer,
                                        children: (0, r.jsx)(ef.Z, { channel: i })
                                    })
                                  : null,
                              (0, r.jsx)(eA, {
                                  connectedActivityApplicationId: V,
                                  currentUser: x,
                                  channel: i,
                                  onDisconnectCall: s
                              })
                          ]
                      })
                  ]
              })
          });
};
