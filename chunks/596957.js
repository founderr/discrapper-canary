n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(974042),
  p = n(451478),
  T = n(390697),
  N = n(434184),
  S = n(701861),
  C = n(437314),
  A = n(696577),
  f = n(163417),
  Z = n(492347),
  v = n(42575),
  L = n(617015),
  O = n(981631),
  R = n(689938),
  x = n(28813);
t.Z = function(e) {
  let {
    sectionFilter: t,
    titleId: n
  } = e, {
    analyticsLocations: l
  } = (0, _.ZP)(h.Z.FRIENDS_LIST), {
    rows: M,
    section: P
  } = (0, r.cj)([g.ZP], () => g.ZP.getState()), D = (0, r.e7)([p.Z], () => p.Z.isFocused()), b = (0, r.e7)([m.Z], () => m.Z.getRelationshipCount()), y = (0, T.T)(), [j, U] = s.useState(() => {
    let e = {};
    for (let t of Object.values(O.pJs)) e[t] = "";
    return e
  }), G = s.useCallback(e => {
    U({
      ...j,
      [t]: e
    })
  }, [j, t]), w = s.useCallback(() => {
    U({
      ...j,
      [t]: ""
    })
  }, [j, t]), k = M.filter(t, j[t]);
  if (0 === k.length && "" === j[t]) return (0, i.jsxs)("div", {
    className: x.emptyStateContainer,
    children: [t === O.pJs.ONLINE && (0, i.jsx)(I.Z, {}), (0, i.jsx)(C.Z, {
      type: t,
      onClick: () => {
        c.Z.setSection(O.pJs.ADD_FRIEND)
      }
    }, P)]
  });
  let B = [k],
    H = 0 === k.length && "" !== j[t],
    V = k.filter(e => e.type === O.OGo.PENDING_INCOMING).length,
    F = t === O.pJs.PENDING && V > 0 && y && V >= L.yf;
  return (0, i.jsx)(_.Gt, {
    value: l,
    children: (0, i.jsxs)(d.Z, {
      section: O.jXE.FRIENDS_LIST,
      children: [(0, i.jsx)(o.SearchBar, {
        className: a()(x.searchBar, H ? x.searchEmptyState : null),
        query: j[t],
        onChange: G,
        onClear: w,
        size: o.SearchBar.Sizes.MEDIUM
      }), t === O.pJs.ONLINE && "" === j[t] && (0, i.jsx)(I.Z, {}), (0, i.jsxs)("div", {
        className: x.sectionTitle,
        children: [(0, i.jsx)(Z.Z, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case O.pJs.ONLINE:
                return R.Z.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case O.pJs.PENDING:
                return R.Z.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case O.pJs.SUGGESTIONS:
                return R.Z.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case O.pJs.BLOCKED:
                return R.Z.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return R.Z.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, k.length)
        }), F && (0, i.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: x.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), u.Z.confirmClearPendingRelationships(V)
          },
          "aria-label": R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), H ? (0, i.jsx)("div", {
        className: x.emptyStateContainer,
        children: (0, i.jsx)(C.Z, {
          type: C.j.SECTION_NO_RESULTS
        }, P)
      }) : (0, i.jsx)(f.Z, {
        relationshipCount: b,
        statusSections: B,
        renderRow: function(e) {
          switch (t) {
            case O.pJs.BLOCKED:
              return (0, i.jsx)(N.Z, {
                ...e,
                isFocused: D
              });
            case O.pJs.PENDING:
              return (0, i.jsx)(A.Z, {
                ...e,
                isFocused: D
              });
            case O.pJs.SUGGESTIONS:
              return (0, i.jsx)(v.Z, {
                ...e,
                isFocused: D
              });
            case O.pJs.ONLINE:
            case O.pJs.ALL:
            default:
              return (0, i.jsx)(S.Z, {
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