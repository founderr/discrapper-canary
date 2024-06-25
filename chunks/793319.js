n.d(t, {
  NZ: function() {
    return eS
  },
  r: function() {
    return eZ
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(512722),
  u = n.n(c),
  d = n(920906),
  h = n(848246),
  m = n(442837),
  p = n(481060),
  E = n(846027),
  g = n(287734),
  f = n(872810),
  C = n(410575),
  _ = n(40851),
  I = n(317381),
  x = n(596040),
  T = n(100527),
  N = n(906732),
  Z = n(67212),
  S = n(757454),
  v = n(158631),
  A = n(709369),
  M = n(552740),
  R = n(358221),
  j = n(887012),
  L = n(659580),
  O = n(793865),
  P = n(575175),
  y = n(258609),
  b = n(446226),
  D = n(594190),
  U = n(569545),
  k = n(74299),
  w = n(989941),
  H = n(803647),
  G = n(554747),
  B = n(95764),
  V = n(459502),
  F = n(386542),
  z = n(485731),
  W = n(455961),
  Y = n(611845),
  K = n(618158),
  q = n(390322),
  X = n(791592),
  Q = n(136995),
  J = n(402113),
  $ = n(197016),
  ee = n(386e3),
  et = n(698877),
  en = n(25827),
  el = n(199902),
  ei = n(523746),
  es = n(131951),
  ea = n(944486),
  er = n(594174),
  eo = n(449224),
  ec = n(700785),
  eu = n(923973),
  ed = n(829750),
  eh = n(189771),
  em = n(294629),
  ep = n(304745),
  eE = n(985370),
  eg = n(544384),
  ef = n(560688),
  eC = n(127608),
  e_ = n(76021),
  eI = n(173507),
  ex = n(981631),
  eT = n(354459),
  eN = n(559820);

function eZ(e, t) {
  if (es.Z.isVideoEnabled() === e) return;
  let n = () => E.Z.setVideoEnabled(e);
  e ? (0, eI.Z)(n, t) : n()
}

function eS(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: l,
    canGoLive: i,
    hasPermission: r,
    disabled: o
  } = e, c = (0, _.bp)(), u = (0, m.Wu)([el.Z], () => el.Z.getAllActiveStreams()).find(e => e.ownerId === n.id), {
    available: d,
    activated: E,
    hqStreamingState: g
  } = (0, F.k)(h.q.STREAM_HIGH_QUALITY), C = null != u && d && E, I = a.useRef(null), x = t.getGuildId(), T = a.useCallback(() => {
    if (null == l || l(), !i) return (0, eC.Z)();
    (0, e_.Z)(x, t.id, ex.ZY5.GUILD_CHANNEL)
  }, [x, t.id, i, l]), N = (0, m.e7)([D.ZP, eo.Z], () => (0, w.Z)(D.ZP, eo.Z)), A = (0, v.ZP)(), R = (0, S.Z)() && null != N, j = () => {
    R && (null == u ? (0, f.tE)({
      channelId: t.id,
      pid: null == N ? void 0 : N.pid
    }) : (0, Z.v$)((0, U.V9)(u), null == N ? void 0 : N.pid))
  }, L = () => {
    if (R) {
      (0, M.D)(j);
      return
    }
    if (i) {
      T();
      return
    }(0, eC.Z)()
  }, O = () => {
    if (A) {
      (0, M.Z)(() => (0, H.Z)(u));
      return
    }(0, H.Z)(u)
  }, P = (e, t) => {
    let {
      onClick: n,
      ...l
    } = null != e ? e : {
      onClick: void 0
    }, i = null != u && !A;
    return (0, s.jsx)(et.O, {
      ...l,
      centerButton: !0,
      disabled: o || !r,
      className: eN.controlButton,
      hasPermission: r,
      streamActive: null != u,
      isSelfStream: !0,
      onPopoutClick: i ? function(e) {
        g.hqStreamingIsEnabled && !g.hqStreamingPopoutDismissed && (0, z.pM)(!0), null == n || n(e)
      } : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      premiumGlow: C && g.hqStreamingIsEnabled,
      buttonRef: I,
      onClick: null != u ? O : L
    })
  };
  return A ? P() : (0, s.jsxs)(s.Fragment, {
    children: [C && g.hqStreamingIsEnabled ? (0, s.jsx)(Y.$, {
      buttonRef: I,
      dismissed: g.hqStreamingPopoutDismissed,
      onDismiss: () => {
        (0, z.pM)(!0)
      }
    }) : (0, s.jsx)(W.be, {
      channel: t,
      buttonRef: I,
      dismissed: g.hqStreamingOptInPopoutDismissed,
      onDismiss: () => {
        (0, z.qA)(!0)
      }
    }), (0, s.jsx)(K.Z, {
      children: (0, s.jsx)(p.Popout, {
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, s.jsx)(q.Z, {
            children: (0, s.jsx)(eg.Z, {
              channel: t,
              currentUser: n,
              activeStreams: null != u ? [u] : [],
              handleGoLive: T,
              onClose: l,
              appContext: c
            })
          })
        },
        position: "top",
        align: "center",
        animation: p.Popout.Animation.FADE,
        children: (e, t) => {
          let {
            ...n
          } = e, {
            isShown: l
          } = t;
          return (0, s.jsx)("div", {
            children: P(n, l)
          })
        }
      })
    })]
  })
}

