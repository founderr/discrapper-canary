n.d(t, {
  Bj: function() {
return v;
  },
  td: function() {
return f;
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(835473),
  r = n(594174),
  c = n(81063),
  o = n(297781),
  d = n(443487),
  u = n(43205),
  m = n(701488),
  x = n(689938),
  h = n(827418);
let f = [
o.Yl,
o.Rg
  ],
  v = e => {
var t;
let n = (0, a.q)(e.extra.application_id),
  l = null == n ? void 0 : n.getIconURL(128),
  i = (0, s.e7)([r.default], () => r.default.getUser(e.author_id)),
  o = (0, c.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [
    m.Si.LARGE,
    m.Si.LARGE
  ]),
  d = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = e.extra.media_assets_large_text) && void 0 !== t ? t : '');
return {
  user: i,
  mediaImageSrc: null != o ? o : l,
  episodeDescription: null != d ? x.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: d[1],
    episodeNum: d[2]
  }) : null
};
  };
t.ZP = i.memo(e => {
  let {
entry: t,
channel: n,
selected: i
  } = e, {
mediaImageSrc: s
  } = v(t);
  return (0, l.jsxs)(d.Zb, {
selected: i,
children: [
  (0, l.jsxs)(d.e$, {
    children: [
      (0, l.jsx)(d.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, l.jsx)(d.ll, {
        children: t.extra.media_title
      }),
      (0, l.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: f.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, l.jsx)(u.f, {
    src: s,
    size: 48,
    className: h.thumbnail,
    alt: t.extra.media_title
  })
]
  });
});