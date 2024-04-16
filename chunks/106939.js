"use strict";
a.r(t), a.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return q
  },
  default: function() {
    return Q
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("873546"),
  o = a("286379"),
  u = a("399606"),
  d = a("524437"),
  c = a("481060"),
  f = a("150063"),
  E = a("758119"),
  h = a("100527"),
  _ = a("906732"),
  C = a("252618"),
  m = a("605236"),
  S = a("984370"),
  I = a("797614"),
  p = a("108427"),
  T = a("210887"),
  g = a("695346"),
  A = a("594174"),
  N = a("153124"),
  v = a("158010"),
  R = a("26290"),
  O = a("626135"),
  L = a("792125"),
  M = a("280570"),
  P = a("914788"),
  x = a("841409"),
  y = a("652262"),
  D = a("880257"),
  b = a("631885"),
  U = a("830746"),
  j = a("731934"),
  G = a("521450"),
  w = a("292352"),
  k = a("981631"),
  F = a("723359"),
  H = a("921944"),
  B = a("689938"),
  V = a("767998");
let Y = {
    [w.FamilyCenterSubPages.REQUESTS]: () => (0, n.jsx)(j.default, {}),
    [w.FamilyCenterSubPages.ACTIVITY]: () => (0, n.jsx)(U.default, {}),
    [w.FamilyCenterSubPages.SETTINGS]: () => (0, n.jsx)(G.default, {})
  },
  W = {
    [w.FamilyCenterSubPages.REQUESTS]: () => (0, n.jsx)(j.default, {}),
    [w.FamilyCenterSubPages.ACTIVITY]: () => (0, n.jsx)(U.default, {})
  };

function K(e) {
  let {
    section: t,
    handleItemSelect: a
  } = e, s = (0, b.usePendingRequestCount)(), l = (0, D.default)();
  return (0, n.jsxs)(c.TabBar, {
    className: V.settingsTabBar,
    "aria-label": B.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: a,
    children: [(0, n.jsx)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: w.FamilyCenterSubPages.ACTIVITY,
      children: B.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, n.jsxs)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: w.FamilyCenterSubPages.REQUESTS,
      "aria-label": B.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [B.default.Messages.FAMILY_CENTER_REQUESTS_TAB, s > 0 ? (0, n.jsx)(R.NumberBadge, {
        className: V.badge,
        count: s
      }) : null]
    }), l ? (0, n.jsx)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: w.FamilyCenterSubPages.SETTINGS,
      children: B.default.Messages.SETTINGS
    }) : null]
  })
}

function z(e) {
  let {
    theme: t,
    section: a,
    handleItemSelect: s
  } = e, l = (0, N.useUID)(), o = (0, b.usePendingRequestCount)();
  return (0, n.jsxs)(S.default, {
    className: i()((0, L.getThemeClass)(t), V.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, n.jsx)(S.default.Icon, {
      icon: v.default,
      "aria-hidden": !0
    }), (0, n.jsx)(S.default.Title, {
      id: l,
      children: B.default.Messages.FAMILY_CENTER_TITLE
    }), (0, n.jsx)(S.default.Divider, {}), (0, n.jsxs)(c.TabBar, {
      "aria-label": B.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: a,
      type: "top-pill",
      onItemSelect: s,
      className: V.__invalid_tabBar,
      children: [(0, n.jsx)(c.TabBar.Item, {
        id: w.FamilyCenterSubPages.ACTIVITY,
        className: V.item,
        children: B.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, n.jsxs)(c.TabBar.Item, {
        id: w.FamilyCenterSubPages.REQUESTS,
        className: V.item,
        "aria-label": B.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [B.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, n.jsx)(R.NumberBadge, {
          className: V.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function q() {
  let e = (0, D.default)(),
    t = (0, b.useAcceptedRequestsCount)(),
    a = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([P.default], () => P.default.getIsInitialized()),
    r = (0, y.useSelectedTeenId)(),
    {
      selectedTab: f,
      handleTabChange: h
    } = (0, x.default)(),
    _ = (0, N.useUID)(),
    S = A.default.getCurrentUser(),
    T = null != e,
    g = l && null != S && !T;
  return (s.useEffect(() => {
    (0, p.trackAppUIViewed)("family-center"), M.default.initialPageLoad(), !a && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: H.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    l && T && (O.default.track(k.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: w.FamilyCenterSubPageAnalyticsIds[f],
      source: w.FamilyCenterPageLocationAnalyticsIds[w.FamilyCenterPageLocation.SIDENAV]
    }), I.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, T]), g) ? ((0, E.openAgeGateModal)(F.AgeGateSource.FAMILY_CENTER), null) : (0, n.jsxs)("main", {
    className: i()(V.container),
    "aria-label": B.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, n.jsx)(C.AppPageTitle, {
      location: B.default.Messages.FAMILY_CENTER_TITLE
    }), (0, n.jsx)(K, {
      section: f,
      handleItemSelect: e => {
        h(e)
      }
    }), (0, n.jsx)(c.TabBar.Panel, {
      id: f,
      "aria-labelledby": _,
      className: V.contentPanel,
      children: (0, n.jsx)("div", {
        children: Y[f]()
      })
    })]
  })
}

function Q() {
  let {
    analyticsLocations: e
  } = (0, _.default)(h.default.FAMILY_CENTER), t = (0, D.default)(), a = (0, b.useAcceptedRequestsCount)(), l = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([P.default], () => P.default.getIsInitialized()), S = (0, y.useSelectedTeenId)(), v = (0, u.useStateFromStores)([T.default], () => T.default.theme), {
    selectedTab: R,
    handleTabChange: L
  } = (0, x.default)(), U = (0, N.useUID)(), j = A.default.getCurrentUser(), G = null != t, Y = r && null != j && !G;
  if (s.useEffect(() => {
      f.setHomeLink(k.Routes.FAMILY_CENTER), (0, p.trackAppUIViewed)("family-center"), !P.default.isLoading() && P.default.canRefetch() && M.default.initialPageLoad(), !l && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: H.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), s.useEffect(() => {
      r && G && (O.default.track(k.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: a,
        selected_teen_id: S,
        initial_page: w.FamilyCenterSubPageAnalyticsIds[R],
        source: w.FamilyCenterPageLocationAnalyticsIds[w.FamilyCenterPageLocation.SIDENAV]
      }), I.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, G]), s.useEffect(() => {
      let e = g.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && g.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Y) return (0, E.openAgeGateModal)(F.AgeGateSource.FAMILY_CENTER), null;
  let K = R !== w.FamilyCenterSubPages.SETTINGS ? R : w.FamilyCenterSubPages.ACTIVITY,
    q = W[K];
  return (0, n.jsx)(_.AnalyticsLocationProvider, {
    value: e,
    children: (0, n.jsxs)("main", {
      className: i()(V.container, V.containerSidenav),
      "aria-label": B.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, n.jsx)(C.AppPageTitle, {
        location: B.default.Messages.FAMILY_CENTER_TITLE
      }), (0, n.jsx)(z, {
        theme: v,
        section: K,
        handleItemSelect: e => {
          L(e)
        }
      }), (0, n.jsx)(c.TabBar.Panel, {
        id: K,
        "aria-labelledby": U,
        className: V.contentPanel,
        children: (0, n.jsx)(c.Scroller, {
          children: (0, n.jsx)("div", {
            className: V.sideNavContent,
            children: q()
          })
        })
      })]
    })
  })
}