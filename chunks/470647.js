t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(657254),
  r = t(716364),
  o = t(474873),
  c = t(871465);

function E(e) {
  let {
    className: s
  } = e, t = (0, i.e7)([o.Z], () => o.Z.getSoundpack()), {
    allowAprilFoolsSoundpack: E
  } = l.Z.useExperiment({
    location: "a96548_1"
  }, {
    autoTrackExposure: !1
  });
  if (!E) return null;
  let d = E ? (0, c.QI)() : [];
  return (0, n.jsx)(a.SingleSelect, {
    className: s,
    onChange: e => (0, r.c)(e),
    value: t,
    options: d
  })
}