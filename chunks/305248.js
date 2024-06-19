n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(442837),
  o = n(570140),
  c = n(45114),
  u = n(404616),
  d = n(470623),
  E = n(344185),
  _ = n(488131),
  I = n(592125),
  T = n(823379),
  N = n(709054),
  m = n(124368),
  h = n(437667);

function C(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: l
  } = e, C = (0, r.Wu)([E.Z, I.Z], () => a()(E.Z.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return N.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return I.Z.getChannel(t)
  }).filter(T.lm).sort((e, t) => N.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), S = i.useCallback((e, t) => {
    (0, _.ok)(e, t, m.on.INBOX)
  }, []);
  return i.useEffect(() => {
    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === C.length && o.Z.wait(() => {
      (0, c.In)(t.channelId, !0), l(t.channelId)
    })
  }), (0, s.jsx)("div", {
    className: h.container,
    children: C.map(e => (0, s.jsx)(d.oL, {
      createStore: () => (0, d.NU)(n),
      children: (0, s.jsx)(u.ZP, {
        className: h.forumPost,
        threadId: e.id,
        goToThread: S
      })
    }, e.id))
  })
}