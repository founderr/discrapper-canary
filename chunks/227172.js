"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("758713"),
  i = n("581663"),
  r = n("442837"),
  o = n("481060"),
  u = n("429589"),
  d = n("757182"),
  c = n("706454"),
  f = n("374129"),
  h = n("639351"),
  m = n("192918"),
  p = n("22211"),
  E = n("561308"),
  C = n("919394"),
  g = n("438226"),
  S = n("206295"),
  _ = n("91140"),
  T = n("297781"),
  I = n("591853"),
  A = n("265048"),
  v = n("689938");
let N = {
  [s.PlatformType.DESKTOP]: null,
  [s.PlatformType.XBOX]: h.default,
  [s.PlatformType.PLAYSTATION]: f.default
};
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: f
  } = e, {
    iconUrl: h,
    iconTitle: x,
    user: M,
    details: R,
    gameTitle: y,
    activity: L
  } = (0, A.useGamingContentData)(n), {
    primaryColor: O,
    secondaryColor: j
  } = (0, S.default)(h), P = (0, r.useStateFromStores)([c.default], () => c.default.locale), {
    streamPreviewUrl: D,
    stream: b,
    channel: U
  } = (0, p.default)(n), {
    displayParticipants: F,
    participant1: w,
    participant2: k,
    numOtherParticipants: H
  } = (0, m.default)(n, 3), B = (0, o.useToken)(o.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), G = l.useCallback(e => {
    if (null == h || null == t || null == M) return;
    let a = H > 0 ? (0, g.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [w, k],
      countOthers: H
    }) : (0, g.formatCanvasDescription)(n, t, M);
    return (0, C.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: h,
      avatarSrcs: F.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, E.formatEntryTimestamp)(n, P),
      colors: [O, j],
      channelId: e
    })
  }, [h, t, F, n, P, H, w, k, O, j, M]);
  if (null == M) return null;
  let V = null != n.extra.platform ? N[n.extra.platform] : null,
    W = (0, a.jsx)(T.BadgesContainer, {
      location: T.BadgeLocation.POPOUT,
      children: _.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    Y = null == D ? (0, a.jsx)(I.PopoutContent, {
      thumbnailSrc: h,
      thumbnailTitle: x,
      channel: t,
      headerIcons: null != V ? (0, a.jsx)(V, {
        color: B.hex(),
        width: 16,
        height: 16
      }) : null,
      userDescription: (0, E.isEntryActive)(n) ? v.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : v.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: y,
      subtitle: R,
      badges: W,
      entry: n
    }) : (0, a.jsx)(I.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: D,
      title: n.extra.game_name,
      badges: W,
      userDescription: v.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: b
    }),
    z = (0, a.jsx)(u.default, {
      activity: L,
      user: M,
      ButtonComponent: e => (0, a.jsx)(I.PrimaryActionButton, {
        IconComponent: i.EyeIcon,
        ...e
      })
    }),
    K = (0, a.jsx)(d.default, {
      activity: L,
      ButtonComponent: e => (0, a.jsx)(I.PrimaryActionButton, {
        IconComponent: i.EyeIcon,
        ...e
      })
    });
  return (0, a.jsxs)(I.Popout, {
    children: [Y, (0, a.jsx)(I.PopoutInteractionsContainer, {
      children: null != U ? (0, a.jsx)(I.VoiceChannelPopoutReactor, {
        closePopout: f,
        user: M,
        channel: t,
        generateReactionImage: G,
        reactionImageAltText: (0, g.getContentAltText)(n, M),
        entry: n,
        requestId: s,
        voiceChannel: U,
        isStreaming: null != D
      }) : (0, a.jsxs)(I.PrimaryActionPopoutReactor, {
        header: null,
        closePopout: f,
        user: M,
        channel: t,
        generateReactionImage: G,
        reactionImageAltText: (0, g.getContentAltText)(n, M),
        entry: n,
        requestId: s,
        children: [z, K]
      })
    })]
  })
}