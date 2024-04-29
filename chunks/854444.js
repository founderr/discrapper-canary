"use strict";
n.r(t), n.d(t, {
  computeFavoritesState: function() {
    return g
  },
  useFavoritesServerChannelList: function() {
    return b
  }
}), n("47120"), n("653041");
var i = n("470079"),
  o = n("392711"),
  l = n.n(o),
  u = n("524437"),
  a = n("317381"),
  s = n("853856"),
  d = n("846787"),
  r = n("924301"),
  E = n("601070"),
  c = n("569471"),
  _ = n("131704"),
  A = n("680089"),
  C = n("592125"),
  T = n("58468"),
  I = n("77498"),
  S = n("496675"),
  f = n("306680"),
  N = n("944486"),
  O = n("9156"),
  R = n("823379"),
  p = n("540126"),
  L = n("647086"),
  D = n("231338");
let h = [a.default, s.default, r.default, E.default, c.default, A.default, C.default, I.default, S.default, f.default, N.default, O.default];

function b() {
  let [e, t] = i.useState(() => g());
  return i.useEffect(() => {
    let e = l().throttle(() => t(g()), 100);
    return h.forEach(t => t.addChangeListener(e)), () => h.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function g() {
  let e = s.default.getFavoriteChannels(),
    t = O.default.isGuildCollapsed(L.FAVORITES_RAW_GUILD_ID),
    n = N.default.getChannelId(),
    i = C.default.getChannel(n),
    o = N.default.getVoiceChannelId(),
    a = [],
    r = {};
  for (let t in e) {
    let n = e[t],
      i = C.default.getChannel(n.id);
    if (null == i || n.type === u.FavoriteChannelType.CATEGORY) continue;
    let o = (0, d.createFavoritesChannelRecord)(e, n, i);
    if (null == n.parentId || !(n.parentId in e)) {
      a.push(o);
      continue
    }!(n.parentId in r) && (r[n.parentId] = []), r[n.parentId].push(o)
  }

  function c(n, u) {
    let {
      isCollapsed: a,
      isMuted: s
    } = u;
    return l()(n).map(n => {
      var d;
      if (!n.isPrivate() && !S.default.can(D.Permissions.VIEW_CHANNEL, n)) return null;
      let r = null != i && (i.id === n.id || o === n.id),
        c = null != i && i.isThread() && i.parent_id === n.id,
        A = null !== (d = r || c || !a ? E.default.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : E.default.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== d ? d : {},
        C = (0, p.computeThreadIds)(n, A, i, o, t),
        I = T.default.isCollapsed(n.id),
        N = O.default.isChannelMuted(n.guild_id, n.id),
        R = {
          id: n.id,
          record: n,
          category: u,
          position: e[n.id].order,
          threadIds: C,
          threadCount: l().size(C),
          isCollapsed: I,
          isMuted: N,
          isFirstVoiceChannel: !1,
          subtitle: (0, p.computeSubtitle)(n, I, !1)
        };
      return r || c || f.default.getMentionCount(n.id) > 0 ? R : t && N || a && (N || s || (0, _.isVoiceChannel)(n.type) || (0, _.isGuildReadableType)(n.type) && !1 === f.default.hasUnread(n.id)) ? null : R
    }).filter(R.isNotNullish).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let I = null,
    h = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => a,
      getShownChannelIds: () => a.map(e => e.id),
      getShownChannelAndThreadIds: () => a.map(e => e.id),
      isEmpty: () => 0 === a.length,
      get channelList() {
        return null == I && (I = c(a, this)), I
      }
    },
    b = l()(e).values().filter(e => e.type === u.FavoriteChannelType.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: i
      } = e, o = s.default.getCategoryRecord(n), l = null !== (t = r[n]) && void 0 !== t ? t : [], u = O.default.isChannelMuted(L.FAVORITES_RAW_GUILD_ID, n), a = A.default.isCollapsed(n), d = null;
      return {
        isMuted: u,
        isCollapsed: a,
        record: o,
        id: n,
        position: i,
        getChannelRecords: () => l,
        getShownChannelIds: () => l.map(e => e.id),
        getShownChannelAndThreadIds: () => l.map(e => e.id),
        isEmpty: () => 0 === l.length,
        get channelList() {
          return null == d && (d = c(l, this)), d
        }
      }
    }).value(),
    g = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: L.FAVORITES_RAW_GUILD_ID,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections: () => [0, 0, 0, h.channelList.length, ...b.map(e => Math.max(1, e.channelList.length))],
    isPlaceholderRow: (e, t) => !(e < p.SECTION_INDEX_FIRST_NAMED_CATEGORY) && 0 === t && 0 === b[e - p.SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length,
    getCategoryFromSection: e => e === p.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? h : b[e - p.SECTION_INDEX_FIRST_NAMED_CATEGORY],
    getNamedCategoryFromSection: e => b[e - p.SECTION_INDEX_FIRST_NAMED_CATEGORY],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getCommunitySection: () => g,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [h, ...b];
      for (let n = 0; n < t.length; n++)
        for (let i = 0; i < t[n].channelList.length; i++)
          if (t[n].channelList[i].id === e) return [{
            section: n + p.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
            row: i
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [h, ...b])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = C.default.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [h, ...b])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}