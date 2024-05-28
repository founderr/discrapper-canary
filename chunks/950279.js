"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("442837"),
  o = a("481060"),
  d = a("32966"),
  c = a("314897"),
  u = a("77498"),
  f = a("364083"),
  m = a("92373"),
  E = a("308083"),
  h = a("689938"),
  T = a("706351"),
  _ = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: i,
    gameApplicationIds: C,
    error: x,
    requiredGameId: p,
    inSettings: I
  } = e, g = (0, l.useStateFromStores)([c.default], () => c.default.getId()), {
    recentGames: N
  } = (0, d.useUserRecentGames)(g), {
    options: A,
    matchSorterOptions: v
  } = (0, f.useClanSetupGameSelectableSearch)();
  r.useEffect(() => {
    !I && null != p && !C.has(p) && A.length > 0 && R(p)
  }, [A.length, p, I]);
  let S = e => {
      if (!C.has(e) || e === p) return;
      let t = new Set(C);
      t.delete(e), i(t)
    },
    R = e => {
      if (C.size === E.MAX_NUM_SELECTED_GAMES || C.has(e) || null == u.default.getGameById(e)) return;
      let t = new Set(C);
      t.add(e), i(t)
    };
  return (0, n.jsxs)("div", {
    className: s()(_.slideContent, T.container),
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: t
    }), (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: a
    }), (0, n.jsx)("div", {
      className: _.inputContainer,
      children: (0, n.jsx)(o.SearchableSelect, {
        wrapperClassName: _.input,
        options: A,
        value: "",
        placeholder: h.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: R,
        isDisabled: C.size === E.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: v,
        clearQueryOnSelect: !0
      })
    }), (0, n.jsxs)("div", {
      className: T.errorWrapper,
      children: [null != x && (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: _.errorText,
        children: x
      }), C.size > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: _.contentLabel,
          children: h.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, n.jsx)("div", {
          className: T.selectedSection,
          children: Array.from(C).map(e => (0, n.jsx)(m.default, {
            applicationId: e,
            onClick: e !== p ? S : void 0,
            imageContainerClassName: e !== p ? T.clickableGame : T.defaultGame,
            selected: !0,
            locked: e === p
          }, e))
        })]
      }), null != N && N.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: T.recentGamesDivider
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: _.contentLabel,
          children: h.default.Messages.RECENT_GAMES
        }), (0, n.jsx)("div", {
          className: T.selectedSection,
          children: N.map(e => (0, n.jsx)(m.default, {
            applicationId: e.applicationId,
            onClick: R,
            imageContainerClassName: T.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}