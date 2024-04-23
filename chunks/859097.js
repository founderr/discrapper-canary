"use strict";
t.r(a), t.d(a, {
  TwoWayLinkError: function() {
    return d
  }
});
var n = t("735250");
t("470079");
var s = t("481060"),
  l = t("285952"),
  r = t("441957"),
  o = t("689938"),
  i = t("837537"),
  c = t("387852");

function d(e) {
  let {
    onContinue: a,
    onClose: t,
    title: d,
    body: u
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.ModalHeader, {
      direction: l.default.Direction.VERTICAL,
      className: i.header,
      separator: !1,
      children: [(0, n.jsx)("img", {
        src: c,
        className: i.illustration,
        width: "254",
        height: "127",
        alt: ""
      }), (0, n.jsx)(s.Heading, {
        className: i.title,
        variant: "heading-xl/extrabold",
        children: d
      }), null != t && (0, n.jsx)(s.ModalCloseButton, {
        className: i.closeButton,
        onClick: t
      })]
    }), (0, n.jsx)(s.ModalContent, {
      className: i.body,
      paddingFix: !1,
      children: (0, n.jsx)(s.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: u
      })
    }), (0, n.jsx)(s.ModalFooter, {
      className: i.footer,
      children: (0, n.jsxs)(s.Button, {
        className: i.footerButton,
        color: s.Button.Colors.BRAND,
        onClick: a,
        children: [o.default.Messages.TRY_AGAIN, (0, n.jsx)(r.default, {
          className: i.launchIcon,
          width: "16",
          height: "16"
        })]
      })
    })]
  })
}