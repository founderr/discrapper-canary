"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("77078"),
  u = n("630086"),
  d = n("736964"),
  c = n("901582"),
  f = n("206230"),
  E = n("347272"),
  h = n("27618"),
  _ = n("545429"),
  C = n("471671"),
  I = n("810567"),
  S = n("791878"),
  m = n("637824"),
  p = n("146378"),
  T = n("709410"),
  g = n("411676"),
  A = n("86959"),
  N = n("748753"),
  R = n("144521"),
  O = n("59678"),
  v = n("49111"),
  L = n("782340"),
  M = n("512807"),
  P = function(e) {
    let {
      sectionFilter: t,
      titleId: n
    } = e, {
      rows: i,
      section: P
    } = (0, r.useStateFromStoresObject)([_.default], () => _.default.getState()), D = (0, r.useStateFromStores)([C.default], () => C.default.isFocused()), y = (0, r.useStateFromStores)([h.default], () => h.default.getRelationshipCount()), x = (0, S.useIsClearIncomingFriendRequestsEnabled)(), [b, U] = s.useState(() => {
      let e = {};
      for (let t of Object.values(v.FriendsSections)) e[t] = "";
      return e
    }), G = s.useCallback(e => {
      U({
        ...b,
        [t]: e
      })
    }, [b, t]), j = s.useCallback(() => {
      U({
        ...b,
        [t]: ""
      })
    }, [b, t]), w = i.filter(t, b[t]);
    if (0 === w.length && "" === b[t]) return (0, a.jsxs)("div", {
      className: M.emptyStateContainer,
      children: [t === v.FriendsSections.ONLINE && (0, a.jsx)(E.default, {}), (0, a.jsx)(T.default, {
        type: t,
        onClick: () => {
          u.default.setSection(v.FriendsSections.ADD_FRIEND)
        }
      }, P)]
    });
    let k = 0 === w.length && "" !== b[t],
      F = w.filter(e => e.type === v.RelationshipTypes.PENDING_INCOMING).length,
      B = t === v.FriendsSections.PENDING && F > 0,
      H = B && x && F >= O.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
    return (0, a.jsxs)(c.default, {
      section: v.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(I.default, {
        className: l(M.searchBar, k ? M.searchEmptyState : null),
        query: b[t],
        onChange: G,
        onClear: j,
        size: I.default.Sizes.MEDIUM
      }), t === v.FriendsSections.ONLINE && "" === b[t] && (0, a.jsx)(E.default, {}), (0, a.jsxs)("div", {
        className: M.sectionTitle,
        children: [(0, a.jsx)(N.default, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case v.FriendsSections.ONLINE:
                return L.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case v.FriendsSections.PENDING:
                return L.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case v.FriendsSections.SUGGESTIONS:
                return L.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case v.FriendsSections.BLOCKED:
                return L.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return L.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, w.length)
        }), H && (0, a.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: M.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(F)
          },
          "aria-label": L.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: L.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), k ? (0, a.jsx)("div", {
        className: M.emptyStateContainer,
        children: (0, a.jsx)(T.default, {
          type: T.FriendsSearchStatus.SECTION_NO_RESULTS
        }, P)
      }) : (0, a.jsx)(A.default, {
        relationshipCount: y,
        statusSections: [w],
        renderRow: function(e) {
          switch (t) {
            case v.FriendsSections.BLOCKED:
              return (0, a.jsx)(m.default, {
                ...e,
                isFocused: D
              });
            case v.FriendsSections.PENDING:
              return (0, a.jsx)(g.default, {
                ...e,
                isFocused: D
              });
            case v.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(R.default, {
                ...e,
                isFocused: D
              });
            case v.FriendsSections.ONLINE:
            case v.FriendsSections.ALL:
            default:
              return (0, a.jsx)(p.default, {
                ...e,
                isFocused: D
              })
          }
        },
        sectionFilter: t,
        searchQuery: b[t],
        useReducedMotion: f.default.useReducedMotion
      })]
    })
  }