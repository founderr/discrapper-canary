"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("758713"),
  i = n("581663"),
  r = n("499237"),
  o = n("442837"),
  u = n("481060"),
  d = n("620662"),
  c = n("841784"),
  f = n("420660"),
  h = n("429589"),
  m = n("757182"),
  p = n("706454"),
  E = n("374129"),
  C = n("639351"),
  g = n("823379"),
  S = n("192918"),
  _ = n("22211"),
  T = n("561308"),
  I = n("919394"),
  A = n("438226"),
  v = n("206295"),
  N = n("91140"),
  x = n("297781"),
  M = n("591853"),
  R = n("265048"),
  y = n("981631"),
  L = n("689938");
let O = {
  [s.PlatformType.DESKTOP]: null,
  [s.PlatformType.XBOX]: C.default,
  [s.PlatformType.PLAYSTATION]: E.default
};
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: E
  } = e, {
    iconUrl: C,
    iconTitle: j,
    user: P,
    details: D,
    gameTitle: b,
    activity: U
  } = (0, R.useGamingContentData)(n), {
    primaryColor: F,
    secondaryColor: w
  } = (0, v.default)(C), k = (0, o.useStateFromStores)([p.default], () => p.default.locale), {
    streamPreviewUrl: H,
    stream: B
  } = (0, _.default)(n), {
    displayParticipants: G,
    participant1: V,
    participant2: W,
    numOtherParticipants: Y
  } = (0, S.default)(n, 3), z = (0, u.useToken)(u.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), K = l.useCallback(e => {
    if (null == C || null == t || null == P) return;
    let a = Y > 0 ? (0, A.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [V, W],
      countOthers: Y
    }) : (0, A.formatCanvasDescription)(n, t, P);
    return (0, I.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: C,
      avatarSrcs: G.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, T.formatEntryTimestamp)(n, k),
      colors: [F, w],
      channelId: e
    })
  }, [C, t, G, n, k, Y, V, W, F, w, P]);
  if (null == P) return null;
  let Z = null != n.extra.platform ? O[n.extra.platform] : null,
    q = (0, a.jsx)(x.BadgesContainer, {
      location: x.BadgeLocation.POPOUT,
      children: N.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    X = null == H ? (0, a.jsx)(M.PopoutContent, {
      thumbnailSrc: C,
      thumbnailTitle: j,
      channel: t,
      headerIcons: null != Z ? (0, a.jsx)(Z, {
        color: z.hex(),
        width: 16,
        height: 16
      }) : null,
      userDescription: (0, T.isEntryActive)(n) ? L.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : L.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: b,
      subtitle: D,
      badges: q,
      entry: n
    }) : (0, a.jsx)(M.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: H,
      title: n.extra.game_name,
      badges: q,
      userDescription: L.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: B
    }),
    Q = (0, d.default)(U, y.ActivityFlags.JOIN) || (0, c.default)(U) ? (0, a.jsx)(h.default, {
      activity: U,
      user: P,
      ButtonComponent: e => (0, a.jsx)(M.PrimaryActionButton, {
        IconComponent: r.GameControllerIcon,
        ...e
      })
    }) : null,
    J = [Q, (0, f.default)(U) ? (0, a.jsx)(m.default, {
      activity: U,
      ButtonComponent: e => (0, a.jsx)(M.PrimaryActionButton, {
        IconComponent: i.EyeIcon,
        ...e
      })
    }) : null].filter(g.isNotNullish);
  return (0, a.jsxs)(M.Popout, {
    children: [X, (0, a.jsx)(M.PopoutInteractionsContainer, {
      children: (0, a.jsx)(M.Reactor, {
        closePopout: E,
        user: P,
        channel: t,
        generateReactionImage: K,
        reactionImageAltText: (0, A.getContentAltText)(n, P),
        entry: n,
        requestId: s,
        buttons: J
      })
    })]
  })
}