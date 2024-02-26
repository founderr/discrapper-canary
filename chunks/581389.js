"use strict";
n.r(t), n.d(t, {
  handleToggleVideo: function() {
    return e_
  },
  GoLiveButton: function() {
    return eI
  },
  default: function() {
    return eN
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("627445"),
  d = n.n(o),
  c = n("907002"),
  f = n("446674"),
  h = n("77078"),
  m = n("629109"),
  p = n("987317"),
  E = n("990766"),
  S = n("901582"),
  g = n("244201"),
  C = n("191225"),
  _ = n("372610"),
  I = n("812204"),
  T = n("685665"),
  v = n("713726"),
  x = n("705565"),
  N = n("754493"),
  A = n("234755"),
  M = n("858944"),
  R = n("191145"),
  j = n("598785"),
  L = n("266392"),
  y = n("458685"),
  O = n("338677"),
  P = n("76393"),
  b = n("261552"),
  D = n("161454"),
  U = n("374014"),
  w = n("479788"),
  F = n("375202"),
  k = n("16916"),
  B = n("534222"),
  V = n("147257"),
  G = n("109526"),
  H = n("550410"),
  W = n("124824"),
  Y = n("213943"),
  z = n("742683"),
  K = n("576242"),
  Z = n("54727"),
  X = n("785344"),
  Q = n("954519"),
  q = n("719874"),
  J = n("116439"),
  $ = n("373469"),
  ee = n("950104"),
  et = n("42887"),
  en = n("18494"),
  el = n("697218"),
  ea = n("703370"),
  es = n("991170"),
  ei = n("999180"),
  er = n("830210"),
  eu = n("289180"),
  eo = n("244390"),
  ed = n("252234"),
  ec = n("696405"),
  ef = n("951691"),
  eh = n("19065"),
  em = n("977347"),
  ep = n("799808"),
  eE = n("727284"),
  eS = n("49111"),
  eg = n("99795"),
  eC = n("983127");

function e_(e, t) {
  if (et.default.isVideoEnabled() === e) return;
  let n = () => m.default.setVideoEnabled(e);
  e ? (0, eE.default)(n, t) : n()
}

function eI(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: l,
    canGoLive: a,
    hasPermission: r,
    disabled: u
  } = e, o = (0, g.useAppContext)(), d = (0, f.useStateFromStoresArray)([$.default], () => $.default.getAllActiveStreams()), c = d.find(e => e.ownerId === n.id), m = t.getGuildId(), p = i.useCallback(() => {
    if (null == l || l(), !a) return (0, em.default)();
    (0, ep.default)(m, t.id, eS.AnalyticsPages.GUILD_CHANNEL)
  }, [m, t.id, a, l]), S = (0, f.useStateFromStores)([D.default, ea.default], () => (0, F.default)(D.default, ea.default)), C = (0, N.default)(), _ = (0, x.default)() && null != S, I = () => {
    _ && (null == c ? (0, E.createBroadcastChannelOrStartStream)({
      channelId: t.id,
      pid: null == S ? void 0 : S.pid
    }) : (0, v.startBroadcastForStream)((0, U.encodeStreamKey)(c), null == S ? void 0 : S.pid))
  }, T = () => {
    if (_) {
      (0, M.openStartBroadcastConfirmModal)(I);
      return
    }
    if (a) {
      p();
      return
    }(0, em.default)()
  }, A = () => {
    if (C) {
      (0, M.openStopBroadcastConfirmModal)(() => (0, k.default)(c));
      return
    }(0, k.default)(c)
  }, R = (e, t) => {
    let {
      onClick: n,
      ...l
    } = null != e ? e : {
      onClick: void 0
    }, a = null != c && !C;
    return null != c ? (0, s.jsx)(Q.default, {
      ...l,
      centerButton: !0,
      className: eC.controlButton,
      onClick: A,
      isSelfStream: !0,
      onPopoutClick: a ? n : null,
      popoutOpen: t,
      shouldShowTooltip: !t
    }) : (0, s.jsx)(q.default, {
      ...l,
      centerButton: !0,
      className: eC.controlButton,
      hasPermission: r,
      onClick: T,
      onPopoutClick: a ? n : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      disabled: u
    })
  };
  return C ? R() : (0, s.jsx)(H.default, {
    children: (0, s.jsx)(h.Popout, {
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, s.jsx)(W.default, {
          children: (0, s.jsx)(ef.default, {
            channel: t,
            currentUser: n,
            activeStreams: null != c ? [c] : [],
            handleGoLive: p,
            onClose: l,
            appContext: o
          })
        })
      },
      position: "top",
      align: "center",
      animation: h.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          ...n
        } = e, {
          isShown: l
        } = t;
        return (0, s.jsx)("div", {
          children: R(n, l)
        })
      }
    })
  })
}

