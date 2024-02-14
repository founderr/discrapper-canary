"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("714617"),
  d = l.n(o),
  r = l("907002"),
  u = l("65597"),
  C = l("551042"),
  c = l("206230"),
  f = l("685665"),
  E = l("334572"),
  m = l("866190"),
  M = l("130037"),
  h = l("178406"),
  _ = l("645266"),
  T = l("913132"),
  x = l("553275"),
  S = l("151123"),
  A = l("337092"),
  g = l("850646"),
  p = l("894282"),
  L = l("465314");
let H = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  N = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  I = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  R = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  v = e => e.shiftKey || e.key === p.KeyboardKeysUpdated.SHIFT,
  j = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  D = n.memo(function(e) {
    let {
      members: t,
      guild: l,
      className: s,
      searchState: o,
      compact: d,
      onSelectRow: f,
      onResetForNewMembers: E
    } = e, M = (0, u.default)([c.default], () => c.default.useReducedMotion), p = (0, C.useHasAnyModalOpen)(), D = (0, m.useIsWindowFocused)(), [b, O] = n.useState(!1), [B, V] = n.useState(!1), y = !p && b && B;
    n.useEffect(() => {
      !D && (O(!1), V(!1))
    }, [D]), n.useLayoutEffect(() => {
      let e = e => {
          v(e) && O(!0), j(e) && V(!0)
        },
        t = e => {
          v(e) && O(!1), j(e) && V(!1)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
      }
    }, []), n.useEffect(() => {
      (0, _.getMemberSupplemental)(l.id, t)
    }, [l.id, t]);
    let F = t.length > 30,
      U = (0, r.useTransition)(t, {
        key: e => e,
        trail: F ? 5 : 15,
        immediate: M,
        from(e) {
          let t = h.default.getEnhancedMember(l.id, e),
            a = h.default.getLastRefreshTimestamp(l.id),
            n = null != t && t.refreshTimestamp === a;
          return null != t && 0 !== a && n ? F ? N : H : I
        },
        enter: I,
        config: R
      }),
      w = !M && o === x.SearchState.LOADING;
    return (0, a.jsxs)("table", {
      className: i(L.table, s),
      children: [(0, a.jsx)(S.default, {
        guildId: l.id,
        currentPagedMembers: t
      }), (0, a.jsx)("tbody", {
        children: o === x.SearchState.SUCCESS_FULL || o === x.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(g.default, {
            guild: l,
            onSubmit: E
          }), U((e, t) => (0, a.jsx)(A.default, {
            userId: t,
            guildId: l.id,
            style: e,
            onSelect: f,
            isHoldingAdvancedInfoKey: y,
            compact: d,
            isLoading: w
          }, t))]
        }) : (0, a.jsx)("td", {
          colSpan: 7,
          children: (0, a.jsx)(T.default, {
            searchState: o
          })
        })
      })]
    })
  }, function(e, t) {
    let l = d(e.members, t.members),
      a = e.guild.id === t.guild.id,
      n = e.searchState === t.searchState,
      s = e.compact === t.compact;
    return l && a && n && s
  });
var b = function(e) {
  var t, l;
  let {
    guild: s,
    className: i,
    searchState: o,
    compact: d,
    onSelectRow: r,
    onResetForNewMembers: C
  } = e, c = (0, u.useStateFromStoresObject)([h.default], () => h.default.getPaginationStateByGuildId(s.id), [s.id]), [m] = (0, u.default)([h.default], () => h.default.getPagedMembersByGuildId(s.id), [s.id], E.isVersionEqual);
  n.useEffect(() => {
    (0, _.initializeMemberSafetyStore)(s.id)
  }, [s.id]);
  let T = n.useDeferredValue(null !== (t = m[c.currentPage]) && void 0 !== t ? t : []),
    {
      analyticsLocations: x
    } = (0, f.default)(),
    S = null !== (l = null == x ? void 0 : x[0]) && void 0 !== l ? l : null;
  return n.useEffect(() => {
    (0, M.trackMembersPageViewed)(s.id, S)
  }, [s.id, S]), (0, a.jsx)(D, {
    members: T,
    guild: s,
    className: i,
    searchState: o,
    compact: d,
    onSelectRow: r,
    onResetForNewMembers: C
  })
}