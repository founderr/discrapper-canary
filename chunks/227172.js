"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("758713"),
  i = n("581663"),
  r = n("442837"),
  o = n("481060"),
  u = n("620662"),
  d = n("841784"),
  c = n("420660"),
  f = n("429589"),
  h = n("757182"),
  m = n("706454"),
  p = n("374129"),
  E = n("639351"),
  C = n("192918"),
  g = n("22211"),
  S = n("561308"),
  _ = n("919394"),
  T = n("438226"),
  I = n("206295"),
  A = n("91140"),
  v = n("297781"),
  N = n("591853"),
  x = n("265048"),
  M = n("981631"),
  R = n("689938");
let y = {
  [s.PlatformType.DESKTOP]: null,
  [s.PlatformType.XBOX]: E.default,
  [s.PlatformType.PLAYSTATION]: p.default
};
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: p
  } = e, {
    iconUrl: E,
    iconTitle: L,
    user: O,
    details: j,
    gameTitle: P,
    activity: D
  } = (0, x.useGamingContentData)(n), {
    primaryColor: b,
    secondaryColor: U
  } = (0, I.default)(E), F = (0, r.useStateFromStores)([m.default], () => m.default.locale), {
    streamPreviewUrl: w,
    stream: k,
    channel: H
  } = (0, g.default)(n), {
    displayParticipants: B,
    participant1: G,
    participant2: V,
    numOtherParticipants: W
  } = (0, C.default)(n, 3), Y = (0, o.useToken)(o.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), z = l.useCallback(e => {
    if (null == E || null == t || null == O) return;
    let a = W > 0 ? (0, T.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [G, V],
      countOthers: W
    }) : (0, T.formatCanvasDescription)(n, t, O);
    return (0, _.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: E,
      avatarSrcs: B.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, S.formatEntryTimestamp)(n, F),
      colors: [b, U],
      channelId: e
    })
  }, [E, t, B, n, F, W, G, V, b, U, O]);
  if (null == O) return null;
  let K = null != n.extra.platform ? y[n.extra.platform] : null,
    Z = (0, a.jsx)(v.BadgesContainer, {
      location: v.BadgeLocation.POPOUT,
      children: A.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    q = null == w ? (0, a.jsx)(N.PopoutContent, {
      thumbnailSrc: E,
      thumbnailTitle: L,
      channel: t,
      headerIcons: null != K ? (0, a.jsx)(K, {
        color: Y.hex(),
        width: 16,
        height: 16
      }) : null,
      userDescription: (0, S.isEntryActive)(n) ? R.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : R.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: P,
      subtitle: j,
      badges: Z,
      entry: n
    }) : (0, a.jsx)(N.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: w,
      title: n.extra.game_name,
      badges: Z,
      userDescription: R.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: k
    }),
    X = (0, u.default)(D, M.ActivityFlags.JOIN) || (0, d.default)(D) ? (0, a.jsx)(f.default, {
      activity: D,
      user: O,
      ButtonComponent: e => (0, a.jsx)(N.PrimaryActionButton, {
        IconComponent: i.EyeIcon,
        ...e
      })
    }) : null,
    Q = (0, c.default)(D) ? (0, a.jsx)(h.default, {
      activity: D,
      ButtonComponent: e => (0, a.jsx)(N.PrimaryActionButton, {
        IconComponent: i.EyeIcon,
        ...e
      })
    }) : null,
    J = null != X || null != Q;
  return (0, a.jsxs)(N.Popout, {
    children: [q, (0, a.jsx)(N.PopoutInteractionsContainer, {
      children: null != H ? (0, a.jsx)(N.VoiceChannelPopoutReactor, {
        closePopout: p,
        user: O,
        channel: t,
        generateReactionImage: z,
        reactionImageAltText: (0, T.getContentAltText)(n, O),
        entry: n,
        requestId: s,
        voiceChannel: H,
        isStreaming: null != w
      }) : J ? (0, a.jsxs)(N.PrimaryActionPopoutReactor, {
        header: null,
        closePopout: p,
        user: O,
        channel: t,
        generateReactionImage: z,
        reactionImageAltText: (0, T.getContentAltText)(n, O),
        entry: n,
        requestId: s,
        children: [X, Q]
      }) : (0, a.jsx)(N.PopoutReactor, {
        closePopout: p,
        user: O,
        channel: t,
        generateReactionImage: z,
        reactionImageAltText: (0, T.getContentAltText)(n, O),
        entry: n,
        requestId: s
      })
    })]
  })
}