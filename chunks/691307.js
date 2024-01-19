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
  m = l("866190"),
  E = l("130037"),
  M = l("178406"),
  h = l("645266"),
  T = l("913132"),
  x = l("553275"),
  _ = l("151123"),
  H = l("337092"),
  A = l("850646"),
  p = l("894282"),
  S = l("474507");
let L = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  N = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  g = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  v = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  I = e => e.shiftKey || e.key === p.KeyboardKeysUpdated.SHIFT,
  j = e => e.metaKey || e.ctrlKey,
  R = n.memo(function(e) {
    let {
      members: t,
      guild: l,
      className: s,
      searchState: o,
      compact: d,
      onSelectRow: c,
      onResetForNewMembers: f
    } = e, E = (0, u.default)([C.default], () => C.default.useReducedMotion), p = (0, m.useIsWindowFocused)(), [R, b] = n.useState(!1), [D, O] = n.useState(!1);
    n.useEffect(() => {
      !p && (b(!1), O(!1))
    }, [p]), n.useLayoutEffect(() => {
      let e = e => {
          I(e) && b(!0), j(e) && O(!0)
        },
        t = e => {
          I(e) && b(!1), j(e) && O(!1)
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
        immediate: E,
        from(e) {
          let t = M.default.getEnhancedMember(l.id, e),
            a = M.default.getLastRefreshTimestamp(l.id),
            n = null != t && t.refreshTimestamp === a;
          return null != t && 0 !== a && n ? V ? N : L : g
        },
        enter: g,
        config: v
      });
    return (0, a.jsxs)("table", {
      className: i(S.table, s),
      children: [(0, a.jsx)(_.default, {
        guildId: l.id,
        currentPagedMembers: t
      }), (0, a.jsx)("tbody", {
        children: o === x.SearchState.SUCCESS_FULL || o === x.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(A.default, {
            guild: l,
            onSubmit: f
          }), B((e, t) => (0, a.jsx)(H.default, {
            userId: t,
            guildId: l.id,
            style: e,
            onSelect: c,
            isHoldingAdvancedInfoKey: R && D,
            compact: d
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
  } = e, m = (0, u.useStateFromStoresObject)([M.default], () => M.default.getPaginationStateByGuildId(s.id), [s.id]), [T] = (0, u.default)([M.default], () => M.default.getPagedMembersByGuildId(s.id), [s.id], f.isVersionEqual);
  n.useEffect(() => {
    (0, h.initializeMemberSafetyStore)(s.id)
  }, [s.id]);
  let x = n.useDeferredValue(null !== (t = T[m.currentPage]) && void 0 !== t ? t : []),
    {
      analyticsLocations: _
    } = (0, c.default)(),
    H = null !== (l = null == _ ? void 0 : _[0]) && void 0 !== l ? l : null;
  return n.useEffect(() => {
    (0, E.trackMembersPageViewed)(s.id, H)
  }, [s.id, H]), (0, a.jsx)(R, {
    members: x,
    guild: s,
    className: i,
    searchState: o,
    compact: d,
    onSelectRow: r,
    onResetForNewMembers: C
  })
}