"use strict";
n.r(t), n.d(t, {
  FriendRow: function() {
    return C
  },
  default: function() {
    return g
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("239091"),
  r = n("129861"),
  o = n("906732"),
  u = n("158776"),
  d = n("785717"),
  c = n("726059"),
  f = n("171368"),
  h = n("981631"),
  m = n("689938"),
  p = n("305944");
let E = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_40);

function C(e) {
  let {
    user: t,
    status: o,
    onSelect: d
  } = e, c = (0, l.useStateFromStores)([u.default], () => u.default.isMobileOnline(t.id));
  return (0, a.jsxs)(s.Clickable, {
    className: p.listRow,
    onClick: d,
    onContextMenu: e => {
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("69220")]).then(n.bind(n, "881351"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      })
    },
    children: [(0, a.jsx)(s.Avatar, {
      src: t.getAvatarURL(void 0, E),
      "aria-label": t.username,
      size: s.AvatarSizes.SIZE_40,
      status: o,
      isMobile: c,
      className: p.listAvatar
    }), (0, a.jsx)(r.default, {
      user: t,
      className: p.listName,
      discriminatorClass: p.listDiscriminator
    })]
  })
}

function g(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    mutualFriends: l
  } = (0, c.default)(t.id), {
    analyticsLocations: i
  } = (0, o.default)(), {
    guildId: r,
    channelId: u,
    messageId: E,
    roleId: g
  } = (0, d.useUserProfileAnalyticsContext)(), S = () => {
    n(), (0, f.openUserProfileModal)({
      userId: t.id,
      guildId: r,
      channelId: u,
      messageId: E,
      roleId: g,
      sourceAnalyticsLocations: i,
      analyticsLocation: {
        section: h.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: p.listScroller,
    fade: !0,
    children: null == l ? (0, a.jsx)("div", {
      className: p.empty,
      children: (0, a.jsx)(s.Spinner, {})
    }) : 0 === l.length ? (0, a.jsxs)("div", {
      className: p.empty,
      children: [(0, a.jsx)("div", {
        className: p.emptyIconFriends
      }), (0, a.jsx)("div", {
        className: p.emptyText,
        children: m.default.Messages.NO_MUTUAL_FRIENDS
      })]
    }) : l.map(e => {
      let {
        key: t,
        user: n,
        status: l
      } = e;
      return (0, a.jsx)(C, {
        user: n,
        status: l,
        onSelect: S
      }, t)
    })
  })
}