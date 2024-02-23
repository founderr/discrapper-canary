"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("627445"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  u = n("901582"),
  o = n("697218"),
  d = n("348852"),
  c = n("873254"),
  f = n("49111"),
  h = n("782340");

function m(e) {
  let {
    onClose: t,
    onSelect: n
  } = e, a = (0, i.useStateFromStores)([o.default], () => {
    let e = o.default.getCurrentUser();
    return s(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
  }), m = (0, d.default)(), p = (0, c.default)(a.id);
  return (0, l.jsx)(u.default, {
    object: f.AnalyticsObjects.CONTEXT_MENU,
    children: (0, l.jsxs)(r.Menu, {
      onClose: t,
      navId: "video-device-context",
      "aria-label": h.default.Messages.FORM_LABEL_VIDEO_DEVICE,
      onSelect: n,
      children: [(0, l.jsx)(r.MenuGroup, {
        label: h.default.Messages.FORM_LABEL_VIDEO_DEVICE,
        children: m
      }), (0, l.jsx)(r.MenuGroup, {
        children: p
      })]
    })
  })
}