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
  _ = n("205976"),
  C = n("699516"),
  m = n("974042"),
  S = n("451478"),
  p = n("6048"),
  I = n("390697"),
  T = n("434184"),
  g = n("701861"),
  A = n("437314"),
  N = n("696577"),
  v = n("163417"),
  R = n("492347"),
  L = n("42575"),
  O = n("617015"),
  M = n("981631"),
  P = n("689938"),
  x = n("954360");
t.default = function(e) {
  let {
    sectionFilter: t,
    titleId: n
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
  }, [G, t]), B = s.useCallback(() => {
    w({
      ...G,
      [t]: ""
    })
  }, [G, t]), F = y.filter(t, G[t]);
  if (0 === F.length && "" === G[t]) return (0, a.jsxs)("div", {
    className: x.emptyStateContainer,
    children: [t === M.FriendsSections.ONLINE && (0, a.jsx)(_.default, {}), (0, a.jsx)(A.default, {
      type: t,
      onClick: () => {
        u.default.setSection(M.FriendsSections.ADD_FRIEND)
      }
    }, D)]
  });
  let H = 0 === F.length && "" !== G[t],
    V = F.filter(e => e.type === M.RelationshipTypes.PENDING_INCOMING).length,
    Y = t === M.FriendsSections.PENDING && V > 0 && j && V >= O.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsxs)(c.default, {
      section: M.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(p.default, {
        className: i()(x.searchBar, H ? x.searchEmptyState : null),
        query: G[t],
        onChange: k,
        onClear: B,
        size: p.default.Sizes.MEDIUM
      }), t === M.FriendsSections.ONLINE && "" === G[t] && (0, a.jsx)(_.default, {}), (0, a.jsxs)("div", {
        className: x.sectionTitle,
        children: [(0, a.jsx)(R.default, {
          id: n,
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
          }(t, F.length)
        }), Y && (0, a.jsx)(o.Button, {
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
      }), H ? (0, a.jsx)("div", {
        className: x.emptyStateContainer,
        children: (0, a.jsx)(A.default, {
          type: A.FriendsSearchStatus.SECTION_NO_RESULTS
        }, D)
      }) : (0, a.jsx)(v.default, {
        relationshipCount: U,
        statusSections: [F],
        renderRow: function(e) {
          switch (t) {
            case M.FriendsSections.BLOCKED:
              return (0, a.jsx)(T.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.PENDING:
              return (0, a.jsx)(N.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(L.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.ONLINE:
            case M.FriendsSections.ALL:
            default:
              return (0, a.jsx)(g.default, {
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