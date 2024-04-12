"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("32966"),
  o = a("314897"),
  u = a("77498"),
  d = a("92373"),
  c = a("308083"),
  f = a("689938"),
  E = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: a,
    error: h,
    requiredGameId: _
  } = e, C = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: m
  } = (0, r.useUserRecentGames)(C), S = (0, l.useStateFromStores)([u.default], () => u.default.games, []), p = s.useMemo(() => S.map(e => ({
    value: e.id,
    label: e.name
  })), [S]), I = (0, l.useStateFromStoresArray)([u.default], () => null != m ? m.map(e => {
    let t = u.default.getGameById(e.applicationId);
    return {
      ...e,
      name: null == t ? void 0 : t.name
    }
  }) : []);
  s.useEffect(() => {
    null != _ && !a.has(_) && S.length > 0 && g(_)
  }, [S.length, _]);
  let T = e => {
      if (!a.has(e) || e === _) return;
      let n = new Map(a);
      n.delete(e), t({
        selectedGames: n
      })
    },
    g = e => {
      if (a.size === c.MAX_NUM_SELECTED_GAMES || a.has(e)) return;
      let n = u.default.getGameById(e);
      if (null == n) return;
      let s = new Map(a);
      s.set(e, {
        id: e,
        name: n.name
      }), t({
        selectedGames: s
      })
    };
  return (0, n.jsxs)("div", {
    className: E.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: f.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: f.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, n.jsx)("div", {
      className: E.inputContainer,
      children: (0, n.jsx)(i.SearchableSelect, {
        options: p,
        value: "",
        placeholder: f.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: g,
        isDisabled: a.size === c.MAX_NUM_SELECTED_GAMES
      })
    }), (0, n.jsxs)("div", {
      className: E.contentWithMinHeight,
      children: [null != h && (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: E.errorText,
        children: h
      }), a.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.contentLabel,
          children: f.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: E.selectedSection,
          children: Array.from(a.entries()).map(e => {
            let [t, a] = e;
            return (0, n.jsx)(d.default, {
              applicationId: t,
              name: a.name,
              onClick: t !== _ ? T : void 0,
              imageContainerClassName: t !== _ ? E.removableGame : void 0,
              selected: !0
            }, t)
          })
        })]
      }), I.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.contentLabel,
          children: f.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: E.selectedSection,
          children: I.map(e => (0, n.jsx)(d.default, {
            name: e.name,
            applicationId: e.applicationId,
            onClick: g
          }, e.applicationId))
        })]
      })]
    })]
  })
}