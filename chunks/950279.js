"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("364083"),
  c = n("92373"),
  d = n("308083"),
  u = n("689938"),
  f = n("706351"),
  m = n("661926");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: s,
    gameApplicationIds: h,
    error: E,
    requiredGameId: p,
    inSettings: C
  } = e, {
    options: T,
    matchSorterOptions: _
  } = (0, o.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    if (!C && null != p && !h.has(p) && T.length > 0) {
      let e = new Set(h);
      e.add(p), s(e)
    }
  }, [T.length, p, C]);
  let x = r.useMemo(() => Array.from(h), [h]),
    g = r.useCallback(e => {
      let t = new Set(e);
      (null == p || t.has(p)) && s(t)
    }, [s, p]);
  return (0, a.jsxs)("div", {
    className: i()(m.slideContent, f.container),
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: m.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: m.subtitle,
      children: n
    }), (0, a.jsx)("div", {
      className: f.inputContainer,
      children: (0, a.jsx)(l.FormItem, {
        error: E,
        children: (0, a.jsx)(l.SearchableSelect, {
          multi: !0,
          hidePills: !0,
          wrapperClassName: i()(m.input, f.input),
          options: T,
          value: x,
          placeholder: u.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
          onChange: g,
          isDisabled: h.size === d.MAX_NUM_SELECTED_GAMES,
          matchSorterOptions: _,
          clearQueryOnSelect: !0,
          customPillContainerClassName: f.pills,
          renderCustomPill: e => (0, a.jsx)(c.default, {
            applicationId: e.value,
            imageContainerClassName: e.value !== p ? f.clickableGame : f.defaultGame,
            selected: !0,
            locked: e.value === p
          }, e.value)
        })
      })
    })]
  })
}