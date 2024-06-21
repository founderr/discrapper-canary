n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(287734),
  u = n(40851),
  d = n(358221),
  h = n(659580),
  m = n(793865),
  p = n(575175),
  E = n(258609),
  g = n(74299),
  f = n(924301),
  C = n(459502),
  _ = n(856691),
  I = n(889161),
  x = n(923973),
  T = n(829750),
  N = n(189771),
  Z = n(294629),
  S = n(793319),
  v = n(560688),
  A = n(390322),
  M = n(871499),
  R = n(386e3),
  j = n(25827),
  L = n(314897),
  O = n(131951),
  P = n(496675),
  b = n(944486),
  y = n(594174),
  D = n(881824),
  U = n(471253),
  k = n(922482),
  w = n(200498),
  H = n(146085),
  B = n(88751),
  G = n(427679),
  V = n(71275),
  F = n(600518),
  z = n(485287),
  W = n(754277),
  Y = n(719100),
  K = n(184805),
  q = n(643632),
  X = n(270295),
  Q = n(981631),
  J = n(689938),
  $ = n(428847);

function ee(e) {
  let {
    channel: t,
    appContext: n
  } = e;
  if ((0, Y.Z)(t)) {
    (0, D.Us)(t, n);
    return
  }
  c.default.disconnect()
}

function et(e) {
  var t, n;
  let {
    channel: i
  } = e, s = (0, K.Z)(i.id), [a, c] = (0, X.Z)(i), u = (0, r.e7)([P.Z], () => P.Z.can(Q.Plq.REQUEST_TO_SPEAK, i));
  if (s) return null;
  return (0, l.jsx)(M.d, {
    isActive: a,
    label: (t = a, n = u, t ? J.Z.Messages.AUDIENCE_LOWER_HAND : n ? J.Z.Messages.AUDIENCE_RAISE_HAND_CTA : J.Z.Messages.AUDIENCE_RAISE_HAND_NO_PERMISSION),
    iconComponent: () => (0, l.jsx)(o.HandRequestSpeakIcon, {
      size: "md",
      color: "currentColor",
      className: a ? $.raisedHandButtonIconActive : $.raisedHandButtonIcon
    }),
    onClick: c,
    className: $.buttonSpacing,
    disabled: !u && !a
  })
}
let en = i.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, r.e7)([b.Z], () => b.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, l.jsxs)("div", {
    className: $.container,
    children: [(0, l.jsx)(ea, {
      channelId: t.id
    }), n ? (0, l.jsx)(et, {
      channel: t
    }) : null, (0, l.jsx)(ei, {
      channel: t
    })]
  })
});

function el(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: $.primaryButtonColor,
    className: a()($.buttonSpacing, $.buttonWithTextButton),
    onClick: t,
    children: (0, l.jsxs)("div", {
      className: $.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(o.MicrophoneArrowRightIcon, {
        size: "md",
        color: "currentColor",
        className: $.buttonWithTextIcon
      }), (0, l.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: J.Z.Messages.MODERATOR_RAISE_OWN_HAND
      })]
    })
  })
}

