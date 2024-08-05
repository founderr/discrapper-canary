i.d(s, {
  Z: function() {
return f;
  }
});
var n = i(735250);
i(470079);
var l = i(481060),
  t = i(194359),
  o = i(906732),
  a = i(475413),
  r = i(261253),
  d = i(7242),
  c = i(934861),
  u = i(981631),
  I = i(689938),
  _ = i(682731);

function f(e) {
  let {
isCurrentUser: s,
user: i,
relationshipType: f,
friendToken: m,
persistentCallCtaEnabled: E = !1,
activeInviteToCallCtaEnabled: x = !1,
onClose: v
  } = e, {
newestAnalyticsLocation: S
  } = (0, o.ZP)();
  if (s || f === u.OGo.BLOCKED)
return null;
  let Z = E ? (0, n.jsx)(r.Z, {
  user: i,
  onClose: v
}) : null,
h = (0, n.jsx)(d.Z, {
  user: i,
  onClose: v
});
  if (f === u.OGo.FRIEND && x && null != h)
return (0, n.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, n.jsx)(c.v, {
      userId: i.id,
      onClose: v
    }),
    h
  ]
});
  if (f === u.OGo.FRIEND || i.bot)
return (0, n.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    Z,
    (0, n.jsx)(c.c, {
      userId: i.id,
      onClose: v
    })
  ]
});
  if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
return x && null != h ? (0, n.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, n.jsx)(a.ef, {
      icon: l.UserClockIcon,
      tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, n.jsx)(c.v, {
      userId: i.id,
      onClose: v
    }),
    h
  ]
}) : (0, n.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, n.jsx)(a.ef, {
      icon: l.UserClockIcon,
      tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    Z,
    (0, n.jsx)(c.c, {
      userId: i.id,
      onClose: v
    })
  ]
});
  return x && null != h ? (0, n.jsxs)('div', {
className: _.multipleButtons,
children: [
  (0, n.jsx)(a.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      t.Z.addRelationship({
        userId: i.id,
        context: {
          location: S
        },
        friendToken: m
      });
    }
  }),
  (0, n.jsx)(c.v, {
    userId: i.id,
    onClose: v
  }),
  h
]
  }) : (0, n.jsxs)('div', {
className: _.multipleButtons,
children: [
  Z,
  (0, n.jsx)(c.v, {
    userId: i.id,
    onClose: v
  }),
  (0, n.jsx)(a.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: l.Button.Colors.BRAND,
    onClick: () => {
      t.Z.addRelationship({
        userId: i.id,
        context: {
          location: S
        },
        friendToken: m
      });
    }
  })
]
  });
}