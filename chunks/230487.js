n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(740492),
  a = n(626135),
  r = n(358085),
  o = n(998502),
  c = n(258220),
  u = n(981631);
let d = "activity-hardware-acceleration-modal";

function E(e) {
  !l.ZP.disableActivityHardwareAccelerationPrompt && r.isPlatformEmbedded && !o.ZP.getEnableHardwareAcceleration() && (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 258220));
    return n => (0, i.jsx)(t, {
      applicationId: e,
      ...n
    })
  }, {
    modalKey: d,
    onCloseRequest: () => {
      a.default.track(u.rMx.MODAL_DISMISSED, {
        type: c.ACTIVITY_ENCOURAGES_HW_ACCELERATION
      }), (0, s.closeModal)(d)
    }
  })
}