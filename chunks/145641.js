"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("924826"),
  l = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("617015"),
  d = n("739426");
t.default = function(e) {
  let {
    statusSections: t,
    renderRow: n,
    searchQuery: c
  } = e, f = e => 0 === t[e].length ? 0 : u.STATUS_HEADER_HEIGHT + 16, E = e => {
    let {
      section: a,
      row: s
    } = e, i = t[a];
    if (null == i || null == s) return null;
    let l = i[s];
    return null == l ? null : n(l)
  }, h = (0, l.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), _ = s.useRef(null), C = s.useCallback(() => new Promise(e => {
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
      n = _.current;
    null != t && null != n && n.scrollIntoViewNode({
      node: t,
      padding: 8,
      callback: () => null == t ? void 0 : t.focus()
    })
  }, []), p = (0, i.default)({
    id: "people-list",
    isEnabled: h,
    scrollToStart: C,
    scrollToEnd: m,
    setFocus: S
  });
  return (0, a.jsx)(i.ListNavigatorProvider, {
    navigator: p,
    children: (0, a.jsx)(i.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          ...s
        } = e;
        return (0, a.jsx)(r.ListAuto, {
          ref: e => {
            var t;
            _.current = e, n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
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