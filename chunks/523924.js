"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("346656"),
  i = a("689938"),
  r = a("891054"),
  o = a("364632");
t.default = e => {
  let {
    headerId: t,
    reapplyText: a,
    onReapply: u,
    confirmText: d,
    onWithdrawApplication: c,
    rejectionReason: f = null,
    guild: E = null
  } = e;
  return (0, n.jsxs)("div", {
    className: r.confirmation,
    children: [(0, n.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== E ? (0, n.jsx)(l.default, {
        size: l.default.Sizes.LARGER,
        guild: E,
        className: r.guildIcon
      }) : (0, n.jsx)("img", {
        alt: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, n.jsx)(s.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == E ? void 0 : E.name) != null ? i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
          guildName: E.name
        }) : i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
      }), null != f && "" !== f ? (0, n.jsx)(n.Fragment, {
        children: (0, n.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: [(0, n.jsx)("span", {
            className: r.rejectionReasonLabel,
            children: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
          }), (0, n.jsx)("span", {
            className: r.rejectionReason,
            children: f
          })]
        })
      }) : null]
    }), (0, n.jsxs)("div", {
      className: r.confirmationButtonRow,
      children: [(0, n.jsx)(s.Button, {
        onClick: u,
        color: s.Button.Colors.PRIMARY,
        className: r.confirmationButton,
        children: a
      }), (0, n.jsx)(s.Button, {
        onClick: c,
        color: s.Button.Colors.RED,
        className: r.confirmationButton,
        children: d
      })]
    })]
  })
}