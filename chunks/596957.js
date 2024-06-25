n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(758059),
  u = n(194359),
  d = n(410575),
  E = n(607070),
  h = n(100527),
  _ = n(906732),
  I = n(205976),
  m = n(699516),
  T = n(974042),
  g = n(451478),
  p = n(390697),
  N = n(434184),
  S = n(701861),
  C = n(437314),
  A = n(696577),
  f = n(163417),
  Z = n(492347),
  L = n(42575),
  O = n(617015),
  v = n(981631),
  R = n(689938),
  P = n(28813);
t.Z = function(e) {
  let {
    sectionFilter: t,
    titleId: n
  } = e, {
    analyticsLocations: l
  } = (0, _.ZP)(h.Z.FRIENDS_LIST), {
    rows: x,
    section: M
  } = (0, r.cj)([T.ZP], () => T.ZP.getState()), D = (0, r.e7)([g.Z], () => g.Z.isFocused()), b = (0, r.e7)([m.Z], () => m.Z.getRelationshipCount()), y = (0, p.T)(), [j, U] = i.useState(() => {
    let e = {};
    for (let t of Object.values(v.pJs)) e[t] = "";
    return e
  }), G = i.useCallback(e => {
    U({
      ...j,
      [t]: e
    })
  }, [j, t]), w = i.useCallback(() => {
    U({
      ...j,
      [t]: ""
    })
  }, [j, t]), k = x.filter(t, j[t]);
  if (0 === k.length && "" === j[t]) return (0, s.jsxs)("div", {
    className: P.emptyStateContainer,
    children: [t === v.pJs.ONLINE && (0, s.jsx)(I.Z, {}), (0, s.jsx)(C.Z, {
      type: t,
      onClick: () => {
        c.Z.setSection(v.pJs.ADD_FRIEND)
      }
    }, M)]
  });
  let B = [k],
    H = 0 === k.length && "" !== j[t],
    V = k.filter(e => e.type === v.OGo.PENDING_INCOMING).length,
    F = t === v.pJs.PENDING && V > 0 && y && V >= O.yf;
  return (0, s.jsx)(_.Gt, {
    value: l,
    children: (0, s.jsxs)(d.Z, {
      section: v.jXE.FRIENDS_LIST,
      children: [(0, s.jsx)(o.SearchBar, {
        className: a()(P.searchBar, H ? P.searchEmptyState : null),
        query: j[t],
        onChange: G,
        onClear: w,
        size: o.SearchBar.Sizes.MEDIUM
      }), t === v.pJs.ONLINE && "" === j[t] && (0, s.jsx)(I.Z, {}), (0, s.jsxs)("div", {
        className: P.sectionTitle,
        children: [(0, s.jsx)(Z.Z, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case v.pJs.ONLINE:
                return R.Z.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case v.pJs.PENDING:
                return R.Z.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case v.pJs.SUGGESTIONS:
                return R.Z.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case v.pJs.BLOCKED:
                return R.Z.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return R.Z.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, k.length)
        }), F && (0, s.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: P.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), u.Z.confirmClearPendingRelationships(V)
          },
          "aria-label": R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), H ? (0, s.jsx)("div", {
        className: P.emptyStateContainer,
        children: (0, s.jsx)(C.Z, {
          type: C.j.SECTION_NO_RESULTS
        }, M)
      }) : (0, s.jsx)(f.Z, {
        relationshipCount: b,
        statusSections: B,
        renderRow: function(e) {
          switch (t) {
            case v.pJs.BLOCKED:
              return (0, s.jsx)(N.Z, {
                ...e,
                isFocused: D
              });
            case v.pJs.PENDING:
              return (0, s.jsx)(A.Z, {
                ...e,
                isFocused: D
              });
            case v.pJs.SUGGESTIONS:
              return (0, s.jsx)(L.Z, {
                ...e,
                isFocused: D
              });
            case v.pJs.ONLINE:
            case v.pJs.ALL:
            default:
              return (0, s.jsx)(S.Z, {
                ...e,
                isFocused: D
              })
          }
        },
        sectionFilter: t,
        searchQuery: j[t],
        useReducedMotion: E.Z.useReducedMotion
      })]
    })
  })
}