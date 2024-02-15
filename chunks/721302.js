"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  r = l("969176"),
  u = l.n(r),
  C = l("65597"),
  c = l("620000"),
  f = l("819855"),
  E = l("77078"),
  m = l("161778"),
  M = l("957255"),
  h = l("810567"),
  _ = l("130037"),
  T = l("490931"),
  x = l("178406"),
  S = l("645266"),
  A = l("248793"),
  p = l("843455"),
  L = l("782340"),
  H = l("791006");
let N = n.forwardRef(function(e, t) {
  let {
    guild: s
  } = e, o = (0, C.default)([x.default], () => x.default.hasDefaultSearchStateByGuildId(s.id), [s.id]), r = (0, C.default)([m.default], () => (0, f.isThemeDark)(m.default.theme)), N = (0, C.default)([M.default], () => M.default.can(p.Permissions.KICK_MEMBERS, s)), g = n.useCallback(() => {
    null != s && N && (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("494440").then(l.bind(l, "494440"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: s
      })
    })
  }, [s, N]), I = (0, C.default)([x.default], () => x.default.getSearchStateByGuildId(s.id), [s.id], u), R = (0, _.useTrackMemberSearchUsed)(s.id), [v, j] = n.useState(I.query), D = null != I.selectedSort && I.selectedSort !== T.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC && I.selectedSort !== T.OrderBy.ORDER_BY_UNSPECIFIED, b = n.useCallback(e => {
    let t = e.trim();
    t.length > 0 && R(), (0, S.updateSearchState)(s.id, {
      query: t
    })
  }, [s.id, R]), O = n.useCallback(d(b, 300), [b]), B = n.useCallback(e => {
    j(e), O(e)
  }, [O]), V = n.useCallback(() => {
    j(""), b("")
  }, [b]);
  return n.useImperativeHandle(t, () => ({
    resetSearchText() {
      j("")
    }
  })), (0, a.jsxs)("div", {
    className: i(H.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: i(H.searchHeader),
      children: o ? (0, a.jsx)(E.Heading, {
        variant: "heading-md/medium",
        children: L.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(E.Heading, {
        variant: "heading-md/medium",
        children: L.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: i(H.searchInput),
      children: (0, a.jsx)("div", {
        className: i(H.searchHeader),
        children: (0, a.jsx)(h.default, {
          className: H.searchBar,
          query: v,
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
      children: (0, a.jsx)(E.Popout, {
        animation: E.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(A.default, {
          guildId: s.id,
          onClose: void 0
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(E.Button, {
            ...l,
            onClick: t,
            "aria-label": L.default.Messages.SORT,
            color: r ? E.Button.Colors.PRIMARY : E.Button.Colors.TRANSPARENT,
            look: r ? E.Button.Looks.FILLED : E.Button.Looks.OUTLINED,
            size: E.Button.Sizes.SMALL,
            children: (0, a.jsxs)("div", {
              className: H.sortButton,
              children: [(0, a.jsx)(c.ArrowsUpDownIcon, {
                height: 16,
                width: 16,
                color: D ? E.tokens.colors.INTERACTIVE_ACTIVE.css : E.tokens.colors.HEADER_SECONDARY.css
              }), (0, a.jsx)(E.Text, {
                variant: "text-sm/medium",
                color: D ? "interactive-active" : "header-secondary",
                className: H.sortText,
                children: L.default.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: i(H.tableOptions),
      children: N && (0, a.jsx)(E.Button, {
        className: i(H.pruneButton),
        onClick: g,
        "aria-label": L.default.Messages.PRUNE_MEMBERS,
        color: E.Button.Colors.RED,
        look: E.Button.Looks.OUTLINED,
        size: E.Button.Sizes.SMALL,
        children: L.default.Messages.PRUNE
      })
    })]
  })
});
var g = N