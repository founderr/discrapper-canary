"use strict";
n.r(t);
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("920906"),
  o = n("143927"),
  u = n("442837"),
  d = n("393238"),
  c = n("607070"),
  f = n("963202"),
  E = n("353093"),
  h = n("931515"),
  _ = n("807933"),
  C = n("702646"),
  m = n("207796"),
  S = n("543550"),
  p = n("895068"),
  I = n("93118");
(a = s || (s = {})).TOP_PICKS = "top_picks", a.OTHER_GUILDS = "other_guilds";
let g = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  T = i.memo(function(e) {
    let {
      width: t
    } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), a = (0, m.useClanDiscoveryUIStore)(e => e.mode, o.default), s = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: g,
      delay: 500,
      immediate: n
    }), d = (0, m.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default), h = (0, m.useClanDiscoveryUIStore)(e => e.started, o.default), {
      guilds: T
    } = (0, f.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }), A = i.useMemo(() => T.filter(e => !(0, E.isGuildAClan)(e)), [T]), {
      enableApplication: N
    } = (0, f.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer");
    switch (i.useEffect(() => {
        let e = T.length > 0;
        if (e && !N && d === m.ClanDiscoveryUserScreens.USER_UPSELL) {
          (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.ADMIN_UPSELL);
          return
        }
        if (!e && N && !h) {
          (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.GET_STARTED);
          return
        }
        if (N && a === m.ClanDiscoveryMode.ADMIN_UPSELL && 0 === A.length) {
          (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.GET_STARTED), m.useClanDiscoveryUIStore.getState().setUserUpsellScreen(m.ClanDiscoveryUserScreens.USER_UPSELL);
          return
        }
      }, [A.length, T.length, h, N, a, d]), a) {
      case m.ClanDiscoveryMode.ADMIN_UPSELL:
        return (0, l.jsx)(S.ClanDiscoveryAdminContainer, {});
      case m.ClanDiscoveryMode.GET_STARTED:
        return (0, l.jsx)(S.ClanDiscoveryUserContainer, {});
      case m.ClanDiscoveryMode.DISCOVERY:
      case m.ClanDiscoveryMode.GAMES:
      case m.ClanDiscoveryMode.PLAYSTYLE:
      case m.ClanDiscoveryMode.TRAITS:
        return (0, l.jsxs)("div", {
          className: I.discoveryContainer,
          children: [(0, l.jsx)(r.animated.div, {
            className: I.toolbar,
            style: {
              opacity: s.opacity,
              transform: s.opacity.to([0, 1], [-40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(C.default, {})
          }), (0, l.jsx)(r.animated.div, {
            className: I.content,
            style: {
              opacity: s.opacity,
              transform: s.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(p.default, {
              width: t
            })
          }), (0, l.jsx)("div", {
            className: I.selectors,
            children: (0, l.jsx)(_.default, {
              mode: a
            })
          })]
        })
    }
  });
t.default = i.memo(function() {
  (0, h.useAutoFetchClanDiscoveryResults)();
  let {
    ref: e,
    width: t
  } = (0, d.default)();
  return (0, l.jsxs)("main", {
    className: I.container,
    ref: e,
    children: [(0, l.jsx)("div", {
      className: I.dragRegion
    }), (0, l.jsx)(T, {
      width: null != t ? t : 0
    })]
  })
})