"use strict";
t.r(a), t.d(a, {
  TwoWayLinkSuccess: function() {
    return i
  }
});
var n = t("735250");
t("470079");
var s = t("481060"),
  l = t("285952"),
  r = t("689938"),
  o = t("357331");

function i(e) {
  let {
    onClose: a,
    img: t,
    title: i,
    body: c,
    content: d
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.ModalHeader, {
      direction: l.default.Direction.VERTICAL,
      className: o.header,
      separator: !1,
      children: [(0, n.jsx)("div", {
        className: o.illustration,
        children: t
      }), (0, n.jsx)(s.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: i
      }), (0, n.jsx)(s.ModalCloseButton, {
        className: o.closeButton,
        onClick: a
      })]
    }), (0, n.jsxs)(s.ModalContent, {
      className: o.body,
      paddingFix: !1,
      children: [(0, n.jsx)(s.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: c
      }), d]
    }), (0, n.jsx)(s.ModalFooter, {
      className: o.footer,
      children: (0, n.jsx)(s.Button, {
        className: o.footerButton,
        color: s.Button.Colors.BRAND,
        onClick: a,
        children: r.default.Messages.DONE
      })
    })]
  })
}