"use strict";
n.r(t), n.d(t, {
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
var a = n("735250");
n("470079");
var r = n("120356"),
  l = n.n(r),
  i = n("442837"),
  o = n("481060"),
  s = n("271383"),
  u = n("430824"),
  d = n("594174"),
  c = n("351167"),
  g = n("806519"),
  f = n("5192"),
  m = n("192918"),
  E = n("687694"),
  T = n("571425");

function _(e) {
  let {
    children: t,
    selected: n
  } = e, {
    showReplyIcon: r,
    openOnHover: i
  } = (0, E.useMemberListHoverInteractions)({
    location: "ContentCard"
  });
  return (0, a.jsxs)("div", {
    className: l()(T.container, {
      [T.selected]: n
    }, {
      [T.openOnHover]: i
    }),
    children: [t, r && (0, a.jsx)("div", {
      className: T.reply,
      children: (0, a.jsx)(c.default, {
        className: T.icon
      })
    })]
  })
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: T.infoSection,
    children: t
  })
}

function v(e) {
  let {
    users: t,
    guildId: n
  } = e;
  return (0, a.jsx)("div", {
    className: T.facePile,
    children: t.map((e, r) => {
      let l = (0, a.jsx)(o.Avatar, {
        src: e.getAvatarURL(n, 80),
        size: o.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return r === t.length - 1 ? (0, a.jsx)("div", {
        className: T.facePileItem,
        children: l
      }, e.id) : (0, a.jsx)(g.default, {
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
    channelId: n,
    entry: r,
    maxAvatars: l = 3
  } = e, c = r.author_id, g = (0, i.useStateFromStores)([d.default], () => d.default.getUser(c)), {
    displayParticipants: E,
    numOtherParticipants: _
  } = (0, m.default)(r, l), h = (0, i.useStateFromStores)([s.default], () => s.default.getMember(t, c)), I = (0, i.useStateFromStores)([u.default], () => {
    var e;
    return (null == h ? void 0 : h.colorRoleId) != null ? null === (e = u.default.getRole(t, h.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, h]);
  if (null == g) return null;
  let N = null == h ? void 0 : h.colorString,
    x = f.default.getName(t, n, g);
  return (0, a.jsxs)("div", {
    className: T.userSection,
    children: [(0, a.jsx)(v, {
      users: E,
      guildId: t
    }), (0, a.jsx)(o.NameWithRole, {
      color: null != N ? N : void 0,
      roleName: I,
      name: x,
      className: T.userName
    }), _ > 0 ? (0, a.jsx)("div", {
      className: T.additionalParticipantBadge,
      children: (0, a.jsxs)(o.Text, {
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
  return (0, a.jsx)(o.Heading, {
    variant: "heading-sm/normal",
    className: T.contentDescription,
    lineClamp: 1,
    children: t
  })
}