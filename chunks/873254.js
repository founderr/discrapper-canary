"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  i = n("648911"),
  d = n("271938"),
  r = n("42887"),
  s = n("782340"),
  o = n("325483");

function c(e) {
  let t = (0, u.useModalContext)(),
    c = (0, l.useStateFromStores)([r.default], () => r.default.isVideoEnabled()),
    f = (0, l.useStateFromStores)([d.default], () => d.default.getId() === e),
    E = (0, i.default)();
  return (!c || E) && f ? (0, a.jsx)(u.MenuItem, {
    id: "change-video-background",
    label: (0, a.jsx)("div", {
      className: o.item,
      children: c ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("381736").then(n.bind(n, "381736"));
        return t => (0, a.jsx)(e, {
          ...t,
          videoEnabled: c
        })
      }, {
        modalKey: "camera-preview",
        contextKey: t
      })
    }
  }) : null
}