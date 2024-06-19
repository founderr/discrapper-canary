var i = n(735250),
  s = n(470079),
  l = n(924826),
  a = n(91192),
  r = n(442837),
  o = n(481060),
  c = n(607070),
  u = n(617015),
  d = n(28813);
t.Z = function(e) {
  let {
    statusSections: t,
    renderRow: n,
    searchQuery: E
  } = e, h = e => 0 === t[e].length ? 0 : u.De + 16, _ = e => {
    let {
      section: i,
      row: s
    } = e, l = t[i];
    if (null == l || null == s) return null;
    let a = l[s];
    return null == a ? null : n(a)
  }, I = (0, r.e7)([c.Z], () => c.Z.keyboardModeEnabled), m = s.useRef(null), g = s.useCallback(() => new Promise(e => {
    let t = m.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), p = s.useCallback(() => new Promise(e => {
    let t = m.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), T = s.useCallback(e => {
    let t = document.querySelector(e),
      n = m.current;
    null != t && null != n && n.scrollIntoViewNode({
      node: t,
      padding: 8,
      callback: () => null == t ? void 0 : t.focus()
    })
  }, []), N = (0, l.ZP)({
    id: "people-list",
    isEnabled: I,
    scrollToStart: g,
    scrollToEnd: p,
    setFocus: T
  });
  return (0, i.jsx)(a.bG, {
    navigator: N,
    children: (0, i.jsx)(a.SJ, {
      children: e => {
        let {
          ref: n,
          ...s
        } = e;
        return (0, i.jsx)(o.ListAuto, {
          ref: e => {
            var t;
            m.current = e, n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
          },
          sectionHeight: h,
          renderRow: _,
          rowHeight: u.NV,
          sections: t.map(e => "" !== E && 0 === e.length ? e.length + 1 : e.length),
          className: d.peopleList,
          ...s
        })
      }
    })
  })
}