"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("512722"),
  a = n.n(r),
  s = n("442837"),
  o = n("481060"),
  l = n("410575"),
  u = n("594174"),
  d = n("907285"),
  _ = n("737013"),
  c = n("981631"),
  E = n("689938");

function I(e) {
  let {
    onClose: t,
    onSelect: n
  } = e, r = (0, s.useStateFromStores)([u.default], () => {
    let e = u.default.getCurrentUser();
    return a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
  }), I = (0, d.default)(), T = (0, _.default)(r.id);
  return (0, i.jsx)(l.default, {
    object: c.AnalyticsObjects.CONTEXT_MENU,
    children: (0, i.jsxs)(o.Menu, {
      onClose: t,
      navId: "video-device-context",
      "aria-label": E.default.Messages.FORM_LABEL_VIDEO_DEVICE,
      onSelect: n,
      children: [(0, i.jsx)(o.MenuGroup, {
        label: E.default.Messages.FORM_LABEL_VIDEO_DEVICE,
        children: I
      }), (0, i.jsx)(o.MenuGroup, {
        children: T
      })]
    })
  })
}