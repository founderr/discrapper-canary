"use strict";
n.r(t), n.d(t, {
  GuildEventShareButton: function() {
    return N
  },
  GuildEventInterestedButton: function() {
    return v
  },
  GuildEventLurkerInterestedButton: function() {
    return g
  },
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  s = n("884691"),
  u = n("862337"),
  i = n("77078"),
  a = n("660279"),
  o = n("36694"),
  r = n("83900"),
  d = n("433487"),
  c = n("491920"),
  E = n("745049"),
  f = n("782340"),
  h = n("169199");

function C(e) {
  let {
    text: t,
    disabled: n,
    onJoinClick: s
  } = e;
  return (0, l.jsx)(i.Button, {
    className: h.button,
    size: i.Button.Sizes.SMALL,
    onClick: s,
    color: i.Button.Colors.GREEN,
    disabled: n,
    children: t
  })
}

function N(e) {
  let {
    onInviteClick: t,
    canInvite: n,
    isChannelPublic: a
  } = e, d = new u.Timeout, [E, C] = s.useState(!1);
  s.useEffect(() => () => {
    d.stop()
  }, []);
  let N = e => {
    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
  };
  return null == t ? null : (0, l.jsx)(i.Tooltip, {
    text: I(n, a),
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": f.default.Messages.SHARE_LINK,
    children: e => n && a ? (0, l.jsxs)(i.Button, {
      ...e,
      className: h.button,
      innerClassName: h.innerButton,
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.SMALL,
      onClick: t,
      children: [(0, l.jsx)(c.default, {
        width: 16,
        height: 16
      }), f.default.Messages.SHARE]
    }) : (0, l.jsxs)(i.Button, {
      ...e,
      className: h.button,
      innerClassName: h.innerButton,
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.SMALL,
      disabled: E,
      look: E ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
      onClick: N,
      children: [E ? (0, l.jsx)(o.default, {
        width: 16,
        height: 16
      }) : (0, l.jsx)(r.default, {
        width: 16,
        height: 16
      }), E ? f.default.Messages.COPIED : f.default.Messages.SHARE]
    })
  })
}

function v(e) {
  let {
    isUserRsvped: t,
    isUserLurking: n,
    onRsvpClick: s,
    ...u
  } = e, r = t && !n;
  return (0, l.jsxs)(i.Button, {
    ...u,
    className: h.button,
    innerClassName: h.innerButton,
    size: i.Button.Sizes.SMALL,
    onClick: s,
    color: i.Button.Colors.PRIMARY,
    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
    disabled: n,
    children: [r ? (0, l.jsx)(o.default, {
      width: 16,
      height: 16
    }) : (0, l.jsx)(a.default, {
      width: 16,
      height: 16
    }), f.default.Messages.INDICATE_RSVP]
  })
}

function g(e) {
  return (0, l.jsx)(i.Tooltip, {
    text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": f.default.Messages.SHARE_LINK,
    children: t => (0, l.jsx)(v, {
      ...t,
      ...e
    })
  })
}
let S = e => null == e || e,
  I = (e, t) => S(e) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : S(t) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

function L(e) {
  let {
    isActive: t,
    isUserLurking: n,
    rsvped: s,
    canInvite: u,
    isChannelPublic: a = !0,
    entityType: o,
    onContextMenu: r,
    onJoinClick: c,
    onRsvpClick: S,
    onStartClick: I,
    onInviteClick: L,
    onEndClick: _,
    isJoined: m = !1
  } = e, T = void 0 !== c;
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [null != r ? (0, l.jsx)(i.Tooltip, {
      text: f.default.Messages.MORE,
      position: "top",
      "aria-label": f.default.Messages.EDIT,
      children: e => (0, l.jsx)(i.Clickable, {
        ...e,
        onClick: r,
        className: h.iconButton,
        children: (0, l.jsx)(d.default, {
          width: 20,
          height: 20,
          className: h.icon
        })
      })
    }) : null, (0, l.jsx)(N, {
      onInviteClick: L,
      canInvite: u,
      isChannelPublic: a
    }), t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(C, {
      text: function(e) {
        let {
          isJoined: t,
          canJoin: n,
          isVoiceChannel: l
        } = e;
        return n ? t ? f.default.Messages.GO_TO_CHANNEL : l ? f.default.Messages.GUILD_EVENT_JOIN : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : f.default.Messages.CHANNEL_LOCKED_SHORT
      }({
        isJoined: m,
        canJoin: T,
        isVoiceChannel: o === E.GuildScheduledEventEntityTypes.VOICE
      }),
      disabled: !T,
      onJoinClick: c
    }) : null, n && !t && (0, l.jsx)(g, {
      isUserRsvped: s,
      isUserLurking: n
    }), !n && !t && null != S && (0, l.jsx)(v, {
      isUserRsvped: s,
      isUserLurking: n,
      onRsvpClick: S
    }), t || null == I ? null : (0, l.jsx)(i.Button, {
      className: h.button,
      innerClassName: h.innerButton,
      size: i.Button.Sizes.SMALL,
      onClick: I,
      color: i.Button.Colors.GREEN,
      children: f.default.Messages.START
    }), t && null != _ ? (0, l.jsx)(i.Button, {
      className: h.button,
      innerClassName: h.innerButton,
      size: i.Button.Sizes.SMALL,
      onClick: _,
      color: i.Button.Colors.PRIMARY,
      children: f.default.Messages.END_EVENT
    }) : null]
  })
}