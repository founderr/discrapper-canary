"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("845579"),
  u = n("49111");

function s(e, t) {
  l.AlwaysPreviewVideo.getSetting() ? (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("381736").then(n.bind(n, "381736"));
    return n => (0, a.jsx)(t, {
      ...n,
      onEnable: e,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: t === u.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
  }) : null == e || e()
}