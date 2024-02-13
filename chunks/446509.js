"use strict";
n.r(t), n.d(t, {
  GuildRow: function() {
    return I
  },
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("446674"),
  r = n("819855"),
  o = n("77078"),
  u = n("272030"),
  d = n("54239"),
  c = n("841098"),
  f = n("449918"),
  h = n("239380"),
  m = n("476263"),
  p = n("158998"),
  E = n("713135"),
  g = n("49111"),
  S = n("782340"),
  C = n("568719"),
  _ = n("175321");

function I(e) {
  let {
    guild: t,
    nick: n,
    theme: l,
    onSelect: i,
    onContextMenu: u,
    user: d
  } = e, c = d.hasAvatarForGuild(t.id);
  return (0, a.jsxs)(o.Clickable, {
    focusProps: {
      offset: {
        right: 8
      }
    },
    className: C.listRow,
    onClick: () => i(t.id),
    onContextMenu: e => u(e, t),
    children: [(0, a.jsx)(m.default, {
      tabIndex: -1,
      guild: t,
      showBadge: !0,
      className: s(C.listAvatar, null == t.icon ? _.guildAvatarWithoutIcon : null),
      badgeStrokeColor: (0, f.getColor)((0, r.isThemeDark)(l) ? g.Color.PRIMARY_600 : g.Color.WHITE_500),
      size: m.default.Sizes.MEDIUM,
      active: !0
    }), (0, a.jsxs)("div", {
      className: C.listRowContent,
      children: [(0, a.jsx)("div", {
        className: C.listName,
        children: t.toString()
      }), c || null != n ? (0, a.jsxs)("div", {
        className: _.guildNick,
        children: [c && (0, a.jsx)(o.Avatar, {
          src: d.getAvatarURL(t.id, 16),
          size: o.AvatarSizes.SIZE_16,
          className: _.guildAvatar,
          "aria-hidden": !0
        }), null != n ? n : p.default.getName(d)]
      }) : null]
    })]
  })
}

function T(e) {
  let t, {
      user: l,
      onClose: s
    } = e,
    r = (0, i.useStateFromStores)([E.default], () => E.default.getMutualGuilds(l.id)),
    f = (0, c.default)();

  function m(e) {
    (0, h.transitionToGuild)(e), s(), (0, d.popLayer)()
  }

  function p(e, t) {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("374705").then(n.bind(n, "374705"));
      return n => (0, a.jsx)(e, {
        ...n,
        guild: t
      })
    })
  }
  return t = null == r || 0 === r.length ? (0, a.jsxs)("div", {
    className: C.empty,
    children: [(0, a.jsx)("div", {
      className: C.emptyIconGuilds
    }), (0, a.jsx)("div", {
      className: C.emptyText,
      children: S.default.Messages.NO_MUTUAL_GUILDS
    })]
  }) : r.map(e => {
    let {
      guild: t,
      nick: n
    } = e;
    return (0, a.jsx)(I, {
      user: l,
      guild: t,
      nick: n,
      theme: f,
      onSelect: m,
      onContextMenu: p
    }, t.id)
  }), (0, a.jsx)(o.ScrollerThin, {
    className: C.listScroller,
    fade: !0,
    children: t
  })
}