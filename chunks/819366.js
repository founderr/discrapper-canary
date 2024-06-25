"use strict";
n.d(t, {
  Z: function() {
    return v
  }
});
var i = n(735250),
  r = n(470079),
  s = n(512722),
  o = n.n(s),
  a = n(873546),
  l = n(442837),
  u = n(481060),
  _ = n(239091),
  c = n(100527),
  d = n(906732),
  E = n(797610),
  I = n(927723),
  T = n(124072),
  h = n(484459),
  f = n(103575),
  S = n(592125),
  A = n(271383),
  N = n(430824),
  m = n(699516),
  O = n(594174),
  p = n(5192),
  R = n(51144),
  g = n(377668);

function C(e) {
  let {
    userId: t,
    className: s,
    children: o
  } = e, a = r.useCallback(() => {
    (0, I.k)({
      kind: "user"
    })
  }, []), l = r.useCallback(e => {
    if (null != t)(0, _.jW)(e, async () => {
      let {
        default: e
      } = await n.e("25073").then(n.bind(n, 80742));
      return n => (0, i.jsx)(e, {
        ...n,
        userId: t
      })
    })
  }, [t]);
  return (0, i.jsx)(T.Z, {
    className: s,
    onClick: a,
    onContextMenu: l,
    children: o
  })
}

function v(e) {
  let {
    className: t,
    userId: r,
    channelId: s,
    parsedUserId: I,
    content: v,
    inlinePreview: L = !1,
    viewingChannelId: D
  } = e, {
    analyticsLocations: M
  } = (0, d.ZP)(c.Z.USER_MENTION), P = (0, l.e7)([O.default], () => O.default.getUser(r)), y = (0, l.e7)([S.Z], () => S.Z.getChannel(s)), U = null != y ? y.getGuildId() : null, b = L || null == P || null == U || null == s ? void 0 : e => {
    null != y && (0, _.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("32006"), n.e("12435"), n.e("69971")]).then(n.bind(n, 757387));
      return t => (0, i.jsx)(e, {
        ...t,
        viewingChannelId: D,
        user: P,
        channel: y,
        guildId: U
      })
    })
  }, G = R.ZP.useName(P), w = (0, l.e7)([S.Z, A.ZP, m.Z], () => p.ZP.getNickname(U, s, P)), x = N.Z.getGuild(U), B = (0, E.Ib)(x, y) && r === g.fL ? g.jM : null;
  if (null == P) return (0, i.jsx)(C, {
    userId: I,
    className: t,
    children: v
  });
  let k = e => (0, i.jsx)(T.Z, {
    className: t,
    onContextMenu: b,
    color: B,
    ...e,
    children: "@".concat(null != w ? w : G)
  });
  return L ? (0, i.jsx)(d.Gt, {
    value: M,
    children: k()
  }) : (0, i.jsx)(d.Gt, {
    value: M,
    children: (0, i.jsx)(u.Popout, {
      preload: null == P ? void 0 : () => (0, h.W)(P.id, P.getAvatarURL(U, 80), {
        guildId: null != U ? U : void 0,
        channelId: null != s ? s : void 0
      }),
      renderPopout: e => (o()(null != P, "Unexpected missing user"), (0, i.jsx)(f.Z, {
        location: "UserMention",
        userId: P.id,
        guildId: null != U ? U : void 0,
        channelId: s,
        ...e
      })),
      position: a.tq ? "top" : "right",
      children: e => k(e)
    })
  })
}