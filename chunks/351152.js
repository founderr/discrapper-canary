"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("390547");
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("392711"),
  r = l.n(i),
  u = l("442837"),
  o = l("481060"),
  d = l("984933"),
  c = l("430824"),
  f = l("496675"),
  m = l("771845"),
  S = l("346656"),
  E = l("259580"),
  _ = l("102172"),
  C = l("148381"),
  g = l("689938"),
  N = l("555066"),
  h = l("386475");

function A(e) {
  let {
    guildId: t,
    onClick: l
  } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), s = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
    let {
      channel: t
    } = e;
    return (0, _.canStreamInChannel)(t, c.default, f.default)
  }));
  return null != n && s ? (0, a.jsxs)(o.Clickable, {
    onClick: () => l(t),
    className: h.guildRow,
    children: [(0, a.jsx)(S.default, {
      guild: n,
      size: S.default.Sizes.SMALL,
      className: h.guildIcon
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      className: h.guildName,
      children: n.toString()
    }), (0, a.jsx)(E.default, {
      direction: E.default.Directions.RIGHT,
      className: h.guildArrow
    })]
  }) : null
}

function I(e) {
  let {
    onSelectGuild: t
  } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
  return (0, a.jsx)(C.default, {
    title: g.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
    scrollerClassName: s()(h.guildScroller, N.marginBottom),
    children: r().flatMap(l, e => {
      let {
        guildIds: l
      } = e;
      return l.map(e => (0, a.jsx)(A, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}