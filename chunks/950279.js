"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("32966"),
  d = n("314897"),
  c = n("77498"),
  f = n("441674"),
  E = n("308083"),
  h = n("689938"),
  _ = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: n,
    error: l,
    requiredGameId: C
  } = e, m = (0, r.useStateFromStores)([d.default], () => d.default.getId()), {
    recentGames: S
  } = (0, u.useUserRecentGames)(m), I = (0, r.useStateFromStores)([c.default], () => c.default.games, []), p = s.useMemo(() => I.map(e => ({
    value: e.id,
    label: e.name
  })), [I]), T = (0, o.useToken)(o.tokens.colors.WHITE), g = (0, r.useStateFromStoresArray)([c.default], () => null != S ? S.map(e => {
    let t = c.default.getGameById(e.applicationId);
    return {
      ...e,
      name: null == t ? void 0 : t.name
    }
  }) : []);
  s.useEffect(() => {
    null != C && !n.has(C) && I.length > 0 && A(C)
  }, [I.length, C]);
  let N = e => {
      if (!n.has(e) || e === C) return;
      let a = new Map(n);
      a.delete(e), t({
        selectedGames: a
      })
    },
    A = e => {
      if (n.size === E.MAX_NUM_SELECTED_GAMES || n.has(e)) return;
      let a = c.default.getGameById(e);
      if (null == a) return;
      let s = new Map(n);
      s.set(e, {
        id: e,
        name: a.name
      }), t({
        selectedGames: s
      })
    };
  return (0, a.jsxs)("div", {
    className: _.slideContent,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: h.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: h.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: _.inputContainer,
      children: (0, a.jsx)(o.SearchableSelect, {
        options: p,
        value: "",
        placeholder: h.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: A,
        isDisabled: n.size === E.MAX_NUM_SELECTED_GAMES
      })
    }), (0, a.jsxs)("div", {
      className: _.contentWithMinHeight,
      children: [null != l && (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: _.errorText,
        children: l
      }), n.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: _.contentLabel,
          children: h.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: _.selectedSection,
          children: Array.from(n.entries()).map(e => {
            let [t, n] = e;
            return (0, a.jsxs)("div", {
              className: _.selectedGame,
              children: [(0, a.jsx)(o.Clickable, {
                onClick: () => t !== C ? N(t) : null,
                className: i()(_.gameImagePlaceholder, {
                  [_.removableGame]: t !== C
                }),
                children: (0, a.jsx)(f.default, {
                  backgroundColor: T.hex(),
                  className: _.selectedGameCheck
                })
              }), (0, a.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "header-primary",
                children: n.name
              })]
            }, t)
          })
        })]
      }), g.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: _.contentLabel,
          children: h.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: _.selectedSection,
          children: g.map(e => (0, a.jsxs)("div", {
            className: _.selectedGame,
            children: [(0, a.jsx)(o.Clickable, {
              "aria-label": e.name,
              onClick: () => A(e.applicationId),
              className: _.gameImagePlaceholder
            }), (0, a.jsx)(o.Text, {
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