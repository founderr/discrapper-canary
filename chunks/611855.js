var s = n(735250);
n(470079);
var o = n(120356),
  i = n.n(o),
  a = n(481060),
  l = n(689938),
  r = n(256129);
t.Z = function(e) {
  let {
    className: t,
    color: n = "header-primary",
    textOpacity: o = .9,
    bgOpacity: u = .4
  } = e;
  return (0, s.jsxs)(a.Text, {
    variant: "text-xxs/medium",
    color: n,
    className: i()(r.promotedTag, t),
    children: [(0, s.jsx)("span", {
      className: r.promotedTagBackground,
      style: {
        opacity: u
      }
    }), (0, s.jsx)("span", {
      style: {
        opacity: o
      },
      children: l.Z.Messages.QUESTS_PROMOTED
    })]
  })
}