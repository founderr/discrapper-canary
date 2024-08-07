s.d(n, {
  Z: function() {
return f;
  }
});
var i = s(735250);
s(470079);
var l = s(481060),
  o = s(194359),
  t = s(906732),
  r = s(475413),
  a = s(261253),
  d = s(7242),
  c = s(934861),
  u = s(981631),
  I = s(689938),
  _ = s(682731);

function f(e) {
  let {
isCurrentUser: n,
user: s,
relationshipType: f,
friendToken: E,
persistentCallCtaEnabled: m = !1,
activeInviteToCallCtaEnabled: S = !1,
onClose: Z
  } = e, {
newestAnalyticsLocation: v
  } = (0, t.ZP)();
  if (n || f === u.OGo.BLOCKED)
return null;
  let x = m ? (0, i.jsx)(a.Z, {
  user: s,
  onClose: Z
}) : null,
h = (0, i.jsx)(d.Z, {
  user: s,
  onClose: Z
});
  if (f === u.OGo.FRIEND && S && null != h)
return (0, i.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, i.jsx)(c.v, {
      userId: s.id,
      onClose: Z
    }),
    h
  ]
});
  if (f === u.OGo.FRIEND || s.bot)
return (0, i.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    x,
    (0, i.jsx)(c.c, {
      userId: s.id,
      onClose: Z
    })
  ]
});
  if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
return S && null != h ? (0, i.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, i.jsx)(r.ef, {
      icon: l.UserClockIcon,
      tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, i.jsx)(c.v, {
      userId: s.id,
      onClose: Z
    }),
    h
  ]
}) : (0, i.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, i.jsx)(r.ef, {
      icon: l.UserClockIcon,
      tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    x,
    (0, i.jsx)(c.c, {
      userId: s.id,
      onClose: Z
    })
  ]
});
  return S && null != h ? (0, i.jsxs)('div', {
className: _.multipleButtons,
children: [
  (0, i.jsx)(r.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      o.Z.addRelationship({
        userId: s.id,
        context: {
          location: v
        },
        friendToken: E
      });
    }
  }),
  (0, i.jsx)(c.v, {
    userId: s.id,
    onClose: Z
  }),
  h
]
  }) : (0, i.jsxs)('div', {
className: _.multipleButtons,
children: [
  x,
  (0, i.jsx)(c.v, {
    userId: s.id,
    onClose: Z
  }),
  (0, i.jsx)(r.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: l.Button.Colors.BRAND,
    onClick: () => {
      o.Z.addRelationship({
        userId: s.id,
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