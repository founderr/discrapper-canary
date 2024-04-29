"use strict";
n.r(t), n.d(t, {
  Card: function() {
    return E
  },
  CardInfoSection: function() {
    return C
  },
  CardParticipants: function() {
    return S
  },
  CardTitle: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("271383"),
  d = n("430824"),
  c = n("594174"),
  f = n("806519"),
  h = n("823379"),
  m = n("5192"),
  p = n("288564");

function E(e) {
  let {
    children: t,
    selected: n
  } = e;
  return (0, a.jsx)("div", {
    className: i()(p.container, {
      [p.selected]: n
    }),
    children: t
  })
}

function C(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: p.infoSection,
    children: t
  })
}

function g(e) {
  let {
    users: t,
    guildId: n
  } = e;
  return (0, a.jsx)("div", {
    className: p.facePile,
    children: t.map((e, l) => {
      let s = (0, a.jsx)(o.Avatar, {
        src: e.getAvatarURL(n, 80),
        size: o.AvatarSizes.SIZE_16,
        "aria-label": "avatar"
      });
      return l === t.length - 1 ? (0, a.jsx)("div", {
        className: p.facePileItem,
        children: s
      }, e.id) : (0, a.jsx)(f.default, {
        width: 16,
        height: 16,
        className: p.facePileItem,
        mask: f.default.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: s
      }, e.id)
    })
  })
}

function S(e) {
  let {
    guildId: t,
    channelId: n,
    entry: s,
    maxAvatars: i = 3
  } = e, f = s.author_id, E = (0, r.useStateFromStores)([c.default], () => c.default.getUser(f)), C = (0, r.useStateFromStoresArray)([c.default], () => s.participants.map(e => c.default.getUser(e)).filter(h.isNotNullish), [s.participants]), S = l.useMemo(() => null == E ? [] : [...C.filter(e => e.id !== E.id), E].slice(-i), [i, C, E]), _ = C.length - 1, T = (0, r.useStateFromStores)([u.default], () => u.default.getMember(t, f)), I = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return (null == T ? void 0 : T.colorRoleId) != null ? null === (e = d.default.getRole(t, T.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, T]);
  if (null == E) return null;
  let A = null == T ? void 0 : T.colorString,
    N = m.default.getName(t, n, E);
  return (0, a.jsxs)("div", {
    className: p.userSection,
    children: [(0, a.jsx)(g, {
      users: S,
      guildId: t
    }), (0, a.jsx)(o.NameWithRole, {
      color: null != A ? A : void 0,
      roleName: I,
      name: N,
      className: p.userName
    }), _ > 0 ? (0, a.jsx)("div", {
      className: p.additionalParticipantBadge,
      children: (0, a.jsxs)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: p.additionalParticipantBadgeText,
        children: ["+", _]
      })
    }) : null]
  })
}

function _(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(o.Heading, {
    variant: "heading-sm/normal",
    className: p.contentDescription,
    lineClamp: 1,
    children: t
  })
}