"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("845579"),
  r = n("49111");

function u(e, t) {
  l.AlwaysPreviewVideo.getSetting() ? (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("381736").then(n.bind(n, "381736"));
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