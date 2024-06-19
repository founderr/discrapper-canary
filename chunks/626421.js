n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(399606),
  o = n(243778),
  c = n(914010),
  u = n(566840),
  d = n(921944),
  E = n(575174);
let h = s.memo(function(e) {
  var t, n, l;
  let {
    state: r,
    markAsDismissed: o
  } = e, {
    name: c,
    guildId: u,
    boundingRect: d
  } = r, h = s.useMemo(() => (function(e, t, n) {
    return null
  })(c, 0, 0), [c, u, o]);
  if (null == h) return null;
  return (0, i.jsx)("div", {
    className: a()(E.upsell, !(null != (t = d) && !(t.y < 0)) && E.hidden),
    style: (n = c, null == (l = d) ? {} : {
      top: l.top,
      left: l.right - l.x
    }),
    children: h
  })
});

function _() {
  let e = (0, r.e7)([c.Z], () => c.Z.getGuildId()),
    t = (0, u.Eg)(e),
    [n, s] = (0, o.U)(Object.values(t).filter(e => {
      let {
        disabled: t
      } = e;
      return !t
    }).map(e => {
      let {
        name: t
      } = e;
      return t
    }), d.R.SIDEBAR);
  if (null == n) return null;
  let l = t[n];
  return null == l ? null : (0, i.jsx)("div", {
    className: E.container,
    children: (0, i.jsx)(h, {
      state: l,
      markAsDismissed: s
    })
  })
}