n.d(t, {
  W: function() {
    return r
  }
});
var s = n(481060),
  i = n(812206),
  l = n(710845),
  a = n(51025);

function r(e, t, r) {
  ! function(e, t) {
    let a = i.Z.getApplication(e);
    if (null == a) {
      new l.Z("DispatchUninstallActionCreators").log("Application not found for game ".concat(e));
      return
    }(0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("70061").then(n.bind(n, 764998));
      return n => e({
        game: a,
        onConfirmUninstall: t,
        ...n
      })
    })
  }(e, () => (0, a.pC)(e, t, r))
}