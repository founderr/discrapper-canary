"use strict";
n.r(t), n.d(t, {
  GuildForumExperiment: function() {
    return H
  },
  getEnableForumPermissions: function() {
    return Y
  },
  getForumPostAuthor: function() {
    return et
  },
  useAppliedTags: function() {
    return W
  },
  useAutomaticForumSearch: function() {
    return em
  },
  useCanCreateForumChannel: function() {
    return z
  },
  useCanManageChannel: function() {
    return el
  },
  useCanSearchForumPosts: function() {
    return ed
  },
  useCanViewArchivedPosts: function() {
    return ef
  },
  useChannelTemplate: function() {
    return ei
  },
  useDefaultReactionEmoji: function() {
    return Z
  },
  useExistingPin: function() {
    return B
  },
  useFacepileUsers: function() {
    return X
  },
  useForumActiveThreadIds: function() {
    return eS
  },
  useForumPostAuthor: function() {
    return ee
  },
  useForumPostFirstMessageMarkup: function() {
    return eu
  },
  useForumPostReadStates: function() {
    return ea
  },
  useForumSearchState: function() {
    return ec
  },
  useLastActiveTimestamp: function() {
    return q
  },
  useLoadForumUnreadCounts: function() {
    return K
  },
  useMessageCount: function() {
    return $
  },
  useMostUsedReaction: function() {
    return J
  },
  useSomeAppliedTags: function() {
    return Q
  },
  useTypingUserIds: function() {
    return en
  },
  useUnreadThreadsCountForParent: function() {
    return eg
  },
  useVisibleAppliedForumTags: function() {
    return es
  },
  useVisibleForumTags: function() {
    return eo
  }
}), n("47120"), n("724458");
var u = n("470079"),
  l = n("392711"),
  r = n.n(l),
  a = n("683860"),
  i = n("442837"),
  o = n("570140"),
  s = n("45114"),
  d = n("339085"),
  f = n("987170"),
  c = n("200120"),
  m = n("937889"),
  g = n("739566"),
  S = n("601070"),
  h = n("344185"),
  T = n("723774"),
  M = n("144140"),
  E = n("91159"),
  _ = n("592125"),
  p = n("720202"),
  C = n("430824"),
  v = n("496675"),
  A = n("306680"),
  F = n("699516"),
  I = n("111583"),
  N = n("594174"),
  b = n("823379"),
  y = n("709054"),
  O = n("883429"),
  x = n("238349"),
  R = n("368844"),
  L = n("660189"),
  P = n("581036"),
  U = n("208970"),
  j = n("882252"),
  w = n("710352"),
  D = n("981631"),
  G = n("176505"),
  k = n("124368");
let H = (0, f.default)({
  id: "2023-01_forums_non_community",
  label: "Forum non-community",
  kind: "guild",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: !0
    }
  }]
});

function Y(e) {
  return H.getCurrentConfig({
    guildId: e,
    location: "553713_2"
  }).enabled
}

function z(e) {
  return function(e) {
    let t = (0, i.useStateFromStores)([C.default], () => C.default.getGuild(e));
    return H.useExperiment({
      guildId: e,
      location: "553713_1"
    }, {
      autoTrackExposure: !1
    }).enabled || !!((null == t ? void 0 : t.hasFeature(D.GuildFeatures.COMMUNITY)) || (null == t ? void 0 : t.hasFeature(D.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)))
  }(e)
}

function K(e, t, n) {
  let l = (0, i.useStateFromStores)([h.default], () => h.default.hasLoaded(e.guild_id));
  u.useEffect(() => {
    if (!l) return;
    let u = x.default.getThreadIds(e.id, t, n),
      r = P.default.getThreadIdsMissingCounts(e.guild_id, u).filter(e => (0, j.canDisplayPostUnreadMessageCount)(e, [A.default])).slice(0, 180).map(e => ({
        threadId: e,
        ackMessageId: A.default.getTrackedAckMessageId(e)
      }));
    r.length > 0 && o.default.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: r
    })
  }, [e.id, e.guild_id, l, n, t])
}

function B(e) {
  return (0, i.useStateFromStores)([h.default, _.default], () => {
    let t = r()(h.default.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(G.ChannelFlags.PINNED)) === !0
    }).head();
    return _.default.getChannel(t)
  })
}
let V = [];

