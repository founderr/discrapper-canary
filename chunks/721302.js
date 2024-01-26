"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
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
  c = l("77078"),
  f = l("957255"),
  m = l("810567"),
  E = l("130037"),
  M = l("178406"),
  h = l("645266"),
  T = l("843455"),
  x = l("782340"),
  _ = l("863879");
let g = n.forwardRef(function(e, t) {
  let {
    guild: s
  } = e, o = (0, C.default)([M.default], () => M.default.hasDefaultSearchStateByGuildId(s.id), [s.id]), r = (0, C.default)([f.default], () => f.default.can(T.Permissions.KICK_MEMBERS, s)), g = n.useCallback(() => {
    null != s && r && (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("494440").then(l.bind(l, "494440"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: s
      })
    })
  }, [s, r]), H = (0, C.default)([M.default], () => M.default.getSearchStateByGuildId(s.id), [s.id], u), p = (0, E.useTrackMemberSearchUsed)(s.id), [A, S] = n.useState(H.query), L = n.useCallback(e => {
    let t = e.trim();
    t.length > 0 && p(), (0, h.updateSearchState)(s.id, {
      query: t
    })
  }, [s.id, p]), N = n.useCallback(d(L, 300), [L]), I = n.useCallback(e => {
    S(e), N(e)
  }, [N]), v = n.useCallback(() => {
    S(""), L("")
  }, [L]);
  return n.useImperativeHandle(t, () => ({
    resetSearchText() {
      S("")
    }
  })), (0, a.jsxs)("div", {
    className: i(_.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: i(_.searchHeader),
      children: o ? (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: x.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: x.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: i(_.searchInput),
      children: (0, a.jsx)("div", {
        className: i(_.searchHeader),
        children: (0, a.jsx)(m.default, {
          className: _.searchBar,
          query: A,
          placeholder: x.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: I,
          onClear: v,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, a.jsx)("div", {
      className: i(_.tableOptions),
      children: r && (0, a.jsx)(c.Button, {
        className: i(_.pruneButton),
        onClick: g,
        "aria-label": x.default.Messages.PRUNE_MEMBERS,
        color: c.Button.Colors.RED,
        look: c.Button.Looks.OUTLINED,
        size: c.Button.Sizes.SMALL,
        children: x.default.Messages.PRUNE
      })
    })]
  })
});
var H = g