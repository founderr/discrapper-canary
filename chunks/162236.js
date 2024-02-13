"use strict";
n.r(t), n.d(t, {
  openBroadcastingPrivacySettingsModal: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var r = n("77078");

function i(e, t, i) {
  (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await n.el("725420").then(n.bind(n, "725420"));
    return n => (0, a.jsx)(r, {
      headerText: e,
      buttonCTA: t,
      onSave: i,
      ...n
    })
  })
}