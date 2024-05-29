"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("442837"),
  o = a("481060"),
  c = a("32966"),
  d = a("314897"),
  u = a("77498"),
  f = a("364083"),
  m = a("92373"),
  h = a("308083"),
  E = a("689938"),
  p = a("706351"),
  C = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: s,
    gameApplicationIds: T,
    error: _,
    requiredGameId: x,
    inSettings: g
  } = e, N = (0, l.useStateFromStores)([d.default], () => d.default.getId()), {
    recentGames: I
  } = (0, c.useUserRecentGames)(N), {
    options: v,
    matchSorterOptions: A
  } = (0, f.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    !g && null != x && !T.has(x) && v.length > 0 && L(x)
  }, [v.length, x, g]);
  let S = e => {
      if (!T.has(e) || e === x) return;
      let t = new Set(T);
      t.delete(e), s(t)
    },
    L = e => {
      if (T.size === h.MAX_NUM_SELECTED_GAMES || T.has(e) || null == u.default.getGameById(e)) return;
      let t = new Set(T);
      t.add(e), s(t)
    };
  return (0, n.jsxs)("div", {
    className: i()(C.slideContent, p.container),
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xxl/medium",
      className: C.title,
      children: t
    }), (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: C.subtitle,
      children: a
    }), (0, n.jsx)("div", {
      className: C.inputContainer,
      children: (0, n.jsx)(o.SearchableSelect, {
        wrapperClassName: C.input,
        options: v,
        value: "",
        placeholder: E.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: L,
        isDisabled: T.size === h.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: A,
        clearQueryOnSelect: !0
      })
    }), (0, n.jsxs)("div", {
      className: p.errorWrapper,
      children: [null != _ && (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: C.errorText,
        children: _
      }), T.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: C.contentLabel,
          children: E.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: p.selectedSection,
          children: Array.from(T).map(e => (0, n.jsx)(m.default, {
            applicationId: e,
            onClick: e !== x ? S : void 0,
            imageContainerClassName: e !== x ? p.clickableGame : p.defaultGame,
            selected: !0,
            locked: e === x
          }, e))
        })]
      }), null != I && I.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: p.recentGamesDivider
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: C.contentLabel,
          children: E.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: p.selectedSection,
          children: I.map(e => (0, n.jsx)(m.default, {
            applicationId: e.applicationId,
            onClick: L,
            imageContainerClassName: p.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}