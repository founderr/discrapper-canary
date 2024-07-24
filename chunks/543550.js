n.d(t, {
  $: function() {
return Z;
  },
  J: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(338545),
  o = n(143927),
  c = n(597312),
  d = n(481060),
  u = n(393238),
  _ = n(410030),
  h = n(963202),
  E = n(353093),
  I = n(702646),
  m = n(207796),
  g = n(497189),
  p = n(304231),
  T = n(895068),
  f = n(490610),
  S = n(981631),
  C = n(689938),
  N = n(145745);
let A = (e, t) => {
  switch (e) {
case m.hz.GENSHIN:
  return t === S.BRd.DARK ? N.genshinUpsellBackgroundImageDark : N.genshinUpsellBackgroundImageLight;
case m.hz.VALORANT:
  return t === S.BRd.DARK ? N.valorantUpsellBackgroundImageDark : N.valorantUpsellBackgroundImageLight;
  }
};

function v() {
  let e = (0, m.GN)(e => e.game, o.Z),
t = (0, m.GN)(e => e.userUpsellScreen, o.Z),
n = (0, m.GN)(e => e.setUserUpsellScreen, o.Z),
{
  ref: a,
  width: c
} = (0, u.Z)(),
[h, E] = s.useState(0),
g = (0, d.useSpring)({
  from: {
    scrollHeight: 0
  },
  to: {
    scrollHeight: h
  }
}),
f = (0, _.ZP)(),
C = s.useMemo(() => A(e, f), [
  e,
  f
]),
v = s.useCallback(e => {
  E(e.currentTarget.scrollTop);
}, [E]),
Z = s.useMemo(() => {
  switch (e) {
    case m.hz.GENSHIN:
      return f === S.BRd.DARK ? N.genshinOnboardingBackgroundImageDark : N.genshinOnboardingBackgroundImageLight;
    case m.hz.VALORANT:
      return f === S.BRd.DARK ? N.valorantOnboardingBackgroundImageDark : N.valorantOnboardingBackgroundImageLight;
  }
}, [
  e,
  f
]),
L = (0, d.useToken)(d.tokens.colors.BG_MOD_STRONG);
  switch (t) {
case m.o2.USER_UPSELL:
  return (0, i.jsxs)('div', {
    ref: a,
    className: N.container,
    children: [
      (0, i.jsxs)('div', {
        className: N.toolbar,
        style: {
          width: c
        },
        children: [
          (0, i.jsx)(l.animated.div, {
            className: N.toolbarBackground,
            style: {
              width: c,
              opacity: g.scrollHeight.to([
                100,
                364
              ], [
                0,
                1
              ]),
              borderBottom: g.scrollHeight.to([
                100,
                364
              ], [
                0,
                1
              ]).to(e => '1px solid '.concat(L.hex({
                opacity: e
              })))
            }
          }),
          (0, i.jsx)(I.Z, {})
        ]
      }),
      (0, i.jsxs)('div', {
        className: N.upsellContainer,
        children: [
          (0, i.jsxs)(l.animated.div, {
            className: N.backgroundImageContainer,
            style: {
              opacity: g.scrollHeight.to([
                100,
                364
              ], [
                1,
                0
              ])
            },
            children: [
              (0, i.jsx)('div', {
                className: C
              }),
              (0, i.jsx)('div', {
                className: N.backgroundImageBlur
              })
            ]
          }),
          (0, i.jsx)('div', {
            className: r()(N.backgroundImageContent, N.userUpsell),
            children: (0, i.jsx)(T.ZP, {
              onScroll: v,
              width: null != c ? c : 0,
              isAnimating: !1,
              variant: T.Bj.UPSELL
            })
          })
        ]
      })
    ]
  });
case m.o2.USER_ONBOARDING:
  return (0, i.jsx)('div', {
    className: N.container,
    children: (0, i.jsxs)('div', {
      className: r()(Z, N.userOnboarding),
      children: [
        (0, i.jsx)('div', {
          className: N.backgroundImageBlur
        }),
        (0, i.jsx)('div', {
          className: N.backgroundImageContent,
          children: (0, i.jsx)(p.Z, {
            selectedGame: e,
            setScreen: n
          })
        })
      ]
    })
  });
  }
}

function Z() {
  let e = (0, m.GN)(e => e.started, o.Z),
t = (0, m.GN)(e => e.game, o.Z),
{
  enableApplication: n
} = (0, h.Fg)('ClanDiscoveryAdminContainer'),
{
  guilds: a
} = (0, h.C3)({
  location: 'ClanDiscoveryAdminContainer',
  includeConverted: !0
}),
l = s.useMemo(() => a.filter(e => !(0, E.EJ)(e)), [a]),
d = (0, _.ZP)(),
u = s.useMemo(() => A(t, d), [
  t,
  d
]),
I = !e && n;
  return 0 === a.length ? null : (0, i.jsx)('div', {
className: N.container,
children: (0, i.jsxs)(c.u2, {
  className: N.upsellScroller,
  fade: !0,
  children: [
    (0, i.jsxs)('div', {
      className: r()(u, N.adminUpsell),
      children: [
        (0, i.jsx)('div', {
          className: N.backgroundImageBlur
        }),
        (0, i.jsx)('div', {
          className: N.backgroundImageContent,
          children: (0, i.jsx)(g.Z, {
            isBrowseButtonVisible: I,
            selectedGame: t,
            eligibleGuilds: l,
            eligibleGuildsIncludingConverted: a
          })
        })
      ]
    }),
    (0, i.jsx)(f.Z, {
      title: C.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
      subtitle: I ? C.Z.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
    })
  ]
})
  });
}