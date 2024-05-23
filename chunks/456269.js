"use strict";
u.r(t), u.d(t, {
  GuildForumExperiment: function() {
    return x
  },
  getEnableForumPermissions: function() {
    return Y
  },
  getForumPostAuthor: function() {
    return et
  },
  useAppliedTags: function() {
    return X
  },
  useAutomaticForumSearch: function() {
    return em
  },
  useCanCreateForumChannel: function() {
    return V
  },
  useCanManageChannel: function() {
    return el
  },
  useCanSearchForumPosts: function() {
    return es
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
    return K
  },
  useFacepileUsers: function() {
    return q
  },
  useForumActiveThreadIds: function() {
    return eS
  },
  useForumPostAuthor: function() {
    return ee
  },
  useForumPostFirstMessageMarkup: function() {
    return en
  },
  useForumPostReadStates: function() {
    return ea
  },
  useForumSearchState: function() {
    return ec
  },
  useLastActiveTimestamp: function() {
    return z
  },
  useLoadForumUnreadCounts: function() {
    return W
  },
  useMessageCount: function() {
    return $
  },
  useMostUsedReaction: function() {
    return J
  },
  useSomeAppliedTags: function() {
    return B
  },
  useTypingUserIds: function() {
    return eu
  },
  useUnreadThreadsCountForParent: function() {
    return eg
  },
  useVisibleAppliedForumTags: function() {
    return ed
  },
  useVisibleForumTags: function() {
    return eo
  }
}), u("47120"), u("724458");
var n = u("470079"),
  l = u("392711"),
  r = u.n(l),
  a = u("683860"),
  i = u("442837"),
  o = u("570140"),
  d = u("45114"),
  s = u("339085"),
  f = u("987170"),
  c = u("200120"),
  m = u("937889"),
  g = u("739566"),
  S = u("601070"),
  T = u("344185"),
  E = u("723774"),
  h = u("144140"),
  _ = u("91159"),
  v = u("592125"),
  A = u("720202"),
  M = u("430824"),
  p = u("496675"),
  C = u("306680"),
  F = u("699516"),
  I = u("111583"),
  N = u("594174"),
  O = u("823379"),
  R = u("709054"),
  P = u("883429"),
  U = u("238349"),
  b = u("368844"),
  y = u("660189"),
  D = u("581036"),
  L = u("208970"),
  w = u("882252"),
  G = u("710352"),
  k = u("981631"),
  j = u("176505"),
  H = u("124368");
let x = (0, f.default)({
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
  return x.getCurrentConfig({
    guildId: e,
    location: "553713_2"
  }).enabled
}

function V(e) {
  return function(e) {
    let t = (0, i.useStateFromStores)([M.default], () => M.default.getGuild(e));
    return x.useExperiment({
      guildId: e,
      location: "553713_1"
    }, {
      autoTrackExposure: !1
    }).enabled || !!((null == t ? void 0 : t.hasFeature(k.GuildFeatures.COMMUNITY)) || (null == t ? void 0 : t.hasFeature(k.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)))
  }(e)
}

function W(e, t, u) {
  let l = (0, i.useStateFromStores)([T.default], () => T.default.hasLoaded(e.guild_id));
  n.useEffect(() => {
    if (!l) return;
    let n = U.default.getThreadIds(e.id, t, u),
      r = D.default.getThreadIdsMissingCounts(e.guild_id, n).filter(e => (0, w.canDisplayPostUnreadMessageCount)(e, [C.default])).slice(0, 180).map(e => ({
        threadId: e,
        ackMessageId: C.default.getTrackedAckMessageId(e)
      }));
    r.length > 0 && o.default.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: r
    })
  }, [e.id, e.guild_id, l, u, t])
}

function K(e) {
  return (0, i.useStateFromStores)([T.default, v.default], () => {
    let t = r()(T.default.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null === (t = v.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(j.ChannelFlags.PINNED)) === !0
    }).head();
    return v.default.getChannel(t)
  })
}
let Q = [];

function X(e) {
  let t = function(e) {
    let t = null == e ? void 0 : e.parent_id;
    return (0, i.useStateFromStoresObject)([v.default], () => {
      var e;
      let u = v.default.getChannel(t);
      return (null !== (e = null == u ? void 0 : u.availableTags) && void 0 !== e ? e : []).reduce((e, t) => ({
        ...e,
        [t.id]: t
      }), {})
    }, [t])
  }(e);
  return n.useMemo(() => {
    var u, n, l;
    return null !== (l = null == e ? void 0 : null === (n = e.appliedTags) || void 0 === n ? void 0 : null === (u = n.map(e => t[e])) || void 0 === u ? void 0 : u.filter(O.isNotNullish)) && void 0 !== l ? l : Q
  }, [t, null == e ? void 0 : e.appliedTags])
}

