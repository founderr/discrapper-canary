"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120"), n("653041");
var i = n("735250"),
  r = n("470079"),
  s = n("392711"),
  a = n.n(s),
  o = n("892814"),
  l = n("79411"),
  u = n("442837"),
  d = n("481060"),
  _ = n("911969"),
  c = n("867176"),
  E = n("566620"),
  I = n("127255"),
  T = n("880308"),
  f = n("399654"),
  S = n("844439"),
  h = n("10718"),
  A = n("148958"),
  m = n("695676"),
  N = n("98880"),
  p = n("601053"),
  O = n("105862"),
  C = n("689079"),
  R = n("689938"),
  g = n("245199");
let L = [];

function v(e) {
  let {
    channel: t,
    enableRecommendations: n,
    enableRecents: s
  } = e, a = (0, c.useIsActivitiesInTextEnabled)(t.id, !0, "AppLauncherHomeScreen");
  return r.useEffect(() => {
    a && (0, E.fetchShelf)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [a, t]), (0, i.jsxs)("div", {
    className: g.container,
    children: [(0, i.jsx)(D, {}), (0, i.jsx)(d.Scroller, {
      className: g.scrollableContent,
      fade: !0,
      children: (0, i.jsxs)("div", {
        children: [s && (0, i.jsx)(M, {}), (0, i.jsx)(y, {
          channel: t
        }), n && (0, i.jsx)(P, {
          channel: t
        }), (0, i.jsx)(O.default, {})]
      })
    })]
  })
}

function D() {
  let [e, t] = r.useState(""), n = r.useMemo(() => a().debounce(e => {}, 400, {
    leading: !1,
    trailing: !0
  }), []), s = r.useCallback(e => {
    t(e), n(e)
  }, [t, n]), o = r.useCallback(() => t(""), [t]);
  return (0, i.jsx)("div", {
    className: g.searchBarContainer,
    children: (0, i.jsx)(d.SearchBar, {
      placeholder: R.default.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER,
      query: e,
      onChange: s,
      onClear: o,
      size: d.SearchBar.Sizes.MEDIUM
    })
  })
}

function M() {
  return null
}

function y(e) {
  let {
    channel: t
  } = e, {
    pushHistory: n
  } = (0, m.useAppLauncherHistoryContext)(), {
    sectionDescriptors: s,
    filterSection: o
  } = h.useDiscovery(t, {
    commandType: _.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: C.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  });
  r.useEffect(() => {
    o(C.BuiltInSectionId.FRECENCY)
  }, [o]);
  let l = r.useMemo(() => s.filter(e => e.id !== C.BuiltInSectionId.FRECENCY && e.id !== C.BuiltInSectionId.BUILT_IN), [s]),
    u = (0, A.useSortApplicationsViaFrecency)(l),
    d = r.useMemo(() => a().compact(u.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [u]),
    {
      items: c,
      handleViewMore: E
    } = b(R.default.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, N.default.Looks.NO_BANNER, d, 8);
  return (0, i.jsx)(p.default, {
    title: R.default.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
    onClickViewMore: E,
    children: c.map(e => {
      let {
        application: t,
        isPartner: r
      } = e;
      return (0, i.jsx)(N.default, {
        application: t,
        look: N.default.Looks.NO_BANNER,
        isPartner: r,
        onClick: e => {
          e.stopPropagation(), n({
            type: m.HistoryItemType.APPLICATION,
            application: t
          })
        }
      }, t.id)
    })
  })
}

function P(e) {
  let {
    channel: t
  } = e, n = function(e) {
    let {
      channelId: t,
      location: n
    } = e;
    return r.useEffect(() => {
      (0, f.getRecommendations)({
        channelId: t,
        location: n
      })
    }, [t, n]), (0, u.useStateFromStoresArray)([S.default], () => S.default.getRecommendations({
      channelId: t,
      location: n
    }))
  }({
    channelId: t.id,
    location: o.AppRecommendationsLocation.APP_LAUNCHER_TEXT
  }), s = function(e) {
    let {
      channel: t,
      recommendationsSections: n
    } = e;
    (0, T.useFetchDeveloperActivityShelfItems)();
    let i = (0, I.default)({
      guildId: t.getGuildId(),
      channel: t
    });
    return r.useMemo(() => {
      if (!n.some(e => e.appends_remaining_activities)) return L;
      let e = new Set;
      return n.forEach(t => {
        t.items.forEach(t => {
          null != t.application && e.add(t.application.id)
        })
      }), i.filter(t => !e.has(t.application.id))
    }, [n, i])
  }({
    channel: t,
    recommendationsSections: n
  });
  return (0, i.jsx)(i.Fragment, {
    children: n.map(e => (0, i.jsx)(U, {
      recommendationsSection: e,
      remainingActivities: s
    }, e.key))
  })
}

function U(e) {
  let {
    recommendationsSection: t,
    remainingActivities: n
  } = e, {
    pushHistory: s
  } = (0, m.useAppLauncherHistoryContext)(), a = t.section_title, o = t.type === l.AppRecommendationsType.BANNER_CARDS ? N.default.Looks.LARGE_BANNER : N.default.Looks.NO_BANNER, {
    items: u,
    handleViewMore: d
  } = b(a, o, r.useMemo(() => {
    let e = t.items.map(e => {
      let {
        application: t,
        is_partner: n
      } = e;
      return {
        application: t,
        isPartner: n
      }
    });
    return t.appends_remaining_activities && e.push(...n.map(e => {
      let {
        application: t
      } = e;
      return {
        application: t
      }
    })), e
  }, [t.items, t.appends_remaining_activities, n]), 8);
  return (0, i.jsx)(p.default, {
    title: t.section_title,
    onClickViewMore: d,
    children: u.map(e => {
      let {
        application: t,
        isPartner: n
      } = e;
      return (0, i.jsx)(N.default, {
        application: t,
        look: o,
        onClick: e => {
          e.stopPropagation(), s({
            type: m.HistoryItemType.APPLICATION,
            application: t
          })
        },
        isPartner: n
      }, t.id)
    })
  })
}

function b(e, t, n, i) {
  let {
    pushHistory: s
  } = (0, m.useAppLauncherHistoryContext)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => s({
      type: m.HistoryItemType.LIST,
      title: e,
      look: t,
      items: n
    })
  }, [n, i, s, t, e])
}