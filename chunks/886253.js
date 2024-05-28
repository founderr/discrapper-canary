"use strict";
n.r(t), n.d(t, {
  CardDetailsModal: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  l = n("481060"),
  a = n("812206"),
  s = n("601911"),
  o = n("689938"),
  u = n("135143"),
  d = n("224389");

function c(e) {
  let {
    appId: t,
    transitionState: n,
    onClose: c,
    onHeaderTitleClick: f,
    children: S,
    footer: p
  } = e, m = (0, r.useStateFromStores)([a.default], () => a.default.getApplication(t), [t]);
  if (null == m) return null;
  let h = (0, s.findAppIconSrc)(m, 25),
    {
      termsOfServiceUrl: T,
      privacyPolicyUrl: v
    } = m;
  return (0, i.jsxs)(l.ModalRoot, {
    transitionState: n,
    size: l.ModalSize.DYNAMIC,
    className: d.modal,
    children: [(0, i.jsxs)(l.ModalHeader, {
      className: u.modalHeader,
      children: [(0, i.jsxs)(l.Clickable, {
        className: u.modalTitle,
        onClick: f,
        children: [null != h && (0, i.jsx)("img", {
          src: h.href,
          alt: "",
          className: d.appIcon
        }), (0, i.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: m.name
        })]
      }), (0, i.jsx)(l.ModalCloseButton, {
        onClick: c,
        className: u.modalCloseBtn
      })]
    }), S, (0, i.jsxs)(l.ModalFooter, {
      className: d.footer,
      children: [null != T && null != v ? (0, i.jsx)(l.Text, {
        color: "header-primary",
        variant: "text-sm/normal",
        children: o.default.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
          tosUrl: T,
          ppUrl: v
        })
      }) : null, p]
    })]
  })
}