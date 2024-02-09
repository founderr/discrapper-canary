"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var r = l("37983");
l("884691");
var a = l("65597"),
  n = l("77078"),
  s = l("535013"),
  i = l("915639"),
  o = l("476263"),
  u = l("153769"),
  d = l("299039"),
  c = l("782340"),
  f = l("334099");

function T(e) {
  let {
    userId: t,
    headingClassName: l,
    textClassName: T,
    guild: p,
    guildMember: m
  } = e, E = (0, a.default)([i.default], () => i.default.locale), P = null != p && null != m;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(n.Heading, {
      variant: "eyebrow",
      className: l,
      children: P ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
    }), (0, r.jsxs)("div", {
      className: f.memberSinceContainer,
      children: [P && (0, r.jsx)(n.Tooltip, {
        text: c.default.Messages.DISCORD_NAME,
        children: e => (0, r.jsx)(u.default, {
          ...e,
          className: f.discordIcon
        })
      }), (0, r.jsx)(n.Text, {
        className: T,
        variant: "text-sm/normal",
        children: (0, s.getCreatedAtDate)(d.default.extractTimestamp(t), E)
      }), null != p && null != m && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: f.divider
        }), (0, r.jsx)(n.Tooltip, {
          text: p.name,
          children: e => (0, r.jsx)(o.default, {
            ...e,
            guild: p,
            size: o.default.Sizes.SMOL
          })
        }), (0, r.jsx)(n.Text, {
          className: T,
          variant: "text-sm/normal",
          children: (0, s.getCreatedAtDate)(m.joinedAt, E)
        })]
      })]
    })]
  })
}