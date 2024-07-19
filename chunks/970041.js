s.d(n, {
  Z: function() {
return I;
  }
}), s(789020);
var i = s(735250);
s(470079);
var l = s(597312),
  o = s(442837),
  t = s(481060),
  r = s(860719),
  a = s(621853),
  d = s(689938),
  c = s(21232);

function u(e) {
  let {
icon: n,
title: s,
description: l
  } = e;
  return (0, i.jsxs)('div', {
className: c.row,
children: [
  (0, i.jsx)('div', {
    className: c.rowIcon,
    children: (0, i.jsx)(n, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor'
    })
  }),
  (0, i.jsxs)('div', {
    className: c.rowText,
    children: [
      (0, i.jsx)(t.Heading, {
        variant: 'text-xs/semibold',
        children: s
      }),
      (0, i.jsx)(t.Text, {
        variant: 'text-sm/normal',
        children: l
      })
    ]
  })
]
  });
}

function I(e) {
  let {
user: n
  } = e, s = (0, o.e7)([a.Z], () => {
var e;
return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
  }), {
hasMessageContent: I,
hasGuildPresences: _,
hasGuildMembers: f
  } = (0, r.w)({
flags: null == s ? void 0 : s.flags
  });
  return (0, i.jsxs)(l.zJ, {
fade: !0,
className: c.scroller,
children: [
  I && (0, i.jsx)(u, {
    icon: t.ChatIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  }),
  _ && (0, i.jsx)(u, {
    icon: t.GameControllerIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  }),
  f && (0, i.jsx)(u, {
    icon: t.GroupIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  }),
  (0, i.jsx)(t.Text, {
    variant: 'text-xs/normal',
    children: d.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
    })
  })
]
  });
}