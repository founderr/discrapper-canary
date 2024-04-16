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
    selectedGames: a,
    error: _,
    requiredGameId: C
  } = e, m = (0, l.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: S
  } = (0, r.useUserRecentGames)(m), {
    options: p,
    matchSorterOptions: I
  } = (0, d.useClanSetupGameSelectableSearch)(), T = (0, l.useStateFromStoresArray)([u.default], () => null != S ? S.map(e => {
    let t = u.default.getGameById(e.applicationId);
    return {
      ...e,
      name: null == t ? void 0 : t.name
    }
  }) : []);
  s.useEffect(() => {
    null != C && !a.has(C) && p.length > 0 && A(C)
  }, [p.length, C]);
  let g = e => {
      if (!a.has(e) || e === C) return;
      let n = new Map(a);
      n.delete(e), t({
        selectedGames: n
      })
    },
    A = e => {
      if (a.size === f.MAX_NUM_SELECTED_GAMES || a.has(e)) return;
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
        options: p,
        value: "",
        placeholder: E.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: A,
        isDisabled: a.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: I
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
          children: Array.from(a.entries()).map(e => {
            let [t, a] = e;
            return (0, n.jsx)(c.default, {
              applicationId: t,
              name: a.name,
              onClick: t !== C ? g : void 0,
              imageContainerClassName: t !== C ? h.removableGame : void 0,
              selected: !0
            }, t)
          })
        })]
      }), T.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: E.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: h.selectedSection,
          children: T.map(e => (0, n.jsx)(c.default, {
            name: e.name,
            applicationId: e.applicationId,
            onClick: A,
            imageContainerClassName: h.clickable
          }, e.applicationId))
        })]
      })]
    })]
  })
}