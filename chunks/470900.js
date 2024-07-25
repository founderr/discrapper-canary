n.d(t, {
  D: function() {
return I;
  },
  Z: function() {
return A;
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(780384),
  r = n(481060),
  c = n(239091),
  o = n(37234),
  d = n(410030),
  u = n(44315),
  m = n(565138),
  x = n(769654),
  h = n(51144),
  f = n(162267),
  v = n(228168),
  g = n(981631),
  j = n(689938),
  p = n(735393),
  N = n(401298);
let _ = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);

function I(e) {
  let {
user: t,
guild: i,
nick: o,
theme: d,
onSelect: x
  } = e, f = t.hasAvatarForGuild(i.id);
  return (0, l.jsxs)(r.Clickable, {
focusProps: {
  offset: {
    right: 8
  }
},
className: p.listRow,
onClick: x,
onContextMenu: e => {
  (0, c.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('96427'),
      n.e('23755'),
      n.e('89350'),
      n.e('11751'),
      n.e('29549'),
      n.e('33053'),
      n.e('50654'),
      n.e('31605'),
      n.e('65840'),
      n.e('7654'),
      n.e('90508'),
      n.e('67847'),
      n.e('44156'),
      n.e('59743'),
      n.e('71700'),
      n.e('85552'),
      n.e('39092'),
      n.e('58227'),
      n.e('1187'),
      n.e('10926'),
      n.e('22036'),
      n.e('92557'),
      n.e('64679'),
      n.e('89622'),
      n.e('33898'),
      n.e('33213'),
      n.e('56845')
    ]).then(n.bind(n, 545135));
    return t => (0, l.jsx)(e, {
      ...t,
      guild: i
    });
  });
},
children: [
  (0, l.jsx)(m.Z, {
    tabIndex: -1,
    guild: i,
    showBadge: !0,
    className: s()(p.listAvatar, null == i.icon ? N.guildAvatarWithoutIcon : null),
    badgeStrokeColor: (0, u.Lq)((0, a.wj)(d) ? g.Ilk.PRIMARY_600 : g.Ilk.WHITE_500),
    badgeTooltipColor: r.TooltipColors.PRIMARY,
    badgeTooltipDelay: v.vB,
    size: m.Z.Sizes.MEDIUM,
    active: !0
  }),
  (0, l.jsxs)('div', {
    className: p.listRowContent,
    children: [
      (0, l.jsx)('div', {
        className: p.listName,
        children: i.toString()
      }),
      f || null != o ? (0, l.jsxs)('div', {
        className: N.guildNick,
        children: [
          f && (0, l.jsx)(r.Avatar, {
            src: t.getAvatarURL(i.id, _),
            size: r.AvatarSizes.SIZE_16,
            className: N.guildAvatar,
            'aria-hidden': !0
          }),
          null != o ? o : h.ZP.getName(t)
        ]
      }) : null
    ]
  })
]
  });
}

function A(e) {
  let {
user: t,
onClose: n
  } = e, {
mutualGuilds: i
  } = (0, f.Z)(t.id), s = (0, d.ZP)(), a = e => {
(0, x.X)(e), n(), (0, o.xf)();
  };
  return (0, l.jsx)(r.ScrollerThin, {
className: p.listScroller,
fade: !0,
children: null == i ? (0, l.jsx)('div', {
  className: p.empty,
  children: (0, l.jsx)(r.Spinner, {})
}) : 0 === i.length ? (0, l.jsxs)('div', {
  className: p.empty,
  children: [
    (0, l.jsx)('div', {
      className: p.emptyIconGuilds
    }),
    (0, l.jsx)('div', {
      className: p.emptyText,
      children: j.Z.Messages.NO_MUTUAL_GUILDS
    })
  ]
}) : i.map(e => {
  let {
    guild: n,
    nick: i
  } = e;
  return (0, l.jsx)(I, {
    user: t,
    guild: n,
    nick: i,
    theme: s,
    onSelect: () => a(n.id)
  }, n.id);
})
  });
}