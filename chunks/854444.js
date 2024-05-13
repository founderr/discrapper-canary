"use strict";
n.r(t), n.d(t, {
  computeFavoritesState: function() {
    return b
  },
  useFavoritesServerChannelList: function() {
    return g
  }
}), n("47120"), n("653041");
var i = n("470079"),
  l = n("392711"),
  o = n.n(l),
  a = n("524437"),
  u = n("317381"),
  s = n("853856"),
  d = n("846787"),
  r = n("924301"),
  E = n("601070"),
  c = n("569471"),
  _ = n("131704"),
  A = n("680089"),
  C = n("592125"),
  T = n("58468"),
  S = n("77498"),
  f = n("496675"),
  I = n("306680"),
  O = n("944486"),
  N = n("9156"),
  p = n("823379"),
  R = n("540126"),
  L = n("647086"),
  D = n("231338");
let h = [u.default, s.default, r.default, E.default, c.default, A.default, C.default, S.default, f.default, I.default, O.default, N.default];

function g() {
  let [e, t] = i.useState(() => b());
  return i.useEffect(() => {
    let e = o().throttle(() => t(b()), 100);
    return h.forEach(t => t.addChangeListener(e)), () => h.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function b() {
  let e = s.default.getFavoriteChannels(),
    t = N.default.isGuildCollapsed(L.FAVORITES_RAW_GUILD_ID),
    n = O.default.getChannelId(),
    i = C.default.getChannel(n),
    l = O.default.getVoiceChannelId(),
    u = [],
    r = {};
  for (let t in e) {
    let n = e[t],
      i = C.default.getChannel(n.id);
    if (null == i || n.type === a.FavoriteChannelType.CATEGORY) continue;
    let l = (0, d.createFavoritesChannelRecord)(e, n, i);
    if (null == n.parentId || !(n.parentId in e)) {
      u.push(l);
      continue
    }!(n.parentId in r) && (r[n.parentId] = []), r[n.parentId].push(l)
  }

  function c(n, a) {
    let {
      isCollapsed: u,
      isMuted: s
    } = a;
    return o()(n).map(n => {
      var d;
      if (!n.isPrivate() && !f.default.can(D.Permissions.VIEW_CHANNEL, n)) return null;
      let r = null != i && (i.id === n.id || l === n.id),
        c = null != i && i.isThread() && i.parent_id === n.id,
        A = null !== (d = r || c || !u ? E.default.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : E.default.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== d ? d : {},
        C = (0, R.computeThreadIds)(n, A, i, l, t),
        S = T.default.isCollapsed(n.id),
        O = N.default.isChannelMuted(n.guild_id, n.id),
        p = {
          id: n.id,
          record: n,
          category: a,
          position: e[n.id].order,
          threadIds: C,
          threadCount: o().size(C),
          isCollapsed: S,
          isMuted: O,
          isFirstVoiceChannel: !1,
          subtitle: (0, R.computeSubtitle)(n, S, !1)
        };
      return r || c || I.default.getMentionCount(n.id) > 0 ? p : t && O || u && (O || s || (0, _.isVoiceChannel)(n.type) || (0, _.isGuildReadableType)(n.type) && !1 === I.default.hasUnread(n.id)) ? null : p
    }).filter(p.isNotNullish).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let S = null,
    h = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => u,
      getShownChannelIds: () => u.map(e => e.id),
      getShownChannelAndThreadIds: () => u.map(e => e.id),
      isEmpty: () => 0 === u.length,
      get channelList() {
        return null == S && (S = c(u, this)), S
      }
    },
    g = o()(e).values().filter(e => e.type === a.FavoriteChannelType.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: i
      } = e, l = s.default.getCategoryRecord(n), o = null !== (t = r[n]) && void 0 !== t ? t : [], a = N.default.isChannelMuted(L.FAVORITES_RAW_GUILD_ID, n), u = A.default.isCollapsed(n), d = null;
      return {
        isMuted: a,
        isCollapsed: u,
        record: l,
        id: n,
        position: i,
        getChannelRecords: () => o,
        getShownChannelIds: () => o.map(e => e.id),
        getShownChannelAndThreadIds: () => o.map(e => e.id),
        isEmpty: () => 0 === o.length,
        get channelList() {
          return null == d && (d = c(o, this)), d
        }
      }
    }).value(),
    b = {
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
    getSections: () => [0, 0, 0, h.channelList.length, ...g.map(e => Math.max(1, e.channelList.length))],
    isPlaceholderRow: (e, t) => !(e < R.SECTION_INDEX_FIRST_NAMED_CATEGORY) && 0 === t && 0 === g[e - R.SECTION_INDEX_FIRST_NAMED_CATEGORY].channelList.length,
    getCategoryFromSection: e => e === R.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? h : g[e - R.SECTION_INDEX_FIRST_NAMED_CATEGORY],
    getNamedCategoryFromSection: e => g[e - R.SECTION_INDEX_FIRST_NAMED_CATEGORY],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getCommunitySection: () => b,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [h, ...g];
      for (let n = 0; n < t.length; n++)
        for (let i = 0; i < t[n].channelList.length; i++)
          if (t[n].channelList[i].id === e) return [{
            section: n + R.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
            row: i
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [h, ...g])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = C.default.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [h, ...g])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}