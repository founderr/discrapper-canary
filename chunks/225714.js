i.d(s, {
  Z: function() {
return E;
  }
});
var n = i(735250);
i(470079);
var l = i(120356),
  t = i.n(l),
  o = i(481060),
  a = i(194359),
  r = i(906732),
  d = i(475413),
  c = i(261253),
  u = i(7242),
  I = i(934861),
  _ = i(981631),
  f = i(689938),
  m = i(682731);

function E(e) {
  let {
isCurrentUser: s,
user: i,
relationshipType: l,
friendToken: E,
persistentCallCtaEnabled: x = !1,
activeInviteToCallCtaEnabled: v = !1,
onClose: Z
  } = e, {
newestAnalyticsLocation: S
  } = (0, r.ZP)();
  if (s || l === _.OGo.BLOCKED)
return null;
  let h = x ? (0, n.jsx)(c.Z, {
  user: i,
  onClose: Z
}) : null,
p = (0, n.jsx)(u.Z, {
  user: i,
  onClose: Z
});
  if (l === _.OGo.FRIEND && v && null != p)
return (0, n.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    (0, n.jsx)(I.v, {
      userId: i.id,
      onClose: Z
    }),
    p
  ]
});
  if (l === _.OGo.FRIEND || i.bot)
return (0, n.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    h,
    (0, n.jsx)(I.c, {
      userId: i.id,
      onClose: Z
    })
  ]
});
  if (l === _.OGo.PENDING_OUTGOING || l === _.OGo.PENDING_INCOMING)
return v && null != p ? (0, n.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    (0, n.jsx)(d.ef, {
      icon: o.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, n.jsx)(I.v, {
      userId: i.id,
      onClose: Z
    }),
    p
  ]
}) : (0, n.jsxs)('div', {
  className: m.multipleButtons,
  children: [
    (0, n.jsx)(d.ef, {
      icon: o.UserClockIcon,
      tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    h,
    (0, n.jsx)(I.c, {
      userId: i.id,
      onClose: Z
    })
  ]
});
  return v && null != p ? (0, n.jsxs)('div', {
className: m.multipleButtons,
children: [
  (0, n.jsx)(d.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: o.UserPlusIcon,
    tooltipText: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      a.Z.addRelationship({
        userId: i.id,
        context: {
          location: S
        },
        friendToken: E
      });
    }
  }),
  (0, n.jsx)(I.v, {
    userId: i.id,
    onClose: Z
  }),
  p
]
  }) : (0, n.jsxs)('div', {
className: m.multipleButtons,
children: [
  h,
  (0, n.jsx)(I.v, {
    userId: i.id,
    onClose: Z
  }),
  (0, n.jsx)(d.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: o.UserPlusIcon,
    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: t()(o.Button.Colors.BRAND, m.color),
    onClick: () => {
      a.Z.addRelationship({
        userId: i.id,
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