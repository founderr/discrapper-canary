t(47120);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(348327),
  r = t.n(i),
  C = t(920906),
  c = t(399606),
  d = t(952265),
  u = t(607070),
  E = t(906732),
  m = t(136015),
  _ = t(506071),
  M = t(910693),
  h = t(893966),
  x = t(527379),
  T = t(827657),
  L = t(472596),
  H = t(201756),
  g = t(66747),
  A = t(852479),
  I = t(420212),
  N = t(65010);
let R = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  p = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  S = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  Z = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  j = e => e.shiftKey || e.key === I.vn.SHIFT,
  v = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  f = s.memo(function(e) {
    let {
      members: l,
      guild: t,
      className: a,
      searchState: i,
      compact: r,
      onSelectRow: E,
      onResetForNewMembers: m
    } = e, M = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), I = (0, d.f9)(), f = (0, _.n)(), [D, b] = s.useState(!1), [O, V] = s.useState(!1), B = !I && D && O;
    s.useEffect(() => {
      !f && (b(!1), V(!1))
    }, [f]), s.useLayoutEffect(() => {
      let e = e => {
          j(e) && b(!0), v(e) && V(!0)
        },
        l = e => {
          j(e) && b(!1), v(e) && V(!1)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", l), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", l)
      }
    }, []), s.useEffect(() => {
      (0, x.nb)(t.id, l)
    }, [t.id, l]);
    let U = l.length > 30,
      F = (0, C.useTransition)(l, {
        key: e => e,
        trail: U ? 5 : 15,
        immediate: M,
        from(e) {
          let l = h.Z.getEnhancedMember(t.id, e),
            n = h.Z.getLastRefreshTimestamp(t.id),
            s = null == l || 0 === n,
            a = null != l && l.refreshTimestamp === n;
          return s || !a ? S : U ? p : R
        },
        enter: S,
        config: Z
      }),
      k = !M && i === L.po.LOADING;
    return (0, n.jsxs)("table", {
      className: o()(N.table, a),
      children: [(0, n.jsx)(H.Z, {
        guildId: t.id,
        currentPagedMembers: l
      }), (0, n.jsx)("tbody", {
        children: i === L.po.SUCCESS_FULL || i === L.po.LOADING ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(A.Z, {
            guild: t,
            onSubmit: m
          }), F((e, l) => (0, n.jsx)(g.Z, {
            userId: l,
            guildId: t.id,
            style: e,
            onSelect: E,
            isHoldingAdvancedInfoKey: B,
            compact: r,
            isLoading: k
          }, l))]
        }) : (0, n.jsx)("td", {
          colSpan: 7,
          children: (0, n.jsx)(T.Z, {
            searchState: i
          })
        })
      })]
    })
  }, function(e, l) {
    let t = r()(e.members, l.members),
      n = e.guild.id === l.guild.id,
      s = e.searchState === l.searchState,
      a = e.compact === l.compact;
    return t && n && s && a
  });
l.Z = function(e) {
  var l, t;
  let {
    guild: a,
    className: o,
    searchState: i,
    compact: r,
    onSelectRow: C,
    onResetForNewMembers: d
  } = e, u = (0, c.cj)([h.Z], () => h.Z.getPaginationStateByGuildId(a.id), [a.id]), [_] = (0, c.e7)([h.Z], () => h.Z.getPagedMembersByGuildId(a.id), [a.id], m.Q);
  s.useEffect(() => {
    (0, x.zO)(a.id)
  }, [a.id]);
  let T = s.useDeferredValue(null !== (l = _[u.currentPage]) && void 0 !== l ? l : []),
    {
      analyticsLocations: L
    } = (0, E.ZP)(),
    H = null !== (t = null == L ? void 0 : L[0]) && void 0 !== t ? t : null;
  return s.useEffect(() => {
    (0, M.h1)(a.id, H)
  }, [a.id, H]), (0, n.jsx)(f, {
    members: T,
    guild: a,
    className: o,
    searchState: i,
    compact: r,
    onSelectRow: C,
    onResetForNewMembers: d
  })
}