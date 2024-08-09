n.d(s, {
  Z: function() {
return d;
  }
}), n(789020), n(653041);
var i = n(735250);
n(470079);
var l = n(481060),
  o = n(860719),
  t = n(689938),
  r = n(744224);

function a(e) {
  let {
content: s,
heading: n
  } = e;
  return (0, i.jsxs)('div', {
className: r.row,
children: [
  null != n ? (0, i.jsx)(l.Heading, {
    className: r.heading,
    variant: 'text-sm/normal',
    children: n
  }) : null,
  (0, i.jsx)(l.Text, {
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: s
  })
]
  });
}

function d(e) {
  let {
flags: s,
listScrollerStyle: n
  } = e, {
hasMessageContent: d,
hasGuildPresences: c,
hasGuildMembers: u
  } = (0, o.w)({
flags: s
  });
  if (null == s)
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
className: n,
children: I
  });
}