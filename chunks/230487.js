"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("740492"),
  i = a("626135"),
  r = a("358085"),
  o = a("998502"),
  u = a("258220"),
  d = a("981631");
let c = "activity-hardware-acceleration-modal";

function f(e) {
  !l.default.disableActivityHardwareAccelerationPrompt && r.isPlatformEmbedded && !o.default.getEnableHardwareAcceleration() && (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(a.bind(a, "258220"));
    return a => (0, n.jsx)(t, {
      applicationId: e,
      ...a
    })
  }, {
    modalKey: c,
    onCloseRequest: () => {
      i.default.track(d.AnalyticEvents.MODAL_DISMISSED, {
        type: u.ACTIVITY_ENCOURAGES_HW_ACCELERATION
      }), (0, s.closeModal)(c)
    }
  })
}