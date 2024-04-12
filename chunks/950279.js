"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("183249"),
  o = n("442837"),
  u = n("481060"),
  d = n("210753"),
  c = n("32966"),
  f = n("314897"),
  E = n("77498"),
  h = n("441674"),
  _ = n("308083"),
  C = n("689938"),
  m = n("597338");

function S(e) {
  let {
    applicationId: t,
    name: n,
    imageContainerClassName: l,
    onClick: o
  } = e, c = (0, u.useToken)(u.tokens.colors.WHITE), {
    isFetching: f,
    coverImageUrl: E
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), _ = s.useCallback(() => {
    null == o || o(t)
  }, [t, o]), C = s.useMemo(() => f ? null : null == E ? (0, a.jsx)("div", {
    className: m.gameUnknownImage,
    children: (0, a.jsx)(r.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: m.gameImage,
    alt: n,
    src: E
  }), [E, f, n]);
  return (0, a.jsxs)("div", {
    className: m.selectedGame,
    children: [(0, a.jsxs)(u.Clickable, {
      onClick: _,
      className: i()(l, f ? m.gameImageLoading : void 0, m.gameImageBackground),
      children: [(0, a.jsx)(h.default, {
        backgroundColor: c.hex(),
        className: m.selectedGameCheck
      }), C]
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "header-primary",
      children: n
    })]
  })
}
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: n,
    error: l,
    requiredGameId: i
  } = e, r = (0, o.useStateFromStores)([f.default], () => f.default.getId()), {
    recentGames: d
  } = (0, c.useUserRecentGames)(r), h = (0, o.useStateFromStores)([E.default], () => E.default.games, []), I = s.useMemo(() => h.map(e => ({
    value: e.id,
    label: e.name
  })), [h]), p = (0, o.useStateFromStoresArray)([E.default], () => null != d ? d.map(e => {
    let t = E.default.getGameById(e.applicationId);
    return {
      ...e,
      name: null == t ? void 0 : t.name
    }
  }) : []);
  s.useEffect(() => {
    null != i && !n.has(i) && h.length > 0 && g(i)
  }, [h.length, i]);
  let T = e => {
      if (!n.has(e) || e === i) return;
      let a = new Map(n);
      a.delete(e), t({
        selectedGames: a
      })
    },
    g = e => {
      if (n.size === _.MAX_NUM_SELECTED_GAMES || n.has(e)) return;
      let a = E.default.getGameById(e);
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
    className: m.slideContent,
    children: [(0, a.jsx)(u.Heading, {
      variant: "heading-xxl/medium",
      className: m.title,
      children: C.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: m.subtitle,
      children: C.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: m.inputContainer,
      children: (0, a.jsx)(u.SearchableSelect, {
        options: I,
        value: "",
        placeholder: C.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: g,
        isDisabled: n.size === _.MAX_NUM_SELECTED_GAMES
      })
    }), (0, a.jsxs)("div", {
      className: m.contentWithMinHeight,
      children: [null != l && (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: m.errorText,
        children: l
      }), n.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: m.contentLabel,
          children: C.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: m.selectedSection,
          children: Array.from(n.entries()).map(e => {
            let [t, n] = e;
            return (0, a.jsx)(S, {
              applicationId: t,
              name: n.name,
              onClick: t !== i ? T : void 0,
              imageContainerClassName: t !== i ? m.removableGame : void 0
            }, t)
          })
        })]
      }), p.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: m.contentLabel,
          children: C.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: m.selectedSection,
          children: p.map(e => (0, a.jsx)(S, {
            name: e.name,
            applicationId: e.applicationId,
            onClick: g
          }, e.applicationId))
        })]
      })]
    })]
  })
}