n.d(t, {
  Ho: function() {
    return p
  },
  y9: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(317261),
  a = n(823379),
  r = n(162461),
  o = n(561308),
  c = n(297781),
  u = n(443487),
  d = n(43205),
  h = n(689938),
  m = n(41899);
let p = [c.An],
  E = [s._.WEEK];
t.ZP = i.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: i
  } = e;
  if (!(0, r.Rg)("MemberListTopArtistContent")) return null;
  let s = (0, o.Nq)(t);
  return null != s && (0, a.Hi)(s, E) ? (0, l.jsxs)(u.Zb, {
    selected: i,
    children: [(0, l.jsxs)(u.e$, {
      children: [(0, l.jsx)(u.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, l.jsx)(u.ll, {
        children: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({
          media: t.extra.artist.name
        })
      }), (0, l.jsx)(c.Gk, {
        location: c.Gt.CARD,
        children: p.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, l.jsx)(d.f, {
      src: t.extra.media.image_url,
      size: 48,
      className: m.thumbnail
    })]
  }) : null
})