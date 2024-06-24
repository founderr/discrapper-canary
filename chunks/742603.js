n.d(t, {
  Z: function() {
    return V
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(99690),
  c = n(40851),
  u = n(657305),
  d = n(835473),
  h = n(12498),
  m = n(933557),
  p = n(995123),
  E = n(554747),
  g = n(854698),
  f = n(897669),
  C = n(984370),
  _ = n(910611),
  I = n(454585),
  x = n(134483),
  T = n(210975),
  N = n(809244),
  Z = n(618158),
  S = n(366695),
  v = n(502568),
  A = n(792125),
  M = n(358221),
  R = n(362721),
  j = n(887012),
  L = n(613548),
  O = n(221888),
  P = n(339340),
  b = n(354459),
  y = n(981631),
  D = n(231338),
  U = n(689938),
  k = n(254772),
  w = n(622322);

function H(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, c.bp)(), s = (0, a.e7)([M.Z], () => M.Z.getLayout(n.id, i));
  return (0, l.jsx)(Z.Z, {
    children: (0, l.jsx)(O.Z, {
      className: k.participants,
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === y.IlC.POPOUT || s === y.AEg.FULL_SCREEN
    })
  })
}

function B(e) {
  let {
    user: t,
    channel: n,
    stream: i,
    color: s
  } = e, a = (0, N.Z)(n, t, i);
  return null == t || null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Z, {
      className: k.avatar,
      size: r.AvatarSizes.SIZE_24,
      user: t,
      animate: !1
    }), (0, l.jsx)(r.Text, {
      className: k.playingText,
      variant: "text-md/medium",
      color: s,
      children: a
    })]
  })
}

function G(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: i,
      channel: s
    } = e,
    a = (0, j.Z)(s, !0),
    o = (0, E.qY)(s.id),
    c = null != o ? (0, g.DK)(o) : null,
    d = null != o;
  if ((null == i ? void 0 : i.type) === b.fO.ACTIVITY) null != n && (t = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(v.ZP.Divider, {
      className: k.divider
    }), (0, l.jsx)(S.Z, {
      game: n,
      className: k.activityIcon
    }), (0, l.jsx)(r.Text, {
      className: k.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.Z)(n.name)
    }), a && (0, l.jsx)(H, {
      channel: s,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? void 0 : i.type) === b.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(v.ZP.Divider, {
        className: k.divider
      }), (0, l.jsx)(B, {
        user: e,
        channel: s,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, l.jsx)(H, {
        channel: s,
        focusedParticipant: i
      })]
    })
  } else d && (t = (0, l.jsx)(f.Z, {
    guildEvent: o,
    recurrenceId: c
  }));
  return (0, l.jsx)("div", {
    className: k.container,
    children: t
  })
}

function V(e) {
  let {
    channel: t,
    guild: i,
    appContext: o,
    inCall: c,
    isChatOpen: u,
    exitFullScreen: E
  } = e, {
    focusedParticipant: g
  } = (0, a.cj)([M.Z], () => ({
    focusedParticipant: M.Z.getSelectedParticipant(t.id),
    participantsOpen: M.Z.getParticipantsOpen(t.id)
  }), [t.id]), f = (0, m.ZP)(t), N = (0, p.Z)(t), [Z] = (0, d.Z)((null == g ? void 0 : g.type) === b.fO.ACTIVITY ? [g.id] : []), S = U.Z.Messages.VOICE_CHANNEL;
  t.isDM() ? S = U.Z.Messages.DM : t.isGroupDM() && (S = U.Z.Messages.GROUP_DM);
  let j = (0, a.e7)([h.Z], () => h.Z.getChannelStatus(t)),
    O = t.isGuildVoice() && c && null != j && j.length > 0,
    H = (0, R.Z)(t),
    B = O ? (0, l.jsx)(r.Tooltip, {
      text: U.Z.Messages.VOICE_CHANNEL_SET_STATUS,
      delay: 500,
      position: "bottom",
      shouldShow: H,
      children: e => (0, l.jsxs)(r.Clickable, {
        ...e,
        className: s()(k.channelStatusClickable, {
          [k.hoverable]: H
        }),
        onClick: H ? V : void 0,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: s()(k.channelStatus, w.markup, {
            [k.hoverable]: H
          }),
          children: I.Z.parseVoiceChannelStatus(j, !0, {
            channelId: t.id
          })
        }), H && (0, l.jsx)(r.PencilIcon, {
          size: "custom",
          color: "currentColor",
          className: s()(k.pencilIcon, k.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null;

  function V() {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 339340));
      return n => (0, l.jsx)(e, {
        channel: t,
        ...n
      })
    }, {
      modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY
    })
  }
  let F = (0, T.m$)(t.id);
  return (0, l.jsxs)("div", {
    className: k.subtitleContainer,
    children: [(0, l.jsxs)(v.ZP, {
      onDoubleClick: C.O,
      transparent: !0,
      className: (0, A.Q)(D.BR.DARK),
      childrenBottom: B,
      toolbar: (0, l.jsx)(L.Z, {
        inPopout: o === y.IlC.POPOUT,
        channel: t,
        appContext: o,
        inCall: c,
        isChatOpen: u,
        exitFullScreen: E
      }),
      children: [null != N ? (0, l.jsx)(v.ZP.Icon, {
        icon: N,
        disabled: !0,
        "aria-label": S
      }) : null, (0, l.jsx)(v.ZP.Title, {
        children: (0, l.jsxs)(l.Fragment, {
          children: [f, F && (0, l.jsx)(r.ShieldLockIcon, {
            size: "xxs",
            "aria-label": U.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
            color: r.tokens.colors.INTERACTIVE_NORMAL,
            className: k.secureFramesIcon
          })]
        })
      }), (0, l.jsx)(_.TS, {
        channel: t,
        guild: i
      }), (0, l.jsx)(G, {
        focusedApplication: Z,
        focusedParticipant: g,
        channel: t
      })]
    }), (0, l.jsx)(x.Z, {
      channelId: t.id
    })]
  })
}