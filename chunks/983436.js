"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("287734"),
  i = n("475468"),
  r = n("358555"),
  o = n("944486"),
  u = n("914010"),
  d = n("197409"),
  c = n("626135"),
  f = n("981631"),
  E = n("689938"),
  _ = n("558338");

function m(e) {
  var t;
  let {
    guild: n,
    channel: m,
    messageData: T
  } = e, I = u.default.getGuildId(), p = o.default.getChannelId(I), h = a.useCallback(() => {
    var e;
    c.default.track(f.AnalyticEvents.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null === (e = T.author) || void 0 === e ? void 0 : e.id,
      link_guild_id: n.id,
      link_channel_id: m.id,
      link_channel_type: m.type,
      guild_id: I,
      channel_id: p
    }), (0, i.transitionToChannel)(n.id, m.id), l.default.selectVoiceChannel(m.id)
  }, [null === (t = T.author) || void 0 === t ? void 0 : t.id, n.id, m.id, m.type, I, p]), N = (0, s.jsx)(d.default.Channel, {
    channel: m
  });
  return (0, s.jsx)(d.default, {
    children: (0, s.jsxs)(d.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: _.headerLine,
        children: [(0, s.jsx)(d.default.Icon, {
          guild: n
        }), (0, s.jsx)(d.default.Info, {
          title: N,
          onClick: h,
          children: (0, s.jsxs)("span", {
            className: _.infoTitle,
            children: [E.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
              guildName: n.name
            }), (0, s.jsx)("span", {
              className: _.infoBadge,
              children: (0, s.jsx)(r.default, {
                guild: n,
                isBannerVisible: !1
              })
            })]
          })
        })]
      }), (0, s.jsx)(d.default.Button, {
        onClick: h,
        color: d.default.Button.Colors.GREEN,
        children: m.isGuildStageVoice() ? E.default.Messages.STAGE_CHANNEL_JOIN : E.default.Messages.JOIN_VOICE
      })]
    })
  })
}