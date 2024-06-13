"use strict";
n.r(t), n.d(t, {
  GAMING_BADGES: function() {
    return g
  }
});
var a = n("735250"),
  r = n("470079"),
  l = n("561308"),
  i = n("297781"),
  o = n("443487"),
  s = n("43205"),
  u = n("265048"),
  d = n("689938"),
  c = n("571425");
let g = [i.GameTimestampBadge, i.RichGameStateBadge, i.VoiceChannelBadge, i.NewReleaseBadge, i.NewGameBadge, i.StreakBadge, i.TrendingBadge, i.ResurrectedBadge, i.MarathonBadge];
t.default = r.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: r
  } = e, {
    iconUrl: f,
    iconTitle: m
  } = (0, u.useGamingContentData)(t);
  return (0, a.jsxs)(o.Card, {
    selected: r,
    children: [(0, a.jsxs)(o.CardInfoSection, {
      children: [(0, a.jsx)(o.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(o.CardTitle, {
        children: function(e) {
          return (0, l.isEntryActive)(e) ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(i.BadgesContainer, {
        location: i.BadgeLocation.CARD,
        children: g.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(s.ContentImage, {
      alt: m,
      src: f,
      size: 48,
      className: c.thumbnail
    })]
  })
})