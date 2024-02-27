"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var s = n("77078"),
  u = n("433487"),
  a = n("707916"),
  i = n("782340"),
  o = n("136275");

function r(e) {
  let {
    isActive: t,
    isUserLurking: n,
    rsvped: r,
    onContextMenu: d,
    onRsvpClick: c,
    onGoToGuildClick: E,
    isDetailsView: f = !1,
    isMember: h,
    onJoinGuildClick: C,
    guildName: g,
    onInviteClick: N,
    canInvite: v,
    isChannelPublic: S
  } = e;
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [null != d ? (0, l.jsx)(s.Tooltip, {
      text: i.default.Messages.MORE,
      position: "top",
      "aria-label": i.default.Messages.EDIT,
      children: e => (0, l.jsx)(s.Clickable, {
        ...e,
        onClick: d,
        className: o.iconButton,
        children: (0, l.jsx)(u.default, {
          width: 20,
          height: 20,
          className: o.icon
        })
      })
    }) : null, h && (0, l.jsx)(a.GuildEventShareButton, {
      onInviteClick: N,
      canInvite: v,
      isChannelPublic: S
    }), n && !t && (0, l.jsx)(a.GuildEventLurkerInterestedButton, {
      isUserRsvped: r,
      isUserLurking: n
    }), h && !n && !t && null != c && (0, l.jsx)(a.GuildEventInterestedButton, {
      isUserRsvped: r,
      isUserLurking: n,
      onRsvpClick: c
    }), h && !n && (!f || t) ? (0, l.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: E,
      color: s.Button.Colors.GREEN,
      children: i.default.Messages.HUB_EVENTS_GO_TO_GUILD
    }) : null, h ? null : (0, l.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: C,
      color: s.Button.Colors.GREEN,
      children: i.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
        guildName: g
      })
    })]
  })
}