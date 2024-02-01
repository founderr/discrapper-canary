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
  C = l("206230"),
  c = l("685665"),
  f = l("334572"),
  E = l("866190"),
  m = l("130037"),
  M = l("178406"),
  h = l("645266"),
  _ = l("913132"),
  T = l("553275"),
  x = l("151123"),
  A = l("337092"),
  S = l("850646"),
  g = l("894282"),
  p = l("474507");
let L = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  H = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  N = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  I = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  R = e => e.shiftKey || e.key === g.KeyboardKeysUpdated.SHIFT,
  v = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  j = n.memo(function(e) {
    let {
      members: t,
      guild: l,
      className: s,
      searchState: o,
      compact: d,
      onSelectRow: c,
      onResetForNewMembers: f
    } = e, m = (0, u.default)([C.default], () => C.default.useReducedMotion), g = (0, E.useIsWindowFocused)(), [j, b] = n.useState(!1), [D, O] = n.useState(!1);
    n.useEffect(() => {
      !g && (b(!1), O(!1))
    }, [g]), n.useLayoutEffect(() => {
      let e = e => {
          R(e) && b(!0), v(e) && O(!0)
        },
        t = e => {
          R(e) && b(!1), v(e) && O(!1)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
      }
    }, []), n.useEffect(() => {
      (0, h.getMemberSupplemental)(l.id, t)
    }, [l.id, t]);
    let V = t.length > 30,
      B = (0, r.useTransition)(t, {
        key: e => e,
        trail: V ? 5 : 15,
        immediate: m,
        from(e) {
          let t = M.default.getEnhancedMember(l.id, e),
            a = M.default.getLastRefreshTimestamp(l.id),
            n = null != t && t.refreshTimestamp === a;
          return null != t && 0 !== a && n ? V ? H : L : N
        },
        enter: N,
        config: I
      });
    return (0, a.jsxs)("table", {
      className: i(p.table, s),
      children: [(0, a.jsx)(x.default, {
        guildId: l.id,
        currentPagedMembers: t
      }), (0, a.jsx)("tbody", {
        children: o === T.SearchState.SUCCESS_FULL || o === T.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(S.default, {
            guild: l,
            onSubmit: f
          }), B((e, t) => (0, a.jsx)(A.default, {
            userId: t,
            guildId: l.id,
            style: e,
            onSelect: c,
            isHoldingAdvancedInfoKey: j && D,
            compact: d,
            isLoading: o === T.SearchState.LOADING
          }, t))]
        }) : (0, a.jsx)("td", {
          colSpan: 7,
          children: (0, a.jsx)(_.default, {
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
  } = e, E = (0, u.useStateFromStoresObject)([M.default], () => M.default.getPaginationStateByGuildId(s.id), [s.id]), [_] = (0, u.default)([M.default], () => M.default.getPagedMembersByGuildId(s.id), [s.id], f.isVersionEqual);
  n.useEffect(() => {
    (0, h.initializeMemberSafetyStore)(s.id)
  }, [s.id]);
  let T = n.useDeferredValue(null !== (t = _[E.currentPage]) && void 0 !== t ? t : []),
    {
      analyticsLocations: x
    } = (0, c.default)(),
    A = null !== (l = null == x ? void 0 : x[0]) && void 0 !== l ? l : null;
  return n.useEffect(() => {
    (0, m.trackMembersPageViewed)(s.id, A)
  }, [s.id, A]), (0, a.jsx)(j, {
    members: T,
    guild: s,
    className: i,
    searchState: o,
    compact: d,
    onSelectRow: r,
    onResetForNewMembers: C
  })
}