function ev(e) {
  let {
    channel: t
  } = e, n = t.getGuildId();
  return (0, x.Z)(n, t.id) ? (0, s.jsx)("div", {
    className: eN.buttonContainer,
    children: (0, s.jsx)(ep.M, {
      channel: t
    })
  }) : null
}(i = l || (l = {})).ACTIVITY = "ACTIVITY", i.STREAM = "STREAM", i.CALL = "CALL", i.EVENT = "EVENT", i.BROADCAST = "BROADCAST";
let eA = a.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: l,
    channel: i
  } = e, r = (0, m.e7)([R.Z], () => R.Z.getSelectedParticipant(i.id)), {
    reducedMotion: o
  } = a.useContext(p.AccessibilityPreferencesContext), [c, u] = a.useState(!1), h = null == r ? void 0 : r.id, E = (0, m.e7)([el.Z], () => null != h ? el.Z.getActiveStreamForStreamKey(h) : null, [h]), C = (null == r ? void 0 : r.type) === eT.fO.STREAM && null != E && E.ownerId !== (null == n ? void 0 : n.id), _ = (0, m.Wu)([el.Z], () => el.Z.getAllActiveStreamsForChannel(i.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), I = (0, G.qY)(i.id), x = (0, v.zW)(i.id), T = a.useCallback(() => {
    if ((null == r ? void 0 : r.type) === eT.fO.ACTIVITY && r.id === t) return "ACTIVITY";
    if (C) return "STREAM";
    if (null != I) return "EVENT";
    return "CALL"
  }, [r, t, C, I]), [N, Z] = a.useState(T()), S = (0, d.useSpring)({
    opacity: c ? .2 : 1,
    transform: c && !o.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: c ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: c
    },
    onRest: () => {
      Z(T()), u(!1)
    }
  });
  a.useEffect(() => {
    T() !== N && u(!0)
  }, [N, T]);
  let M = a.useCallback(() => {
      if (null != E)(0, f.g)((0, U.V9)(E));
      else
        for (let e of _)(0, f.g)((0, U.V9)(e))
    }, [_, E]),
    j = (e, t) => {
      let a = {
        centerButton: !0,
        className: eN.controlButton,
        popoutOpen: e
      };
      switch (N) {
        case "ACTIVITY":
          if (null == r || null == n) return;
          return (0, s.jsx)(J.Z, {
            ...a,
            applicationId: r.id,
            color: "red",
            channelId: i.id,
            onPopoutClick: _.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(et.O, {
            ...a,
            hasPermission: !0,
            streamActive: !0,
            color: "red",
            onClick: M,
            onPopoutClick: _.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)($.Z, {
            ...a,
            color: "red",
            onClick: () => null == l ? void 0 : l(),
            onPopoutClick: _.length > 0 ? t : null,
            channel: i
          });
        case "EVENT":
          return (0, s.jsx)(B.Z, {
            channelId: i.id,
            onClick: () => {
              g.default.disconnect(), null == l || l()
            }
          })
      }
    };
  return (0, s.jsx)(p.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return x ? (0, s.jsx)(A.Z, {
        onClose: t
      }) : (0, s.jsx)(eg.Z, {
        channel: i,
        currentUser: n,
        activeStreams: _,
        handleGoLive: ex.VqG,
        hideSelfOptions: !0,
        onClose: t
      })
    },
    position: "top",
    align: "center",
    animation: p.Popout.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: l
      } = t;
      return (0, s.jsx)(d.animated.div, {
        style: S,
        children: j(l, n)
      })
    }
  })
});

