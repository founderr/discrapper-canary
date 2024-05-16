"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var a = n("481060"),
  l = n("695346"),
  r = n("981631");

function u(e, t) {
  l.AlwaysPreviewVideo.getSetting() ? (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("5528"), n.e("24267")]).then(n.bind(n, "601572"));
    return n => (0, i.jsx)(t, {
      ...n,
      onEnable: e,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: t === r.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
  }) : null == e || e()
}