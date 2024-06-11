"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("758059"),
  d = n("194359"),
  c = n("410575"),
  f = n("607070"),
  E = n("100527"),
  h = n("906732"),
  C = n("205976"),
  _ = n("699516"),
  m = n("974042"),
  S = n("451478"),
  p = n("390697"),
  I = n("434184"),
  g = n("701861"),
  T = n("437314"),
  A = n("696577"),
  N = n("163417"),
  v = n("492347"),
  R = n("42575"),
  O = n("617015"),
  L = n("981631"),
  P = n("689938"),
  y = n("739426");
t.default = function(e) {
  let {
    sectionFilter: t,
    titleId: n
  } = e, {
    analyticsLocations: l
  } = (0, h.default)(E.default.FRIENDS_LIST), {
    rows: M,
    section: D
  } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getState()), x = (0, r.useStateFromStores)([S.default], () => S.default.isFocused()), b = (0, r.useStateFromStores)([_.default], () => _.default.getRelationshipCount()), U = (0, p.useIsClearIncomingFriendRequestsEnabled)(), [j, G] = s.useState(() => {
    let e = {};
    for (let t of Object.values(L.FriendsSections)) e[t] = "";
    return e
  }), w = s.useCallback(e => {
    G({
      ...j,
      [t]: e
    })
  }, [j, t]), k = s.useCallback(() => {
    G({
      ...j,
      [t]: ""
    })
  }, [j, t]), B = M.filter(t, j[t]);
  if (0 === B.length && "" === j[t]) return (0, a.jsxs)("div", {
    className: y.emptyStateContainer,
    children: [t === L.FriendsSections.ONLINE && (0, a.jsx)(C.default, {}), (0, a.jsx)(T.default, {
      type: t,
      onClick: () => {
        u.default.setSection(L.FriendsSections.ADD_FRIEND)
      }
    }, D)]
  });
  let F = 0 === B.length && "" !== j[t],
    H = B.filter(e => e.type === L.RelationshipTypes.PENDING_INCOMING).length,
    V = t === L.FriendsSections.PENDING && H > 0 && U && H >= O.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsxs)(c.default, {
      section: L.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(o.SearchBar, {
        className: i()(y.searchBar, F ? y.searchEmptyState : null),
        query: j[t],
        onChange: w,
        onClear: k,
        size: o.SearchBar.Sizes.MEDIUM
      }), t === L.FriendsSections.ONLINE && "" === j[t] && (0, a.jsx)(C.default, {}), (0, a.jsxs)("div", {
        className: y.sectionTitle,
        children: [(0, a.jsx)(v.default, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case L.FriendsSections.ONLINE:
                return P.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case L.FriendsSections.PENDING:
                return P.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case L.FriendsSections.SUGGESTIONS:
                return P.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case L.FriendsSections.BLOCKED:
                return P.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return P.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, B.length)
        }), V && (0, a.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: y.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(H)
          },
          "aria-label": P.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: P.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), F ? (0, a.jsx)("div", {
        className: y.emptyStateContainer,
        children: (0, a.jsx)(T.default, {
          type: T.FriendsSearchStatus.SECTION_NO_RESULTS
        }, D)
      }) : (0, a.jsx)(N.default, {
        relationshipCount: b,
        statusSections: [B],
        renderRow: function(e) {
          switch (t) {
            case L.FriendsSections.BLOCKED:
              return (0, a.jsx)(I.default, {
                ...e,
                isFocused: x
              });
            case L.FriendsSections.PENDING:
              return (0, a.jsx)(A.default, {
                ...e,
                isFocused: x
              });
            case L.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(R.default, {
                ...e,
                isFocused: x
              });
            case L.FriendsSections.ONLINE:
            case L.FriendsSections.ALL:
            default:
              return (0, a.jsx)(g.default, {
                ...e,
                isFocused: x
              })
          }
        },
        sectionFilter: t,
        searchQuery: j[t],
        useReducedMotion: f.default.useReducedMotion
      })]
    })
  })
}