"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
});
var n = a("37983");
a("884691");
var l = a("65597"),
  s = a("77078"),
  i = a("535013"),
  r = a("915639"),
  u = a("476263"),
  o = a("153769"),
  c = a("299039"),
  d = a("782340"),
  f = a("334099");

function T(e) {
  let {
    userId: t,
    headingClassName: a,
    textClassName: T,
    guild: E,
    guildMember: A
  } = e, _ = (0, l.default)([r.default], () => r.default.locale), S = null != E && null != A;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Heading, {
      variant: "eyebrow",
      className: a,
      children: S ? d.default.Messages.USER_PROFILE_MEMBER_SINCE : d.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
    }), (0, n.jsxs)("div", {
      className: f.memberSinceContainer,
      children: [S && (0, n.jsx)(s.Tooltip, {
        text: d.default.Messages.DISCORD_NAME,
        children: e => (0, n.jsx)(o.default, {
          ...e,
          className: f.discordIcon
        })
      }), (0, n.jsx)(s.Text, {
        className: T,
        variant: "text-sm/normal",
        children: (0, i.getCreatedAtDate)(c.default.extractTimestamp(t), _)
      }), null != E && null != A && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: f.divider
        }), (0, n.jsx)(s.Tooltip, {
          text: E.name,
          children: e => (0, n.jsx)(u.default, {
            ...e,
            guild: E,
            size: u.default.Sizes.SMOL
          })
        }), (0, n.jsx)(s.Text, {
          className: T,
          variant: "text-sm/normal",
          children: (0, i.getCreatedAtDate)(A.joinedAt, _)
        })]
      })]
    })]
  })
}