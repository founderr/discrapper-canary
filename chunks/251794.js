"use strict";
n.r(e), n.d(e, {
  openDisableCommunication: function() {
    return r
  },
  openEnableCommunication: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var a = n("481060");

function r(t, e, r) {
  (0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await Promise.all([n.e("99387"), n.e("72920")]).then(n.bind(n, "109730"));
    return n => (0, i.jsx)(a, {
      guildId: t,
      userId: e,
      anaylticsLocations: r,
      ...n
    })
  })
}

function u(t, e, r) {
  (0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await Promise.all([n.e("99387"), n.e("76233")]).then(n.bind(n, "171494"));
    return n => (0, i.jsx)(a, {
      guildId: t,
      userId: e,
      anaylticsLocations: r,
      ...n
    })
  })
}