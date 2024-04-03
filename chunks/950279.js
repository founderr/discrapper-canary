"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("32966"),
  o = n("314897"),
  u = n("77498"),
  d = n("441674"),
  c = n("308083"),
  f = n("689938"),
  E = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: n
  } = e, h = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: _
  } = (0, r.useUserRecentGames)(h), C = (0, l.useStateFromStores)([u.default], () => u.default.games, []), S = s.useMemo(() => C.map(e => ({
    value: e.id,
    label: e.name
  })), [C]), m = (0, i.useToken)(i.tokens.colors.WHITE), I = (0, l.useStateFromStoresArray)([u.default], () => null != _ ? _.map(e => {
    let t = u.default.getGameById(e.applicationId);
    return {
      ...e,
      name: null == t ? void 0 : t.name
    }
  }) : []), p = e => {
    if (!n.has(e)) return;
    let a = new Map(n);
    a.delete(e), t({
      selectedGames: a
    })
  }, T = e => {
    if (n.size === c.MAX_NUM_SELECTED_GAMES || n.has(e)) return;
    let a = u.default.getGameById(e),
      s = new Map(n);
    s.set(e, {
      id: e,
      name: a.name
    }), t({
      selectedGames: s
    })
  };
  return (0, a.jsxs)("div", {
    className: E.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: f.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: f.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: E.inputContainer,
      children: (0, a.jsx)(i.SearchableSelect, {
        options: S,
        value: "",
        placeholder: f.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: T,
        isDisabled: n.size === c.MAX_NUM_SELECTED_GAMES
      })
    }), (0, a.jsxs)("div", {
      className: E.contentWithMinHeight,
      children: [n.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.contentLabel,
          children: f.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: E.selectedSection,
          children: Array.from(n.entries()).map(e => {
            let [t, n] = e;
            return (0, a.jsxs)("div", {
              className: E.selectedGame,
              children: [(0, a.jsx)(i.Clickable, {
                onClick: () => p(t),
                className: E.gameImagePlaceholder,
                children: (0, a.jsx)(d.default, {
                  backgroundColor: m.hex(),
                  className: E.selectedGameCheck
                })
              }), (0, a.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "header-primary",
                children: n.name
              })]
            }, t)
          })
        })]
      }), I.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.contentLabel,
          children: f.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: E.selectedSection,
          children: I.map(e => (0, a.jsxs)("div", {
            className: E.selectedGame,
            children: [(0, a.jsx)(i.Clickable, {
              "aria-label": e.name,
              onClick: () => T(e.applicationId),
              className: E.gameImagePlaceholder
            }), (0, a.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "header-primary",
              children: e.name
            })]
          }, e.applicationId))
        })]
      })]
    })]
  })
}