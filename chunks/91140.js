"use strict";
a.r(t), a.d(t, {
  GAMING_BADGES: function() {
    return g
  }
});
var n = a("735250"),
  r = a("470079"),
  l = a("561308"),
  i = a("297781"),
  o = a("443487"),
  s = a("43205"),
  u = a("265048"),
  d = a("689938"),
  c = a("571425");
let g = [i.GameTimestampBadge, i.RichGameStateBadge, i.VoiceChannelBadge, i.NewReleaseBadge, i.NewGameBadge, i.StreakBadge, i.TrendingBadge, i.ResurrectedBadge, i.MarathonBadge];
t.default = r.memo(e => {
  let {
    entry: t,
    channel: a,
    selected: r
  } = e, {
    iconUrl: f,
    iconTitle: E
  } = (0, u.useGamingContentData)(t);
  return (0, n.jsxs)(o.Card, {
    selected: r,
    children: [(0, n.jsxs)(o.CardInfoSection, {
      children: [(0, n.jsx)(o.CardParticipants, {
        entry: t,
        channelId: a.id,
        guildId: a.guild_id
      }), (0, n.jsx)(o.CardTitle, {
        children: function(e) {
          return (0, l.isEntryActive)(e) ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, n.jsx)(i.BadgesContainer, {
        location: i.BadgeLocation.CARD,
        children: g.map((e, a) => (0, n.jsx)(e, {
          entry: t
        }, a))
      })]
    }), (0, n.jsx)(s.ContentImage, {
      alt: E,
      src: f,
      size: 48,
      className: c.thumbnail
    })]
  })
})