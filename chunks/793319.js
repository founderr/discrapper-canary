n.d(t, {
  NZ: function() {
    return eZ
  },
  r: function() {
    return eN
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
  b = n(258609),
  y = n(446226),
  D = n(594190),
  U = n(569545),
  k = n(74299),
  w = n(989941),
  H = n(803647),
  B = n(554747),
  G = n(95764),
  V = n(459502),
  F = n(386542),
  z = n(485731),
  W = n(611845),
  Y = n(618158),
  K = n(390322),
  q = n(791592),
  X = n(136995),
  Q = n(402113),
  J = n(197016),
  $ = n(386e3),
  ee = n(698877),
  et = n(25827),
  en = n(199902),
  el = n(523746),
  ei = n(131951),
  es = n(944486),
  ea = n(594174),
  er = n(449224),
  eo = n(700785),
  ec = n(923973),
  eu = n(829750),
  ed = n(189771),
  eh = n(294629),
  em = n(304745),
  ep = n(985370),
  eE = n(544384),
  eg = n(560688),
  ef = n(127608),
  eC = n(76021),
  e_ = n(173507),
  eI = n(981631),
  ex = n(354459),
  eT = n(559820);

function eN(e, t) {
  if (ei.Z.isVideoEnabled() === e) return;
  let n = () => E.Z.setVideoEnabled(e);
  e ? (0, e_.Z)(n, t) : n()
}

function eZ(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: l,
    canGoLive: i,
    hasPermission: r,
    disabled: o
  } = e, c = (0, _.bp)(), u = (0, m.Wu)([en.Z], () => en.Z.getAllActiveStreams()).find(e => e.ownerId === n.id), {
    available: d,
    activated: E,
    hqStreamingState: g
  } = (0, F.k)(h.q.STREAM_HIGH_QUALITY), C = null != u && d && E, I = a.useRef(null), x = t.getGuildId(), T = a.useCallback(() => {
    if (null == l || l(), !i) return (0, ef.Z)();
    (0, eC.Z)(x, t.id, eI.ZY5.GUILD_CHANNEL)
  }, [x, t.id, i, l]), N = (0, m.e7)([D.ZP, er.Z], () => (0, w.Z)(D.ZP, er.Z)), A = (0, v.ZP)(), R = (0, S.Z)() && null != N, j = () => {
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
    }(0, ef.Z)()
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
    return (0, s.jsx)(ee.O, {
      ...l,
      centerButton: !0,
      disabled: o || !r,
      className: eT.controlButton,
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
    children: [C && g.hqStreamingIsEnabled ? (0, s.jsx)(W.$, {
      buttonRef: I,
      dismissed: g.hqStreamingPopoutDismissed,
      onDismiss: () => {
        (0, z.pM)(!0)
      }
    }) : null, (0, s.jsx)(Y.Z, {
      children: (0, s.jsx)(p.Popout, {
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, s.jsx)(K.Z, {
            children: (0, s.jsx)(eE.Z, {
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

function eS(e) {
  let {
    channel: t
  } = e, n = t.getGuildId();
  return (0, x.Z)(n, t.id) ? (0, s.jsx)("div", {
    className: eT.buttonContainer,
    children: (0, s.jsx)(em.M, {
      channel: t
    })
  }) : null
}(i = l || (l = {})).ACTIVITY = "ACTIVITY", i.STREAM = "STREAM", i.CALL = "CALL", i.EVENT = "EVENT", i.BROADCAST = "BROADCAST";
let ev = a.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: l,
    channel: i
  } = e, r = (0, m.e7)([R.Z], () => R.Z.getSelectedParticipant(i.id)), {
    reducedMotion: o
  } = a.useContext(p.AccessibilityPreferencesContext), [c, u] = a.useState(!1), h = null == r ? void 0 : r.id, E = (0, m.e7)([en.Z], () => null != h ? en.Z.getActiveStreamForStreamKey(h) : null, [h]), C = (null == r ? void 0 : r.type) === ex.fO.STREAM && null != E && E.ownerId !== (null == n ? void 0 : n.id), _ = (0, m.Wu)([en.Z], () => en.Z.getAllActiveStreamsForChannel(i.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), I = (0, B.qY)(i.id), x = (0, v.zW)(i.id), T = a.useCallback(() => {
    if ((null == r ? void 0 : r.type) === ex.fO.ACTIVITY && r.id === t) return "ACTIVITY";
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
        className: eT.controlButton,
        popoutOpen: e
      };
      switch (N) {
        case "ACTIVITY":
          if (null == r || null == n) return;
          return (0, s.jsx)(Q.Z, {
            ...a,
            applicationId: r.id,
            color: "red",
            channelId: i.id,
            onPopoutClick: _.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(ee.O, {
            ...a,
            hasPermission: !0,
            streamActive: !0,
            color: "red",
            onClick: M,
            onPopoutClick: _.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)(J.Z, {
            ...a,
            color: "red",
            onClick: () => null == l ? void 0 : l(),
            onPopoutClick: _.length > 0 ? t : null,
            channel: i
          });
        case "EVENT":
          return (0, s.jsx)(G.Z, {
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
      }) : (0, s.jsx)(eE.Z, {
        channel: i,
        currentUser: n,
        activeStreams: _,
        handleGoLive: eI.VqG,
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

function eA(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: i
  } = e, r = (0, _.bp)(), {
    reachedLimit: c,
    limit: u
  } = (0, eu.Z)(t), d = a.useCallback(() => {
    (0, e_.Z)(() => g.default.selectVoiceChannel(t.id, !0), r)
  }, [t.id, r]), h = a.useCallback(() => {
    n ? (0, eg.Z)() : d()
  }, [n, d]), p = (0, m.e7)([el.Z], () => {
    let e = el.Z.getCall(t.id);
    return (null == e ? void 0 : e.ringing.includes(i.id)) === !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(et.C, {
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
      className: eT.controlButton,
      iconClassName: eT.__invalid_joinIcon,
      onChange: d
    }), (0, s.jsx)(X.Z, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: o()(eT.controlButton, eT.__invalid_lastButton)
    }), p ? (0, s.jsx)(q.Z, {
      color: "red",
      channel: t,
      className: eT.controlButton
    }) : null]
  })
}
t.ZP = function(e) {
  let {
    channel: t,
    className: n,
    onDisconnectCall: l,
    exitFullScreen: i
  } = e, a = (0, m.e7)([ea.default], () => {
    let e = ea.default.getCurrentUser();
    return u()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: c
  } = (0, ec.Z)(), d = (0, ed.Z)(t), {
    suppress: h,
    selfMute: E,
    mute: g
  } = (0, eh.Z)(t), {
    canGoLive: f
  } = (0, m.cj)([ei.Z], () => ({
    canGoLive: (0, k.Z)(ei.Z)
  })), _ = (0, y.Z)(), x = (0, m.e7)([b.Z], () => null != b.Z.getAwaitingRemoteSessionInfo()), Z = null != _, S = (0, m.e7)([es.Z], () => {
    var e;
    return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : es.Z.getVoiceChannelId()) === t.id
  }), v = (0, j.Z)(t, !0), A = (0, m.e7)([I.ZP], () => {
    let e = I.ZP.getSelfEmbeddedActivityForChannel(t.id);
    return null != e ? e.applicationId : null
  }), {
    reachedLimit: M,
    limit: R
  } = (0, eu.Z)(t), {
    analyticsLocations: D
  } = (0, N.ZP)(T.Z.VOICE_CONTROL_TRAY);
  if (!S) return (0, s.jsx)(N.Gt, {
    value: D,
    children: (0, s.jsx)(eA, {
      channel: t,
      cameraUnavailable: r,
      hasCameraPermission: d,
      currentUser: a
    })
  });
  let U = eo.BT({
    permission: eI.Plq.ADD_REACTIONS,
    user: a,
    context: t
  }) && !t.isPrivate() && !v;
  return (0, s.jsx)(N.Gt, {
    value: D,
    children: (0, s.jsxs)(C.Z, {
      section: eI.jXE.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eT.eventPromptsContainer,
        children: (0, s.jsx)(V.Z, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: o()(eT.wrapper, n),
        children: [!Z && (0, s.jsx)(p.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(K.Z, {
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
            return (0, s.jsx)(et.C, {
              centerButton: !0,
              hasPermission: d,
              className: eT.controlButton,
              enabled: c,
              cameraUnavailable: r,
              onChange: eN,
              onCameraUnavailable: eg.Z,
              channelLimitReached: M,
              channelLimit: R,
              popoutOpen: l,
              onPopoutClick: n
            })
          }
        }), !Z && (0, s.jsx)(eS, {
          channel: t
        }), !Z && (0, s.jsx)(eZ, {
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
            return (0, s.jsx)(K.Z, {
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
            return (0, s.jsx)($.Z, {
              centerButton: !0,
              onPopoutClick: Z ? null : n,
              className: eT.controlButton,
              selfMute: E,
              serverMute: g,
              suppress: h,
              popoutOpen: l,
              awaitingRemote: x,
              onClick: () => (0, P.Z)(g, h)
            })
          }
        }), U && !Z ? (0, s.jsx)("div", {
          className: eT.buttonContainer,
          children: (0, s.jsx)(ep.Z, {
            channel: t
          })
        }) : null, (0, s.jsx)(ev, {
          connectedActivityApplicationId: A,
          currentUser: a,
          channel: t,
          onDisconnectCall: l
        })]
      })]
    })
  })
}