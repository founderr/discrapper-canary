t.d(n, {
  F9: function() {
    return g
  },
  Zb: function() {
    return v
  },
  e$: function() {
    return T
  },
  ll: function() {
    return N
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
  m = t(41899);

function v(e) {
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
    className: r()(m.container, {
      [m.selected]: t
    }, {
      [m.openOnHover]: o
    }),
    children: [n, a && (0, l.jsx)("div", {
      className: m.reply,
      children: (0, l.jsx)(i.ArrowAngleLeftUpIcon, {
        size: "md",
        color: "currentColor",
        className: m.icon
      })
    })]
  })
}

function T(e) {
  let {
    children: n
  } = e;
  return (0, l.jsx)("div", {
    className: m.infoSection,
    children: n
  })
}

function x(e) {
  let {
    users: n,
    guildId: t
  } = e;
  return (0, l.jsx)("div", {
    className: m.facePile,
    children: n.map((e, a) => {
      let r = (0, l.jsx)(i.Avatar, {
        src: e.getAvatarURL(t, 80),
        size: i.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return a === n.length - 1 ? (0, l.jsx)("div", {
        className: m.facePileItem,
        children: r
      }, e.id) : (0, l.jsx)(d.ZP, {
        width: 16,
        height: 16,
        className: m.facePileItem,
        mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: r
      }, e.id)
    })
  })
}

function g(e) {
  let {
    guildId: n,
    channelId: t,
    entry: a,
    maxAvatars: r = 3
  } = e, d = a.author_id, f = (0, o.e7)([c.default], () => c.default.getUser(d)), {
    displayParticipants: v,
    numOtherParticipants: T
  } = (0, _.Z)(a, r), g = (0, o.e7)([u.ZP], () => u.ZP.getMember(n, d)), N = (0, o.e7)([s.Z], () => {
    var e;
    return (null == g ? void 0 : g.colorRoleId) != null ? null === (e = s.Z.getRole(n, g.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [n, g]);
  if (null == f) return null;
  let h = null == g ? void 0 : g.colorString,
    I = E.ZP.getName(n, t, f);
  return (0, l.jsxs)("div", {
    className: m.userSection,
    children: [(0, l.jsx)(x, {
      users: v,
      guildId: n
    }), (0, l.jsx)(i.NameWithRole, {
      color: null != h ? h : void 0,
      roleName: N,
      name: I,
      className: m.userName
    }), T > 0 ? (0, l.jsx)("div", {
      className: m.additionalParticipantBadge,
      children: (0, l.jsxs)(i.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: m.additionalParticipantBadgeText,
        children: ["+", T]
      })
    }) : null]
  })
}

function N(e) {
  let {
    children: n
  } = e;
  return (0, l.jsx)(i.Heading, {
    variant: "heading-sm/normal",
    className: m.contentDescription,
    lineClamp: 1,
    children: n
  })
}