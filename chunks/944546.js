t.d(n, {
  T: function() {
return g;
  },
  Z: function() {
return j;
  }
});
var l = t(735250);
t(470079);
var i = t(442837),
  s = t(481060),
  a = t(239091),
  r = t(129861),
  c = t(906732),
  o = t(158776),
  d = t(785717),
  u = t(726059),
  m = t(171368),
  x = t(981631),
  f = t(689938),
  v = t(735393);
let h = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_40);

function g(e) {
  let {
user: n,
status: c,
onSelect: d
  } = e, u = (0, i.e7)([o.Z], () => o.Z.isMobileOnline(n.id));
  return (0, l.jsxs)(s.Clickable, {
className: v.listRow,
onClick: d,
onContextMenu: e => {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('79695'),
      t.e('69220'),
      t.e('91605')
    ]).then(t.bind(t, 881351));
    return t => (0, l.jsx)(e, {
      ...t,
      user: n
    });
  });
},
children: [
  (0, l.jsx)(s.Avatar, {
    src: n.getAvatarURL(void 0, h),
    'aria-label': n.username,
    size: s.AvatarSizes.SIZE_40,
    status: c,
    isMobile: u,
    className: v.listAvatar
  }),
  (0, l.jsx)(r.Z, {
    user: n,
    className: v.listName,
    discriminatorClass: v.listDiscriminator
  })
]
  });
}

function j(e) {
  let {
user: n,
onClose: t
  } = e, {
mutualFriends: i
  } = (0, u.Z)(n.id), {
analyticsLocations: a
  } = (0, c.ZP)(), {
guildId: r,
channelId: o,
messageId: h,
roleId: j
  } = (0, d.KZ)(), p = e => {
t(), (0, m.openUserProfileModal)({
  userId: e,
  guildId: r,
  channelId: o,
  messageId: h,
  roleId: j,
  sourceAnalyticsLocations: a,
  analyticsLocation: {
    section: x.jXE.USER_PROFILE_MUTUAL_FRIENDS
  }
});
  };
  return (0, l.jsx)(s.ScrollerThin, {
className: v.listScroller,
fade: !0,
children: null == i ? (0, l.jsx)('div', {
  className: v.empty,
  children: (0, l.jsx)(s.Spinner, {})
}) : 0 === i.length ? (0, l.jsxs)('div', {
  className: v.empty,
  children: [
    (0, l.jsx)('div', {
      className: v.emptyIconFriends
    }),
    (0, l.jsx)('div', {
      className: v.emptyText,
      children: f.Z.Messages.NO_MUTUAL_FRIENDS
    })
  ]
}) : i.map(e => {
  let {
    key: n,
    user: t,
    status: i
  } = e;
  return (0, l.jsx)(g, {
    user: t,
    status: i,
    onSelect: () => p(t.id)
  }, n);
})
  });
}