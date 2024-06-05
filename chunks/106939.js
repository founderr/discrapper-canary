"use strict";
s.r(t), s.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return W
  },
  default: function() {
    return Z
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("873546"),
  o = s("286379"),
  u = s("399606"),
  d = s("704215"),
  c = s("481060"),
  E = s("150063"),
  _ = s("758119"),
  f = s("100527"),
  h = s("906732"),
  T = s("252618"),
  m = s("605236"),
  C = s("984370"),
  g = s("797614"),
  A = s("108427"),
  p = s("210887"),
  N = s("695346"),
  I = s("594174"),
  S = s("153124"),
  R = s("158010"),
  v = s("26290"),
  x = s("626135"),
  M = s("792125"),
  L = s("280570"),
  O = s("914788"),
  y = s("841409"),
  D = s("652262"),
  b = s("880257"),
  j = s("631885"),
  U = s("830746"),
  P = s("731934"),
  G = s("521450"),
  V = s("292352"),
  F = s("981631"),
  B = s("723359"),
  H = s("921944"),
  k = s("689938"),
  w = s("86662");
let Q = {
    [V.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(P.default, {}),
    [V.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {}),
    [V.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(G.default, {})
  },
  Y = {
    [V.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(P.default, {}),
    [V.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {})
  };

function q(e) {
  let {
    section: t,
    handleItemSelect: s
  } = e, n = (0, j.usePendingRequestCount)(), l = (0, b.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: w.settingsTabBar,
    "aria-label": k.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: s,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: w.settingsTabBarItem,
      id: V.FamilyCenterSubPages.ACTIVITY,
      children: k.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: w.settingsTabBarItem,
      id: V.FamilyCenterSubPages.REQUESTS,
      "aria-label": k.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [k.default.Messages.FAMILY_CENTER_REQUESTS_TAB, n > 0 ? (0, a.jsx)(v.NumberBadge, {
        className: w.badge,
        count: n
      }) : null]
    }), l ? (0, a.jsx)(c.TabBar.Item, {
      className: w.settingsTabBarItem,
      id: V.FamilyCenterSubPages.SETTINGS,
      children: k.default.Messages.SETTINGS
    }) : null]
  })
}

function z(e) {
  let {
    theme: t,
    section: s,
    handleItemSelect: n
  } = e, l = (0, S.useUID)(), o = (0, j.usePendingRequestCount)();
  return (0, a.jsxs)(C.default, {
    className: i()((0, M.getThemeClass)(t), w.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, a.jsx)(C.default.Icon, {
      icon: R.default,
      "aria-hidden": !0
    }), (0, a.jsx)(C.default.Title, {
      id: l,
      children: k.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": k.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: n,
      className: w.__invalid_tabBar,
      children: [(0, a.jsx)(c.TabBar.Item, {
        id: V.FamilyCenterSubPages.ACTIVITY,
        className: w.item,
        children: k.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: V.FamilyCenterSubPages.REQUESTS,
        className: w.item,
        "aria-label": k.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [k.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(v.NumberBadge, {
          className: w.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function W() {
  let e = (0, b.default)(),
    t = (0, j.useAcceptedRequestsCount)(),
    s = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([O.default], () => O.default.getIsInitialized()),
    r = (0, D.useSelectedTeenId)(),
    {
      selectedTab: E,
      handleTabChange: f
    } = (0, y.default)(),
    h = (0, S.useUID)(),
    C = I.default.getCurrentUser(),
    p = null != e,
    N = l && null != C && !p;
  return (n.useEffect(() => {
    (0, A.trackAppUIViewed)("family-center"), L.default.initialPageLoad(), !s && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: H.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), n.useEffect(() => {
    l && p && (x.default.track(F.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: V.FamilyCenterSubPageAnalyticsIds[E],
      source: V.FamilyCenterPageLocationAnalyticsIds[V.FamilyCenterPageLocation.SIDENAV]
    }), g.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, p]), N) ? ((0, _.openAgeGateModal)(B.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: i()(w.container),
    "aria-label": k.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(T.AppPageTitle, {
      location: k.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(q, {
      section: E,
      handleItemSelect: e => {
        f(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: E,
      "aria-labelledby": h,
      className: w.contentPanel,
      children: (0, a.jsx)("div", {
        children: Q[E]()
      })
    })]
  })
}

function Z() {
  let {
    analyticsLocations: e
  } = (0, h.default)(f.default.FAMILY_CENTER), t = (0, b.default)(), s = (0, j.useAcceptedRequestsCount)(), l = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([O.default], () => O.default.getIsInitialized()), C = (0, D.useSelectedTeenId)(), R = (0, u.useStateFromStores)([p.default], () => p.default.theme), {
    selectedTab: v,
    handleTabChange: M
  } = (0, y.default)(), U = (0, S.useUID)(), P = I.default.getCurrentUser(), G = null != t, Q = r && null != P && !G;
  if (n.useEffect(() => {
      E.setHomeLink(F.Routes.FAMILY_CENTER), (0, A.trackAppUIViewed)("family-center"), !O.default.isLoading() && O.default.canRefetch() && L.default.initialPageLoad(), !l && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: H.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), n.useEffect(() => {
      r && G && (x.default.track(F.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: s,
        selected_teen_id: C,
        initial_page: V.FamilyCenterSubPageAnalyticsIds[v],
        source: V.FamilyCenterPageLocationAnalyticsIds[V.FamilyCenterPageLocation.SIDENAV]
      }), g.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, G]), n.useEffect(() => {
      let e = N.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && N.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Q) return (0, _.openAgeGateModal)(B.AgeGateSource.FAMILY_CENTER), null;
  let q = v !== V.FamilyCenterSubPages.SETTINGS ? v : V.FamilyCenterSubPages.ACTIVITY,
    W = Y[q];
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: e,
    children: (0, a.jsxs)("main", {
      className: i()(w.container, w.containerSidenav),
      "aria-label": k.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, a.jsx)(T.AppPageTitle, {
        location: k.default.Messages.FAMILY_CENTER_TITLE
      }), (0, a.jsx)(z, {
        theme: R,
        section: q,
        handleItemSelect: e => {
          M(e)
        }
      }), (0, a.jsx)(c.TabBar.Panel, {
        id: q,
        "aria-labelledby": U,
        className: w.contentPanel,
        children: (0, a.jsx)(c.Scroller, {
          children: (0, a.jsx)("div", {
            className: w.sideNavContent,
            children: W()
          })
        })
      })]
    })
  })
}