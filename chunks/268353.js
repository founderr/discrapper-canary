"use strict";
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(928518),
  a = n(451478),
  l = n(228488),
  u = n(871499),
  _ = n(689938);
t.Z = r.ZP.connectStores([a.Z, o.Z], e => {
  let {
    node: t,
    guestWindow: n
  } = e;
  return {
    enabled: (0, l.rB)(t, null == n ? void 0 : n.document)
  }
})(function(e) {
  let {
    enabled: t,
    ...n
  } = e, r = t ? _.Z.Messages.EXIT_FULL_SCREEN : _.Z.Messages.FULL_SCREEN, o = t ? s.FullscreenExitIcon : s.FullscreenEnterIcon;
  return (0, i.jsx)(u.Z, {
    label: r,
    iconComponent: o,
    ...n
  })
})