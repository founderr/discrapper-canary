n.d(t, {
  Z: function() {
return C;
  }
}), n(47120), n(411104);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(260034),
  o = n(481060),
  c = n(410030),
  d = n(117496),
  u = n(225784),
  _ = n(626135),
  E = n(900849),
  h = n(143021),
  m = n(393596),
  I = n(692420),
  g = n(689938),
  p = n(856059);
let T = 52,
  S = {
top: 0,
bottom: 0,
left: 32,
right: 202
  },
  f = r().throttle(E.c6, 1000, {
leading: !1,
trailing: !0
  });

function C(e) {
  let {
loadId: t,
onGuildCardSeen: n,
onGuildCardClick: r
  } = e, E = (0, c.ZP)(), {
guilds: C,
loading: N,
searchResultsQuery: A,
loadMore: v,
searchCategoryId: Z
  } = (0, h.f)({
loadId: t
  }), L = a.useContext(_.AnalyticsContext), [O, R] = a.useState((0, d.P)());
  a.useEffect(() => {
R((0, d.P)());
  }, [A]);
  let x = a.useCallback(e => {
  f({
    loadId: t,
    searchId: O,
    query: A,
    guildResults: C,
    analyticsContext: L,
    categoryId: Z,
    isTagSearch: !1
  }), n(e, Z);
}, [
  L,
  C,
  t,
  n,
  Z,
  O,
  A
]),
b = a.useMemo(() => N ? [
  C.length,
  0
] : [C.length], [
  C.length,
  N
]),
P = a.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsx)(l.X, {
        variant: 'heading-xl/semibold',
        className: p.heading,
        children: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
          query: A
        })
      });
    case 1:
      return (0, i.jsx)(o.Spinner, {
        className: p.spinner
      });
  }
}, [A]),
M = a.useCallback(e => {
  switch (e) {
    case 0:
      return T;
    case 1:
      return 120;
    default:
      throw Error('[getSectionHeight] Failed for section: '.concat(e));
  }
}, []),
D = a.useCallback((e, t) => {
  switch (e) {
    case 0:
      return C[t].id;
    case 1:
      return 'loading';
    default:
      throw Error('[getItemKey] Failed for section: '.concat(e));
  }
}, [C]),
y = a.useCallback(e => {
  switch (e) {
    case 0:
      return 320;
    case 1:
      return 0;
    default:
      throw Error('[getItemHeight] Failed for section: '.concat(e));
  }
}, []),
j = a.useCallback((e, t, n, a) => {
  if (0 === e) {
    let e = C[t];
    return (0, i.jsx)('div', {
      style: n,
      children: (0, i.jsx)(u.Z, {
        guild: e,
        onView: e => r(e, t, Z),
        onGuildCardSeen: x,
        theme: E
      }, e.id)
    }, a);
  }
  return null;
}, [
  C,
  x,
  r,
  Z,
  E
]),
U = a.useRef(null),
G = a.useMemo(() => (0, s.debounce)(() => {
  var e;
  let t = null === (e = U.current) || void 0 === e ? void 0 : e.getScrollerState();
  if (null == t)
    return;
  let n = t.scrollTop + t.offsetHeight;
  t.scrollHeight - n < 200 && v();
}, 250), [v]);
  return (0, i.jsx)('div', {
className: p.container,
children: (0, i.jsx)(o.MasonryList, {
  ref: U,
  className: p.masonryList,
  sections: b,
  columns: 3,
  itemGutter: 16,
  padding: S,
  renderItem: j,
  renderSection: P,
  getSectionHeight: M,
  getItemKey: D,
  getItemHeight: y,
  chunkSize: 24,
  onScroll: G,
  renderAccessory: e => (0, i.jsx)('div', {
    className: p.sidebar,
    style: {
      height: e
    },
    children: (0, i.jsxs)('div', {
      className: p.sidebarContent,
      children: [
        (0, i.jsx)('div', {
          className: p.sidebarLanguageSelect,
          children: (0, i.jsx)(I.Z, {
            loadId: t
          })
        }),
        (0, i.jsx)(m.Z, {
          loadId: t
        })
      ]
    })
  })
})
  });
}