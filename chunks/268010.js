n(627494), n(757143);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(692547),
  r = n(481060),
  o = n(706454),
  c = n(5192),
  u = n(561308),
  d = n(644810),
  h = n(206295),
  m = n(335326),
  p = n(297781),
  E = n(591853),
  g = n(689938);
let f = (e, t, n) => {
    let l = g.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      i = c.ZP.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return l.plainFormat({
      mediaTitle: s,
      userName: i,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  C = (e, t) => g.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.Z = e => {
  let {
    channel: t,
    entry: n,
    requestId: c,
    closePopout: _
  } = e, {
    user: I,
    mediaImageSrc: x,
    episodeDescription: T
  } = (0, m.Bj)(n), {
    primaryColor: N,
    secondaryColor: Z
  } = (0, h.Z)(x), S = (0, s.e7)([o.default], () => o.default.locale), v = i.useCallback(e => {
    if (null != I && null != x) return (0, d.B)({
      entry: n,
      mediaImageSrc: x,
      avatarSrc: I.getAvatarURL(t.guild_id, 128),
      description: f(n, t, I),
      timestamp: (0, u.yh)(n, S),
      episodeDescription: T,
      colors: [N, Z],
      channelId: e
    })
  }, [t, n, T, S, x, N, Z, I]);
  return null == I ? null : (0, l.jsxs)(E.yR, {
    children: [(0, l.jsx)(E.wG, {
      thumbnailSrc: x,
      channel: t,
      entry: n,
      userDescription: (0, u.kr)(n) ? g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
      title: n.extra.media_title,
      subtitle: n.extra.media_subtitle,
      headerIcons: (0, l.jsx)(r.CrunchyrollNeutralIcon, {
        size: "xs",
        color: a.Z.colors.CONTENT_INVENTORY_OVERLAY_UI_MOD
      }),
      badges: (0, l.jsx)(p.Gk, {
        location: p.Gt.POPOUT,
        children: m.td.map((e, t) => (0, l.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, l.jsx)(E.St, {
      children: (0, l.jsx)(E.WT, {
        closePopout: _,
        user: I,
        channel: t,
        generateReactionImage: v,
        reactionImageAltText: C(n, I),
        entry: n,
        requestId: c
      })
    })]
  })
}