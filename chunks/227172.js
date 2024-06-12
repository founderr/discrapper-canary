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
  g = n("639351"),
  C = n("823379"),
  S = n("192918"),
  _ = n("22211"),
  T = n("561308"),
  I = n("919394"),
  A = n("438226"),
  v = n("206295"),
  x = n("91140"),
  N = n("297781"),
  M = n("591853"),
  y = n("265048"),
  R = n("981631"),
  L = n("689938");
let O = {
  [s.PlatformType.DESKTOP]: null,
  [s.PlatformType.XBOX]: g.default,
  [s.PlatformType.PLAYSTATION]: E.default
};
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: E
  } = e, {
    iconUrl: g,
    iconTitle: j,
    user: P,
    details: D,
    gameTitle: b,
    activity: U
  } = (0, y.useGamingContentData)(n), {
    primaryColor: F,
    secondaryColor: w
  } = (0, v.default)(g), k = (0, o.useStateFromStores)([p.default], () => p.default.locale), {
    streamPreviewUrl: H,
    stream: G
  } = (0, _.default)(n), {
    displayParticipants: B,
    participant1: V,
    participant2: W,
    numOtherParticipants: Y
  } = (0, S.default)(n, 3), z = (0, u.useToken)(u.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), K = l.useCallback(e => {
    if (null == g || null == t || null == P) return;
    let a = Y > 0 ? (0, A.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [V, W],
      countOthers: Y
    }) : (0, A.formatCanvasDescription)(n, t, P);
    return (0, I.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: g,
      avatarSrcs: B.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, T.formatEntryTimestamp)(n, k),
      colors: [F, w],
      channelId: e
    })
  }, [g, t, B, n, k, Y, V, W, F, w, P]);
  if (null == P) return null;
  let Z = null != n.extra.platform ? O[n.extra.platform] : null,
    X = (0, a.jsx)(N.BadgesContainer, {
      location: N.BadgeLocation.POPOUT,
      children: x.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    q = null == H ? (0, a.jsx)(M.PopoutContent, {
      thumbnailSrc: g,
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
      badges: X,
      entry: n
    }) : (0, a.jsx)(M.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: H,
      title: n.extra.game_name,
      badges: X,
      userDescription: L.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: G
    }),
    J = (0, d.default)(U, R.ActivityFlags.JOIN) || (0, c.default)(U) ? (0, a.jsx)(h.default, {
      activity: U,
      user: P,
      ButtonComponent: e => (0, a.jsx)(M.PrimaryActionButton, {
        IconComponent: r.GameControllerIcon,
        ...e
      })
    }) : null,
    Q = [J, (0, f.default)(U) ? (0, a.jsx)(m.default, {
      activity: U,
      ButtonComponent: e => (0, a.jsx)(M.PrimaryActionButton, {
        IconComponent: i.EyeIcon,
        ...e
      })
    }) : null].filter(C.isNotNullish);
  return (0, a.jsxs)(M.Popout, {
    children: [q, (0, a.jsx)(M.PopoutInteractionsContainer, {
      children: (0, a.jsx)(M.Reactor, {
        closePopout: E,
        user: P,
        channel: t,
        generateReactionImage: K,
        reactionImageAltText: (0, A.getContentAltText)(n, P),
        entry: n,
        requestId: s,
        buttons: Q
      })
    })]
  })
}