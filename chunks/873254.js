"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var u = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  l = n("648911"),
  r = n("271938"),
  d = n("42887"),
  o = n("782340"),
  s = n("325483");

function c(e) {
  let t = (0, i.useModalContext)(),
    c = (0, a.useStateFromStores)([d.default], () => d.default.isVideoEnabled()),
    f = (0, a.useStateFromStores)([r.default], () => r.default.getId() === e),
    E = (0, l.default)();
  return (!c || E) && f ? (0, u.jsx)(i.MenuItem, {
    id: "change-video-background",
    label: (0, u.jsx)("div", {
      className: s.item,
      children: c ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("381736").then(n.bind(n, "381736"));
        return t => (0, u.jsx)(e, {
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