"use strict";
s.r(t), s.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return W
  },
  default: function() {
    return z
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
  v = s("626135"),
  R = s("792125"),
  O = s("280570"),
  L = s("914788"),
  M = s("841409"),
  y = s("652262"),
  D = s("880257"),
  b = s("631885"),
  j = s("830746"),
  U = s("731934"),
  P = s("521450"),
  G = s("292352"),
  V = s("981631"),
  B = s("723359"),
  H = s("921944"),
  F = s("689938"),
  k = s("86662");
let w = {
    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(U.default, {}),
    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(j.default, {}),
    [G.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(P.default, {})
  },
  Q = {
    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(U.default, {}),
    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(j.default, {})
  };

function Y(e) {
  let {
    section: t,
    handleItemSelect: s
  } = e, n = (0, b.usePendingRequestCount)(), l = (0, D.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: k.settingsTabBar,
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: s,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: G.FamilyCenterSubPages.ACTIVITY,
      children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: G.FamilyCenterSubPages.REQUESTS,
      "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, n > 0 ? (0, a.jsx)(c.NumberBadge, {
        className: k.badge,
        count: n
      }) : null]
    }), l ? (0, a.jsx)(c.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: G.FamilyCenterSubPages.SETTINGS,
      children: F.default.Messages.SETTINGS
    }) : null]
  })
}

function q(e) {
  let {
    theme: t,
    section: s,
    handleItemSelect: n
  } = e, l = (0, I.useUID)(), o = (0, b.usePendingRequestCount)();
  return (0, a.jsxs)(T.default, {
    className: i()((0, R.getThemeClass)(t), k.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, a.jsx)(T.default.Icon, {
      icon: x.default,
      "aria-hidden": !0
    }), (0, a.jsx)(T.default.Title, {
      id: l,
      children: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(T.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: n,
      className: k.__invalid_tabBar,
      children: [(0, a.jsx)(c.TabBar.Item, {
        id: G.FamilyCenterSubPages.ACTIVITY,
        className: k.item,
        children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: G.FamilyCenterSubPages.REQUESTS,
        className: k.item,
        "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(c.NumberBadge, {
          className: k.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function W() {
  let e = (0, D.default)(),
    t = (0, b.useAcceptedRequestsCount)(),
    s = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([L.default], () => L.default.getIsInitialized()),
    r = (0, y.useSelectedTeenId)(),
    {
      selectedTab: E,
      handleTabChange: f
    } = (0, M.default)(),
    h = (0, I.useUID)(),
    T = S.default.getCurrentUser(),
    p = null != e,
    N = l && null != T && !p;
  return (n.useEffect(() => {
    (0, A.trackAppUIViewed)("family-center"), O.default.initialPageLoad(), !s && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: H.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), n.useEffect(() => {
    l && p && (v.default.track(V.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: G.FamilyCenterSubPageAnalyticsIds[E],
      source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
    }), g.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, p]), N) ? ((0, _.openAgeGateModal)(B.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: i()(k.container),
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(C.AppPageTitle, {
      location: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(Y, {
      section: E,
      handleItemSelect: e => {
        f(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: E,
      "aria-labelledby": h,
      className: k.contentPanel,
      children: (0, a.jsx)("div", {
        children: w[E]()
      })
    })]
  })
}

function z() {
  let {
    analyticsLocations: e
  } = (0, h.default)(f.default.FAMILY_CENTER), t = (0, D.default)(), s = (0, b.useAcceptedRequestsCount)(), l = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([L.default], () => L.default.getIsInitialized()), T = (0, y.useSelectedTeenId)(), x = (0, u.useStateFromStores)([p.default], () => p.default.theme), {
    selectedTab: R,
    handleTabChange: j
  } = (0, M.default)(), U = (0, I.useUID)(), P = S.default.getCurrentUser(), w = null != t, Y = r && null != P && !w;
  if (n.useEffect(() => {
      E.setHomeLink(V.Routes.FAMILY_CENTER), (0, A.trackAppUIViewed)("family-center"), !L.default.isLoading() && L.default.canRefetch() && O.default.initialPageLoad(), !l && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: H.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), n.useEffect(() => {
      r && w && (v.default.track(V.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: s,
        selected_teen_id: T,
        initial_page: G.FamilyCenterSubPageAnalyticsIds[R],
        source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
      }), g.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, w]), n.useEffect(() => {
      let e = N.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && N.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Y) return (0, _.openAgeGateModal)(B.AgeGateSource.FAMILY_CENTER), null;
  let W = R !== G.FamilyCenterSubPages.SETTINGS ? R : G.FamilyCenterSubPages.ACTIVITY,
    z = Q[W];
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: e,
    children: (0, a.jsxs)("main", {
      className: i()(k.container, k.containerSidenav),
      "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, a.jsx)(C.AppPageTitle, {
        location: F.default.Messages.FAMILY_CENTER_TITLE
      }), (0, a.jsx)(q, {
        theme: x,
        section: W,
        handleItemSelect: e => {
          j(e)
        }
      }), (0, a.jsx)(c.TabBar.Panel, {
        id: W,
        "aria-labelledby": U,
        className: k.contentPanel,
        children: (0, a.jsx)(c.Scroller, {
          children: (0, a.jsx)("div", {
            className: k.sideNavContent,
            children: z()
          })
        })
      })]
    })
  })
}