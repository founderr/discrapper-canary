n(47120);
var s, i, l = n(735250),
  a = n(470079),
  r = n(920906),
  o = n(143927),
  c = n(704215),
  u = n(481060),
  d = n(442837),
  E = n(393238),
  h = n(607070),
  _ = n(963202),
  I = n(353093),
  m = n(605236),
  T = n(931515),
  g = n(807933),
  p = n(702646),
  N = n(207796),
  S = n(543550),
  C = n(895068),
  A = n(921944),
  f = n(528021);
(i = s || (s = {})).TOP_PICKS = "top_picks", i.OTHER_GUILDS = "other_guilds";
let Z = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  L = a.memo(function(e) {
    let {
      width: t
    } = e, n = (0, d.e7)([h.Z], () => h.Z.useReducedMotion), s = (0, N.GN)(e => e.mode, o.Z), [i, u] = a.useState(!0), E = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: s === N.v0.GET_STARTED ? 0 : 1
      },
      config: Z,
      delay: 500,
      immediate: n,
      onRest: () => u(!1)
    }), T = (0, N.GN)(e => e.userUpsellScreen, o.Z), L = (0, N.GN)(e => e.started, o.Z), {
      guilds: O
    } = (0, _.C3)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }), v = a.useMemo(() => O.filter(e => !(0, I.EJ)(e)), [O]), {
      enableApplication: R
    } = (0, _.Fg)("ClanDiscoveryAdminContainer"), P = (0, m.wE)(c.z.NEW_GAMING_DISCOVERY_NOTIF);
    switch (a.useEffect(() => {
        !P && (0, m.EW)(c.z.NEW_GAMING_DISCOVERY_NOTIF, {
          dismissAction: A.L.TAKE_ACTION,
          forceTrack: !0
        })
      }, [P]), a.useEffect(() => {
        let e = O.length > 0;
        if (e && !R && T === N.o2.USER_UPSELL) {
          (0, N.fH)(N.v0.ADMIN_UPSELL);
          return
        }
        if (!e && R && !L) {
          (0, N.fH)(N.v0.GET_STARTED);
          return
        }
        if (R && s === N.v0.ADMIN_UPSELL && 0 === v.length) {
          (0, N.fH)(N.v0.GET_STARTED), N.GN.getState().setUserUpsellScreen(N.o2.USER_UPSELL);
          return
        }
      }, [v.length, O.length, L, R, s, T]), s) {
      case N.v0.ADMIN_UPSELL:
        return (0, l.jsx)(S.$, {});
      case N.v0.GET_STARTED:
        return (0, l.jsx)(S.J, {});
      case N.v0.DISCOVERY:
      case N.v0.GAMES:
      case N.v0.PLAYSTYLE:
      case N.v0.TRAITS:
        return (0, l.jsxs)("div", {
          className: f.discoveryContainer,
          children: [(0, l.jsx)(r.animated.div, {
            className: f.toolbar,
            style: {
              opacity: E.opacity,
              transform: E.opacity.to([0, 1], [-40, 0]).to(e => "translateY(".concat(e, "px)")),
              borderBottom: "1px solid var(--bg-mod-strong)"
            },
            children: (0, l.jsx)(p.Z, {})
          }), (0, l.jsx)(r.animated.div, {
            className: f.content,
            style: {
              opacity: E.opacity,
              transform: E.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(C.ZP, {
              width: t,
              isAnimating: i
            })
          }), (0, l.jsx)("div", {
            className: f.selectors,
            children: (0, l.jsx)(g.Z, {
              mode: s
            })
          })]
        })
    }
  });
t.Z = a.memo(function() {
  let {
    loading: e
  } = (0, T.LE)(), {
    ref: t,
    width: n
  } = (0, E.Z)();
  return (0, l.jsxs)("main", {
    className: f.container,
    ref: t,
    children: [(0, l.jsx)("div", {
      className: f.dragRegion
    }), e ? (0, l.jsx)("div", {
      className: f.loading,
      children: (0, l.jsx)(u.Spinner, {})
    }) : (0, l.jsx)(L, {
      width: null != n ? n : 0
    })]
  })
})