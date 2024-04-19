"use strict";
a.r(t), a.d(t, {
  uninstallBranchPrompt: function() {
    return r
  }
});
var n = a("481060"),
  s = a("812206"),
  l = a("710845"),
  i = a("51025");

function r(e, t, r) {
  ! function(e, t) {
    let i = s.default.getApplication(e);
    if (null == i) {
      new l.default("DispatchUninstallActionCreators").log("Application not found for game ".concat(e));
      return
    }(0, n.openModalLazy)(async () => {
      let {
        default: e
      } = await a.e("70061").then(a.bind(a, "764998"));
      return a => e({
        game: i,
        onConfirmUninstall: t,
        ...a
      })
    })
  }(e, () => (0, i.uninstallApplication)(e, t, r))
}