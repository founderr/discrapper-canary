s.d(n, {
  Z: function() {
return m;
  }
});
var i = s(735250);
s(470079);
var l = s(120356),
  o = s.n(l),
  t = s(481060),
  r = s(194359),
  a = s(906732),
  d = s(475413),
  c = s(261253),
  u = s(7242),
  I = s(934861),
  _ = s(981631),
  f = s(689938),
  E = s(353040);

function m(e) {
  let {
isCurrentUser: n,
user: s,
relationshipType: l,
friendToken: m,
persistentCallCtaEnabled: S = !1,
activeInviteToCallCtaEnabled: Z = !1,
onClose: v
  } = e, {
newestAnalyticsLocation: x
  } = (0, a.ZP)();
  if (n || l === _.OGo.BLOCKED)
return null;
  let h = S ? (0, i.jsx)(c.Z, {
  user: s,
  onClose: v
}) : null,
p = (0, i.jsx)(u.Z, {
  user: s,
  onClose: v
});
  if (l === _.OGo.FRIEND && Z && null != p)
return (0, i.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, i.jsx)(I.v, {
      userId: s.id,
      onClose: v
    }),
    p
  ]
});
  if (l === _.OGo.FRIEND || s.bot)
return (0, i.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    h,
    (0, i.jsx)(I.c, {
      userId: s.id,
      onClose: v
    })
  ]
});
  if (l === _.OGo.PENDING_OUTGOING || l === _.OGo.PENDING_INCOMING)
return Z && null != p ? (0, i.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, i.jsx)(d.ef, {
      icon: t.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, i.jsx)(I.v, {
      userId: s.id,
      onClose: v
    }),
    p
  ]
}) : (0, i.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, i.jsx)(d.ef, {
      icon: t.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    h,
    (0, i.jsx)(I.c, {
      userId: s.id,
      onClose: v
    })
  ]
});
  return Z && null != p ? (0, i.jsxs)('div', {
className: E.multipleButtons,
children: [
  (0, i.jsx)(d.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    tooltipText: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      r.Z.addRelationship({
        userId: s.id,
        context: {
          location: x
        },
        friendToken: m
      });
    }
  }),
  (0, i.jsx)(I.v, {
    userId: s.id,
    onClose: v
  }),
  p
]
  }) : (0, i.jsxs)('div', {
className: E.multipleButtons,
children: [
  h,
  (0, i.jsx)(I.v, {
    userId: s.id,
    onClose: v
  }),
  (0, i.jsx)(d.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: o()(t.Button.Colors.BRAND, E.color),
    onClick: () => {
      r.Z.addRelationship({
        userId: s.id,
        context: {
          location: x
        },
        friendToken: m
      });
    }
  })
]
  });
}