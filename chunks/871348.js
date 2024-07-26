n.d(t, {
  U: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(143927),
  l = n(481060),
  o = n(393238),
  c = n(963202),
  d = n(353093),
  u = n(931515),
  _ = n(807933),
  h = n(207796),
  E = n(497189),
  I = n(895068),
  m = n(490610),
  g = n(689938),
  p = n(207462);

function T(e) {
  let {
onScroll: t
  } = e, {
guilds: n
  } = (0, c.C3)({
location: 'ClanDiscoveryAdminContainer',
includeConverted: !0
  }), a = s.useMemo(() => n.filter(e => !(0, d.EJ)(e)), [n]);
  return (0, i.jsx)('section', {
className: p.guilds,
children: (0, i.jsxs)(l.AdvancedScrollerNone, {
  onScroll: t,
  className: p.upsellScroller,
  fade: !0,
  children: [
    (0, i.jsxs)('div', {
      className: p.adminUpsell,
      children: [
        (0, i.jsx)('div', {
          className: p.backgroundImageBlur
        }),
        (0, i.jsx)('div', {
          className: p.backgroundImageContent,
          children: (0, i.jsx)(E.Z, {
            eligibleGuilds: a,
            eligibleGuildsIncludingConverted: n
          })
        })
      ]
    }),
    (0, i.jsx)(m.Z, {
      title: g.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE
    })
  ]
})
  });
}

function f(e) {
  let {
onScroll: t
  } = e, {
ref: n,
width: c
  } = (0, o.Z)(), d = (0, h.GN)(e => e.mode, r.Z), [u, E] = s.useState(!0), m = (0, l.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: {
  mass: 1,
  tension: 600,
  friction: 60
},
delay: 200,
onRest: () => E(!1)
  });
  return (0, i.jsxs)('section', {
ref: n,
className: p.guilds,
children: [
  (0, i.jsx)(a.animated.div, {
    className: p.list,
    style: {
      opacity: m.opacity
    },
    children: (0, i.jsx)(I.ZP, {
      width: null != c ? c : 0,
      isAnimating: u,
      variant: I.Bj.GLOBAL_DISCOVERY,
      onScroll: t
    })
  }),
  (0, i.jsx)('div', {
    className: p.selectors,
    children: (0, i.jsx)(_.Z, {
      mode: d
    })
  })
]
  });
}

function S(e) {
  let {
onScroll: t
  } = e, {
loading: n
  } = (0, u.LE)();
  return n ? (0, i.jsx)('section', {
className: p.guilds,
children: (0, i.jsx)('div', {
  className: p.loading,
  children: (0, i.jsx)(l.Spinner, {})
})
  }) : (0, i.jsx)(T, {
onScroll: t
  });
}