"use strict";
o.r(t), o.d(t, {
  default: function() {
    return c
  }
});
var s = o("37983"),
  a = o("884691"),
  l = o("65597"),
  n = o("77078"),
  r = o("697218"),
  d = o("158998"),
  i = o("782340"),
  u = o("274375");

function c(e) {
  let {
    userId: t,
    transitionState: o,
    onBlock: c,
    onBlockAndReport: O,
    onClose: C,
    onCancel: _
  } = e, N = a.useCallback(() => {
    c(), C()
  }, [c, C]), R = a.useCallback(() => {
    O(), C()
  }, [O, C]), I = (0, l.default)([r.default], () => r.default.getUser(t)), A = d.default.useName(I);
  return (0, s.jsx)(n.ModalRoot, {
    transitionState: o,
    children: (0, s.jsx)(n.Scroller, {
      style: {
        overflow: "hidden auto"
      },
      children: (0, s.jsxs)(n.ModalContent, {
        className: u.modalContent,
        children: [(0, s.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: i.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
            name: A
          })
        }), (0, s.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: u.modalDescription,
          children: i.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_DESCRIPTION
        }), (0, s.jsx)(n.Button, {
          onClick: N,
          color: n.ButtonColors.BRAND,
          size: n.ButtonSizes.MEDIUM,
          children: i.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_BUTTON
        }), (0, s.jsx)(n.Button, {
          onClick: R,
          color: n.ButtonColors.PRIMARY,
          size: n.ButtonSizes.MEDIUM,
          children: i.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_AND_REPORT_BUTTON
        }), (0, s.jsx)(n.Button, {
          onClick: _,
          color: n.ButtonColors.PRIMARY,
          look: n.ButtonLooks.OUTLINED,
          size: n.ButtonSizes.MEDIUM,
          children: i.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_CANCEL_BUTTON
        })]
      })
    })
  })
}