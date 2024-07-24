t.d(n, {
  F9: function() {
return N;
  },
  Zb: function() {
return _;
  },
  e$: function() {
return E;
  },
  ll: function() {
return Z;
  }
});
var a = t(735250);
t(470079);
var l = t(120356),
  r = t.n(l),
  i = t(442837),
  o = t(481060),
  u = t(271383),
  c = t(430824),
  s = t(594174),
  d = t(806519),
  f = t(5192),
  h = t(192918),
  m = t(687694),
  v = t(827418);

function _(e) {
  let {
children: n,
selected: t
  } = e, {
showReplyIcon: l,
openOnHover: i
  } = (0, m.C)({
location: 'ContentCard'
  });
  return (0, a.jsxs)('div', {
className: r()(v.container, {
  [v.selected]: t
}, {
  [v.openOnHover]: i
}),
children: [
  n,
  l && (0, a.jsx)('div', {
    className: v.reply,
    children: (0, a.jsx)(o.ArrowAngleLeftUpIcon, {
      size: 'md',
      color: 'currentColor',
      className: v.icon
    })
  })
]
  });
}

function E(e) {
  let {
children: n
  } = e;
  return (0, a.jsx)('div', {
className: v.infoSection,
children: n
  });
}

function g(e) {
  let {
users: n,
guildId: t
  } = e;
  return (0, a.jsx)('div', {
className: v.facePile,
children: n.map((e, l) => {
  let r = (0, a.jsx)(o.Avatar, {
    src: e.getAvatarURL(t, 80),
    size: o.AvatarSizes.SIZE_16,
    'aria-label': 'avatar'
  });
  return l === n.length - 1 ? (0, a.jsx)('div', {
    className: v.facePileItem,
    children: r
  }, e.id) : (0, a.jsx)(d.ZP, {
    width: 16,
    height: 16,
    className: v.facePileItem,
    mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
    children: r
  }, e.id);
})
  });
}

function N(e) {
  let {
guildId: n,
channelId: t,
entry: l,
maxAvatars: r = 3
  } = e, d = l.author_id, m = (0, i.e7)([s.default], () => s.default.getUser(d)), {
displayParticipants: _,
numOtherParticipants: E
  } = (0, h.Z)(l, r), N = (0, i.e7)([u.ZP], () => u.ZP.getMember(n, d)), Z = (0, i.e7)([c.Z], () => {
var e;
return (null == N ? void 0 : N.colorRoleId) != null ? null === (e = c.Z.getRole(n, N.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
  }, [
n,
N
  ]);
  if (null == m)
return null;
  let I = null == N ? void 0 : N.colorString,
M = f.ZP.getName(n, t, m);
  return (0, a.jsxs)('div', {
className: v.userSection,
children: [
  (0, a.jsx)(g, {
    users: _,
    guildId: n
  }),
  (0, a.jsx)(o.NameWithRole, {
    color: null != I ? I : void 0,
    roleName: Z,
    name: M,
    className: v.userName
  }),
  E > 0 ? (0, a.jsx)('div', {
    className: v.additionalParticipantBadge,
    children: (0, a.jsxs)(o.Text, {
      variant: 'text-xxs/medium',
      color: 'text-normal',
      className: v.additionalParticipantBadgeText,
      children: [
        '+',
        E
      ]
    })
  }) : null
]
  });
}

function Z(e) {
  let {
children: n
  } = e;
  return (0, a.jsx)(o.Heading, {
variant: 'heading-sm/medium',
className: v.contentDescription,
lineClamp: 1,
children: n
  });
}