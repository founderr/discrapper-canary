"use strict";
s.r(t), s.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return C
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return u
  }
});
var n = s("735250");
s("470079");
var i = s("481060"),
  r = s("311821"),
  l = s("285952"),
  a = s("409813"),
  o = s("689938");
let C = () => (0, n.jsx)("div", {
    children: (0, n.jsx)(i.Heading, {
      variant: "heading-xl/bold",
      children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  u = e => {
    let {
      onStepChange: t,
      onBackClick: s
    } = e;
    return (0, n.jsx)("div", {
      children: (0, n.jsxs)(i.ModalFooter, {
        justify: l.default.Justify.BETWEEN,
        align: l.default.Align.CENTER,
        children: [(0, n.jsx)(i.Button, {
          color: i.Button.Colors.BRAND,
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