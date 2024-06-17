"use strict";
n.r(t), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("920906"),
  o = n("143927"),
  u = n("704215"),
  d = n("481060"),
  c = n("442837"),
  f = n("393238"),
  E = n("607070"),
  h = n("963202"),
  C = n("353093"),
  _ = n("605236"),
  m = n("931515"),
  S = n("807933"),
  p = n("702646"),
  I = n("207796"),
  g = n("543550"),
  T = n("895068"),
  A = n("921944"),
  N = n("93118");
(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let v = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  R = i.memo(function(e) {
    let {
      width: t
    } = e, n = (0, c.useStateFromStores)([E.default], () => E.default.useReducedMotion), a = (0, I.useClanDiscoveryUIStore)(e => e.mode, o.default), [s, d] = i.useState(!0), f = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: a === I.ClanDiscoveryMode.GET_STARTED ? 0 : 1
      },
      config: v,
      delay: 500,
      immediate: n,
      onRest: () => d(!1)
    }), m = (0, I.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default), R = (0, I.useClanDiscoveryUIStore)(e => e.started, o.default), {
      guilds: O
    } = (0, h.useClanPrepilotExperimentForAllGuilds)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }), L = i.useMemo(() => O.filter(e => !(0, C.isGuildAClan)(e)), [O]), {
      enableApplication: P
    } = (0, h.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer"), M = (0, _.useIsDismissibleContentDismissed)(u.DismissibleContent.NEW_GAMING_DISCOVERY_NOTIF);
    switch (i.useEffect(() => {
        !M && (0, _.markDismissibleContentAsDismissed)(u.DismissibleContent.NEW_GAMING_DISCOVERY_NOTIF, {
          dismissAction: A.ContentDismissActionType.TAKE_ACTION,
          forceTrack: !0
        })
      }, [M]), i.useEffect(() => {
        let e = O.length > 0;
        if (e && !P && m === I.ClanDiscoveryUserScreens.USER_UPSELL) {
          (0, I.setClanDiscoveryMode)(I.ClanDiscoveryMode.ADMIN_UPSELL);
          return
        }
        if (!e && P && !R) {
          (0, I.setClanDiscoveryMode)(I.ClanDiscoveryMode.GET_STARTED);
          return
        }
        if (P && a === I.ClanDiscoveryMode.ADMIN_UPSELL && 0 === L.length) {
          (0, I.setClanDiscoveryMode)(I.ClanDiscoveryMode.GET_STARTED), I.useClanDiscoveryUIStore.getState().setUserUpsellScreen(I.ClanDiscoveryUserScreens.USER_UPSELL);
          return
        }
      }, [L.length, O.length, R, P, a, m]), a) {
      case I.ClanDiscoveryMode.ADMIN_UPSELL:
        return (0, l.jsx)(g.ClanDiscoveryAdminContainer, {});
      case I.ClanDiscoveryMode.GET_STARTED:
        return (0, l.jsx)(g.ClanDiscoveryUserContainer, {});
      case I.ClanDiscoveryMode.DISCOVERY:
      case I.ClanDiscoveryMode.GAMES:
      case I.ClanDiscoveryMode.PLAYSTYLE:
      case I.ClanDiscoveryMode.TRAITS:
        return (0, l.jsxs)("div", {
          className: N.discoveryContainer,
          children: [(0, l.jsx)(r.animated.div, {
            className: N.toolbar,
            style: {
              opacity: f.opacity,
              transform: f.opacity.to([0, 1], [-40, 0]).to(e => "translateY(".concat(e, "px)")),
              borderBottom: "1px solid var(--bg-mod-strong)"
            },
            children: (0, l.jsx)(p.default, {})
          }), (0, l.jsx)(r.animated.div, {
            className: N.content,
            style: {
              opacity: f.opacity,
              transform: f.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
            },
            children: (0, l.jsx)(T.default, {
              width: t,
              isAnimating: s
            })
          }), (0, l.jsx)("div", {
            className: N.selectors,
            children: (0, l.jsx)(S.default, {
              mode: a
            })
          })]
        })
    }
  });
t.default = i.memo(function() {
  let {
    loading: e
  } = (0, m.useAutoFetchClanDiscoveryResults)(), {
    ref: t,
    width: n
  } = (0, f.default)();
  return (0, l.jsxs)("main", {
    className: N.container,
    ref: t,
    children: [(0, l.jsx)("div", {
      className: N.dragRegion
    }), e ? (0, l.jsx)("div", {
      className: N.loading,
      children: (0, l.jsx)(d.Spinner, {})
    }) : (0, l.jsx)(R, {
      width: null != n ? n : 0
    })]
  })
})