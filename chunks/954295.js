s.d(i, {
  Z: function() {
    return d
  }
}), s(789020), s(653041);
var n = s(735250);
s(470079);
var l = s(481060),
  t = s(860719),
  o = s(689938),
  r = s(433587);

function a(e) {
  let {
    content: i,
    heading: s
  } = e;
  return (0, n.jsxs)("div", {
    className: r.row,
    children: [null != s ? (0, n.jsx)(l.Heading, {
      className: r.heading,
      variant: "text-sm/normal",
      children: s
    }) : null, (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i
    })]
  })
}

function d(e) {
  let {
    flags: i,
    listScrollerStyle: s
  } = e, {
    hasMessageContent: d,
    hasGuildPresences: c,
    hasGuildMembers: u
  } = (0, t.w)({
    flags: i
  });
  if (null == i) return null;
  let I = [];
  return d && I.push((0, n.jsx)(a, {
    heading: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    content: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), c && I.push((0, n.jsx)(a, {
    heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), u && I.push((0, n.jsx)(a, {
    heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), I.length > 0 && I.push((0, n.jsx)("div", {
    className: r.divider,
    children: (0, n.jsx)(l.FormDivider, {})
  })), I.push((0, n.jsx)(a, {
    content: o.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
    })
  })), (0, n.jsx)(l.ScrollerThin, {
    className: s,
    children: I
  })
}