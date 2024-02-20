"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("271841"),
  o = n("227645"),
  l = n("818810"),
  u = n("516256"),
  c = n("577776"),
  d = n("145131"),
  p = n("782340"),
  h = n("565695"),
  f = e => {
    let t, n, r, {
      body: f,
      cancelText: E,
      className: _,
      confirmColor: m,
      confirmText: S = p.default.Messages.OKAY,
      secondaryConfirmText: g,
      onCancel: T,
      onClose: I,
      onConfirm: v,
      onConfirmSecondary: C,
      title: A,
      transitionState: R,
      titleClassName: N
    } = e;
    return null != E && "" !== E && (t = (0, i.jsx)(a.Button, {
      type: "button",
      size: a.Button.Sizes.XLARGE,
      color: a.Button.Colors.PRIMARY,
      onClick: () => {
        null == I || I(), null == T || T()
      },
      className: h.secondaryButton,
      children: E
    })), null != S && "" !== S && (n = (0, i.jsx)(a.Button, {
      type: "submit",
      color: m,
      size: a.Button.Sizes.XLARGE,
      className: s(h.primaryButton, null != t ? h.gutter : null),
      autoFocus: !0,
      children: S
    })), null != g && "" !== g && (r = (0, i.jsx)(o.Clickable, {
      onClick: () => {
        null == I || I(), null == C || C()
      },
      className: h.minorContainer,
      children: (0, i.jsx)(c.Text, {
        className: h.secondaryAction,
        variant: "text-xs/normal",
        children: g
      })
    })), (0, i.jsx)(u.ModalRoot, {
      transitionState: R,
      className: s(_, h.container),
      "aria-label": A,
      children: (0, i.jsxs)("form", {
        onSubmit: e => {
          null != e && e.preventDefault(), null == I || I(), null == v || v()
        },
        className: h.form,
        children: [(0, i.jsx)(u.ModalContent, {
          className: h.modalContent,
          children: (0, i.jsxs)(d.default, {
            direction: d.default.Direction.VERTICAL,
            justify: d.default.Justify.CENTER,
            className: h.content,
            children: [null != A && (0, i.jsx)(l.FormTitle, {
              tag: "h2",
              className: s(h.title, N),
              children: A
            }), null != f && (0, i.jsx)(c.Text, {
              variant: "text-md/normal",
              className: h.body,
              children: f
            })]
          })
        }), (0, i.jsxs)(u.ModalFooter, {
          justify: d.default.Justify.BETWEEN,
          wrap: d.default.Wrap.WRAP,
          children: [n, t, r]
        })]
      })
    })
  }