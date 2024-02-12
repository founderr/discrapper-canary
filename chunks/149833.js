"use strict";
n.r(t), n.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return o
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  l = n("177998"),
  a = n("145131"),
  i = n("85336"),
  u = n("782340");
let o = () => (0, s.jsx)("div", {
    children: (0, s.jsx)(r.Heading, {
      variant: "heading-xl/bold",
      children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  d = e => {
    let {
      onStepChange: t,
      onBackClick: n
    } = e;
    return (0, s.jsx)("div", {
      children: (0, s.jsxs)(r.ModalFooter, {
        justify: a.default.Justify.BETWEEN,
        align: a.default.Align.CENTER,
        children: [(0, s.jsx)(r.Button, {
          color: r.Button.Colors.BRAND,
          onClick: () => {
            t(i.Step.ADD_PAYMENT_STEPS)
          },
          children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, s.jsx)(l.default, {
          onClick: n
        })]
      })
    })
  }