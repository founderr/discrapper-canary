"use strict";
t.r(A), t.d(A, {
  IconVariant: function() {
    return a
  },
  default: function() {
    return c
  }
}), t("222007");
var a, l, n = t("37983"),
  s = t("884691"),
  r = t("77078"),
  i = t("191814"),
  o = t("423487"),
  d = t("782340"),
  u = t("55472");
(l = a || (a = {})).DANGER = "danger", l.WARNING = "warning";

function c(e) {
  let {
    transitionState: A,
    onClose: t,
    title: a,
    body: l,
    cta: c,
    closeLabel: f,
    onConfirm: g,
    iconVariant: C = "warning"
  } = e, [h, T] = s.useState(!1), m = async () => {
    T(!0);
    try {
      await g(), t()
    } finally {
      T(!1)
    }
  }, U = null != a ? a : d.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, n.jsxs)(r.ModalRoot, {
    className: u.container,
    size: r.ModalSize.DYNAMIC,
    transitionState: A,
    "aria-label": U,
    children: [(0, n.jsxs)(r.ModalContent, {
      className: u.content,
      children: [(0, n.jsxs)("div", {
        className: u.header,
        children: [(0, n.jsx)(o.default, {
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return u.dangerIcon;
              case "warning":
                return u.warningIcon
            }
          }(C)
        }), (0, n.jsx)(i.default, {
          size: 8,
          horizontal: !0
        }), (0, n.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: U
        })]
      }), (0, n.jsx)(i.default, {
        size: 12
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.body,
        children: l
      })]
    }), (0, n.jsxs)(r.ModalFooter, {
      children: [(0, n.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: m,
        submitting: h,
        children: c
      }), (0, n.jsx)(i.default, {
        size: 12,
        horizontal: !0
      }), null != f && (0, n.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.OUTLINED,
        onClick: t,
        children: f
      })]
    })]
  })
}