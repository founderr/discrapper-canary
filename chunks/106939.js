n.d(t, {
  M: function() {
    return z
  },
  Z: function() {
    return Q
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(873546),
  c = n(286379),
  o = n(399606),
  d = n(704215),
  u = n(481060),
  E = n(150063),
  _ = n(758119),
  h = n(100527),
  T = n(906732),
  I = n(252618),
  C = n(605236),
  N = n(984370),
  g = n(797614),
  A = n(108427),
  m = n(210887),
  f = n(695346),
  p = n(594174),
  R = n(153124),
  M = n(626135),
  O = n(792125),
  S = n(280570),
  L = n(914788),
  v = n(841409),
  Z = n(652262),
  x = n(880257),
  D = n(631885),
  y = n(830746),
  b = n(731934),
  P = n(521450),
  G = n(292352),
  j = n(981631),
  U = n(723359),
  V = n(921944),
  H = n(689938),
  w = n(465801);
let k = {
    [G.dG.REQUESTS]: () => (0, s.jsx)(b.Z, {}),
    [G.dG.ACTIVITY]: () => (0, s.jsx)(y.Z, {}),
    [G.dG.SETTINGS]: () => (0, s.jsx)(P.Z, {})
  },
  F = {
    [G.dG.REQUESTS]: () => (0, s.jsx)(b.Z, {}),
    [G.dG.ACTIVITY]: () => (0, s.jsx)(y.Z, {})
  };

function B(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, a = (0, D.gU)(), i = (0, x.Z)();
  return (0, s.jsxs)(u.TabBar, {
    className: w.settingsTabBar,
    "aria-label": H.Z.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, s.jsx)(u.TabBar.Item, {
      className: w.settingsTabBarItem,
      id: G.dG.ACTIVITY,
      children: H.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, s.jsxs)(u.TabBar.Item, {
      className: w.settingsTabBarItem,
      id: G.dG.REQUESTS,
      "aria-label": H.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [H.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, a > 0 ? (0, s.jsx)(u.NumberBadge, {
        className: w.badge,
        count: a
      }) : null]
    }), i ? (0, s.jsx)(u.TabBar.Item, {
      className: w.settingsTabBarItem,
      id: G.dG.SETTINGS,
      children: H.Z.Messages.SETTINGS
    }) : null]
  })
}

function Y(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: a
  } = e, i = (0, R.Dt)(), c = (0, D.gU)();
  return (0, s.jsxs)(N.Z, {
    className: l()((0, O.Q)(t), w.sidebarTabBar),
    scrollable: r.tq,
    role: "navigation",
    "aria-labelledby": i,
    toolbar: !0,
    children: [(0, s.jsx)(N.Z.Icon, {
      icon: u.GroupIcon,
      "aria-hidden": !0
    }), (0, s.jsx)(N.Z.Title, {
      id: i,
      children: H.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, s.jsx)(N.Z.Divider, {}), (0, s.jsxs)(u.TabBar, {
      "aria-label": H.Z.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: a,
      className: w.__invalid_tabBar,
      children: [(0, s.jsx)(u.TabBar.Item, {
        id: G.dG.ACTIVITY,
        className: w.item,
        children: H.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, s.jsxs)(u.TabBar.Item, {
        id: G.dG.REQUESTS,
        className: w.item,
        "aria-label": H.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [H.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, c > 0 ? (0, s.jsx)(u.NumberBadge, {
          className: w.badge,
          count: c
        }) : null]
      })]
    })]
  })
}

function z() {
  let e = (0, x.Z)(),
    t = (0, D.M8)(),
    n = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
    i = (0, o.e7)([L.Z], () => L.Z.getIsInitialized()),
    r = (0, Z.M)(),
    {
      selectedTab: E,
      handleTabChange: h
    } = (0, v.Z)(),
    T = (0, R.Dt)(),
    N = p.default.getCurrentUser(),
    m = null != e,
    f = i && null != N && !m;
  return (a.useEffect(() => {
    (0, A.e)("family-center"), S.ZP.initialPageLoad(), !n && (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: V.L.AUTO,
      forceTrack: !0
    })
  }, []), a.useEffect(() => {
    i && m && (M.default.track(j.rMx.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: G.QH[E],
      source: G._6[G.Mu.SIDENAV]
    }), g.Z.increment({
      name: c.V.FAMILY_CENTER_VIEW
    }))
  }, [i, m]), f) ? ((0, _.mN)(U.L0.FAMILY_CENTER), null) : (0, s.jsxs)("main", {
    className: l()(w.container),
    "aria-label": H.Z.Messages.FAMILY_CENTER_TITLE,
    children: [(0, s.jsx)(I.yY, {
      location: H.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, s.jsx)(B, {
      section: E,
      handleItemSelect: e => {
        h(e)
      }
    }), (0, s.jsx)(u.TabBar.Panel, {
      id: E,
      "aria-labelledby": T,
      className: w.contentPanel,
      children: (0, s.jsx)("div", {
        children: k[E]()
      })
    })]
  })
}

function Q() {
  let {
    analyticsLocations: e
  } = (0, T.ZP)(h.Z.FAMILY_CENTER), t = (0, x.Z)(), n = (0, D.M8)(), i = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE), r = (0, o.e7)([L.Z], () => L.Z.getIsInitialized()), N = (0, Z.M)(), O = (0, o.e7)([m.Z], () => m.Z.theme), {
    selectedTab: y,
    handleTabChange: b
  } = (0, v.Z)(), P = (0, R.Dt)(), k = p.default.getCurrentUser(), B = null != t, z = r && null != k && !B;
  if (a.useEffect(() => {
      E.Y(j.Z5c.FAMILY_CENTER), (0, A.e)("family-center"), !L.Z.isLoading() && L.Z.canRefetch() && S.ZP.initialPageLoad(), !i && (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: V.L.AUTO,
        forceTrack: !0
      })
    }, []), a.useEffect(() => {
      r && B && (M.default.track(j.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: n,
        selected_teen_id: N,
        initial_page: G.QH[y],
        source: G._6[G.Mu.SIDENAV]
      }), g.Z.increment({
        name: c.V.FAMILY_CENTER_VIEW
      }))
    }, [r, B]), a.useEffect(() => {
      let e = f.Ex.getSetting();
      r && t && void 0 === e && f.Ex.updateSetting(!0)
    }, [r, t]), z) return (0, _.mN)(U.L0.FAMILY_CENTER), null;
  let Q = y !== G.dG.SETTINGS ? y : G.dG.ACTIVITY,
    W = F[Q];
  return (0, s.jsx)(T.Gt, {
    value: e,
    children: (0, s.jsxs)("main", {
      className: l()(w.container, w.containerSidenav),
      "aria-label": H.Z.Messages.FAMILY_CENTER_TITLE,
      children: [(0, s.jsx)(I.yY, {
        location: H.Z.Messages.FAMILY_CENTER_TITLE
      }), (0, s.jsx)(Y, {
        theme: O,
        section: Q,
        handleItemSelect: e => {
          b(e)
        }
      }), (0, s.jsx)(u.TabBar.Panel, {
        id: Q,
        "aria-labelledby": P,
        className: w.contentPanel,
        children: (0, s.jsx)(u.Scroller, {
          children: (0, s.jsx)("div", {
            className: w.sideNavContent,
            children: W()
          })
        })
      })]
    })
  })
}