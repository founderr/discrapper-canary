i.d(n, {
  Z: function() {
    return d
  }
}), i(789020), i(653041);
var t = i(735250);
i(470079);
var s = i(481060),
  o = i(860719),
  l = i(689938),
  a = i(433587);

function r(e) {
  let {
    content: n,
    heading: i
  } = e;
  return (0, t.jsxs)("div", {
    className: a.row,
    children: [null != i ? (0, t.jsx)(s.Heading, {
      className: a.heading,
      variant: "text-sm/normal",
      children: i
    }) : null, (0, t.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: n
    })]
  })
}

function d(e) {
  let {
    flags: n,
    listScrollerStyle: i
  } = e, {
    hasMessageContent: d,
    hasGuildPresences: c,
    hasGuildMembers: u
  } = (0, o.w)({
    flags: n
  });
  if (null == n) return null;
  let I = [];
  return d && I.push((0, t.jsx)(r, {
    heading: l.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    content: l.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), c && I.push((0, t.jsx)(r, {
    heading: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    content: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), u && I.push((0, t.jsx)(r, {
    heading: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    content: l.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), I.length > 0 && I.push((0, t.jsx)("div", {
    className: a.divider,
    children: (0, t.jsx)(s.FormDivider, {})
  })), I.push((0, t.jsx)(r, {
    content: l.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
    })
  })), (0, t.jsx)(s.ScrollerThin, {
    className: i,
    children: I
  })
}