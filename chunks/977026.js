"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("987317"),
  d = n("244201"),
  c = n("191145"),
  f = n("266392"),
  h = n("458685"),
  m = n("338677"),
  p = n("76393"),
  E = n("479788"),
  g = n("398604"),
  S = n("109526"),
  C = n("487984"),
  _ = n("817963"),
  I = n("999180"),
  T = n("830210"),
  v = n("289180"),
  x = n("244390"),
  N = n("581389"),
  A = n("19065"),
  M = n("124824"),
  R = n("981913"),
  j = n("785344"),
  L = n("116439"),
  y = n("271938"),
  O = n("42887"),
  P = n("957255"),
  b = n("18494"),
  D = n("697218"),
  U = n("887657"),
  w = n("293137"),
  F = n("381546"),
  k = n("293499"),
  V = n("277174"),
  B = n("711486"),
  G = n("394640"),
  H = n("343571"),
  W = n("751661"),
  Y = n("244480"),
  z = n("716214"),
  K = n("619395"),
  Z = n("923510"),
  Q = n("325861"),
  X = n("834052"),
  q = n("819450"),
  J = n("111542"),
  $ = n("924872"),
  ee = n("274438"),
  et = n("734019"),
  en = n("519581"),
  el = n("58763"),
  ea = n("709752"),
  es = n("49111"),
  ei = n("782340"),
  er = n("198281");

function eu(e) {
  let {
    channel: t,
    appContext: n
  } = e, l = (0, et.default)(t);
  if (l) {
    (0, W.openEndStageModal)(t, n);
    return
  }
  o.default.disconnect()
}

function eo(e) {
  var t, n;
  let {
    channel: a
  } = e, s = (0, en.default)(a.id), [i, u] = (0, ea.default)(a), o = (0, r.useStateFromStores)([P.default], () => P.default.can(es.Permissions.REQUEST_TO_SPEAK, a));
  if (s) return null;
  return (0, l.jsx)(R.CenterControlButton, {
    isActive: i,
    label: (t = i, n = o, t ? ei.default.Messages.AUDIENCE_LOWER_HAND : n ? ei.default.Messages.AUDIENCE_RAISE_HAND_CTA : ei.default.Messages.AUDIENCE_RAISE_HAND_NO_PERMISSION),
    iconComponent: () => (0, l.jsx)(B.default, {
      className: i ? er.raisedHandButtonIconActive : er.raisedHandButtonIcon
    }),
    onClick: u,
    className: er.buttonSpacing,
    disabled: !o && !i
  })
}
let ed = a.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([b.default], () => b.default.getVoiceChannelId() === t.id, [t.id]);
  return (0, l.jsxs)("div", {
    className: er.container,
    children: [(0, l.jsx)(em, {
      channelId: t.id
    }), n ? (0, l.jsx)(eo, {
      channel: t
    }) : null, (0, l.jsx)(ef, {
      channel: t
    })]
  })
});

function ec(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(u.Button, {
    size: u.Button.Sizes.MEDIUM,
    color: er.primaryButtonColor,
    className: i(er.buttonSpacing, er.buttonWithTextButton),
    onClick: t,
    children: (0, l.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(V.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, l.jsx)(u.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.MODERATOR_RAISE_OWN_HAND
      })]
    })
  })
}

