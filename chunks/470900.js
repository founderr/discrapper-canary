t.d(n, {
  D: function() {
return I;
  },
  Z: function() {
return A;
  }
});
var l = t(735250);
t(470079);
var i = t(120356),
  s = t.n(i),
  a = t(780384),
  r = t(481060),
  c = t(239091),
  o = t(37234),
  d = t(410030),
  u = t(44315),
  m = t(565138),
  x = t(769654),
  f = t(51144),
  v = t(162267),
  h = t(228168),
  g = t(981631),
  j = t(689938),
  p = t(735393),
  N = t(401298);
let _ = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);

function I(e) {
  let {
user: n,
guild: i,
nick: o,
theme: d,
onSelect: x
  } = e, v = n.hasAvatarForGuild(i.id);
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
      t.e('96427'),
      t.e('23755'),
      t.e('89350'),
      t.e('11751'),
      t.e('29549'),
      t.e('33053'),
      t.e('50654'),
      t.e('31605'),
      t.e('65840'),
      t.e('7654'),
      t.e('90508'),
      t.e('67847'),
      t.e('44156'),
      t.e('59743'),
      t.e('71700'),
      t.e('85552'),
      t.e('39092'),
      t.e('58227'),
      t.e('1187'),
      t.e('10926'),
      t.e('22036'),
      t.e('92557'),
      t.e('64679'),
      t.e('89622'),
      t.e('33898'),
      t.e('33213'),
      t.e('56845')
    ]).then(t.bind(t, 545135));
    return n => (0, l.jsx)(e, {
      ...n,
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
    badgeTooltipDelay: h.vB,
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
      v || null != o ? (0, l.jsxs)('div', {
        className: N.guildNick,
        children: [
          v && (0, l.jsx)(r.Avatar, {
            src: n.getAvatarURL(i.id, _),
            size: r.AvatarSizes.SIZE_16,
            className: N.guildAvatar,
            'aria-hidden': !0
          }),
          null != o ? o : f.ZP.getName(n)
        ]
      }) : null
    ]
  })
]
  });
}

function A(e) {
  let {
user: n,
onClose: t
  } = e, {
mutualGuilds: i
  } = (0, v.Z)(n.id), s = (0, d.ZP)(), a = e => {
(0, x.X)(e), t(), (0, o.xf)();
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
    guild: t,
    nick: i
  } = e;
  return (0, l.jsx)(I, {
    user: n,
    guild: t,
    nick: i,
    theme: s,
    onSelect: () => a(t.id)
  }, t.id);
})
  });
}