n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250),
  i = n(470079),
  l = n(287734),
  a = n(475468),
  r = n(358555),
  o = n(944486),
  c = n(914010),
  u = n(197409),
  d = n(626135),
  E = n(981631),
  _ = n(689938),
  I = n(637091);

function T(e) {
  var t;
  let {
    guild: n,
    channel: T,
    messageData: m
  } = e, N = c.Z.getGuildId(), h = o.Z.getChannelId(N), C = i.useCallback(() => {
    var e;
    d.default.track(E.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null === (e = m.author) || void 0 === e ? void 0 : e.id,
      link_guild_id: n.id,
      link_channel_id: T.id,
      link_channel_type: T.type,
      guild_id: N,
      channel_id: h
    }), (0, a.K)(n.id, T.id), l.default.selectVoiceChannel(T.id)
  }, [null === (t = m.author) || void 0 === t ? void 0 : t.id, n.id, T.id, T.type, N, h]), S = (0, s.jsx)(u.Z.Channel, {
    channel: T
  });
  return (0, s.jsx)(u.Z, {
    children: (0, s.jsxs)(u.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: I.headerLine,
        children: [(0, s.jsx)(u.Z.Icon, {
          guild: n
        }), (0, s.jsx)(u.Z.Info, {
          title: S,
          onClick: C,
          children: (0, s.jsxs)("span", {
            className: I.infoTitle,
            children: [_.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
              guildName: n.name
            }), (0, s.jsx)("span", {
              className: I.infoBadge,
              children: (0, s.jsx)(r.Z, {
                guild: n,
                isBannerVisible: !1
              })
            })]
          })
        })]
      }), (0, s.jsx)(u.Z.Button, {
        onClick: C,
        color: u.Z.Button.Colors.GREEN,
        children: T.isGuildStageVoice() ? _.Z.Messages.STAGE_CHANNEL_JOIN : _.Z.Messages.JOIN_VOICE
      })]
    })
  })
}