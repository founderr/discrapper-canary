"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("442837"),
  i = n("481060"),
  l = n("32966"),
  o = n("314897"),
  c = n("77498"),
  d = n("364083"),
  u = n("92373"),
  f = n("308083"),
  m = n("689938"),
  h = n("418571");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: p,
    gameApplicationIds: E,
    error: T,
    requiredGameId: C
  } = e, _ = (0, s.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: g
  } = (0, l.useUserRecentGames)(_), {
    options: x,
    matchSorterOptions: I
  } = (0, d.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    null != C && !E.has(C) && x.length > 0 && v(C)
  }, [x.length, C]);
  let N = e => {
      if (!E.has(e) || e === C) return;
      let t = new Set(E);
      t.delete(e), p(t)
    },
    v = e => {
      if (E.size === f.MAX_NUM_SELECTED_GAMES || E.has(e) || null == c.default.getGameById(e)) return;
      let t = new Set(E);
      t.add(e), p(t)
    };
  return (0, a.jsxs)("div", {
    className: h.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: n
    }), (0, a.jsx)("div", {
      className: h.inputContainer,
      children: (0, a.jsx)(i.SearchableSelect, {
        wrapperClassName: h.input,
        options: x,
        value: "",
        placeholder: m.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: v,
        isDisabled: E.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: I
      })
    }), (0, a.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != T && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: T
      }), E.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: m.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(E).map(e => (0, a.jsx)(u.default, {
            applicationId: e,
            onClick: e !== C ? N : void 0,
            imageContainerClassName: e !== C ? h.clickableGame : h.defaultGame,
            selected: !0
          }, e))
        }), (0, a.jsx)("div", {
          className: h.divider
        })]
      }), null != g && g.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: m.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: g.map(e => (0, a.jsx)(u.default, {
            applicationId: e.applicationId,
            onClick: v,
            imageContainerClassName: h.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}