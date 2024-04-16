"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("924826"),
  i = a("442837"),
  r = a("481060"),
  o = a("607070"),
  u = a("617015"),
  d = a("488324");
t.default = function(e) {
  let {
    statusSections: t,
    renderRow: a,
    searchQuery: c
  } = e, f = e => 0 === t[e].length ? 0 : u.STATUS_HEADER_HEIGHT + 16, E = e => {
    let {
      section: n,
      row: s
    } = e, l = t[n];
    if (null == l || null == s) return null;
    let i = l[s];
    return null == i ? null : a(i)
  }, h = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), _ = s.useRef(null), C = s.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), m = s.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), S = s.useCallback(e => {
    let t = document.querySelector(e),
      a = _.current;
    null != t && null != a && a.scrollIntoViewNode({
      node: t,
      padding: 8,
      callback: () => null == t ? void 0 : t.focus()
    })
  }, []), p = (0, l.default)({
    id: "people-list",
    isEnabled: h,
    scrollToStart: C,
    scrollToEnd: m,
    setFocus: S
  });
  return (0, n.jsx)(l.ListNavigatorProvider, {
    navigator: p,
    children: (0, n.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: a,
          ...s
        } = e;
        return (0, n.jsx)(r.ListAuto, {
          ref: e => {
            var t;
            _.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
          },
          sectionHeight: f,
          renderRow: E,
          rowHeight: u.PEOPLE_LIST_ITEM_HEIGHT,
          sections: t.map(e => "" !== c && 0 === e.length ? e.length + 1 : e.length),
          className: d.peopleList,
          ...s
        })
      }
    })
  })
}