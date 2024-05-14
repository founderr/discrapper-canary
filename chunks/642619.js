"use strict";
a.r(t), a.d(t, {
  openProfileEffectModal: function() {
    return c
  }
});
var s = a("735250");
a("470079");
var i = a("481060");
let c = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: c,
    guild: n
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([a.e("99387"), a.e("65866"), a.e("55228")]).then(a.bind(a, "191564"));
    return a => (0, s.jsx)(e, {
      ...a,
      guild: n,
      initialSelectedEffectId: c,
      analyticsLocations: t
    })
  }, {})
}