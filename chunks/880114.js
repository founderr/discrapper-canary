"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("37983");
l("884691");
var n = l("65597"),
  s = l("77078"),
  i = l("535013"),
  r = l("915639"),
  u = l("476263"),
  o = l("153769"),
  c = l("299039"),
  d = l("782340"),
  f = l("334099");

function T(e) {
  let {
    userId: t,
    headingClassName: l,
    textClassName: T,
    guild: E,
    guildMember: A
  } = e, _ = (0, n.default)([r.default], () => r.default.locale), S = null != E && null != A;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Heading, {
      variant: "eyebrow",
      className: l,
      children: S ? d.default.Messages.USER_PROFILE_MEMBER_SINCE : d.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
    }), (0, a.jsxs)("div", {
      className: f.memberSinceContainer,
      children: [S && (0, a.jsx)(s.Tooltip, {
        text: d.default.Messages.DISCORD_NAME,
        children: e => (0, a.jsx)(o.default, {
          ...e,
          className: f.discordIcon
        })
      }), (0, a.jsx)(s.Text, {
        className: T,
        variant: "text-sm/normal",
        children: (0, i.getCreatedAtDate)(c.default.extractTimestamp(t), _)
      }), null != E && null != A && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: f.divider
        }), (0, a.jsx)(s.Tooltip, {
          text: E.name,
          children: e => (0, a.jsx)(u.default, {
            ...e,
            guild: E,
            size: u.default.Sizes.SMOL
          })
        }), (0, a.jsx)(s.Text, {
          className: T,
          variant: "text-sm/normal",
          children: (0, i.getCreatedAtDate)(A.joinedAt, _)
        })]
      })]
    })]
  })
}