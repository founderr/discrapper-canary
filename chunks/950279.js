"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  E = s("481060"),
  l = s("32966"),
  _ = s("314897"),
  r = s("77498"),
  u = s("364083"),
  o = s("92373"),
  T = s("308083"),
  d = s("689938"),
  A = s("418571");
t.default = e => {
  let {
    title: t,
    description: s,
    handleUpdate: I,
    gameApplicationIds: L,
    error: c,
    requiredGameId: N
  } = e, S = (0, i.useStateFromStores)([_.default], () => _.default.getId()), {
    recentGames: g
  } = (0, l.useUserRecentGames)(S), {
    options: D,
    matchSorterOptions: C
  } = (0, u.useClanSetupGameSelectableSearch)();
  n.useEffect(() => {
    null != N && !L.has(N) && D.length > 0 && O(N)
  }, [D.length, N]);
  let f = e => {
      if (!L.has(e) || e === N) return;
      let t = new Set(L);
      t.delete(e), I(t)
    },
    O = e => {
      if (L.size === T.MAX_NUM_SELECTED_GAMES || L.has(e) || null == r.default.getGameById(e)) return;
      let t = new Set(L);
      t.add(e), I(t)
    };
  return (0, a.jsxs)("div", {
    className: A.slideContent,
    children: [(0, a.jsx)(E.Heading, {
      variant: "heading-xxl/medium",
      className: A.title,
      children: t
    }), (0, a.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: A.subtitle,
      children: s
    }), (0, a.jsx)("div", {
      className: A.inputContainer,
      children: (0, a.jsx)(E.SearchableSelect, {
        wrapperClassName: A.input,
        options: D,
        value: "",
        placeholder: d.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: O,
        isDisabled: L.size === T.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: C
      })
    }), (0, a.jsxs)("div", {
      className: A.contentWithMinHeight,
      children: [null != c && (0, a.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: A.errorText,
        children: c
      }), L.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: A.contentLabel,
          children: d.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: A.selectedSection,
          children: Array.from(L).map(e => (0, a.jsx)(o.default, {
            applicationId: e,
            onClick: e !== N ? f : void 0,
            imageContainerClassName: e !== N ? A.clickableGame : A.defaultGame,
            selected: !0,
            locked: e === N
          }, e))
        }), (0, a.jsx)("div", {
          className: A.divider
        })]
      }), null != g && g.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: A.contentLabel,
          children: d.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: A.selectedSection,
          children: g.map(e => (0, a.jsx)(o.default, {
            applicationId: e.applicationId,
            onClick: O,
            imageContainerClassName: A.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}