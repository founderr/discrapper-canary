t.d(n, {
  pi: function() {
return h;
  },
  te: function() {
return v;
  }
}), t(47120);
var l = t(735250),
  i = t(470079),
  s = t(512722),
  a = t.n(s),
  r = t(442837),
  c = t(276852),
  o = t(594174),
  d = t(719247),
  u = t(297781),
  m = t(443487),
  x = t(43205),
  f = t(827418);
let v = [u.XF];

function h(e) {
  var n, t, l, i, s, a, u;
  let m = (0, r.e7)([d.ZP], () => d.ZP.getMatchingActivity(e)),
x = (0, r.e7)([o.default], () => o.default.getUser(e.author_id));
  if (null == m || null == x)
return {};
  let f = e.extra.entries[0],
v = null !== (i = null !== (l = (0, c.Z)(m)) && void 0 !== l ? l : null === (n = m.assets) || void 0 === n ? void 0 : n.small_image) && void 0 !== i ? i : f.media.image_url,
h = null !== (a = null !== (s = m.state) && void 0 !== s ? s : null === (t = f.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== a ? a : f.media.title,
g = null !== (u = m.details) && void 0 !== u ? u : f.media.title;
  return {
activity: m,
artist: h,
currentEntry: f,
imageUrl: v,
title: g,
user: x
  };
}
n.ZP = i.memo(function(e) {
  let {
entry: n,
channel: t,
selected: i
  } = e, {
activity: s,
artist: r,
imageUrl: c
  } = h(n);
  return a()(null != s, 'There must be a matching live Activity for LISTENED_SESSION'), (0, l.jsxs)(m.Zb, {
selected: i,
children: [
  (0, l.jsxs)(m.e$, {
    children: [
      (0, l.jsx)(m.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }),
      (0, l.jsx)(m.ll, {
        children: r
      }),
      (0, l.jsx)(u.Gk, {
        location: u.Gt.CARD,
        children: v.map((e, t) => (0, l.jsx)(e, {
          entry: n
        }, t))
      })
    ]
  }),
  (0, l.jsx)(x.f, {
    src: c,
    size: 48,
    className: f.thumbnail
  })
]
  });
});