n.d(i, {
  Z: function() {
return m;
  }
});
var s = n(735250);
n(470079);
var l = n(120356),
  o = n.n(l),
  t = n(481060),
  r = n(194359),
  a = n(906732),
  d = n(475413),
  c = n(261253),
  u = n(7242),
  I = n(934861),
  _ = n(981631),
  f = n(689938),
  E = n(682731);

function m(e) {
  let {
isCurrentUser: i,
user: n,
relationshipType: l,
friendToken: m,
persistentCallCtaEnabled: S = !1,
activeInviteToCallCtaEnabled: Z = !1,
onClose: v
  } = e, {
newestAnalyticsLocation: x
  } = (0, a.ZP)();
  if (i || l === _.OGo.BLOCKED)
return null;
  let h = S ? (0, s.jsx)(c.Z, {
  user: n,
  onClose: v
}) : null,
p = (0, s.jsx)(u.Z, {
  user: n,
  onClose: v
});
  if (l === _.OGo.FRIEND && Z && null != p)
return (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, s.jsx)(I.v, {
      userId: n.id,
      onClose: v
    }),
    p
  ]
});
  if (l === _.OGo.FRIEND || n.bot)
return (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    h,
    (0, s.jsx)(I.c, {
      userId: n.id,
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
      userId: n.id,
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
      userId: n.id,
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
        userId: n.id,
        context: {
          location: x
        },
        friendToken: m
      });
    }
  }),
  (0, s.jsx)(I.v, {
    userId: n.id,
    onClose: v
  }),
  p
]
  }) : (0, s.jsxs)('div', {
className: E.multipleButtons,
children: [
  h,
  (0, s.jsx)(I.v, {
    userId: n.id,
    onClose: v
  }),
  (0, s.jsx)(d.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: o()(t.Button.Colors.BRAND, E.color),
    onClick: () => {
      r.Z.addRelationship({
        userId: n.id,
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