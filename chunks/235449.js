t.d(n, {
  FO: function() {
    return x
  },
  nA: function() {
    return _
  },
  qQ: function() {
    return v
  },
  r7: function() {
    return I
  }
}), t(47120);
var a = t(470079),
  s = t(392711),
  r = t.n(s),
  l = t(442837),
  i = t(883429),
  o = t(592125),
  c = t(496675),
  d = t(306680),
  u = t(823379),
  h = t(709054),
  m = t(344185),
  g = t(920303),
  f = t(569471),
  E = t(346479),
  T = t(91159),
  Z = t(231338);

function I() {
  a.useEffect(() => {
    (0, T.A_)()
  }, [])
}

function x(e) {
  let n = function(e) {
      let n = (0, l.Wu)([c.Z, m.Z, o.Z], () => r()(m.Z.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
        let {
          id: n
        } = e;
        return o.Z.getChannel(n)
      }).filter(u.lm).filter(e => c.Z.can(Z.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
      return a.useMemo(() => r()(n).sort((e, n) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(n))).reverse().value(), [n])
    }(e),
    [t, s] = (0, l.e7)([f.Z], () => r().partition(n, e => f.Z.hasJoined(e)), [n], l.pF);
  return {
    joinedThreadIds: t,
    unjoinedThreadIds: s
  }
}

function _(e) {
  let n = (0, l.Wu)([c.Z, m.Z, o.Z], () => r()(m.Z.getThreadsForGuild(e)).values().map(e => r().values(e)).flatten().map(e => {
    let {
      id: n
    } = e;
    return o.Z.getChannel(n)
  }).filter(u.lm).filter(e => c.Z.can(Z.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return a.useMemo(() => r()(n).sort((e, n) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(n))).reverse().value(), [n])
}

function v(e, n, t) {
  let {
    canLoadMore: s,
    loading: d,
    nextOffset: u,
    isInitialLoad: h
  } = (0, l.cj)([g.Z], () => ({
    loading: g.Z.isLoading(e.id, n, t),
    isInitialLoad: g.Z.isInitialLoad,
    canLoadMore: g.Z.canLoadMore,
    nextOffset: g.Z.nextOffset
  })), m = a.useCallback(() => {
    c.Z.can(Z.Pl.READ_MESSAGE_HISTORY, e) && E.Z.loadArchivedThreads(e.guild_id, e.id, n, t, u)
  }, [e, n, t, u]);
  return a.useEffect(() => {
    h && m()
  }, [e.id, n, t, h]), a.useEffect(() => {
    i.Z.resort(e.id)
  }, [e.id]), {
    threadIds: (0, l.Wu)([g.Z, o.Z, c.Z], () => r()(g.Z.getThreads(e.id, n, t)).filter(e => {
      let n = o.Z.getChannel(e);
      return null != n && c.Z.can(Z.Pl.VIEW_CHANNEL, n)
    }).value()),
    canLoadMore: s,
    loading: d || h,
    loadMore: m
  }
}