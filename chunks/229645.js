"use strict";
n.r(t), n.d(t, {
  VIBE_WITH_WUMPUS: function() {
    return l
  }
});
var i = n("37983");
n("884691");
var o = n("77078");
let l = {
  binds: ["mod+alt+shift+w"],
  comboKeysBindGlobal: !0,
  action: () => ((0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("166260").then(n.bind(n, "166260"));
    return t => (0, i.jsx)(e, {
      ...t
    })
  }, {
    onCloseCallback: o.closeAllModals
  }), !1)
}