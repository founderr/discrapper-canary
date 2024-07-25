n.d(t, {
  F9: function() {
return p;
  },
  Zb: function() {
return v;
  },
  e$: function() {
return g;
  },
  ll: function() {
return N;
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  r = n(481060),
  c = n(271383),
  o = n(430824),
  d = n(594174),
  u = n(806519),
  m = n(5192),
  x = n(192918),
  h = n(687694),
  f = n(827418);

function v(e) {
  let {
children: t,
selected: n
  } = e, {
showReplyIcon: i,
openOnHover: a
  } = (0, h.C)({
location: 'ContentCard'
  });
  return (0, l.jsxs)('div', {
className: s()(f.container, {
  [f.selected]: n
}, {
  [f.openOnHover]: a
}),
children: [
  t,
  i && (0, l.jsx)('div', {
    className: f.reply,
    children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {
      size: 'md',
      color: 'currentColor',
      className: f.icon
    })
  })
]
  });
}

function g(e) {
  let {
children: t
  } = e;
  return (0, l.jsx)('div', {
className: f.infoSection,
children: t
  });
}

function j(e) {
  let {
users: t,
guildId: n
  } = e;
  return (0, l.jsx)('div', {
className: f.facePile,
children: t.map((e, i) => {
  let s = (0, l.jsx)(r.Avatar, {
    src: e.getAvatarURL(n, 80),
    size: r.AvatarSizes.SIZE_16,
    'aria-label': 'avatar'
  });
  return i === t.length - 1 ? (0, l.jsx)('div', {
    className: f.facePileItem,
    children: s
  }, e.id) : (0, l.jsx)(u.ZP, {
    width: 16,
    height: 16,
    className: f.facePileItem,
    mask: u.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
    children: s
  }, e.id);
})
  });
}

function p(e) {
  let {
guildId: t,
channelId: n,
entry: i,
maxAvatars: s = 3
  } = e, u = i.author_id, h = (0, a.e7)([d.default], () => d.default.getUser(u)), {
displayParticipants: v,
numOtherParticipants: g
  } = (0, x.Z)(i, s), p = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, u)), N = (0, a.e7)([o.Z], () => {
var e;
return (null == p ? void 0 : p.colorRoleId) != null ? null === (e = o.Z.getRole(t, p.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
  }, [
t,
p
  ]);
  if (null == h)
return null;
  let _ = null == p ? void 0 : p.colorString,
I = m.ZP.getName(t, n, h);
  return (0, l.jsxs)('div', {
className: f.userSection,
children: [
  (0, l.jsx)(j, {
    users: v,
    guildId: t
  }),
  (0, l.jsx)(r.NameWithRole, {
    color: null != _ ? _ : void 0,
    roleName: N,
    name: I,
    className: f.userName
  }),
  g > 0 ? (0, l.jsx)('div', {
    className: f.additionalParticipantBadge,
    children: (0, l.jsxs)(r.Text, {
      variant: 'text-xxs/medium',
      color: 'text-normal',
      className: f.additionalParticipantBadgeText,
      children: [
        '+',
        g
      ]
    })
  }) : null
]
  });
}

function N(e) {
  let {
children: t
  } = e;
  return (0, l.jsx)(r.Heading, {
variant: 'heading-sm/medium',
className: f.contentDescription,
lineClamp: 1,
children: t
  });
}