function ef(e) {
  let {
    channel: t,
    onSelect: n
  } = e, a = (0, d.useAppContext)(), {
    canManageGuildEvent: s
  } = (0, _.useManageResourcePermissions)(t), o = (0, r.useStateFromStores)([X.default], () => X.default.getStageInstanceByChannel(t.id), [t.id]), c = (0, r.useStateFromStores)([g.default], () => g.default.getGuildScheduledEvent(null == o ? void 0 : o.guild_scheduled_event_id)), f = (0, r.useStateFromStores)([b.default], () => b.default.getVoiceChannelId() === t.id, [t.id]), {
    suppress: h
  } = (0, x.default)(t), m = y.default.getId(), [p] = (0, ea.default)(t), E = Q.default.isModerator(m, t.id), S = (0, K.useCanModerateRequestToSpeak)(t.id), C = s(c);
  return f ? (E || C) && null != o ? (0, l.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, l.jsx)(M.default, {
        children: (0, l.jsx)(u.Menu, {
          navId: "exit-options",
          "aria-label": ei.default.Messages.SET_STATUS,
          onClose: s,
          onSelect: n,
          children: (0, l.jsx)(u.MenuItem, {
            id: "end-stage",
            color: "danger",
            action: () => (0, W.openEndGuildEventConfirmationModal)(t, a),
            label: ei.default.Messages.END_GUILD_EVENT_FOR_EVERYONE,
            icon: F.default
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: u.Popout.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: s
      } = e, {
        isShown: i
      } = n;
      return (0, l.jsx)(R.CenterControlButton, {
        className: er.buttonSpacing,
        label: ei.default.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
        color: "red",
        iconComponent: () => (0, l.jsx)(w.default, {
          height: 24,
          width: 24
        }),
        onClick: () => eu({
          channel: t,
          appContext: a
        }),
        onPopoutClick: s,
        popoutOpen: i
      })
    }
  }) : h && !S || p ? (0, l.jsx)(u.Button, {
    size: u.Button.Sizes.MEDIUM,
    color: u.Button.Colors.RED,
    className: i(er.buttonSpacing, er.buttonWithTextButton),
    onClick: () => eu({
      channel: t,
      appContext: a
    }),
    children: (0, l.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(w.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, l.jsx)(u.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.AUDIENCE_DISCONNECT
      })]
    })
  }) : (0, l.jsx)(R.CenterControlButton, {
    className: er.buttonSpacing,
    label: ei.default.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
    color: "red",
    iconComponent: () => (0, l.jsx)(w.default, {
      height: 24,
      width: 24
    }),
    onClick: () => eu({
      channel: t,
      appContext: a
    })
  }) : (0, l.jsx)(u.Button, {
    size: u.Button.Sizes.MEDIUM,
    color: u.Button.Colors.GREEN,
    className: i(er.buttonSpacing, er.buttonWithTextButton),
    onClick: () => {
      var e;
      return e = t, void(0, z.connectToStage)(e)
    },
    children: (0, l.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(U.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, l.jsx)(u.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.STAGE_CHANNEL_JOIN
      })]
    })
  })
}

function eh(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(u.Button, {
    size: u.Button.Sizes.MEDIUM,
    color: er.primaryButtonColor,
    className: i(er.buttonSpacing, er.buttonWithTextButton),
    onClick: t,
    children: (0, l.jsxs)("div", {
      className: er.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(k.default, {
        height: 24,
        width: 24,
        className: er.buttonWithTextIcon
      }), (0, l.jsx)(u.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ei.default.Messages.MOVE_ME_TO_AUDIENCE
      })]
    })
  })
}

