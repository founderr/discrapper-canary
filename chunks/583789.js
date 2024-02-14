"use strict";
a.r(l), a.d(l, {
  default: function() {
    return c
  }
}), a("222007");
var t = a("37983"),
  s = a("884691"),
  n = a("414456"),
  u = a.n(n),
  r = a("77078"),
  i = a("476765"),
  o = a("782340"),
  d = a("840921");

function c(e) {
  let {
    errorText: l,
    title: a,
    description: n,
    transitionState: c,
    onCancel: E,
    onConfirm: R,
    children: _
  } = e, h = (0, i.useUID)(), [M, f] = s.useState(!1), m = s.useCallback(async () => {
    f(!0);
    try {
      await R()
    } catch (e) {
      throw e
    } finally {
      f(!1)
    }
  }, [R]);
  return (0, t.jsxs)(r.ModalRoot, {
    className: d.modal,
    transitionState: c,
    "aria-labelledby": h,
    size: r.ModalSize.SMALL,
    children: [(0, t.jsxs)(r.ModalContent, {
      className: d.modalContent,
      children: [(0, t.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: h,
        children: a
      }), null != n && "" !== n ? (0, t.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: d.description,
        children: n
      }) : null, (0, t.jsx)("div", {
        className: d.body,
        children: _
      }), null != l && "" !== l ? (0, t.jsx)(r.Text, {
        className: d.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: l
      }) : null]
    }), (0, t.jsxs)(r.ModalFooter, {
      children: [(0, t.jsx)(r.Button, {
        submitting: M,
        className: d.button,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.BRAND,
        onClick: m,
        children: o.default.Messages.SAVE
      }), (0, t.jsx)(r.Button, {
        className: u(d.cancelButton, d.button),
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: E,
        children: o.default.Messages.CANCEL
      })]
    })]
  })
}