function eT(e) {
  let {
    channel: t
  } = e, n = t.getGuildId(), l = (0, _.default)(n, t.id);
  return l ? (0, s.jsx)("div", {
    className: eC.buttonContainer,
    children: (0, s.jsx)(ed.CenterControlTrayActivityButton, {
      channel: t
    })
  }) : null
}(a = l || (l = {})).ACTIVITY = "ACTIVITY", a.STREAM = "STREAM", a.CALL = "CALL", a.EVENT = "EVENT", a.BROADCAST = "BROADCAST";
let ev = i.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: l,
    channel: a
  } = e, r = (0, f.useStateFromStores)([R.default], () => R.default.getSelectedParticipant(a.id)), {
    reducedMotion: u
  } = i.useContext(h.AccessibilityPreferencesContext), [o, d] = i.useState(!1), m = null == r ? void 0 : r.id, S = (0, f.useStateFromStores)([$.default], () => null != m ? $.default.getActiveStreamForStreamKey(m) : null, [m]), g = (null == r ? void 0 : r.type) === eg.ParticipantTypes.STREAM && null != S && S.ownerId !== (null == n ? void 0 : n.id), C = (0, f.useStateFromStoresArray)([$.default], () => $.default.getAllActiveStreamsForChannel(a.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), _ = (0, B.useActiveEvent)(a.id), I = (0, N.useIsBroadcastingInChannel)(a.id), T = i.useCallback(() => {
    if ((null == r ? void 0 : r.type) === eg.ParticipantTypes.ACTIVITY && r.id === t) return "ACTIVITY";
    if (g) return "STREAM";
    if (null != _) return "EVENT";
    return "CALL"
  }, [r, t, g, _]), [v, x] = i.useState(T()), M = (0, c.useSpring)({
    opacity: o ? .2 : 1,
    transform: o && !u.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: o ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: o
    },
    onRest: () => {
      x(T()), d(!1)
    }
  });
  i.useEffect(() => {
    let e = T();
    e !== v && d(!0)
  }, [v, T]);
  let j = i.useCallback(() => {
      if (null != S)(0, E.stopStream)((0, U.encodeStreamKey)(S));
      else
        for (let e of C)(0, E.stopStream)((0, U.encodeStreamKey)(e))
    }, [C, S]),
    L = (e, t) => {
      let i = {
        centerButton: !0,
        className: eC.controlButton,
        popoutOpen: e
      };
      switch (v) {
        case "ACTIVITY":
          if (null == r || null == n) return;
          return (0, s.jsx)(K.default, {
            ...i,
            applicationId: r.id,
            color: "red",
            channelId: a.id,
            onPopoutClick: C.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(Q.default, {
            ...i,
            color: "red",
            onClick: j,
            onPopoutClick: C.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)(Z.default, {
            ...i,
            color: "red",
            onClick: () => null == l ? void 0 : l(),
            onPopoutClick: C.length > 0 ? t : null,
            channel: a
          });
        case "EVENT":
          return (0, s.jsx)(V.default, {
            channelId: a.id,
            onClick: () => {
              p.default.disconnect(), null == l || l()
            }
          })
      }
    };
  return (0, s.jsx)(h.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return I ? (0, s.jsx)(A.default, {
        onClose: t
      }) : (0, s.jsx)(ef.default, {
        channel: a,
        currentUser: n,
        activeStreams: C,
        handleGoLive: eS.NOOP_NULL,
        hideSelfOptions: !0,
        onClose: t
      })
    },
    position: "top",
    align: "center",
    animation: h.Popout.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: l
      } = t;
      return (0, s.jsx)(c.animated.div, {
        style: M,
        children: L(l, n)
      })
    }
  })
});

