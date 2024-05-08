"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  s = n("898531"),
  o = n("314897"),
  l = n("131951"),
  u = n("689938"),
  d = n("140280");

function _(e) {
  let t = (0, a.useModalContext)(),
    _ = (0, r.useStateFromStores)([l.default], () => l.default.isVideoEnabled()),
    c = (0, r.useStateFromStores)([o.default], () => o.default.getId() === e),
    E = (0, s.default)();
  return (!_ || E) && c ? (0, i.jsx)(a.MenuItem, {
    id: "change-video-background",
    label: (0, i.jsx)("div", {
      className: d.item,
      children: _ ? u.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : u.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5528"), n.e("24267")]).then(n.bind(n, "601572"));
        return t => (0, i.jsx)(e, {
          ...t,
          videoEnabled: _
        })
      }, {
        modalKey: "camera-preview",
        contextKey: t
      })
    }
  }) : null
}