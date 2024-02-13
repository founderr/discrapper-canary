"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("881410");
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  r = l("917351"),
  i = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("923959"),
  c = l("305961"),
  f = l("957255"),
  m = l("677099"),
  S = l("476263"),
  E = l("461380"),
  C = l("223913"),
  h = l("644169"),
  g = l("782340"),
  _ = l("770420"),
  N = l("305013");

function p(e) {
  let {
    guildId: t,
    onClick: l
  } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), s = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
    let {
      channel: t
    } = e;
    return (0, C.canStreamInChannel)(t, c.default, f.default)
  }));
  return null != n && s ? (0, a.jsxs)(o.Clickable, {
    onClick: () => l(t),
    className: N.guildRow,
    children: [(0, a.jsx)(S.default, {
      guild: n,
      size: S.default.Sizes.SMALL,
      className: N.guildIcon
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      className: N.guildName,
      children: n.toString()
    }), (0, a.jsx)(E.default, {
      direction: E.default.Directions.RIGHT,
      className: N.guildArrow
    })]
  }) : null
}

function I(e) {
  let {
    onSelectGuild: t
  } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
  return (0, a.jsx)(h.default, {
    title: g.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
    scrollerClassName: s(N.guildScroller, _.marginBottom),
    children: i.flatMap(l, e => {
      let {
        guildIds: l
      } = e;
      return l.map(e => (0, a.jsx)(p, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}