"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("77498"),
  o = n("441674"),
  u = n("308083"),
  d = n("689938"),
  c = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: n
  } = e, f = (0, l.useStateFromStores)([r.default], () => r.default.games, []), E = s.useMemo(() => f.map(e => ({
    value: e.id,
    label: e.name
  })), [f]), h = (0, i.useToken)(i.tokens.colors.WHITE), _ = e => {
    if (!n.has(e)) return;
    let a = new Map(n);
    a.delete(e), t({
      selectedGames: a
    })
  };
  return (0, a.jsxs)("div", {
    className: c.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: d.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: d.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: c.inputContainer,
      children: (0, a.jsx)(i.SearchableSelect, {
        options: E,
        value: "",
        placeholder: d.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: e => {
          if (n.size === u.MAX_NUM_SELECTED_GAMES || n.has(e)) return;
          let a = r.default.getGameById(e),
            s = new Map(n);
          s.set(e, {
            id: e,
            name: a.name
          }), t({
            selectedGames: s
          })
        },
        isDisabled: n.size === u.MAX_NUM_SELECTED_GAMES
      })
    }), (0, a.jsxs)("div", {
      className: c.contentWithMinHeight,
      children: [n.size > 0 && (0, a.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: c.contentLabel,
        children: d.default.Messages.CLAN_SETUP_SELECTED_GAMES
      }), (0, a.jsx)("div", {
        className: c.selectedSection,
        children: Array.from(n.entries()).map(e => {
          let [t, n] = e;
          return (0, a.jsxs)("div", {
            className: c.selectedGame,
            children: [(0, a.jsx)(i.Clickable, {
              onClick: () => _(t),
              className: c.gameImagePlaceholder,
              children: (0, a.jsx)(o.default, {
                backgroundColor: h.hex(),
                className: c.selectedGameCheck
              })
            }), (0, a.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "header-primary",
              children: n.name
            })]
          }, t)
        })
      })]
    })]
  })
}