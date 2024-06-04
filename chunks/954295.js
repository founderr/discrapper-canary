"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("789020"), l("653041");
var s = l("735250");
l("470079");
var i = l("481060"),
  a = l("860719"),
  n = l("689938"),
  o = l("763638");

function r(e) {
  let {
    content: t,
    heading: l
  } = e;
  return (0, s.jsxs)("div", {
    className: o.row,
    children: [null != l ? (0, s.jsx)(i.Heading, {
      className: o.heading,
      variant: "text-sm/normal",
      children: l
    }) : null, (0, s.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t
    })]
  })
}

function u(e) {
  let {
    flags: t,
    listScrollerStyle: l
  } = e, {
    hasMessageContent: u,
    hasGuildPresences: d,
    hasGuildMembers: c
  } = (0, a.useBotDataAccess)({
    flags: t
  });
  if (null == t) return null;
  let f = [];
  return u && f.push((0, s.jsx)(r, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), d && f.push((0, s.jsx)(r, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), c && f.push((0, s.jsx)(r, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), f.length > 0 && f.push((0, s.jsx)("div", {
    className: o.divider,
    children: (0, s.jsx)(i.FormDivider, {})
  })), f.push((0, s.jsx)(r, {
    content: n.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
    })
  })), (0, s.jsx)(i.ScrollerThin, {
    className: l,
    children: f
  })
}