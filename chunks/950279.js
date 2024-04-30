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
  h = a("418571");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: _,
    gameApplicationIds: C,
    error: m,
    requiredGameId: S
  } = e, p = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: I
  } = (0, r.useUserRecentGames)(p), {
    options: T,
    matchSorterOptions: g
  } = (0, d.useClanSetupGameSelectableSearch)();
  s.useEffect(() => {
    null != S && !C.has(S) && T.length > 0 && N(S)
  }, [T.length, S]);
  let A = e => {
      if (!C.has(e) || e === S) return;
      let t = new Set(C);
      t.delete(e), _(t)
    },
    N = e => {
      if (C.size === f.MAX_NUM_SELECTED_GAMES || C.has(e) || null == u.default.getGameById(e)) return;
      let t = new Set(C);
      t.add(e), _(t)
    };
  return (0, n.jsxs)("div", {
    className: h.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: a
    }), (0, n.jsx)("div", {
      className: h.inputContainer,
      children: (0, n.jsx)(i.SearchableSelect, {
        wrapperClassName: h.input,
        options: T,
        value: "",
        placeholder: E.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: N,
        isDisabled: C.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: g
      })
    }), (0, n.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != m && (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: m
      }), C.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(C).map(e => (0, n.jsx)(c.default, {
            applicationId: e,
            onClick: e !== S ? A : void 0,
            imageContainerClassName: e !== S ? h.clickableGame : void 0,
            selected: !0
          }, e))
        }), (0, n.jsx)("div", {
          className: h.divider
        })]
      }), null != I && I.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: I.map(e => (0, n.jsx)(c.default, {
            applicationId: e.applicationId,
            onClick: N,
            imageContainerClassName: h.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}