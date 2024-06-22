var a = t(735250),
  s = t(470079),
  r = t(442837),
  l = t(481060),
  i = t(239091),
  o = t(592125),
  c = t(720202),
  d = t(594174),
  u = t(602623),
  h = t(260483),
  m = t(314208),
  g = t(124368),
  f = t(670914);

function E(e) {
  let {
    channel: n
  } = e, t = (0, r.e7)([h.Z], () => {
    var e;
    return null !== (e = h.Z.getMemberIdsPreview(n.id)) && void 0 !== e ? e : []
  }), l = (0, r.e7)([h.Z], () => {
    var e;
    return null !== (e = h.Z.getMemberCount(n.id)) && void 0 !== e ? e : 0
  }), i = (0, r.Wu)([d.default], () => t.map(e => d.default.getUser(e)));
  return (s.useEffect(() => {
    t.filter((e, n) => null == i[n]).forEach(e => {
      c.Z.requestMember(n.guild_id, e)
    })
  }, []), 0 === t.length) ? null : (0, a.jsx)(u.Z, {
    className: f.facepile,
    showDefaultAvatarsForNullUsers: !0,
    guildId: n.guild_id,
    users: i,
    count: l,
    max: g.yX
  })
}
n.Z = s.memo(function(e) {
  let {
    threadId: n,
    goToThread: s,
    showChannelName: c
  } = e, d = (0, r.e7)([o.Z], () => o.Z.getChannel(n)), u = (0, r.e7)([o.Z], () => o.Z.getChannel(d.parent_id));
  return (0, a.jsxs)(l.Clickable, {
    className: f.container,
    onClick: e => s(d, e.shiftKey),
    onContextMenu: e => (0, i.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("39285"), t.e("48800"), t.e("40157")]).then(t.bind(t, 422200));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: d
      })
    }),
    children: [(0, a.jsxs)("div", {
      className: f.left,
      children: [(0, a.jsxs)(l.Heading, {
        className: f.threadNameLine,
        variant: "heading-md/semibold",
        children: [(0, a.jsx)("span", {
          className: f.threadName,
          children: d.name
        }), c && null != u ? (0, a.jsx)("span", {
          className: f.parentName,
          children: "#".concat(u.name)
        }) : null]
      }), (0, m.Z)(d)]
    }), (0, a.jsx)(E, {
      channel: d
    })]
  })
})