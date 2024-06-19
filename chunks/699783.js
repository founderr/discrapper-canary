s.r(o), s.d(o, {
  default: function() {
    return N
  }
});
var t = s(735250),
  a = s(470079),
  n = s(399606),
  l = s(481060),
  r = s(194359),
  i = s(726521),
  c = s(594174),
  O = s(51144),
  d = s(941362),
  C = s(134612),
  u = s(981631),
  _ = s(689938),
  R = s(351944);

function N(e) {
  let {
    userId: o,
    channelId: s,
    transitionState: N,
    onBlock: T,
    onBlockAndReport: I,
    onClose: A,
    onCancel: B
  } = e, M = (0, d.q)(s), E = a.useCallback(() => {
    r.Z.addRelationship({
      userId: o,
      context: {
        location: C.zr
      },
      type: u.OGo.BLOCKED
    }), (0, l.showToast)((0, l.createToast)(_.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM, l.ToastType.SUCCESS))
  }, [o]), h = a.useCallback(() => {
    E(), T(), A()
  }, [E, T, A]), L = a.useCallback(() => {
    E(), (0, i.wk)(M), I(), A()
  }, [M, E, I, A]), P = (0, n.e7)([c.default], () => c.default.getUser(o)), S = O.ZP.useName(P);
  return (0, t.jsx)(l.ModalRoot, {
    transitionState: N,
    children: (0, t.jsx)(l.Scroller, {
      style: {
        overflow: "hidden auto"
      },
      children: (0, t.jsxs)(l.ModalContent, {
        className: R.modalContent,
        children: [(0, t.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: _.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
            name: S
          })
        }), (0, t.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: R.modalDescription,
          children: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_DESCRIPTION
        }), (0, t.jsx)(l.Button, {
          onClick: h,
          color: l.ButtonColors.BRAND,
          size: l.ButtonSizes.MEDIUM,
          children: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_BUTTON
        }), (0, t.jsx)(l.Button, {
          onClick: L,
          color: l.ButtonColors.PRIMARY,
          size: l.ButtonSizes.MEDIUM,
          children: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_AND_REPORT_BUTTON
        }), (0, t.jsx)(l.Button, {
          onClick: B,
          color: l.ButtonColors.PRIMARY,
          look: l.ButtonLooks.OUTLINED,
          size: l.ButtonSizes.MEDIUM,
          children: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_CANCEL_BUTTON
        })]
      })
    })
  })
}