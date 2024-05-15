"use strict";
n.r(t), n.d(t, {
  uninstallBranchPrompt: function() {
    return r
  }
});
var a = n("481060"),
  s = n("812206"),
  i = n("710845"),
  l = n("51025");

function r(e, t, r) {
  ! function(e, t) {
    let l = s.default.getApplication(e);
    if (null == l) {
      new i.default("DispatchUninstallActionCreators").log("Application not found for game ".concat(e));
      return
    }(0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("70061").then(n.bind(n, "764998"));
      return n => e({
        game: l,
        onConfirmUninstall: t,
        ...n
      })
    })
  }(e, () => (0, l.uninstallApplication)(e, t, r))
}