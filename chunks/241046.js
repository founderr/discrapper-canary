s.r(o), s.d(o, {
  default: function() {
    return u
  }
});
var n = s(735250),
  t = s(470079),
  a = s(481060),
  d = s(367907),
  r = s(313889),
  i = s(177862),
  l = s(36459),
  c = s(981631),
  _ = s(689938),
  h = s(845811);

function u(e) {
  let {
    automodDecision: o,
    transitionState: s,
    onClose: u
  } = e, M = t.useCallback(() => {
    (0, d.yw)(c.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: i.x2.BUG,
      decision_id: o.decisionId,
      message_id: o.messageId,
      content: o.messageContent
    }), (0, l.Xx)(o.messageId, o.channel, r.d.SUBMIT_FEEDBACK), u()
  }, [o, u]);
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: s,
    size: a.ModalSize.SMALL,
    children: [(0, n.jsx)(a.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(a.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: _.Z.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_TITLE
      })
    }), (0, n.jsx)(a.ModalContent, {
      children: (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: _.Z.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_SUBTITLE
      })
    }), (0, n.jsxs)(a.ModalFooter, {
      children: [(0, n.jsx)("div", {
        className: h.button,
        children: (0, n.jsx)(a.Button, {
          onClick: M,
          color: a.Button.Colors.BRAND,
          look: a.Button.Looks.FILLED,
          children: _.Z.Messages.YES_TEXT
        })
      }), (0, n.jsx)(a.Button, {
        onClick: u,
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        children: _.Z.Messages.CANCEL
      })]
    })]
  })
}