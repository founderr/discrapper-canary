"use strict";
r.r(t), r.d(t, {
  openProfileEffectModal: function() {
    return o
  }
});
var a = r("735250");
r("470079");
var n = r("481060");
let o = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: o,
    guild: l
  } = e;
  (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([r.e("99387"), r.e("4934"), r.e("55228")]).then(r.bind(r, "191564"));
    return r => (0, a.jsx)(e, {
      ...r,
      guild: l,
      initialSelectedEffectId: o,
      analyticsLocations: t
    })
  }, {})
}