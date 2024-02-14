"use strict";
n.r(t), n.d(t, {
  FriendRow: function() {
    return E
  },
  default: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("272030"),
  o = n("327037"),
  u = n("145079"),
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
  } = e, o = (0, s.useStateFromStores)([d.default], () => d.default.isMobileOnline(t.id));
  return (0, l.jsxs)(i.Clickable, {
    className: p.listRow,
    onClick: () => a(t.id),
    onContextMenu: e => r(e, t),
    children: [(0, l.jsx)(i.Avatar, {
      src: t.getAvatarURL(void 0, 40),
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_40,
      status: n,
      isMobile: o,
      className: p.listAvatar
    }), (0, l.jsx)(u.default, {
      user: t,
      className: p.listName,
      discriminatorClass: p.listDiscriminator
    })]
  })
}

function S(e) {
  let t, {
      user: u,
      onClose: d
    } = e,
    S = (0, s.useStateFromStores)([c.default], () => c.default.getMutualFriends(u.id));

  function g(e) {
    d(), (0, f.openUserProfileModal)({
      userId: e,
      analyticsLocation: {
        section: h.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS
      }
    })
  }

  function C(e, t) {
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
    null == S && (0, o.fetchMutualFriends)(u.id)
  }, [S, u.id]), t = null == S ? (0, l.jsx)("div", {
    className: p.empty,
    children: (0, l.jsx)(i.Spinner, {})
  }) : 0 === S.length ? (0, l.jsxs)("div", {
    className: p.empty,
    children: [(0, l.jsx)("div", {
      className: p.emptyIconFriends
    }), (0, l.jsx)("div", {
      className: p.emptyText,
      children: m.default.Messages.NO_MUTUAL_FRIENDS
    })]
  }) : S.map(e => (0, l.jsx)(E, {
    user: e.user,
    status: e.status,
    onSelect: g,
    onContextMenu: C
  }, e.key)), (0, l.jsx)(i.ScrollerThin, {
    className: p.listScroller,
    fade: !0,
    children: t
  })
}