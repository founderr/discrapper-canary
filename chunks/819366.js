"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("512722"),
  a = n.n(s),
  o = n("873546"),
  l = n("442837"),
  u = n("481060"),
  d = n("239091"),
  _ = n("100527"),
  c = n("906732"),
  E = n("797610"),
  I = n("927723"),
  T = n("484459"),
  f = n("103575"),
  S = n("592125"),
  h = n("271383"),
  A = n("430824"),
  m = n("699516"),
  N = n("594174"),
  p = n("797053"),
  O = n("5192"),
  C = n("51144"),
  R = n("377668");

function g(e) {
  let {
    userId: t,
    className: s,
    children: a
  } = e, o = r.useCallback(() => {
    (0, I.showInaccessibleLinkModal)({
      kind: "user"
    })
  }, []), l = r.useCallback(e => {
    null != t && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("25073").then(n.bind(n, "80742"));
      return n => (0, i.jsx)(e, {
        ...n,
        userId: t
      })
    })
  }, [t]);
  return (0, i.jsx)(p.default, {
    className: s,
    onClick: o,
    onContextMenu: l,
    children: a
  })
}

function L(e) {
  let {
    className: t,
    userId: r,
    channelId: s,
    parsedUserId: I,
    content: L,
    inlinePreview: v = !1,
    viewingChannelId: D
  } = e, {
    analyticsLocations: M
  } = (0, c.default)(_.default.USER_MENTION), y = (0, l.useStateFromStores)([N.default], () => N.default.getUser(r)), P = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(s)), U = null != P ? P.getGuildId() : null, b = v || null == y || null == U || null == s ? void 0 : e => {
    null != P && (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("82882"), n.e("12435"), n.e("7717"), n.e("80869")]).then(n.bind(n, "757387"));
      return t => (0, i.jsx)(e, {
        ...t,
        viewingChannelId: D,
        user: y,
        channel: P,
        guildId: U
      })
    })
  }, G = C.default.useName(y), w = (0, l.useStateFromStores)([S.default, h.default, m.default], () => O.default.getNickname(U, s, y)), k = A.default.getGuild(U), B = (0, E.useClydeEnabled)(k, P) && r === R.CLYDE_AI_USER_ID ? R.CLYDE_AI_MENTION_COLOR : null;
  if (null == y) return (0, i.jsx)(g, {
    userId: I,
    className: t,
    children: L
  });
  let V = e => (0, i.jsx)(p.default, {
    className: t,
    onContextMenu: b,
    color: B,
    ...e,
    children: "@".concat(null != w ? w : G)
  });
  return v ? (0, i.jsx)(c.AnalyticsLocationProvider, {
    value: M,
    children: V()
  }) : (0, i.jsx)(c.AnalyticsLocationProvider, {
    value: M,
    children: (0, i.jsx)(u.Popout, {
      preload: null == y ? void 0 : () => (0, T.maybeFetchUserProfileForPopout)(y.id, y.getAvatarURL(U, 80), {
        guildId: null != U ? U : void 0,
        channelId: null != s ? s : void 0
      }),
      renderPopout: e => (a()(null != y, "Unexpected missing user"), (0, i.jsx)(f.default, {
        location: "UserMention",
        userId: y.id,
        guildId: null != U ? U : void 0,
        channelId: s,
        ...e
      })),
      position: o.isMobile ? "top" : "right",
      children: e => V(e)
    })
  })
}