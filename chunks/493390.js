"use strict";
s.r(t), s.d(t, {
  openProfileEffectModal: function() {
    return l
  }
});
var a = s("37983");
s("884691");
var n = s("77078");
let l = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: l,
    guild: i
  } = e;
  (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await s.el("889793").then(s.bind(s, "889793"));
    return s => (0, a.jsx)(e, {
      ...s,
      guild: i,
      initialSelectedEffectId: l,
      analyticsLocations: t
    })
  }, {})
}