"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("348327"),
  i = a.n(l),
  r = a("718017"),
  o = a("143927"),
  u = a("481060"),
  d = a("442837"),
  c = a("224706"),
  f = a("229765"),
  E = a("231467"),
  h = a("807933"),
  _ = a("10473"),
  C = a("702646"),
  m = a("207796"),
  S = a("980721"),
  p = a("689938"),
  I = a("24953");

function T() {
  let e = (0, m.useClanDiscoveryUIStore)(m.buildSearchCriteriaFromUIState, i()),
    t = (0, m.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, o.default),
    a = (0, d.useStateFromStores)([_.default], () => _.default.getSearchResult(e), [e]);
  return (0, S.isUnloadedSearchResult)(a) ? null : (0, S.isLoadedSearchResult)(a) ? (0, n.jsxs)("div", {
    className: I.topPicks,
    children: [(0, n.jsxs)("div", {
      className: I.topPicksHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: p.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: p.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: t
        })
      })]
    }), (0, n.jsx)("div", {
      className: I.topPicksContent,
      children: a.items.map(t => (0, n.jsx)(E.default, {
        clan: t,
        affinity: (0, S.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function g() {
  let e = (0, m.useClanDiscoveryUIStore)(e => e.mode, o.default),
    [, t] = s.useState(0),
    a = (0, r.useTransition)([e], {
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
      onRest: () => t(e => e + 1)
    }),
    l = e => {
      switch (e) {
        case m.ClanDiscoveryMode.PLAYSTYLE:
          return (0, n.jsx)(h.PlayStyleSelector, {});
        case m.ClanDiscoveryMode.PRIMETIME:
          return (0, n.jsx)(h.PrimetimeSelector, {});
        case m.ClanDiscoveryMode.TRAITS:
          return (0, n.jsx)(h.TraitSelector, {});
        case m.ClanDiscoveryMode.GAMES:
          return (0, n.jsx)(h.GameSelector, {});
        default:
          return null
      }
    };
  return (0, n.jsx)("div", {
    children: a((e, t) => (0, n.jsx)(r.animated.div, {
      style: e,
      children: l(t)
    }, t))
  })
}

function A() {
  let e = (0, m.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, m.useClanDiscoveryUIStore)(m.buildSearchCriteriaFromUIState, i()),
    a = (0, d.useStateFromStores)([_.default], () => _.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    !a && (0, f.loadStaticClanDiscovery)(e)
  }, [e, a]), s.useEffect(() => {
    a && (0, f.searchClanDiscovery)(e, t)
  }, [e, t, a]), s.useEffect(() => {
    c.default.getDetectableGames()
  }, []), null
}
t.default = function() {
  return (0, n.jsxs)("main", {
    className: I.container,
    children: [(0, n.jsx)(A, {}), (0, n.jsx)(C.default, {}), (0, n.jsx)("div", {
      className: I.content,
      children: (0, n.jsx)(T, {})
    }), (0, n.jsx)(g, {})]
  })
}