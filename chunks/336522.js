"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  UPLOAD_ERROR_MODAL_KEY: function() {
    return _
  },
  openUploadError: function() {
    return E
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  a = n("551042"),
  s = n("516256"),
  o = n("202664"),
  u = n("476765"),
  d = n("109036"),
  c = n("527382"),
  m = n("831839");

function f(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: i,
    transitionState: a,
    icons: f,
    fileSize: _,
    onClose: E
  } = e, T = (0, u.useUID)(), I = null != f ? f : c.DEFAULT_FILE_UPLOAD_ICONS;
  return i ? (0, r.jsx)(o.default, {
    transitionState: a,
    onClose: E,
    fileSize: _
  }) : (0, r.jsx)(s.ModalRoot, {
    size: s.ModalSize.DYNAMIC,
    "aria-labelledby": T,
    transitionState: a,
    children: (0, r.jsx)("div", {
      className: l(m.uploadDropModal, m.error),
      children: (0, r.jsxs)("div", {
        className: m.inner,
        children: [(0, r.jsx)(d.default, {
          icons: I
        }), (0, r.jsx)("div", {
          id: T,
          className: m.title,
          children: t
        }), (0, r.jsx)("div", {
          className: m.instructions,
          children: n
        })]
      })
    })
  })
}
let _ = "UPLOAD_ERROR_MODAL_KEY";

function E(e) {
  (0, a.openModal)(t => (0, r.jsx)(f, {
    ...t,
    ...e
  }), {
    modalKey: _
  })
}