n.d(t, {
  M: function() {
    return K
  },
  Z: function() {
    return Y
  }
});
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(873546),
  o = n(286379),
  c = n(399606),
  d = n(704215),
  _ = n(481060),
  E = n(150063),
  u = n(758119),
  T = n(100527),
  I = n(906732),
  R = n(252618),
  C = n(605236),
  g = n(984370),
  p = n(797614),
  A = n(108427),
  N = n(210887),
  m = n(695346),
  S = n(594174),
  f = n(153124),
  h = n(626135),
  M = n(792125),
  x = n(280570),
  b = n(914788),
  O = n(841409),
  P = n(652262),
  L = n(880257),
  v = n(631885),
  Z = n(830746),
  D = n(731934),
  B = n(521450),
  U = n(292352),
  j = n(981631),
  G = n(723359),
  H = n(921944),
  y = n(689938),
  k = n(465801);
let w = {
    [U.dG.REQUESTS]: () => (0, s.jsx)(D.Z, {}),
    [U.dG.ACTIVITY]: () => (0, s.jsx)(Z.Z, {}),
    [U.dG.SETTINGS]: () => (0, s.jsx)(B.Z, {})
  },
  F = {
    [U.dG.REQUESTS]: () => (0, s.jsx)(D.Z, {}),
    [U.dG.ACTIVITY]: () => (0, s.jsx)(Z.Z, {})
  };

function V(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, a = (0, v.gU)(), r = (0, L.Z)();
  return (0, s.jsxs)(_.TabBar, {
    className: k.settingsTabBar,
    "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, s.jsx)(_.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: U.dG.ACTIVITY,
      children: y.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, s.jsxs)(_.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: U.dG.REQUESTS,
      "aria-label": y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, a > 0 ? (0, s.jsx)(_.NumberBadge, {
        className: k.badge,
        count: a
      }) : null]
    }), r ? (0, s.jsx)(_.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: U.dG.SETTINGS,
      children: y.Z.Messages.SETTINGS
    }) : null]
  })
}

function W(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: a
  } = e, r = (0, f.Dt)(), o = (0, v.gU)();
  return (0, s.jsxs)(g.Z, {
    className: i()((0, M.Q)(t), k.sidebarTabBar),
    scrollable: l.tq,
    role: "navigation",
    "aria-labelledby": r,
    toolbar: !0,
    children: [(0, s.jsx)(g.Z.Icon, {
      icon: _.GroupIcon,
      "aria-hidden": !0
    }), (0, s.jsx)(g.Z.Title, {
      id: r,
      children: y.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, s.jsx)(g.Z.Divider, {}), (0, s.jsxs)(_.TabBar, {
      "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: a,
      className: k.__invalid_tabBar,
      children: [(0, s.jsx)(_.TabBar.Item, {
        id: U.dG.ACTIVITY,
        className: k.item,
        children: y.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, s.jsxs)(_.TabBar.Item, {
        id: U.dG.REQUESTS,
        className: k.item,
        "aria-label": y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, s.jsx)(_.NumberBadge, {
          className: k.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function K() {
  let e = (0, L.Z)(),
    t = (0, v.M8)(),
    n = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
    r = (0, c.e7)([b.Z], () => b.Z.getIsInitialized()),
    l = (0, P.M)(),
    {
      selectedTab: E,
      handleTabChange: T
    } = (0, O.Z)(),
    I = (0, f.Dt)(),
    g = S.default.getCurrentUser(),
    N = null != e,
    m = r && null != g && !N;
  return (a.useEffect(() => {
    (0, A.e)("family-center"), x.ZP.initialPageLoad(), !n && (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: H.L.AUTO,
      forceTrack: !0
    })
  }, []), a.useEffect(() => {
    r && N && (h.default.track(j.rMx.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: l,
      initial_page: U.QH[E],
      source: U._6[U.Mu.SIDENAV]
    }), p.Z.increment({
      name: o.V.FAMILY_CENTER_VIEW
    }))
  }, [r, N]), m) ? ((0, u.mN)(G.L0.FAMILY_CENTER), null) : (0, s.jsxs)("main", {
    className: i()(k.container),
    "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
    children: [(0, s.jsx)(R.yY, {
      location: y.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, s.jsx)(V, {
      section: E,
      handleItemSelect: e => {
        T(e)
      }
    }), (0, s.jsx)(_.TabBar.Panel, {
      id: E,
      "aria-labelledby": I,
      className: k.contentPanel,
      children: (0, s.jsx)("div", {
        children: w[E]()
      })
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, I.ZP)(T.Z.FAMILY_CENTER), t = (0, L.Z)(), n = (0, v.M8)(), r = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE), l = (0, c.e7)([b.Z], () => b.Z.getIsInitialized()), g = (0, P.M)(), M = (0, c.e7)([N.Z], () => N.Z.theme), {
    selectedTab: Z,
    handleTabChange: D
  } = (0, O.Z)(), B = (0, f.Dt)(), w = S.default.getCurrentUser(), V = null != t, K = l && null != w && !V;
  if (a.useEffect(() => {
      E.Y(j.Z5c.FAMILY_CENTER), (0, A.e)("family-center"), !b.Z.isLoading() && b.Z.canRefetch() && x.ZP.initialPageLoad(), !r && (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: H.L.AUTO,
        forceTrack: !0
      })
    }, []), a.useEffect(() => {
      l && V && (h.default.track(j.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: n,
        selected_teen_id: g,
        initial_page: U.QH[Z],
        source: U._6[U.Mu.SIDENAV]
      }), p.Z.increment({
        name: o.V.FAMILY_CENTER_VIEW
      }))
    }, [l, V]), a.useEffect(() => {
      let e = m.Ex.getSetting();
      l && t && void 0 === e && m.Ex.updateSetting(!0)
    }, [l, t]), K) return (0, u.mN)(G.L0.FAMILY_CENTER), null;
  let Y = Z !== U.dG.SETTINGS ? Z : U.dG.ACTIVITY,
    z = F[Y];
  return (0, s.jsx)(I.Gt, {
    value: e,
    children: (0, s.jsxs)("main", {
      className: i()(k.container, k.containerSidenav),
      "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
      children: [(0, s.jsx)(R.yY, {
        location: y.Z.Messages.FAMILY_CENTER_TITLE
      }), (0, s.jsx)(W, {
        theme: M,
        section: Y,
        handleItemSelect: e => {
          D(e)
        }
      }), (0, s.jsx)(_.TabBar.Panel, {
        id: Y,
        "aria-labelledby": B,
        className: k.contentPanel,
        children: (0, s.jsx)(_.Scroller, {
          children: (0, s.jsx)("div", {
            className: k.sideNavContent,
            children: z()
          })
        })
      })]
    })
  })
}