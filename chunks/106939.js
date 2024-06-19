n.d(t, {
  M: function() {
    return Q
  },
  Z: function() {
    return z
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(873546),
  o = n(286379),
  c = n(399606),
  d = n(704215),
  u = n(481060),
  E = n(150063),
  _ = n(758119),
  h = n(100527),
  m = n(906732),
  T = n(252618),
  C = n(605236),
  g = n(984370),
  p = n(797614),
  N = n(108427),
  I = n(210887),
  A = n(695346),
  f = n(594174),
  x = n(153124),
  S = n(626135),
  v = n(792125),
  R = n(280570),
  M = n(914788),
  O = n(841409),
  L = n(652262),
  Z = n(880257),
  j = n(631885),
  y = n(830746),
  b = n(731934),
  P = n(521450),
  D = n(292352),
  U = n(981631),
  G = n(723359),
  B = n(921944),
  V = n(689938),
  H = n(465801);
let w = {
    [D.dG.REQUESTS]: () => (0, s.jsx)(b.Z, {}),
    [D.dG.ACTIVITY]: () => (0, s.jsx)(y.Z, {}),
    [D.dG.SETTINGS]: () => (0, s.jsx)(P.Z, {})
  },
  k = {
    [D.dG.REQUESTS]: () => (0, s.jsx)(b.Z, {}),
    [D.dG.ACTIVITY]: () => (0, s.jsx)(y.Z, {})
  };

function F(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, a = (0, j.gU)(), i = (0, Z.Z)();
  return (0, s.jsxs)(u.TabBar, {
    className: H.settingsTabBar,
    "aria-label": V.Z.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, s.jsx)(u.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: D.dG.ACTIVITY,
      children: V.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, s.jsxs)(u.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: D.dG.REQUESTS,
      "aria-label": V.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [V.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, a > 0 ? (0, s.jsx)(u.NumberBadge, {
        className: H.badge,
        count: a
      }) : null]
    }), i ? (0, s.jsx)(u.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: D.dG.SETTINGS,
      children: V.Z.Messages.SETTINGS
    }) : null]
  })
}

function Y(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: a
  } = e, i = (0, x.Dt)(), o = (0, j.gU)();
  return (0, s.jsxs)(g.Z, {
    className: l()((0, v.Q)(t), H.sidebarTabBar),
    scrollable: r.tq,
    role: "navigation",
    "aria-labelledby": i,
    toolbar: !0,
    children: [(0, s.jsx)(g.Z.Icon, {
      icon: u.GroupIcon,
      "aria-hidden": !0
    }), (0, s.jsx)(g.Z.Title, {
      id: i,
      children: V.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, s.jsx)(g.Z.Divider, {}), (0, s.jsxs)(u.TabBar, {
      "aria-label": V.Z.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: a,
      className: H.__invalid_tabBar,
      children: [(0, s.jsx)(u.TabBar.Item, {
        id: D.dG.ACTIVITY,
        className: H.item,
        children: V.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, s.jsxs)(u.TabBar.Item, {
        id: D.dG.REQUESTS,
        className: H.item,
        "aria-label": V.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [V.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, s.jsx)(u.NumberBadge, {
          className: H.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function Q() {
  let e = (0, Z.Z)(),
    t = (0, j.M8)(),
    n = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
    i = (0, c.e7)([M.Z], () => M.Z.getIsInitialized()),
    r = (0, L.M)(),
    {
      selectedTab: E,
      handleTabChange: h
    } = (0, O.Z)(),
    m = (0, x.Dt)(),
    g = f.default.getCurrentUser(),
    I = null != e,
    A = i && null != g && !I;
  return (a.useEffect(() => {
    (0, N.e)("family-center"), R.ZP.initialPageLoad(), !n && (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: B.L.AUTO,
      forceTrack: !0
    })
  }, []), a.useEffect(() => {
    i && I && (S.default.track(U.rMx.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: D.QH[E],
      source: D._6[D.Mu.SIDENAV]
    }), p.Z.increment({
      name: o.V.FAMILY_CENTER_VIEW
    }))
  }, [i, I]), A) ? ((0, _.mN)(G.L0.FAMILY_CENTER), null) : (0, s.jsxs)("main", {
    className: l()(H.container),
    "aria-label": V.Z.Messages.FAMILY_CENTER_TITLE,
    children: [(0, s.jsx)(T.yY, {
      location: V.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, s.jsx)(F, {
      section: E,
      handleItemSelect: e => {
        h(e)
      }
    }), (0, s.jsx)(u.TabBar.Panel, {
      id: E,
      "aria-labelledby": m,
      className: H.contentPanel,
      children: (0, s.jsx)("div", {
        children: w[E]()
      })
    })]
  })
}

function z() {
  let {
    analyticsLocations: e
  } = (0, m.ZP)(h.Z.FAMILY_CENTER), t = (0, Z.Z)(), n = (0, j.M8)(), i = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE), r = (0, c.e7)([M.Z], () => M.Z.getIsInitialized()), g = (0, L.M)(), v = (0, c.e7)([I.Z], () => I.Z.theme), {
    selectedTab: y,
    handleTabChange: b
  } = (0, O.Z)(), P = (0, x.Dt)(), w = f.default.getCurrentUser(), F = null != t, Q = r && null != w && !F;
  if (a.useEffect(() => {
      E.Y(U.Z5c.FAMILY_CENTER), (0, N.e)("family-center"), !M.Z.isLoading() && M.Z.canRefetch() && R.ZP.initialPageLoad(), !i && (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: B.L.AUTO,
        forceTrack: !0
      })
    }, []), a.useEffect(() => {
      r && F && (S.default.track(U.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: n,
        selected_teen_id: g,
        initial_page: D.QH[y],
        source: D._6[D.Mu.SIDENAV]
      }), p.Z.increment({
        name: o.V.FAMILY_CENTER_VIEW
      }))
    }, [r, F]), a.useEffect(() => {
      let e = A.Ex.getSetting();
      r && t && void 0 === e && A.Ex.updateSetting(!0)
    }, [r, t]), Q) return (0, _.mN)(G.L0.FAMILY_CENTER), null;
  let z = y !== D.dG.SETTINGS ? y : D.dG.ACTIVITY,
    q = k[z];
  return (0, s.jsx)(m.Gt, {
    value: e,
    children: (0, s.jsxs)("main", {
      className: l()(H.container, H.containerSidenav),
      "aria-label": V.Z.Messages.FAMILY_CENTER_TITLE,
      children: [(0, s.jsx)(T.yY, {
        location: V.Z.Messages.FAMILY_CENTER_TITLE
      }), (0, s.jsx)(Y, {
        theme: v,
        section: z,
        handleItemSelect: e => {
          b(e)
        }
      }), (0, s.jsx)(u.TabBar.Panel, {
        id: z,
        "aria-labelledby": P,
        className: H.contentPanel,
        children: (0, s.jsx)(u.Scroller, {
          children: (0, s.jsx)("div", {
            className: H.sideNavContent,
            children: q()
          })
        })
      })]
    })
  })
}