n.r(t);
var s = n(735250);
n(470079);
var a = n(481060),
  r = n(153124),
  o = n(112612),
  i = n(689938),
  l = n(938885);
t.default = function(e) {
  let {
    onClose: t,
    transitionState: n,
    onSubmit: c
  } = e, {
    submitting: d,
    errorMessage: u,
    onSubmit: x
  } = (0, o.Z)({
    onSubmit: c,
    onClose: t
  }), N = (0, r.Dt)();
  return (0, s.jsxs)(a.ModalRoot, {
    className: l.container,
    transitionState: n,
    "aria-labelledby": N,
    children: [(0, s.jsxs)(a.ModalContent, {
      className: l.content,
      children: [(0, s.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        id: N,
        children: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_TITLE
      }), (0, s.jsx)(a.Text, {
        className: l.manualApprovalDescriptionText,
        color: "header-secondary",
        variant: "text-sm/normal",
        children: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_DESCRIPTION
      }), (0, s.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_EXPLANATION.format()
      }), null != u && (0, s.jsx)(a.Text, {
        className: l.__invalid_errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: u
      })]
    }), (0, s.jsxs)(a.ModalFooter, {
      children: [(0, s.jsx)(a.Button, {
        className: l.actionButton,
        color: a.Button.Colors.BRAND,
        submitting: d,
        onClick: x,
        size: a.Button.Sizes.SMALL,
        children: (0, s.jsx)(a.Text, {
          variant: "text-sm/semibold",
          children: i.Z.Messages.CONFIRM
        })
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        onClick: t,
        size: a.Button.Sizes.SMALL,
        children: (0, s.jsx)(a.Text, {
          variant: "text-sm/semibold",
          children: i.Z.Messages.CANCEL
        })
      })]
    })]
  })
}