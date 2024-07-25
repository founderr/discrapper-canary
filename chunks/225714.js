n.d(i, {
  Z: function() {
return E;
  }
});
var s = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  o = n(481060),
  a = n(194359),
  r = n(906732),
  d = n(475413),
  c = n(261253),
  u = n(7242),
  I = n(934861),
  _ = n(981631),
  f = n(689938),
  m = n(682731);

function E(e) {
  let {
isCurrentUser: i,
user: n,
relationshipType: l,
friendToken: E,
persistentCallCtaEnabled: x = !1,
activeInviteToCallCtaEnabled: v = !1,
onClose: h
  } = e, {
newestAnalyticsLocation: S
  } = (0, r.ZP)();
  if (i || l === _.OGo.BLOCKED)
return null;
  let Z = x ? (0, s.jsx)(c.Z, {
  user: n,
  onClose: h
}) : null,
p = (0, s.jsx)(u.Z, {
  user: n,
  onClose: h
});
  if (l === _.OGo.FRIEND && v && null != p)
return (0, s.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    (0, s.jsx)(I.v, {
      userId: n.id,
      onClose: h
    }),
    p
  ]
});
  if (l === _.OGo.FRIEND || n.bot)
return (0, s.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    Z,
    (0, s.jsx)(I.c, {
      userId: n.id,
      onClose: h
    })
  ]
});
  if (l === _.OGo.PENDING_OUTGOING || l === _.OGo.PENDING_INCOMING)
return v && null != p ? (0, s.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    (0, s.jsx)(d.ef, {
      icon: o.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, s.jsx)(I.v, {
      userId: n.id,
      onClose: h
    }),
    p
  ]
}) : (0, s.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    (0, s.jsx)(d.ef, {
      icon: o.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    Z,
    (0, s.jsx)(I.c, {
      userId: n.id,
      onClose: h
    })
  ]
});
  return v && null != p ? (0, s.jsxs)('div', {
className: m.multipleButtons,
children: [
  (0, s.jsx)(d.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: o.UserPlusIcon,
    tooltipText: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      a.Z.addRelationship({
        userId: n.id,
        context: {
          location: S
        },
        friendToken: E
      });
    }
  }),
  (0, s.jsx)(I.v, {
    userId: n.id,
    onClose: h
  }),
  p
]
  }) : (0, s.jsxs)('div', {
className: m.multipleButtons,
children: [
  Z,
  (0, s.jsx)(I.v, {
    userId: n.id,
    onClose: h
  }),
  (0, s.jsx)(d.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: o.UserPlusIcon,
    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: t()(o.Button.Colors.BRAND, m.color),
    onClick: () => {
      a.Z.addRelationship({
        userId: n.id,
        context: {
          location: S
        },
        friendToken: E
      });
    }
  })
]
  });
}