n.d(t, {
  T: function() {
    return f
  },
  Z: function() {
    return C
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(239091),
  r = n(129861),
  o = n(906732),
  c = n(158776),
  u = n(785717),
  d = n(726059),
  h = n(171368),
  m = n(981631),
  p = n(689938),
  E = n(667589);
let g = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_40);

function f(e) {
  let {
    user: t,
    status: o,
    onSelect: u
  } = e, d = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
  return (0, l.jsxs)(s.Clickable, {
    className: E.listRow,
    onClick: u,
    onContextMenu: e => {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, l.jsx)(e, {
          ...n,
          user: t
        })
      })
    },
    children: [(0, l.jsx)(s.Avatar, {
      src: t.getAvatarURL(void 0, g),
      "aria-label": t.username,
      size: s.AvatarSizes.SIZE_40,
      status: o,
      isMobile: d,
      className: E.listAvatar
    }), (0, l.jsx)(r.Z, {
      user: t,
      className: E.listName,
      discriminatorClass: E.listDiscriminator
    })]
  })
}

function C(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    mutualFriends: i
  } = (0, d.Z)(t.id), {
    analyticsLocations: a
  } = (0, o.ZP)(), {
    guildId: r,
    channelId: c,
    messageId: g,
    roleId: C
  } = (0, u.KZ)(), _ = e => {
    n(), (0, h.openUserProfileModal)({
      userId: e,
      guildId: r,
      channelId: c,
      messageId: g,
      roleId: C,
      sourceAnalyticsLocations: a,
      analyticsLocation: {
        section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  };
  return (0, l.jsx)(s.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: null == i ? (0, l.jsx)("div", {
      className: E.empty,
      children: (0, l.jsx)(s.Spinner, {})
    }) : 0 === i.length ? (0, l.jsxs)("div", {
      className: E.empty,
      children: [(0, l.jsx)("div", {
        className: E.emptyIconFriends
      }), (0, l.jsx)("div", {
        className: E.emptyText,
        children: p.Z.Messages.NO_MUTUAL_FRIENDS
      })]
    }) : i.map(e => {
      let {
        key: t,
        user: n,
        status: i
      } = e;
      return (0, l.jsx)(f, {
        user: n,
        status: i,
        onSelect: () => _(n.id)
      }, t)
    })
  })
}