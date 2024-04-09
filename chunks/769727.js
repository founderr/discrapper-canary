"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("828065"),
  r = n("149020"),
  o = n("509633"),
  u = n("670900"),
  d = n("738232"),
  c = n("376644"),
  f = n("481060"),
  E = n("442837"),
  _ = n("229765"),
  h = n("231467"),
  C = n("10473"),
  m = n("207796"),
  S = n("980721"),
  I = n("689938"),
  T = n("24953");

function p() {
  let [e, t, n, i] = (0, m.useClanDiscoveryUIStore)(e => [e.selectedGames, e.setSelectedGames, e.game, e.setGame], l.default), o = s.useCallback(() => {
    null != n && null != i && (n === m.ClanDiscoveryGame.GENSHIN ? (i(m.ClanDiscoveryGame.VALORANT), t([{
      applicationId: S.VALORANT_ID,
      name: "Valorant"
    }])) : (i(m.ClanDiscoveryGame.GENSHIN), t([{
      applicationId: S.GENSHIN_ID,
      name: "Genshin Impact"
    }])))
  }, [n, i, t]);
  return (0, a.jsxs)(f.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: o,
    children: [(0, a.jsx)(r.GameControllerIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: I.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
        count: e.length
      })
    })]
  })
}

function g() {
  let e = (0, m.useClanDiscoveryUIStore)(e => {
    var t;
    return null === (t = e.selectedPlaystyle) || void 0 === t ? void 0 : t.name
  }, l.default);
  return (0, a.jsxs)(f.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(d.ReactionIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e
    })]
  })
}

function N() {
  let e = (0, m.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default);
  return null == e ? null : (0, a.jsxs)(f.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(c.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function A() {
  var e;
  let t = (0, m.useClanDiscoveryUIStore)(e => e.selectedPrimetime, l.default);
  return (0, a.jsxs)(f.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(i.ClockIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: null !== (e = null == t ? void 0 : t.start) && void 0 !== e ? e : I.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER_EMPTY
    })]
  })
}

function R() {
  let e = (0, E.useStateFromStoresArray)([C.default], () => C.default.getFavoriteClans(), []);
  return (0, a.jsxs)(f.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(o.HeartIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function O() {
  return (0, a.jsx)(f.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(u.MagnifyingGlassIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    })
  })
}

function v() {
  return null
}

function L() {
  let [e, t] = (0, m.useClanDiscoveryUIStore)(e => [(0, m.buildSearchCriteriaFromUIState)(e), e.selectedPlaystyle]), n = (0, E.useStateFromStores)([C.default], () => C.default.getSearchResult(e), [e]);
  return (0, S.isUnloadedSearchResult)(n) ? null : (0, S.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: T.topPicks,
    children: [(0, a.jsxs)("div", {
      className: T.topPicksHeader,
      children: [(0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: I.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: I.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: null == t ? void 0 : t.name
        })
      })]
    }), (0, a.jsx)("div", {
      className: T.topPicksContent,
      children: n.items.map(e => (0, a.jsx)(h.default, {
        clan: e
      }, e.id))
    })]
  }) : null
}
t.default = function() {
  let [e, t] = (0, m.useClanDiscoveryUIStore)(e => [e.game, (0, m.buildSearchCriteriaFromUIState)(e)]), n = (0, E.useStateFromStores)([C.default], () => C.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    !n && (0, _.loadStaticClanDiscovery)(e)
  }, [e, n]), s.useEffect(() => {
    n && (0, _.searchClanDiscovery)(e, t)
  }, [e, t, n]), (0, a.jsxs)("main", {
    className: T.container,
    children: [(0, a.jsx)(v, {}), (0, a.jsx)("div", {
      className: T.content,
      children: (0, a.jsx)(L, {})
    })]
  })
}