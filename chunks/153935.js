"use strict";
n.r(t), n.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return K
  },
  default: function() {
    return z
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("394846"),
  o = n("432710"),
  u = n("65597"),
  d = n("151426"),
  c = n("77078"),
  f = n("939488"),
  E = n("669499"),
  h = n("69927"),
  _ = n("10641"),
  C = n("539938"),
  I = n("155084"),
  S = n("970366"),
  p = n("161778"),
  m = n("845579"),
  T = n("697218"),
  g = n("476765"),
  A = n("155207"),
  N = n("956089"),
  R = n("599110"),
  v = n("439932"),
  O = n("544556"),
  L = n("822825"),
  M = n("104887"),
  P = n("771783"),
  D = n("775032"),
  y = n("25132"),
  x = n("544553"),
  b = n("210173"),
  U = n("68818"),
  G = n("922832"),
  j = n("49111"),
  w = n("586391"),
  k = n("994428"),
  F = n("782340"),
  B = n("322833");
let H = {
    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(b.default, {}),
    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(x.default, {}),
    [G.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(U.default, {})
  },
  V = {
    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(b.default, {}),
    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(x.default, {})
  };

function Y(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, s = (0, y.usePendingRequestCount)(), l = (0, D.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: B.settingsTabBar,
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: B.settingsTabBarItem,
      id: G.FamilyCenterSubPages.ACTIVITY,
      children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: B.settingsTabBarItem,
      id: G.FamilyCenterSubPages.REQUESTS,
      "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, s > 0 ? (0, a.jsx)(N.NumberBadge, {
        className: B.badge,
        count: s
      }) : null]
    }), l ? (0, a.jsx)(c.TabBar.Item, {
      className: B.settingsTabBarItem,
      id: G.FamilyCenterSubPages.SETTINGS,
      children: F.default.Messages.SETTINGS
    }) : null]
  })
}

function W(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: s
  } = e, l = (0, g.useUID)(), o = (0, y.usePendingRequestCount)();
  return (0, a.jsxs)(C.default, {
    className: i((0, v.getThemeClass)(t), B.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, a.jsx)(C.default.Icon, {
      icon: A.default,
      "aria-hidden": !0
    }), (0, a.jsx)(C.default.Title, {
      id: l,
      children: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: s,
      className: B.tabBar,
      children: [(0, a.jsx)(c.TabBar.Item, {
        id: G.FamilyCenterSubPages.ACTIVITY,
        className: B.item,
        children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: G.FamilyCenterSubPages.REQUESTS,
        className: B.item,
        "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(N.NumberBadge, {
          className: B.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function K() {
  let e = (0, D.default)(),
    t = (0, y.useAcceptedRequestsCount)(),
    n = (0, _.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.default)([L.default], () => L.default.getIsInitialized()),
    r = (0, P.useSelectedTeenId)(),
    {
      selectedTab: f,
      handleTabChange: C
    } = (0, M.default)(),
    p = (0, g.useUID)(),
    m = T.default.getCurrentUser(),
    A = null != e,
    N = l && null != m && !A;
  return (s.useEffect(() => {
    (0, S.trackAppUIViewed)("family-center"), O.default.initialPageLoad(), !n && (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: k.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    l && A && (R.default.track(j.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: G.FamilyCenterSubPageAnalyticsIds[f],
      source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
    }), I.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, A]), N) ? ((0, E.openAgeGateModal)(w.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: i(B.container),
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(h.AppPageTitle, {
      location: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(Y, {
      section: f,
      handleItemSelect: e => {
        C(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: f,
      "aria-labelledby": p,
      className: B.contentPanel,
      children: (0, a.jsx)("div", {
        children: H[f]()
      })
    })]
  })
}

function z() {
  let e = (0, D.default)(),
    t = (0, y.useAcceptedRequestsCount)(),
    n = (0, _.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.default)([L.default], () => L.default.getIsInitialized()),
    r = (0, P.useSelectedTeenId)(),
    C = (0, u.default)([p.default], () => p.default.theme),
    {
      selectedTab: A,
      handleTabChange: N
    } = (0, M.default)(),
    v = (0, g.useUID)(),
    x = T.default.getCurrentUser(),
    b = null != e,
    U = l && null != x && !b;
  if (s.useEffect(() => {
      f.setHomeLink(j.Routes.FAMILY_CENTER), (0, S.trackAppUIViewed)("family-center"), !L.default.isLoading() && L.default.canRefetch() && O.default.initialPageLoad(), !n && (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: k.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), s.useEffect(() => {
      l && b && (R.default.track(j.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: t,
        selected_teen_id: r,
        initial_page: G.FamilyCenterSubPageAnalyticsIds[A],
        source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
      }), I.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [l, b]), s.useEffect(() => {
      let t = m.FamilyCenterEnabled.getSetting();
      l && e && void 0 === t && m.FamilyCenterEnabled.updateSetting(!0)
    }, [l, e]), U) return (0, E.openAgeGateModal)(w.AgeGateSource.FAMILY_CENTER), null;
  let H = A !== G.FamilyCenterSubPages.SETTINGS ? A : G.FamilyCenterSubPages.ACTIVITY,
    Y = V[H];
  return (0, a.jsxs)("main", {
    className: i(B.container, B.containerSidenav),
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(h.AppPageTitle, {
      location: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(W, {
      theme: C,
      section: H,
      handleItemSelect: e => {
        N(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: H,
      "aria-labelledby": v,
      className: B.contentPanel,
      children: (0, a.jsx)("div", {
        className: B.sideNavContent,
        children: Y()
      })
    })]
  })
}