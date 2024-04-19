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
  I = a("108427"),
  p = a("210887"),
  T = a("974042"),
  g = a("153124"),
  A = a("988951"),
  N = a("26290"),
  v = a("792125"),
  R = a("666286"),
  O = a("596957"),
  L = a("981631"),
  P = a("723359"),
  M = a("689938"),
  x = a("272212");

function y() {
  return (0, n.jsxs)("div", {
    className: x.inviteToolbar,
    children: [(0, n.jsx)(m.default, {
      tooltip: M.default.Messages.NEW_GROUP_DM
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
      source: P.AgeGateSource.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(L.Routes.ME)
    })
  }, [l, a]), s.useEffect(() => {
    f.setHomeLink(L.Routes.FRIENDS), (0, I.trackAppUIViewed)("friends")
  }, []), s.useEffect(() => {
    null != t && E.default.setInitialSection(t)
  }, [t]);
  let m = (0, u.useStateFromStores)([p.default], () => p.default.theme),
    {
      section: D,
      pendingCount: b
    } = (0, u.useStateFromStoresObject)([T.default], () => T.default.getState()),
    U = (0, u.useStateFromStoresObject)([_.default], () => _.default.getSuggestionCount()),
    j = (0, g.useUID)(),
    G = (0, g.useUID)();
  return (0, n.jsxs)("main", {
    className: x.container,
    "aria-label": M.default.Messages.FRIENDS,
    children: [(0, n.jsx)(h.AppPageTitle, {
      location: M.default.Messages.FRIENDS
    }), (0, n.jsxs)(C.default, {
      className: (0, v.getThemeClass)(m),
      toolbar: (0, n.jsx)(y, {}),
      scrollable: o.isMobile,
      role: "navigation",
      "aria-labelledby": j,
      children: [(0, n.jsx)(C.default.Icon, {
        icon: A.default,
        "aria-hidden": !0
      }), (0, n.jsx)(C.default.Title, {
        id: j,
        children: M.default.Messages.FRIENDS
      }), (0, n.jsx)(C.default.Divider, {}), (0, n.jsxs)(d.TabBar, {
        "aria-label": M.default.Messages.FRIENDS,
        selectedItem: D,
        type: "top-pill",
        onItemSelect: e => {
          E.default.setSection(e)
        },
        className: x.tabBar,
        children: [(0, n.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ONLINE,
          className: x.item,
          children: M.default.Messages.FRIENDS_SECTION_ONLINE
        }), (0, n.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ALL,
          className: x.item,
          children: M.default.Messages.FRIENDS_SECTION_ALL
        }), (0, n.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.PENDING,
          className: x.item,
          "aria-label": M.default.Messages.FRIENDS_SECTION_PENDING,
          children: [M.default.Messages.FRIENDS_SECTION_PENDING, b > 0 ? (0, n.jsx)(N.NumberBadge, {
            count: b,
            className: x.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), U > 0 ? (0, n.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.SUGGESTIONS,
          className: x.item,
          "aria-label": M.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [M.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, n.jsx)(N.NumberBadge, {
            count: U,
            className: x.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, n.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.BLOCKED,
          className: x.item,
          children: M.default.Messages.BLOCKED
        }), (0, n.jsx)(d.TabBar.Item, {
          "aria-label": M.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: i()(x.item, x.addFriend),
          id: L.FriendsSections.ADD_FRIEND,
          children: (0, n.jsx)("span", {
            children: M.default.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: x.tabBody,
      children: [(0, n.jsx)(d.TabBar.Panel, {
        id: D,
        className: x.peopleColumn,
        "aria-labelledby": G,
        children: D === L.FriendsSections.ADD_FRIEND ? (0, n.jsx)(R.default, {}) : (0, n.jsx)(O.default, {
          titleId: G,
          sectionFilter: D
        })
      }), (0, n.jsx)("div", {
        className: x.nowPlayingColumn,
        children: (0, n.jsx)(S.default, {})
      })]
    })]
  })
}