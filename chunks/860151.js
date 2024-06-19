var i = t(735250);
t(470079);
var l = t(120356),
  s = t.n(l),
  r = t(481060),
  a = t(918701),
  o = t(644646),
  u = t(118393);
n.Z = function(e) {
  let {
    className: n,
    autoplay: t,
    quest: l,
    questContent: c,
    questExperimentLocation: d
  } = e, _ = (0, a.pG)({
    quest: l,
    location: d
  });
  return (0, i.jsxs)("div", {
    className: s()(u.wrapper, n),
    style: {
      color: l.config.colors.primary
    },
    children: [(0, i.jsx)(o.Z, {
      autoplay: t,
      className: u.rewardTile,
      quest: l,
      questContent: c
    }), (0, i.jsx)(r.Text, {
      className: u.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: _
    })]
  })
}