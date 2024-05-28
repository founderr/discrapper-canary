"use strict";
n.r(t);
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("920906"),
  o = n("143927"),
  u = n("481060"),
  d = n("442837"),
  c = n("393238"),
  f = n("607070"),
  E = n("963202"),
  h = n("353093"),
  _ = n("931515"),
  C = n("807933"),
  m = n("702646"),
  S = n("207796"),
  p = n("543550"),
  I = n("895068"),
  g = n("93118");
(a = s || (s = {})).TOP_PICKS = "top_picks", a.OTHER_GUILDS = "other_guilds";
let T = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  A = i.memo(function(e) {
    let {
      width: t
    } = e, n = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion), a = (0, S.useClanDiscoveryUIStore)(e => e.mode, o.default), s = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: T,
      delay: 500,
      immediate: n
    }), u = (0, S.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default), c = (0, S.useClanDiscoveryUIStore)(e => e.started, o.default), {
      guilds: _
    } = (0, E.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }), A = i.useMemo(() => _.filter(e => !(0, h.isGuildAClan)(e)), [_]), {
      enableApplication: N
    } = (0, E.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer");
    switch (i.useEffect(() => {
        let e = _.length > 0;
        if (e && !N && u === S.ClanDiscoveryUserScreens.USER_UPSELL) {
          (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.ADMIN_UPSELL);
          return
        }
        if (!e && N && !c) {
          (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.GET_STARTED);
          return
        }
        if (N && a === S.ClanDiscoveryMode.ADMIN_UPSELL && 0 === A.length) {
          (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.GET_STARTED), S.useClanDiscoveryUIStore.getState().setUserUpsellScreen(S.ClanDiscoveryUserScreens.USER_UPSELL);
          return
        }
      }, [A.length, _.length, c, N, a, u]), a) {
      case S.ClanDiscoveryMode.ADMIN_UPSELL:
        return (0, l.jsx)(p.ClanDiscoveryAdminContainer, {});
      case S.ClanDiscoveryMode.GET_STARTED:
        return (0, l.jsx)(p.ClanDiscoveryUserContainer, {});
      case S.ClanDiscoveryMode.DISCOVERY:
      case S.ClanDiscoveryMode.GAMES:
      case S.ClanDiscoveryMode.PLAYSTYLE:
      case S.ClanDiscoveryMode.TRAITS:
        return (0, l.jsxs)("div", {
          className: g.discoveryContainer,
          children: [(0, l.jsx)(r.animated.div, {
            className: g.toolbar,
            style: {
              opacity: s.opacity,
              transform: s.opacity.to([0, 1], [-40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(m.default, {})
          }), (0, l.jsx)(r.animated.div, {
            className: g.content,
            style: {
              opacity: s.opacity,
              transform: s.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(I.default, {
              width: t
            })
          }), (0, l.jsx)("div", {
            className: g.selectors,
            children: (0, l.jsx)(C.default, {
              mode: a
            })
          })]
        })
    }
  });
t.default = i.memo(function() {
  let {
    loading: e
  } = (0, _.useAutoFetchClanDiscoveryResults)(), {
    ref: t,
    width: n
  } = (0, c.default)();
  return (0, l.jsxs)("main", {
    className: g.container,
    ref: t,
    children: [(0, l.jsx)("div", {
      className: g.dragRegion
    }), e ? (0, l.jsx)("div", {
      className: g.loading,
      children: (0, l.jsx)(u.Spinner, {})
    }) : (0, l.jsx)(A, {
      width: null != n ? n : 0
    })]
  })
})