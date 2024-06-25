s.d(t, {
  M: function() {
    return K
  },
  Z: function() {
    return Y
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(873546),
  o = s(286379),
  c = s(399606),
  E = s(704215),
  _ = s(481060),
  u = s(150063),
  d = s(758119),
  T = s(100527),
  I = s(906732),
  R = s(252618),
  A = s(605236),
  N = s(984370),
  C = s(797614),
  g = s(108427),
  m = s(210887),
  M = s(695346),
  S = s(594174),
  p = s(153124),
  h = s(626135),
  f = s(792125),
  O = s(280570),
  x = s(914788),
  L = s(841409),
  P = s(652262),
  v = s(880257),
  Z = s(631885),
  b = s(830746),
  D = s(731934),
  U = s(521450),
  j = s(292352),
  G = s(981631),
  B = s(723359),
  H = s(921944),
  y = s(689938),
  k = s(465801);
let V = {
    [j.dG.REQUESTS]: () => (0, n.jsx)(D.Z, {}),
    [j.dG.ACTIVITY]: () => (0, n.jsx)(b.Z, {}),
    [j.dG.SETTINGS]: () => (0, n.jsx)(U.Z, {})
  },
  F = {
    [j.dG.REQUESTS]: () => (0, n.jsx)(D.Z, {}),
    [j.dG.ACTIVITY]: () => (0, n.jsx)(b.Z, {})
  };

function w(e) {
  let {
    section: t,
    handleItemSelect: s
  } = e, a = (0, Z.gU)(), i = (0, v.Z)();
  return (0, n.jsxs)(_.TabBar, {
    className: k.settingsTabBar,
    "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: s,
    children: [(0, n.jsx)(_.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: j.dG.ACTIVITY,
      children: y.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, n.jsxs)(_.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: j.dG.REQUESTS,
      "aria-label": y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, a > 0 ? (0, n.jsx)(_.NumberBadge, {
        className: k.badge,
        count: a
      }) : null]
    }), i ? (0, n.jsx)(_.TabBar.Item, {
      className: k.settingsTabBarItem,
      id: j.dG.SETTINGS,
      children: y.Z.Messages.SETTINGS
    }) : null]
  })
}

function W(e) {
  let {
    theme: t,
    section: s,
    handleItemSelect: a
  } = e, i = (0, p.Dt)(), o = (0, Z.gU)();
  return (0, n.jsxs)(N.Z, {
    className: r()((0, f.Q)(t), k.sidebarTabBar),
    scrollable: l.tq,
    role: "navigation",
    "aria-labelledby": i,
    toolbar: !0,
    children: [(0, n.jsx)(N.Z.Icon, {
      icon: _.GroupIcon,
      "aria-hidden": !0
    }), (0, n.jsx)(N.Z.Title, {
      id: i,
      children: y.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, n.jsx)(N.Z.Divider, {}), (0, n.jsxs)(_.TabBar, {
      "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: a,
      className: k.__invalid_tabBar,
      children: [(0, n.jsx)(_.TabBar.Item, {
        id: j.dG.ACTIVITY,
        className: k.item,
        children: y.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, n.jsxs)(_.TabBar.Item, {
        id: j.dG.REQUESTS,
        className: k.item,
        "aria-label": y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, n.jsx)(_.NumberBadge, {
          className: k.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function K() {
  let e = (0, v.Z)(),
    t = (0, Z.M8)(),
    s = (0, A.wE)(E.z.FAMILY_CENTER_NEW_BADGE),
    i = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
    l = (0, P.M)(),
    {
      selectedTab: u,
      handleTabChange: T
    } = (0, L.Z)(),
    I = (0, p.Dt)(),
    N = S.default.getCurrentUser(),
    m = null != e,
    M = i && null != N && !m;
  return (a.useEffect(() => {
    (0, g.e)("family-center"), O.ZP.initialPageLoad(), !s && (0, A.EW)(E.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: H.L.AUTO,
      forceTrack: !0
    })
  }, []), a.useEffect(() => {
    i && m && (h.default.track(G.rMx.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: l,
      initial_page: j.QH[u],
      source: j._6[j.Mu.SIDENAV]
    }), C.Z.increment({
      name: o.V.FAMILY_CENTER_VIEW
    }))
  }, [i, m]), M) ? ((0, d.mN)(B.L0.FAMILY_CENTER), null) : (0, n.jsxs)("main", {
    className: r()(k.container),
    "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
    children: [(0, n.jsx)(R.yY, {
      location: y.Z.Messages.FAMILY_CENTER_TITLE
    }), (0, n.jsx)(w, {
      section: u,
      handleItemSelect: e => {
        T(e)
      }
    }), (0, n.jsx)(_.TabBar.Panel, {
      id: u,
      "aria-labelledby": I,
      className: k.contentPanel,
      children: (0, n.jsx)("div", {
        children: V[u]()
      })
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, I.ZP)(T.Z.FAMILY_CENTER), t = (0, v.Z)(), s = (0, Z.M8)(), i = (0, A.wE)(E.z.FAMILY_CENTER_NEW_BADGE), l = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()), N = (0, P.M)(), f = (0, c.e7)([m.Z], () => m.Z.theme), {
    selectedTab: b,
    handleTabChange: D
  } = (0, L.Z)(), U = (0, p.Dt)(), V = S.default.getCurrentUser(), w = null != t, K = l && null != V && !w;
  if (a.useEffect(() => {
      u.Y(G.Z5c.FAMILY_CENTER), (0, g.e)("family-center"), !x.Z.isLoading() && x.Z.canRefetch() && O.ZP.initialPageLoad(), !i && (0, A.EW)(E.z.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: H.L.AUTO,
        forceTrack: !0
      })
    }, []), a.useEffect(() => {
      l && w && (h.default.track(G.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: s,
        selected_teen_id: N,
        initial_page: j.QH[b],
        source: j._6[j.Mu.SIDENAV]
      }), C.Z.increment({
        name: o.V.FAMILY_CENTER_VIEW
      }))
    }, [l, w]), a.useEffect(() => {
      let e = M.Ex.getSetting();
      l && t && void 0 === e && M.Ex.updateSetting(!0)
    }, [l, t]), K) return (0, d.mN)(B.L0.FAMILY_CENTER), null;
  let Y = b !== j.dG.SETTINGS ? b : j.dG.ACTIVITY,
    z = F[Y];
  return (0, n.jsx)(I.Gt, {
    value: e,
    children: (0, n.jsxs)("main", {
      className: r()(k.container, k.containerSidenav),
      "aria-label": y.Z.Messages.FAMILY_CENTER_TITLE,
      children: [(0, n.jsx)(R.yY, {
        location: y.Z.Messages.FAMILY_CENTER_TITLE
      }), (0, n.jsx)(W, {
        theme: f,
        section: Y,
        handleItemSelect: e => {
          D(e)
        }
      }), (0, n.jsx)(_.TabBar.Panel, {
        id: Y,
        "aria-labelledby": U,
        className: k.contentPanel,
        children: (0, n.jsx)(_.Scroller, {
          children: (0, n.jsx)("div", {
            className: k.sideNavContent,
            children: z()
          })
        })
      })]
    })
  })
}