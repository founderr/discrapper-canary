n.d(t, {
  Hs: function() {
    return m
  },
  qy: function() {
    return p
  }
});
var l = n(735250),
  i = n(470079),
  s = n(317261),
  a = n(561308),
  r = n(297781),
  o = n(443487),
  c = n(43205),
  u = n(265048),
  d = n(689938),
  h = n(41899);
let m = [r.E6],
  E = [s._.WEEK];

function p(e) {
  return null != e && E.includes(e)
}
t.ZP = i.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: i
  } = e, {
    iconUrl: s
  } = (0, u.F)(t), E = (0, a.Nq)(t);
  return null != E && p(E) ? (0, l.jsxs)(o.Zb, {
    selected: i,
    children: [(0, l.jsxs)(o.e$, {
      children: [(0, l.jsx)(o.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, l.jsx)(o.ll, {
        children: function(e) {
          return d.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, l.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: m.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })]
    }), (0, l.jsx)(c.f, {
      src: s,
      size: 48,
      className: h.thumbnail
    })]
  }) : null
})