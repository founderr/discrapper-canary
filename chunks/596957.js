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
  C = n("906732"),
  h = n("205976"),
  _ = n("699516"),
  S = n("974042"),
  m = n("451478"),
  p = n("6048"),
  I = n("390697"),
  g = n("434184"),
  T = n("701861"),
  A = n("437314"),
  N = n("696577"),
  v = n("163417"),
  R = n("492347"),
  O = n("42575"),
  L = n("617015"),
  P = n("981631"),
  y = n("689938"),
  M = n("739426");
t.default = function(e) {
  let {
    sectionFilter: t,
    titleId: n
  } = e, {
    analyticsLocations: l
  } = (0, C.default)(E.default.FRIENDS_LIST), {
    rows: D,
    section: x
  } = (0, r.useStateFromStoresObject)([S.default], () => S.default.getState()), b = (0, r.useStateFromStores)([m.default], () => m.default.isFocused()), U = (0, r.useStateFromStores)([_.default], () => _.default.getRelationshipCount()), j = (0, I.useIsClearIncomingFriendRequestsEnabled)(), [G, w] = s.useState(() => {
    let e = {};
    for (let t of Object.values(P.FriendsSections)) e[t] = "";
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
  }, [G, t]), F = D.filter(t, G[t]);
  if (0 === F.length && "" === G[t]) return (0, a.jsxs)("div", {
    className: M.emptyStateContainer,
    children: [t === P.FriendsSections.ONLINE && (0, a.jsx)(h.default, {}), (0, a.jsx)(A.default, {
      type: t,
      onClick: () => {
        u.default.setSection(P.FriendsSections.ADD_FRIEND)
      }
    }, x)]
  });
  let H = 0 === F.length && "" !== G[t],
    V = F.filter(e => e.type === P.RelationshipTypes.PENDING_INCOMING).length,
    Y = t === P.FriendsSections.PENDING && V > 0 && j && V >= L.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
  return (0, a.jsx)(C.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsxs)(c.default, {
      section: P.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(p.default, {
        className: i()(M.searchBar, H ? M.searchEmptyState : null),
        query: G[t],
        onChange: k,
        onClear: B,
        size: p.default.Sizes.MEDIUM
      }), t === P.FriendsSections.ONLINE && "" === G[t] && (0, a.jsx)(h.default, {}), (0, a.jsxs)("div", {
        className: M.sectionTitle,
        children: [(0, a.jsx)(R.default, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case P.FriendsSections.ONLINE:
                return y.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case P.FriendsSections.PENDING:
                return y.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case P.FriendsSections.SUGGESTIONS:
                return y.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case P.FriendsSections.BLOCKED:
                return y.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return y.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, F.length)
        }), Y && (0, a.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: M.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(V)
          },
          "aria-label": y.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: y.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), H ? (0, a.jsx)("div", {
        className: M.emptyStateContainer,
        children: (0, a.jsx)(A.default, {
          type: A.FriendsSearchStatus.SECTION_NO_RESULTS
        }, x)
      }) : (0, a.jsx)(v.default, {
        relationshipCount: U,
        statusSections: [F],
        renderRow: function(e) {
          switch (t) {
            case P.FriendsSections.BLOCKED:
              return (0, a.jsx)(g.default, {
                ...e,
                isFocused: b
              });
            case P.FriendsSections.PENDING:
              return (0, a.jsx)(N.default, {
                ...e,
                isFocused: b
              });
            case P.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(O.default, {
                ...e,
                isFocused: b
              });
            case P.FriendsSections.ONLINE:
            case P.FriendsSections.ALL:
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