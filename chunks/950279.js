"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("77498"),
  d = n("465670"),
  c = n("308083"),
  f = n("689938"),
  E = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: n,
    gameDetails: l
  } = e, _ = (0, r.useStateFromStores)([u.default], () => u.default.games), h = s.useMemo(() => _.map(e => ({
    value: e.id,
    label: e.name
  })), [_]), C = e => {
    let a = new Set(n);
    a.delete(e), t({
      selectedGames: a
    })
  };
  return (0, a.jsxs)("div", {
    className: E.slideContent,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      className: E.title,
      children: f.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: f.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: E.inputContainer,
      children: (0, a.jsx)(o.SearchableSelect, {
        options: h,
        value: "",
        placeholder: f.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: e => {
          if (n.size === c.MAX_NUM_SELECTED_GAMES) return;
          let a = new Set(n);
          a.add(e), t({
            selectedGames: a
          })
        },
        isDisabled: n.size === c.MAX_NUM_SELECTED_GAMES
      })
    }), (0, a.jsxs)("div", {
      className: E.contentWithMinHeight,
      children: [n.size > 0 && (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: E.contentLabel,
        children: f.default.Messages.CLAN_SETUP_SELECTED_GAMES
      }), (0, a.jsx)("div", {
        className: E.selectedSection,
        children: Array.from(n).map(e => {
          var t;
          return (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
              className: E.gameImagePlaceholder,
              children: (0, a.jsx)(o.Clickable, {
                className: E.removeGame,
                onClick: () => C(e),
                children: (0, a.jsx)(d.default, {
                  className: i()(E.icon, E.clickable)
                })
              })
            }), (0, a.jsx)(o.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: null === (t = l[e]) || void 0 === t ? void 0 : t.name
            })]
          }, e)
        })
      })]
    })]
  })
}