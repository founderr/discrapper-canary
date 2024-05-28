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
  u = s("286379"),
  o = s("399606"),
  d = s("524437"),
  c = s("481060"),
  E = s("150063"),
  _ = s("758119"),
  f = s("100527"),
  h = s("906732"),
  m = s("252618"),
  T = s("605236"),
  C = s("984370"),
  g = s("797614"),
  A = s("108427"),
  N = s("210887"),
  p = s("695346"),
  S = s("594174"),
  I = s("153124"),
  v = s("158010"),
  R = s("26290"),
  x = s("626135"),
  M = s("792125"),
  O = s("280570"),
  L = s("914788"),
  y = s("841409"),
  D = s("652262"),
  j = s("880257"),
  b = s("631885"),
  U = s("830746"),
  P = s("731934"),
  G = s("521450"),
  V = s("292352"),
  F = s("981631"),
  k = s("723359"),
  B = s("921944"),
  w = s("689938"),
  H = s("86662");
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
  } = e, n = (0, b.usePendingRequestCount)(), l = (0, j.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: H.settingsTabBar,
    "aria-label": w.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: s,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: V.FamilyCenterSubPages.ACTIVITY,
      children: w.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: V.FamilyCenterSubPages.REQUESTS,
      "aria-label": w.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [w.default.Messages.FAMILY_CENTER_REQUESTS_TAB, n > 0 ? (0, a.jsx)(R.NumberBadge, {
        className: H.badge,
        count: n
      }) : null]
    }), l ? (0, a.jsx)(c.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: V.FamilyCenterSubPages.SETTINGS,
      children: w.default.Messages.SETTINGS
    }) : null]
  })
}

function z(e) {
  let {
    theme: t,
    section: s,
    handleItemSelect: n
  } = e, l = (0, I.useUID)(), u = (0, b.usePendingRequestCount)();
  return (0, a.jsxs)(C.default, {
    className: i()((0, M.getThemeClass)(t), H.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, a.jsx)(C.default.Icon, {
      icon: v.default,
      "aria-hidden": !0
    }), (0, a.jsx)(C.default.Title, {
      id: l,
      children: w.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": w.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: n,
      className: H.__invalid_tabBar,
      children: [(0, a.jsx)(c.TabBar.Item, {
        id: V.FamilyCenterSubPages.ACTIVITY,
        className: H.item,
        children: w.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: V.FamilyCenterSubPages.REQUESTS,
        className: H.item,
        "aria-label": w.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [w.default.Messages.FAMILY_CENTER_REQUESTS_TAB, u > 0 ? (0, a.jsx)(R.NumberBadge, {
          className: H.badge,
          count: u
        }) : null]
      })]
    })]
  })
}

function W() {
  let e = (0, j.default)(),
    t = (0, b.useAcceptedRequestsCount)(),
    s = (0, T.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, o.useStateFromStores)([L.default], () => L.default.getIsInitialized()),
    r = (0, D.useSelectedTeenId)(),
    {
      selectedTab: E,
      handleTabChange: f
    } = (0, y.default)(),
    h = (0, I.useUID)(),
    C = S.default.getCurrentUser(),
    N = null != e,
    p = l && null != C && !N;
  return (n.useEffect(() => {
    (0, A.trackAppUIViewed)("family-center"), O.default.initialPageLoad(), !s && (0, T.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: B.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), n.useEffect(() => {
    l && N && (x.default.track(F.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: V.FamilyCenterSubPageAnalyticsIds[E],
      source: V.FamilyCenterPageLocationAnalyticsIds[V.FamilyCenterPageLocation.SIDENAV]
    }), g.default.increment({
      name: u.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, N]), p) ? ((0, _.openAgeGateModal)(k.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: i()(H.container),
    "aria-label": w.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(m.AppPageTitle, {
      location: w.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(q, {
      section: E,
      handleItemSelect: e => {
        f(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: E,
      "aria-labelledby": h,
      className: H.contentPanel,
      children: (0, a.jsx)("div", {
        children: Q[E]()
      })
    })]
  })
}

function Z() {
  let {
    analyticsLocations: e
  } = (0, h.default)(f.default.FAMILY_CENTER), t = (0, j.default)(), s = (0, b.useAcceptedRequestsCount)(), l = (0, T.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, o.useStateFromStores)([L.default], () => L.default.getIsInitialized()), C = (0, D.useSelectedTeenId)(), v = (0, o.useStateFromStores)([N.default], () => N.default.theme), {
    selectedTab: R,
    handleTabChange: M
  } = (0, y.default)(), U = (0, I.useUID)(), P = S.default.getCurrentUser(), G = null != t, Q = r && null != P && !G;
  if (n.useEffect(() => {
      E.setHomeLink(F.Routes.FAMILY_CENTER), (0, A.trackAppUIViewed)("family-center"), !L.default.isLoading() && L.default.canRefetch() && O.default.initialPageLoad(), !l && (0, T.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: B.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), n.useEffect(() => {
      r && G && (x.default.track(F.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: s,
        selected_teen_id: C,
        initial_page: V.FamilyCenterSubPageAnalyticsIds[R],
        source: V.FamilyCenterPageLocationAnalyticsIds[V.FamilyCenterPageLocation.SIDENAV]
      }), g.default.increment({
        name: u.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, G]), n.useEffect(() => {
      let e = p.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && p.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Q) return (0, _.openAgeGateModal)(k.AgeGateSource.FAMILY_CENTER), null;
  let q = R !== V.FamilyCenterSubPages.SETTINGS ? R : V.FamilyCenterSubPages.ACTIVITY,
    W = Y[q];
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: e,
    children: (0, a.jsxs)("main", {
      className: i()(H.container, H.containerSidenav),
      "aria-label": w.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, a.jsx)(m.AppPageTitle, {
        location: w.default.Messages.FAMILY_CENTER_TITLE
      }), (0, a.jsx)(z, {
        theme: v,
        section: q,
        handleItemSelect: e => {
          M(e)
        }
      }), (0, a.jsx)(c.TabBar.Panel, {
        id: q,
        "aria-labelledby": U,
        className: H.contentPanel,
        children: (0, a.jsx)(c.Scroller, {
          children: (0, a.jsx)("div", {
            className: H.sideNavContent,
            children: W()
          })
        })
      })]
    })
  })
}