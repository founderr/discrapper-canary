n(47120);
var i, s, l = n(735250),
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
  g = n(931515),
  p = n(807933),
  T = n(702646),
  N = n(207796),
  S = n(543550),
  C = n(895068),
  A = n(921944),
  f = n(528021);
(s = i || (i = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let Z = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  v = a.memo(function(e) {
    let {
      width: t
    } = e, n = (0, d.e7)([h.Z], () => h.Z.useReducedMotion), i = (0, N.GN)(e => e.mode, o.Z), [s, u] = a.useState(!0), E = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: i === N.v0.GET_STARTED ? 0 : 1
      },
      config: Z,
      delay: 500,
      immediate: n,
      onRest: () => u(!1)
    }), g = (0, N.GN)(e => e.userUpsellScreen, o.Z), v = (0, N.GN)(e => e.started, o.Z), {
      guilds: L
    } = (0, _.C3)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }), O = a.useMemo(() => L.filter(e => !(0, I.EJ)(e)), [L]), {
      enableApplication: R
    } = (0, _.Fg)("ClanDiscoveryAdminContainer"), x = (0, m.wE)(c.z.NEW_GAMING_DISCOVERY_NOTIF);
    switch (a.useEffect(() => {
        !x && (0, m.EW)(c.z.NEW_GAMING_DISCOVERY_NOTIF, {
          dismissAction: A.L.TAKE_ACTION,
          forceTrack: !0
        })
      }, [x]), a.useEffect(() => {
        let e = L.length > 0;
        if (e && !R && g === N.o2.USER_UPSELL) {
          (0, N.fH)(N.v0.ADMIN_UPSELL);
          return
        }
        if (!e && R && !v) {
          (0, N.fH)(N.v0.GET_STARTED);
          return
        }
        if (R && i === N.v0.ADMIN_UPSELL && 0 === O.length) {
          (0, N.fH)(N.v0.GET_STARTED), N.GN.getState().setUserUpsellScreen(N.o2.USER_UPSELL);
          return
        }
      }, [O.length, L.length, v, R, i, g]), i) {
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
            children: (0, l.jsx)(T.Z, {})
          }), (0, l.jsx)(r.animated.div, {
            className: f.content,
            style: {
              opacity: E.opacity,
              transform: E.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(C.ZP, {
              width: t,
              isAnimating: s
            })
          }), (0, l.jsx)("div", {
            className: f.selectors,
            children: (0, l.jsx)(p.Z, {
              mode: i
            })
          })]
        })
    }
  });
t.Z = a.memo(function() {
  let {
    loading: e
  } = (0, g.LE)(), {
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
    }) : (0, l.jsx)(v, {
      width: null != n ? n : 0
    })]
  })
})