"use strict";
t.r(A), t.d(A, {
  IconVariant: function() {
    return a
  },
  default: function() {
    return c
  }
}), t("47120");
var a, l, s = t("735250"),
  n = t("470079"),
  r = t("481060"),
  o = t("682864"),
  i = t("759231"),
  d = t("689938"),
  u = t("60021");
(l = a || (a = {})).DANGER = "danger", l.WARNING = "warning";

function c(e) {
  let {
    transitionState: A,
    onClose: t,
    title: a,
    body: l,
    cta: c,
    closeLabel: C,
    onConfirm: f,
    iconVariant: g = "warning"
  } = e, [T, U] = n.useState(!1), h = async () => {
    U(!0);
    try {
      await f(), t()
    } finally {
      U(!1)
    }
  }, m = null != a ? a : d.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, s.jsxs)(r.ModalRoot, {
    className: u.__invalid_container,
    size: r.ModalSize.DYNAMIC,
    transitionState: A,
    "aria-label": m,
    children: [(0, s.jsxs)(r.ModalContent, {
      className: u.content,
      children: [(0, s.jsxs)("div", {
        className: u.header,
        children: [(0, s.jsx)(i.default, {
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return u.dangerIcon;
              case "warning":
                return u.warningIcon
            }
          }(g)
        }), (0, s.jsx)(o.default, {
          size: 8,
          horizontal: !0
        }), (0, s.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: m
        })]
      }), (0, s.jsx)(o.default, {
        size: 12
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.__invalid_body,
        children: l
      })]
    }), (0, s.jsxs)(r.ModalFooter, {
      children: [(0, s.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: h,
        submitting: T,
        children: c
      }), (0, s.jsx)(o.default, {
        size: 12,
        horizontal: !0
      }), null != C && (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.OUTLINED,
        onClick: t,
        children: C
      })]
    })]
  })
}