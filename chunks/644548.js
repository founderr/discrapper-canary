n(627494), n(757143);
var l = n(735250),
  i = n(470079),
  s = n(317261),
  a = n(70956),
  r = n(5192),
  o = n(561308),
  c = n(919394),
  u = n(206295),
  d = n(555672),
  h = n(297781),
  m = n(591853),
  E = n(265048),
  p = n(689938);
let g = (e, t, n, l) => {
    let i = function(e) {
        if (e === s._.WEEK) return p.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
      }(l),
      a = r.ZP.getName(t.guild_id, t.id, n),
      o = e.extra.game_name;
    return i.plainFormat({
      gameName: o,
      userName: a
    }).replaceAll("*", "")
  },
  f = (e, t) => p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.Z = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: r
  } = e, {
    iconUrl: C,
    iconTitle: _,
    user: I,
    details: x,
    gameTitle: T
  } = (0, E.F)(n), {
    primaryColor: N,
    secondaryColor: Z
  } = (0, u.Z)(C), S = (0, o.yA)(n), v = (0, o.Nq)(n), A = i.useCallback(e => {
    if (null != I && null != S && null != v && !!(0, d.qy)(v)) return (0, c.SO)({
      entry: n,
      applicationImageSrc: C,
      avatarSrcs: [I.getAvatarURL(t.guild_id, 128)],
      description: g(n, t, I, v),
      timestamp: p.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(S / a.Z.Seconds.HOUR)
      }),
      colors: [N, Z],
      channelId: e
    })
  }, [C, t, S, n, N, v, Z, I]);
  return null != I && null != S && null != v && (0, d.qy)(v) ? (0, l.jsxs)(m.yR, {
    children: [(0, l.jsx)(m.wG, {
      thumbnailSrc: C,
      thumbnailTitle: _,
      channel: t,
      entry: n,
      userDescription: p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: T,
      subtitle: x,
      badges: (0, l.jsx)(h.Gk, {
        location: h.Gt.POPOUT,
        children: d.Hs.map((e, t) => (0, l.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, l.jsx)(m.St, {
      children: (0, l.jsx)(m.WT, {
        closePopout: r,
        user: I,
        channel: t,
        generateReactionImage: A,
        reactionImageAltText: f(n, I),
        entry: n,
        requestId: s
      })
    })]
  }) : null
}