n.d(i, {
  Z: function() {
return u;
  }
});
var s = n(735250);
n(470079);
var l = n(481060),
  o = n(239091),
  t = n(785717),
  r = n(705556),
  a = n(225714),
  d = n(228168),
  c = n(984904);

function u(e) {
  let {
user: i,
isCurrentUser: u,
guildId: I,
friendToken: f,
relationshipType: _,
originalFriendingEnabled: E = !1,
improvedFriendingEnabled: m = !1,
persistentCallCtaEnabled: S = !1,
activeInviteToCallCtaEnabled: Z = !1,
viewProfileItem: x,
onClose: v
  } = e, {
trackUserProfileAction: h
  } = (0, t.KZ)();
  return (0, s.jsxs)('div', {
className: c.buttons,
children: [
  (0, s.jsx)(a.Z, {
    user: i,
    isCurrentUser: u,
    relationshipType: _,
    improvedFriendingEnabled: m,
    persistentCallCtaEnabled: S,
    activeInviteToCallCtaEnabled: Z,
    friendToken: f,
    onClose: v
  }),
  (0, s.jsx)(r.Z, {
    user: i,
    guildId: I,
    profileType: d.y0.FULL_SIZE,
    onClose: v
  }),
  !i.isNonUserBot() && E ? (0, s.jsx)(l.Clickable, {
    focusProps: {
      offset: {
        left: 8
      }
    },
    onClick: function(e) {
      h({
        action: 'PRESS_OPTIONS'
      }), (0, o.jW)(e, async () => {
        let {
          default: e
        } = await n.e('29136').then(n.bind(n, 193646));
        return n => (0, s.jsx)(e, {
          ...n,
          originalFriendingEnabled: E,
          relationshipType: _,
          viewProfileItem: x,
          user: i,
          isCurrentUser: u,
          guildId: I,
          trackUserProfileAction: h,
          onClose: v
        });
      });
    },
    children: (0, s.jsx)(l.MoreVerticalIcon, {
      size: 'md',
      color: 'currentColor',
      className: c.additionalActionsIcon
    })
  }) : null
]
  });
}