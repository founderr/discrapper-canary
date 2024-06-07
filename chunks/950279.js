"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("481060"),
  o = a("364083"),
  d = a("92373"),
  c = a("308083"),
  u = a("689938"),
  f = a("706351"),
  m = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: i,
    gameApplicationIds: E,
    error: h,
    requiredGameId: T,
    inSettings: _
  } = e, {
    options: C,
    matchSorterOptions: x
  } = (0, o.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    if (!_ && null != T && !E.has(T) && C.length > 0) {
      let e = new Set(E);
      e.add(T), i(e)
    }
  }, [C.length, T, _]);
  let p = r.useMemo(() => Array.from(E), [E]),
    I = r.useCallback(e => {
      let t = new Set(e);
      (null == T || t.has(T)) && i(t)
    }, [i, T]);
  return (0, n.jsxs)("div", {
    className: s()(m.slideContent, f.container),
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: m.title,
      children: t
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: m.subtitle,
      children: a
    }), (0, n.jsx)("div", {
      className: f.inputContainer,
      children: (0, n.jsx)(l.FormItem, {
        error: h,
        children: (0, n.jsx)(l.SearchableSelect, {
          multi: !0,
          hidePills: !0,
          wrapperClassName: s()(m.input, f.input),
          options: C,
          value: p,
          placeholder: u.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
          onChange: I,
          isDisabled: E.size === c.MAX_NUM_SELECTED_GAMES,
          matchSorterOptions: x,
          clearQueryOnSelect: !0,
          customPillContainerClassName: f.pills,
          renderCustomPill: e => (0, n.jsx)(d.default, {
            applicationId: e.value,
            imageContainerClassName: e.value !== T ? f.clickableGame : f.defaultGame,
            selected: !0,
            locked: e.value === T
          }, e.value)
        })
      })
    })]
  })
}