"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("120356"),
  o = l.n(n),
  i = l("348327"),
  r = l.n(i),
  d = l("920906"),
  u = l("399606"),
  C = l("952265"),
  c = l("607070"),
  m = l("906732"),
  E = l("136015"),
  f = l("506071"),
  _ = l("910693"),
  M = l("893966"),
  h = l("527379"),
  S = l("827657"),
  T = l("472596"),
  x = l("201756"),
  A = l("66747"),
  p = l("852479"),
  g = l("420212"),
  L = l("608673");
let N = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  H = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  R = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  I = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  j = e => e.shiftKey || e.key === g.KeyboardKeysUpdated.SHIFT,
  v = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  D = s.memo(function(e) {
    let {
      members: t,
      guild: l,
      className: n,
      searchState: i,
      compact: r,
      onSelectRow: m,
      onResetForNewMembers: E
    } = e, _ = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), g = (0, C.useHasAnyModalOpen)(), D = (0, f.useIsWindowFocused)(), [b, O] = s.useState(!1), [B, V] = s.useState(!1), F = !g && b && B;
    s.useEffect(() => {
      !D && (O(!1), V(!1))
    }, [D]), s.useLayoutEffect(() => {
      let e = e => {
          j(e) && O(!0), v(e) && V(!0)
        },
        t = e => {
          j(e) && O(!1), v(e) && V(!1)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
      }
    }, []), s.useEffect(() => {
      (0, h.getMemberSupplemental)(l.id, t)
    }, [l.id, t]);
    let y = t.length > 30,
      U = (0, d.useTransition)(t, {
        key: e => e,
        trail: y ? 5 : 15,
        immediate: _,
        from(e) {
          let t = M.default.getEnhancedMember(l.id, e),
            a = M.default.getLastRefreshTimestamp(l.id),
            s = null != t && t.refreshTimestamp === a;
          return null != t && 0 !== a && s ? y ? H : N : R
        },
        enter: R,
        config: I
      }),
      w = !_ && i === T.SearchState.LOADING;
    return (0, a.jsxs)("table", {
      className: o()(L.table, n),
      children: [(0, a.jsx)(x.default, {
        guildId: l.id,
        currentPagedMembers: t
      }), (0, a.jsx)("tbody", {
        children: i === T.SearchState.SUCCESS_FULL || i === T.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(p.default, {
            guild: l,
            onSubmit: E
          }), U((e, t) => (0, a.jsx)(A.default, {
            userId: t,
            guildId: l.id,
            style: e,
            onSelect: m,
            isHoldingAdvancedInfoKey: F,
            compact: r,
            isLoading: w
          }, t))]
        }) : (0, a.jsx)("td", {
          colSpan: 7,
          children: (0, a.jsx)(S.default, {
            searchState: i
          })
        })
      })]
    })
  }, function(e, t) {
    let l = r()(e.members, t.members),
      a = e.guild.id === t.guild.id,
      s = e.searchState === t.searchState,
      n = e.compact === t.compact;
    return l && a && s && n
  });
t.default = function(e) {
  var t, l;
  let {
    guild: n,
    className: o,
    searchState: i,
    compact: r,
    onSelectRow: d,
    onResetForNewMembers: C
  } = e, c = (0, u.useStateFromStoresObject)([M.default], () => M.default.getPaginationStateByGuildId(n.id), [n.id]), [f] = (0, u.useStateFromStores)([M.default], () => M.default.getPagedMembersByGuildId(n.id), [n.id], E.isVersionEqual);
  s.useEffect(() => {
    (0, h.initializeMemberSafetyStore)(n.id)
  }, [n.id]);
  let S = s.useDeferredValue(null !== (t = f[c.currentPage]) && void 0 !== t ? t : []),
    {
      analyticsLocations: T
    } = (0, m.default)(),
    x = null !== (l = null == T ? void 0 : T[0]) && void 0 !== l ? l : null;
  return s.useEffect(() => {
    (0, _.trackMembersPageViewed)(n.id, x)
  }, [n.id, x]), (0, a.jsx)(D, {
    members: S,
    guild: n,
    className: o,
    searchState: i,
    compact: r,
    onSelectRow: d,
    onResetForNewMembers: C
  })
}