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
  T = l("6048"),
  S = l("910693"),
  x = l("588215"),
  A = l("893966"),
  p = l("527379"),
  g = l("855935"),
  L = l("231338"),
  N = l("689938"),
  H = l("693670");
let R = s.forwardRef(function(e, t) {
  let {
    guild: l
  } = e, n = (0, c.useStateFromStores)([A.default], () => A.default.hasDefaultSearchStateByGuildId(l.id), [l.id]), i = (0, c.useStateFromStores)([M.default], () => (0, E.isThemeDark)(M.default.theme)), d = (0, c.useStateFromStores)([h.default], () => h.default.can(C.combine(L.Permissions.MANAGE_GUILD, L.Permissions.KICK_MEMBERS), l)), R = s.useCallback(() => {
    null != l && d && (0, f.openModalLazy)(async () => e => (0, a.jsx)(_.default, {
      ...e,
      guild: l
    }))
  }, [l, d]), I = (0, c.useStateFromStores)([A.default], () => A.default.getSearchStateByGuildId(l.id), [l.id], u()), v = (0, S.useTrackMemberSearchUsed)(l.id), [j, D] = s.useState(I.query), b = null != I.selectedSort && I.selectedSort !== x.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC && I.selectedSort !== x.OrderBy.ORDER_BY_UNSPECIFIED, O = s.useCallback(e => {
    let t = e.trim();
    t.length > 0 && v(), (0, p.updateSearchState)(l.id, {
      query: t
    })
  }, [l.id, v]), B = s.useCallback(r()(O, 300), [O]), V = s.useCallback(e => {
    D(e), B(e)
  }, [B]), F = s.useCallback(() => {
    D(""), O("")
  }, [O]);
  return s.useImperativeHandle(t, () => ({
    resetSearchText() {
      D("")
    }
  })), (0, a.jsxs)("div", {
    className: o()(H.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: o()(H.searchHeader),
      children: n ? (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: N.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: N.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: o()(H.searchInput),
      children: (0, a.jsx)("div", {
        className: o()(H.searchHeader),
        children: (0, a.jsx)(T.default, {
          className: H.searchBar,
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
        renderPopout: () => (0, a.jsx)(g.default, {
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
            "aria-label": N.default.Messages.SORT,
            color: i ? f.Button.Colors.PRIMARY : f.Button.Colors.TRANSPARENT,
            look: i ? f.Button.Looks.FILLED : f.Button.Looks.OUTLINED,
            size: f.Button.Sizes.SMALL,
            children: (0, a.jsxs)("div", {
              className: H.sortButton,
              children: [(0, a.jsx)(m.ArrowsUpDownIcon, {
                height: 16,
                width: 16,
                color: b ? f.tokens.colors.INTERACTIVE_ACTIVE.css : f.tokens.colors.HEADER_SECONDARY.css
              }), (0, a.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: b ? "interactive-active" : "header-secondary",
                className: H.sortText,
                children: N.default.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: o()(H.tableOptions),
      children: d && (0, a.jsx)(f.Button, {
        className: o()(H.__invalid_pruneButton),
        onClick: R,
        "aria-label": N.default.Messages.PRUNE_MEMBERS,
        color: f.Button.Colors.RED,
        look: f.Button.Looks.OUTLINED,
        size: f.Button.Sizes.SMALL,
        children: N.default.Messages.PRUNE
      })
    })]
  })
});
t.default = R