function em(e) {
  let {
    channelId: t
  } = e, n = (0, r.useStateFromStores)([ee.default], () => ee.default.isMuted()), a = (0, $.useShowStageMusicMuteButton)(t), s = (0, r.useStateFromStores)([ee.default], () => ee.default.shouldPlay());
  return a ? (0, l.jsx)(R.CenterControlButton, {
    isActive: n,
    className: er.buttonSpacing,
    label: n ? ei.default.Messages.STAGE_MUSIC_UNMUTE : ei.default.Messages.STAGE_MUSIC_MUTE,
    iconComponent: () => n ? (0, l.jsx)(H.default, {
      height: 24,
      width: 24
    }) : (0, l.jsx)(G.default, {
      height: 24,
      width: 24
    }),
    onClick: () => (0, J.updateStageMusicMuted)(!n)
  }) : (0, l.jsx)(R.CenterControlButton, {
    isActive: s,
    className: er.buttonSpacing,
    label: s ? ei.default.Messages.STAGE_MUSIC_MUTE : ei.default.Messages.STAGE_MUSIC_UNMUTE,
    iconComponent: () => s ? (0, l.jsx)(G.default, {
      height: 24,
      width: 24
    }) : (0, l.jsx)(H.default, {
      height: 24,
      width: 24
    }),
    onClick: () => (0, J.updateStageMusicShouldPlay)(!s)
  })
}
let ep = a.memo(function(e) {
  let {
    channel: t
  } = e, {
    suppress: n,
    selfMute: a,
    mute: s
  } = (0, x.default)(t), o = (0, K.useCanModerateRequestToSpeak)(t.id), d = (0, r.useStateFromStores)([p.default], () => null != p.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: g,
    enabled: S
  } = (0, I.default)(), C = (0, v.default)(t), {
    limit: _,
    reachedLimit: R
  } = (0, T.default)(t), y = (0, r.useStateFromStores)([D.default], () => D.default.getCurrentUser()), P = (0, r.useStateFromStores)([O.default], () => (0, E.default)(O.default)), U = (0, r.useStateFromStores)([b.default], () => b.default.getVoiceChannelId() === t.id, [t.id]), w = (0, r.useStateFromStores)([c.default], () => c.default.getStreamParticipants(t.id)[0], [t.id]), F = (0, q.useStageHasMedia)(t.id), k = _ > 0, V = R && !F || null != w && w.user.id !== (null == y ? void 0 : y.id);
  if (null == y) return null;
  let B = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(M.default, {
          children: (0, l.jsx)(h.default, {
            onClose: t
          })
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: n
        } = e, {
          isShown: a
        } = t;
        return (0, l.jsx)(L.default, {
          centerButton: !0,
          hasPermission: C,
          enabled: S,
          cameraUnavailable: g,
          onChange: N.handleToggleVideo,
          onCameraUnavailable: A.default,
          channelLimitReached: R,
          channelLimit: _,
          popoutOpen: a,
          onPopoutClick: n
        })
      }
    }), (0, l.jsx)(N.GoLiveButton, {
      channel: t,
      currentUser: y,
      exitFullScreen: () => null,
      canGoLive: P,
      hasPermission: C,
      disabled: V
    })]
  });
  return (0, l.jsxs)("div", {
    className: er.container,
    children: [(0, l.jsx)(em, {
      channelId: t.id
    }), U && (0, l.jsx)(eo, {
      channel: t
    }), U && !n ? (0, l.jsxs)("div", {
      className: i(er.avControls, er.buttonSpacing),
      children: [k && _ > 0 && B, (0, l.jsx)(u.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, l.jsx)(M.default, {
            children: (0, l.jsx)(f.default, {
              onClose: t,
              renderInputDevices: !0,
              renderOutputDevices: !0
            })
          })
        },
        align: "center",
        position: "top",
        animation: u.Popout.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: i
          } = e, {
            isShown: r
          } = t;
          return (0, l.jsx)(j.default, {
            centerButton: !0,
            onPopoutClick: i,
            selfMute: a,
            serverMute: s,
            suppress: n,
            popoutOpen: r,
            onClick: () => (0, m.default)(s, n),
            awaitingRemote: d
          })
        }
      })]
    }) : null, U && o && n && (0, l.jsx)(ec, {
      onClick: () => (0, Y.audienceAckRequestToSpeak)(t, !1)
    }), U && !n && (0, l.jsx)(eh, {
      onClick: () => (0, Y.moveSelfToAudience)(t)
    }), (0, l.jsx)(ef, {
      channel: t
    })]
  })
});

function eE(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsxs)("div", {
    className: er.container,
    children: [(0, l.jsx)(em, {
      channelId: t.id
    }), (0, l.jsx)(ef, {
      channel: t
    })]
  })
}
var eg = a.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, a = (0, en.default)(t.id), s = (0, K.useCanModerateRequestToSpeak)(t.id), i = (0, r.useStateFromStores)([P.default], () => P.default.can(Z.MODERATE_STAGE_CHANNEL_PERMISSIONS, t), [t]), u = (0, el.default)(t.id), o = (0, r.useStateFromStores)([c.default], () => null != t ? c.default.getSelectedParticipant(t.id) : null), d = !u && null == o;
  return n ? (0, l.jsx)(eE, {
    channel: t
  }) : a || s ? (0, l.jsxs)("div", {
    className: er.containerColumn,
    children: [(0, l.jsxs)("div", {
      className: er.eventPrompts,
      children: [d ? (0, l.jsx)(S.default, {
        channelId: null == t ? void 0 : t.id
      }) : null, (0, l.jsx)("div", {
        className: er.separator
      }), d && i ? (0, l.jsx)(C.default, {
        highlight: !0,
        channel: t
      }) : null, (0, l.jsx)("div", {
        className: er.separator
      })]
    }), (0, l.jsx)(ep, {
      channel: t
    })]
  }) : (0, l.jsx)(ed, {
    channel: t
  })
})