"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("442837"),
  s = a("481060"),
  l = a("32966"),
  o = a("314897"),
  c = a("77498"),
  d = a("364083"),
  u = a("92373"),
  f = a("308083"),
  m = a("689938"),
  h = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: E,
    gameApplicationIds: T,
    error: p,
    requiredGameId: C
  } = e, _ = (0, i.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: x
  } = (0, l.useUserRecentGames)(_), {
    options: g,
    matchSorterOptions: I
  } = (0, d.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    null != C && !T.has(C) && g.length > 0 && N(C)
  }, [g.length, C]);
  let v = e => {
      if (!T.has(e) || e === C) return;
      let t = new Set(T);
      t.delete(e), E(t)
    },
    N = e => {
      if (T.size === f.MAX_NUM_SELECTED_GAMES || T.has(e) || null == c.default.getGameById(e)) return;
      let t = new Set(T);
      t.add(e), E(t)
    };
  return (0, n.jsxs)("div", {
    className: h.slideContent,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: a
    }), (0, n.jsx)("div", {
      className: h.inputContainer,
      children: (0, n.jsx)(s.SearchableSelect, {
        wrapperClassName: h.input,
        options: g,
        value: "",
        placeholder: m.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: N,
        isDisabled: T.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: I,
        clearQueryOnSelect: !0
      })
    }), (0, n.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != p && (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: p
      }), T.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: m.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(T).map(e => (0, n.jsx)(u.default, {
            applicationId: e,
            onClick: e !== C ? v : void 0,
            imageContainerClassName: e !== C ? h.clickableGame : h.defaultGame,
            selected: !0,
            locked: e === C
          }, e))
        }), (0, n.jsx)("div", {
          className: h.divider
        })]
      }), null != x && x.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: m.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: x.map(e => (0, n.jsx)(u.default, {
            applicationId: e.applicationId,
            onClick: N,
            imageContainerClassName: h.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}