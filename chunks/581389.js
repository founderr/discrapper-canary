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
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("627445"),
  d = n.n(u),
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
  O = n("458685"),
  y = n("338677"),
  P = n("76393"),
  b = n("261552"),
  D = n("374014"),
  U = n("479788"),
  w = n("375202"),
  F = n("16916"),
  k = n("534222"),
  V = n("147257"),
  B = n("109526"),
  H = n("550410"),
  G = n("124824"),
  W = n("213943"),
  Y = n("742683"),
  z = n("576242"),
  K = n("54727"),
  Z = n("785344"),
  X = n("954519"),
  J = n("719874"),
  q = n("116439"),
  Q = n("373469"),
  $ = n("950104"),
  ee = n("42887"),
  et = n("568307"),
  en = n("18494"),
  ea = n("697218"),
  el = n("703370"),
  es = n("991170"),
  ei = n("999180"),
  er = n("830210"),
  eo = n("289180"),
  eu = n("244390"),
  ed = n("252234"),
  ec = n("696405"),
  ef = n("951691"),
  eh = n("19065"),
  em = n("977347"),
  ep = n("799808"),
  eE = n("727284"),
  eS = n("49111"),
  eg = n("99795"),
  eC = n("143561");

function e_(e, t) {
  if (ee.default.isVideoEnabled() === e) return;
  let n = () => m.default.setVideoEnabled(e);
  e ? (0, eE.default)(n, t) : n()
}

function eI(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: a,
    canGoLive: l,
    hasPermission: r,
    disabled: o
  } = e, u = (0, g.useAppContext)(), d = (0, f.useStateFromStoresArray)([Q.default], () => Q.default.getAllActiveStreams()), c = d.find(e => e.ownerId === n.id), m = t.getGuildId(), p = i.useCallback(() => {
    if (null == a || a(), !l) return (0, em.default)();
    (0, ep.default)(m, t.id, eS.AnalyticsPages.GUILD_CHANNEL)
  }, [m, t.id, l, a]), S = (0, f.useStateFromStores)([et.default, el.default], () => (0, w.default)(et.default, el.default)), C = (0, N.default)(), _ = (0, x.default)() && null != S, I = () => {
    _ && (null == c ? (0, E.createBroadcastChannelOrStartStream)({
      channelId: t.id,
      pid: null == S ? void 0 : S.pid
    }) : (0, v.startBroadcastForStream)((0, D.encodeStreamKey)(c), null == S ? void 0 : S.pid))
  }, T = () => {
    if (_) {
      (0, M.openStartBroadcastConfirmModal)(I);
      return
    }
    if (l) {
      p();
      return
    }(0, em.default)()
  }, A = () => {
    if (C) {
      (0, M.openStopBroadcastConfirmModal)(() => (0, F.default)(c));
      return
    }(0, F.default)(c)
  }, R = (e, t) => {
    let {
      onClick: n,
      ...a
    } = null != e ? e : {
      onClick: void 0
    }, l = null != c && !C;
    return null != c ? (0, s.jsx)(X.default, {
      ...a,
      centerButton: !0,
      className: eC.controlButton,
      onClick: A,
      isSelfStream: !0,
      onPopoutClick: l ? n : null,
      popoutOpen: t,
      shouldShowTooltip: !t
    }) : (0, s.jsx)(J.default, {
      ...a,
      centerButton: !0,
      className: eC.controlButton,
      hasPermission: r,
      onClick: T,
      onPopoutClick: l ? n : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      disabled: o
    })
  };
  return C ? R() : (0, s.jsx)(H.default, {
    children: (0, s.jsx)(h.Popout, {
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, s.jsx)(G.default, {
          children: (0, s.jsx)(ef.default, {
            channel: t,
            currentUser: n,
            activeStreams: null != c ? [c] : [],
            handleGoLive: p,
            onClose: a,
            appContext: u
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
          isShown: a
        } = t;
        return (0, s.jsx)("div", {
          children: R(n, a)
        })
      }
    })
  })
}

