"use strict";
n.r(t), n.d(t, {
  FriendRow: function() {
    return E
  },
  default: function() {
    return g
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("272030"),
  u = n("327037"),
  o = n("145079"),
  d = n("824563"),
  c = n("713135"),
  f = n("401642"),
  h = n("49111"),
  m = n("782340"),
  p = n("155502");

function E(e) {
  let {
    user: t,
    status: n,
    onSelect: a,
    onContextMenu: r
  } = e, u = (0, s.useStateFromStores)([d.default], () => d.default.isMobileOnline(t.id));
  return (0, l.jsxs)(i.Clickable, {
    className: p.listRow,
    onClick: () => a(t.id),
    onContextMenu: e => r(e, t),
    children: [(0, l.jsx)(i.Avatar, {
      src: t.getAvatarURL(void 0, 40),
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_40,
      status: n,
      isMobile: u,
      className: p.listAvatar
    }), (0, l.jsx)(o.default, {
      user: t,
      className: p.listName,
      discriminatorClass: p.listDiscriminator
    })]
  })
}

function g(e) {
  let t, {
      user: o,
      onClose: d
    } = e,
    g = (0, s.useStateFromStores)([c.default], () => c.default.getMutualFriends(o.id));

  function C(e) {
    d(), (0, f.openUserProfileModal)({
      userId: e,
      analyticsLocation: {
        section: h.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  }

  function S(e, t) {
    (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return n => (0, l.jsx)(e, {
        ...n,
        user: t
      })
    })
  }
  return a.useEffect(() => {
    null == g && (0, u.fetchMutualFriends)(o.id)
  }, [g, o.id]), t = null == g ? (0, l.jsx)("div", {
    className: p.empty,
    children: (0, l.jsx)(i.Spinner, {})
  }) : 0 === g.length ? (0, l.jsxs)("div", {
    className: p.empty,
    children: [(0, l.jsx)("div", {
      className: p.emptyIconFriends
    }), (0, l.jsx)("div", {
      className: p.emptyText,
      children: m.default.Messages.NO_MUTUAL_FRIENDS
    })]
  }) : g.map(e => (0, l.jsx)(E, {
    user: e.user,
    status: e.status,
    onSelect: C,
    onContextMenu: S
  }, e.key)), (0, l.jsx)(i.ScrollerThin, {
    className: p.listScroller,
    fade: !0,
    children: t
  })
}