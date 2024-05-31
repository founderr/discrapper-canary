"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("789020"), l("653041");
var s = l("735250");
l("470079");
var a = l("481060"),
  i = l("860719"),
  n = l("689938"),
  r = l("763638");

function o(e) {
  let {
    content: t,
    heading: l
  } = e;
  return (0, s.jsxs)("div", {
    className: r.row,
    children: [null != l ? (0, s.jsx)(a.Heading, {
      className: r.heading,
      variant: "text-sm/normal",
      children: l
    }) : null, (0, s.jsx)(a.Text, {
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
  } = (0, i.useBotDataAccess)({
    flags: t
  });
  if (null == t) return null;
  let f = [];
  return u && f.push((0, s.jsx)(o, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), d && f.push((0, s.jsx)(o, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), c && f.push((0, s.jsx)(o, {
    heading: n.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    content: n.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), f.length > 0 && f.push((0, s.jsx)("div", {
    className: r.divider,
    children: (0, s.jsx)(a.FormDivider, {})
  })), f.push((0, s.jsx)(o, {
    content: n.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
    })
  })), (0, s.jsx)(a.ScrollerThin, {
    className: l,
    children: f
  })
}