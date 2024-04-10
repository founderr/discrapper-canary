"use strict";
a.r(t);
var i = a("735250");
a("470079");
var n = a("481060"),
  l = a("230711"),
  s = a("181211"),
  o = a("188879"),
  d = a("800530"),
  r = a("981631"),
  c = a("689938"),
  u = a("653279"),
  m = a("170143");
t.default = e => {
  let {
    transitionState: t,
    onClose: a,
    classificationId: _,
    source: A
  } = e, f = (0, s.default)(), h = () => {
    a(), l.default.open(r.UserSettingsSections.PRIVACY_AND_SAFETY, d.SafetyHubView.ACCOUNT_STANDING)
  };
  return (0, i.jsxs)(n.ModalRoot, {
    className: u.modalRoot,
    transitionState: t,
    children: [(0, i.jsxs)("div", {
      className: u.modalHeader,
      children: [(0, i.jsx)("img", {
        className: u.image,
        src: m,
        alt: ""
      }), (0, i.jsx)(n.ModalCloseButton, {
        className: u.modalClose,
        onClick: a
      })]
    }), (0, i.jsx)(n.ModalContent, {
      className: u.modalContent,
      children: f ? (0, i.jsx)(n.Spinner, {}) : (0, i.jsx)(o.default, {
        classificationId: _,
        source: A,
        onError: h
      })
    }), (0, i.jsx)(n.ModalFooter, {
      children: (0, i.jsx)(n.Button, {
        className: u.__invalid_button,
        type: "button",
        color: n.Button.Colors.BRAND,
        onClick: h,
        children: c.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
      })
    })]
  })
}