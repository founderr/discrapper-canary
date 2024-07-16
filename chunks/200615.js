s.d(t, {
  F: function() {
return d;
  }
});
var n = s(735250),
  r = s(470079),
  a = s(481060),
  o = s(906732),
  i = s(963249),
  l = s(474936),
  c = s(79909);
let d = e => {
  let {
text: t
  } = e, {
analyticsLocations: s
  } = (0, o.ZP)(), d = r.useRef(null);
  return (0, n.jsx)(a.Clickable, {
className: c.subscribeNow,
innerRef: d,
onClick: () => {
  (0, i.Z)({
    subscriptionTier: l.Si.TIER_2,
    analyticsLocations: s,
    returnRef: d
  });
},
children: t
  });
};