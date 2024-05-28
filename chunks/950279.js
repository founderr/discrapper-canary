"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("442837"),
  s = a("481060"),
  l = a("32966"),
  o = a("314897"),
  d = a("77498"),
  c = a("364083"),
  u = a("92373"),
  f = a("308083"),
  m = a("689938"),
  E = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: h,
    gameApplicationIds: T,
    error: _,
    requiredGameId: C,
    inSettings: x
  } = e, p = (0, i.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: I
  } = (0, l.useUserRecentGames)(p), {
    options: g,
    matchSorterOptions: N
  } = (0, c.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    !x && null != C && !T.has(C) && g.length > 0 && v(C)
  }, [g.length, C, x]);
  let A = e => {
      if (!T.has(e) || e === C) return;
      let t = new Set(T);
      t.delete(e), h(t)
    },
    v = e => {
      if (T.size === f.MAX_NUM_SELECTED_GAMES || T.has(e) || null == d.default.getGameById(e)) return;
      let t = new Set(T);
      t.add(e), h(t)
    };
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: t
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: a
    }), (0, n.jsx)("div", {
      className: E.inputContainer,
      children: (0, n.jsx)(s.SearchableSelect, {
        wrapperClassName: E.input,
        options: g,
        value: "",
        placeholder: m.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: v,
        isDisabled: T.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: N,
        clearQueryOnSelect: !0
      })
    }), (0, n.jsxs)("div", {
      className: E.contentWithMinHeight,
      children: [null != _ && (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: E.errorText,
        children: _
      }), T.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.contentLabel,
          children: m.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: E.selectedSection,
          children: Array.from(T).map(e => (0, n.jsx)(u.default, {
            applicationId: e,
            onClick: e !== C ? A : void 0,
            imageContainerClassName: e !== C ? E.clickableGame : E.defaultGame,
            selected: !0,
            locked: e === C
          }, e))
        })]
      }), null != I && I.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: E.divider
        }), (0, n.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.contentLabel,
          children: m.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: E.selectedSection,
          children: I.map(e => (0, n.jsx)(u.default, {
            applicationId: e.applicationId,
            onClick: v,
            imageContainerClassName: E.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}