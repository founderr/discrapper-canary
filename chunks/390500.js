"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("346656"),
  i = a("689938"),
  r = a("72226"),
  o = a("586522");
t.default = e => {
  let {
    onWithdrawApplication: t,
    guild: a = null
  } = e;
  return (0, n.jsxs)("div", {
    className: r.confirmation,
    children: [(0, n.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== a ? (0, n.jsx)(l.default, {
        size: l.default.Sizes.LARGER,
        guild: a,
        className: r.guildIcon
      }) : (0, n.jsx)("img", {
        alt: i.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, n.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == a ? void 0 : a.name) != null ? i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE_WITH_GUILD_NAME.format({
          guildName: a.name
        }) : i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE
      })]
    }), (0, n.jsx)("div", {
      className: r.confirmationButtonColumn,
      children: (0, n.jsx)(s.Button, {
        onClick: t,
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.LINK,
        size: s.Button.Sizes.SMALL,
        children: i.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION
      })
    })]
  })
}