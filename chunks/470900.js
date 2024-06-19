n.d(t, {
  D: function() {
    return T
  },
  Z: function() {
    return N
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(780384),
  r = n(481060),
  o = n(239091),
  c = n(37234),
  u = n(410030),
  d = n(44315),
  h = n(769654),
  m = n(346656),
  p = n(51144),
  E = n(162267),
  g = n(228168),
  f = n(981631),
  C = n(689938),
  _ = n(667589),
  I = n(722244);
let x = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);

function T(e) {
  let {
    user: t,
    guild: i,
    nick: c,
    theme: u,
    onSelect: h
  } = e, E = t.hasAvatarForGuild(i.id);
  return (0, l.jsxs)(r.Clickable, {
    focusProps: {
      offset: {
        right: 8
      }
    },
    className: _.listRow,
    onClick: h,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("7654"), n.e("33053"), n.e("45397"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("18965"), n.e("22036"), n.e("19589"), n.e("33213"), n.e("95308")]).then(n.bind(n, 545135));
        return t => (0, l.jsx)(e, {
          ...t,
          guild: i
        })
      })
    },
    children: [(0, l.jsx)(m.Z, {
      tabIndex: -1,
      guild: i,
      showBadge: !0,
      className: s()(_.listAvatar, null == i.icon ? I.guildAvatarWithoutIcon : null),
      badgeStrokeColor: (0, d.Lq)((0, a.wj)(u) ? f.Ilk.PRIMARY_600 : f.Ilk.WHITE_500),
      badgeTooltipColor: r.TooltipColors.PRIMARY,
      badgeTooltipDelay: g.vB,
      size: m.Z.Sizes.MEDIUM,
      active: !0
    }), (0, l.jsxs)("div", {
      className: _.listRowContent,
      children: [(0, l.jsx)("div", {
        className: _.listName,
        children: i.toString()
      }), E || null != c ? (0, l.jsxs)("div", {
        className: I.guildNick,
        children: [E && (0, l.jsx)(r.Avatar, {
          src: t.getAvatarURL(i.id, x),
          size: r.AvatarSizes.SIZE_16,
          className: I.guildAvatar,
          "aria-hidden": !0
        }), null != c ? c : p.ZP.getName(t)]
      }) : null]
    })]
  })
}

function N(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    mutualGuilds: i
  } = (0, E.Z)(t.id), s = (0, u.ZP)(), a = e => {
    (0, h.X)(e), n(), (0, c.xf)()
  };
  return (0, l.jsx)(r.ScrollerThin, {
    className: _.listScroller,
    fade: !0,
    children: null == i ? (0, l.jsx)("div", {
      className: _.empty,
      children: (0, l.jsx)(r.Spinner, {})
    }) : 0 === i.length ? (0, l.jsxs)("div", {
      className: _.empty,
      children: [(0, l.jsx)("div", {
        className: _.emptyIconGuilds
      }), (0, l.jsx)("div", {
        className: _.emptyText,
        children: C.Z.Messages.NO_MUTUAL_GUILDS
      })]
    }) : i.map(e => {
      let {
        guild: n,
        nick: i
      } = e;
      return (0, l.jsx)(T, {
        user: t,
        guild: n,
        nick: i,
        theme: s,
        onSelect: () => a(n.id)
      }, n.id)
    })
  })
}