function W(e) {
  let t = function(e) {
    let t = null == e ? void 0 : e.parent_id;
    return (0, i.useStateFromStoresObject)([_.default], () => {
      var e;
      let n = _.default.getChannel(t);
      return (null !== (e = null == n ? void 0 : n.availableTags) && void 0 !== e ? e : []).reduce((e, t) => ({
        ...e,
        [t.id]: t
      }), {})
    }, [t])
  }(e);
  return u.useMemo(() => {
    var n, u, l;
    return null !== (l = null == e ? void 0 : null === (u = e.appliedTags) || void 0 === u ? void 0 : null === (n = u.map(e => t[e])) || void 0 === n ? void 0 : n.filter(b.isNotNullish)) && void 0 !== l ? l : V
  }, [t, null == e ? void 0 : e.appliedTags])
}

function Q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = W(e);
  return u.useMemo(() => [n.slice(0, t), Math.max(0, n.length - t)], [n, t])
}

function X(e, t) {
  let n = (0, i.useStateFromStoresArray)([N.default], () => t.map(e => N.default.getUser(e)).filter(b.isNotNullish));
  return u.useEffect(() => {
    n.forEach(t => {
      p.default.requestMember(e.guild_id, t.id)
    })
  }, []), n
}

function q(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.ForumTimestampFormats.DURATION_AGO,
    l = u.useMemo(() => y.default.extractTimestamp(e.id), [e.id]),
    r = (0, E.useLastMessageTimestamp)(e),
    i = u.useMemo(() => (0, j.getForumTimestampFormatter)(t, n), [t, n]);
  return u.useMemo(() => t === a.ThreadSortOrder.CREATION_DATE ? (0, E.getTimestampString)(l, i) : (0, E.getTimestampString)(r, i), [r, t, l, i])
}

