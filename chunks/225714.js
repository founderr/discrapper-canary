i.d(n, {
  Z: function() {
return m;
  }
});
var s = i(735250);
i(470079);
var l = i(120356),
  o = i.n(l),
  t = i(481060),
  r = i(194359),
  a = i(906732),
  d = i(475413),
  c = i(261253),
  u = i(7242),
  I = i(934861),
  _ = i(981631),
  f = i(689938),
  E = i(353040);

function m(e) {
  let {
isCurrentUser: n,
user: i,
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
  let h = S ? (0, s.jsx)(c.Z, {
  user: i,
  onClose: v
}) : null,
p = (0, s.jsx)(u.Z, {
  user: i,
  onClose: v
});
  if (l === _.OGo.FRIEND && Z && null != p)
return (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, s.jsx)(I.v, {
      userId: i.id,
      onClose: v
    }),
    p
  ]
});
  if (l === _.OGo.FRIEND || i.bot)
return (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    h,
    (0, s.jsx)(I.c, {
      userId: i.id,
      onClose: v
    })
  ]
});
  if (l === _.OGo.PENDING_OUTGOING || l === _.OGo.PENDING_INCOMING)
return Z && null != p ? (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, s.jsx)(d.ef, {
      icon: t.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, s.jsx)(I.v, {
      userId: i.id,
      onClose: v
    }),
    p
  ]
}) : (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, s.jsx)(d.ef, {
      icon: t.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    h,
    (0, s.jsx)(I.c, {
      userId: i.id,
      onClose: v
    })
  ]
});
  return Z && null != p ? (0, s.jsxs)('div', {
className: E.multipleButtons,
children: [
  (0, s.jsx)(d.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    tooltipText: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      r.Z.addRelationship({
        userId: i.id,
        context: {
          location: x
        },
        friendToken: m
      });
    }
  }),
  (0, s.jsx)(I.v, {
    userId: i.id,
    onClose: v
  }),
  p
]
  }) : (0, s.jsxs)('div', {
className: E.multipleButtons,
children: [
  h,
  (0, s.jsx)(I.v, {
    userId: i.id,
    onClose: v
  }),
  (0, s.jsx)(d.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: o()(t.Button.Colors.BRAND, E.color),
    onClick: () => {
      r.Z.addRelationship({
        userId: i.id,
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