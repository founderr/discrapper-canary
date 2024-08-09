n.d(s, {
  Z: function() {
return d;
  }
}), n(789020), n(653041);
var i = n(735250);
n(470079);
var l = n(481060),
  t = n(860719),
  o = n(689938),
  a = n(744224);

function r(e) {
  let {
content: s,
heading: n
  } = e;
  return (0, i.jsxs)('div', {
className: a.row,
children: [
  null != n ? (0, i.jsx)(l.Heading, {
    className: a.heading,
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
  } = (0, t.w)({
flags: s
  });
  if (null == s)
return null;
  let _ = [];
  return d && _.push((0, i.jsx)(r, {
heading: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
content: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), c && _.push((0, i.jsx)(r, {
heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), u && _.push((0, i.jsx)(r, {
heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), _.length > 0 && _.push((0, i.jsx)('div', {
className: a.divider,
children: (0, i.jsx)(l.FormDivider, {})
  })), _.push((0, i.jsx)(r, {
content: o.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
  helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
})
  })), (0, i.jsx)(l.ScrollerThin, {
className: n,
children: _
  });
}