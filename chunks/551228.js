n.d(t, {
  pi: function() {
    return f
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  o = n(276852),
  c = n(594174),
  u = n(719247),
  d = n(297781),
  h = n(443487),
  m = n(43205),
  E = n(689938),
  p = n(41899);
let g = [d.XF];

function f(e) {
  var t, n, l, i, s, a, d;
  let h = (0, r.e7)([u.Z], () => u.Z.getMatchingActivity(e)),
    m = (0, r.e7)([c.default], () => c.default.getUser(e.author_id));
  if (null == h || null == m) return {};
  let E = e.extra.entries[0],
    p = null !== (i = null !== (l = (0, o.Z)(h)) && void 0 !== l ? l : null === (t = h.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== i ? i : E.media.image_url,
    g = null !== (a = null !== (s = h.state) && void 0 !== s ? s : null === (n = E.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : E.media.title,
    f = null !== (d = h.details) && void 0 !== d ? d : E.media.title;
  return {
    activity: h,
    artist: g,
    currentEntry: E,
    imageUrl: p,
    title: f,
    user: m
  }
}
t.ZP = i.memo(function(e) {
  let {
    entry: t,
    channel: n,
    selected: i
  } = e, {
    activity: s,
    artist: r,
    imageUrl: o
  } = f(t);
  return a()(null != s, "There must be a matching live Activity for LISTENED_SESSION"), (0, l.jsxs)(h.Zb, {
    selected: i,
    children: [(0, l.jsxs)(h.e$, {
      children: [(0, l.jsx)(h.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, l.jsx)(h.ll, {
        children: function(e) {
          return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENING_TO_MEDIA.format({
            media: e
          })
        }(r)
      }), (0, l.jsx)(d.Gk, {
        location: d.Gt.CARD,
        children: g.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, l.jsx)(m.f, {
      src: o,
      size: 48,
      className: p.thumbnail
    })]
  })
})