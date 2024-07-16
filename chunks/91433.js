n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(194359),
  l = n(906732),
  u = n(5192),
  c = n(785717),
  d = n(642113),
  _ = n(689938),
  E = n(508101);

function f(e) {
  let {
user: t,
guildId: n,
channelId: i,
friendToken: f,
className: h
  } = e, p = u.ZP.getName(n, i, t), {
trackUserProfileAction: m
  } = (0, c.KZ)(), {
newestAnalyticsLocation: I
  } = (0, l.ZP)(), {
originalFriendingEnabled: T
  } = (0, d.V)({
location: 'UserProfileIncomingFriendRequestBanner'
  });
  return (0, r.jsxs)('div', {
className: a()(E.container, h),
children: [
  (0, r.jsx)(s.Text, {
    variant: 'text-sm/normal',
    children: _.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
      username: p
    })
  }),
  (0, r.jsxs)('div', {
    className: E.buttonContainer,
    children: [
      (0, r.jsx)(s.Button, {
        look: s.Button.Looks.FILLED,
        color: T ? s.Button.Colors.GREEN : a()(s.Button.Colors.BRAND, E.color),
        size: s.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          m({
            action: 'ACCEPT_FRIEND_REQUEST'
          }), o.Z.addRelationship({
            userId: t.id,
            friendToken: f,
            context: {
              location: I
            }
          });
        },
        children: _.Z.Messages.FRIEND_REQUEST_ACCEPT
      }),
      (0, r.jsx)(s.Button, {
        look: s.Button.Looks.FILLED,
        color: s.Button.Colors.PRIMARY,
        size: s.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          m({
            action: 'IGNORE_FRIEND_REQUEST'
          }), o.Z.cancelFriendRequest(t.id, {
            location: I
          });
        },
        children: _.Z.Messages.FRIEND_REQUEST_IGNORE
      })
    ]
  })
]
  });
}