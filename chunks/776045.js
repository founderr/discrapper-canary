"use strict";
t.r(A), t.d(A, {
  IconVariant: function() {
    return a
  },
  default: function() {
    return u
  }
}), t("47120");
var a, l, s = t("735250"),
  r = t("470079"),
  n = t("481060"),
  i = t("759231"),
  o = t("689938"),
  d = t("164153");
(l = a || (a = {})).DANGER = "danger", l.WARNING = "warning";

function u(e) {
  let {
    transitionState: A,
    onClose: t,
    title: a,
    body: l,
    cta: u,
    closeLabel: c,
    onConfirm: g,
    iconVariant: f = "warning"
  } = e, [C, h] = r.useState(!1), T = async () => {
    h(!0);
    try {
      await g(), t()
    } finally {
      h(!1)
    }
  }, U = null != a ? a : o.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, s.jsxs)(n.ModalRoot, {
    className: d.__invalid_container,
    size: n.ModalSize.DYNAMIC,
    transitionState: A,
    "aria-label": U,
    children: [(0, s.jsxs)(n.ModalContent, {
      className: d.content,
      children: [(0, s.jsxs)("div", {
        className: d.header,
        children: [(0, s.jsx)(i.default, {
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return d.dangerIcon;
              case "warning":
                return d.warningIcon
            }
          }(f)
        }), (0, s.jsx)(n.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, s.jsx)(n.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: U
        })]
      }), (0, s.jsx)(n.Spacer, {
        size: 12
      }), (0, s.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: d.__invalid_body,
        children: l
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      children: [(0, s.jsx)(n.Button, {
        color: n.Button.Colors.BRAND,
        onClick: T,
        submitting: C,
        children: u
      }), (0, s.jsx)(n.Spacer, {
        size: 12,
        horizontal: !0
      }), null != c && (0, s.jsx)(n.Button, {
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.OUTLINED,
        onClick: t,
        children: c
      })]
    })]
  })
}