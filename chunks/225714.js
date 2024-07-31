n.d(i, {
  Z: function() {
return f;
  }
});
var s = n(735250);
n(470079);
var l = n(481060),
  t = n(194359),
  o = n(906732),
  a = n(475413),
  r = n(261253),
  d = n(7242),
  c = n(934861),
  u = n(981631),
  I = n(689938),
  _ = n(682731);

function f(e) {
  let {
isCurrentUser: i,
user: n,
relationshipType: f,
friendToken: m,
persistentCallCtaEnabled: E = !1,
activeInviteToCallCtaEnabled: x = !1,
onClose: v
  } = e, {
newestAnalyticsLocation: Z
  } = (0, o.ZP)();
  if (i || f === u.OGo.BLOCKED)
return null;
  let h = E ? (0, s.jsx)(r.Z, {
  user: n,
  onClose: v
}) : null,
S = (0, s.jsx)(d.Z, {
  user: n,
  onClose: v
});
  if (f === u.OGo.FRIEND && x && null != S)
return (0, s.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, s.jsx)(c.v, {
      userId: n.id,
      onClose: v
    }),
    S
  ]
});
  if (f === u.OGo.FRIEND || n.bot)
return (0, s.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    h,
    (0, s.jsx)(c.c, {
      userId: n.id,
      onClose: v
    })
  ]
});
  if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
return x && null != S ? (0, s.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, s.jsx)(a.ef, {
      icon: l.UserClockIcon,
      tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, s.jsx)(c.v, {
      userId: n.id,
      onClose: v
    }),
    S
  ]
}) : (0, s.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, s.jsx)(a.ef, {
      icon: l.UserClockIcon,
      tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    h,
    (0, s.jsx)(c.c, {
      userId: n.id,
      onClose: v
    })
  ]
});
  return x && null != S ? (0, s.jsxs)('div', {
className: _.multipleButtons,
children: [
  (0, s.jsx)(a.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      t.Z.addRelationship({
        userId: n.id,
        context: {
          location: Z
        },
        friendToken: m
      });
    }
  }),
  (0, s.jsx)(c.v, {
    userId: n.id,
    onClose: v
  }),
  S
]
  }) : (0, s.jsxs)('div', {
className: _.multipleButtons,
children: [
  h,
  (0, s.jsx)(c.v, {
    userId: n.id,
    onClose: v
  }),
  (0, s.jsx)(a.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: l.Button.Colors.BRAND,
    onClick: () => {
      t.Z.addRelationship({
        userId: n.id,
        context: {
          location: Z
        },
        friendToken: m
      });
    }
  })
]
  });
}