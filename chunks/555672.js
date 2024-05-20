"use strict";
n.r(t), n.d(t, {
  TOP_GAME_BADGES: function() {
    return h
  },
  isAllowedRange: function() {
    return p
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("561308"),
  r = n("297781"),
  o = n("443487"),
  u = n("43205"),
  d = n("265048"),
  c = n("689938"),
  f = n("571425");
let h = [r.TopGameBadge],
  m = [s.AggregateRange.WEEK];

function p(e) {
  return null != e && m.includes(e)
}
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    iconUrl: s
  } = (0, d.useGamingContentData)(t), m = (0, i.getAggregateRange)(t);
  return null != m && p(m) ? (0, a.jsxs)(o.Card, {
    selected: l,
    children: [(0, a.jsxs)(o.CardInfoSection, {
      children: [(0, a.jsx)(o.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(o.CardTitle, {
        children: function(e) {
          return c.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(r.BadgesContainer, {
        location: r.BadgeLocation.CARD,
        children: h.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(u.ContentImage, {
      src: s,
      size: 48,
      className: f.thumbnail
    })]
  }) : null
})