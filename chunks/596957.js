"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
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
  g = n("390697"),
  I = n("434184"),
  T = n("701861"),
  A = n("437314"),
  N = n("696577"),
  v = n("163417"),
  R = n("492347"),
  O = n("42575"),
  L = n("617015"),
  M = n("981631"),
  y = n("689938"),
  P = n("954360");
t.default = function(e) {
  let {
    sectionFilter: t,
    titleId: n
  } = e, {
    analyticsLocations: i
  } = (0, h.default)(E.default.FRIENDS_LIST), {
    rows: x,
    section: D
  } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getState()), b = (0, r.useStateFromStores)([S.default], () => S.default.isFocused()), U = (0, r.useStateFromStores)([C.default], () => C.default.getRelationshipCount()), j = (0, g.useIsClearIncomingFriendRequestsEnabled)(), [G, k] = s.useState(() => {
    let e = {};
    for (let t of Object.values(M.FriendsSections)) e[t] = "";
    return e
  }), w = s.useCallback(e => {
    k({
      ...G,
      [t]: e
    })
  }, [G, t]), F = s.useCallback(() => {
    k({
      ...G,
      [t]: ""
    })
  }, [G, t]), B = x.filter(t, G[t]);
  if (0 === B.length && "" === G[t]) return (0, a.jsxs)("div", {
    className: P.emptyStateContainer,
    children: [t === M.FriendsSections.ONLINE && (0, a.jsx)(_.default, {}), (0, a.jsx)(A.default, {
      type: t,
      onClick: () => {
        u.default.setSection(M.FriendsSections.ADD_FRIEND)
      }
    }, D)]
  });
  let H = 0 === B.length && "" !== G[t],
    V = B.filter(e => e.type === M.RelationshipTypes.PENDING_INCOMING).length,
    Y = t === M.FriendsSections.PENDING && V > 0 && j && V >= L.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: i,
    children: (0, a.jsxs)(c.default, {
      section: M.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(p.default, {
        className: l()(P.searchBar, H ? P.searchEmptyState : null),
        query: G[t],
        onChange: w,
        onClear: F,
        size: p.default.Sizes.MEDIUM
      }), t === M.FriendsSections.ONLINE && "" === G[t] && (0, a.jsx)(_.default, {}), (0, a.jsxs)("div", {
        className: P.sectionTitle,
        children: [(0, a.jsx)(R.default, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case M.FriendsSections.ONLINE:
                return y.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case M.FriendsSections.PENDING:
                return y.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case M.FriendsSections.SUGGESTIONS:
                return y.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case M.FriendsSections.BLOCKED:
                return y.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return y.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, B.length)
        }), Y && (0, a.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: P.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(V)
          },
          "aria-label": y.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: y.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), H ? (0, a.jsx)("div", {
        className: P.emptyStateContainer,
        children: (0, a.jsx)(A.default, {
          type: A.FriendsSearchStatus.SECTION_NO_RESULTS
        }, D)
      }) : (0, a.jsx)(v.default, {
        relationshipCount: U,
        statusSections: [B],
        renderRow: function(e) {
          switch (t) {
            case M.FriendsSections.BLOCKED:
              return (0, a.jsx)(I.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.PENDING:
              return (0, a.jsx)(N.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(O.default, {
                ...e,
                isFocused: b
              });
            case M.FriendsSections.ONLINE:
            case M.FriendsSections.ALL:
            default:
              return (0, a.jsx)(T.default, {
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