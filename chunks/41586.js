"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("120356"),
  o = l.n(n),
  i = l("954955"),
  r = l.n(i),
  d = l("498607"),
  u = l.n(d),
  C = l("149765"),
  c = l("399606"),
  m = l("989885"),
  E = l("780384"),
  f = l("481060"),
  M = l("210887"),
  _ = l("496675"),
  h = l("6048"),
  T = l("910693"),
  S = l("588215"),
  x = l("893966"),
  A = l("527379"),
  p = l("855935"),
  L = l("231338"),
  N = l("689938"),
  g = l("693670");
let H = s.forwardRef(function(e, t) {
  let {
    guild: n
  } = e, i = (0, c.useStateFromStores)([x.default], () => x.default.hasDefaultSearchStateByGuildId(n.id), [n.id]), d = (0, c.useStateFromStores)([M.default], () => (0, E.isThemeDark)(M.default.theme)), H = (0, c.useStateFromStores)([_.default], () => _.default.can(C.combine(L.Permissions.MANAGE_GUILD, L.Permissions.KICK_MEMBERS), n)), I = s.useCallback(() => {
    null != n && H && (0, f.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("95019")]).then(l.bind(l, "102560"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: n
      })
    })
  }, [n, H]), R = (0, c.useStateFromStores)([x.default], () => x.default.getSearchStateByGuildId(n.id), [n.id], u()), v = (0, T.useTrackMemberSearchUsed)(n.id), [j, D] = s.useState(R.query), b = null != R.selectedSort && R.selectedSort !== S.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC && R.selectedSort !== S.OrderBy.ORDER_BY_UNSPECIFIED, O = s.useCallback(e => {
    let t = e.trim();
    t.length > 0 && v(), (0, A.updateSearchState)(n.id, {
      query: t
    })
  }, [n.id, v]), B = s.useCallback(r()(O, 300), [O]), V = s.useCallback(e => {
    D(e), B(e)
  }, [B]), F = s.useCallback(() => {
    D(""), O("")
  }, [O]);
  return s.useImperativeHandle(t, () => ({
    resetSearchText() {
      D("")
    }
  })), (0, a.jsxs)("div", {
    className: o()(g.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: o()(g.searchHeader),
      children: i ? (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: N.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: N.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: o()(g.searchInput),
      children: (0, a.jsx)("div", {
        className: o()(g.searchHeader),
        children: (0, a.jsx)(h.default, {
          className: g.searchBar,
          query: j,
          placeholder: N.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: V,
          onClear: F,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(f.Popout, {
        animation: f.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(p.default, {
          guildId: n.id,
          onClose: void 0
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(f.Button, {
            ...l,
            onClick: t,
            "aria-label": N.default.Messages.SORT,
            color: d ? f.Button.Colors.PRIMARY : f.Button.Colors.TRANSPARENT,
            look: d ? f.Button.Looks.FILLED : f.Button.Looks.OUTLINED,
            size: f.Button.Sizes.SMALL,
            children: (0, a.jsxs)("div", {
              className: g.sortButton,
              children: [(0, a.jsx)(m.ArrowsUpDownIcon, {
                height: 16,
                width: 16,
                color: b ? f.tokens.colors.INTERACTIVE_ACTIVE.css : f.tokens.colors.HEADER_SECONDARY.css
              }), (0, a.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: b ? "interactive-active" : "header-secondary",
                className: g.sortText,
                children: N.default.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: o()(g.tableOptions),
      children: H && (0, a.jsx)(f.Button, {
        className: o()(g.__invalid_pruneButton),
        onClick: I,
        "aria-label": N.default.Messages.PRUNE_MEMBERS,
        color: f.Button.Colors.RED,
        look: f.Button.Looks.OUTLINED,
        size: f.Button.Sizes.SMALL,
        children: N.default.Messages.PRUNE
      })
    })]
  })
});
t.default = H