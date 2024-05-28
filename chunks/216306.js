"use strict";
E.r(t), E.d(t, {
  clearRecentChannels: function() {
    return h
  },
  getActiveAgoTimestamp: function() {
    return P
  },
  getFirstRouteFor: function() {
    return f
  },
  useChannelBrowserChannelCount: function() {
    return y
  },
  useChannelBrowserSections: function() {
    return p
  },
  useFilterCategoriesByQuery: function() {
    return R
  }
}), E("733860");
var s = E("470079"),
  _ = E("658722"),
  a = E.n(_),
  T = E("913527"),
  n = E.n(T),
  A = E("442837"),
  I = E("524437"),
  u = E("45114"),
  i = E("740504"),
  l = E("605236"),
  L = E("931261"),
  o = E("540126"),
  r = E("671098"),
  d = E("703656"),
  N = E("592125"),
  S = E("324067"),
  g = E("306680"),
  D = E("709054"),
  G = E("981631"),
  O = E("176505"),
  c = E("443063"),
  U = E("490897"),
  C = E("689938");

function M(e, t) {
  e.index = t
}

function R(e, t, E, _) {
  _ = _.toLowerCase();
  let T = (0, L.useCanSeeOnboardingHome)(e),
    n = s.useCallback((e, t) => !(T && e.channel.hasFlag(O.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== G.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || a()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [T]);
  return s.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return E[G.ChannelTypes.GUILD_CATEGORY].forEach(E => {
      let {
        channel: s
      } = E;
      "null" === s.id && (e.null = t.null.filter(e => n(e, _))), e[s.id] = t[s.id].filter(e => n(e, _))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === _.length || e[t.channel.id].length > 0), (0, i.default)(e._categories, e).forEach(M), e
  }, [t, E, n, _])
}

function f(e) {
  let t = e.getSections();
  if (t[o.SECTION_INDEX_COMMUNITY] > 0) switch (e.getCommunitySection().getRow(0)) {
    case c.ChannelListCommunityRow.GUILD_HOME:
      return O.StaticChannelRoute.GUILD_HOME;
    case c.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
      return O.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
    case c.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
      return O.StaticChannelRoute.MEMBER_APPLICATIONS
  }
  for (let s = o.SECTION_INDEX_UNCATEGORIZED_CHANNELS; s < e.voiceChannelsSectionNumber; s++)
    if (t[s] > 0) {
      var E;
      let t = null === (E = e.getChannelFromSectionRow(s, 0)) || void 0 === E ? void 0 : E.channel;
      if (null != t) return t.id
    } return null
}

function h(e, t) {
  let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, r.bulkClearRecents)(e, t), (0, u.bulkAck)(t.map(e => ({
    channelId: e,
    readStateType: U.ReadStateTypes.CHANNEL,
    messageId: g.default.lastMessageId(e)
  }))), null != E && (0, d.transitionTo)(G.Routes.CHANNEL(e, E))
}

function p(e, t, E, s) {
  let _ = (0, l.useIsDismissibleContentDismissed)(I.DismissibleContent.CHANNEL_BROWSER_NUX),
    a = (0, A.useStateFromStoresObject)([N.default], () => {
      let t = {},
        E = N.default.getMutableGuildChannelsForGuild(e);
      for (let e in E) {
        let {
          parent_id: _
        } = E[e];
        if (null != _) {
          var s;
          t[_] = (null !== (s = t[_]) && void 0 !== s ? s : 0) + 1
        }
      }
      return t
    }, [e]),
    T = t._categories.map(e => {
      let s = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : s.length,
        rowHeight: 0 === s.length ? 0 : E
      }
    });
  return !_ && null != s && T.unshift({
    rowCount: 1,
    rowHeight: s
  }), T
}

function y(e) {
  var t, E;
  let s = (0, A.useStateFromStores)([S.default], () => S.default.getCategories(e)),
    _ = s._categories.length,
    a = s._categories[s._categories.length - 1];
  if (null == a) return 0;
  let T = s[null !== (E = null === (t = a.channel) || void 0 === t ? void 0 : t.id) && void 0 !== E ? E : "null"];
  return null == T ? 0 : 0 === T.length ? a.index + 2 - _ : T[T.length - 1].index + 2 - _
}

function P(e) {
  var t;
  return C.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: n()(D.default.extractTimestamp(null !== (t = g.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}