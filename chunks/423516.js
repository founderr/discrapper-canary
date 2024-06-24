var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(546591),
  a = n(977059),
  o = n(689938),
  u = n(857665);
t.Z = function(e) {
  let {
    className: t,
    text: n
  } = e, {
    enabled: i
  } = a.c.useExperiment({
    location: "RTCConnectionStatusText"
  });
  return (0, l.jsx)(r.Z, {
    className: s()(t, i ? u.hoverableStatus : u.status),
    hoverText: i ? o.Z.Messages.E2EE_CALL_DETAILS : null,
    children: n
  })
}