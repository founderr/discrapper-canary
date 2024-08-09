n.d(s, {
  Z: function() {
return I;
  }
}), n(789020);
var i = n(735250);
n(470079);
var l = n(597312),
  o = n(442837),
  t = n(481060),
  r = n(860719),
  a = n(621853),
  d = n(689938),
  c = n(21232);

function u(e) {
  let {
icon: s,
title: n,
description: l
  } = e;
  return (0, i.jsxs)('div', {
className: c.row,
children: [
  (0, i.jsx)('div', {
    className: c.rowIcon,
    children: (0, i.jsx)(s, {
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
        children: n
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
user: s
  } = e, n = (0, o.e7)([a.Z], () => {
var e;
return null === (e = a.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
  }), {
hasMessageContent: I,
hasGuildPresences: _,
hasGuildMembers: f
  } = (0, r.w)({
flags: null == n ? void 0 : n.flags
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