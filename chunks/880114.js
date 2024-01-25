"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983");
n("884691");
var a = n("65597"),
  s = n("77078"),
  i = n("535013"),
  r = n("915639"),
  u = n("476263"),
  o = n("153769"),
  c = n("299039"),
  d = n("782340"),
  f = n("334099");

function T(e) {
  let {
    userId: t,
    headingClassName: n,
    textClassName: T,
    guild: E,
    guildMember: A
  } = e, _ = (0, a.default)([r.default], () => r.default.locale), S = null != E && null != A;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Heading, {
      variant: "eyebrow",
      className: n,
      children: S ? d.default.Messages.USER_PROFILE_MEMBER_SINCE : d.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
    }), (0, l.jsxs)("div", {
      className: f.memberSinceContainer,
      children: [S && (0, l.jsx)(s.Tooltip, {
        text: d.default.Messages.DISCORD_NAME,
        children: e => (0, l.jsx)(o.default, {
          ...e,
          className: f.discordIcon
        })
      }), (0, l.jsx)(s.Text, {
        className: T,
        variant: "text-sm/normal",
        children: (0, i.getCreatedAtDate)(c.default.extractTimestamp(t), _)
      }), null != E && null != A && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: f.divider
        }), (0, l.jsx)(s.Tooltip, {
          text: E.name,
          children: e => (0, l.jsx)(u.default, {
            ...e,
            guild: E,
            size: u.default.Sizes.SMOL
          })
        }), (0, l.jsx)(s.Text, {
          className: T,
          variant: "text-sm/normal",
          children: (0, i.getCreatedAtDate)(A.joinedAt, _)
        })]
      })]
    })]
  })
}