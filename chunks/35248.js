"use strict";
s.r(t), s.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return u
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return C
  }
});
var n = s("735250");
s("470079");
var l = s("481060"),
  r = s("311821"),
  i = s("285952"),
  a = s("409813"),
  o = s("689938");
let u = () => (0, n.jsx)("div", {
    children: (0, n.jsx)(l.Heading, {
      variant: "heading-xl/bold",
      children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  C = e => {
    let {
      onStepChange: t,
      onBackClick: s
    } = e;
    return (0, n.jsx)("div", {
      children: (0, n.jsxs)(l.ModalFooter, {
        justify: i.default.Justify.BETWEEN,
        align: i.default.Align.CENTER,
        children: [(0, n.jsx)(l.Button, {
          color: l.Button.Colors.BRAND,
          onClick: () => {
            t(a.Step.ADD_PAYMENT_STEPS)
          },
          children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, n.jsx)(r.default, {
          onClick: s
        })]
      })
    })
  }