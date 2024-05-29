"use strict";
n.r(t), n.d(t, {
  GAMING_BADGES: function() {
    return f
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("561308"),
  i = n("297781"),
  r = n("443487"),
  o = n("43205"),
  u = n("265048"),
  d = n("689938"),
  c = n("571425");
let f = [i.GameTimestampBadge, i.VoiceChannelBadge, i.NewReleaseBadge, i.NewGameBadge, i.StreakBadge, i.TrendingBadge, i.ResurrectedBadge, i.MarathonBadge];
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    iconUrl: h
  } = (0, u.useGamingContentData)(t);
  return (0, a.jsxs)(r.Card, {
    selected: l,
    children: [(0, a.jsxs)(r.CardInfoSection, {
      children: [(0, a.jsx)(r.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(r.CardTitle, {
        children: function(e) {
          return (0, s.isEntryActive)(e) ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(i.BadgesContainer, {
        location: i.BadgeLocation.CARD,
        children: f.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(o.ContentImage, {
      src: h,
      size: 48,
      className: c.thumbnail
    })]
  })
})