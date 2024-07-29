n.d(t, {
  T: function() {
return g;
  },
  Z: function() {
return j;
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(239091),
  r = n(129861),
  c = n(906732),
  o = n(158776),
  d = n(785717),
  u = n(726059),
  m = n(171368),
  x = n(981631),
  h = n(689938),
  f = n(735393);
let v = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_40);

function g(e) {
  let {
user: t,
status: c,
onSelect: d
  } = e, u = (0, i.e7)([o.Z], () => o.Z.isMobileOnline(t.id));
  return (0, l.jsxs)(s.Clickable, {
className: f.listRow,
onClick: d,
onContextMenu: e => {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('69220'),
      n.e('91605')
    ]).then(n.bind(n, 881351));
    return n => (0, l.jsx)(e, {
      ...n,
      user: t
    });
  });
},
children: [
  (0, l.jsx)(s.Avatar, {
    src: t.getAvatarURL(void 0, v),
    'aria-label': t.username,
    size: s.AvatarSizes.SIZE_40,
    status: c,
    isMobile: u,
    className: f.listAvatar
  }),
  (0, l.jsx)(r.Z, {
    user: t,
    className: f.listName,
    discriminatorClass: f.listDiscriminator
  })
]
  });
}

function j(e) {
  let {
user: t,
onClose: n
  } = e, {
mutualFriends: i
  } = (0, u.Z)(t.id), {
analyticsLocations: a
  } = (0, c.ZP)(), {
guildId: r,
channelId: o,
messageId: v,
roleId: j
  } = (0, d.KZ)(), p = e => {
n(), (0, m.openUserProfileModal)({
  userId: e,
  guildId: r,
  channelId: o,
  messageId: v,
  roleId: j,
  sourceAnalyticsLocations: a,
  analyticsLocation: {
    section: x.jXE.USER_PROFILE_MUTUAL_FRIENDS
  }
});
  };
  return (0, l.jsx)(s.ScrollerThin, {
className: f.listScroller,
fade: !0,
children: null == i ? (0, l.jsx)('div', {
  className: f.empty,
  children: (0, l.jsx)(s.Spinner, {})
}) : 0 === i.length ? (0, l.jsxs)('div', {
  className: f.empty,
  children: [
    (0, l.jsx)('div', {
      className: f.emptyIconFriends
    }),
    (0, l.jsx)('div', {
      className: f.emptyText,
      children: h.Z.Messages.NO_MUTUAL_FRIENDS
    })
  ]
}) : i.map(e => {
  let {
    key: t,
    user: n,
    status: i
  } = e;
  return (0, l.jsx)(g, {
    user: n,
    status: i,
    onSelect: () => p(n.id)
  }, t);
})
  });
}