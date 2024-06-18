"use strict";
n.r(t);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(693789),
  a = n(1561),
  l = n(512983),
  u = n(466377),
  _ = n(993365),
  c = n(285952),
  d = n(689938),
  E = n(292176);
t.default = e => {
  let t, n, r, {
    body: I,
    cancelText: T,
    className: h,
    confirmColor: S,
    confirmText: f = d.Z.Messages.OKAY,
    secondaryConfirmText: N,
    onCancel: A,
    onClose: m,
    onConfirm: O,
    onConfirmSecondary: R,
    title: p,
    transitionState: g,
    titleClassName: C
  } = e;
  return null != T && "" !== T && (t = (0, i.jsx)(o.zx, {
    type: "button",
    size: o.zx.Sizes.LARGE,
    color: o.zx.Colors.PRIMARY,
    onClick: () => {
      null == m || m(), null == A || A()
    },
    className: E.secondaryButton,
    children: T
  })), null != f && "" !== f && (n = (0, i.jsx)(o.zx, {
    type: "submit",
    color: S,
    size: o.zx.Sizes.LARGE,
    className: s()(E.primaryButton, null != t ? E.gutter : null),
    autoFocus: !0,
    children: f
  })), null != N && "" !== N && (r = (0, i.jsx)(a.P, {
    onClick: () => {
      null == m || m(), null == R || R()
    },
    className: E.minorContainer,
    children: (0, i.jsx)(_.x, {
      className: E.secondaryAction,
      variant: "text-xs/normal",
      children: N
    })
  })), (0, i.jsx)(u.Y0, {
    transitionState: g,
    className: s()(h, E.container),
    "aria-label": p,
    children: (0, i.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == m || m(), null == O || O()
      },
      className: E.form,
      children: [(0, i.jsx)(u.hz, {
        className: E.modalContent,
        children: (0, i.jsxs)(c.Z, {
          direction: c.Z.Direction.VERTICAL,
          justify: c.Z.Justify.CENTER,
          className: E.content,
          children: [null != p && (0, i.jsx)(l.v, {
            tag: "h2",
            className: s()(E.title, C),
            children: p
          }), null != I && (0, i.jsx)(_.x, {
            variant: "text-md/normal",
            className: E.body,
            children: I
          })]
        })
      }), (0, i.jsxs)(u.mz, {
        justify: c.Z.Justify.BETWEEN,
        wrap: c.Z.Wrap.WRAP,
        children: [n, t, r]
      })]
    })
  })
}