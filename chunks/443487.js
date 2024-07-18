t.d(n, {
  F9: function() {
return I;
  },
  Zb: function() {
return T;
  },
  e$: function() {
return m;
  },
  ll: function() {
return N;
  }
});
var l = t(735250);
t(470079);
var r = t(120356),
  a = t.n(r),
  o = t(442837),
  i = t(481060),
  u = t(271383),
  s = t(430824),
  c = t(594174),
  d = t(806519),
  E = t(5192),
  _ = t(192918),
  f = t(687694),
  v = t(827418);

function T(e) {
  let {
children: n,
selected: t
  } = e, {
showReplyIcon: r,
openOnHover: o
  } = (0, f.C)({
location: 'ContentCard'
  });
  return (0, l.jsxs)('div', {
className: a()(v.container, {
  [v.selected]: t
}, {
  [v.openOnHover]: o
}),
children: [
  n,
  r && (0, l.jsx)('div', {
    className: v.reply,
    children: (0, l.jsx)(i.ArrowAngleLeftUpIcon, {
      size: 'md',
      color: 'currentColor',
      className: v.icon
    })
  })
]
  });
}

function m(e) {
  let {
children: n
  } = e;
  return (0, l.jsx)('div', {
className: v.infoSection,
children: n
  });
}

function h(e) {
  let {
users: n,
guildId: t
  } = e;
  return (0, l.jsx)('div', {
className: v.facePile,
children: n.map((e, r) => {
  let a = (0, l.jsx)(i.Avatar, {
    src: e.getAvatarURL(t, 80),
    size: i.AvatarSizes.SIZE_16,
    'aria-label': 'avatar'
  });
  return r === n.length - 1 ? (0, l.jsx)('div', {
    className: v.facePileItem,
    children: a
  }, e.id) : (0, l.jsx)(d.ZP, {
    width: 16,
    height: 16,
    className: v.facePileItem,
    mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
    children: a
  }, e.id);
})
  });
}

function I(e) {
  let {
guildId: n,
channelId: t,
entry: r,
maxAvatars: a = 3
  } = e, d = r.author_id, f = (0, o.e7)([c.default], () => c.default.getUser(d)), {
displayParticipants: T,
numOtherParticipants: m
  } = (0, _.Z)(r, a), I = (0, o.e7)([u.ZP], () => u.ZP.getMember(n, d)), N = (0, o.e7)([s.Z], () => {
var e;
return (null == I ? void 0 : I.colorRoleId) != null ? null === (e = s.Z.getRole(n, I.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
  }, [
n,
I
  ]);
  if (null == f)
return null;
  let x = null == I ? void 0 : I.colorString,
g = E.ZP.getName(n, t, f);
  return (0, l.jsxs)('div', {
className: v.userSection,
children: [
  (0, l.jsx)(h, {
    users: T,
    guildId: n
  }),
  (0, l.jsx)(i.NameWithRole, {
    color: null != x ? x : void 0,
    roleName: N,
    name: g,
    className: v.userName
  }),
  m > 0 ? (0, l.jsx)('div', {
    className: v.additionalParticipantBadge,
    children: (0, l.jsxs)(i.Text, {
      variant: 'text-xxs/medium',
      color: 'text-normal',
      className: v.additionalParticipantBadgeText,
      children: [
        '+',
        m
      ]
    })
  }) : null
]
  });
}

function N(e) {
  let {
children: n
  } = e;
  return (0, l.jsx)(i.Heading, {
variant: 'heading-sm/medium',
className: v.contentDescription,
lineClamp: 1,
children: n
  });
}