"use strict";
s.r(t), s.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return W
  },
  default: function() {
    return z
  }
});
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("873546"),
  o = s("286379"),
  u = s("399606"),
  d = s("704215"),
  c = s("481060"),
  E = s("150063"),
  f = s("758119"),
  _ = s("100527"),
  h = s("906732"),
  C = s("252618"),
  m = s("605236"),
  T = s("984370"),
  g = s("797614"),
  A = s("108427"),
  p = s("210887"),
  N = s("695346"),
  S = s("594174"),
  I = s("153124"),
  x = s("158010"),
  R = s("626135"),
  v = s("792125"),
  M = s("280570"),
  O = s("914788"),
  L = s("841409"),
  y = s("652262"),
  b = s("880257"),
  D = s("631885"),
  j = s("830746"),
  U = s("731934"),
  P = s("521450"),
  B = s("292352"),
  V = s("981631"),
  G = s("723359"),
  H = s("921944"),
  F = s("689938"),
  k = s("86662");
let w = {
    [B.FamilyCenterSubPages.REQUESTS]: () => (0, n.jsx)(U.default, {}),
    [B.FamilyCenterSubPages.ACTIVITY]: () => (0, n.jsx)(j.default, {}),
    [B.FamilyCenterSubPages.SETTINGS]: () => (0, n.jsx)(P.default, {})
  },
  Q = {
    [B.FamilyCenterSubPages.REQUESTS]: () => (0, n.jsx)(U.default, {}),
    [B.FamilyCenterSubPages.ACTIVITY]: () => (0, n.jsx)(j.default, {})
  };

function Y(e) {
  let {
    section: t,
    handleItemSelect: s
  } = e, a = (0, D.usePendingRequestCount)(), l = (0, b.default)();
  return (0, n.jsxs)(c.TabBar, {
    className: k.settingsTabBar,
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: s,
    children: [(0, n.jsx)(c.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: B.FamilyCenterSubPages.ACTIVITY,
      children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, n.jsxs)(c.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: B.FamilyCenterSubPages.REQUESTS,
      "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, a > 0 ? (0, n.jsx)(c.NumberBadge, {
        className: k.badge,
        count: a
      }) : null]
    }), l ? (0, n.jsx)(c.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: B.FamilyCenterSubPages.SETTINGS,
      children: F.default.Messages.SETTINGS
    }) : null]
  })
}

function q(e) {
  let {
    theme: t,
    section: s,
    handleItemSelect: a
  } = e, l = (0, I.useUID)(), o = (0, D.usePendingRequestCount)();
  return (0, n.jsxs)(T.default, {
    className: i()((0, v.getThemeClass)(t), k.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, n.jsx)(T.default.Icon, {
      icon: x.default,
      "aria-hidden": !0
    }), (0, n.jsx)(T.default.Title, {
      id: l,
      children: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, n.jsx)(T.default.Divider, {}), (0, n.jsxs)(c.TabBar, {
      "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: a,
      className: k.__invalid_tabBar,
      children: [(0, n.jsx)(c.TabBar.Item, {
        id: B.FamilyCenterSubPages.ACTIVITY,
        className: k.item,
        children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, n.jsxs)(c.TabBar.Item, {
        id: B.FamilyCenterSubPages.REQUESTS,
        className: k.item,
        "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, n.jsx)(c.NumberBadge, {
          className: k.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function W() {
  let e = (0, b.default)(),
    t = (0, D.useAcceptedRequestsCount)(),
    s = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([O.default], () => O.default.getIsInitialized()),
    r = (0, y.useSelectedTeenId)(),
    {
      selectedTab: E,
      handleTabChange: _
    } = (0, L.default)(),
    h = (0, I.useUID)(),
    T = S.default.getCurrentUser(),
    p = null != e,
    N = l && null != T && !p;
  return (a.useEffect(() => {
    (0, A.trackAppUIViewed)("family-center"), M.default.initialPageLoad(), !s && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: H.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), a.useEffect(() => {
    l && p && (R.default.track(V.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: B.FamilyCenterSubPageAnalyticsIds[E],
      source: B.FamilyCenterPageLocationAnalyticsIds[B.FamilyCenterPageLocation.SIDENAV]
    }), g.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, p]), N) ? ((0, f.openAgeGateModal)(G.AgeGateSource.FAMILY_CENTER), null) : (0, n.jsxs)("main", {
    className: i()(k.container),
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, n.jsx)(C.AppPageTitle, {
      location: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, n.jsx)(Y, {
      section: E,
      handleItemSelect: e => {
        _(e)
      }
    }), (0, n.jsx)(c.TabBar.Panel, {
      id: E,
      "aria-labelledby": h,
      className: k.contentPanel,
      children: (0, n.jsx)("div", {
        children: w[E]()
      })
    })]
  })
}

function z() {
  let {
    analyticsLocations: e
  } = (0, h.default)(_.default.FAMILY_CENTER), t = (0, b.default)(), s = (0, D.useAcceptedRequestsCount)(), l = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([O.default], () => O.default.getIsInitialized()), T = (0, y.useSelectedTeenId)(), x = (0, u.useStateFromStores)([p.default], () => p.default.theme), {
    selectedTab: v,
    handleTabChange: j
  } = (0, L.default)(), U = (0, I.useUID)(), P = S.default.getCurrentUser(), w = null != t, Y = r && null != P && !w;
  if (a.useEffect(() => {
      E.setHomeLink(V.Routes.FAMILY_CENTER), (0, A.trackAppUIViewed)("family-center"), !O.default.isLoading() && O.default.canRefetch() && M.default.initialPageLoad(), !l && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: H.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), a.useEffect(() => {
      r && w && (R.default.track(V.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: s,
        selected_teen_id: T,
        initial_page: B.FamilyCenterSubPageAnalyticsIds[v],
        source: B.FamilyCenterPageLocationAnalyticsIds[B.FamilyCenterPageLocation.SIDENAV]
      }), g.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, w]), a.useEffect(() => {
      let e = N.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && N.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Y) return (0, f.openAgeGateModal)(G.AgeGateSource.FAMILY_CENTER), null;
  let W = v !== B.FamilyCenterSubPages.SETTINGS ? v : B.FamilyCenterSubPages.ACTIVITY,
    z = Q[W];
  return (0, n.jsx)(h.AnalyticsLocationProvider, {
    value: e,
    children: (0, n.jsxs)("main", {
      className: i()(k.container, k.containerSidenav),
      "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, n.jsx)(C.AppPageTitle, {
        location: F.default.Messages.FAMILY_CENTER_TITLE
      }), (0, n.jsx)(q, {
        theme: x,
        section: W,
        handleItemSelect: e => {
          j(e)
        }
      }), (0, n.jsx)(c.TabBar.Panel, {
        id: W,
        "aria-labelledby": U,
        className: k.contentPanel,
        children: (0, n.jsx)(c.Scroller, {
          children: (0, n.jsx)("div", {
            className: k.sideNavContent,
            children: z()
          })
        })
      })]
    })
  })
}