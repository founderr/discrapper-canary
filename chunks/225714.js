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
  f = n(981631),
  _ = n(689938),
  E = n(682731);

function m(e) {
  let {
isCurrentUser: i,
user: n,
relationshipType: l,
friendToken: m,
improvedFriendingEnabled: S = !1,
persistentCallCtaEnabled: Z = !1,
activeInviteToCallCtaEnabled: x = !1,
onClose: v
  } = e, {
newestAnalyticsLocation: h
  } = (0, a.ZP)();
  if (i || l === f.OGo.BLOCKED)
return null;
  let p = Z ? (0, s.jsx)(c.Z, {
user: n,
onClose: v
  }) : null;
  if (S) {
let e = (0, s.jsx)(u.Z, {
  user: n,
  onClose: v
});
if (l === f.OGo.FRIEND && x && null != e)
  return (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      (0, s.jsx)(I.v, {
        userId: n.id,
        onClose: v
      }),
      e
    ]
  });
if (l === f.OGo.FRIEND || n.bot)
  return (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      p,
      (0, s.jsx)(I.c, {
        userId: n.id,
        onClose: v
      })
    ]
  });
if (l === f.OGo.PENDING_OUTGOING || l === f.OGo.PENDING_INCOMING)
  return x && null != e ? (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      (0, s.jsx)(d.ef, {
        icon: t.UserClockIcon,
        tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
        disabled: !0
      }),
      (0, s.jsx)(I.v, {
        userId: n.id,
        onClose: v
      }),
      e
    ]
  }) : (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      (0, s.jsx)(d.ef, {
        icon: t.UserClockIcon,
        tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
        disabled: !0
      }),
      p,
      (0, s.jsx)(I.c, {
        userId: n.id,
        onClose: v
      })
    ]
  });
return x && null != e ? (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, s.jsx)(d.ef, {
      action: 'SEND_FRIEND_REQUEST',
      icon: t.UserPlusIcon,
      tooltipText: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
      onClick: () => {
        r.Z.addRelationship({
          userId: n.id,
          context: {
            location: h
          },
          friendToken: m
        });
      }
    }),
    (0, s.jsx)(I.v, {
      userId: n.id,
      onClose: v
    }),
    e
  ]
}) : (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    p,
    (0, s.jsx)(I.v, {
      userId: n.id,
      onClose: v
    }),
    (0, s.jsx)(d.tG, {
      action: 'SEND_FRIEND_REQUEST',
      icon: t.UserPlusIcon,
      text: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
      color: o()(t.Button.Colors.BRAND, E.color),
      onClick: () => {
        r.Z.addRelationship({
          userId: n.id,
          context: {
            location: h
          },
          friendToken: m
        });
      }
    })
  ]
});
  }
  return l === f.OGo.FRIEND || n.bot ? (0, s.jsx)(I.c, {
userId: n.id,
onClose: v
  }) : l === f.OGo.PENDING_OUTGOING ? (0, s.jsx)(d.tG, {
text: _.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
color: t.Button.Colors.GREEN,
disabled: !0
  }) : l === f.OGo.PENDING_INCOMING ? (0, s.jsx)(I.c, {
userId: n.id,
onClose: v
  }) : (0, s.jsx)(d.tG, {
action: 'SEND_FRIEND_REQUEST',
text: _.Z.Messages.ADD_FRIEND_BUTTON,
color: t.Button.Colors.GREEN,
onClick: () => {
  r.Z.addRelationship({
    userId: n.id,
    context: {
      location: h
    },
    friendToken: m
  });
}
  });
}