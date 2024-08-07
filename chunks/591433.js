n.d(t, {
  Z: function() {
return f;
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
  I = n(689938),
  g = n(856059);
let p = 52,
  T = {
top: 0,
bottom: 0,
left: 32,
right: 202
  },
  S = r().throttle(E.c6, 1000, {
leading: !1,
trailing: !0
  });

function f(e) {
  let {
loadId: t,
onGuildCardSeen: n,
onGuildCardClick: r
  } = e, E = (0, c.ZP)(), {
guilds: f,
loading: C,
searchResultsQuery: N,
loadMore: A,
searchCategoryId: v
  } = (0, h.f$)({
loadId: t
  }), Z = a.useContext(_.AnalyticsContext), [L, O] = a.useState((0, d.P)());
  a.useEffect(() => {
O((0, d.P)());
  }, [N]);
  let R = a.useCallback(e => {
  S({
    loadId: t,
    searchId: L,
    query: N,
    guildResults: f,
    analyticsContext: Z,
    categoryId: v,
    isTagSearch: !1
  }), n(e, v);
}, [
  Z,
  f,
  t,
  n,
  v,
  L,
  N
]),
x = a.useMemo(() => C ? [
  f.length,
  0
] : [f.length], [
  f.length,
  C
]),
b = a.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsx)(l.X, {
        variant: 'heading-xl/semibold',
        className: g.heading,
        children: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
          query: N
        })
      });
    case 1:
      return (0, i.jsx)(o.Spinner, {
        className: g.spinner
      });
  }
}, [N]),
P = a.useCallback(e => {
  switch (e) {
    case 0:
      return p;
    case 1:
      return 120;
    default:
      throw Error('[getSectionHeight] Failed for section: '.concat(e));
  }
}, []),
M = a.useCallback((e, t) => {
  switch (e) {
    case 0:
      return f[t].id;
    case 1:
      return 'loading';
    default:
      throw Error('[getItemKey] Failed for section: '.concat(e));
  }
}, [f]),
D = a.useCallback(e => {
  switch (e) {
    case 0:
      return 320;
    case 1:
      return 0;
    default:
      throw Error('[getItemHeight] Failed for section: '.concat(e));
  }
}, []),
y = a.useCallback((e, t, n, a) => {
  if (0 === e) {
    let e = f[t];
    return (0, i.jsx)('div', {
      style: n,
      children: (0, i.jsx)(u.Z, {
        guild: e,
        onView: e => r(e, t, v),
        onGuildCardSeen: R,
        theme: E
      }, e.id)
    }, a);
  }
  return null;
}, [
  f,
  R,
  r,
  v,
  E
]),
j = a.useRef(null),
U = a.useMemo(() => (0, s.debounce)(() => {
  var e;
  let t = null === (e = j.current) || void 0 === e ? void 0 : e.getScrollerState();
  if (null == t)
    return;
  let n = t.scrollTop + t.offsetHeight;
  t.scrollHeight - n < 200 && A();
}, 250), [A]);
  return (0, i.jsx)('div', {
className: g.container,
children: (0, i.jsx)(o.MasonryList, {
  ref: j,
  className: g.masonryList,
  sections: x,
  columns: 3,
  itemGutter: 16,
  padding: T,
  renderItem: y,
  renderSection: b,
  getSectionHeight: P,
  getItemKey: M,
  getItemHeight: D,
  chunkSize: 24,
  onScroll: U,
  renderAccessory: e => (0, i.jsx)('div', {
    className: g.sidebar,
    style: {
      height: e
    },
    children: (0, i.jsx)('div', {
      className: g.sidebarContent,
      children: (0, i.jsx)(m.Z, {
        loadId: t
      })
    })
  })
})
  });
}