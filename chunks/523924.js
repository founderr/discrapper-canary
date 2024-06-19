var i = n(735250);
n(470079);
var s = n(481060),
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
  return (0, i.jsxs)("div", {
    className: r.confirmation,
    children: [(0, i.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== h ? (0, i.jsx)(l.Z, {
        size: l.Z.Sizes.LARGER,
        guild: h,
        className: r.guildIcon
      }) : (0, i.jsx)("img", {
        alt: a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, i.jsx)(s.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == h ? void 0 : h.name) != null ? a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
          guildName: h.name
        }) : a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
      }), null != E && "" !== E ? (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: [(0, i.jsx)("span", {
            className: r.rejectionReasonLabel,
            children: a.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
          }), (0, i.jsx)("span", {
            className: r.rejectionReason,
            children: E
          })]
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: r.confirmationButtonRow,
      children: [(0, i.jsx)(s.Button, {
        onClick: c,
        color: s.Button.Colors.PRIMARY,
        className: r.confirmationButton,
        children: n
      }), (0, i.jsx)(s.Button, {
        onClick: d,
        color: s.Button.Colors.RED,
        className: r.confirmationButton,
        children: u
      })]
    })]
  })
}