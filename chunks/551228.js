n.d(t, {
  pi: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  r = n(442837),
  o = n(276852),
  c = n(594174),
  u = n(719247),
  d = n(297781),
  h = n(443487),
  p = n(43205),
  m = n(182022);
let _ = [d.XF];

function f(e) {
  var t, n, i, a, s, l, d;
  let h = (0, r.e7)([u.Z], () => u.Z.getMatchingActivity(e)),
p = (0, r.e7)([c.default], () => c.default.getUser(e.author_id));
  if (null == h || null == p)
return {};
  let m = e.extra.entries[0],
_ = null !== (a = null !== (i = (0, o.Z)(h)) && void 0 !== i ? i : null === (t = h.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== a ? a : m.media.image_url,
f = null !== (l = null !== (s = h.state) && void 0 !== s ? s : null === (n = m.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : m.media.title,
E = null !== (d = h.details) && void 0 !== d ? d : m.media.title;
  return {
activity: h,
artist: f,
currentEntry: m,
imageUrl: _,
title: E,
user: p
  };
}
t.ZP = a.memo(function(e) {
  let {
entry: t,
channel: n,
selected: a
  } = e, {
activity: s,
artist: r,
imageUrl: o
  } = f(t);
  return l()(null != s, 'There must be a matching live Activity for LISTENED_SESSION'), (0, i.jsxs)(h.Zb, {
selected: a,
children: [
  (0, i.jsxs)(h.e$, {
    children: [
      (0, i.jsx)(h.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, i.jsx)(h.ll, {
        children: r
      }),
      (0, i.jsx)(d.Gk, {
        location: d.Gt.CARD,
        children: _.map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, i.jsx)(p.f, {
    src: o,
    size: 48,
    className: m.thumbnail
  })
]
  });
});