t.d(n, {
  o: function() {
    return p
  },
  t: function() {
    return P
  }
}), t(47120), t(653041);
var i = t(470079),
  l = t(392711),
  o = t.n(l),
  r = t(524437),
  E = t(317381),
  u = t(853856),
  a = t(846787),
  s = t(924301),
  d = t(601070),
  _ = t(569471),
  c = t(131704),
  C = t(680089),
  A = t(592125),
  I = t(58468),
  S = t(77498),
  T = t(496675),
  L = t(306680),
  N = t(944486),
  O = t(9156),
  D = t(823379),
  f = t(540126),
  g = t(647086),
  h = t(231338);
let R = 12633 == t.j ? [E.ZP, u.Z, s.ZP, d.Z, _.Z, C.Z, A.Z, S.Z, T.Z, L.ZP, N.Z, O.ZP] : null;

function p() {
  let [e, n] = i.useState(() => P());
  return i.useEffect(() => {
    let e = o().throttle(() => n(P()), 100);
    return R.forEach(n => n.addChangeListener(e)), () => R.forEach(n => n.removeChangeListener(e))
  }, []), e
}

function P() {
  let e = u.Z.getFavoriteChannels(),
    n = O.ZP.isGuildCollapsed(g._),
    t = N.Z.getChannelId(),
    i = A.Z.getChannel(t),
    l = N.Z.getVoiceChannelId(),
    E = [],
    s = {};
  for (let n in e) {
    let t = e[n],
      i = A.Z.getChannel(t.id);
    if (null == i || t.type === r.Dd.CATEGORY) continue;
    let l = (0, a.r)(e, t, i);
    if (null == t.parentId || !(t.parentId in e)) {
      E.push(l);
      continue
    }!(t.parentId in s) && (s[t.parentId] = []), s[t.parentId].push(l)
  }

  function _(t, r) {
    let {
      isCollapsed: E,
      isMuted: u
    } = r;
    return o()(t).map(t => {
      var a;
      if (!t.isPrivate() && !T.Z.can(h.Pl.VIEW_CHANNEL, t)) return null;
      let s = null != i && (i.id === t.id || l === t.id),
        _ = null != i && i.isThread() && i.parent_id === t.id,
        C = null !== (a = s || _ || !E ? d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id) : d.Z.getActiveJoinedUnreadThreadsForParent(t.guild_id, t.id)) && void 0 !== a ? a : {},
        A = (0, f.zR)(t, C, i, l, n),
        S = I.Z.isCollapsed(t.id),
        N = O.ZP.isChannelMuted(t.guild_id, t.id),
        D = {
          id: t.id,
          record: t,
          category: r,
          position: e[t.id].order,
          threadIds: A,
          threadCount: o().size(A),
          isCollapsed: S,
          isMuted: N,
          isFirstVoiceChannel: !1,
          subtitle: (0, f.Bz)(t, S, !1)
        };
      return s || _ || L.ZP.getMentionCount(t.id) > 0 ? D : n && N || E && (N || u || (0, c.vd)(t.type) || (0, c.vc)(t.type) && !1 === L.ZP.hasUnread(t.id)) ? null : D
    }).filter(D.lm).sortBy(e => {
      let {
        record: n
      } = e;
      return n.isGuildVocal() ? n.position + 1e4 : n.position
    }).value()
  }
  let S = null,
    R = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => E,
      getShownChannelIds: () => E.map(e => e.id),
      getShownChannelAndThreadIds: () => E.map(e => e.id),
      isEmpty: () => 0 === E.length,
      get channelList() {
        return null == S && (S = _(E, this)), S
      }
    },
    p = o()(e).values().filter(e => e.type === r.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var n;
      let {
        id: t,
        order: i
      } = e, l = u.Z.getCategoryRecord(t), o = null !== (n = s[t]) && void 0 !== n ? n : [], r = O.ZP.isChannelMuted(g._, t), E = C.Z.isCollapsed(t), a = null;
      return {
        isMuted: r,
        isCollapsed: E,
        record: l,
        id: t,
        position: i,
        getChannelRecords: () => o,
        getShownChannelIds: () => o.map(e => e.id),
        getShownChannelAndThreadIds: () => o.map(e => e.id),
        isEmpty: () => 0 === o.length,
        get channelList() {
          return null == a && (a = _(o, this)), a
        }
      }
    }).value(),
    P = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: g._,
    hideMutedChannels: n,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections: () => [0, 0, 0, R.channelList.length, ...p.map(e => Math.max(1, e.channelList.length))],
    isPlaceholderRow: (e, n) => !(e < f.wF) && 0 === n && 0 === p[e - f.wF].channelList.length,
    getCategoryFromSection: e => e === f.wd ? R : p[e - f.wF],
    getNamedCategoryFromSection: e => p[e - f.wF],
    getChannelFromSectionRow(e, n) {
      let t = this.getCategoryFromSection(e);
      return null == t || null == t.channelList[n] ? null : {
        category: t,
        channel: t.channelList[n]
      }
    },
    getCommunitySection: () => P,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let n = [R, ...p];
      for (let t = 0; t < n.length; t++)
        for (let i = 0; i < n[t].channelList.length; i++)
          if (n[t].channelList[i].id === e) return [{
            section: t + f.wd,
            row: i
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let n of [R, ...p])
        for (let t of n.channelList)
          for (let n of (e(t.record), t.threadIds)) {
            let t = A.Z.getChannel(n);
            null != t && e(t)
          }
    },
    forEachChannel(e) {
      for (let n of [R, ...p])
        for (let t of n.getChannelRecords()) e(t)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}