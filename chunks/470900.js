"use strict";
n.r(t), n.d(t, {
  GuildRow: function() {
    return T
  },
  default: function() {
    return I
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("780384"),
  r = n("481060"),
  o = n("239091"),
  u = n("37234"),
  d = n("410030"),
  c = n("44315"),
  f = n("769654"),
  h = n("346656"),
  m = n("51144"),
  p = n("162267"),
  E = n("981631"),
  C = n("689938"),
  g = n("305944"),
  S = n("671794");
let _ = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);

function T(e) {
  let {
    user: t,
    guild: l,
    nick: u,
    theme: d,
    onSelect: f
  } = e, p = t.hasAvatarForGuild(l.id);
  return (0, a.jsxs)(r.Clickable, {
    focusProps: {
      offset: {
        right: 8
      }
    },
    className: g.listRow,
    onClick: f,
    onContextMenu: e => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("70716"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("22036"), n.e("92714"), n.e("69760"), n.e("33213"), n.e("70173")]).then(n.bind(n, "545135"));
        return t => (0, a.jsx)(e, {
          ...t,
          guild: l
        })
      })
    },
    children: [(0, a.jsx)(h.default, {
      tabIndex: -1,
      guild: l,
      showBadge: !0,
      className: s()(g.listAvatar, null == l.icon ? S.guildAvatarWithoutIcon : null),
      badgeStrokeColor: (0, c.getColor)((0, i.isThemeDark)(d) ? E.Color.PRIMARY_600 : E.Color.WHITE_500),
      size: h.default.Sizes.MEDIUM,
      active: !0
    }), (0, a.jsxs)("div", {
      className: g.listRowContent,
      children: [(0, a.jsx)("div", {
        className: g.listName,
        children: l.toString()
      }), p || null != u ? (0, a.jsxs)("div", {
        className: S.guildNick,
        children: [p && (0, a.jsx)(r.Avatar, {
          src: t.getAvatarURL(l.id, _),
          size: r.AvatarSizes.SIZE_16,
          className: S.guildAvatar,
          "aria-hidden": !0
        }), null != u ? u : m.default.getName(t)]
      }) : null]
    })]
  })
}

function I(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    mutualGuilds: l
  } = (0, p.default)(t.id), s = (0, d.default)(), i = e => {
    (0, f.transitionToGuild)(e), n(), (0, u.popLayer)()
  };
  return (0, a.jsx)(r.ScrollerThin, {
    className: g.listScroller,
    fade: !0,
    children: null == l ? (0, a.jsx)("div", {
      className: g.empty,
      children: (0, a.jsx)(r.Spinner, {})
    }) : 0 === l.length ? (0, a.jsxs)("div", {
      className: g.empty,
      children: [(0, a.jsx)("div", {
        className: g.emptyIconGuilds
      }), (0, a.jsx)("div", {
        className: g.emptyText,
        children: C.default.Messages.NO_MUTUAL_GUILDS
      })]
    }) : l.map(e => {
      let {
        guild: n,
        nick: l
      } = e;
      return (0, a.jsx)(T, {
        user: t,
        guild: n,
        nick: l,
        theme: s,
        onSelect: () => i(n.id)
      }, n.id)
    })
  })
}