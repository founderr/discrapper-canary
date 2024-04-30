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
  h = n("418571");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: _,
    gameApplicationIds: C,
    error: m,
    requiredGameId: S
  } = e, p = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: I
  } = (0, r.useUserRecentGames)(p), {
    options: g,
    matchSorterOptions: T
  } = (0, d.useClanSetupGameSelectableSearch)();
  s.useEffect(() => {
    null != S && !C.has(S) && g.length > 0 && N(S)
  }, [g.length, S]);
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
        options: g,
        value: "",
        placeholder: E.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: N,
        isDisabled: C.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: T
      })
    }), (0, a.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != m && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: m
      }), C.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(C).map(e => (0, a.jsx)(c.default, {
            applicationId: e,
            onClick: e !== S ? A : void 0,
            imageContainerClassName: e !== S ? h.clickableGame : void 0,
            selected: !0
          }, e))
        }), (0, a.jsx)("div", {
          className: h.divider
        })]
      }), null != I && I.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: I.map(e => (0, a.jsx)(c.default, {
            applicationId: e.applicationId,
            onClick: N,
            imageContainerClassName: h.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}