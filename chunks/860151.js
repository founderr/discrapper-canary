var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(918701),
  o = n(644646),
  c = n(118393);
t.Z = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: i,
    questContent: u,
    questExperimentLocation: d
  } = e, E = (0, r.pG)({
    quest: i,
    location: d
  });
  return (0, s.jsxs)("div", {
    className: l()(c.wrapper, t),
    style: {
      color: i.config.colors.primary
    },
    children: [(0, s.jsx)(o.Z, {
      autoplay: n,
      className: c.rewardTile,
      quest: i,
      questContent: u
    }), (0, s.jsx)(a.Text, {
      className: c.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: E
    })]
  })
}