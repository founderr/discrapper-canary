t.d(n, {
  Z: function() {
return m;
  }
});
var l = t(735250),
  r = t(481060),
  i = t(318374),
  a = t(171368),
  o = t(5192),
  s = t(192918),
  c = t(256139),
  u = t(689938),
  d = t(996843);

function m(e) {
  let {
entry: n,
channel: t
  } = e, {
displayParticipants: m,
participant1: f,
participant2: _,
numOtherParticipants: p
  } = (0, s.Z)(n, 3), v = [
f,
_
  ];
  return (0, l.jsxs)('div', {
className: d.container,
children: [
  (0, l.jsx)(i.Z, {
    maxUsers: 3,
    users: m,
    size: r.AvatarSizes.SIZE_20,
    avatarClassName: d.stackedAvatar,
    hideOverflowCount: !0,
    disableUsernameTooltip: !0
  }),
  (0, l.jsx)(r.Spacer, {
    size: 6,
    horizontal: !0
  }),
  (0, l.jsx)(r.Heading, {
    variant: 'text-sm/semibold',
    className: d.textSecondary,
    children: u.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
      user1: o.ZP.getName(t.guild_id, t.id, v[0]),
      user2: o.ZP.getName(t.guild_id, t.id, v[1]),
      countOthers: p,
      nameHook: (e, n) => (0, l.jsx)(c.Z, {
        tag: 'span',
        onClick: () => (0, a.openUserProfileModal)({
          userId: v[parseInt(n)].id
        }),
        children: (0, l.jsx)(r.Text, {
          variant: 'text-sm/semibold',
          className: d.textPrimary,
          children: e
        }, n)
      })
    })
  })
]
  });
}