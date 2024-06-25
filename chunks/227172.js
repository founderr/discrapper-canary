var l = n(735250),
  i = n(470079),
  s = n(758713),
  a = n(442837),
  r = n(481060),
  o = n(620662),
  c = n(841784),
  u = n(420660),
  d = n(429589),
  h = n(757182),
  m = n(706454),
  E = n(374129),
  p = n(639351),
  g = n(823379),
  f = n(192918),
  C = n(22211),
  _ = n(561308),
  I = n(919394),
  x = n(438226),
  T = n(206295),
  N = n(91140),
  Z = n(297781),
  S = n(591853),
  v = n(265048),
  A = n(981631),
  M = n(689938);
let R = {
  [s.z.DESKTOP]: null,
  [s.z.LINUX]: null,
  [s.z.MACOS]: null,
  [s.z.NINTENDO]: null,
  [s.z.IOS]: null,
  [s.z.ANDROID]: null,
  [s.z.XBOX]: p.Z,
  [s.z.PLAYSTATION]: E.Z
};
t.Z = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: E
  } = e, {
    iconUrl: p,
    iconTitle: j,
    user: L,
    details: O,
    gameTitle: P,
    activity: y
  } = (0, v.F)(n), {
    primaryColor: b,
    secondaryColor: D
  } = (0, T.Z)(p), U = (0, a.e7)([m.default], () => m.default.locale), {
    streamPreviewUrl: k,
    stream: w
  } = (0, C.Z)(n), {
    displayParticipants: H,
    participant1: G,
    participant2: B,
    numOtherParticipants: V
  } = (0, f.Z)(n, 3), F = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), z = i.useCallback(e => {
    if (null == p || null == t || null == L) return;
    let l = V > 0 ? (0, x.VY)({
      entry: n,
      channel: t,
      users: [G, B],
      countOthers: V
    }) : (0, x.HV)(n, t, L);
    return (0, I.SO)({
      entry: n,
      applicationImageSrc: p,
      avatarSrcs: H.map(e => e.getAvatarURL(t.guild_id, 128)),
      description: l,
      timestamp: (0, _.yh)(n, U),
      colors: [b, D],
      channelId: e
    })
  }, [p, t, H, n, U, V, G, B, b, D, L]);
  if (null == L) return null;
  let W = null != n.extra.platform ? R[n.extra.platform] : null,
    Y = (0, l.jsx)(Z.Gk, {
      location: Z.Gt.POPOUT,
      children: N.W.map((e, t) => (0, l.jsx)(e, {
        entry: n
      }, t))
    }),
    K = null == k ? (0, l.jsx)(S.wG, {
      thumbnailSrc: p,
      thumbnailTitle: j,
      channel: t,
      headerIcons: null != W ? (0, l.jsx)(W, {
        color: F.hex(),
        width: 16,
        height: 16
      }) : null,
      userDescription: (0, _.kr)(n) ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: P,
      subtitle: O,
      badges: Y,
      entry: n
    }) : (0, l.jsx)(S.jL, {
      channel: t,
      streamPreviewSrc: k,
      title: n.extra.game_name,
      badges: Y,
      userDescription: M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
      entry: n,
      stream: w
    }),
    q = (0, o.Z)(y, A.xjy.JOIN) || (0, c.Z)(y) ? (0, l.jsx)(d.Z, {
      activity: y,
      user: L,
      ButtonComponent: e => (0, l.jsx)(S.Ll, {
        IconComponent: r.GameControllerIcon,
        ...e
      })
    }) : null,
    X = [q, (0, u.Z)(y) ? (0, l.jsx)(h.Z, {
      activity: y,
      ButtonComponent: e => (0, l.jsx)(S.Ll, {
        IconComponent: r.EyeIcon,
        ...e
      })
    }) : null].filter(g.lm);
  return (0, l.jsxs)(S.yR, {
    children: [K, (0, l.jsx)(S.St, {
      children: (0, l.jsx)(S.WT, {
        closePopout: E,
        user: L,
        channel: t,
        generateReactionImage: z,
        reactionImageAltText: (0, x.IS)(n, L),
        entry: n,
        requestId: s,
        buttons: X
      })
    })]
  })
}