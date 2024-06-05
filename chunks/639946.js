"use strict";
n.r(t), n.d(t, {
  GuildScheduledEventInviteHeader: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  i = n("471445"),
  l = n("742593"),
  r = n("962716");

function o(e) {
  let {
    channel: t
  } = e, n = (0, i.getSimpleChannelIconComponent)(t.type);
  return (0, s.jsxs)("div", {
    className: r.channelInfoContainer,
    children: [null != n ? (0, s.jsx)(n, {
      width: 20,
      height: 20
    }) : null, (0, s.jsx)(a.Text, {
      className: r.channelInfoText,
      color: "none",
      variant: "text-sm/semibold",
      children: t.name
    })]
  })
}

function u(e) {
  let {
    channel: t,
    guildScheduledEvent: n
  } = e;
  return (0, s.jsxs)("div", {
    className: r.container,
    children: [(0, s.jsx)(l.GuildEventStatus, {
      className: r.statusContainer,
      guildId: n.guild_id,
      guildEventId: n.id,
      eventPreview: n
    }), (0, s.jsx)(l.GuildEventDetails, {
      name: n.name,
      description: n.description,
      guildId: n.guild_id
    }), null != t && n.channel_id === t.id ? (0, s.jsx)(o, {
      channel: t
    }) : null]
  })
}