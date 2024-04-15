"use strict";
a.r(t);
var i = a("735250");
a("470079");
var n = a("481060"),
  l = a("230711"),
  s = a("181211"),
  o = a("188879"),
  r = a("800530"),
  c = a("981631"),
  d = a("689938"),
  u = a("653279"),
  m = a("170143");
t.default = e => {
  let {
    transitionState: t,
    onClose: a,
    classificationId: _,
    source: A
  } = e, h = (0, s.default)(), f = () => {
    a(), l.default.open(c.UserSettingsSections.PRIVACY_AND_SAFETY, r.SafetyHubView.ACCOUNT_STANDING)
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
      children: h ? (0, i.jsx)(n.Spinner, {}) : (0, i.jsx)(o.default, {
        classificationId: _,
        source: A,
        onError: f
      })
    }), (0, i.jsx)(n.ModalFooter, {
      children: (0, i.jsx)(n.Button, {
        className: u.__invalid_button,
        type: "button",
        color: n.Button.Colors.BRAND,
        onClick: f,
        children: d.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
      })
    })]
  })
}