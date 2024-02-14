"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("308289"),
  u = n("244201"),
  d = n("204947"),
  c = n("442939"),
  f = n("207273"),
  h = n("679653"),
  m = n("619335"),
  p = n("534222"),
  E = n("822516"),
  S = n("138286"),
  g = n("539938"),
  C = n("557809"),
  _ = n("367376"),
  I = n("616718"),
  T = n("550410"),
  v = n("957255"),
  x = n("953109"),
  N = n("832132"),
  A = n("664336"),
  M = n("439932"),
  R = n("191145"),
  j = n("598785"),
  L = n("2830"),
  O = n("836087"),
  y = n("843624"),
  P = n("99795"),
  b = n("49111"),
  D = n("843455"),
  U = n("782340"),
  w = n("434225"),
  F = n("919163");

function k(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, a = (0, u.useAppContext)(), s = (0, i.useStateFromStores)([R.default], () => R.default.getLayout(n.id, a));
  return (0, l.jsx)(T.default, {
    children: (0, l.jsx)(O.default, {
      className: w.participants,
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: a === b.AppContext.POPOUT || s === b.ChannelLayouts.FULL_SCREEN
    })
  })
}

function V(e) {
  let {
    user: t,
    channel: n,
    stream: a,
    color: s
  } = e, i = (0, I.default)(n, t, a);
  return null == t || null == a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.default, {
      className: w.avatar,
      size: r.AvatarSizes.SIZE_24,
      user: t,
      animate: !1
    }), (0, l.jsx)(r.Text, {
      className: w.playingText,
      variant: "text-md/medium",
      color: s,
      children: i
    })]
  })
}

function B(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: a,
      channel: s
    } = e,
    i = (0, j.default)(s, !0),
    o = (0, p.useActiveEvent)(s.id),
    u = null != o ? (0, E.getNextRecurrenceIdInEvent)(o) : null,
    c = null != o;
  if ((null == a ? void 0 : a.type) === P.ParticipantTypes.ACTIVITY) null != n && (t = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(A.default.Divider, {
      className: w.divider
    }), (0, l.jsx)(x.default, {
      game: n,
      className: w.activityIcon
    }), (0, l.jsx)(r.Text, {
      className: w.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, d.default)(n.name)
    }), i && (0, l.jsx)(k, {
      channel: s,
      focusedParticipant: a
    })]
  }));
  else if ((null == a ? void 0 : a.type) === P.ParticipantTypes.STREAM) {
    let e = a.user,
      n = a.stream;
    t = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(A.default.Divider, {
        className: w.divider
      }), (0, l.jsx)(V, {
        user: e,
        channel: s,
        stream: n,
        color: i ? "header-primary" : "none"
      }), i && (0, l.jsx)(k, {
        channel: s,
        focusedParticipant: a
      })]
    })
  } else c && (t = (0, l.jsx)(S.default, {
    guildEvent: o,
    recurrenceId: u
  }));
  return (0, l.jsx)("div", {
    className: w.container,
    children: t
  })
}

function G(e) {
  let {
    channel: t,
    guild: a,
    appContext: o,
    inCall: u,
    isChatOpen: d,
    exitFullScreen: p
  } = e, {
    focusedParticipant: E
  } = (0, i.useStateFromStoresObject)([R.default], () => ({
    focusedParticipant: R.default.getSelectedParticipant(t.id),
    participantsOpen: R.default.getParticipantsOpen(t.id)
  }), [t.id]), S = (0, h.default)(t), I = (0, m.default)(t), [T] = (0, c.default)((null == E ? void 0 : E.type) === P.ParticipantTypes.ACTIVITY ? [E.id] : []), x = U.default.Messages.VOICE_CHANNEL;
  t.isDM() ? x = U.default.Messages.DM : t.isGroupDM() && (x = U.default.Messages.GROUP_DM);
  let j = (0, i.useStateFromStores)([f.default], () => f.default.getChannelStatus(t)),
    O = t.isGuildVoice() && u && null != j && j.length > 0,
    k = (0, i.useStateFromStores)([v.default], () => v.default.can(b.Permissions.SET_VOICE_CHANNEL_STATUS, t)),
    V = O ? (0, l.jsx)(r.Tooltip, {
      text: U.default.Messages.VOICE_CHANNEL_SET_STATUS,
      delay: 500,
      position: "bottom",
      shouldShow: k,
      children: e => (0, l.jsxs)(r.Clickable, {
        ...e,
        className: s(w.channelStatusClickable, {
          [w.hoverable]: k
        }),
        onClick: k ? G : void 0,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: s(w.channelStatus, F.markup, {
            [w.hoverable]: k
          }),
          children: _.default.parseVoiceChannelStatus(j, !0, {
            channelId: t.id
          })
        }), k && (0, l.jsx)(N.default, {
          className: s(w.pencilIcon, w.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null;

  function G() {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("843624").then(n.bind(n, "843624"));
      return n => (0, l.jsx)(e, {
        channel: t,
        ...n
      })
    }, {
      modalKey: y.VOICE_CHANNEL_STATUS_MODAL_KEY
    })
  }
  return (0, l.jsx)("div", {
    className: w.subtitleContainer,
    children: (0, l.jsxs)(A.default, {
      onDoubleClick: g.handleDoubleClick,
      transparent: !0,
      className: (0, M.getThemeClass)(D.ThemeTypes.DARK),
      childrenBottom: V,
      toolbar: (0, l.jsx)(L.default, {
        inPopout: o === b.AppContext.POPOUT,
        channel: t,
        appContext: o,
        inCall: u,
        isChatOpen: d,
        exitFullScreen: p
      }),
      children: [null != I ? (0, l.jsx)(A.default.Icon, {
        icon: I,
        disabled: !0,
        "aria-label": x
      }) : null, (0, l.jsx)(A.default.Title, {
        children: S
      }), (0, l.jsx)(C.HeaderGuildBreadcrumb, {
        channel: t,
        guild: a
      }), (0, l.jsx)(B, {
        focusedApplication: T,
        focusedParticipant: E,
        channel: t
      })]
    })
  })
}