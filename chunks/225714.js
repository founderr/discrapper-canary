n.d(s, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var l = n(481060),
  o = n(194359),
  t = n(906732),
  r = n(475413),
  a = n(261253),
  d = n(7242),
  c = n(934861),
  u = n(981631),
  I = n(689938),
  _ = n(682731);

function f(e) {
  let {
isCurrentUser: s,
user: n,
relationshipType: f,
friendToken: E,
persistentCallCtaEnabled: m = !1,
activeInviteToCallCtaEnabled: S = !1,
onClose: Z
  } = e, {
newestAnalyticsLocation: x
  } = (0, t.ZP)();
  if (s || f === u.OGo.BLOCKED)
return null;
  let v = m ? (0, i.jsx)(a.Z, {
  user: n,
  onClose: Z
}) : null,
h = (0, i.jsx)(d.Z, {
  user: n,
  onClose: Z
});
  if (f === u.OGo.FRIEND && S && null != h)
return (0, i.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    (0, i.jsx)(c.v, {
      userId: n.id,
      onClose: Z
    }),
    h
  ]
});
  if (f === u.OGo.FRIEND || n.bot)
return (0, i.jsxs)('div', {
  className: _.multipleButtons,
  children: [
    v,
    (0, i.jsx)(c.c, {
      userId: n.id,
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
      userId: n.id,
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
    v,
    (0, i.jsx)(c.c, {
      userId: n.id,
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
        userId: n.id,
        context: {
          location: x
        },
        friendToken: E
      });
    }
  }),
  (0, i.jsx)(c.v, {
    userId: n.id,
    onClose: Z
  }),
  h
]
  }) : (0, i.jsxs)('div', {
className: _.multipleButtons,
children: [
  v,
  (0, i.jsx)(c.v, {
    userId: n.id,
    onClose: Z
  }),
  (0, i.jsx)(r.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: l.UserPlusIcon,
    text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: l.Button.Colors.BRAND,
    onClick: () => {
      o.Z.addRelationship({
        userId: n.id,
        context: {
          location: x
        },
        friendToken: E
      });
    }
  })
]
  });
}