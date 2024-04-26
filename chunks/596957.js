"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("481060"),
  u = a("758059"),
  d = a("194359"),
  c = a("410575"),
  f = a("607070"),
  E = a("100527"),
  h = a("906732"),
  _ = a("205976"),
  C = a("699516"),
  m = a("974042"),
  S = a("451478"),
  p = a("6048"),
  I = a("390697"),
  T = a("434184"),
  g = a("701861"),
  A = a("437314"),
  N = a("696577"),
  v = a("163417"),
  R = a("492347"),
  L = a("42575"),
  O = a("617015"),
  M = a("981631"),
  P = a("689938"),
  x = a("954360");
t.default = function(e) {
  let {
    sectionFilter: t,
    titleId: a
  } = e, {
    analyticsLocations: l
  } = (0, h.default)(E.default.FRIENDS_LIST), {
    rows: y,
    section: D
  } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getState()), b = (0, r.useStateFromStores)([S.default], () => S.default.isFocused()), U = (0, r.useStateFromStores)([C.default], () => C.default.getRelationshipCount()), j = (0, I.useIsClearIncomingFriendRequestsEnabled)(), [G, w] = s.useState(() => {
    let e = {};
    for (let t of Object.values(M.FriendsSections)) e[t] = "";
    return e
  }), k = s.useCallback(e => {
    w({
      ...G,
      [t]: e
    })
  }, [G, t]), F = s.useCallback(() => {
    w({
      ...G,
      [t]: ""
    })
  }, [G, t]), B = y.filter(t, G[t]);
  if (0 === B.length && "" === G[t]) return (0, n.jsxs)("div", {
    className: x.emptyStateContainer,
    children: [t === M.FriendsSections.ONLINE && (0, n.jsx)(_.default, {}), (0, n.jsx)(A.default, {
      type: t,
      onClick: () => {
        u.default.setSection(M.FriendsSections.ADD_FRIEND)
      }
    }, D)]
  });
  let H = 0 === B.length && "" !== G[t],
    V = B.filter(e => e.type === M.RelationshipTypes.PENDING_INCOMING).length,
    Y = t === M.FriendsSections.PENDING && V > 0 && j && V >= O.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
  return (0, n.jsx)(h.AnalyticsLocationProvider, {
    value: l,
    children: (0, n.jsxs)(c.default, {
      section: M.AnalyticsSections.FRIENDS_LIST,
      children: [(0, n.jsx)(p.default, {
        className: i()(x.searchBar, H ? x.searchEmptyState : null),
        query: G[t],
        onChange: k,
        onClear: F,
        size: p.default.Sizes.MEDIUM
      }), t === M.FriendsSections.ONLINE && "" === G[t] && (0, n.jsx)(_.default, {}), (0, n.jsxs)("div", {
        className: x.sectionTitle,
        children: [(0, n.jsx)(R.default, {
          id: a,
          title: function(e, t) {
            switch (e) {
              case M.FriendsSections.ONLINE:
                return P.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case M.FriendsSections.PENDING:
                return P.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case M.FriendsSections.SUGGESTIONS:
                return P.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case M.FriendsSections.BLOCKED:
                return P.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return P.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, B.length)
        }), Y && (0, n.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: x.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(V)
          },
          "aria-label": P.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: P.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), H ? (0, n.jsx)("div", {
        className: x.emptyStateContainer,
        children: (0, n.jsx)(A.default, {
          type: A.FriendsSearchStatus.SECTION_NO_RESULTS
        }, D)
      }) : (0, n.jsx)(v.default, {
        relationshipCount: U,
        statusSections: [B],
        renderRow: function(e) {
          switch (t) {
            case M.FriendsSections.BLOCKED:
              return (0, n.jsx)(T.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.PENDING:
              return (0, n.jsx)(N.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.SUGGESTIONS:
              return (0, n.jsx)(L.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.ONLINE:
            case M.FriendsSections.ALL:
            default:
              return (0, n.jsx)(g.default, {
                ...e,
                isFocused: b
              })
          }
        },
        sectionFilter: t,
        searchQuery: G[t],
        useReducedMotion: f.default.useReducedMotion
      })]
    })
  })
}