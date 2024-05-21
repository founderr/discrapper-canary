"use strict";
n.r(t), n("47120");
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
  _ = n("480222"),
  C = n("807933"),
  m = n("702646"),
  S = n("207796"),
  p = n("543550"),
  g = n("895068"),
  I = n("93118");
let T = {
  [S.ClanDiscoveryMode.PLAYSTYLE]: C.PlayStyleSelector,
  [S.ClanDiscoveryMode.TRAITS]: C.TraitSelector,
  [S.ClanDiscoveryMode.GAMES]: C.GameSelector
};
(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let A = i.memo(function(e) {
  let {
    width: t
  } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), a = (0, S.useClanDiscoveryUIStore)(e => e.mode, o.default), [, s] = i.useState(0), d = (0, r.useTransition)([a], {
    key: e => e,
    config: {
      mass: 1,
      tension: 280,
      friction: 20,
      clamp: !0
    },
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    onRest: () => s(e => e + 1)
  }), h = (0, r.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== S.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0px)",
      opacity: 1
    },
    config: {
      mass: 1,
      tension: 600,
      friction: 60
    },
    delay: 500
  }), C = (0, r.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== S.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0px)",
      opacity: 1
    },
    config: {
      mass: 1,
      tension: 600,
      friction: 60
    },
    delay: 500
  }), A = i.useCallback(e => {
    let t = T[e];
    return null == t ? null : (0, l.jsx)(_.default, {
      children: (0, l.jsx)(t, {})
    })
  }, []), N = (0, S.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default), v = (0, S.useClanDiscoveryUIStore)(e => e.started, o.default), {
    guilds: R
  } = (0, f.useClanPrepilotExperimentForAllGuilds)({
    location: "ClanDiscoveryAdminContainer",
    includeConverted: !0
  }), O = i.useMemo(() => R.filter(e => !(0, E.isGuildAClan)(e)), [R]), {
    enableApplication: L
  } = (0, f.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer");
  switch (i.useEffect(() => {
      let e = R.length > 0;
      if (e && !L && N === S.ClanDiscoveryUserScreens.USER_UPSELL) {
        (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.ADMIN_UPSELL);
        return
      }
      if (!e && L && !v) {
        (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.GET_STARTED);
        return
      }
    }, [O.length, R.length, v, L, N]), a) {
    case S.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, l.jsx)(p.ClanDiscoveryAdminContainer, {});
    case S.ClanDiscoveryMode.GET_STARTED:
      return (0, l.jsx)(p.ClanDiscoveryUserContainer, {});
    case S.ClanDiscoveryMode.DISCOVERY:
    case S.ClanDiscoveryMode.GAMES:
    case S.ClanDiscoveryMode.PLAYSTYLE:
    case S.ClanDiscoveryMode.TRAITS:
      return (0, l.jsxs)("div", {
        className: I.discoveryContainer,
        children: [h((e, t) => (0, l.jsx)(r.animated.div, {
          style: e,
          className: I.toolbar,
          children: (0, l.jsx)(m.default, {})
        }, t)), C((e, n) => (0, l.jsx)(r.animated.div, {
          className: I.content,
          style: e,
          children: (0, l.jsx)(g.default, {
            width: t
          })
        }, n)), (0, l.jsx)("div", {
          children: d((e, t) => (0, l.jsx)(r.animated.div, {
            style: e,
            children: A(t)
          }, t))
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
    }), (0, l.jsx)(A, {
      width: null != t ? t : 0
    })]
  })
})