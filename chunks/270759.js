"use strict";
a.r(t), a("610138"), a("216116"), a("78328"), a("815648"), a("47120"), a("757143");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("613828"),
  o = a("873546"),
  u = a("442837"),
  d = a("481060"),
  c = a("570140"),
  f = a("150063"),
  E = a("758059"),
  h = a("252618"),
  _ = a("5254"),
  C = a("984370"),
  m = a("518311"),
  S = a("199104"),
  p = a("108427"),
  I = a("210887"),
  T = a("974042"),
  g = a("153124"),
  A = a("988951"),
  N = a("26290"),
  v = a("792125"),
  L = a("666286"),
  R = a("596957"),
  O = a("981631"),
  M = a("723359"),
  P = a("689938"),
  y = a("827894");

function x() {
  return (0, n.jsxs)("div", {
    className: y.inviteToolbar,
    children: [(0, n.jsx)(m.default, {
      tooltip: P.default.Messages.NEW_GROUP_DM
    }), (0, n.jsx)(C.default.Divider, {})]
  })
}
t.default = function(e) {
  let {
    initialSection: t
  } = e, a = (0, r.useLocation)(), l = (0, r.useHistory)();
  s.useEffect(() => {
    "true" === new URLSearchParams(a.search).get("confirm-age") && c.default.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: M.AgeGateSource.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(O.Routes.ME)
    })
  }, [l, a]), s.useEffect(() => {
    f.setHomeLink(O.Routes.FRIENDS), (0, p.trackAppUIViewed)("friends")
  }, []), s.useEffect(() => {
    null != t && E.default.setInitialSection(t)
  }, [t]);
  let m = (0, u.useStateFromStores)([I.default], () => I.default.theme),
    {
      section: D,
      pendingCount: b
    } = (0, u.useStateFromStoresObject)([T.default], () => T.default.getState()),
    U = (0, u.useStateFromStoresObject)([_.default], () => _.default.getSuggestionCount()),
    j = (0, g.useUID)(),
    G = (0, g.useUID)();
  return (0, n.jsxs)("main", {
    className: y.container,
    "aria-label": P.default.Messages.FRIENDS,
    children: [(0, n.jsx)(h.AppPageTitle, {
      location: P.default.Messages.FRIENDS
    }), (0, n.jsxs)(C.default, {
      className: (0, v.getThemeClass)(m),
      toolbar: (0, n.jsx)(x, {}),
      scrollable: o.isMobile,
      role: "navigation",
      "aria-labelledby": j,
      children: [(0, n.jsx)(C.default.Icon, {
        icon: A.default,
        "aria-hidden": !0
      }), (0, n.jsx)(C.default.Title, {
        id: j,
        children: P.default.Messages.FRIENDS
      }), (0, n.jsx)(C.default.Divider, {}), (0, n.jsxs)(d.TabBar, {
        "aria-label": P.default.Messages.FRIENDS,
        selectedItem: D,
        type: "top-pill",
        onItemSelect: e => {
          E.default.setSection(e)
        },
        className: y.tabBar,
        children: [(0, n.jsx)(d.TabBar.Item, {
          id: O.FriendsSections.ONLINE,
          className: y.item,
          children: P.default.Messages.FRIENDS_SECTION_ONLINE
        }), (0, n.jsx)(d.TabBar.Item, {
          id: O.FriendsSections.ALL,
          className: y.item,
          children: P.default.Messages.FRIENDS_SECTION_ALL
        }), (0, n.jsxs)(d.TabBar.Item, {
          id: O.FriendsSections.PENDING,
          className: y.item,
          "aria-label": P.default.Messages.FRIENDS_SECTION_PENDING,
          children: [P.default.Messages.FRIENDS_SECTION_PENDING, b > 0 ? (0, n.jsx)(N.NumberBadge, {
            count: b,
            className: y.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), U > 0 ? (0, n.jsxs)(d.TabBar.Item, {
          id: O.FriendsSections.SUGGESTIONS,
          className: y.item,
          "aria-label": P.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [P.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, n.jsx)(N.NumberBadge, {
            count: U,
            className: y.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, n.jsx)(d.TabBar.Item, {
          id: O.FriendsSections.BLOCKED,
          className: y.item,
          children: P.default.Messages.BLOCKED
        }), (0, n.jsx)(d.TabBar.Item, {
          "aria-label": P.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: i()(y.item, y.addFriend),
          id: O.FriendsSections.ADD_FRIEND,
          children: (0, n.jsx)("span", {
            children: P.default.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: y.tabBody,
      children: [(0, n.jsx)(d.TabBar.Panel, {
        id: D,
        className: y.peopleColumn,
        "aria-labelledby": G,
        children: D === O.FriendsSections.ADD_FRIEND ? (0, n.jsx)(L.default, {}) : (0, n.jsx)(R.default, {
          titleId: G,
          sectionFilter: D
        })
      }), (0, n.jsx)("div", {
        className: y.nowPlayingColumn,
        children: (0, n.jsx)(S.default, {})
      })]
    })]
  })
}