function ex(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: a
  } = e, r = (0, g.useAppContext)(), {
    reachedLimit: o,
    limit: d
  } = (0, er.default)(t), c = i.useCallback(() => {
    (0, eE.default)(() => p.default.selectVoiceChannel(t.id, !0), r)
  }, [t.id, r]), h = i.useCallback(() => {
    p.default.selectVoiceChannel(t.id, !1)
  }, [t.id]), m = i.useCallback(() => {
    n ? (0, eh.default)() : c()
  }, [n, c]), E = (0, f.useStateFromStores)([ee.default], () => {
    let e = ee.default.getCall(t.id);
    return (null == e ? void 0 : e.ringing.includes(a.id)) === !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(J.default, {
      enabled: !0,
      centerButton: !0,
      join: !0,
      color: "green",
      channelLimitReached: o,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: l,
      onCameraUnavailable: m,
      className: eC.controlButton,
      iconClassName: eC.joinIcon,
      onChange: c
    }), (0, s.jsx)(z.default, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: u(eC.controlButton, eC.lastButton),
      onClick: h
    }), E ? (0, s.jsx)(Y.default, {
      color: "red",
      channel: t,
      className: eC.controlButton
    }) : null]
  })
}
var eN = function(e) {
  let {
    channel: t,
    className: n,
    onDisconnectCall: l,
    exitFullScreen: a
  } = e, i = (0, f.useStateFromStores)([el.default], () => {
    let e = el.default.getCurrentUser();
    return d(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: o
  } = (0, ei.default)(), c = (0, eu.default)(t), {
    suppress: m,
    selfMute: p,
    mute: E
  } = (0, eo.default)(t), {
    canGoLive: g
  } = (0, f.useStateFromStoresObject)([et.default], () => ({
    canGoLive: (0, w.default)(et.default)
  })), _ = (0, b.default)(), v = (0, f.useStateFromStores)([P.default], () => null != P.default.getAwaitingRemoteSessionInfo()), x = null != _, N = (0, f.useStateFromStores)([en.default], () => {
    var e;
    return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : en.default.getVoiceChannelId()) === t.id
  }), A = (0, j.default)(t, !0), M = (0, f.useStateFromStores)([C.default], () => {
    let e = C.default.getSelfEmbeddedActivityForChannel(t.id);
    return null != e ? e.applicationId : null
  }), {
    reachedLimit: R,
    limit: D
  } = (0, er.default)(t), {
    AnalyticsLocationProvider: U
  } = (0, T.default)(I.default.VOICE_CONTROL_TRAY);
  if (!N) return (0, s.jsx)(U, {
    children: (0, s.jsx)(ex, {
      channel: t,
      cameraUnavailable: r,
      hasCameraPermission: c,
      currentUser: i
    })
  });
  let F = es.default.can({
    permission: eS.Permissions.ADD_REACTIONS,
    user: i,
    context: t
  }) && !t.isPrivate() && !A;
  return (0, s.jsx)(U, {
    children: (0, s.jsxs)(S.default, {
      section: eS.AnalyticsSections.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eC.eventPromptsContainer,
        children: (0, s.jsx)(G.default, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: u(eC.wrapper, n),
        children: [!x && (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(W.default, {
              children: (0, s.jsx)(y.default, {
                onClose: t
              })
            })
          },
          position: "top",
          align: "center",
          animation: h.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: l
            } = t;
            return (0, s.jsx)(J.default, {
              centerButton: !0,
              hasPermission: c,
              className: eC.controlButton,
              enabled: o,
              cameraUnavailable: r,
              onChange: e_,
              onCameraUnavailable: eh.default,
              channelLimitReached: R,
              channelLimit: D,
              popoutOpen: l,
              onPopoutClick: n
            })
          }
        }), !x && (0, s.jsx)(eT, {
          channel: t
        }), !x && (0, s.jsx)(eI, {
          channel: t,
          currentUser: i,
          exitFullScreen: a,
          canGoLive: g,
          hasPermission: c
        }), (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(W.default, {
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
          animation: h.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: l
            } = t;
            return (0, s.jsx)(X.default, {
              centerButton: !0,
              onPopoutClick: x ? null : n,
              className: eC.controlButton,
              selfMute: p,
              serverMute: E,
              suppress: m,
              popoutOpen: l,
              awaitingRemote: v,
              onClick: () => (0, O.default)(E, m)
            })
          }
        }), F && !x ? (0, s.jsx)("div", {
          className: eC.buttonContainer,
          children: (0, s.jsx)(ec.default, {
            channel: t
          })
        }) : null, (0, s.jsx)(ev, {
          connectedActivityApplicationId: M,
          currentUser: i,
          channel: t,
          onDisconnectCall: l
        })]
      })]
    })
  })
}