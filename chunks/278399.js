"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("162461"),
  r = n("561308"),
  o = n("297781"),
  u = n("443487"),
  d = n("43205"),
  c = n("689938"),
  f = n("571425");
let h = [o.TopArtistBadge],
  m = [s.AggregateRange.WEEK];
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e;
  if (!(0, i.useIsEligibleForTopArtistInventory)("MemberListTopArtistContent")) return null;
  let s = (0, r.getAggregateRange)(t);
  return null != s && m.includes(s) ? (0, a.jsxs)(u.Card, {
    selected: l,
    children: [(0, a.jsxs)(u.CardInfoSection, {
      children: [(0, a.jsx)(u.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(u.CardTitle, {
        children: c.default.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({
          media: t.extra.artist.name
        })
      }), (0, a.jsx)(o.BadgesContainer, {
        location: o.BadgeLocation.CARD,
        children: h.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(d.ContentImage, {
      src: t.extra.media.image_url,
      size: 48,
      className: f.thumbnail
    })]
  }) : null
})