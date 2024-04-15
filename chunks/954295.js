"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("789020"), s("653041");
var l = s("735250");
s("470079");
var a = s("481060"),
  i = s("860719"),
  n = s("689938"),
  o = s("99441");

function r(e) {
  let {
    content: t,
    heading: s
  } = e;
  return (0, l.jsxs)("div", {
    className: o.row,
    children: [null != s ? (0, l.jsx)(a.Heading, {
      className: o.heading,
      variant: "text-sm/normal",
      children: s
    }) : null, (0, l.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t
    })]
  })
}

function u(e) {
  let {
    flags: t,
    listScrollerStyle: s
  } = e, {
    hasMessageContent: u,
    hasGuildPresences: d,
    hasGuildMembers: c
  } = (0, i.useBotDataAccess)({
    flags: t
  });
  if (null == t) return null;
  let f = [];
  return u && f.push((0, l.jsx)(r, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), d && f.push((0, l.jsx)(r, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), c && f.push((0, l.jsx)(r, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), f.length > 0 && f.push((0, l.jsx)("div", {
    className: o.divider,
    children: (0, l.jsx)(a.FormDivider, {})
  })), f.push((0, l.jsx)(r, {
    content: n.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
    })
  })), (0, l.jsx)(a.ScrollerThin, {
    className: s,
    children: f
  })
}