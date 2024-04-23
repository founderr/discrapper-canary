"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("32966"),
  o = a("314897"),
  u = a("77498"),
  d = a("364083"),
  c = a("92373"),
  f = a("308083"),
  E = a("689938"),
  h = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    gameApplicationIds: a,
    error: _,
    requiredGameId: C
  } = e, m = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: S
  } = (0, r.useUserRecentGames)(m), {
    options: I,
    matchSorterOptions: p
  } = (0, d.useClanSetupGameSelectableSearch)();
  s.useEffect(() => {
    null != C && !a.has(C) && I.length > 0 && g(C)
  }, [I.length, C]);
  let T = e => {
      if (!a.has(e) || e === C) return;
      let n = new Set(a);
      n.delete(e), t({
        gameApplicationIds: n
      })
    },
    g = e => {
      if (a.size === f.MAX_NUM_SELECTED_GAMES || a.has(e) || null == u.default.getGameById(e)) return;
      let n = new Set(a);
      n.add(e), t({
        gameApplicationIds: n
      })
    };
  return (0, n.jsxs)("div", {
    className: h.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: E.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: E.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, n.jsx)("div", {
      className: h.inputContainer,
      children: (0, n.jsx)(i.SearchableSelect, {
        wrapperClassName: h.input,
        options: I,
        value: "",
        placeholder: E.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: g,
        isDisabled: a.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: p
      })
    }), (0, n.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != _ && (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: _
      }), a.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(a).map(e => (0, n.jsx)(c.default, {
            applicationId: e,
            onClick: e !== C ? T : void 0,
            imageContainerClassName: e !== C ? h.clickableGame : void 0,
            selected: !0
          }, e))
        }), (0, n.jsx)("div", {
          className: h.divider
        })]
      }), null != S && S.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: S.map(e => (0, n.jsx)(c.default, {
            applicationId: e.applicationId,
            onClick: g,
            imageContainerClassName: h.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}