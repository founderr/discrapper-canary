s.d(a, {
  F9: function() {
return T;
  },
  Zb: function() {
return N;
  },
  e$: function() {
return O;
  },
  ll: function() {
return m;
  }
});
var n = s(735250);
s(470079);
var t = s(120356),
  l = s.n(t),
  r = s(442837),
  i = s(481060),
  o = s(271383),
  c = s(430824),
  E = s(594174),
  _ = s(806519),
  d = s(5192),
  u = s(192918),
  I = s(687694),
  A = s(827418);

function N(e) {
  let {
children: a,
selected: s
  } = e, {
showReplyIcon: t,
openOnHover: r
  } = (0, I.C)({
location: 'ContentCard'
  });
  return (0, n.jsxs)('div', {
className: l()(A.container, {
  [A.selected]: s
}, {
  [A.openOnHover]: r
}),
children: [
  a,
  t && (0, n.jsx)('div', {
    className: A.reply,
    children: (0, n.jsx)(i.ArrowAngleLeftUpIcon, {
      size: 'md',
      color: 'currentColor',
      className: A.icon
    })
  })
]
  });
}

function O(e) {
  let {
children: a
  } = e;
  return (0, n.jsx)('div', {
className: A.infoSection,
children: a
  });
}

function R(e) {
  let {
users: a,
guildId: s
  } = e;
  return (0, n.jsx)('div', {
className: A.facePile,
children: a.map((e, t) => {
  let l = (0, n.jsx)(i.Avatar, {
    src: e.getAvatarURL(s, 80),
    size: i.AvatarSizes.SIZE_16,
    'aria-label': 'avatar'
  });
  return t === a.length - 1 ? (0, n.jsx)('div', {
    className: A.facePileItem,
    children: l
  }, e.id) : (0, n.jsx)(_.ZP, {
    width: 16,
    height: 16,
    className: A.facePileItem,
    mask: _.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
    children: l
  }, e.id);
})
  });
}

function T(e) {
  let {
guildId: a,
channelId: s,
entry: t,
maxAvatars: l = 3
  } = e, _ = t.author_id, I = (0, r.e7)([E.default], () => E.default.getUser(_)), {
displayParticipants: N,
numOtherParticipants: O
  } = (0, u.Z)(t, l), T = (0, r.e7)([o.ZP], () => o.ZP.getMember(a, _)), m = (0, r.e7)([c.Z], () => {
var e;
return (null == T ? void 0 : T.colorRoleId) != null ? null === (e = c.Z.getRole(a, T.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
  }, [
a,
T
  ]);
  if (null == I)
return null;
  let g = null == T ? void 0 : T.colorString,
P = d.ZP.getName(a, s, I);
  return (0, n.jsxs)('div', {
className: A.userSection,
children: [
  (0, n.jsx)(R, {
    users: N,
    guildId: a
  }),
  (0, n.jsx)(i.NameWithRole, {
    color: null != g ? g : void 0,
    roleName: m,
    name: P,
    className: A.userName
  }),
  O > 0 ? (0, n.jsx)('div', {
    className: A.additionalParticipantBadge,
    children: (0, n.jsxs)(i.Text, {
      variant: 'text-xxs/medium',
      color: 'text-normal',
      className: A.additionalParticipantBadgeText,
      children: [
        '+',
        O
      ]
    })
  }) : null
]
  });
}

function m(e) {
  let {
children: a
  } = e;
  return (0, n.jsx)(i.Heading, {
variant: 'heading-sm/medium',
className: A.contentDescription,
lineClamp: 1,
children: a
  });
}