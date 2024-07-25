n.d(t, {
  pi: function() {
return v;
  },
  te: function() {
return f;
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  c = n(276852),
  o = n(594174),
  d = n(719247),
  u = n(297781),
  m = n(443487),
  x = n(43205),
  h = n(827418);
let f = [u.XF];

function v(e) {
  var t, n, l, i, s, a, u;
  let m = (0, r.e7)([d.ZP], () => d.ZP.getMatchingActivity(e)),
x = (0, r.e7)([o.default], () => o.default.getUser(e.author_id));
  if (null == m || null == x)
return {};
  let h = e.extra.entries[0],
f = null !== (i = null !== (l = (0, c.Z)(m)) && void 0 !== l ? l : null === (t = m.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== i ? i : h.media.image_url,
v = null !== (a = null !== (s = m.state) && void 0 !== s ? s : null === (n = h.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : h.media.title,
g = null !== (u = m.details) && void 0 !== u ? u : h.media.title;
  return {
activity: m,
artist: v,
currentEntry: h,
imageUrl: f,
title: g,
user: x
  };
}
t.ZP = i.memo(function(e) {
  let {
entry: t,
channel: n,
selected: i
  } = e, {
activity: s,
artist: r,
imageUrl: c
  } = v(t);
  return a()(null != s, 'There must be a matching live Activity for LISTENED_SESSION'), (0, l.jsxs)(m.Zb, {
selected: i,
children: [
  (0, l.jsxs)(m.e$, {
    children: [
      (0, l.jsx)(m.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, l.jsx)(m.ll, {
        children: r
      }),
      (0, l.jsx)(u.Gk, {
        location: u.Gt.CARD,
        children: f.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, l.jsx)(x.f, {
    src: c,
    size: 48,
    className: h.thumbnail
  })
]
  });
});