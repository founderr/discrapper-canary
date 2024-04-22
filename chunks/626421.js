"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("399606"),
  o = a("243778"),
  u = a("914010"),
  d = a("566840"),
  c = a("921944"),
  f = a("858861");
let E = s.memo(function(e) {
  var t, a, l;
  let {
    state: r,
    markAsDismissed: o
  } = e, {
    name: u,
    guildId: d,
    boundingRect: c
  } = r, E = s.useMemo(() => {
    var e, t, a;
    return e = 0, t = 0, a = 0, null
  }, [u, d, o]);
  if (null == E) return null;
  return (0, n.jsx)("div", {
    className: i()(f.upsell, !(null != (t = c) && !(t.y < 0)) && f.hidden),
    style: (a = 0, null == (l = c) ? {} : {
      top: l.top,
      left: l.right - l.x
    }),
    children: E
  })
});

function h() {
  let e = (0, r.useStateFromStores)([u.default], () => u.default.getGuildId()),
    t = (0, d.useChannelListUpsells)(e),
    [a, s] = (0, o.useSelectedDismissibleContent)(Object.values(t).filter(e => {
      let {
        disabled: t
      } = e;
      return !t
    }).map(e => {
      let {
        name: t
      } = e;
      return t
    }), c.DismissibleContentGroupName.SIDEBAR);
  if (null == a) return null;
  let l = t[a];
  return null == l ? null : (0, n.jsx)("div", {
    className: f.container,
    children: (0, n.jsx)(E, {
      state: l,
      markAsDismissed: s
    })
  })
}