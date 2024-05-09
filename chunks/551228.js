"use strict";
n.r(t), n.d(t, {
  useListenedSessionData: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("276852"),
  r = n("594174"),
  o = n("719247"),
  u = n("297781"),
  d = n("443487"),
  c = n("43205"),
  f = n("689938"),
  h = n("571425");
let m = [u.ListenTimestampBadge];

function p(e) {
  var t, n, a, l, u, d, c;
  let f = (0, s.useStateFromStores)([o.default], () => o.default.getMatchingActivity(e)),
    h = (0, s.useStateFromStores)([r.default], () => r.default.getUser(e.author_id));
  if (null == f || null == h) return {};
  let m = e.extra.entries[0],
    p = null !== (l = null !== (a = (0, i.default)(f)) && void 0 !== a ? a : null === (t = f.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== l ? l : m.media.image_url,
    E = null !== (d = null !== (u = f.state) && void 0 !== u ? u : null === (n = m.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== d ? d : m.media.title,
    C = null !== (c = f.details) && void 0 !== c ? c : m.media.title;
  return {
    activity: f,
    artist: E,
    currentEntry: m,
    imageUrl: p,
    title: C,
    user: h
  }
}
t.default = l.memo(function(e) {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    activity: s,
    artist: i,
    imageUrl: r
  } = p(t);
  return null == s ? null : (0, a.jsxs)(d.Card, {
    selected: l,
    children: [(0, a.jsxs)(d.CardInfoSection, {
      children: [(0, a.jsx)(d.CardParticipants, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(d.CardTitle, {
        children: function(e) {
          return f.default.Messages.MEMBER_LIST_CONTENT_FEED_LISTENING_TO_MEDIA.format({
            media: e
          })
        }(i)
      }), (0, a.jsx)(u.BadgesContainer, {
        location: u.BadgeLocation.CARD,
        children: m.map((e, n) => (0, a.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, a.jsx)(c.ContentImage, {
      src: r,
      size: 48,
      className: h.thumbnail
    })]
  })
})