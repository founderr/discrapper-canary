t.r(A), t.d(A, {
  IconVariant: function() {
    return n
  },
  default: function() {
    return d
  }
}), t(47120);
var n, a, s = t(735250),
  r = t(470079),
  l = t(481060),
  o = t(689938),
  i = t(368951);
(a = n || (n = {})).DANGER = "danger", a.WARNING = "warning";

function d(e) {
  let {
    transitionState: A,
    onClose: t,
    title: n,
    body: a,
    cta: d,
    closeLabel: c,
    onConfirm: u,
    iconVariant: C = "warning"
  } = e, [g, T] = r.useState(!1), U = async () => {
    T(!0);
    try {
      await u(), t()
    } finally {
      T(!1)
    }
  }, m = null != n ? n : o.Z.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, s.jsxs)(l.ModalRoot, {
    className: i.__invalid_container,
    size: l.ModalSize.DYNAMIC,
    transitionState: A,
    "aria-label": m,
    children: [(0, s.jsxs)(l.ModalContent, {
      className: i.content,
      children: [(0, s.jsxs)("div", {
        className: i.header,
        children: [(0, s.jsx)(l.CircleExclamationPointIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return i.dangerIcon;
              case "warning":
                return i.warningIcon
            }
          }(C)
        }), (0, s.jsx)(l.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, s.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: m
        })]
      }), (0, s.jsx)(l.Spacer, {
        size: 12
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: i.__invalid_body,
        children: a
      })]
    }), (0, s.jsxs)(l.ModalFooter, {
      children: [(0, s.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        onClick: U,
        submitting: g,
        children: d
      }), (0, s.jsx)(l.Spacer, {
        size: 12,
        horizontal: !0
      }), null != c && (0, s.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.OUTLINED,
        onClick: t,
        children: c
      })]
    })]
  })
}