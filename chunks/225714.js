n.d(s, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var l = n(481060),
  t = n(194359),
  o = n(906732),
  r = n(475413),
  a = n(261253),
  d = n(7242),
  c = n(934861),
  u = n(981631),
  _ = n(689938),
  I = n(353040);

function f(e) {
  let {
isCurrentUser: s,
user: n,
relationshipType: f,
friendToken: E,
persistentCallCtaEnabled: m = !1,
activeInviteToCallCtaEnabled: x = !1,
onClose: S
  } = e, {
newestAnalyticsLocation: v
  } = (0, o.ZP)();
  if (s || f === u.OGo.BLOCKED)
return null;
  let Z = m ? (0, i.jsx)(a.Z, {
  user: n,
  onClose: S
}) : null,
p = (0, i.jsx)(d.Z, {
  user: n,
  onClose: S
});
  if (f === u.OGo.FRIEND && x && null != p)
return (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    (0, i.jsx)(c.v, {
      userId: n.id,
      onClose: S
    }),
    p
  ]
});
  if (f === u.OGo.FRIEND || n.bot)
return (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    Z,
    (0, i.jsx)(c.c, {
      userId: n.id,
      onClose: S
    })
  ]
});
  if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
return x && null != p ? (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    (0, i.jsx)(r.ef, {
      icon: l.UserClockIcon,
      tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, i.jsx)(c.v, {
      userId: n.id,
      onClose: S
    }),
    p
  ]
}) : (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    (0, i.jsx)(r.ef, {
      icon: l.UserClockIcon,
      tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    Z,
    (0, i.jsx)(c.c, {
      userId: n.id,
      onClose: S
    })
  ]
});
  return x && null != p ? (0, i.jsxs)('div', {
className: I.multipleButtons,
children: [
  (0, i.jsx)(r.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    tooltipText: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      t.Z.addRelationship({
        userId: n.id,
        context: {
          location: v
        },
        friendToken: E
      });
    }
  }),
  (0, i.jsx)(c.v, {
    userId: n.id,
    onClose: S
  }),
  p
]
  }) : (0, i.jsxs)('div', {
className: I.multipleButtons,
children: [
  Z,
  (0, i.jsx)(c.v, {
    userId: n.id,
    onClose: S
  }),
  (0, i.jsx)(r.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    text: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: l.Button.Colors.BRAND,
    onClick: () => {
      t.Z.addRelationship({
        userId: n.id,
        context: {
          location: v
        },
        friendToken: E
      });
    }
  })
]
  });
}