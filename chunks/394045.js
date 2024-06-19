s.r(t);
var n = s(735250),
  a = s(470079),
  o = s(481060),
  i = s(434404),
  l = s(703656),
  r = s(153124),
  c = s(112612),
  I = s(981631),
  d = s(176505),
  u = s(689938),
  T = s(938885);
t.default = function(e) {
  let {
    guildId: t,
    submittedGuildJoinRequestsCount: s,
    onClose: x,
    transitionState: E,
    onConfirm: N
  } = e, _ = (0, r.Dt)(), {
    submitting: C,
    errorMessage: M,
    onSubmit: m
  } = (0, c.Z)({
    onSubmit: N,
    onClose: x
  }), h = a.useCallback(() => {
    x(), i.Z.close(), (0, l.uL)(I.Z5c.CHANNEL(t, d.oC.MEMBER_APPLICATIONS))
  }, [t, x]);
  return (0, n.jsxs)(o.ModalRoot, {
    className: T.container,
    transitionState: E,
    "aria-labelledby": _,
    children: [(0, n.jsxs)(o.ModalContent, {
      className: T.content,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        id: _,
        children: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_TITLE.format({
          count: s
        })
      }), (0, n.jsx)(o.Text, {
        className: T.descriptionText,
        color: "header-secondary",
        variant: "text-sm/normal",
        children: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_DESCRIPTIONG
      }), (0, n.jsx)(o.Clickable, {
        className: T.actionText,
        onClick: h,
        children: (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPLICATIONS_TITLE
        })
      }), null != M && (0, n.jsx)(o.Text, {
        className: T.__invalid_errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: M
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      children: [(0, n.jsx)(o.Button, {
        className: T.actionButton,
        color: o.Button.Colors.BRAND,
        submitting: C,
        onClick: m,
        size: o.Button.Sizes.SMALL,
        children: (0, n.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_CONTINUE_EDITING
        })
      }), (0, n.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        onClick: x,
        size: o.Button.Sizes.SMALL,
        children: (0, n.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: u.Z.Messages.CANCEL
        })
      })]
    })]
  })
}