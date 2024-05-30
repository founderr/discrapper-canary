"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("758713"),
  i = n("442837"),
  r = n("481060"),
  o = n("706454"),
  u = n("374129"),
  d = n("639351"),
  c = n("192918"),
  f = n("22211"),
  h = n("561308"),
  m = n("919394"),
  p = n("438226"),
  E = n("206295"),
  C = n("91140"),
  g = n("297781"),
  S = n("591853"),
  _ = n("265048"),
  T = n("689938");
let I = {
  [s.PlatformType.DESKTOP]: null,
  [s.PlatformType.XBOX]: d.default,
  [s.PlatformType.PLAYSTATION]: u.default
};
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: u
  } = e, {
    iconUrl: d,
    iconTitle: A,
    user: v,
    details: N,
    gameTitle: x
  } = (0, _.useGamingContentData)(n), {
    primaryColor: M,
    secondaryColor: R
  } = (0, E.default)(d), y = (0, i.useStateFromStores)([o.default], () => o.default.locale), {
    streamPreviewUrl: L,
    stream: O,
    channel: j
  } = (0, f.default)(n), {
    displayParticipants: P,
    participant1: D,
    participant2: b,
    numOtherParticipants: U
  } = (0, c.default)(n, 3), F = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), w = l.useCallback(e => {
    if (null == d || null == t || null == v) return;
    let a = U > 0 ? (0, p.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [D, b],
      countOthers: U
    }) : (0, p.formatCanvasDescription)(n, t, v);
    return (0, m.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: d,
      avatarSrcs: P.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, h.formatEntryTimestamp)(n, y),
      colors: [M, R],
      channelId: e
    })
  }, [d, t, P, n, y, U, D, b, M, R, v]);
  if (null == v) return null;
  let k = null != n.extra.platform ? I[n.extra.platform] : null,
    B = (0, a.jsx)(g.BadgesContainer, {
      location: g.BadgeLocation.POPOUT,
      children: C.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    H = null == L ? (0, a.jsx)(S.PopoutContent, {
      thumbnailSrc: d,
      thumbnailTitle: A,
      channel: t,
      headerIcons: null != k ? (0, a.jsx)(k, {
        color: F.hex(),
        width: 16,
        height: 16
      }) : null,
      userDescription: (0, h.isEntryActive)(n) ? T.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : T.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: x,
      subtitle: N,
      badges: B,
      entry: n
    }) : (0, a.jsx)(S.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: L,
      title: n.extra.game_name,
      badges: B,
      userDescription: T.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: O
    });
  return (0, a.jsxs)(S.Popout, {
    children: [H, (0, a.jsx)(S.PopoutInteractionsContainer, {
      children: null != j ? (0, a.jsx)(S.VoiceChannelPopoutReactor, {
        closePopout: u,
        user: v,
        channel: t,
        generateReactionImage: w,
        reactionImageAltText: (0, p.getContentAltText)(n, v),
        entry: n,
        requestId: s,
        voiceChannel: j,
        isStreaming: null != L
      }) : (0, a.jsx)(S.PopoutReactor, {
        closePopout: u,
        user: v,
        channel: t,
        generateReactionImage: w,
        reactionImageAltText: (0, p.getContentAltText)(n, v),
        entry: n,
        requestId: s
      })
    })]
  })
}