function ei(e) {
  let {
    channel: t,
    onSelect: n
  } = e, i = (0, u.bp)(), {
    canManageGuildEvent: s
  } = (0, I.XJ)(t), c = (0, r.e7)([G.Z], () => G.Z.getStageInstanceByChannel(t.id), [t.id]), d = (0, r.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)), h = (0, r.e7)([b.Z], () => b.Z.getVoiceChannelId() === t.id, [t.id]), {
    suppress: m
  } = (0, Z.Z)(t), p = L.default.getId(), [E] = (0, X.Z)(t), g = B.ZP.isModerator(p, t.id), C = (0, w.B)(t.id), _ = s(d);
  return h ? (g || _) && null != c ? (0, l.jsx)(o.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, l.jsx)(A.Z, {
        children: (0, l.jsx)(o.Menu, {
          navId: "exit-options",
          "aria-label": J.Z.Messages.SET_STATUS,
          onClose: s,
          onSelect: n,
          children: (0, l.jsx)(o.MenuItem, {
            id: "end-stage",
            color: "danger",
            action: () => (0, D.Ev)(t, i),
            label: J.Z.Messages.END_GUILD_EVENT_FOR_EVERYONE,
            icon: o.CircleXIcon
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: o.Popout.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: s
      } = e, {
        isShown: a
      } = n;
      return (0, l.jsx)(M.d, {
        className: $.buttonSpacing,
        label: J.Z.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
        color: "red",
        iconComponent: () => (0, l.jsx)(o.PhoneHangUpIcon, {
          size: "md",
          color: "currentColor"
        }),
        onClick: () => ee({
          channel: t,
          appContext: i
        }),
        onPopoutClick: s,
        popoutOpen: a
      })
    }
  }) : m && !C || E ? (0, l.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: o.Button.Colors.RED,
    className: a()($.buttonSpacing, $.buttonWithTextButton),
    onClick: () => ee({
      channel: t,
      appContext: i
    }),
    children: (0, l.jsxs)("div", {
      className: $.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(o.PhoneHangUpIcon, {
        size: "md",
        color: "currentColor",
        className: $.buttonWithTextIcon
      }), (0, l.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: J.Z.Messages.AUDIENCE_DISCONNECT
      })]
    })
  }) : (0, l.jsx)(M.d, {
    className: $.buttonSpacing,
    label: J.Z.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
    color: "red",
    iconComponent: () => (0, l.jsx)(o.PhoneHangUpIcon, {
      size: "md",
      color: "currentColor"
    }),
    onClick: () => ee({
      channel: t,
      appContext: i
    })
  }) : (0, l.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: o.Button.Colors.GREEN,
    className: a()($.buttonSpacing, $.buttonWithTextButton),
    onClick: () => {
      var e;
      return e = t, void(0, k.TM)(e)
    },
    children: (0, l.jsxs)("div", {
      className: $.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(o.PhoneCallIcon, {
        size: "md",
        color: "currentColor",
        className: $.buttonWithTextIcon
      }), (0, l.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: J.Z.Messages.STAGE_CHANNEL_JOIN
      })]
    })
  })
}

function es(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    color: $.primaryButtonColor,
    className: a()($.buttonSpacing, $.buttonWithTextButton),
    onClick: t,
    children: (0, l.jsxs)("div", {
      className: $.buttonWithTextInnerContainer,
      children: [(0, l.jsx)(o.GroupArrowDownIcon, {
        size: "md",
        color: "currentColor",
        className: $.buttonWithTextIcon
      }), (0, l.jsx)(o.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: J.Z.Messages.MOVE_ME_TO_AUDIENCE
      })]
    })
  })
}

