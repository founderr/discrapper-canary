var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(689938),
  o = n(256129);
t.Z = function(e) {
  let {
    className: t,
    color: n = "header-primary",
    textOpacity: i = .9,
    bgOpacity: c = .4
  } = e;
  return (0, s.jsxs)(a.Text, {
    variant: "text-xxs/medium",
    color: n,
    className: l()(o.promotedTag, t),
    children: [(0, s.jsx)("span", {
      className: o.promotedTagBackground,
      style: {
        opacity: c
      }
    }), (0, s.jsx)("span", {
      style: {
        opacity: i
      },
      children: r.Z.Messages.QUESTS_PROMOTED
    })]
  })
}