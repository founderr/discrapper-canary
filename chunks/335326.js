n.d(t, {
  Bj: function() {
    return g
  },
  td: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(835473),
  r = n(594174),
  o = n(81063),
  c = n(297781),
  u = n(443487),
  d = n(43205),
  h = n(701488),
  m = n(689938),
  p = n(41899);
let E = [c.Yl, c.Rg],
  g = e => {
    var t;
    let n = (0, a.q)(e.extra.application_id),
      l = null == n ? void 0 : n.getIconURL(128),
      i = (0, s.e7)([r.default], () => r.default.getUser(e.author_id)),
      c = (0, o.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [h.Si.LARGE, h.Si.LARGE]),
      u = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = e.extra.media_assets_large_text) && void 0 !== t ? t : "");
    return {
      user: i,
      mediaImageSrc: null != c ? c : l,
      episodeDescription: null != u ? m.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
        seasonNum: u[1],
        episodeNum: u[2]
      }) : null
    }
  };
t.ZP = i.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: i
  } = e, {
    mediaImageSrc: s
  } = g(t);
  return (0, l.jsxs)(u.Zb, {
    selected: i,
    children: [(0, l.jsxs)(u.e$, {
      children: [(0, l.jsx)(u.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, l.jsx)(u.ll, {
        children: m.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({
          mediaTitle: t.extra.media_title
        })
      }), (0, l.jsx)(c.Gk, {
        location: c.Gt.CARD,
        children: E.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, l.jsx)(d.f, {
      src: s,
      size: 48,
      className: p.thumbnail,
      alt: t.extra.media_title
    })]
  })
})