function eM(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: i
  } = e, r = (0, _.bp)(), {
    reachedLimit: c,
    limit: u
  } = (0, ed.Z)(t), d = a.useCallback(() => {
    (0, eI.Z)(() => g.default.selectVoiceChannel(t.id, !0), r)
  }, [t.id, r]), h = a.useCallback(() => {
    n ? (0, ef.Z)() : d()
  }, [n, d]), p = (0, m.e7)([ei.Z], () => {
    let e = ei.Z.getCall(t.id);
    return (null == e ? void 0 : e.ringing.includes(i.id)) === !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(en.C, {
      enabled: !0,
      centerButton: !0,
      join: !0,
      color: "green",
      channelLimitReached: c,
      channelLimit: u,
      channel: t,
      cameraUnavailable: n,
      hasPermission: l,
      onCameraUnavailable: h,
      className: eN.controlButton,
      iconClassName: eN.__invalid_joinIcon,
      onChange: d
    }), (0, s.jsx)(Q.Z, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: o()(eN.controlButton, eN.__invalid_lastButton)
    }), p ? (0, s.jsx)(X.Z, {
      color: "red",
      channel: t,
      className: eN.controlButton
    }) : null]
  })
}
t.ZP = function(e) {
  let {
    channel: t,
    className: n,
    onDisconnectCall: l,
    exitFullScreen: i
  } = e, a = (0, m.e7)([er.default], () => {
    let e = er.default.getCurrentUser();
    return u()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: c
  } = (0, eu.Z)(), d = (0, eh.Z)(t), {
    suppress: h,
    selfMute: E,
    mute: g
  } = (0, em.Z)(t), {
    canGoLive: f
  } = (0, m.cj)([es.Z], () => ({
    canGoLive: (0, k.Z)(es.Z)
  })), _ = (0, b.Z)(), x = (0, m.e7)([y.Z], () => null != y.Z.getAwaitingRemoteSessionInfo()), Z = null != _, S = (0, m.e7)([ea.Z], () => {
    var e;
    return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : ea.Z.getVoiceChannelId()) === t.id
  }), v = (0, j.Z)(t, !0), A = (0, m.e7)([I.ZP], () => {
    let e = I.ZP.getSelfEmbeddedActivityForChannel(t.id);
    return null != e ? e.applicationId : null
  }), {
    reachedLimit: M,
    limit: R
  } = (0, ed.Z)(t), {
    analyticsLocations: D
  } = (0, N.ZP)(T.Z.VOICE_CONTROL_TRAY);
  if (!S) return (0, s.jsx)(N.Gt, {
    value: D,
    children: (0, s.jsx)(eM, {
      channel: t,
      cameraUnavailable: r,
      hasCameraPermission: d,
      currentUser: a
    })
  });
  let U = ec.BT({
    permission: ex.Plq.ADD_REACTIONS,
    user: a,
    context: t
  }) && !t.isPrivate() && !v;
  return (0, s.jsx)(N.Gt, {
    value: D,
    children: (0, s.jsxs)(C.Z, {
      section: ex.jXE.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eN.eventPromptsContainer,
        children: (0, s.jsx)(V.Z, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: o()(eN.wrapper, n),
        children: [!Z && (0, s.jsx)(p.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(q.Z, {
              children: (0, s.jsx)(O.Z, {
                onClose: t
              })
            })
          },
          position: "top",
          align: "center",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: l
            } = t;
            return (0, s.jsx)(en.C, {
              centerButton: !0,
              hasPermission: d,
              className: eN.controlButton,
              enabled: c,
              cameraUnavailable: r,
              onChange: eZ,
              onCameraUnavailable: ef.Z,
              channelLimitReached: M,
              channelLimit: R,
              popoutOpen: l,
              onPopoutClick: n
            })
          }
        }), !Z && (0, s.jsx)(ev, {
          channel: t
        }), !Z && (0, s.jsx)(eS, {
          channel: t,
          currentUser: a,
          exitFullScreen: i,
          canGoLive: f,
          hasPermission: d
        }), (0, s.jsx)(p.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(q.Z, {
              children: (0, s.jsx)(L.default, {
                onClose: t,
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
              })
            })
          },
          align: "center",
          position: "top",
          animation: p.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: l
            } = t;
            return (0, s.jsx)(ee.Z, {
              centerButton: !0,
              onPopoutClick: Z ? null : n,
              className: eN.controlButton,
              selfMute: E,
              serverMute: g,
              suppress: h,
              popoutOpen: l,
              awaitingRemote: x,
              onClick: () => (0, P.Z)(g, h)
            })
          }
        }), U && !Z ? (0, s.jsx)("div", {
          className: eN.buttonContainer,
          children: (0, s.jsx)(eE.Z, {
            channel: t
          })
        }) : null, (0, s.jsx)(eA, {
          connectedActivityApplicationId: A,
          currentUser: a,
          channel: t,
          onDisconnectCall: l
        })]
      })]
    })
  })
}