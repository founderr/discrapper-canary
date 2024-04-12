"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("348327"),
  i = n.n(l),
  r = n("718017"),
  o = n("143927"),
  u = n("481060"),
  d = n("442837"),
  c = n("229765"),
  f = n("231467"),
  E = n("807933"),
  h = n("10473"),
  _ = n("702646"),
  C = n("207796"),
  m = n("980721"),
  S = n("689938"),
  I = n("24953");

function p() {
  let e = (0, C.useClanDiscoveryUIStore)(C.buildSearchCriteriaFromUIState, i()),
    t = (0, C.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, o.default),
    n = (0, d.useStateFromStores)([h.default], () => h.default.getSearchResult(e), [e]);
  return (0, m.isUnloadedSearchResult)(n) ? null : (0, m.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: I.topPicks,
    children: [(0, a.jsxs)("div", {
      className: I.topPicksHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: S.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: S.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: t
        })
      })]
    }), (0, a.jsx)("div", {
      className: I.topPicksContent,
      children: n.items.map(t => (0, a.jsx)(f.default, {
        clan: t,
        affinity: (0, m.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function T() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.mode, o.default),
    [, t] = s.useState(0),
    n = (0, r.useTransition)([e], {
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
        case C.ClanDiscoveryMode.PLAYSTYLE:
          return (0, a.jsx)(E.PlayStyleSelector, {});
        case C.ClanDiscoveryMode.PRIMETIME:
          return (0, a.jsx)(E.PrimetimeSelector, {});
        case C.ClanDiscoveryMode.TRAITS:
          return (0, a.jsx)(E.TraitSelector, {});
        default:
          return null
      }
    };
  return (0, a.jsx)("div", {
    children: n((e, t) => (0, a.jsx)(r.animated.div, {
      style: e,
      children: l(t)
    }, t))
  })
}

function g() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, C.useClanDiscoveryUIStore)(C.buildSearchCriteriaFromUIState, i()),
    n = (0, d.useStateFromStores)([h.default], () => h.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    !n && (0, c.loadStaticClanDiscovery)(e)
  }, [e, n]), s.useEffect(() => {
    n && (0, c.searchClanDiscovery)(e, t)
  }, [e, t, n]), null
}
t.default = function() {
  return (0, a.jsxs)("main", {
    className: I.container,
    children: [(0, a.jsx)(g, {}), (0, a.jsx)(_.default, {}), (0, a.jsx)("div", {
      className: I.content,
      children: (0, a.jsx)(p, {})
    }), (0, a.jsx)(T, {})]
  })
}