function eT(e) {
  let {
    channel: t
  } = e, n = t.getGuildId(), a = (0, _.default)(n, t.id);
  return a ? (0, s.jsx)("div", {
    className: eC.buttonContainer,
    children: (0, s.jsx)(ed.CenterControlTrayActivityButton, {
      channel: t
    })
  }) : null
}(l = a || (a = {})).ACTIVITY = "ACTIVITY", l.STREAM = "STREAM", l.CALL = "CALL", l.EVENT = "EVENT", l.BROADCAST = "BROADCAST";
let ev = i.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: a,
    channel: l
  } = e, r = (0, f.useStateFromStores)([R.default], () => R.default.getSelectedParticipant(l.id)), {
    reducedMotion: o
  } = i.useContext(h.AccessibilityPreferencesContext), [u, d] = i.useState(!1), m = null == r ? void 0 : r.id, S = (0, f.useStateFromStores)([Q.default], () => null != m ? Q.default.getActiveStreamForStreamKey(m) : null, [m]), g = (null == r ? void 0 : r.type) === eg.ParticipantTypes.STREAM && null != S && S.ownerId !== (null == n ? void 0 : n.id), C = (0, f.useStateFromStoresArray)([Q.default], () => Q.default.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), _ = (0, k.useActiveEvent)(l.id), I = (0, N.useIsBroadcastingInChannel)(l.id), T = i.useCallback(() => {
    if ((null == r ? void 0 : r.type) === eg.ParticipantTypes.ACTIVITY && r.id === t) return "ACTIVITY";
    if (g) return "STREAM";
    if (null != _) return "EVENT";
    return "CALL"
  }, [r, t, g, _]), [v, x] = i.useState(T()), M = (0, c.useSpring)({
    opacity: u ? .2 : 1,
    transform: u && !o.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: u ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: u
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
      if (null != S)(0, E.stopStream)((0, D.encodeStreamKey)(S));
      else
        for (let e of C)(0, E.stopStream)((0, D.encodeStreamKey)(e))
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
          return (0, s.jsx)(z.default, {
            ...i,
            applicationId: r.id,
            color: "red",
            channelId: l.id,
            onPopoutClick: C.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(X.default, {
            ...i,
            color: "red",
            onClick: j,
            onPopoutClick: C.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)(K.default, {
            ...i,
            color: "red",
            onClick: () => null == a ? void 0 : a(),
            onPopoutClick: C.length > 0 ? t : null,
            channel: l
          });
        case "EVENT":
          return (0, s.jsx)(V.default, {
            channelId: l.id,
            onClick: () => {
              p.default.disconnect(), null == a || a()
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
        channel: l,
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
        isShown: a
      } = t;
      return (0, s.jsx)(c.animated.div, {
        style: M,
        children: L(a, n)
      })
    }
  })
});

function ex(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: a,
    currentUser: l
  } = e, r = (0, g.useAppContext)(), {
    reachedLimit: u,
    limit: d
  } = (0, er.default)(t), c = i.useCallback(() => {
    (0, eE.default)(() => p.default.selectVoiceChannel(t.id, !0), r)
  }, [t.id, r]), h = i.useCallback(() => {
    p.default.selectVoiceChannel(t.id, !1)
  }, [t.id]), m = i.useCallback(() => {
    n ? (0, eh.default)() : c()
  }, [n, c]), E = (0, f.useStateFromStores)([$.default], () => {
    let e = $.default.getCall(t.id);
    return (null == e ? void 0 : e.ringing.includes(l.id)) === !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(q.default, {
      enabled: !0,
      centerButton: !0,
      join: !0,
      color: "green",
      channelLimitReached: u,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: a,
      onCameraUnavailable: m,
      className: eC.controlButton,
      iconClassName: eC.joinIcon,
      onChange: c
    }), (0, s.jsx)(Y.default, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: o(eC.controlButton, eC.lastButton),
      onClick: h
    }), E ? (0, s.jsx)(W.default, {
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
    onDisconnectCall: a,
    exitFullScreen: l
  } = e, i = (0, f.useStateFromStores)([ea.default], () => {
    let e = ea.default.getCurrentUser();
    return d(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: u
  } = (0, ei.default)(), c = (0, eo.default)(t), {
    suppress: m,
    selfMute: p,
    mute: E
  } = (0, eu.default)(t), {
    canGoLive: g
  } = (0, f.useStateFromStoresObject)([ee.default], () => ({
    canGoLive: (0, U.default)(ee.default)
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
    AnalyticsLocationProvider: w
  } = (0, T.default)(I.default.VOICE_CONTROL_TRAY);
  if (!N) return (0, s.jsx)(w, {
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
  return (0, s.jsx)(w, {
    children: (0, s.jsxs)(S.default, {
      section: eS.AnalyticsSections.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eC.eventPromptsContainer,
        children: (0, s.jsx)(B.default, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: o(eC.wrapper, n),
        children: [!x && (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(G.default, {
              children: (0, s.jsx)(O.default, {
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
              isShown: a
            } = t;
            return (0, s.jsx)(q.default, {
              centerButton: !0,
              hasPermission: c,
              className: eC.controlButton,
              enabled: u,
              cameraUnavailable: r,
              onChange: e_,
              onCameraUnavailable: eh.default,
              channelLimitReached: R,
              channelLimit: D,
              popoutOpen: a,
              onPopoutClick: n
            })
          }
        }), !x && (0, s.jsx)(eT, {
          channel: t
        }), !x && (0, s.jsx)(eI, {
          channel: t,
          currentUser: i,
          exitFullScreen: l,
          canGoLive: g,
          hasPermission: c
        }), (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(G.default, {
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
              isShown: a
            } = t;
            return (0, s.jsx)(Z.default, {
              centerButton: !0,
              onPopoutClick: x ? null : n,
              className: eC.controlButton,
              selfMute: p,
              serverMute: E,
              suppress: m,
              popoutOpen: a,
              awaitingRemote: v,
              onClick: () => (0, y.default)(E, m)
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
          onDisconnectCall: a
        })]
      })]
    })
  })
}