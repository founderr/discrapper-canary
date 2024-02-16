"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  UPLOAD_ERROR_MODAL_KEY: function() {
    return _
  },
  openUploadError: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("551042"),
  s = n("516256"),
  o = n("202664"),
  u = n("476765"),
  c = n("109036"),
  d = n("527382"),
  f = n("1065");

function m(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: r,
    transitionState: a,
    icons: m,
    fileSize: _,
    onClose: E
  } = e, T = (0, u.useUID)(), I = null != m ? m : d.DEFAULT_FILE_UPLOAD_ICONS;
  return r ? (0, i.jsx)(o.default, {
    transitionState: a,
    onClose: E,
    fileSize: _
  }) : (0, i.jsx)(s.ModalRoot, {
    size: s.ModalSize.DYNAMIC,
    "aria-labelledby": T,
    transitionState: a,
    children: (0, i.jsx)("div", {
      className: l(f.uploadDropModal, f.error),
      children: (0, i.jsxs)("div", {
        className: f.inner,
        children: [(0, i.jsx)(c.default, {
          icons: I
        }), (0, i.jsx)("div", {
          id: T,
          className: f.title,
          children: t
        }), (0, i.jsx)("div", {
          className: f.instructions,
          children: n
        })]
      })
    })
  })
}
let _ = "UPLOAD_ERROR_MODAL_KEY";

function E(e) {
  (0, a.openModal)(t => (0, i.jsx)(m, {
    ...t,
    ...e
  }), {
    modalKey: _
  })
}