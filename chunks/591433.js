n.d(t, {
  Z: function() {
return L;
  }
}), n(47120), n(411104);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(260034),
  o = n(481060),
  c = n(393903),
  d = n(410030),
  u = n(117496),
  _ = n(225784),
  h = n(626135),
  E = n(900849),
  m = n(143021),
  I = n(393596),
  g = n(35448),
  p = n(458203),
  T = n(692420),
  S = n(689938),
  f = n(856059);
let C = 52,
  N = 84,
  A = Object.freeze({
top: 0,
bottom: 0,
left: 32,
right: 202
  }),
  v = Object.freeze({
top: 0,
bottom: 0,
left: 32,
right: 32
  }),
  Z = r().throttle(E.c6, 1000, {
leading: !1,
trailing: !0
  });

function L(e) {
  let {
loadId: t,
onGuildCardSeen: n,
onGuildCardClick: r
  } = e, E = (0, d.ZP)(), {
guilds: L,
loading: O,
searchResultsQuery: R,
loadMore: x,
searchCategoryId: b
  } = (0, m.f)({
loadId: t
  }), P = a.useContext(h.AnalyticsContext), [M, D] = a.useState((0, u.P)()), [y, j] = a.useState(!0), U = a.useRef(y), [G, k] = a.useState(3), w = a.useRef(G), B = (0, c.y)(e => {
let t = null == e ? void 0 : e.getBoundingClientRect();
if (null == t)
  return;
let n = t.width;
n < 1024 && U.current ? (U.current = !1, j(!1)) : n > 1024 && !U.current && (U.current = !0, j(!0));
let i = 1;
for (n -= y ? 420 : 0, n -= 250; n > 0;)
  n -= 234, i += 1;
i !== w.current && (w.current = i, k(i));
  });
  a.useEffect(() => {
D((0, u.P)());
  }, [R]);
  let H = a.useCallback(e => {
  Z({
    loadId: t,
    searchId: M,
    query: R,
    guildResults: L,
    analyticsContext: P,
    categoryId: b,
    isTagSearch: !1
  }), n(e, b);
}, [
  P,
  L,
  t,
  n,
  b,
  M,
  R
]),
V = a.useMemo(() => O ? [
  L.length,
  0
] : [L.length], [
  L.length,
  O
]),
F = 0 === L.length,
Y = a.useCallback((e, n, a) => {
  switch (e) {
    case 0:
      var s;
      return (0, i.jsxs)('div', {
        style: {
          paddingLeft: n.left,
          width: n.width - (null !== (s = n.left) && void 0 !== s ? s : 0)
        },
        children: [
          (0, i.jsx)(l.X, {
            variant: 'heading-lg/semibold',
            className: f.heading,
            children: S.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
              query: R
            })
          }),
          !y && (0, i.jsxs)('div', {
            className: f.headingFilters,
            children: [
              (0, i.jsx)(g.Z, {
                loadId: t
              }),
              (0, i.jsx)(T.Z, {
                loadId: t
              })
            ]
          }),
          F && (0, i.jsx)(p.Z, {
            loadId: t
          })
        ]
      }, a);
    case 1:
      return (0, i.jsx)(o.Spinner, {
        className: f.spinner
      }, a);
  }
}, [
  F,
  y,
  t,
  R
]),
W = a.useCallback(e => {
  switch (e) {
    case 0:
      let t = y ? C : N;
      return F ? t + 400 : t;
    case 1:
      return 120;
    default:
      throw Error('[getSectionHeight] Failed for section: '.concat(e));
  }
}, [
  F,
  y
]),
z = a.useCallback((e, t) => {
  switch (e) {
    case 0:
      return L[t].id;
    case 1:
      return 'loading';
    default:
      throw Error('[getItemKey] Failed for section: '.concat(e));
  }
}, [L]),
K = a.useCallback(e => {
  switch (e) {
    case 0:
      return 320;
    case 1:
      return 0;
    default:
      throw Error('[getItemHeight] Failed for section: '.concat(e));
  }
}, []),
q = a.useCallback((e, t, n, a) => {
  if (0 === e) {
    let e = L[t];
    return (0, i.jsx)('div', {
      style: n,
      children: (0, i.jsx)(_.Z, {
        guild: e,
        onView: e => r(e, t, b),
        onGuildCardSeen: H,
        theme: E
      }, e.id)
    }, a);
  }
  return null;
}, [
  L,
  H,
  r,
  b,
  E
]),
Q = a.useRef(null),
X = a.useMemo(() => (0, s.debounce)(() => {
  var e;
  let t = null === (e = Q.current) || void 0 === e ? void 0 : e.getScrollerState();
  if (null == t)
    return;
  let n = t.scrollTop + t.offsetHeight;
  t.scrollHeight - n < 200 && x();
}, 250), [x]),
J = y ? A : v;
  return (0, i.jsx)('div', {
className: f.container,
ref: B,
children: (0, i.jsx)(o.MasonryList, {
  ref: Q,
  className: f.masonryList,
  sections: V,
  columns: G,
  itemGutter: 16,
  padding: J,
  renderItem: q,
  renderSection: Y,
  getSectionHeight: W,
  getItemKey: z,
  getItemHeight: K,
  chunkSize: 24,
  onScroll: X,
  renderAccessory: e => y ? (0, i.jsx)('div', {
    className: f.sidebar,
    style: {
      height: e
    },
    children: (0, i.jsxs)('div', {
      className: f.sidebarContent,
      children: [
        (0, i.jsx)('div', {
          className: f.sidebarLanguageSelect,
          children: (0, i.jsx)(T.Z, {
            loadId: t
          })
        }),
        (0, i.jsx)(I.Z, {
          loadId: t
        })
      ]
    })
  }) : null
})
  });
}