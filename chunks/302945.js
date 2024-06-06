"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("793030"),
  l = n("422034"),
  u = n("182294"),
  d = n("689938"),
  _ = n("600541");

function c(e) {
  let {
    affinities: t,
    className: n
  } = e, s = e => null != e.globalName ? e.globalName : e.username, c = r.useMemo(() => t.length > 1 ? d.default.Messages.NITRO_AFFINITY_UPSELL.format({
    username: s(t[0]),
    numFriends: t.length - 1
  }) : "", [t]);
  if (t.length <= 1) return null;
  let E = t.map((e, n) => (0, i.jsx)(l.AvatarWrapper, {
    affinity: e,
    applyMask: n !== t.length - 1,
    size: u.AvatarSizes.SIZE_20
  }, e.id));
  return (0, i.jsxs)("div", {
    className: a()(_.container, n),
    children: [(0, i.jsx)("div", {
      className: _.iconContainer,
      children: E
    }), (0, i.jsx)("div", {
      className: _.textContainer,
      children: (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: c
      })
    })]
  })
}