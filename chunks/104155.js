l.d(n, {
  I: function() {
    return v
  },
  Z: function() {
    return j
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  s = l(120356),
  a = l.n(s),
  r = l(442837),
  d = l(481060),
  o = l(325708),
  c = l(213557),
  u = l(433355),
  h = l(324067),
  m = l(984933),
  x = l(430824),
  N = l(496675),
  C = l(626135),
  g = l(216306),
  E = l(775028),
  p = l(981631),
  f = l(176505),
  Z = l(689938),
  _ = l(803181),
  I = l(175803);

function v(e) {
  let {
    channelId: n
  } = e;
  return (0, t.jsx)(o.Z, {
    sidebarType: o.y.ThreadSidebar,
    maxWidth: 600,
    children: (0, t.jsx)(c.Z, {
      channelId: n,
      baseChannelId: f.oC.CHANNEL_BROWSER
    })
  })
}

function j(e) {
  let {
    guildId: n
  } = e, [s, o] = i.useState(""), c = (0, r.e7)([x.Z], () => x.Z.getGuild(n)), v = (0, r.e7)([m.ZP], () => m.ZP.getChannels(n)), j = (0, r.e7)([h.Z], () => h.Z.getCategories(n)), S = (0, g.Fo)(n, j, v, s), R = (0, r.e7)([N.Z], () => N.Z.canWithPartialContext(p.Plq.MANAGE_CHANNELS, {
    guildId: n
  })), T = (0, r.e7)([u.ZP], () => null != u.ZP.getCurrentSidebarChannelId(f.oC.CHANNEL_BROWSER)), O = i.useCallback(() => o(""), [o]), A = i.useCallback(() => {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("45094")]).then(l.bind(l, 218613));
      return l => (0, t.jsx)(e, {
        ...l,
        channelType: null,
        guildId: n
      })
    })
  }, [n]);
  return null == c ? null : (0, t.jsx)(t.Fragment, {
    children: (0, t.jsx)("div", {
      className: a()(I.chat, _.container),
      children: (0, t.jsxs)("div", {
        className: a()(_.pageBody),
        children: [(0, t.jsxs)("div", {
          className: _.header,
          children: [(0, t.jsx)(d.SearchBar, {
            className: _.search,
            size: d.SearchBar.Sizes.MEDIUM,
            query: s,
            onChange: e => {
              "" === s && "" !== e && C.default.track(p.rMx.SEARCH_STARTED, {
                search_type: "channel browser"
              }), o(e.toLowerCase())
            },
            onClear: O,
            placeholder: Z.Z.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
          }), R ? (0, t.jsxs)(d.Button, {
            className: _.createButton,
            innerClassName: _.createButtonInner,
            onClick: A,
            children: [(0, t.jsx)(d.PlusSmallIcon, {
              size: "sm",
              color: "currentColor",
              className: _.createIcon
            }), Z.Z.Messages.CREATE]
          }) : null]
        }), (0, t.jsx)(E.Z, {
          className: _.browser,
          channels: v,
          categories: S,
          guild: c,
          hasSidebar: T
        })]
      })
    })
  })
}