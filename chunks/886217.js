n(627494), n(757143);
var l = n(735250),
  i = n(470079),
  s = n(317261),
  a = n(442837),
  r = n(594174),
  o = n(823379),
  c = n(5192),
  u = n(561308),
  d = n(256726),
  h = n(206295),
  m = n(278399),
  E = n(297781),
  p = n(591853),
  g = n(410441),
  f = n(689938);
let C = (e, t, n, l) => {
    let i = function(e) {
        if (e === s._.WEEK) return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT
      }(l),
      a = c.ZP.getName(t.guild_id, t.id, n),
      r = e.extra.artist.name;
    return i.plainFormat({
      artist: r,
      userName: a
    }).replaceAll("*", "")
  },
  _ = (e, t) => f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
    username: t.username,
    artist: e.extra.artist.name
  });
t.Z = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: c
  } = e, {
    parent_title: I,
    provider: x,
    image_url: T
  } = n.extra.media, N = n.extra.artist.name, Z = (0, a.e7)([r.default], () => r.default.getUser(n.author_id)), {
    primaryColor: S,
    secondaryColor: v
  } = (0, h.Z)(T), A = (0, u.Nq)(n), M = i.useCallback(() => {
    if (null == Z || !(0, o.Hi)(A, m.y9)) return;
    let e = C(n, t, Z, A);
    return (0, d.CR)({
      user: Z,
      channel: t,
      mediaImageSrc: T,
      artist: N,
      description: e,
      colors: [S, v],
      badges: (0, d.UU)(n)
    })
  }, [T, N, t, n, S, A, v, Z]);
  return null != Z && (0, o.Hi)(A, m.y9) ? (0, l.jsxs)(p.yR, {
    children: [(0, l.jsx)(p.wG, {
      thumbnailSrc: T,
      channel: t,
      entry: n,
      headerIcons: (0, l.jsx)(g.Z, {
        provider: x
      }),
      userDescription: f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
      title: I,
      subtitle: N,
      badges: (0, l.jsx)(E.Gk, {
        location: E.Gt.POPOUT,
        children: m.Ho.map((e, t) => (0, l.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, l.jsx)(p.St, {
      children: (0, l.jsx)(p.WT, {
        closePopout: c,
        user: Z,
        channel: t,
        generateReactionImage: M,
        reactionImageAltText: _(n, Z),
        entry: n,
        requestId: s
      })
    })]
  }) : null
}