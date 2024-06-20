t.d(n, {
  F9: function() {
    return N
  },
  Zb: function() {
    return m
  },
  e$: function() {
    return v
  },
  ll: function() {
    return g
  }
});
var l = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  o = t(442837),
  i = t(481060),
  u = t(271383),
  s = t(430824),
  c = t(594174),
  d = t(806519),
  E = t(5192),
  _ = t(192918),
  f = t(687694),
  T = t(41899);

function m(e) {
  let {
    children: n,
    selected: t
  } = e, {
    showReplyIcon: a,
    openOnHover: o
  } = (0, f.C)({
    location: "ContentCard"
  });
  return (0, l.jsxs)("div", {
    className: r()(T.container, {
      [T.selected]: t
    }, {
      [T.openOnHover]: o
    }),
    children: [n, a && (0, l.jsx)("div", {
      className: T.reply,
      children: (0, l.jsx)(i.ArrowAngleLeftUpIcon, {
        size: "md",
        color: "currentColor",
        className: T.icon
      })
    })]
  })
}

function v(e) {
  let {
    children: n
  } = e;
  return (0, l.jsx)("div", {
    className: T.infoSection,
    children: n
  })
}

function x(e) {
  let {
    users: n,
    guildId: t
  } = e;
  return (0, l.jsx)("div", {
    className: T.facePile,
    children: n.map((e, a) => {
      let r = (0, l.jsx)(i.Avatar, {
        src: e.getAvatarURL(t, 80),
        size: i.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return a === n.length - 1 ? (0, l.jsx)("div", {
        className: T.facePileItem,
        children: r
      }, e.id) : (0, l.jsx)(d.ZP, {
        width: 16,
        height: 16,
        className: T.facePileItem,
        mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: r
      }, e.id)
    })
  })
}

function N(e) {
  let {
    guildId: n,
    channelId: t,
    entry: a,
    maxAvatars: r = 3
  } = e, d = a.author_id, f = (0, o.e7)([c.default], () => c.default.getUser(d)), {
    displayParticipants: m,
    numOtherParticipants: v
  } = (0, _.Z)(a, r), N = (0, o.e7)([u.ZP], () => u.ZP.getMember(n, d)), g = (0, o.e7)([s.Z], () => {
    var e;
    return (null == N ? void 0 : N.colorRoleId) != null ? null === (e = s.Z.getRole(n, N.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [n, N]);
  if (null == f) return null;
  let I = null == N ? void 0 : N.colorString,
    h = E.ZP.getName(n, t, f);
  return (0, l.jsxs)("div", {
    className: T.userSection,
    children: [(0, l.jsx)(x, {
      users: m,
      guildId: n
    }), (0, l.jsx)(i.NameWithRole, {
      color: null != I ? I : void 0,
      roleName: g,
      name: h,
      className: T.userName
    }), v > 0 ? (0, l.jsx)("div", {
      className: T.additionalParticipantBadge,
      children: (0, l.jsxs)(i.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: T.additionalParticipantBadgeText,
        children: ["+", v]
      })
    }) : null]
  })
}

function g(e) {
  let {
    children: n
  } = e;
  return (0, l.jsx)(i.Heading, {
    variant: "heading-sm/normal",
    className: T.contentDescription,
    lineClamp: 1,
    children: n
  })
}