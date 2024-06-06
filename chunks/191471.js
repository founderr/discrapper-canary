"use strict";
n.r(t), n.d(t, {
  openReportRaidModal: function() {
    return u
  },
  openSafetyChannelSetupModal: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  i = n("866266");

function u(e) {
  (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("9354")]).then(n.bind(n, "461533"));
    return n => (0, a.jsx)(t, {
      ...n,
      guildId: e
    })
  })
}

function r(e) {
  (0, l.openModalLazy)(async () => t => (0, a.jsx)(i.default, {
    ...t,
    guildId: e
  }))
}