function ea(e) {
  let {
    channelId: t
  } = e, n = (0, r.e7)([W.Z], () => W.Z.isMuted()), i = (0, z.pp)(t), s = (0, r.e7)([W.Z], () => W.Z.shouldPlay());
  return i ? (0, l.jsx)(M.d, {
    isActive: n,
    className: $.buttonSpacing,
    label: n ? J.Z.Messages.STAGE_MUSIC_UNMUTE : J.Z.Messages.STAGE_MUSIC_MUTE,
    iconComponent: () => n ? (0, l.jsx)(o.MusicSlashIcon, {
      size: "md",
      color: "currentColor"
    }) : (0, l.jsx)(o.MusicIcon, {
      size: "md",
      color: "currentColor"
    }),
    onClick: () => (0, F.v)(!n)
  }) : (0, l.jsx)(M.d, {
    isActive: s,
    className: $.buttonSpacing,
    label: s ? J.Z.Messages.STAGE_MUSIC_MUTE : J.Z.Messages.STAGE_MUSIC_UNMUTE,
    iconComponent: () => s ? (0, l.jsx)(o.MusicIcon, {
      size: "md",
      color: "currentColor"
    }) : (0, l.jsx)(o.MusicSlashIcon, {
      size: "md",
      color: "currentColor"
    }),
    onClick: () => (0, F.z)(!s)
  })
}
let er = i.memo(function(e) {
  let {
    channel: t
  } = e, {
    suppress: n,
    selfMute: i,
    mute: s
  } = (0, Z.Z)(t), c = (0, w.B)(t.id), u = (0, r.e7)([E.Z], () => null != E.Z.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: f,
    enabled: C
  } = (0, x.Z)(), _ = (0, N.Z)(t), {
    limit: I,
    reachedLimit: M
  } = (0, T.Z)(t), L = (0, r.e7)([y.default], () => y.default.getCurrentUser()), P = (0, r.e7)([O.Z], () => (0, g.Z)(O.Z)), D = (0, r.e7)([b.Z], () => b.Z.getVoiceChannelId() === t.id, [t.id]), k = (0, r.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]), H = (0, V.PK)(t.id), B = I > 0, G = M && !H || null != k && k.user.id !== (null == L ? void 0 : L.id);
  if (null == L) return null;
  let F = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(A.Z, {
          children: (0, l.jsx)(m.Z, {
            onClose: t
          })
        })
      },
      position: "top",
      align: "center",
      animation: o.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: n
        } = e, {
          isShown: i
        } = t;
        return (0, l.jsx)(j.C, {
          centerButton: !0,
          hasPermission: _,
          enabled: C,
          cameraUnavailable: f,
          onChange: S.r,
          onCameraUnavailable: v.Z,
          channelLimitReached: M,
          channelLimit: I,
          popoutOpen: i,
          onPopoutClick: n
        })
      }
    }), (0, l.jsx)(S.NZ, {
      channel: t,
      currentUser: L,
      exitFullScreen: () => null,
      canGoLive: P,
      hasPermission: _,
      disabled: G
    })]
  });
  return (0, l.jsxs)("div", {
    className: $.container,
    children: [(0, l.jsx)(ea, {
      channelId: t.id
    }), D && (0, l.jsx)(et, {
      channel: t
    }), D && !n ? (0, l.jsxs)("div", {
      className: a()($.avControls, $.buttonSpacing),
      children: [B && I > 0 && F, (0, l.jsx)(o.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, l.jsx)(A.Z, {
            children: (0, l.jsx)(h.default, {
              onClose: t,
              renderInputDevices: !0,
              renderOutputDevices: !0
            })
          })
        },
        align: "center",
        position: "top",
        animation: o.Popout.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: a
          } = e, {
            isShown: r
          } = t;
          return (0, l.jsx)(R.Z, {
            centerButton: !0,
            onPopoutClick: a,
            selfMute: i,
            serverMute: s,
            suppress: n,
            popoutOpen: r,
            onClick: () => (0, p.Z)(s, n),
            awaitingRemote: u
          })
        }
      })]
    }) : null, D && c && n && (0, l.jsx)(el, {
      onClick: () => (0, U.RK)(t, !1)
    }), D && !n && (0, l.jsx)(es, {
      onClick: () => (0, U.yi)(t)
    }), (0, l.jsx)(ei, {
      channel: t
    })]
  })
});

function eo(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsxs)("div", {
    className: $.container,
    children: [(0, l.jsx)(ea, {
      channelId: t.id
    }), (0, l.jsx)(ei, {
      channel: t
    })]
  })
}
t.Z = i.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, i = (0, K.Z)(t.id), s = (0, w.B)(t.id), a = (0, r.e7)([P.Z], () => P.Z.can(H.yP, t), [t]), o = (0, q.Z)(t.id), c = (0, r.e7)([d.Z], () => null != t ? d.Z.getSelectedParticipant(t.id) : null), u = !o && null == c;
  return n ? (0, l.jsx)(eo, {
    channel: t
  }) : i || s ? (0, l.jsxs)("div", {
    className: $.containerColumn,
    children: [(0, l.jsxs)("div", {
      className: $.eventPrompts,
      children: [u ? (0, l.jsx)(C.Z, {
        channelId: null == t ? void 0 : t.id
      }) : null, (0, l.jsx)("div", {
        className: $.separator
      }), u && a ? (0, l.jsx)(_.Z, {
        highlight: !0,
        channel: t
      }) : null, (0, l.jsx)("div", {
        className: $.separator
      })]
    }), (0, l.jsx)(er, {
      channel: t
    })]
  }) : (0, l.jsx)(en, {
    channel: t
  })
})