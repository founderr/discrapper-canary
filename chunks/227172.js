"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("706454"),
  r = n("192918"),
  o = n("22211"),
  u = n("561308"),
  d = n("919394"),
  c = n("438226"),
  f = n("206295"),
  h = n("91140"),
  m = n("297781"),
  p = n("591853"),
  E = n("265048"),
  C = n("689938");
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: g,
    closePopout: S
  } = e, {
    iconUrl: _,
    iconTitle: T,
    user: I,
    details: A,
    gameTitle: v
  } = (0, E.useGamingContentData)(n), {
    primaryColor: N,
    secondaryColor: x
  } = (0, f.default)(_), M = (0, s.useStateFromStores)([i.default], () => i.default.locale), {
    streamPreviewUrl: R,
    stream: y,
    channel: L
  } = (0, o.default)(n), {
    displayParticipants: O,
    participant1: j,
    participant2: P,
    numOtherParticipants: D
  } = (0, r.default)(n, 3), b = l.useCallback(e => {
    if (null == _ || null == t || null == I) return;
    let a = D > 0 ? (0, c.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [j, P],
      countOthers: D
    }) : (0, c.formatCanvasDescription)(n, t, I);
    return (0, d.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: _,
      avatarSrcs: O.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, u.formatEntryTimestamp)(n, M),
      colors: [N, x],
      channelId: e
    })
  }, [_, t, O, n, M, D, j, P, N, x, I]);
  if (null == I) return null;
  let U = (0, a.jsx)(m.BadgesContainer, {
      location: m.BadgeLocation.POPOUT,
      children: h.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    F = null == R ? (0, a.jsx)(p.PopoutContent, {
      thumbnailSrc: _,
      thumbnailTitle: T,
      channel: t,
      userDescription: (0, u.isEntryActive)(n) ? C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: v,
      subtitle: A,
      badges: U,
      entry: n
    }) : (0, a.jsx)(p.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: R,
      title: n.extra.game_name,
      badges: U,
      userDescription: C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: y
    });
  return (0, a.jsxs)(p.Popout, {
    children: [F, (0, a.jsx)(p.PopoutInteractionsContainer, {
      children: null != L ? (0, a.jsx)(p.VoiceChannelPopoutReactor, {
        closePopout: S,
        user: I,
        channel: t,
        generateReactionImage: b,
        reactionImageAltText: (0, c.getContentAltText)(n, I),
        entry: n,
        requestId: g,
        voiceChannel: L,
        isStreaming: null != R
      }) : (0, a.jsx)(p.PopoutReactor, {
        closePopout: S,
        user: I,
        channel: t,
        generateReactionImage: b,
        reactionImageAltText: (0, c.getContentAltText)(n, I),
        entry: n,
        requestId: g
      })
    })]
  })
}