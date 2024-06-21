n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(735250),
  s = n(470079),
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
  g = n(518311),
  p = n(199104),
  N = n(108427),
  T = n(210887),
  C = n(974042),
  S = n(153124),
  A = n(792125),
  f = n(666286),
  Z = n(596957),
  v = n(981631),
  L = n(723359),
  O = n(689938),
  R = n(756899);

function x() {
  return (0, i.jsxs)("div", {
    className: R.inviteToolbar,
    children: [(0, i.jsx)(g.Z, {
      tooltip: O.Z.Messages.NEW_GROUP_DM
    }), (0, i.jsx)(m.Z.Divider, {})]
  })
}
t.Z = function(e) {
  let {
    initialSection: t
  } = e, n = (0, r.TH)(), l = (0, r.k6)();
  s.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && d.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: L.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(v.Z5c.ME)
    })
  }, [l, n]), s.useEffect(() => {
    E.Y(v.Z5c.FRIENDS), (0, N.e)("friends")
  }, []), s.useEffect(() => {
    null != t && h.Z.setInitialSection(t)
  }, [t]);
  let g = (0, c.e7)([T.Z], () => T.Z.theme),
    {
      section: M,
      pendingCount: P
    } = (0, c.cj)([C.ZP], () => C.ZP.getState()),
    D = (0, c.cj)([I.Z], () => I.Z.getSuggestionCount()),
    b = (0, S.Dt)(),
    y = (0, S.Dt)();
  return (0, i.jsxs)("main", {
    className: R.container,
    "aria-label": O.Z.Messages.FRIENDS,
    children: [(0, i.jsx)(_.yY, {
      location: O.Z.Messages.FRIENDS
    }), (0, i.jsxs)(m.Z, {
      className: (0, A.Q)(g),
      toolbar: (0, i.jsx)(x, {}),
      scrollable: o.tq,
      role: "navigation",
      "aria-labelledby": b,
      children: [(0, i.jsx)(m.Z.Icon, {
        icon: u.FriendsIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(m.Z.Title, {
        id: b,
        children: O.Z.Messages.FRIENDS
      }), (0, i.jsx)(m.Z.Divider, {}), (0, i.jsxs)(u.TabBar, {
        "aria-label": O.Z.Messages.FRIENDS,
        selectedItem: M,
        type: "top-pill",
        onItemSelect: e => {
          h.Z.setSection(e)
        },
        className: R.tabBar,
        children: [(0, i.jsx)(u.TabBar.Item, {
          id: v.pJs.ONLINE,
          className: R.item,
          children: O.Z.Messages.FRIENDS_SECTION_ONLINE
        }), (0, i.jsx)(u.TabBar.Item, {
          id: v.pJs.ALL,
          className: R.item,
          children: O.Z.Messages.FRIENDS_SECTION_ALL
        }), (0, i.jsxs)(u.TabBar.Item, {
          id: v.pJs.PENDING,
          className: R.item,
          "aria-label": O.Z.Messages.FRIENDS_SECTION_PENDING,
          children: [O.Z.Messages.FRIENDS_SECTION_PENDING, P > 0 ? (0, i.jsx)(u.NumberBadge, {
            count: P,
            className: R.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), D > 0 ? (0, i.jsxs)(u.TabBar.Item, {
          id: v.pJs.SUGGESTIONS,
          className: R.item,
          "aria-label": O.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [O.Z.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, i.jsx)(u.NumberBadge, {
            count: D,
            className: R.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, i.jsx)(u.TabBar.Item, {
          id: v.pJs.BLOCKED,
          className: R.item,
          children: O.Z.Messages.BLOCKED
        }), (0, i.jsx)(u.TabBar.Item, {
          "aria-label": O.Z.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: a()(R.item, R.addFriend),
          id: v.pJs.ADD_FRIEND,
          children: (0, i.jsx)("span", {
            children: O.Z.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: R.tabBody,
      children: [(0, i.jsx)(u.TabBar.Panel, {
        id: M,
        className: R.peopleColumn,
        "aria-labelledby": y,
        children: M === v.pJs.ADD_FRIEND ? (0, i.jsx)(f.Z, {}) : (0, i.jsx)(Z.Z, {
          titleId: y,
          sectionFilter: M
        })
      }), (0, i.jsx)("div", {
        className: R.nowPlayingColumn,
        children: (0, i.jsx)(p.Z, {})
      })]
    })]
  })
}