"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("143927"),
  r = n("481060"),
  o = n("442837"),
  u = n("229765"),
  d = n("231467"),
  c = n("807933"),
  f = n("10473"),
  E = n("702646"),
  h = n("207796"),
  _ = n("980721"),
  C = n("689938"),
  m = n("24953");

function S() {
  let [e, t] = (0, h.useClanDiscoveryUIStore)(e => [(0, h.buildSearchCriteriaFromUIState)(e), e.selectedPlaystyle], i.default), n = (0, o.useStateFromStores)([f.default], () => f.default.getSearchResult(e), [e]);
  return (0, _.isUnloadedSearchResult)(n) ? null : (0, _.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: m.topPicks,
    children: [(0, a.jsxs)("div", {
      className: m.topPicksHeader,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: C.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: C.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: null == t ? void 0 : t.name
        })
      })]
    }), (0, a.jsx)("div", {
      className: m.topPicksContent,
      children: n.items.map(t => (0, a.jsx)(d.default, {
        clan: t,
        affinity: (0, _.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}
t.default = function() {
  let [e, t, n] = (0, h.useClanDiscoveryUIStore)(e => [e.mode, e.game, (0, h.buildSearchCriteriaFromUIState)(e)], i.default), r = (0, o.useStateFromStores)([f.default], () => f.default.hasLoadedStaticClanDiscovery(t)), d = (0, l.useTransition)([e], {
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
    expires: !0
  });
  s.useEffect(() => {
    !r && (0, u.loadStaticClanDiscovery)(t)
  }, [t, r]), s.useEffect(() => {
    r && (0, u.searchClanDiscovery)(t, n)
  }, [t, n, r]);
  let _ = e => {
    switch (e) {
      case h.ClanDiscoveryMode.PLAYSTYLE:
        return (0, a.jsx)(c.PlayStyleSelector, {});
      case h.ClanDiscoveryMode.PRIMETIME:
        return (0, a.jsx)(c.PrimetimeSelector, {});
      case h.ClanDiscoveryMode.TRAITS:
        return (0, a.jsx)(c.TraitSelector, {});
      default:
        return null
    }
  };
  return (0, a.jsxs)("main", {
    className: m.container,
    children: [(0, a.jsx)(E.default, {}), (0, a.jsx)("div", {
      className: m.content,
      children: (0, a.jsx)(S, {})
    }), d((e, t) => (0, a.jsx)(l.animated.div, {
      style: e,
      children: _(t)
    }))]
  })
}