function B(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    u = X(e);
  return n.useMemo(() => [u.slice(0, t), Math.max(0, u.length - t)], [u, t])
}

function q(e, t) {
  let u = (0, i.useStateFromStoresArray)([N.default], () => t.map(e => N.default.getUser(e)).filter(O.isNotNullish));
  return n.useEffect(() => {
    u.forEach(t => {
      A.default.requestMember(e.guild_id, t.id)
    })
  }, []), u
}

function z(e, t) {
  let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G.ForumTimestampFormats.DURATION_AGO,
    l = n.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
    r = (0, _.useLastMessageTimestamp)(e),
    i = n.useMemo(() => (0, w.getForumTimestampFormatter)(t, u), [t, u]);
  return n.useMemo(() => t === a.ThreadSortOrder.CREATION_DATE ? (0, _.getTimestampString)(l, i) : (0, _.getTimestampString)(r, i), [r, t, l, i])
}

function J(e) {
  return n.useMemo(() => {
    var t;
    return r().maxBy(null !== (t = null == e ? void 0 : e.reactions) && void 0 !== t ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? void 0 : e.reactions])
}

function Z(e) {
  let t = null == e ? void 0 : e.defaultReactionEmoji,
    u = (0, i.useStateFromStores)([s.default], () => (null == t ? void 0 : t.emojiId) != null ? s.default.getUsableCustomEmojiById(t.emojiId) : null);
  return null == t ? null : null != t.emojiId && null != u ? {
    id: t.emojiId,
    name: u.name,
    animated: u.animated
  } : null != t.emojiName ? {
    id: t.emojiId,
    name: t.emojiName,
    animated: !1
  } : null
}

function $(e) {
  let t = (0, i.useStateFromStores)([h.default], () => {
      var t;
      return null !== (t = h.default.getCount(e.id)) && void 0 !== t ? t : 0
    }),
    u = (0, E.getMessageCountText)(t, e.id),
    n = (0, i.useStateFromStores)([C.default], () => (0, w.canDisplayPostUnreadMessageCount)(e.id, [C.default])),
    l = (0, i.useStateFromStores)([D.default], () => {
      if (!n) return null;
      let u = D.default.getCount(e.id);
      if (null == u || !(u > 0)) return "1+";
      {
        let e = Math.min(u, t);
        return e >= H.MAX_THREAD_UNREAD_MESSAGE_COUNT ? "".concat(H.MAX_THREAD_UNREAD_MESSAGE_COUNT, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== u,
    messageCountText: u,
    unreadCount: l
  }
}

function ee(e) {
  var t;
  let u = (0, i.useStateFromStores)([N.default], () => N.default.getUser(e.ownerId)),
    l = (0, i.useStateFromStores)([y.default], () => {
      var t;
      return null === (t = y.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage
    }),
    r = (0, g.useNullableUserAuthor)(null !== (t = null == l ? void 0 : l.author) && void 0 !== t ? t : u, e);
  return n.useEffect(() => {
    null != e.ownerId && A.default.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: u,
    author: r
  }
}

function et(e) {
  var t, u;
  let n = N.default.getUser(e.ownerId),
    l = null === (t = y.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage,
    r = (0, g.getUserAuthor)(null !== (u = null == l ? void 0 : l.author) && void 0 !== u ? u : n, e);
  return {
    user: n,
    author: r
  }
}

function eu(e) {
  return (0, i.useStateFromStoresArray)([I.default, N.default, F.default], () => {
    let t = N.default.getCurrentUser();
    return r()(I.default.getTypingUsers(e.id)).keys().filter(e => e !== (null == t ? void 0 : t.id)).reject(e => F.default.isBlocked(e)).map(e => N.default.getUser(e)).filter(O.isNotNullish).map(e => e.id).value()
  })
}

function en(e) {
  let {
    firstMessage: t,
    formatInline: u = !0,
    noStyleAndInteraction: l = !0
  } = e, r = (0, c.useShouldFilterKeywords)(), {
    hasSpoilerEmbeds: a,
    content: i
  } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, m.default)(t, {
    formatInline: u,
    noStyleAndInteraction: l,
    allowHeading: !0,
    allowList: !0,
    shouldFilterKeywords: r
  }) : {
    hasSpoilerEmbeds: !1,
    content: null
  }, [t, u, l, r]), o = (0, b.useFindFirstMediaProperties)(t, a), d = (0, b.useFirstMediaIsEmbed)(t, a);
  return {
    hasSpoilerEmbeds: a,
    content: i,
    firstMedia: o,
    firstMediaIsEmbed: d
  }
}

function el(e) {
  return (0, i.useStateFromStores)([p.default], () => p.default.can(k.Permissions.MANAGE_CHANNELS, e))
}
let er = {
  isNew: !1,
  hasUnreads: !1
};

function ea(e) {
  return (0, i.useStateFromStoresObject)([M.default, C.default], () => {
    var t;
    let u = M.default.getGuild(null !== (t = e.getGuildId()) && void 0 !== t ? t : k.EMPTY_STRING_SNOWFLAKE_ID);
    return null == u ? er : (0, w.getForumPostReadStates)(e, u, [C.default])
  })
}

function ei(e) {
  return n.useMemo(() => null == e ? "" : null == e.template ? "" : e.template.trim(), [e])
}

function eo(e) {
  let t = (0, i.useStateFromStores)([p.default], () => p.default.can(k.Permissions.MANAGE_THREADS, e));
  return n.useMemo(() => {
    var u;
    let n = [...null !== (u = null == e ? void 0 : e.availableTags) && void 0 !== u ? u : []];
    return !t && (n = n.filter(e => !e.moderated)), n
  }, [t, null == e ? void 0 : e.availableTags])
}

function ed(e, t) {
  let u = eo((0, i.useStateFromStores)([v.default], () => v.default.getChannel(null == e ? void 0 : e.parent_id), [e]));
  return n.useMemo(() => t.filter(e => u.includes(e)), [t, u])
}

function es(e) {
  return (0, i.useStateFromStores)([p.default], () => p.default.can(k.Permissions.READ_MESSAGE_HISTORY, e))
}

function ef(e) {
  return (0, i.useStateFromStores)([p.default], () => p.default.can(k.Permissions.READ_MESSAGE_HISTORY, e))
}

function ec(e) {
  let {
    channelId: t
  } = e;
  return (0, i.useStateFromStoresObject)([L.default], () => ({
    isSearchLoading: L.default.getSearchLoading(t),
    searchQuery: L.default.getSearchQuery(t),
    searchResults: L.default.getSearchResults(t)
  }))
}

function em(e, t) {
  let u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    {
      isSearchLoading: l,
      searchQuery: r
    } = ec({
      channelId: e.id
    }),
    a = es(e),
    i = n.useRef(null),
    o = n.useRef(new Set);
  n.useEffect(() => {
    if (null == r && null != i.current) {
      P.default.clearForumSearch(e.id), i.current = null;
      return
    }
    if (null == r || 0 === r.length || u) return;
    if (!a) {
      P.default.clearForumSearch(e.id);
      return
    }
    if (i.current === r && o.current === t || l) return;
    let n = setTimeout(async () => {
      i.current = r, o.current = t;
      try {
        await P.default.searchForumPosts(e.guild_id, e.id, r, t)
      } catch {}
    }, 350);
    return () => clearTimeout(n)
  }, [a, e.guild_id, e.id, u, l, r, t])
}

function eg(e, t) {
  return (0, i.useStateFromStores)([S.default, C.default, v.default], () => {
    let u = v.default.getChannel(t);
    if (!(null == u ? void 0 : u.isForumLikeChannel())) return 0;
    let n = S.default.getActiveJoinedUnreadThreadsForParent(e, t),
      l = S.default.getActiveUnjoinedUnreadThreadsForParent(e, t),
      r = C.default.ackMessageId(t),
      a = 0;
    if (null == r) return a;
    for (let e in n) {
      let t = n[e],
        u = C.default.lastMessageId(t.channel.id);
      null != u && u > r && a++
    }
    for (let e in l) {
      let t = l[e],
        u = C.default.lastMessageId(t.id);
      null != u && u > r && a++
    }
    return a
  })
}

function eS(e) {
  let {
    channel: t,
    sortOrder: u,
    tagFilter: l,
    shouldAutomaticallyAck: r
  } = e, a = (0, i.useStateFromStoresArray)([U.default], () => U.default.getThreadIds(t.id, u, l)), o = eg(t.guild_id, t.id), s = (0, i.useStateFromStores)([U.default], () => r && (o > 0 || U.default.getCanAckThreads()), [r, o]);
  return n.useEffect(() => {
    s && (0, d.ackChannel)(t)
  }, [t, s]), a
}