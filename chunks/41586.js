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
  _ = l("102560"),
  M = l("210887"),
  h = l("496675"),
  S = l("910693"),
  T = l("588215"),
  x = l("893966"),
  A = l("527379"),
  p = l("855935"),
  g = l("231338"),
  L = l("689938"),
  N = l("693670");
let H = s.forwardRef(function(e, t) {
  let {
    guild: l
  } = e, n = (0, c.useStateFromStores)([x.default], () => x.default.hasDefaultSearchStateByGuildId(l.id), [l.id]), i = (0, c.useStateFromStores)([M.default], () => (0, E.isThemeDark)(M.default.theme)), d = (0, c.useStateFromStores)([h.default], () => h.default.can(C.combine(g.Permissions.MANAGE_GUILD, g.Permissions.KICK_MEMBERS), l)), H = s.useCallback(() => {
    null != l && d && (0, f.openModalLazy)(async () => e => (0, a.jsx)(_.default, {
      ...e,
      guild: l
    }))
  }, [l, d]), R = (0, c.useStateFromStores)([x.default], () => x.default.getSearchStateByGuildId(l.id), [l.id], u()), I = (0, S.useTrackMemberSearchUsed)(l.id), [j, v] = s.useState(R.query), D = null != R.selectedSort && R.selectedSort !== T.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC && R.selectedSort !== T.OrderBy.ORDER_BY_UNSPECIFIED, b = s.useCallback(e => {
    let t = e.trim();
    t.length > 0 && I(), (0, A.updateSearchState)(l.id, {
      query: t
    })
  }, [l.id, I]), O = s.useCallback(r()(b, 300), [b]), B = s.useCallback(e => {
    v(e), O(e)
  }, [O]), V = s.useCallback(() => {
    v(""), b("")
  }, [b]);
  return s.useImperativeHandle(t, () => ({
    resetSearchText() {
      v("")
    }
  })), (0, a.jsxs)("div", {
    className: o()(N.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: o()(N.searchHeader),
      children: n ? (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: L.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: L.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: o()(N.searchInput),
      children: (0, a.jsx)("div", {
        className: o()(N.searchHeader),
        children: (0, a.jsx)(f.SearchBar, {
          className: N.searchBar,
          query: j,
          placeholder: L.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: B,
          onClear: V,
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
          guildId: l.id,
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
            "aria-label": L.default.Messages.SORT,
            color: i ? f.Button.Colors.PRIMARY : f.Button.Colors.TRANSPARENT,
            look: i ? f.Button.Looks.FILLED : f.Button.Looks.OUTLINED,
            size: f.Button.Sizes.SMALL,
            children: (0, a.jsxs)("div", {
              className: N.sortButton,
              children: [(0, a.jsx)(m.ArrowsUpDownIcon, {
                height: 16,
                width: 16,
                color: D ? f.tokens.colors.INTERACTIVE_ACTIVE.css : f.tokens.colors.HEADER_SECONDARY.css
              }), (0, a.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: D ? "interactive-active" : "header-secondary",
                className: N.sortText,
                children: L.default.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: o()(N.tableOptions),
      children: d && (0, a.jsx)(f.Button, {
        className: o()(N.__invalid_pruneButton),
        onClick: H,
        "aria-label": L.default.Messages.PRUNE_MEMBERS,
        color: f.Button.Colors.RED,
        look: f.Button.Looks.OUTLINED,
        size: f.Button.Sizes.SMALL,
        children: L.default.Messages.PRUNE
      })
    })]
  })
});
t.default = H