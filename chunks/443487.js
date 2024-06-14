"use strict";
a.r(t), a.d(t, {
  Card: function() {
    return _
  },
  CardInfoSection: function() {
    return h
  },
  CardParticipants: function() {
    return I
  },
  CardTitle: function() {
    return N
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  l = a.n(r),
  i = a("442837"),
  o = a("481060"),
  s = a("271383"),
  u = a("430824"),
  d = a("594174"),
  c = a("351167"),
  g = a("806519"),
  f = a("5192"),
  E = a("192918"),
  m = a("687694"),
  T = a("571425");

function _(e) {
  let {
    children: t,
    selected: a
  } = e, {
    showReplyIcon: r,
    openOnHover: i
  } = (0, m.useMemberListHoverInteractions)({
    location: "ContentCard"
  });
  return (0, n.jsxs)("div", {
    className: l()(T.container, {
      [T.selected]: a
    }, {
      [T.openOnHover]: i
    }),
    children: [t, r && (0, n.jsx)("div", {
      className: T.reply,
      children: (0, n.jsx)(c.default, {
        className: T.icon
      })
    })]
  })
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: T.infoSection,
    children: t
  })
}

function v(e) {
  let {
    users: t,
    guildId: a
  } = e;
  return (0, n.jsx)("div", {
    className: T.facePile,
    children: t.map((e, r) => {
      let l = (0, n.jsx)(o.Avatar, {
        src: e.getAvatarURL(a, 80),
        size: o.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return r === t.length - 1 ? (0, n.jsx)("div", {
        className: T.facePileItem,
        children: l
      }, e.id) : (0, n.jsx)(g.default, {
        width: 16,
        height: 16,
        className: T.facePileItem,
        mask: g.default.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: l
      }, e.id)
    })
  })
}

function I(e) {
  let {
    guildId: t,
    channelId: a,
    entry: r,
    maxAvatars: l = 3
  } = e, c = r.author_id, g = (0, i.useStateFromStores)([d.default], () => d.default.getUser(c)), {
    displayParticipants: m,
    numOtherParticipants: _
  } = (0, E.default)(r, l), h = (0, i.useStateFromStores)([s.default], () => s.default.getMember(t, c)), I = (0, i.useStateFromStores)([u.default], () => {
    var e;
    return (null == h ? void 0 : h.colorRoleId) != null ? null === (e = u.default.getRole(t, h.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, h]);
  if (null == g) return null;
  let N = null == h ? void 0 : h.colorString,
    x = f.default.getName(t, a, g);
  return (0, n.jsxs)("div", {
    className: T.userSection,
    children: [(0, n.jsx)(v, {
      users: m,
      guildId: t
    }), (0, n.jsx)(o.NameWithRole, {
      color: null != N ? N : void 0,
      roleName: I,
      name: x,
      className: T.userName
    }), _ > 0 ? (0, n.jsx)("div", {
      className: T.additionalParticipantBadge,
      children: (0, n.jsxs)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: T.additionalParticipantBadgeText,
        children: ["+", _]
      })
    }) : null]
  })
}

function N(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)(o.Heading, {
    variant: "heading-sm/normal",
    className: T.contentDescription,
    lineClamp: 1,
    children: t
  })
}