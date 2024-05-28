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
  _ = n("807933"),
  C = n("702646"),
  m = n("207796"),
  S = n("543550"),
  p = n("895068"),
  I = n("93118");
let g = {
  [m.ClanDiscoveryMode.PLAYSTYLE]: _.PlayStyleSelector,
  [m.ClanDiscoveryMode.TRAITS]: _.TraitSelector,
  [m.ClanDiscoveryMode.GAMES]: _.GameSelector
};
(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let T = i.memo(function(e) {
  let {
    width: t
  } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), a = (0, m.useClanDiscoveryUIStore)(e => e.mode, o.default), [, s] = i.useState(0), d = (0, r.useTransition)([a], {
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
      transform: n || a !== m.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
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
  }), _ = (0, r.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== m.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
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
  }), T = i.useCallback(e => {
    let t = g[e];
    return null == t ? null : (0, l.jsx)(t, {})
  }, []), A = (0, m.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default), N = (0, m.useClanDiscoveryUIStore)(e => e.started, o.default), {
    guilds: v
  } = (0, f.useClanPrepilotExperimentForAllGuilds)({
    location: "ClanDiscoveryAdminContainer",
    includeConverted: !0
  }), R = i.useMemo(() => v.filter(e => !(0, E.isGuildAClan)(e)), [v]), {
    enableApplication: O
  } = (0, f.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer");
  switch (i.useEffect(() => {
      let e = v.length > 0;
      if (e && !O && A === m.ClanDiscoveryUserScreens.USER_UPSELL) {
        (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.ADMIN_UPSELL);
        return
      }
      if (!e && O && !N) {
        (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.GET_STARTED);
        return
      }
      if (O && a === m.ClanDiscoveryMode.ADMIN_UPSELL && 0 === R.length) {
        (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.GET_STARTED), m.useClanDiscoveryUIStore.getState().setUserUpsellScreen(m.ClanDiscoveryUserScreens.USER_UPSELL);
        return
      }
    }, [R.length, v.length, N, O, a, A]), a) {
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
        children: [h((e, t) => (0, l.jsx)(r.animated.div, {
          style: e,
          className: I.toolbar,
          children: (0, l.jsx)(C.default, {})
        }, t)), _((e, n) => (0, l.jsx)(r.animated.div, {
          className: I.content,
          style: e,
          children: (0, l.jsx)(p.default, {
            width: t
          })
        }, n)), (0, l.jsx)("div", {
          children: d((e, t) => (0, l.jsx)(r.animated.div, {
            style: e,
            children: T(t)
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
    }), (0, l.jsx)(T, {
      width: null != t ? t : 0
    })]
  })
})