n.d(l, {
  Z: function() {
    return d
  }
}), n(47120);
var t = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(481060),
  i = n(153124),
  c = n(689938),
  u = n(370350);

function d(e) {
  let {
    errorText: l,
    title: n,
    description: a,
    transitionState: d,
    onCancel: h,
    onConfirm: C,
    children: E
  } = e, I = (0, i.Dt)(), [m, x] = s.useState(!1), g = s.useCallback(async () => {
    x(!0);
    try {
      await C()
    } catch (e) {
      throw e
    } finally {
      x(!1)
    }
  }, [C]);
  return (0, t.jsxs)(r.ModalRoot, {
    className: u.modal,
    transitionState: d,
    "aria-labelledby": I,
    size: r.ModalSize.SMALL,
    children: [(0, t.jsxs)(r.ModalContent, {
      className: u.modalContent,
      children: [(0, t.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: I,
        children: n
      }), null != a && "" !== a ? (0, t.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: u.description,
        children: a
      }) : null, (0, t.jsx)("div", {
        className: u.body,
        children: E
      }), null != l && "" !== l ? (0, t.jsx)(r.Text, {
        className: u.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: l
      }) : null]
    }), (0, t.jsxs)(r.ModalFooter, {
      children: [(0, t.jsx)(r.Button, {
        submitting: m,
        className: u.button,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.BRAND,
        onClick: g,
        children: c.Z.Messages.SAVE
      }), (0, t.jsx)(r.Button, {
        className: o()(u.cancelButton, u.button),
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: h,
        children: c.Z.Messages.CANCEL
      })]
    })]
  })
}