t.d(e, {
  Z: function() {
    return r
  }
});
var l = t(735250);
t(470079);
var i = t(481060),
  u = t(695346),
  a = t(981631);

function r(n, e) {
  u.qF.getSetting() ? (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([t.e("99387"), t.e("5528"), t.e("91018")]).then(t.bind(t, 601572));
    return t => (0, l.jsx)(e, {
      ...t,
      onEnable: n,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: e === a.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
  }) : null == n || n()
}