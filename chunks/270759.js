"use strict";
n.r(t), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("757143");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("613828"),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("150063"),
  E = n("758059"),
  h = n("252618"),
  _ = n("5254"),
  C = n("984370"),
  m = n("518311"),
  S = n("199104"),
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
  M = n("723359"),
  y = n("689938"),
  P = n("915128");

function x() {
  return (0, a.jsxs)("div", {
    className: P.inviteToolbar,
    children: [(0, a.jsx)(m.default, {
      tooltip: y.default.Messages.NEW_GROUP_DM
    }), (0, a.jsx)(C.default.Divider, {})]
  })
}
t.default = function(e) {
  let {
    initialSection: t
  } = e, n = (0, r.useLocation)(), i = (0, r.useHistory)();
  s.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && c.default.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: M.AgeGateSource.DEEP_LINK_PROMPT
    }).then(() => {
      i.replace(L.Routes.ME)
    })
  }, [i, n]), s.useEffect(() => {
    f.setHomeLink(L.Routes.FRIENDS), (0, p.trackAppUIViewed)("friends")
  }, []), s.useEffect(() => {
    null != t && E.default.setInitialSection(t)
  }, [t]);
  let m = (0, u.useStateFromStores)([I.default], () => I.default.theme),
    {
      section: D,
      pendingCount: b
    } = (0, u.useStateFromStoresObject)([g.default], () => g.default.getState()),
    U = (0, u.useStateFromStoresObject)([_.default], () => _.default.getSuggestionCount()),
    j = (0, T.useUID)(),
    G = (0, T.useUID)();
  return (0, a.jsxs)("main", {
    className: P.container,
    "aria-label": y.default.Messages.FRIENDS,
    children: [(0, a.jsx)(h.AppPageTitle, {
      location: y.default.Messages.FRIENDS
    }), (0, a.jsxs)(C.default, {
      className: (0, v.getThemeClass)(m),
      toolbar: (0, a.jsx)(x, {}),
      scrollable: o.isMobile,
      role: "navigation",
      "aria-labelledby": j,
      children: [(0, a.jsx)(C.default.Icon, {
        icon: A.default,
        "aria-hidden": !0
      }), (0, a.jsx)(C.default.Title, {
        id: j,
        children: y.default.Messages.FRIENDS
      }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(d.TabBar, {
        "aria-label": y.default.Messages.FRIENDS,
        selectedItem: D,
        type: "top-pill",
        onItemSelect: e => {
          E.default.setSection(e)
        },
        className: P.tabBar,
        children: [(0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ONLINE,
          className: P.item,
          children: y.default.Messages.FRIENDS_SECTION_ONLINE
        }), (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ALL,
          className: P.item,
          children: y.default.Messages.FRIENDS_SECTION_ALL
        }), (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.PENDING,
          className: P.item,
          "aria-label": y.default.Messages.FRIENDS_SECTION_PENDING,
          children: [y.default.Messages.FRIENDS_SECTION_PENDING, b > 0 ? (0, a.jsx)(N.NumberBadge, {
            count: b,
            className: P.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), U > 0 ? (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.SUGGESTIONS,
          className: P.item,
          "aria-label": y.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [y.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, a.jsx)(N.NumberBadge, {
            count: U,
            className: P.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.BLOCKED,
          className: P.item,
          children: y.default.Messages.BLOCKED
        }), (0, a.jsx)(d.TabBar.Item, {
          "aria-label": y.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: l()(P.item, P.addFriend),
          id: L.FriendsSections.ADD_FRIEND,
          children: (0, a.jsx)("span", {
            children: y.default.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: P.tabBody,
      children: [(0, a.jsx)(d.TabBar.Panel, {
        id: D,
        className: P.peopleColumn,
        "aria-labelledby": G,
        children: D === L.FriendsSections.ADD_FRIEND ? (0, a.jsx)(R.default, {}) : (0, a.jsx)(O.default, {
          titleId: G,
          sectionFilter: D
        })
      }), (0, a.jsx)("div", {
        className: P.nowPlayingColumn,
        children: (0, a.jsx)(S.default, {})
      })]
    })]
  })
}