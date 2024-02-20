"use strict";
n.r(e), n.d(e, {
  openProfileEffectModal: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var o = n("77078");
let u = t => {
  let {
    analyticsLocations: e,
    initialSelectedEffectId: u
  } = t;
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("889793").then(n.bind(n, "889793"));
    return n => (0, r.jsx)(t, {
      ...n,
      initialSelectedEffectId: u,
      analyticsLocations: e
    })
  }, {})
}