function J(e) {
  return u.useMemo(() => {
    var t;
    return r().maxBy(null !== (t = null == e ? void 0 : e.reactions) && void 0 !== t ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? void 0 : e.reactions])
}

function Z(e) {
  let t = null == e ? void 0 : e.defaultReactionEmoji,
    n = (0, i.useStateFromStores)([d.default], () => (null == t ? void 0 : t.emojiId) != null ? d.default.getUsableCustomEmojiById(t.emojiId) : null);
  return null == t ? null : null != t.emojiId && null != n ? {
    id: t.emojiId,
    name: n.name,
    animated: n.animated
  } : null != t.emojiName ? {
    id: t.emojiId,
    name: t.emojiName,
    animated: !1
  } : null
}

function $(e) {
  let t = (0, i.useStateFromStores)([M.default], () => {
      var t;
      return null !== (t = M.default.getCount(e.id)) && void 0 !== t ? t : 0
    }),
    n = (0, T.getMessageCountText)(t, e.id),
    u = (0, i.useStateFromStores)([A.default], () => (0, j.canDisplayPostUnreadMessageCount)(e.id, [A.default])),
    l = (0, i.useStateFromStores)([P.default], () => {
      if (!u) return null;
      let n = P.default.getCount(e.id);
      if (null == n || !(n > 0)) return "1+";
      {
        let e = Math.min(n, t);
        return e >= k.MAX_THREAD_UNREAD_MESSAGE_COUNT ? "".concat(k.MAX_THREAD_UNREAD_MESSAGE_COUNT, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== n,
    messageCountText: n,
    unreadCount: l
  }
}

function ee(e) {
  var t;
  let n = (0, i.useStateFromStores)([N.default], () => N.default.getUser(e.ownerId)),
    l = (0, i.useStateFromStores)([L.default], () => {
      var t;
      return null === (t = L.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage
    }),
    r = (0, g.useNullableUserAuthor)(null !== (t = null == l ? void 0 : l.author) && void 0 !== t ? t : n, e);
  return u.useEffect(() => {
    null != e.ownerId && p.default.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: n,
    author: r
  }
}

function et(e) {
  var t, n;
  let u = N.default.getUser(e.ownerId),
    l = null === (t = L.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage,
    r = (0, g.getUserAuthor)(null !== (n = null == l ? void 0 : l.author) && void 0 !== n ? n : u, e);
  return {
    user: u,
    author: r
  }
}

function en(e) {
  return (0, i.useStateFromStoresArray)([I.default, N.default, F.default], () => {
    let t = N.default.getCurrentUser();
    return r()(I.default.getTypingUsers(e.id)).keys().filter(e => e !== (null == t ? void 0 : t.id)).reject(e => F.default.isBlocked(e)).map(e => N.default.getUser(e)).filter(b.isNotNullish).map(e => e.id).value()
  })
}

function eu(e) {
  let {
    firstMessage: t,
    formatInline: n = !0,
    noStyleAndInteraction: l = !0
  } = e, r = (0, c.useActiveKeywordFiltersCacheKey)(), {
    hasSpoilerEmbeds: a,
    content: i
  } = u.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, m.default)(t, {
    formatInline: n,
    noStyleAndInteraction: l,
    allowHeading: !0,
    allowList: !0,
    shouldFilterKeywords: null != r
  }) : {
    hasSpoilerEmbeds: !1,
    content: null
  }, [t, n, l, r]), o = (0, R.useFindFirstMediaProperties)(t, a), s = (0, R.useFirstMediaIsEmbed)(t, a);
  return {
    hasSpoilerEmbeds: a,
    content: i,
    firstMedia: o,
    firstMediaIsEmbed: s
  }
}

function el(e) {
  return (0, i.useStateFromStores)([v.default], () => v.default.can(D.Permissions.MANAGE_CHANNELS, e))
}
let er = {
  isNew: !1,
  hasUnreads: !1
};

function ea(e) {
  return (0, i.useStateFromStoresObject)([C.default, A.default], () => {
    var t;
    let n = C.default.getGuild(null !== (t = e.getGuildId()) && void 0 !== t ? t : D.EMPTY_STRING_SNOWFLAKE_ID);
    return null == n ? er : (0, j.getForumPostReadStates)(e, n, [A.default])
  })
}

function ei(e) {
  return u.useMemo(() => null == e ? "" : null == e.template ? "" : e.template.trim(), [e])
}

function eo(e) {
  let t = (0, i.useStateFromStores)([v.default], () => v.default.can(D.Permissions.MANAGE_THREADS, e));
  return u.useMemo(() => {
    var n;
    let u = [...null !== (n = null == e ? void 0 : e.availableTags) && void 0 !== n ? n : []];
    return !t && (u = u.filter(e => !e.moderated)), u
  }, [t, null == e ? void 0 : e.availableTags])
}

function es(e, t) {
  let n = eo((0, i.useStateFromStores)([_.default], () => _.default.getChannel(null == e ? void 0 : e.parent_id), [e]));
  return u.useMemo(() => t.filter(e => n.includes(e)), [t, n])
}

function ed(e) {
  return (0, i.useStateFromStores)([v.default], () => v.default.can(D.Permissions.READ_MESSAGE_HISTORY, e))
}

function ef(e) {
  return (0, i.useStateFromStores)([v.default], () => v.default.can(D.Permissions.READ_MESSAGE_HISTORY, e))
}

function ec(e) {
  let {
    channelId: t
  } = e;
  return (0, i.useStateFromStoresObject)([U.default], () => ({
    isSearchLoading: U.default.getSearchLoading(t),
    searchQuery: U.default.getSearchQuery(t),
    searchResults: U.default.getSearchResults(t)
  }))
}

function em(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    {
      isSearchLoading: l,
      searchQuery: r
    } = ec({
      channelId: e.id
    }),
    a = ed(e),
    i = u.useRef(null),
    o = u.useRef(new Set);
  u.useEffect(() => {
    if (null == r && null != i.current) {
      O.default.clearForumSearch(e.id), i.current = null;
      return
    }
    if (null == r || 0 === r.length || n) return;
    if (!a) {
      O.default.clearForumSearch(e.id);
      return
    }
    if (i.current === r && o.current === t || l) return;
    let u = setTimeout(async () => {
      i.current = r, o.current = t;
      try {
        await O.default.searchForumPosts(e.guild_id, e.id, r, t)
      } catch {}
    }, 350);
    return () => clearTimeout(u)
  }, [a, e.guild_id, e.id, n, l, r, t])
}

function eg(e, t) {
  return (0, i.useStateFromStores)([S.default, A.default, _.default], () => {
    let n = _.default.getChannel(t);
    if (!(null == n ? void 0 : n.isForumLikeChannel())) return 0;
    let u = S.default.getActiveJoinedUnreadThreadsForParent(e, t),
      l = S.default.getActiveUnjoinedUnreadThreadsForParent(e, t),
      r = A.default.ackMessageId(t),
      a = 0;
    if (null == r) return a;
    for (let e in u) {
      let t = u[e],
        n = A.default.lastMessageId(t.channel.id);
      null != n && n > r && a++
    }
    for (let e in l) {
      let t = l[e],
        n = A.default.lastMessageId(t.id);
      null != n && n > r && a++
    }
    return a
  })
}

function eS(e) {
  let {
    channel: t,
    sortOrder: n,
    tagFilter: l,
    shouldAutomaticallyAck: r
  } = e, a = (0, i.useStateFromStoresArray)([x.default], () => x.default.getThreadIds(t.id, n, l)), o = eg(t.guild_id, t.id), d = (0, i.useStateFromStores)([x.default], () => r && (o > 0 || x.default.getCanAckThreads()), [r, o]);
  return u.useEffect(() => {
    d && (0, s.ackChannel)(t)
  }, [t, d]), a
}