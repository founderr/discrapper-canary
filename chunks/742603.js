n.d(t, {
  Z: function() {
    return G
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
  T = n(809244),
  N = n(618158),
  Z = n(366695),
  S = n(502568),
  v = n(792125),
  A = n(358221),
  M = n(362721),
  R = n(887012),
  j = n(613548),
  L = n(221888),
  O = n(339340),
  P = n(354459),
  y = n(981631),
  b = n(231338),
  D = n(689938),
  U = n(254772),
  k = n(25450);

function w(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, c.bp)(), s = (0, a.e7)([A.Z], () => A.Z.getLayout(n.id, i));
  return (0, l.jsx)(N.Z, {
    children: (0, l.jsx)(L.Z, {
      className: U.participants,
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === y.IlC.POPOUT || s === y.AEg.FULL_SCREEN
    })
  })
}

function H(e) {
  let {
    user: t,
    channel: n,
    stream: i,
    color: s
  } = e, a = (0, T.Z)(n, t, i);
  return null == t || null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Z, {
      className: U.avatar,
      size: r.AvatarSizes.SIZE_24,
      user: t,
      animate: !1
    }), (0, l.jsx)(r.Text, {
      className: U.playingText,
      variant: "text-md/medium",
      color: s,
      children: a
    })]
  })
}

function B(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: i,
      channel: s
    } = e,
    a = (0, R.Z)(s, !0),
    o = (0, E.qY)(s.id),
    c = null != o ? (0, g.DK)(o) : null,
    d = null != o;
  if ((null == i ? void 0 : i.type) === P.fO.ACTIVITY) null != n && (t = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(S.ZP.Divider, {
      className: U.divider
    }), (0, l.jsx)(Z.Z, {
      game: n,
      className: U.activityIcon
    }), (0, l.jsx)(r.Text, {
      className: U.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.Z)(n.name)
    }), a && (0, l.jsx)(w, {
      channel: s,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? void 0 : i.type) === P.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.ZP.Divider, {
        className: U.divider
      }), (0, l.jsx)(H, {
        user: e,
        channel: s,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, l.jsx)(w, {
        channel: s,
        focusedParticipant: i
      })]
    })
  } else d && (t = (0, l.jsx)(f.Z, {
    guildEvent: o,
    recurrenceId: c
  }));
  return (0, l.jsx)("div", {
    className: U.container,
    children: t
  })
}

function G(e) {
  let {
    channel: t,
    guild: i,
    appContext: o,
    inCall: c,
    isChatOpen: u,
    exitFullScreen: E
  } = e, {
    focusedParticipant: g
  } = (0, a.cj)([A.Z], () => ({
    focusedParticipant: A.Z.getSelectedParticipant(t.id),
    participantsOpen: A.Z.getParticipantsOpen(t.id)
  }), [t.id]), f = (0, m.ZP)(t), T = (0, p.Z)(t), [N] = (0, d.Z)((null == g ? void 0 : g.type) === P.fO.ACTIVITY ? [g.id] : []), Z = D.Z.Messages.VOICE_CHANNEL;
  t.isDM() ? Z = D.Z.Messages.DM : t.isGroupDM() && (Z = D.Z.Messages.GROUP_DM);
  let R = (0, a.e7)([h.Z], () => h.Z.getChannelStatus(t)),
    L = t.isGuildVoice() && c && null != R && R.length > 0,
    w = (0, M.Z)(t),
    H = L ? (0, l.jsx)(r.Tooltip, {
      text: D.Z.Messages.VOICE_CHANNEL_SET_STATUS,
      delay: 500,
      position: "bottom",
      shouldShow: w,
      children: e => (0, l.jsxs)(r.Clickable, {
        ...e,
        className: s()(U.channelStatusClickable, {
          [U.hoverable]: w
        }),
        onClick: w ? G : void 0,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: s()(U.channelStatus, k.markup, {
            [U.hoverable]: w
          }),
          children: I.Z.parseVoiceChannelStatus(R, !0, {
            channelId: t.id
          })
        }), w && (0, l.jsx)(r.PencilIcon, {
          size: "custom",
          color: "currentColor",
          className: s()(U.pencilIcon, U.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null;

  function G() {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 339340));
      return n => (0, l.jsx)(e, {
        channel: t,
        ...n
      })
    }, {
      modalKey: O.VOICE_CHANNEL_STATUS_MODAL_KEY
    })
  }
  return (0, l.jsxs)("div", {
    className: U.subtitleContainer,
    children: [(0, l.jsxs)(S.ZP, {
      onDoubleClick: C.O,
      transparent: !0,
      className: (0, v.Q)(b.BR.DARK),
      childrenBottom: H,
      toolbar: (0, l.jsx)(j.Z, {
        inPopout: o === y.IlC.POPOUT,
        channel: t,
        appContext: o,
        inCall: c,
        isChatOpen: u,
        exitFullScreen: E
      }),
      children: [null != T ? (0, l.jsx)(S.ZP.Icon, {
        icon: T,
        disabled: !0,
        "aria-label": Z
      }) : null, (0, l.jsx)(S.ZP.Title, {
        children: f
      }), (0, l.jsx)(_.TS, {
        channel: t,
        guild: i
      }), (0, l.jsx)(B, {
        focusedApplication: N,
        focusedParticipant: g,
        channel: t
      })]
    }), (0, l.jsx)(x.Z, {
      channelId: t.id
    })]
  })
}