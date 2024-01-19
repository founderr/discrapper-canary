"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
}), l("881410");
var n = l("37983");
l("884691");
var s = l("414456"),
  a = l.n(s),
  r = l("917351"),
  i = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("923959"),
  c = l("305961"),
  f = l("957255"),
  m = l("677099"),
  S = l("476263"),
  h = l("461380"),
  C = l("223913"),
  E = l("644169"),
  p = l("782340"),
  N = l("770420"),
  g = l("305013");

function _(e) {
  let {
    guildId: t,
    onClick: l
  } = e, s = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), a = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
    let {
      channel: t
    } = e;
    return (0, C.canStreamInChannel)(t, c.default, f.default)
  }));
  return null != s && a ? (0, n.jsxs)(o.Clickable, {
    onClick: () => l(t),
    className: g.guildRow,
    children: [(0, n.jsx)(S.default, {
      guild: s,
      size: S.default.Sizes.SMALL,
      className: g.guildIcon
    }), (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      className: g.guildName,
      children: s.toString()
    }), (0, n.jsx)(h.default, {
      direction: h.default.Directions.RIGHT,
      className: g.guildArrow
    })]
  }) : null
}

function x(e) {
  let {
    onSelectGuild: t
  } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
  return (0, n.jsx)(E.default, {
    title: p.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
    scrollerClassName: a(g.guildScroller, N.marginBottom),
    children: i.flatMap(l, e => {
      let {
        guildIds: l
      } = e;
      return l.map(e => (0, n.jsx)(_, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}