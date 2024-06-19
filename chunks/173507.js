t.d(e, {
  Z: function() {
    return r
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  a = t(695346),
  u = t(981631);

function r(n, e) {
  a.qF.getSetting() ? (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([t.e("99387"), t.e("5528"), t.e("91018")]).then(t.bind(t, 601572));
    return t => (0, i.jsx)(e, {
      ...t,
      onEnable: n,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: e === u.IlC.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
  }) : null == n || n()
}