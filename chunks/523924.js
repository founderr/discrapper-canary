var s = n(735250);
n(470079);
var i = n(481060),
  l = n(346656),
  a = n(689938),
  r = n(640380),
  o = n(364632);
t.Z = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: c,
    confirmText: u,
    onWithdrawApplication: d,
    rejectionReason: E = null,
    guild: h = null
  } = e;
  return (0, s.jsxs)("div", {
    className: r.confirmation,
    children: [(0, s.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== h ? (0, s.jsx)(l.Z, {
        size: l.Z.Sizes.LARGER,
        guild: h,
        className: r.guildIcon
      }) : (0, s.jsx)("img", {
        alt: a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, s.jsx)(i.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == h ? void 0 : h.name) != null ? a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
          guildName: h.name
        }) : a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
      }), null != E && "" !== E ? (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(i.Text, {
          variant: "text-sm/normal",
          children: [(0, s.jsx)("span", {
            className: r.rejectionReasonLabel,
            children: a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
          }), (0, s.jsx)("span", {
            className: r.rejectionReason,
            children: E
          })]
        })
      }) : null]
    }), (0, s.jsxs)("div", {
      className: r.confirmationButtonRow,
      children: [(0, s.jsx)(i.Button, {
        onClick: c,
        color: i.Button.Colors.PRIMARY,
        className: r.confirmationButton,
        children: n
      }), (0, s.jsx)(i.Button, {
        onClick: d,
        color: i.Button.Colors.RED,
        className: r.confirmationButton,
        children: u
      })]
    })]
  })
}