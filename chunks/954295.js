s.d(n, {
  Z: function() {
return d;
  }
}), s(789020), s(653041);
var i = s(735250);
s(470079);
var l = s(481060),
  o = s(860719),
  t = s(689938),
  r = s(744224);

function a(e) {
  let {
content: n,
heading: s
  } = e;
  return (0, i.jsxs)('div', {
className: r.row,
children: [
  null != s ? (0, i.jsx)(l.Heading, {
    className: r.heading,
    variant: 'text-sm/normal',
    children: s
  }) : null,
  (0, i.jsx)(l.Text, {
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: n
  })
]
  });
}

function d(e) {
  let {
flags: n,
listScrollerStyle: s
  } = e, {
hasMessageContent: d,
hasGuildPresences: c,
hasGuildMembers: u
  } = (0, o.w)({
flags: n
  });
  if (null == n)
return null;
  let I = [];
  return d && I.push((0, i.jsx)(a, {
heading: t.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
content: t.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), c && I.push((0, i.jsx)(a, {
heading: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
content: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), u && I.push((0, i.jsx)(a, {
heading: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
content: t.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), I.length > 0 && I.push((0, i.jsx)('div', {
className: r.divider,
children: (0, i.jsx)(l.FormDivider, {})
  })), I.push((0, i.jsx)(a, {
content: t.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
  helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
})
  })), (0, i.jsx)(l.ScrollerThin, {
className: s,
children: I
  });
}