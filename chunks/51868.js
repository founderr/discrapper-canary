a.r(t), a.d(t, {
  IconVariant: function() {
    return e
  },
  default: function() {
    return d
  }
}), a(47120);
var e, o, i = a(735250),
  r = a(470079),
  s = a(481060),
  l = a(689938),
  c = a(358678);
(o = e || (e = {})).DANGER = "danger", o.WARNING = "warning";

function d(n) {
  let {
    transitionState: t,
    onClose: a,
    title: e,
    body: o,
    cta: d,
    closeLabel: u,
    onConfirm: h,
    iconVariant: x = "warning"
  } = n, [m, N] = r.useState(!1), _ = async () => {
    N(!0);
    try {
      await h(), a()
    } finally {
      N(!1)
    }
  }, g = null != e ? e : l.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
  return (0, i.jsxs)(s.ModalRoot, {
    className: c.__invalid_container,
    size: s.ModalSize.DYNAMIC,
    transitionState: t,
    "aria-label": g,
    children: [(0, i.jsxs)(s.ModalContent, {
      className: c.content,
      children: [(0, i.jsxs)("div", {
        className: c.header,
        children: [(0, i.jsx)(s.CircleExclamationPointIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: function(n) {
            switch (n) {
              case "danger":
                return c.dangerIcon;
              case "warning":
                return c.warningIcon
            }
          }(x)
        }), (0, i.jsx)(s.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, i.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: g
        })]
      }), (0, i.jsx)(s.Spacer, {
        size: 12
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: c.__invalid_body,
        children: o
      })]
    }), (0, i.jsxs)(s.ModalFooter, {
      children: [(0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: _,
        submitting: m,
        children: d
      }), (0, i.jsx)(s.Spacer, {
        size: 12,
        horizontal: !0
      }), null != u && (0, i.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.OUTLINED,
        onClick: a,
        children: u
      })]
    })]
  })
}