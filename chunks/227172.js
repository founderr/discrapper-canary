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
    user: T
  } = (0, E.useGamingContentData)(n), {
    primaryColor: I,
    secondaryColor: A
  } = (0, f.default)(_), N = (0, s.useStateFromStores)([i.default], () => i.default.locale), {
    streamPreviewUrl: v,
    channel: x
  } = (0, o.default)(n), {
    displayParticipants: M,
    participant1: R,
    participant2: L,
    numOtherParticipants: y
  } = (0, r.default)(n, 3), O = l.useCallback(e => {
    if (null == _ || null == t || null == T) return;
    let a = y > 0 ? (0, c.formatGroupCanvasDescription)({
      entry: n,
      channel: t,
      users: [R, L],
      countOthers: y
    }) : (0, c.formatCanvasDescription)(n, t, T);
    return (0, d.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: _,
      avatarSrcs: M.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: a,
      timestamp: (0, u.formatEntryTimestamp)(n, N),
      colors: [I, A],
      channelId: e
    })
  }, [_, t, M, n, N, y, R, L, I, A, T]);
  if (null == T) return null;
  let j = (0, a.jsx)(m.BadgesContainer, {
      location: m.BadgeLocation.POPOUT,
      children: h.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
        entry: n
      }, t))
    }),
    P = null == v ? (0, a.jsx)(p.PopoutContent, {
      thumbnailSrc: _,
      channel: t,
      userDescription: (0, u.isEntryActive)(n) ? C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: j,
      entry: n
    }) : (0, a.jsx)(p.StreamingPopoutContent, {
      channel: t,
      streamPreviewSrc: v,
      title: n.extra.game_name,
      badges: j,
      userDescription: C.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n
    });
  return (0, a.jsxs)(p.Popout, {
    children: [P, (0, a.jsx)(p.PopoutInteractionsContainer, {
      children: null != x ? (0, a.jsx)(p.VoiceChannelPopoutReactor, {
        closePopout: S,
        user: T,
        channel: t,
        generateReactionImage: O,
        reactionImageAltText: (0, c.getContentAltText)(n, T),
        entry: n,
        requestId: g,
        voiceChannel: x,
        isStreaming: null != v
      }) : (0, a.jsx)(p.PopoutReactor, {
        closePopout: S,
        user: T,
        channel: t,
        generateReactionImage: O,
        reactionImageAltText: (0, c.getContentAltText)(n, T),
        entry: n,
        requestId: g
      })
    })]
  })
}