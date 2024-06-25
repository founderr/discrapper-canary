n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(266067),
  o = n(873546),
  c = n(442837),
  u = n(481060),
  d = n(570140),
  E = n(150063),
  h = n(758059),
  _ = n(252618),
  I = n(5254),
  m = n(984370),
  T = n(518311),
  g = n(199104),
  p = n(108427),
  N = n(210887),
  S = n(974042),
  C = n(153124),
  A = n(792125),
  f = n(666286),
  Z = n(596957),
  L = n(981631),
  O = n(723359),
  v = n(689938),
  R = n(756899);

function P() {
  return (0, s.jsxs)("div", {
    className: R.inviteToolbar,
    children: [(0, s.jsx)(T.Z, {
      tooltip: v.Z.Messages.NEW_GROUP_DM
    }), (0, s.jsx)(m.Z.Divider, {})]
  })
}
t.Z = function(e) {
  let {
    initialSection: t
  } = e, n = (0, r.TH)(), l = (0, r.k6)();
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && d.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: O.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(L.Z5c.ME)
    })
  }, [l, n]), i.useEffect(() => {
    E.Y(L.Z5c.FRIENDS), (0, p.e)("friends")
  }, []), i.useEffect(() => {
    null != t && h.Z.setInitialSection(t)
  }, [t]);
  let T = (0, c.e7)([N.Z], () => N.Z.theme),
    {
      section: x,
      pendingCount: M
    } = (0, c.cj)([S.ZP], () => S.ZP.getState()),
    D = (0, c.cj)([I.Z], () => I.Z.getSuggestionCount()),
    b = (0, C.Dt)(),
    y = (0, C.Dt)();
  return (0, s.jsxs)("main", {
    className: R.container,
    "aria-label": v.Z.Messages.FRIENDS,
    children: [(0, s.jsx)(_.yY, {
      location: v.Z.Messages.FRIENDS
    }), (0, s.jsxs)(m.Z, {
      className: (0, A.Q)(T),
      toolbar: (0, s.jsx)(P, {}),
      scrollable: o.tq,
      role: "navigation",
      "aria-labelledby": b,
      children: [(0, s.jsx)(m.Z.Icon, {
        icon: u.FriendsIcon,
        "aria-hidden": !0
      }), (0, s.jsx)(m.Z.Title, {
        id: b,
        children: v.Z.Messages.FRIENDS
      }), (0, s.jsx)(m.Z.Divider, {}), (0, s.jsxs)(u.TabBar, {
        "aria-label": v.Z.Messages.FRIENDS,
        selectedItem: x,
        type: "top-pill",
        onItemSelect: e => {
          h.Z.setSection(e)
        },
        className: R.tabBar,
        children: [(0, s.jsx)(u.TabBar.Item, {
          id: L.pJs.ONLINE,
          className: R.item,
          children: v.Z.Messages.FRIENDS_SECTION_ONLINE
        }), (0, s.jsx)(u.TabBar.Item, {
          id: L.pJs.ALL,
          className: R.item,
          children: v.Z.Messages.FRIENDS_SECTION_ALL
        }), (0, s.jsxs)(u.TabBar.Item, {
          id: L.pJs.PENDING,
          className: R.item,
          "aria-label": v.Z.Messages.FRIENDS_SECTION_PENDING,
          children: [v.Z.Messages.FRIENDS_SECTION_PENDING, M > 0 ? (0, s.jsx)(u.NumberBadge, {
            count: M,
            className: R.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), D > 0 ? (0, s.jsxs)(u.TabBar.Item, {
          id: L.pJs.SUGGESTIONS,
          className: R.item,
          "aria-label": v.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [v.Z.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, s.jsx)(u.NumberBadge, {
            count: D,
            className: R.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, s.jsx)(u.TabBar.Item, {
          id: L.pJs.BLOCKED,
          className: R.item,
          children: v.Z.Messages.BLOCKED
        }), (0, s.jsx)(u.TabBar.Item, {
          "aria-label": v.Z.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: a()(R.item, R.addFriend),
          id: L.pJs.ADD_FRIEND,
          children: (0, s.jsx)("span", {
            children: v.Z.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: R.tabBody,
      children: [(0, s.jsx)(u.TabBar.Panel, {
        id: x,
        className: R.peopleColumn,
        "aria-labelledby": y,
        children: x === L.pJs.ADD_FRIEND ? (0, s.jsx)(f.Z, {}) : (0, s.jsx)(Z.Z, {
          titleId: y,
          sectionFilter: x
        })
      }), (0, s.jsx)("div", {
        className: R.nowPlayingColumn,
        children: (0, s.jsx)(g.Z, {})
      })]
    })]
  })
}