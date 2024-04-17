"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("32966"),
  o = n("314897"),
  u = n("77498"),
  d = n("364083"),
  c = n("92373"),
  f = n("308083"),
  E = n("689938"),
  h = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    gameApplicationIds: n,
    error: _,
    requiredGameId: C
  } = e, m = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: S
  } = (0, r.useUserRecentGames)(m), {
    options: I,
    matchSorterOptions: p
  } = (0, d.useClanSetupGameSelectableSearch)();
  s.useEffect(() => {
    null != C && !n.has(C) && I.length > 0 && g(C)
  }, [I.length, C]);
  let T = e => {
      if (!n.has(e) || e === C) return;
      let a = new Set(n);
      a.delete(e), t({
        gameApplicationIds: a
      })
    },
    g = e => {
      if (n.size === f.MAX_NUM_SELECTED_GAMES || n.has(e) || null == u.default.getGameById(e)) return;
      let a = new Set(n);
      a.add(e), t({
        gameApplicationIds: a
      })
    };
  return (0, a.jsxs)("div", {
    className: h.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: E.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: E.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: h.inputContainer,
      children: (0, a.jsx)(i.SearchableSelect, {
        wrapperClassName: h.input,
        options: I,
        value: "",
        placeholder: E.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: g,
        isDisabled: n.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: p
      })
    }), (0, a.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != _ && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: _
      }), n.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(n).map(e => (0, a.jsx)(c.default, {
            applicationId: e,
            onClick: e !== C ? T : void 0,
            imageContainerClassName: e !== C ? h.removableGame : void 0,
            selected: !0
          }, e))
        })]
      }), null != S && S.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: S.map(e => (0, a.jsx)(c.default, {
            applicationId: e.applicationId,
            onClick: g,
            imageContainerClassName: h.clickable
          }, e.applicationId))
        })]
      })]
    })]
  })
}