"use strict";
e.r(a), e.d(a, {
  IconVariant: function() {
    return t
  },
  default: function() {
    return u
  }
}), e("47120");
var t, i, r = e("735250"),
  o = e("470079"),
  s = e("481060"),
  l = e("759231"),
  c = e("689938"),
  d = e("710510");
(i = t || (t = {})).DANGER = "danger", i.WARNING = "warning";

function u(n) {
  let {
    transitionState: a,
    onClose: e,
    title: t,
    body: i,
    cta: u,
    closeLabel: h,
    onConfirm: x,
    iconVariant: N = "warning"
  } = n, [_, g] = o.useState(!1), j = async () => {
    g(!0);
    try {
      await x(), e()
    } finally {
      g(!1)
    }
  }, m = null != t ? t : c.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
  return (0, r.jsxs)(s.ModalRoot, {
    className: d.__invalid_container,
    size: s.ModalSize.DYNAMIC,
    transitionState: a,
    "aria-label": m,
    children: [(0, r.jsxs)(s.ModalContent, {
      className: d.content,
      children: [(0, r.jsxs)("div", {
        className: d.header,
        children: [(0, r.jsx)(l.default, {
          width: 20,
          height: 20,
          className: function(n) {
            switch (n) {
              case "danger":
                return d.dangerIcon;
              case "warning":
                return d.warningIcon
            }
          }(N)
        }), (0, r.jsx)(s.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: m
        })]
      }), (0, r.jsx)(s.Spacer, {
        size: 12
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: d.__invalid_body,
        children: i
      })]
    }), (0, r.jsxs)(s.ModalFooter, {
      children: [(0, r.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: j,
        submitting: _,
        children: u
      }), (0, r.jsx)(s.Spacer, {
        size: 12,
        horizontal: !0
      }), null != h && (0, r.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.OUTLINED,
        onClick: e,
        children: h
      })]
    })]
  })
}