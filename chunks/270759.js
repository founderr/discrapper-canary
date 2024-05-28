"use strict";
n.r(t), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("757143");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("613828"),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("150063"),
  E = n("758059"),
  C = n("252618"),
  h = n("5254"),
  _ = n("984370"),
  S = n("518311"),
  m = n("199104"),
  p = n("108427"),
  I = n("210887"),
  g = n("974042"),
  T = n("153124"),
  A = n("988951"),
  N = n("26290"),
  v = n("792125"),
  R = n("666286"),
  O = n("596957"),
  L = n("981631"),
  P = n("723359"),
  y = n("689938"),
  M = n("915128");

function D() {
  return (0, a.jsxs)("div", {
    className: M.inviteToolbar,
    children: [(0, a.jsx)(S.default, {
      tooltip: y.default.Messages.NEW_GROUP_DM
    }), (0, a.jsx)(_.default.Divider, {})]
  })
}
t.default = function(e) {
  let {
    initialSection: t
  } = e, n = (0, r.useLocation)(), l = (0, r.useHistory)();
  s.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && c.default.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: P.AgeGateSource.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(L.Routes.ME)
    })
  }, [l, n]), s.useEffect(() => {
    f.setHomeLink(L.Routes.FRIENDS), (0, p.trackAppUIViewed)("friends")
  }, []), s.useEffect(() => {
    null != t && E.default.setInitialSection(t)
  }, [t]);
  let S = (0, u.useStateFromStores)([I.default], () => I.default.theme),
    {
      section: x,
      pendingCount: b
    } = (0, u.useStateFromStoresObject)([g.default], () => g.default.getState()),
    U = (0, u.useStateFromStoresObject)([h.default], () => h.default.getSuggestionCount()),
    j = (0, T.useUID)(),
    G = (0, T.useUID)();
  return (0, a.jsxs)("main", {
    className: M.container,
    "aria-label": y.default.Messages.FRIENDS,
    children: [(0, a.jsx)(C.AppPageTitle, {
      location: y.default.Messages.FRIENDS
    }), (0, a.jsxs)(_.default, {
      className: (0, v.getThemeClass)(S),
      toolbar: (0, a.jsx)(D, {}),
      scrollable: o.isMobile,
      role: "navigation",
      "aria-labelledby": j,
      children: [(0, a.jsx)(_.default.Icon, {
        icon: A.default,
        "aria-hidden": !0
      }), (0, a.jsx)(_.default.Title, {
        id: j,
        children: y.default.Messages.FRIENDS
      }), (0, a.jsx)(_.default.Divider, {}), (0, a.jsxs)(d.TabBar, {
        "aria-label": y.default.Messages.FRIENDS,
        selectedItem: x,
        type: "top-pill",
        onItemSelect: e => {
          E.default.setSection(e)
        },
        className: M.tabBar,
        children: [(0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ONLINE,
          className: M.item,
          children: y.default.Messages.FRIENDS_SECTION_ONLINE
        }), (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ALL,
          className: M.item,
          children: y.default.Messages.FRIENDS_SECTION_ALL
        }), (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.PENDING,
          className: M.item,
          "aria-label": y.default.Messages.FRIENDS_SECTION_PENDING,
          children: [y.default.Messages.FRIENDS_SECTION_PENDING, b > 0 ? (0, a.jsx)(N.NumberBadge, {
            count: b,
            className: M.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), U > 0 ? (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.SUGGESTIONS,
          className: M.item,
          "aria-label": y.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [y.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, a.jsx)(N.NumberBadge, {
            count: U,
            className: M.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.BLOCKED,
          className: M.item,
          children: y.default.Messages.BLOCKED
        }), (0, a.jsx)(d.TabBar.Item, {
          "aria-label": y.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: i()(M.item, M.addFriend),
          id: L.FriendsSections.ADD_FRIEND,
          children: (0, a.jsx)("span", {
            children: y.default.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: M.tabBody,
      children: [(0, a.jsx)(d.TabBar.Panel, {
        id: x,
        className: M.peopleColumn,
        "aria-labelledby": G,
        children: x === L.FriendsSections.ADD_FRIEND ? (0, a.jsx)(R.default, {}) : (0, a.jsx)(O.default, {
          titleId: G,
          sectionFilter: x
        })
      }), (0, a.jsx)("div", {
        className: M.nowPlayingColumn,
        children: (0, a.jsx)(m.default, {})
      })]
    })]
  })
}