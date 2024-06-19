t(47120);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(954955),
  r = t.n(i),
  C = t(498607),
  c = t.n(C),
  d = t(149765),
  u = t(399606),
  E = t(780384),
  m = t(481060),
  _ = t(102560),
  M = t(210887),
  h = t(496675),
  x = t(910693),
  T = t(588215),
  L = t(893966),
  H = t(527379),
  g = t(855935),
  A = t(231338),
  I = t(689938),
  N = t(933021);
let R = s.forwardRef(function(e, l) {
  let {
    guild: t
  } = e, a = (0, u.e7)([L.Z], () => L.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]), i = (0, u.e7)([M.Z], () => (0, E.wj)(M.Z.theme)), C = (0, u.e7)([h.Z], () => h.Z.can(d.$e(A.Pl.MANAGE_GUILD, A.Pl.KICK_MEMBERS), t)), R = s.useCallback(() => {
    if (null != t && !!C)(0, m.openModalLazy)(async () => e => (0, n.jsx)(_.Z, {
      ...e,
      guild: t
    }))
  }, [t, C]), p = (0, u.e7)([L.Z], () => L.Z.getSearchStateByGuildId(t.id), [t.id], c()), S = (0, x.gm)(t.id), [Z, j] = s.useState(p.query), v = null != p.selectedSort && p.selectedSort !== T.d$.ORDER_BY_GUILD_JOINED_AT_DESC && p.selectedSort !== T.d$.ORDER_BY_UNSPECIFIED, f = s.useCallback(e => {
    let l = e.trim();
    l.length > 0 && S(), (0, H.Dr)(t.id, {
      query: l
    })
  }, [t.id, S]), D = s.useCallback(r()(f, 300), [f]), b = s.useCallback(e => {
    j(e), D(e)
  }, [D]), O = s.useCallback(() => {
    j(""), f("")
  }, [f]);
  return s.useImperativeHandle(l, () => ({
    resetSearchText() {
      j("")
    }
  })), (0, n.jsxs)("div", {
    className: o()(N.searchHeaderContainer),
    children: [(0, n.jsx)("div", {
      className: o()(N.searchHeader),
      children: a ? (0, n.jsx)(m.Heading, {
        variant: "heading-md/medium",
        children: I.Z.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, n.jsx)(m.Heading, {
        variant: "heading-md/medium",
        children: I.Z.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, n.jsx)("div", {
      className: o()(N.searchInput),
      children: (0, n.jsx)("div", {
        className: o()(N.searchHeader),
        children: (0, n.jsx)(m.SearchBar, {
          className: N.searchBar,
          query: Z,
          placeholder: I.Z.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: b,
          onClear: O,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(m.Popout, {
        animation: m.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, n.jsx)(g.Z, {
          guildId: t.id,
          onClose: void 0
        }),
        children: e => {
          let {
            onClick: l,
            ...t
          } = e;
          return (0, n.jsx)(m.Button, {
            ...t,
            onClick: l,
            "aria-label": I.Z.Messages.SORT,
            color: i ? m.Button.Colors.PRIMARY : m.Button.Colors.TRANSPARENT,
            look: i ? m.Button.Looks.FILLED : m.Button.Looks.OUTLINED,
            size: m.Button.Sizes.SMALL,
            children: (0, n.jsxs)("div", {
              className: N.sortButton,
              children: [(0, n.jsx)(m.ArrowsUpDownIcon, {
                size: "xs",
                color: v ? m.tokens.colors.INTERACTIVE_ACTIVE.css : m.tokens.colors.HEADER_SECONDARY.css
              }), (0, n.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: v ? "interactive-active" : "header-secondary",
                className: N.sortText,
                children: I.Z.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, n.jsx)("div", {
      className: o()(N.tableOptions),
      children: C && (0, n.jsx)(m.Button, {
        className: o()(N.__invalid_pruneButton),
        onClick: R,
        "aria-label": I.Z.Messages.PRUNE_MEMBERS,
        color: m.Button.Colors.RED,
        look: m.Button.Looks.OUTLINED,
        size: m.Button.Sizes.SMALL,
        children: I.Z.Messages.PRUNE
      })
    })]
  })
});
l.Z = R