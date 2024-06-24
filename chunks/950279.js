t(47120);
var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(481060),
  o = t(364083),
  c = t(92373),
  d = t(308083),
  u = t(689938),
  m = t(93338),
  h = t(360884);
n.Z = e => {
  let {
    title: n,
    description: t,
    handleUpdate: s,
    gameApplicationIds: C,
    error: x,
    requiredGameId: f,
    inSettings: E
  } = e, {
    options: T,
    matchSorterOptions: _
  } = (0, o.P)();
  r.useEffect(() => {
    if (!E && null != f && !C.has(f) && T.length > 0) {
      let e = new Set(C);
      e.add(f), s(e)
    }
  }, [T.length, f, E]);
  let I = r.useMemo(() => Array.from(C), [C]),
    g = r.useCallback(e => {
      let n = new Set(e);
      (null == f || n.has(f)) && s(n)
    }, [s, f]);
  return (0, a.jsxs)("div", {
    className: i()(h.slideContent, m.container),
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: n
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: t
    }), (0, a.jsx)("div", {
      className: m.inputContainer,
      children: (0, a.jsx)(l.FormItem, {
        error: x,
        children: (0, a.jsx)(l.SearchableSelect, {
          multi: !0,
          hidePills: !0,
          wrapperClassName: i()(h.input, m.input),
          options: T,
          value: I,
          placeholder: u.Z.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
          onChange: g,
          isDisabled: C.size === d.cm,
          matchSorterOptions: _,
          clearQueryOnSelect: !0,
          customPillContainerClassName: m.pills,
          renderCustomPill: e => (0, a.jsx)(c.Z, {
            applicationId: e.value,
            imageContainerClassName: e.value !== f ? m.clickableGame : m.defaultGame,
            selected: !0,
            locked: e.value === f
          }, e.value)
        })
      })
    })]
  })
}