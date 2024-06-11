"use strict";
l.r(t), l.d(t, {
  ChannelBrowserSidebar: function() {
    return v
  },
  default: function() {
    return A
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("442837"),
  d = l("481060"),
  o = l("325708"),
  u = l("213557"),
  c = l("433355"),
  h = l("324067"),
  f = l("984933"),
  m = l("430824"),
  C = l("496675"),
  N = l("908773"),
  x = l("626135"),
  g = l("216306"),
  p = l("775028"),
  S = l("981631"),
  E = l("176505"),
  I = l("689938"),
  _ = l("763280"),
  T = l("19340");

function v(e) {
  let {
    channelId: t
  } = e;
  return (0, n.jsx)(o.default, {
    sidebarType: o.ChatSidebarType.ThreadSidebar,
    maxWidth: 600,
    children: (0, n.jsx)(u.default, {
      channelId: t,
      baseChannelId: E.StaticChannelRoute.CHANNEL_BROWSER
    })
  })
}

function A(e) {
  let {
    guildId: t
  } = e, [s, o] = a.useState(""), u = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t)), v = (0, r.useStateFromStores)([f.default], () => f.default.getChannels(t)), A = (0, r.useStateFromStores)([h.default], () => h.default.getCategories(t)), O = (0, g.useFilterCategoriesByQuery)(t, A, v, s), R = (0, r.useStateFromStores)([C.default], () => C.default.canWithPartialContext(S.Permissions.MANAGE_CHANNELS, {
    guildId: t
  })), j = (0, r.useStateFromStores)([c.default], () => null != c.default.getCurrentSidebarChannelId(E.StaticChannelRoute.CHANNEL_BROWSER)), b = a.useCallback(() => o(""), [o]), L = a.useCallback(() => {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("45094"), l.e("36494")]).then(l.bind(l, "218613"));
      return l => (0, n.jsx)(e, {
        ...l,
        channelType: null,
        guildId: t
      })
    })
  }, [t]);
  return null == u ? null : (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)("div", {
      className: i()(T.chat, _.container),
      children: (0, n.jsxs)("div", {
        className: i()(_.pageBody),
        children: [(0, n.jsxs)("div", {
          className: _.header,
          children: [(0, n.jsx)(d.SearchBar, {
            className: _.search,
            size: d.SearchBar.Sizes.MEDIUM,
            query: s,
            onChange: e => {
              "" === s && "" !== e && x.default.track(S.AnalyticEvents.SEARCH_STARTED, {
                search_type: "channel browser"
              }), o(e.toLowerCase())
            },
            onClear: b,
            placeholder: I.default.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
          }), R ? (0, n.jsxs)(d.Button, {
            className: _.createButton,
            innerClassName: _.createButtonInner,
            onClick: L,
            children: [(0, n.jsx)(N.default, {
              className: _.createIcon
            }), I.default.Messages.CREATE]
          }) : null]
        }), (0, n.jsx)(p.default, {
          className: _.browser,
          channels: v,
          categories: O,
          guild: u,
          hasSidebar: j
        })]
      })
    })
  })
}